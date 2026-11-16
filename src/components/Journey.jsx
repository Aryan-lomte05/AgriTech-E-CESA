import React, { useEffect, useRef, useState } from "react";

/* The scroll journey. A fixed canvas holds the world, chapters float above it,
   and a mono HUD reads out what you are looking at. Everything is drawn as a
   point cloud on a 2D canvas: no library, one pass per frame, density scaled
   down on small devices. Without JS or with reduced motion the chapters read
   as ordinary stacked sections (see html.static in index.css). */

const UNSTOP =
  "https://unstop.com/p/agri-tech-hackathon-2027-24-hours-to-hack-the-harvest-k-j-somaiya-college-of-engineering-kjsce-vidyavihar-1792152";

const CHAPTERS = [
  { plate: "PLATE 01", name: "THE FIELD", mid: "GROUND LEVEL · 1.6 M", sky: ["#f6e2b4", "#e9c98b"], cam: 1.7, scene: "field" },
  { plate: "PLATE 02", name: "FIVE PLOTS", mid: "NDVI · AERIAL SURVEY", sky: ["#cfe8bd", "#a8cf86"], cam: 62, scene: "field" },
  { plate: "PLATE 03", name: "THE BUILD", mid: "HARDWARE + SOFTWARE", sky: ["#d8eef4", "#aed8e4"], cam: 0, scene: "rig" },
  { plate: "PLATE 04", name: "IN THEIR HANDS", mid: "ADVISORY · MARATHI", sky: ["#e8f0d6", "#cfe3ae"], cam: 0, scene: "phone" },
  { plate: "PLATE 05", name: "LAST EDITION", mid: "REGISTRATIONS · 2026", sky: ["#e2e0f2", "#c2bee0"], cam: 0, scene: "net" },
  { plate: "PLATE 06", name: "THE PURSE", mid: "PURSE · INR", sky: ["#fbe9bd", "#f3cf7c"], cam: 0, scene: "purse" },
  { plate: "PLATE 07", name: "ROUND 1", mid: "SUBMISSION · OPEN", sky: ["#d9ead2", "#b2d4a8"], cam: 4, scene: "field" },
];

const PLOT_NAMES = [
  "Next-Gen Agri-Tech",
  "Agri-Market Access",
  "Farmer Empowerment",
  "Green Growth",
  "Open Innovation",
];
const RIGS = ["drone", "rover", "mast", "model", "app"];
const RIG_LABELS = ["Drone", "Rover", "Sensor mast", "ML model", "Advisory app"];

function daysLeft() {
  const end = new Date("2026-12-15T23:59:00+05:30").getTime();
  return Math.max(0, Math.floor((end - Date.now()) / 86400000));
}

export default function Journey() {
  const canvasRef = useRef(null);
  const hudPlate = useRef(null);
  const hudName = useRef(null);
  const hudMid = useRef(null);
  const hudPct = useRef(null);
  const cueRef = useRef(null);
  const spaceRef = useRef(null);
  const chRefs = useRef([]);
  const railRefs = useRef([]);
  const st = useRef({ ch: 0, cam: 1.7, sky: ["#f6e2b4", "#e9c98b"], rig: 0, plot: -1, time: 0 });

  const [rig, setRig] = useState(0);
  const [plot, setPlot] = useState(-1);
  const [days] = useState(daysLeft);

  useEffect(() => { st.current.rig = rig; }, [rig]);
  useEffect(() => { st.current.plot = plot; }, [plot]);

  useEffect(() => {
    const root = document.documentElement;
    const canvas = canvasRef.current;
    const ctx = canvas && canvas.getContext ? canvas.getContext("2d") : null;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!ctx || reduce) {
      root.classList.add("static");
      return () => root.classList.remove("static");
    }

    const small = window.matchMedia("(max-width: 760px)").matches;
    const DENSITY = small ? 0.55 : 1;
    let W = 0, H = 0, raf = 0, alive = true;

    function size() {
      const dpr = Math.min(window.devicePixelRatio || 1, small ? 1.3 : 1.6);
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const rnd = (i) => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
    const lerp = (a, b, t) => a + (b - a) * t;
    const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
    function mixHex(h1, h2, t) {
      const a = hex(h1), b = hex(h2);
      return `rgb(${Math.round(lerp(a[0], b[0], t))},${Math.round(lerp(a[1], b[1], t))},${Math.round(lerp(a[2], b[2], t))})`;
    }

    // One cane field, grouped into 13-unit plots with tracks between them.
    const PLANTS = [];
    {
      const n = Math.round(2600 * DENSITY);
      for (let i = 0; i < n; i++) {
        const x = (rnd(i) - 0.5) * 150;
        const z = 2 + rnd(i + 7919) * 128;
        const gx = ((x % 13) + 13) % 13, gz = ((z % 13) + 13) % 13;
        if (gx < 1.1 || gz < 1.1) continue;
        const plotId = Math.floor(x / 13) * 7 + Math.floor(z / 13) * 13;
        PLANTS.push({
          x, z,
          h: 1.5 + rnd(i + 104729) * 1.5,
          v: rnd(Math.abs(plotId) + 3301),
          p: ((Math.abs(plotId) % 5) + 5) % 5,
          ph: rnd(i + 55543) * 6.283,
        });
      }
      PLANTS.sort((a, b) => b.z - a.z);
    }

    const RAMP = [[203, 56, 36], [245, 153, 38], [250, 219, 77], [143, 199, 64], [23, 127, 61]];
    function ramp(t) {
      t = Math.max(0, Math.min(0.999, t)) * 4;
      const i = Math.floor(t), f = t - i, a = RAMP[i], b = RAMP[i + 1];
      return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f];
    }
    const THEME_RGB = [[28, 107, 60], [180, 90, 34], [11, 143, 166], [59, 154, 77], [161, 42, 98]];
    const dot = (x, y, r, c, a) => {
      ctx.fillStyle = `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a})`;
      ctx.fillRect(x - r / 2, y - r / 2, r, r);
    };

    function drawField(camH, aerial) {
      const horizon = H * (aerial ? 0.16 : 0.46);
      const fov = H * 0.9, cx = W / 2, s0 = st.current;
      for (let i = 0; i < PLANTS.length; i++) {
        const p = PLANTS[i];
        if (p.z < 0.4) continue;
        const s = fov / p.z;
        const sx = cx + p.x * s;
        if (sx < -40 || sx > W + 40) continue;
        const baseY = horizon + camH * s;
        if (baseY < horizon - 10 || baseY > H + 40) continue;
        const topY = horizon + (camH - p.h) * s;
        const fog = Math.min(1, Math.max(0, (p.z - 25) / 95));

        let col;
        if (aerial) {
          const hot = s0.plot >= 0 && p.p === s0.plot;
          const base = hot ? THEME_RGB[p.p] : ramp(p.v);
          const dim = hot ? 1 : s0.plot >= 0 ? 0.42 : 1;
          col = [base[0] * dim, base[1] * dim, base[2] * dim];
          if (!hot && s0.plot >= 0) {
            col = [lerp(col[0], 200, 0.35), lerp(col[1], 205, 0.35), lerp(col[2], 170, 0.35)];
          }
        } else {
          const g = 0.2 + p.v * 0.3;
          col = [70 + p.v * 60, 110 + g * 180, 40 + p.v * 44];
        }
        col = [lerp(col[0], 232, fog * 0.8), lerp(col[1], 238, fog * 0.8), lerp(col[2], 210, fog * 0.8)];
        ctx.strokeStyle = `rgb(${col[0] | 0},${col[1] | 0},${col[2] | 0})`;

        const sway = Math.sin(s0.time * 1.1 + p.ph) * (aerial ? 0.6 : 3.2);
        const w = Math.max(0.7, Math.min(5, s * 0.06));
        ctx.lineWidth = w;
        ctx.beginPath();
        ctx.moveTo(sx, baseY);
        ctx.lineTo(sx + sway, topY);
        ctx.stroke();
        if (!aerial && s > 9) {
          const la = Math.max(3, s * 0.1);
          ctx.lineWidth = Math.max(0.6, w * 0.6);
          ctx.beginPath();
          ctx.moveTo(sx + sway * 0.6, lerp(baseY, topY, 0.55));
          ctx.lineTo(sx + sway * 0.6 - la, lerp(baseY, topY, 0.42));
          ctx.moveTo(sx + sway * 0.6, lerp(baseY, topY, 0.72));
          ctx.lineTo(sx + sway * 0.6 + la, lerp(baseY, topY, 0.6));
          ctx.stroke();
        }
      }
    }

    function drawRig() {
      const wide = W > 900;
      const cx = W * (wide ? 0.72 : 0.5), cy = H * (wide ? 0.5 : 0.3);
      const S = Math.min(W, H) * (wide ? 0.3 : 0.24);
      const kind = RIGS[st.current.rig] || "drone";
      const n = Math.round(1700 * DENSITY);
      const t = st.current.time;
      for (let i = 0; i < n; i++) {
        const u = i / n, a = rnd(i) * 6.283, rr = rnd(i + 11);
        let x = 0, y = 0, col = [28, 107, 60], al = 0.8;
        if (kind === "drone") {
          if (u < 0.52) {
            const arm = Math.floor((u * 4) / 0.52) % 4;
            const ax = (arm === 0 || arm === 3 ? -1 : 1) * S * 0.72;
            const ay = (arm < 2 ? -1 : 1) * S * 0.34;
            const rad = S * 0.3 * Math.sqrt(rr);
            x = cx + ax + Math.cos(a + t * 7 + arm) * rad;
            y = cy + ay + Math.sin(a + t * 7 + arm) * rad * 0.3;
            col = [11, 143, 166]; al = 0.35 + rr * 0.3;
          } else if (u < 0.86) {
            x = cx + (rnd(i + 3) - 0.5) * S * 0.95;
            y = cy + (rnd(i + 4) - 0.5) * S * 0.3;
          } else {
            const d = rnd(i + 5);
            x = cx + (rnd(i + 6) - 0.5) * S * 1.5 * d;
            y = cy + S * 0.25 + d * S * 0.95;
            col = [243, 178, 31]; al = 0.3 + (1 - d) * 0.4;
          }
        } else if (kind === "rover") {
          if (u < 0.3) {
            const wh = u < 0.15 ? -1 : 1;
            const wr = S * 0.26 * (0.72 + rr * 0.28);
            x = cx + wh * S * 0.6 + Math.cos(a + t * 2.4 * wh) * wr;
            y = cy + S * 0.44 + Math.sin(a + t * 2.4 * wh) * wr;
            col = [110, 65, 29];
          } else if (u < 0.74) {
            x = cx + (rnd(i + 3) - 0.5) * S * 1.5;
            y = cy + (rnd(i + 4) - 0.5) * S * 0.46;
          } else {
            const q = rnd(i + 8);
            x = cx + S * 0.72 + q * S * 0.75;
            y = cy + S * 0.1 + (rnd(i + 9) - 0.5) * q * S * 0.85;
            col = [11, 143, 166]; al = 0.25 + (1 - q) * 0.45;
          }
        } else if (kind === "mast") {
          if (u < 0.44) {
            x = cx + (rnd(i + 3) - 0.5) * S * 0.12;
            y = cy + S * 0.75 - rnd(i + 4) * S * 1.6;
            col = [110, 65, 29];
          } else if (u < 0.62) {
            x = cx + (rnd(i + 3) - 0.3) * S * 0.8;
            y = cy - S * 0.78 + (rnd(i + 4) - 0.5) * S * 0.12;
            col = [11, 143, 166];
          } else {
            const ring = Math.floor(rnd(i + 2) * 3);
            const prog = (t * 0.55 + ring * 0.33) % 1;
            const R = S * (0.25 + prog * 1.15);
            x = cx + Math.cos(a) * R;
            y = cy - S * 0.7 + Math.sin(a) * R * 0.3;
            col = [243, 178, 31]; al = 0.55 * (1 - prog);
          }
        } else if (kind === "model") {
          const LY = [6, 9, 9, 3], gapX = S * 0.5, gapY = S * 0.17;
          if (u < 0.64) {
            const li = Math.floor(rnd(i + 21) * 3);
            const nA = Math.floor(rnd(i + 22) * LY[li]);
            const nB = Math.floor(rnd(i + 23) * LY[li + 1]);
            const q = rnd(i + 24);
            const xA = cx + (li - 1.5) * gapX, xB = cx + (li - 0.5) * gapX;
            const yA = cy + (nA - (LY[li] - 1) / 2) * gapY;
            const yB = cy + (nB - (LY[li + 1] - 1) / 2) * gapY;
            x = lerp(xA, xB, q); y = lerp(yA, yB, q);
            const pulse = (t * 0.4 + li * 0.18) % 1;
            const near = 1 - Math.min(1, Math.abs(q - pulse) * 7);
            col = near > 0 ? [243, 178, 31] : [11, 143, 166];
            al = 0.14 + Math.max(0, near) * 0.62;
          } else {
            const lj = Math.floor(rnd(i + 31) * 4);
            const nj = Math.floor(rnd(i + 32) * LY[lj]);
            const rj = Math.sqrt(rnd(i + 33)) * S * 0.052;
            const aj = rnd(i + 34) * 6.283;
            x = cx + (lj - 1.5) * gapX + Math.cos(aj) * rj;
            y = cy + (nj - (LY[lj] - 1) / 2) * gapY + Math.sin(aj) * rj;
            col = lj === 3 ? [28, 107, 60] : [11, 143, 166];
            al = 0.82;
          }
        } else {
          const pw = S * 0.6, phh = S * 1.26;
          const lx = cx - pw / 2, ty = cy - phh / 2;
          if (u < 0.3) {
            const per = rnd(i + 41), edge = Math.floor(rnd(i + 42) * 4);
            if (edge === 0) { x = lx + per * pw; y = ty; }
            else if (edge === 1) { x = lx + pw; y = ty + per * phh; }
            else if (edge === 2) { x = lx + per * pw; y = ty + phh; }
            else { x = lx; y = ty + per * phh; }
            al = 0.85;
          } else if (u < 0.44) {
            x = lx + rnd(i + 43) * pw; y = ty + phh * 0.09 + rnd(i + 44) * phh * 0.055; al = 0.62;
          } else if (u < 0.7) {
            const qq = rnd(i + 45);
            x = lx + pw * 0.1 + qq * pw * 0.8;
            const wv = Math.sin(qq * 7 + t * 0.8) * 0.5 + Math.sin(qq * 3.1 + 1.2) * 0.5;
            y = ty + phh * 0.36 + wv * phh * 0.085 + (rnd(i + 46) - 0.5) * 3;
            col = [243, 178, 31]; al = 0.82;
          } else {
            const rw = Math.floor(rnd(i + 47) * 3);
            x = lx + pw * 0.1 + rnd(i + 48) * pw * 0.78;
            y = ty + phh * 0.6 + rw * phh * 0.11 + (rnd(i + 49) - 0.5) * 4;
            col = [11, 143, 166]; al = 0.5;
          }
        }
        dot(x, y, 2.1, col, al);
      }
      if (kind === "drone" || kind === "rover" || kind === "mast") {
        for (let j = 0; j < Math.round(420 * DENSITY); j++) {
          dot(cx + (rnd(j + 900) - 0.5) * S * 3.4, cy + S * (kind === "mast" ? 0.8 : 0.66) + rnd(j + 901) * S * 0.16, 2.1, [150, 110, 60], 0.5);
        }
      }
    }

    // A farmer holding a phone, the advisory scrolling under their thumb.
    function drawPhone() {
      const wide = W > 900;
      const cx = W * (wide ? 0.72 : 0.5), cy = H * (wide ? 0.5 : 0.32);
      const S = Math.min(W, H) * (wide ? 0.32 : 0.26);
      const t = st.current.time;
      const pw = S * 0.78, ph = S * 1.62;
      const lx = cx - pw / 2, ty = cy - ph / 2;
      const n = Math.round(2000 * DENSITY);

      for (let i = 0; i < n; i++) {
        const u = i / n;
        let x = 0, y = 0, col = [28, 107, 60], al = 0.8;
        if (u < 0.17) {                                    // handset shell
          const per = rnd(i + 41), edge = Math.floor(rnd(i + 42) * 4);
          if (edge === 0) { x = lx + per * pw; y = ty; }
          else if (edge === 1) { x = lx + pw; y = ty + per * ph; }
          else if (edge === 2) { x = lx + per * pw; y = ty + ph; }
          else { x = lx; y = ty + per * ph; }
          al = 0.9;
        } else if (u < 0.26) {                             // status + title bar
          x = lx + rnd(i + 43) * pw;
          y = ty + ph * 0.07 + rnd(i + 44) * ph * 0.05;
          al = 0.6;
        } else if (u < 0.46) {                             // a live reading, scrolling
          const qq = rnd(i + 45);
          x = lx + pw * 0.1 + qq * pw * 0.8;
          const wv = Math.sin(qq * 6.5 + t * 0.9) * 0.5 + Math.sin(qq * 3.1 + 1.2) * 0.5;
          y = ty + ph * 0.26 + wv * ph * 0.06 + (rnd(i + 46) - 0.5) * 3;
          col = [243, 178, 31]; al = 0.85;
        } else if (u < 0.78) {                             // advisory rows drifting up
          const rowSeed = rnd(i + 47);
          const row = Math.floor(rowSeed * 5);
          const drift = ((t * 0.08 + row * 0.2) % 1);
          x = lx + pw * 0.09 + rnd(i + 48) * pw * (0.5 + rnd(i + 52) * 0.33);
          y = ty + ph * 0.92 - drift * ph * 0.48 + (rnd(i + 49) - 0.5) * 3;
          if (y < ty + ph * 0.4) { al = 0; }
          col = row % 2 === 0 ? [11, 143, 166] : [28, 107, 60];
          al = al === 0 ? 0 : 0.26 + drift * 0.5;
        } else {                                           // the hand holding it
          const q = rnd(i + 60);
          const finger = Math.floor(rnd(i + 61) * 4);
          const fy = ty + ph * (0.52 + finger * 0.1);
          x = lx - pw * 0.06 + Math.cos(q * 3.14) * pw * 0.2 * q;
          y = fy + Math.sin(q * 2.2) * ph * 0.03 + (rnd(i + 62) - 0.5) * 4;
          col = [150, 110, 60]; al = 0.45;
        }
        if (al > 0) dot(x, y, 2.1, col, al);
      }

      // Signal arriving from a mast off in the field
      const mx = W * (wide ? 0.22 : 0.16), my = cy + S * 0.2;
      for (let k = 0; k < Math.round(260 * DENSITY); k++) {
        const q = rnd(k + 300);
        const prog = (t * 0.3 + q) % 1;
        const px = lerp(mx, lx, prog);
        const py = lerp(my, ty + ph * 0.3, prog) - Math.sin(prog * Math.PI) * S * 0.35;
        dot(px, py, 2, [243, 178, 31], 0.2 + Math.sin(prog * Math.PI) * 0.5);
      }
      for (let m = 0; m < Math.round(180 * DENSITY); m++) {
        dot(mx + (rnd(m + 400) - 0.5) * S * 0.08, my + S * 0.5 - rnd(m + 401) * S * 1.1, 2.1, [110, 65, 29], 0.65);
      }
    }

    function drawNet() {
      const wide = W > 900;
      const cx = W * (wide ? 0.7 : 0.5), cy = H * (wide ? 0.48 : 0.3);
      const S = Math.min(W, H) * 0.34, t = st.current.time, arms = 11;
      for (let a = 0; a < arms; a++) {
        const ang = (a / arms) * 6.283 + 0.4 + Math.sin(t * 0.12 + a) * 0.04;
        const len = S * (0.75 + rnd(a + 51) * 0.6);
        const bend = (rnd(a + 71) - 0.5) * 1.1;
        const steps = Math.round(60 * DENSITY);
        const col = ramp(rnd(a + 17));
        for (let s = 0; s <= steps; s++) {
          const u = s / steps, r = u * len, th = ang + bend * u * u;
          dot(cx + Math.cos(th) * r, cy + Math.sin(th) * r * 0.62, 2, col, 0.5 + u * 0.3);
        }
        const tx = cx + Math.cos(ang + bend) * len, tyy = cy + Math.sin(ang + bend) * len * 0.62;
        for (let k = 0; k < Math.round(90 * DENSITY); k++) {
          const rr2 = Math.sqrt(rnd(k + a * 31)) * S * 0.12, aa = rnd(k + a * 57) * 6.283;
          dot(tx + Math.cos(aa) * rr2, tyy + Math.sin(aa) * rr2, 2, col, 0.75);
        }
      }
      for (let h = 0; h < Math.round(520 * DENSITY); h++) {
        const hr = Math.sqrt(rnd(h + 7)) * S * 0.17, ha = rnd(h + 8) * 6.283;
        dot(cx + Math.cos(ha) * hr, cy + Math.sin(ha) * hr, 2.2, [183, 32, 46], 0.85);
      }
    }

    function drawPurse() {
      const vals = [150, 120, 80], baseY = H * 0.74, S = Math.min(W, H);
      const colW = Math.min(W * 0.2, 170);
      const startX = W * 0.5 - (3 * colW * 1.25) / 2 + colW * 0.6;
      const cols = [[243, 178, 31], [59, 154, 77], [28, 107, 60]];
      for (let c = 0; c < 3; c++) {
        const hgt = (vals[c] / 150) * S * 0.46;
        const x0 = startX + c * colW * 1.25;
        const n = Math.round(620 * DENSITY * (vals[c] / 150));
        for (let i = 0; i < n; i++) {
          const px = x0 + (rnd(i + c * 991) - 0.5) * colW;
          const ph = rnd(i + c * 313);
          const wob = Math.sin(st.current.time * 0.9 + ph * 6 + c) * 2;
          dot(px + wob, baseY - ph * hgt, 2.3, cols[c], 0.45 + ph * 0.45);
        }
      }
      for (let b = 0; b < Math.round(300 * DENSITY); b++) {
        dot(startX - colW + rnd(b + 3) * colW * 4.2, baseY + rnd(b + 4) * 7, 2, [150, 110, 60], 0.55);
      }
    }

    function frame(ms) {
      if (!alive) return;
      st.current.time = ms / 1000;
      if (!root.classList.contains("past")) {
        const g = ctx.createLinearGradient(0, 0, 0, H);
        g.addColorStop(0, st.current.sky[0]);
        g.addColorStop(1, st.current.sky[1]);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
        const sc = CHAPTERS[st.current.ch].scene;
        if (sc === "field") drawField(st.current.cam, st.current.cam > 20);
        else if (sc === "rig") drawRig();
        else if (sc === "phone") drawPhone();
        else if (sc === "net") drawNet();
        else drawPurse();
      }
      raf = requestAnimationFrame(frame);
    }

    function onScroll() {
      const space = spaceRef.current;
      if (!space) return;
      const total = space.offsetHeight - window.innerHeight;
      const y = window.scrollY;
      const past = y >= total;
      root.classList.toggle("past", past);
      if (cueRef.current) cueRef.current.style.opacity = y > 60 ? "0" : "1";
      if (past) return;

      const p = Math.max(0, Math.min(0.9999, y / Math.max(1, total)));
      const raw = p * CHAPTERS.length;
      const idx = Math.min(CHAPTERS.length - 1, Math.floor(raw));
      const local = raw - idx;
      st.current.ch = idx;

      const cur = CHAPTERS[idx];
      const nxt = CHAPTERS[Math.min(CHAPTERS.length - 1, idx + 1)];
      const blend = local < 0.65 ? 0 : (local - 0.65) / 0.35;
      st.current.cam = cur.scene === "field" && nxt.scene === "field" ? lerp(cur.cam, nxt.cam, blend) : cur.cam;
      st.current.sky = [mixHex(cur.sky[0], nxt.sky[0], blend), mixHex(cur.sky[1], nxt.sky[1], blend)];

      for (let i = 0; i < chRefs.current.length; i++) {
        const el = chRefs.current[i];
        if (el) el.classList.toggle("on", i === idx && local < 0.82);
        const rb = railRefs.current[i];
        if (rb) rb.classList.toggle("on", i === idx);
      }
      if (hudPlate.current) hudPlate.current.textContent = cur.plate;
      if (hudName.current) hudName.current.textContent = cur.name;
      if (hudMid.current) hudMid.current.textContent = cur.scene === "field" && st.current.cam > 20 ? "NDVI · AERIAL SURVEY" : cur.mid;
      if (hudPct.current) hudPct.current.textContent = ("00" + Math.round(p * 100)).slice(-3) + " / 100";
    }

    const onResize = () => { size(); onScroll(); };
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    size();
    onScroll();
    raf = requestAnimationFrame(frame);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      root.classList.remove("past");
    };
  }, []);

  const goTo = (i) => window.scrollTo({ top: (i + 0.35) * window.innerHeight, behavior: "smooth" });

  return (
    <>
      <canvas id="world" ref={canvasRef} aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <div className="chapters">
        <section className="ch on" ref={(el) => (chRefs.current[0] = el)}>
          <div className="wrap">
            <div className="copy">
              <p className="eyebrow">Plate 01 &middot; The field</p>
              <h1>24 hours.<br />One real farm problem.</h1>
              <p className="lead">
                A national-level offline sprint at <strong>K. J. Somaiya School of Engineering</strong>, Mumbai.
                Software and hardware both welcome &mdash; build the thing that actually goes out into the field.
              </p>
              <div className="readout"><b>24</b><span>hours on the clock<br />22&ndash;23 January 2027</span></div>
              <div className="cta">
                <a className="btn gold" href={UNSTOP} target="_blank" rel="noopener noreferrer">Register free on Unstop</a>
                <a className="btn ghost" href="#themes">See the themes</a>
              </div>
            </div>
          </div>
        </section>

        <section className="ch" ref={(el) => (chRefs.current[1] = el)}>
          <div className="wrap">
            <div className="copy">
              <p className="eyebrow">Plate 02 &middot; Five plots</p>
              <h2>Pick your ground.</h2>
              <p className="lead">Four themes are marked out for you. The fifth is open ground &mdash; bring your own idea, as long as it serves agriculture.</p>
              <div className="tabs" onMouseLeave={() => setPlot(-1)}>
                {PLOT_NAMES.map((nm, i) => (
                  <button key={nm} type="button" aria-pressed={plot === i}
                    onMouseEnter={() => setPlot(i)} onFocus={() => setPlot(i)} onClick={() => setPlot(i)}>
                    {nm}
                  </button>
                ))}
              </div>
              <p className="hint">Hover a theme to light its plot</p>
              <div className="readout"><b>5</b><span>{plot < 0 ? "themes · one open track" : PLOT_NAMES[plot]}</span></div>
            </div>
          </div>
        </section>

        <section className="ch" ref={(el) => (chRefs.current[2] = el)}>
          <div className="wrap">
            <div className="copy">
              <p className="eyebrow">Plate 03 &middot; The build</p>
              <h2>Hardware, software, or both.</h2>
              <p className="lead">
                A rover that sprays with precision. A model that reads crop stress off a photo. A sensor mast that
                phones home from a field with no signal. <strong>Both kinds are judged on the same floor.</strong>
              </p>
              <div className="tabs">
                {RIG_LABELS.map((nm, i) => (
                  <button key={nm} type="button" aria-pressed={rig === i} onClick={() => setRig(i)}>{nm}</button>
                ))}
              </div>
              <p className="hint">First three are hardware &middot; last two are software</p>
              <div className="readout"><b>3&ndash;4</b><span>members per team<br />cross-college teams allowed</span></div>
            </div>
          </div>
        </section>

        <section className="ch" ref={(el) => (chRefs.current[3] = el)}>
          <div className="wrap">
            <div className="copy">
              <p className="eyebrow">Plate 04 &middot; In their hands</p>
              <h2>It has to work on his phone.</h2>
              <p className="lead">
                Whatever you build ends up here &mdash; a farmer, a cheap Android, and a patchy signal. Your Round 1
                video is judged the same way: <strong>explain it as if you were pitching to someone who has never
                seen your product.</strong>
              </p>
              <div className="readout"><b>5&ndash;7</b><span>minute pitch video<br />unlisted on YouTube</span></div>
            </div>
          </div>
        </section>

        <section className="ch" ref={(el) => (chRefs.current[4] = el)}>
          <div className="wrap">
            <div className="copy">
              <p className="eyebrow">Plate 05 &middot; Last edition</p>
              <h2>1,772 came last time.</h2>
              <p className="lead">
                <strong>Team Snack Overflow</strong> from D. J. Sanghvi took first place with an automated
                tractor-mounted sprinkler. The pool has grown from &#8377;2,00,000 to &#8377;3,50,000 since.
              </p>
              <div className="readout"><b>1,772</b><span>registrations in 2026</span></div>
            </div>
          </div>
        </section>

        <section className="ch" ref={(el) => (chRefs.current[5] = el)}>
          <div className="wrap">
            <div className="copy">
              <p className="eyebrow">Plate 06 &middot; The purse</p>
              <h2>&#8377;3,50,000, split three ways.</h2>
              <p className="lead">
                Winner &#8377;1,50,000. First runner-up &#8377;1,20,000. Second runner-up &#8377;80,000.
                Certificates for every finalist, released within 30 days of the event.
              </p>
              <div className="readout"><b>&#8377;1,50,000</b><span>winner&rsquo;s share</span></div>
            </div>
          </div>
        </section>

        <section className="ch" ref={(el) => (chRefs.current[6] = el)}>
          <div className="wrap">
            <div className="copy">
              <p className="eyebrow">Plate 07 &middot; Round 1</p>
              <h2>Closes 15 December.</h2>
              <p className="lead">
                A 5&ndash;6 page abstract, plus the 5&ndash;7 minute video. Free to enter, and shortlisting weighs both.
              </p>
              <div className="readout"><b>{days}</b><span>days left to submit<br />15 Dec 2026, 11:59 PM IST</span></div>
              <div className="cta">
                <a className="btn gold" href={UNSTOP} target="_blank" rel="noopener noreferrer">Register free on Unstop</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="instruments" aria-hidden="true">
        <nav className="rail">
          {CHAPTERS.map((c, i) => (
            <button key={c.plate} type="button" ref={(el) => (railRefs.current[i] = el)} onClick={() => goTo(i)}>
              <span>{c.name}</span><i />
            </button>
          ))}
        </nav>
        <div className="hud">
          <span><b ref={hudPlate}>PLATE 01</b><em ref={hudName} style={{ fontStyle: "normal" }}>THE FIELD</em></span>
          <span className="mid" ref={hudMid}>GROUND LEVEL &middot; 1.6 M</span>
          <span ref={hudPct}>000 / 100</span>
        </div>
        <div className="scroll-cue" ref={cueRef}><span>Scroll</span><i /></div>
      </div>

      <div className="journey-space" ref={spaceRef} />
    </>
  );
}

import React, { useState, useCallback, useEffect } from "react";

const SHOTS = [
  "img1", "img2", "img3", "img4", "img5", "img6", "img7",
  "img8", "img9", "img10", "img11", "img12", "img13", "img14", "winners",
];

export default function GalleryPage() {
  const [open, setOpen] = useState(-1);

  const close = useCallback(() => setOpen(-1), []);
  const step = useCallback((d) => {
    setOpen((i) => (i < 0 ? i : (i + d + SHOTS.length) % SHOTS.length));
  }, []);

  useEffect(() => {
    if (open < 0) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, step]);

  return (
    <main id="main">
      <div className="page-head">
        <div className="wrap">
          <p className="eyebrow">Gallery</p>
          <h1>Agri-Tech Hackathon 2026</h1>
          <p className="lead-p">
            Twenty-four hours on campus at KJSSE &mdash; 1,772 registrations, hardware and software builds side by
            side, and a prize distribution at the end of it.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="gal-grid">
            {SHOTS.map((f, i) => (
              <button key={f} type="button" onClick={() => setOpen(i)} aria-label={`Open photo ${i + 1}`}>
                <img src={`/img/${f}.jpg`} alt={`Agri-Tech Hackathon 2026, photo ${i + 1}`} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {open >= 0 && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={close}
          style={{
            position: "fixed", inset: 0, zIndex: 120, background: "rgb(255 253 246 / .96)",
            display: "grid", placeItems: "center", padding: "1.5rem",
          }}
        >
          <img
            src={`/img/${SHOTS[open]}.jpg`}
            alt={`Agri-Tech Hackathon 2026, photo ${open + 1}`}
            style={{ maxWidth: "94vw", maxHeight: "84vh", borderRadius: 12, boxShadow: "var(--shadow)" }}
          />
          <div className="cta" style={{ justifyContent: "center" }} onClick={(e) => e.stopPropagation()}>
            <button className="btn ghost sm" type="button" onClick={() => step(-1)}>Previous</button>
            <button className="btn ghost sm" type="button" onClick={() => step(1)}>Next</button>
            <button className="btn sm" type="button" onClick={close}>Close</button>
          </div>
        </div>
      )}
    </main>
  );
}

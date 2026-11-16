import React from "react";

const UNSTOP =
  "https://unstop.com/p/agri-tech-hackathon-2027-24-hours-to-hack-the-harvest-k-j-somaiya-college-of-engineering-kjsce-vidyavihar-1792152";

const THEMES = [
  { n: "01", c: "#1c6b3c", img: "/img/robot.jpg", alt: "An agricultural robot working between crop rows", h: "Next-Gen Agri-Tech",
    p: "Rovers, drones, computer vision, multi-sensor crop monitors, farm digital twins and predictive analytics." },
  { n: "02", c: "#b45a22", img: "/img/farm.jpg", alt: "Farmland at the edge of a market route", h: "Agri-Market Access",
    p: "Direct marketplaces, demand forecasting, blockchain traceability, smart storage and quality grading." },
  { n: "03", c: "#0b8fa6", img: "/img/farmer.jpg", alt: "An Indian farmer standing in a field", h: "Farmer Empowerment",
    p: "Multilingual AI, offline-first tools, hyperlocal advisories, AR/VR training and community platforms." },
  { n: "04", c: "#3b9a4d", img: "/img/soil.jpg", alt: "Close-up of cultivated soil", h: "Green Growth",
    p: "Soil regeneration, water conservation, carbon monitoring, climate intelligence and sustainable farming." },
  { n: "05", c: "#a12a62", img: "/img/innovation.jpg", alt: "Students building a prototype", h: "Open Innovation",
    p: "Your idea, your solution. Anything in agriculture, sustainability, robotics, climate-tech or rural empowerment." },
];

const PARTNERS = [
  ["bkt", "BKT"], ["lic", "LIC"], ["nabard", "NABARD"], ["festo", "Festo"], ["kiaar", "KIAAR"],
  ["redbull", "Red Bull"], ["dominos", "Domino's"], ["godavari", "Godavari"], ["innosight", "Innosight"],
  ["Neoperk", "Neoperk"], ["vista", "Vista"], ["max", "Max"], ["unstop", "Unstop"],
];

const SHOTS = [
  ["img1", "The floor, 2026"], ["img7", "Pitching to the panel"], ["img13", "Hardware builds"],
  ["img9", "Mentor rounds"], ["winners", "Prize distribution"], ["img6", "Opening session"],
];

const FAQS = [
  ["Who can take part?", "Students from any discipline — undergraduate, postgraduate, engineering, management, arts, commerce, sciences, law and medical are all eligible. Teams can mix members from different colleges."],
  ["What does it cost?", "Round 1 is free. Shortlisted teams pay ₹500 per team to confirm their place for the 24-hour sprint."],
  ["Do I need an agriculture background?", "No. You do not need prior experience with AI, IoT or blockchain either, though familiarity helps. Judging is on how useful and workable your solution is."],
  ["What exactly goes into Round 1?", "Two things: a 5–6 page abstract as a PDF, and an unlisted YouTube video of 5–7 minutes explaining your solution as if you were pitching to a farmer who has never seen it. Shortlisting weighs both."],
  ["Can we change our team after registering?", "No. Team members are fixed once the shortlist is published."],
  ["Can we bring an existing project?", "No. Projects must be built during the 24 hours. The abstract proposes what you intend to build."],
  ["Is it online or in person?", "Round 1 is online. Round 2, the sprint itself, is in person at KJSSE Vidyavihar, Mumbai."],
  ["How big can a team be?", "Three to four members. Cross-college teams are allowed."],
];

export default function Below() {
  return (
    <main className="below" id="main">
      <section className="ribbon">
        <div className="wrap">
          <div className="stat"><b>1,772</b><span>registrations last edition</span></div>
          <div className="stat"><b>&#8377;3.5L</b><span>prize pool</span></div>
          <div className="stat"><b>24</b><span>hours, non-stop</span></div>
          <div className="stat"><b>5</b><span>themes</span></div>
          <div className="stat"><b>3&ndash;4</b><span>per team</span></div>
        </div>
      </section>

      <section className="section" id="themes">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">The themes</p>
            <h2>Five plots to build on</h2>
            <p className="lead-p">
              You do not need an agriculture background, and you do not need prior AI or IoT experience.
              Pick the ground that fits what you already know how to build.
            </p>
          </div>

          <div className="impact">
            {THEMES.map((t) => (
              <article className="panel" key={t.n} style={{ "--c": t.c }} tabIndex={0}>
                <img src={t.img} alt={t.alt} loading="lazy" />
                <span className="txt">
                  <span className="n">{t.n}</span>
                  <h3>{t.h}</h3>
                  <p>{t.p}</p>
                </span>
              </article>
            ))}
          </div>

          <div className="grid c3" style={{ marginTop: "1.6rem" }}>
            <div className="card">
              <h3>Hardware builds</h3>
              <p>Rovers, drones, sensor masts, spray rigs, grading machines, cold-storage monitors.</p>
              <ul>
                <li>Bring your own components and tools</li>
                <li>Power and bench space provided</li>
                <li>Hardware problem statements open 15 days before the sprint</li>
              </ul>
            </div>
            <div className="card">
              <h3>Software builds</h3>
              <p>Vision models, yield forecasting, multilingual assistants, marketplaces, dashboards, traceability.</p>
              <ul>
                <li>Bring your own laptops and environments</li>
                <li>No server or database is provided</li>
                <li>Software problem statements open on the 20th</li>
              </ul>
            </div>
            <div className="card">
              <h3>Judged together</h3>
              <p>
                Both kinds build on the same floor and pitch to the same panel. The question the judges ask is
                whether a farmer could actually use it &mdash; not what it is made of.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cream" id="timeline">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">The season</p>
            <h2>Sowing to harvest</h2>
          </div>
          <ol className="timeline">
            <li className="live">
              <span className="when">06 NOV &ndash; 15 DEC 2026</span>
              <strong>Round 1 &mdash; abstract and pitch video<span className="flag">Live now</span></strong>
              <p>
                Submit a 5&ndash;6 page PDF proposing your solution under any of the five themes, plus an unlisted
                YouTube video of 5&ndash;7 minutes explaining it in plain terms. Free to enter, on Unstop.
              </p>
            </li>
            <li>
              <span className="when">LATE DECEMBER 2026</span>
              <strong>Shortlist announced</strong>
              <p>
                Shortlisting is based on the abstract and the video together. Shortlisted teams move straight into
                Round 2 &mdash; there is no separate registration.
              </p>
            </li>
            <li>
              <span className="when">JANUARY 2027</span>
              <strong>Round 2 confirmation and problem statements</strong>
              <p>
                Shortlisted teams confirm their place, then claim a problem statement. Hardware statements open
                15 days before the sprint; software statements on the 20th.
              </p>
            </li>
            <li>
              <span className="when">22&ndash;23 JANUARY 2027</span>
              <strong>The 24-hour sprint</strong>
              <p>
                On campus at KJSSE Vidyavihar. Mentors through the night, food provided, then final pitches to a
                panel of industry and academic judges.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section" id="round2">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Round 2</p>
            <h2>What the sprint actually looks like</h2>
            <p className="lead-p">Everything about Round 2 lives here rather than on Unstop.</p>
          </div>
          <div className="grid c3">
            <div className="card">
              <h3>Where and when</h3>
              <p>K. J. Somaiya School of Engineering, Vidyavihar, Mumbai 400077. Reporting time on 22 January is confirmed to shortlisted teams by email.</p>
            </div>
            <div className="card">
              <h3>What to bring</h3>
              <ul>
                <li>Laptops, chargers and extension boards</li>
                <li>Any hardware, sensors or components your build needs</li>
                <li>College ID for every member</li>
                <li>Whatever you need to stay awake</li>
              </ul>
            </div>
            <div className="card">
              <h3>Team rules</h3>
              <ul>
                <li>3 to 4 members, cross-college allowed</li>
                <li>One project per team</li>
                <li>No team changes after the shortlist</li>
                <li>Projects must be built during the sprint</li>
              </ul>
            </div>
            <div className="card">
              <h3>What you submit</h3>
              <p>A working build plus a short pitch to the judging panel. Exact submission format and checkpoint times go out with the shortlist.</p>
            </div>
            <div className="card">
              <h3>Provided</h3>
              <ul>
                <li>Food and snacks through the night</li>
                <li>Mentors from industry and faculty</li>
                <li>Power and workspace</li>
              </ul>
            </div>
            <div className="card">
              <h3>Judging</h3>
              <p>A panel of industry professionals and academics. Final pitches run on 23 January, with results announced the same day.</p>
            </div>
          </div>
          <div className="notice" style={{ marginTop: "1.5rem" }}>
            <p>
              <strong>Opening after the shortlist:</strong> the &#8377;500 per-team confirmation payment and the
              first-come-first-served problem-statement claiming, both gated to shortlisted teams.
            </p>
          </div>
        </div>
      </section>

      <section className="section cream" id="prizes">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">The purse</p>
            <h2>&#8377;3,50,000 in prizes</h2>
            <p className="lead-p">Cash and certificate at every rank, released within 30 days of the event.</p>
          </div>
          <div className="purse">
            <div className="rank first">
              <span className="lbl">Winner</span><b>&#8377;1,50,000</b>
              <div className="bar"><i style={{ width: "100%" }} /></div>
              <span className="lbl">Cash + certificate</span>
            </div>
            <div className="rank">
              <span className="lbl">First runner-up</span><b>&#8377;1,20,000</b>
              <div className="bar"><i style={{ width: "80%" }} /></div>
              <span className="lbl">Cash + certificate</span>
            </div>
            <div className="rank">
              <span className="lbl">Second runner-up</span><b>&#8377;80,000</b>
              <div className="bar"><i style={{ width: "53%" }} /></div>
              <span className="lbl">Cash + certificate</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Last edition</p>
            <h2>What 24 hours looked like</h2>
          </div>
          <div className="strip">
            {SHOTS.map(([f, cap]) => (
              <figure key={f}>
                <img src={`/img/${f}.jpg`} alt={cap} loading="lazy" />
                <figcaption>{cap}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section cream" id="partners">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Partners</p>
            <h2>Who backed the last edition</h2>
          </div>
          <div className="marquee">
            <div className="marquee-track">
              {[...PARTNERS, ...PARTNERS].map(([file, name], i) => (
                <div className="logo-card" key={`${file}-${i}`}>
                  <img src={`/img/logo/${file}.png`} alt="" loading="lazy" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Questions</p>
            <h2>Before you register</h2>
          </div>
          <div className="faq">
            {FAQS.map(([q, a], i) => (
              <details key={q} open={i === 0}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section cream" id="contact">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Contact</p>
            <h2>Ask the organisers</h2>
          </div>
          <div className="grid c2">
            <ul className="contact-list">
              <li><b>Email</b><a href="mailto:eesa.engg@somaiya.edu">eesa.engg@somaiya.edu</a></li>
              <li><b>Email</b><a href="mailto:aryan.lomte@somaiya.edu">aryan.lomte@somaiya.edu</a></li>
              <li><b>Phone</b><a href="tel:+917558497556">+91 7558497556</a></li>
              <li><b>Venue</b>K. J. Somaiya School of Engineering, Vidyavihar, Mumbai 400077</li>
            </ul>
            <div className="card">
              <h3>Organised by e-CESA</h3>
              <p>
                The Electronics &amp; Computer Engineering Students&rsquo; Association at K. J. Somaiya School of
                Engineering, Somaiya Vidyavihar University.
              </p>
              <div className="cta">
                <a className="btn gold" href={UNSTOP} target="_blank" rel="noopener noreferrer">Register on Unstop</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

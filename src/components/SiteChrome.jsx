import React from "react";
import { Link } from "react-router-dom";

const UNSTOP =
  "https://unstop.com/p/agri-tech-hackathon-2027-24-hours-to-hack-the-harvest-k-j-somaiya-college-of-engineering-kjsce-vidyavihar-1792152";

export function SiteHeader() {
  return (
    <header className="site-head">
      <div className="wrap head-row">
        <Link className="brand" to="/">
          <i />
          <span>
            <b>Agri-Tech 2027</b>
            <small>e-CESA &middot; KJSSE</small>
          </span>
        </Link>
        <nav className="head-nav">
          <a className="hide-sm" href="/#themes">Themes</a>
          <a className="hide-sm" href="/#timeline">Timeline</a>
          <a className="hide-sm" href="/#round2">Round 2</a>
          <a className="hide-sm" href="/#prizes">Prizes</a>
          <Link className="hide-sm" to="/gallery">Gallery</Link>
          <a className="hide-sm" href="/#faq">FAQ</a>
          <a className="btn sm gold" href={UNSTOP} target="_blank" rel="noopener noreferrer">Register</a>
        </nav>
      </div>
    </header>
  );
}

export function Chicken() {
  return (
    <div className="coop" aria-hidden="true">
      <div className="bird">
        <svg viewBox="0 0 46 40">
          <g fill="#6e411d">
            <ellipse cx="22" cy="20" rx="13" ry="10" />
            <circle cx="33" cy="11" r="6.5" />
            <path d="M33 3.5 q2.5 -3.5 5 0 q-2.5 1.5 -5 0z" fill="#b7202e" />
            <path d="M39 11 l5 2 l-5 2z" fill="#f3b21f" />
            <path d="M9 17 q-7 2 -6 7 q4 -1 7 -3z" />
          </g>
          <g stroke="#6e411d" strokeWidth="2" strokeLinecap="round">
            <line className="leg-a" x1="19" y1="29" x2="19" y2="38" />
            <line className="leg-b" x1="26" y1="29" x2="26" y2="38" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-foot">
      <div className="wrap">
        <div className="foot-main">
          <div>
            <h3>Agri-Tech Hackathon 2027</h3>
            <p>
              24 hours to hack the harvest. 22&ndash;23 January 2027, K. J. Somaiya School of Engineering,
              Vidyavihar, Mumbai.
            </p>
            <div className="foot-social">
              <a href="https://www.instagram.com/ecesa_kjsce/" target="_blank" rel="noopener noreferrer" aria-label="e-CESA on Instagram">
                <svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.17.4.36 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.17-1 .36-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2zm0 3.4a6.4 6.4 0 100 12.8 6.4 6.4 0 000-12.8zm0 10.6a4.2 4.2 0 110-8.4 4.2 4.2 0 010 8.4zm6.6-10.9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>
              </a>
              <a href="https://in.linkedin.com/company/e-cesakjsce" target="_blank" rel="noopener noreferrer" aria-label="e-CESA on LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z" /></svg>
              </a>
            </div>
          </div>
          <div>
            <h3>Event</h3>
            <ul>
              <li><a href="/#themes">Themes</a></li>
              <li><a href="/#timeline">Timeline</a></li>
              <li><a href="/#round2">Round 2</a></li>
              <li><a href="/#prizes">Prizes</a></li>
            </ul>
          </div>
          <div>
            <h3>Take part</h3>
            <ul>
              <li><a href={UNSTOP} target="_blank" rel="noopener noreferrer">Register on Unstop</a></li>
              <li><a href="/#faq">FAQ</a></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h3>Reach us</h3>
            <ul>
              <li><a href="mailto:eesa.engg@somaiya.edu">eesa.engg@somaiya.edu</a></li>
              <li><a href="tel:+917558497556">+91 7558497556</a></li>
              <li>Vidyavihar, Mumbai 400077</li>
            </ul>
          </div>
        </div>
        <div className="foot-base">
          <span>&copy; 2026 e-CESA &middot; K. J. Somaiya School of Engineering</span>
          <span>22&ndash;23 January 2027</span>
        </div>
      </div>
    </footer>
  );
}

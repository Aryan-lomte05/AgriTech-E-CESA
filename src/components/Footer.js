import React, { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section - Quick Links */}
        <div className="footer-section left">
          <h2 className="footer-title">Quick Links</h2>
          <div className="footer-links">
            <a href="#about" onClick={() => scrollToSection('home')}>About</a>
            <a href="#timeline" onClick={() => scrollToSection('timeline')}>Timeline</a>
            <a href="#prizes" onClick={() => scrollToSection('prizes')}>Prizes</a>
          </div>
        </div>

        {/* Middle Section - Contact Us */}
        <div className="footer-section center">
          <h2 className="footer-title">Contact Us</h2>
          <div className="contact-info">
            <a href="mailto:eesa.engg@somaiya.edu" className="contact-item">
              <FaEnvelope /> eesa.engg@somaiya.edu
            </a>
            <a href="mailto:hrishkesh.c@somaiya.edu" className="contact-item">
              <FaEnvelope /> hrishkesh.c@somaiya.edu
            </a>
            <a href="tel:+919969594585" className="contact-item">
              <FaPhone /> +91 9969594585
            </a>
            <a href="tel:+917208639630" className="contact-item">
              <FaPhone /> +91 7208639630
            </a>
          </div>
        </div>

        {/* Right Section - Follow Us */}
        <div className="footer-section right">
          <h2 className="footer-title">Follow Us</h2>
          <div className="social-links">
            <a href="https://www.instagram.com/ecesa_kjsce/" aria-label="Instagram" target='_blank'>
              <FaInstagram className="instagram-icon" />
            </a>
            <a href="https://in.linkedin.com/company/e-cesakjsce" aria-label="LinkedIn" target='_blank'>
              <FaLinkedin className="linkedin-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-text">
          © 2024-25 e-CESA KJSCE. All rights reserved
        </div>
      </div>

      {showScroll && (
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to Top">
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
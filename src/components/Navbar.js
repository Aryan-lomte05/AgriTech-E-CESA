import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo1 from '../assets/icons/trust.png'; // Replace with the actual path to your image
import logo2 from '../assets/icons/somaiya.png'; // Replace with the actual path to your image
import logo3 from '../assets/icons/ecesa.png'; // Replace with the actual path to your image

const Navbar = ({ isNightMode }) => {
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 100);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false); // Close menu on selection
  };
  
  return (
    <div className={`custom-navbar ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'navbar-hidden' : ''}`}>
      <div className="nav-container">
        <div className="nav-logos">
          <img src={logo1} alt="Logo 1" className="nav-logo" />
          <img src={logo2} alt="Logo 2" className="nav-logo" />
          <img src={logo3} alt="Logo 3" className="nav-logo logo3" /> {/* Added class 'logo3' */}
        </div>
        
        <button className="hamburger-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✖' : '☰'}
        </button>
        
        <div className={`nav-pills ${isMenuOpen ? 'menu-open' : ''}`}>
          <button id="navbar-links" className={`nav-link ${isNightMode ? 'night-mode' : 'day-mode'}`} onClick={() => scrollToSection('home')}>Home</button>
          <button id="navbar-links" className={`nav-link ${isNightMode ? 'night-mode' : 'day-mode'}`} onClick={() => scrollToSection('timeline')}>Timeline</button>
          <button id="navbar-links" className={`nav-link ${isNightMode ? 'night-mode' : 'day-mode'}`} onClick={() => scrollToSection('prizes')}>Prizes</button>
          <button id="navbar-links" className={`nav-link ${isNightMode ? 'night-mode' : 'day-mode'}`} onClick={() => scrollToSection('rules')}>Rules</button>
          <button id="navbar-links" className={`nav-link ${isNightMode ? 'night-mode' : 'day-mode'}`} onClick={() => scrollToSection('sponsors')}>Sponsors</button>
          <button id="navbar-links" className={`nav-link ${isNightMode ? 'night-mode' : 'day-mode'}`} onClick={() => scrollToSection('footer')}>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
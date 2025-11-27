import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Info, Target, Clock, Trophy, FileText, Users, Mail } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

import TrustLogo from "../assets/icons/trust.png";
import SomaiyaLogo from "../assets/icons/somaiya.png";
import EcesaLogo from "../assets/icons/ecesa.png";

const Navbar = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: Info },
    { id: "domains", label: "Domains", icon: Target },
    { id: "timeline", label: "Timeline", icon: Clock },
    { id: "prizes", label: "Prizes", icon: Trophy },
    { id: "rules", label: "FAQ", icon: FileText },
    { id: "sponsors", label: "Sponsors", icon: Users },
    { id: "footer", label: "Contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? isDark 
              ? "bg-black/40 backdrop-blur-xl border-b border-lime-400/20 shadow-lg shadow-lime-500/5"
              : "bg-white/80 backdrop-blur-xl border-b border-lime-400/30 shadow-lg shadow-lime-500/10"
            : isDark
              ? "bg-transparent"
              : "bg-black/20 backdrop-blur-md"
        }`}
        initial={{ y: 0 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logos with Glow Effect */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {[TrustLogo, SomaiyaLogo, EcesaLogo].map((logo, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-lime-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img 
                    src={logo} 
                    alt={`Logo ${idx + 1}`} 
                    className={`relative z-10 ${idx === 2 ? 'h-14' : 'h-11'} w-auto filter drop-shadow-lg`} 
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Desktop Navigation - Enhanced with Dark Text in Light Mode */}
            <div className={`hidden lg:flex items-center gap-2 backdrop-blur-md rounded-full px-4 py-2 border ${
              isDark 
                ? "bg-white/5 border-white/10" 
                : "bg-black/10 border-black/20"
            }`}>
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`group relative px-4 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                      isDark
                        ? "text-white/80 hover:text-lime-400"
                        : "text-black font-bold hover:text-lime-600"
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-2">
                      <Icon size={16} className="opacity-70 group-hover:opacity-100" />
                      {link.label}
                    </span>
                    <motion.div
                      className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 ${
                        isDark
                          ? "bg-gradient-to-r from-lime-400/0 via-lime-400/10 to-lime-400/0"
                          : "bg-gradient-to-r from-lime-400/20 via-lime-400/30 to-lime-400/20"
                      }`}
                      initial={false}
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-3 transition-colors backdrop-blur-md rounded-full border ${
                isDark
                  ? "text-white hover:text-lime-400 bg-white/5 border-white/10"
                  : "text-black hover:text-lime-600 bg-black/10 border-black/20"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Enhanced Glassmorphism */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="fixed top-24 right-4 left-4 sm:left-auto sm:w-80 bg-neutral-900/90 backdrop-blur-2xl border border-lime-400/20 rounded-3xl shadow-2xl shadow-lime-500/10 z-30 lg:hidden overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="p-6 space-y-2">
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="group w-full text-left px-5 py-4 text-white/80 hover:text-lime-400 hover:bg-white/5 rounded-2xl transition-all duration-200 font-medium flex items-center gap-3 border border-transparent hover:border-lime-400/20"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={20} className="text-lime-400 opacity-70 group-hover:opacity-100" />
                      {link.label}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaArrowUp } from 'react-icons/fa';

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
    <footer className="relative bg-black border-t border-lime-400/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Quick Links */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold gradient-text">Quick Links</h2>
            <div className="flex flex-col space-y-3">
              {['home', 'about', 'domains', 'timeline', 'prizes', 'rules'].map((link) => (
                <motion.button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="text-gray-400 hover:text-lime-400 transition-all text-left capitalize text-lg font-medium group flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-0 h-0.5 bg-lime-400 group-hover:w-4 transition-all" />
                  {link}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Us */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold gradient-text">Contact Us</h2>
            <div className="flex flex-col space-y-4">
              <motion.a
                href="mailto:eesa.engg@somaiya.edu"
                className="flex items-center gap-3 text-gray-400 hover:text-lime-400 transition-all group"
                whileHover={{ x: 5 }}
              >
                <FaEnvelope className="flex-shrink-0 text-lime-400 group-hover:scale-125 transition-transform" size={20} />
                <span className="text-base">eesa.engg@somaiya.edu</span>
              </motion.a>
              <motion.a
                href="mailto:hrishkesh.c@somaiya.edu"
                className="flex items-center gap-3 text-gray-400 hover:text-lime-400 transition-all group"
                whileHover={{ x: 5 }}
              >
                <FaEnvelope className="flex-shrink-0 text-lime-400 group-hover:scale-125 transition-transform" size={20} />
                <span className="text-base">nathan.v@somaiya.edu</span>
              </motion.a>
              <motion.a
                href="tel:+919969594585"
                className="flex items-center gap-3 text-gray-400 hover:text-lime-400 transition-all group"
                whileHover={{ x: 5 }}
              >
                <FaPhone className="flex-shrink-0 text-lime-400 group-hover:scale-125 transition-transform" size={20} />
                <span className="text-base">+91 7021316267</span>
              </motion.a>
              <motion.a
                href="tel:+917208639630"
                className="flex items-center gap-3 text-gray-400 hover:text-lime-400 transition-all group"
                whileHover={{ x: 5 }}
              >
                <FaPhone className="flex-shrink-0 text-lime-400 group-hover:scale-125 transition-transform" size={20} />
                <span className="text-base">+91 9820279762</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Follow Us */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold gradient-text">Follow Us</h2>
            <div className="flex gap-6">
              <motion.a
                href="https://www.instagram.com/ecesa_kjsce/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center shadow-lg shadow-pink-500/50 group-hover:shadow-pink-500/80 transition-all">
                  <FaInstagram className="text-white text-3xl" />
                </div>
              </motion.a>
              <motion.a
                href="https://in.linkedin.com/company/e-cesakjsce"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:shadow-blue-500/80 transition-all">
                  <FaLinkedin className="text-white text-3xl" />
                </div>
              </motion.a>
            </div>
            
            {/* Additional CTA */}
            <motion.div
              className="mt-8"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-gray-400 mb-3 text-sm">Questions about the event?</p>
              <motion.a
                href="mailto:eesa.engg@somaiya.edu"
                className="btn-primary inline-block px-6 py-3 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500">
            © 2025-26 <span className="text-lime-400 font-semibold">e-CESA KJSCE</span>. All rights reserved
          </p>
          <motion.p 
            className="text-gray-600 text-sm mt-2"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            Built with 💚 for AgriTech Innovation
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-lime-400 to-emerald-500 text-black shadow-2xl shadow-lime-500/50 flex items-center justify-center group"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to Top"
          >
            <FaArrowUp className="text-2xl group-hover:animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;

import React from "react";
import { motion } from "framer-motion";
import videoSrc from "../assets/bg.mp4";

const About = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background - Desktop only */}
      <video
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-20 max-w-5xl mx-auto px-6 py-20 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">
          About Agri-Tech 2026
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-6">
          Agri-Tech Hackathon 2026 is a <span className="font-semibold text-lime-400">national-level offline hackathon</span> that brings together the brightest minds to innovate, collaborate, and develop technology-driven solutions for agriculture.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-gray-200">
          Hosted by <span className="font-semibold">K. J. Somaiya School of Engineering (KJSSE)</span>, this 24-hour coding sprint tackles challenges in precision agriculture, supply chain optimization, farmers' empowerment, biofuel innovation, and open innovation using <span className="text-lime-400 font-medium">AI, IoT, blockchain, and data analytics</span>.
        </p>
      </motion.div>
    </section>
  );
};

export default About;

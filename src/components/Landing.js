import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import Confetti from "react-confetti";
import { useTheme } from "../hooks/useTheme";
// import Countdown from "./CountdownTimer";
import FlipCountdown from "./FlipCountdown";
// Import images
import DayBg from "../assets/images/day.png";
import NightBg from "../assets/images/night.png";
import Sun from "../assets/images/sun.png";
import Moon from "../assets/images/moon.png";
import LightFarm from "../assets/images/light_farm.png";
import DarkFarm from "../assets/images/dark_farm.png";
import LightTrees from "../assets/images/light_trees.png";
import DarkTrees from "../assets/images/dark_trees.png";
import LightClouds from "../assets/images/light_clouds.png";
import DarkClouds from "../assets/images/dark_clouds.png";
import Comet from "../assets/images/comet.png";

const Landing = () => {
  const { theme, toggleTheme } = useTheme();
  const [showPopup, setShowPopup] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const isNight = theme === "dark";

  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <img
          src={isNight ? NightBg : DayBg}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Celestial Body */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 md:w-48 md:h-48"
        animate={{
          y: [0, -30, 0],
          rotate: isNight ? 360 : 0,
        }}
        transition={{
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 50, repeat: Infinity, ease: "linear" },
        }}
      >
        <img
          src={isNight ? Moon : Sun}
          alt={isNight ? "Moon" : "Sun"}
          className={`w-full h-full ${isNight ? "mix-blend-screen" : ""}`}
          style={{
            filter: isNight
              ? "drop-shadow(0 0 40px rgba(168, 255, 0, 0.4))"
              : "drop-shadow(0 0 60px rgba(255, 200, 0, 0.6))",
          }}
        />
      </motion.div>

      {/* Comet */}
      <AnimatePresence>
        {isNight && (
          <motion.img
            src={Comet}
            alt="Comet"
            className="absolute w-24 h-24"
            initial={{ x: "-100%", y: "10%", opacity: 0 }}
            animate={{
              x: "120vw",
              y: "60%",
              opacity: [0, 1, 1, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatDelay: 10,
              ease: "linear",
            }}
          />
        )}
      </AnimatePresence>

      {/* Clouds */}
      <motion.div
        className="absolute inset-0 w-full h-full opacity-60"
        animate={{ x: [0, 100, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <img
          src={isNight ? DarkClouds : LightClouds}
          alt="Clouds"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Farm */}
      <motion.div
        className="absolute bottom-0 w-full h-2/3"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img
          src={isNight ? DarkFarm : LightFarm}
          alt="Farm"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Trees */}
      <motion.div
        className="absolute bottom-0 w-full h-3/4 z-10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.2 }}
      >
        <img
          src={isNight ? DarkTrees : LightTrees}
          alt="Trees"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Branding */}
          <motion.div
            className="space-y-2"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <h3 className="text-xl md:text-2xl font-light tracking-widest text-lime-400/80">
              KJSSE | e-CESA
            </h3>
            <p className="text-lg md:text-xl font-light text-white/60">
              Presents
            </p>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight gradient-text"
            style={{
              filter: "drop-shadow(0 0 20px rgba(168, 255, 0, 0.3))",
            }}
          >
            Agri-Tech
            <br />
            Hackathon 2026
          </motion.h1>

          {/* Countdown */}
          <div className="space-y-4">
            <p className="text-sm md:text-base font-medium tracking-wider text-white/80">
              REGISTRATION CLOSES IN
            </p>
            <FlipCountdown />
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={() => {
              window.open(
                "https://unstop.com/hackathons/agri-tech-hackathon-k-j-somaiya-college-of-engineering-kjsce-mumbai-1378830",
                "_blank",
                "noopener,noreferrer"
              );
              setShowConfetti(true);
              setTimeout(() => setShowConfetti(false), 5000);
            }}
            className="group relative px-8 py-4 bg-gradient-to-r from-lime-400 to-emerald-500 text-black font-bold text-lg rounded-full overflow-hidden shadow-lg hover:shadow-lime-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              REGISTER NOW
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Theme Toggle */}
      <motion.button
        onClick={toggleTheme}
        className="fixed bottom-24 right-8 z-50 w-14 h-14 glass-card flex items-center justify-center hover:bg-white/20 transition-all duration-300 border-2 border-lime-400/30"
        whileHover={{ scale: 1.15, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle theme"
      >
        <span className="text-2xl">{isNight ? "🌙" : "☀️"}</span>
      </motion.button>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
            />
            <motion.div
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-11/12 max-w-md glass-card p-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-bold mb-4 gradient-text">
                ⚠️ Registration Closed
              </h2>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent mb-4" />
              <p className="text-white/80">
                The registration period has ended. Thank you for your interest!
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={500}
          gravity={0.3}
        />
      )}
    </div>
  );
};

export default Landing;

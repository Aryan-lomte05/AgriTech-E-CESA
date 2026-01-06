import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownUnit = ({ value, label, icon }) => {
  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Glowing background */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Main card */}
      <div className="relative glass-card px-6 py-4 md:px-8 md:py-6 rounded-2xl border-2 border-lime-400/30 group-hover:border-lime-400 transition-all min-w-[100px] md:min-w-[140px]">
        {/* Icon floating above */}
        <motion.div
          className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {icon}
        </motion.div>

        {/* Number display */}
        <div className="text-center">
          <motion.div
            className="text-5xl md:text-7xl font-black bg-gradient-to-br from-lime-400 via-emerald-400 to-lime-500 bg-clip-text text-transparent mb-2"
            animate={{
              textShadow: [
                "0 0 20px rgba(168, 255, 0, 0.3)",
                "0 0 40px rgba(168, 255, 0, 0.5)",
                "0 0 20px rgba(168, 255, 0, 0.3)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            {String(value).padStart(2, '0')}
          </motion.div>

          {/* Label */}
          <div className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest">
            {label}
          </div>
        </div>

        {/* Animated corner accents */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-lime-400/50 rounded-tl" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-lime-400/50 rounded-tr" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-lime-400/50 rounded-bl" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-lime-400/50 rounded-br" />
      </div>
    </motion.div>
  );
};

const FlipCountdown = () => {
  const calculateTimeLeft = () => {
  const targetDate = new Date(2026, 0, 11, 23, 59, 59).getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};


  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const units = [
    { value: timeLeft.days, label: "Days", icon: "🌾" },
    { value: timeLeft.hours, label: "Hours", icon: "🌻" },
    { value: timeLeft.minutes, label: "Minutes", icon: "🌱" },
    { value: timeLeft.seconds, label: "Seconds", icon: "🚜" },
  ];

  return (
    <div className="relative">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {['🌾', '🌱', '🌻'][i % 3]}
          </motion.div>
        ))}
      </div>

      {/* Countdown units */}
      <div className="relative flex flex-wrap justify-center gap-4 md:gap-6 pt-8">
        {units.map((unit, index) => (
          <React.Fragment key={unit.label}>
            <CountdownUnit {...unit} />
            {index < units.length - 1 && (
              <motion.div
                className="hidden md:flex items-center justify-center text-4xl font-black text-lime-400/30 pb-2"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              >
                :
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Urgency indicator when time is low */}
      {timeLeft.days <= 7 && (
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="inline-block glass-card px-6 py-3 border-2 border-red-500/50 rounded-full"
            animate={{
              boxShadow: [
                "0 0 20px rgba(239, 68, 68, 0.3)",
                "0 0 40px rgba(239, 68, 68, 0.6)",
                "0 0 20px rgba(239, 68, 68, 0.3)",
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <span className="text-red-400 font-bold text-sm md:text-base flex items-center gap-2">
              ⚠️ Only {timeLeft.days} days left! Register now! ⚠️
            </span>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default FlipCountdown;

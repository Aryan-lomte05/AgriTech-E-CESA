import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HarvestEasterEgg = () => {
  const [inputSequence, setInputSequence] = useState('');
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const targetWord = 'harvest';

  useEffect(() => {
    const handleKeyPress = (e) => {
      const newSequence = (inputSequence + e.key.toLowerCase()).slice(-7); // Keep last 7 chars
      setInputSequence(newSequence);

      if (newSequence === targetWord) {
        setShowEasterEgg(true);
        setInputSequence('');
        setTimeout(() => setShowEasterEgg(false), 5000);
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [inputSequence]);

  return (
    <AnimatePresence>
      {showEasterEgg && (
        <motion.div
          className="fixed inset-0 z-[999] pointer-events-none flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Background Explosion */}
          <div className="absolute inset-0">
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-4xl"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  x: (Math.random() - 0.5) * 2000,
                  y: (Math.random() - 0.5) * 2000,
                  rotate: Math.random() * 720,
                  opacity: [1, 1, 0],
                }}
                transition={{
                  duration: 3,
                  ease: "easeOut",
                }}
              >
                {['🌾', '🌽', '🥕', '🍅', '🚜', '🌱', '🌻', '💚'][i % 8]}
              </motion.div>
            ))}
          </div>

          {/* Main Message */}
          <motion.div
            className="relative glass-card p-16 border-8 border-lime-400 shadow-2xl shadow-lime-500/80 text-center max-w-3xl"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.div
              className="text-8xl md:text-9xl font-black gradient-text mb-6"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
              🌾 HARVEST! 🌾
            </motion.div>

            <div className="text-3xl md:text-4xl font-bold text-white mb-4">
              Secret Unlocked!
            </div>

            <p className="text-xl text-gray-300 mb-6">
              You've discovered the hidden harvest! 🎉
            </p>

            <div className="glass-card px-6 py-4 inline-block border-2 border-lime-400">
              <p className="text-lime-400 font-bold text-lg">
                "The best time to plant a tree was 20 years ago.<br />
                The second best time is now."
              </p>
              <p className="text-gray-400 text-sm mt-2">— Ancient Farming Wisdom</p>
            </div>

            {/* Animated Tractor */}
            <motion.div
              className="text-9xl mt-8"
              animate={{
                x: [-100, 100, -100],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              🚜
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HarvestEasterEgg;

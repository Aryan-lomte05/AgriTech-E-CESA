// import React, { useRef, useCallback, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Lottie from "lottie-react";
// import ChickenAnimation from "../assets/chicken.json";
// import ChickenSound from "../assets/chicken-scream-1.ogg";
// import { Sparkles, Zap, Heart } from "lucide-react";

// const Chicken = () => {
//   const audioRef = useRef(null);
//   const [showMessage, setShowMessage] = useState(false);
//   const [clickCount, setClickCount] = useState(0);
//   const [isExploding, setIsExploding] = useState(false);
//   const [showTrail, setShowTrail] = useState(false);

//   if (!audioRef.current) {
//     audioRef.current = new Audio(ChickenSound);
//   }

//   const playSound = useCallback(() => {
//     try {
//       if (audioRef.current) {
//         audioRef.current.currentTime = 0;
//         audioRef.current.play().catch(err => console.log('Audio blocked:', err));
//       }
//     } catch (error) {
//       console.log('Audio error:', error);
//     }
//   }, []);

//   const handleClick = useCallback(() => {
//     const newCount = clickCount + 1;
//     setClickCount(newCount);
//     playSound();
    
//     setShowMessage(true);
//     setTimeout(() => setShowMessage(false), 2000);

//     if (newCount === 5) {
//       setShowTrail(true);
//     }

//     if (newCount === 10) {
//       setIsExploding(true);
//       setTimeout(() => setIsExploding(false), 2000);
//     }
//   }, [clickCount, playSound]);

//   const messages = [
//     { text: "🐔 Bawk Bawk!", icon: Sparkles },
//     { text: "🌾 Farm Fresh!", icon: Heart },
//     { text: "🚜 AgriTech!", icon: Zap },
//     { text: "🌱 Growing!", icon: Sparkles },
//     { text: "🎉 Keep clicking!", icon: Heart },
//     { text: "🏆 Farm Champion!", icon: Zap },
//     { text: "🔥 Harvest Time!", icon: Sparkles },
//     { text: "⚡ Legendary Farmer!", icon: Zap },
//     { text: "🌟 Green Thumb!", icon: Heart },
//     { text: "💚 Agri Hero!", icon: Sparkles },
//   ];

//   const currentMessage = messages[Math.min(clickCount - 1, messages.length - 1)];
//   const MessageIcon = currentMessage?.icon || Sparkles;

//   return (
//     <>
//       {/* The Walking Chicken - PROPER FIX WITH OVERFLOW VISIBLE */}
//       <motion.div
//         className="fixed z-50 cursor-pointer"
//         style={{
//           bottom: '-50px', // Negative to allow feet to show
//           left: '-300px',
//           width: '300px',
//           height: '250px', // Taller container
//           animation: 'walk-across 20s linear infinite',
//         }}
//         whileHover={{ scale: 1.25 }}
//         whileTap={{ scale: 0.9, rotate: [0, -15, 15, -15, 0] }}
//         onClick={handleClick}
//         role="button"
//         tabIndex={0}
//         aria-label="Secret agri-tech chicken - click me!"
//       >
//         {/* Rainbow Glow Trail */}
//         {showTrail && (
//           <motion.div
//             className="absolute inset-0 rounded-full blur-3xl"
//             style={{ zIndex: -1 }}
//             animate={{
//               background: [
//                 'radial-gradient(circle, rgba(168,255,0,0.5) 0%, transparent 70%)',
//                 'radial-gradient(circle, rgba(255,215,0,0.5) 0%, transparent 70%)',
//                 'radial-gradient(circle, rgba(34,197,94,0.5) 0%, transparent 70%)',
//                 'radial-gradient(circle, rgba(168,255,0,0.5) 0%, transparent 70%)',
//               ],
//               scale: [1, 1.4, 1],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//             }}
//           />
//         )}

//         {/* Chicken Lottie - NO CROPPING */}
//         <div 
//           className="absolute inset-0"
//           style={{
//             overflow: 'visible',
//           }}
//         >
//           <Lottie
//             animationData={ChickenAnimation}
//             loop={true}
//             className="w-full h-full"
//             style={{
//               filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
//             }}
//             rendererSettings={{
//               preserveAspectRatio: 'xMidYMid meet',
//             }}
//           />
//         </div>

//         {/* Click Counter Badge */}
//         <AnimatePresence>
//           {clickCount > 0 && (
//             <motion.div
//               className="absolute top-4 right-4 bg-gradient-to-r from-lime-400 to-emerald-500 text-black font-black rounded-full w-14 h-14 flex items-center justify-center text-xl shadow-2xl border-4 border-white"
//               style={{ zIndex: 20 }}
//               initial={{ scale: 0, rotate: -180 }}
//               animate={{ scale: 1, rotate: 0 }}
//               exit={{ scale: 0, rotate: 180 }}
//               whileHover={{ scale: 1.2, rotate: 360 }}
//               transition={{ type: "spring", stiffness: 500 }}
//             >
//               {clickCount}
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Sparkles Around Chicken */}
//         {clickCount > 3 && (
//           <div className="absolute inset-0 pointer-events-none">
//             {[...Array(8)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute"
//                 style={{
//                   top: `${40 + Math.sin((i * Math.PI * 2) / 8) * 35}%`,
//                   left: `${50 + Math.cos((i * Math.PI * 2) / 8) * 40}%`,
//                 }}
//                 animate={{
//                   scale: [0, 1, 0],
//                   rotate: 360,
//                   opacity: [0, 1, 0],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   delay: i * 0.25,
//                 }}
//               >
//                 <Sparkles className="text-lime-400" size={16} fill="currentColor" />
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </motion.div>

//       {/* Popup Message - AGRICULTURE THEMED */}
//       <AnimatePresence>
//         {showMessage && currentMessage && (
//           <motion.div
//             className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
//             initial={{ scale: 0, rotate: -180, opacity: 0 }}
//             animate={{ scale: 1, rotate: 0, opacity: 1 }}
//             exit={{ scale: 0, rotate: 180, opacity: 0 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <div className="glass-card px-12 py-8 text-center border-4 border-lime-400 shadow-2xl shadow-lime-500/50 bg-black/80">
//               <motion.div
//                 className="flex items-center gap-4 text-5xl md:text-7xl font-black gradient-text"
//                 animate={{
//                   scale: [1, 1.15, 1],
//                 }}
//                 transition={{
//                   duration: 0.5,
//                   repeat: 2,
//                 }}
//               >
//                 <MessageIcon size={60} className="text-lime-400" />
//                 {currentMessage.text}
//                 <MessageIcon size={60} className="text-emerald-400" />
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* MEGA Explosion at 10 clicks - AGRI THEMED */}
//       <AnimatePresence>
//         {isExploding && (
//           <div className="fixed inset-0 z-40 pointer-events-none">
//             {/* Massive Agricultural Confetti */}
//             {[...Array(150)].map((_, i) => {
//               const icons = ['🌾', '🌱', '🌻', '🚜', '🥕', '🌽', '🍅', '💚', '🌿', '🍃'];
//               return (
//                 <motion.div
//                   key={i}
//                   className="absolute text-4xl"
//                   style={{
//                     left: '50%',
//                     top: '50%',
//                   }}
//                   initial={{ scale: 0, x: 0, y: 0 }}
//                   animate={{
//                     scale: [0, 1.5, 0],
//                     x: (Math.random() - 0.5) * 1500,
//                     y: (Math.random() - 0.5) * 1500,
//                     rotate: Math.random() * 720,
//                     opacity: [1, 1, 0],
//                   }}
//                   transition={{
//                     duration: 2.5,
//                     ease: "easeOut",
//                   }}
//                 >
//                   {icons[i % icons.length]}
//                 </motion.div>
//               );
//             })}
            
//             {/* Achievement Banner */}
//             <motion.div
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
//               initial={{ scale: 0, rotate: -180 }}
//               animate={{ scale: 1, rotate: 0 }}
//               exit={{ scale: 0, rotate: 180 }}
//             >
//               <div className="glass-card p-12 border-8 border-lime-400 shadow-2xl shadow-lime-500/80 bg-black/90">
//                 <motion.div
//                   className="text-7xl md:text-9xl font-black gradient-text mb-6"
//                   animate={{
//                     scale: [1, 1.1, 1],
//                   }}
//                   transition={{
//                     duration: 1,
//                     repeat: Infinity,
//                   }}
//                 >
//                   🌾 LEGENDARY FARMER! 🌾
//                 </motion.div>
//                 <div className="text-4xl md:text-5xl font-bold text-white">
//                   Master of AgriTech! 🏆
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>

//       {/* Custom Animation */}
//       <style>{`
//         @keyframes walk-across {
//           0% { left: -300px; }
//           100% { left: calc(100vw + 50px); }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Chicken;
import React, { useRef, useCallback, useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import ChickenAnimation from "../assets/chicken.json";
import ChickenSound from "../assets/chicken-scream-1.ogg";
import { Sparkles, Zap, Heart } from "lucide-react";

const Chicken = memo(() => {
  const audioRef = useRef(null);
  const [showMessage, setShowMessage] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [isExploding, setIsExploding] = useState(false);
  const [showTrail, setShowTrail] = useState(false);

  if (!audioRef.current) {
    audioRef.current = new Audio(ChickenSound);
  }

  const playSound = useCallback(() => {
    try {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(err => console.log('Audio blocked:', err));
      }
    } catch (error) {
      console.log('Audio error:', error);
    }
  }, []);

  const handleClick = useCallback(() => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    playSound();
    
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);

    if (newCount === 5) {
      setShowTrail(true);
    }

    if (newCount === 10) {
      setIsExploding(true);
      setTimeout(() => setIsExploding(false), 2000);
    }
  }, [clickCount, playSound]);

  const messages = [
    { text: "🐔 Bawk Bawk!", icon: Sparkles },
    { text: "🌾 Farm Fresh!", icon: Heart },
    { text: "🚜 AgriTech!", icon: Zap },
    { text: "🌱 Growing!", icon: Sparkles },
    { text: "🎉 Keep clicking!", icon: Heart },
    { text: "🏆 Farm Champion!", icon: Zap },
    { text: "🔥 Harvest Time!", icon: Sparkles },
    { text: "⚡ Legendary Farmer!", icon: Zap },
    { text: "🌟 Green Thumb!", icon: Heart },
    { text: "💚 Agri Hero!", icon: Sparkles },
  ];

  const currentMessage = messages[Math.min(clickCount - 1, messages.length - 1)];
  const MessageIcon = currentMessage?.icon || Sparkles;

  return (
    <>
      {/* The Walking Chicken - LOWERED TO HIDE FEET */}
      <motion.div
        className="fixed z-50 cursor-pointer"
        style={{
          bottom: '-90px', // Much lower to hide feet
          left: '-300px',
          width: '300px',
          height: '200px',
          animation: 'walk-across 20s linear infinite',
        }}
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 0.9, rotate: [0, -15, 15, -15, 0] }}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-label="Secret agri-tech chicken - click me!"
      >
        {/* Rainbow Glow Trail */}
        {showTrail && (
          <motion.div
            className="absolute inset-0 rounded-full blur-3xl"
            style={{ zIndex: -1 }}
            animate={{
              background: [
                'radial-gradient(circle, rgba(168,255,0,0.5) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(255,215,0,0.5) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(34,197,94,0.5) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(168,255,0,0.5) 0%, transparent 70%)',
              ],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        )}

        {/* Chicken Lottie - Optimized */}
        <div 
          className="absolute inset-0"
          style={{
            overflow: 'visible',
          }}
        >
          <Lottie
            animationData={ChickenAnimation}
            loop={true}
            className="w-full h-full"
            style={{
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
            }}
            rendererSettings={{
              preserveAspectRatio: 'xMidYMid meet',
              progressiveLoad: true,
              hideOnTransparent: true,
            }}
            quality="low"
          />
        </div>

        {/* Click Counter Badge */}
        <AnimatePresence>
          {clickCount > 0 && (
            <motion.div
              className="absolute top-4 right-4 bg-gradient-to-r from-lime-400 to-emerald-500 text-black font-black rounded-full w-14 h-14 flex items-center justify-center text-xl shadow-2xl border-4 border-white"
              style={{ zIndex: 20 }}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              {clickCount}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sparkles Around Chicken */}
        {clickCount > 3 && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  top: `${40 + Math.sin((i * Math.PI * 2) / 8) * 35}%`,
                  left: `${50 + Math.cos((i * Math.PI * 2) / 8) * 40}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  rotate: 360,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.25,
                }}
              >
                <Sparkles className="text-lime-400" size={16} fill="currentColor" />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Popup Message - AGRICULTURE THEMED */}
      <AnimatePresence>
        {showMessage && currentMessage && (
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 180, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="glass-card px-12 py-8 text-center border-4 border-lime-400 shadow-2xl shadow-lime-500/50 bg-black/80">
              <motion.div
                className="flex items-center gap-4 text-5xl md:text-7xl font-black gradient-text"
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 0.5,
                  repeat: 2,
                }}
              >
                <MessageIcon size={60} className="text-lime-400" />
                {currentMessage.text}
                <MessageIcon size={60} className="text-emerald-400" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MEGA Explosion at 10 clicks - AGRI THEMED */}
      <AnimatePresence>
        {isExploding && (
          <div className="fixed inset-0 z-40 pointer-events-none">
            {/* Massive Agricultural Confetti */}
            {[...Array(150)].map((_, i) => {
              const icons = ['🌾', '🌱', '🌻', '🚜', '🥕', '🌽', '🍅', '💚', '🌿', '🍃'];
              return (
                <motion.div
                  key={i}
                  className="absolute text-4xl"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  initial={{ scale: 0, x: 0, y: 0 }}
                  animate={{
                    scale: [0, 1.5, 0],
                    x: (Math.random() - 0.5) * 1500,
                    y: (Math.random() - 0.5) * 1500,
                    rotate: Math.random() * 720,
                    opacity: [1, 1, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    ease: "easeOut",
                  }}
                >
                  {icons[i % icons.length]}
                </motion.div>
              );
            })}
            
            {/* Achievement Banner */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
            >
              <div className="glass-card p-12 border-8 border-lime-400 shadow-2xl shadow-lime-500/80 bg-black/90">
                <motion.div
                  className="text-7xl md:text-9xl font-black gradient-text mb-6"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                >
                  🌾 LEGENDARY FARMER! 🌾
                </motion.div>
                <div className="text-4xl md:text-5xl font-bold text-white">
                  Master of AgriTech! 🏆
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Custom Animation */}
      <style>{`
        @keyframes walk-across {
          0% { left: -300px; }
          100% { left: calc(100vw + 50px); }
        }
      `}</style>
    </>
  );
});

Chicken.displayName = 'Chicken';

export default Chicken;

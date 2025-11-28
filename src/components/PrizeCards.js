
// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Trophy, Award, Medal, Star, Sparkles, Crown } from 'lucide-react';

// const PrizeCards = () => {
//   const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

//   const prizes = [
//     { 
//       amount: "₹70,000", 
//       rank: "First Runner Up", 
//       position: "2nd", 
//       height: "h-72", 
//       icon: Award,
//       gradient: "from-slate-300 via-slate-400 to-slate-500",
//       glow: "shadow-slate-400/60",
//       ringColor: "border-slate-400",
//       delay: 0.2,
//       scale: 0.95,
//     },
//     { 
//       amount: "₹1,00,000", 
//       rank: "Champion", 
//       position: "1st", 
//       height: "h-96", 
//       icon: Trophy,
//       gradient: "from-yellow-300 via-yellow-400 to-amber-500",
//       glow: "shadow-yellow-400/80",
//       ringColor: "border-yellow-400",
//       delay: 0,
//       scale: 1.1,
//     },
//     { 
//       amount: "₹30,000", 
//       rank: "Second Runner Up", 
//       position: "3rd", 
//       height: "h-64", 
//       icon: Medal,
//       gradient: "from-orange-400 via-orange-500 to-orange-600",
//       glow: "shadow-orange-400/60",
//       ringColor: "border-orange-400",
//       delay: 0.4,
//       scale: 0.9,
//     },
//   ];

//   return (
//     <div className="section-container relative overflow-hidden" ref={ref}>
//       {/* Animated Floating Stars */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(30)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -30, 0],
//               opacity: [0.2, 0.8, 0.2],
//               scale: [1, 1.5, 1],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           >
//             <Star className="text-lime-400" size={8 + Math.random() * 12} fill="currentColor" />
//           </motion.div>
//         ))}
//       </div>

//       <motion.h1 
//         className="faq-title mb-8"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={inView ? { opacity: 1, scale: 1 } : {}}
//         transition={{ duration: 0.6 }}
//       >
//         {['P','R','I','Z','E','S'].map((letter, i) => (
//           <motion.span 
//             key={i} 
//             className="letter inline-block"
//             animate={{
//               y: [0, -10, 0],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               delay: i * 0.1,
//             }}
//           >
//             {letter}
//           </motion.span>
//         ))}
//       </motion.h1>

//       <motion.p
//         className="text-center text-gray-400 text-lg mb-20"
//         initial={{ opacity: 0 }}
//         animate={inView ? { opacity: 1 } : {}}
//       >
//         Win big and showcase your innovation! 🎉
//       </motion.p>

//       {/* 3D Podium Stage */}
//       <div className="flex justify-center items-end gap-8 md:gap-16 perspective-1000 relative px-4">
//         {prizes.map((prize, index) => {
//           const Icon = prize.icon;
//           return (
//             <motion.div
//               key={index}
//               className={`relative ${prize.height} w-48 md:w-80`}
//               initial={{ opacity: 0, y: 200, rotateY: -30 }}
//               animate={inView ? { 
//                 opacity: 1, 
//                 y: 0, 
//                 rotateY: 0,
//                 scale: prize.scale,
//               } : {}}
//               transition={{ 
//                 duration: 1, 
//                 delay: prize.delay,
//                 type: "spring",
//                 stiffness: 80,
//               }}
//               whileHover={{ 
//                 y: -30, 
//                 rotateY: prize.position === '1st' ? [0, 5, -5, 0] : [0, 3, -3, 0],
//                 scale: prize.scale * 1.05,
//                 transition: { duration: 0.5 }
//               }}
//               style={{ transformStyle: 'preserve-3d' }}
//             >
//               {/* Glowing Base Ring */}
//               <motion.div
//                 className={`absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-4 ${prize.glow} rounded-full blur-2xl`}
//                 animate={{
//                   opacity: [0.5, 1, 0.5],
//                   scale: [1, 1.1, 1],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                 }}
//               />

//               {/* 3D Podium Structure */}
//               <div className={`absolute inset-0 bg-gradient-to-b ${prize.gradient} rounded-t-3xl ${prize.glow} shadow-2xl border-4 ${prize.ringColor} transform-gpu`}
//                 style={{
//                   transform: 'translateZ(20px)',
//                 }}
//               >
//                 {/* Metallic Shine Effect */}
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/20 rounded-t-3xl"
//                   animate={{
//                     backgroundPosition: ['0% 0%', '100% 100%'],
//                   }}
//                   transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                     repeatType: 'reverse',
//                   }}
//                 />

//                 {/* Top Gloss */}
//                 <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/30 to-transparent rounded-t-3xl" />
                
//                 {/* Side Panels for 3D Effect */}
//                 <div className="absolute -left-1 top-0 bottom-0 w-1 bg-black/30" />
//                 <div className="absolute -right-1 top-0 bottom-0 w-1 bg-white/20" />
//               </div>

//               {/* Content on Podium */}
//               <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center"
//                 style={{ transform: 'translateZ(40px)' }}
//               >
//                 {/* Crown for Winner */}
//                 {prize.position === '1st' && (
//                   <motion.div
//                     className="absolute -top-16"
//                     animate={{
//                       y: [0, -10, 0],
//                       rotate: [0, 5, -5, 0],
//                     }}
//                     transition={{
//                       duration: 3,
//                       repeat: Infinity,
//                     }}
//                   >
//                     <Crown size={60} className="text-yellow-400 fill-yellow-400 drop-shadow-2xl" />
//                   </motion.div>
//                 )}

//                 {/* Floating Icon with Rotation */}
//                 <motion.div
//                   animate={{
//                     y: [0, -15, 0],
//                     rotate: prize.position === '1st' ? [0, 360] : [0, 10, -10, 0],
//                   }}
//                   transition={{
//                     y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
//                     rotate: { duration: prize.position === '1st' ? 10 : 4, repeat: Infinity },
//                   }}
//                   className="mb-6"
//                 >
//                   <Icon 
//                     size={prize.position === '1st' ? 100 : 70} 
//                     className="text-white drop-shadow-2xl" 
//                     strokeWidth={1.5}
//                   />
//                 </motion.div>
                
//                 {/* Prize Amount with Pulsing Effect */}
//                 <motion.div
//                   className={`font-black text-white mb-4 drop-shadow-2xl ${
//                     prize.position === '1st' ? 'text-5xl md:text-7xl' : 'text-4xl md:text-5xl'
//                   }`}
//                   animate={{
//                     scale: prize.position === '1st' ? [1, 1.08, 1] : [1, 1.05, 1],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                   }}
//                 >
//                   {prize.amount}
//                 </motion.div>
                
//                 {/* Rank Label */}
//                 <div className={`text-white/95 font-bold mb-3 ${
//                   prize.position === '1st' ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
//                 }`}>
//                   {prize.rank}
//                 </div>
                
//                 {/* Position Badge with Sparkle */}
//                 <motion.div 
//                   className="relative"
//                   whileHover={{ scale: 1.2, rotate: 360 }}
//                   transition={{ duration: 0.6 }}
//                 >
//                   <div className={`text-7xl md:text-8xl font-black text-white/30 ${
//                     prize.position === '1st' ? 'text-yellow-200/40' : ''
//                   }`}>
//                     {prize.position}
//                   </div>
                  
//                   {prize.position === '1st' && (
//                     <motion.div
//                       className="absolute -top-2 -right-2"
//                       animate={{ rotate: 360 }}
//                       transition={{ duration: 3, repeat: Infinity }}
//                     >
//                       <Sparkles className="text-yellow-300" size={24} fill="currentColor" />
//                     </motion.div>
//                   )}
//                 </motion.div>
//               </div>

//               {/* Floor Shadow */}
//               <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-black/40 blur-2xl rounded-full" />
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* Confetti Burst on View */}
//       {inView && (
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           {[...Array(50)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-3 h-3 rounded-full"
//               style={{
//                 background: ['#a8ff00', '#ffd700', '#ff6b6b', '#4ecdc4', '#fff'][i % 5],
//                 left: `${50 + (Math.random() - 0.5) * 60}%`,
//                 top: '20%',
//               }}
//               initial={{ y: 0, opacity: 1, rotate: 0, scale: 0 }}
//               animate={{
//                 y: [0, 600],
//                 opacity: [1, 1, 0],
//                 rotate: 360 * (Math.random() > 0.5 ? 1 : -1) * Math.random() * 3,
//                 scale: [0, 1, 0.5],
//                 x: (Math.random() - 0.5) * 400,
//               }}
//               transition={{
//                 duration: 2.5 + Math.random() * 1.5,
//                 delay: Math.random() * 0.5,
//                 ease: "easeOut",
//               }}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PrizeCards;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Medal, Star, Sparkles, Crown } from 'lucide-react';

const PrizeCards = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const prizes = [
    { 
      amount: "₹70,000", 
      rank: "First Runner Up", 
      position: "2nd", 
      height: "h-72", 
      icon: Award,
      gradient: "from-slate-300 via-slate-400 to-slate-500",
      glow: "shadow-slate-400/60",
      ringColor: "border-slate-400",
      delay: 0.2,
      scale: 0.95,
    },
    { 
      amount: "₹1,00,000", 
      rank: "Champion", 
      position: "1st", 
      height: "h-96", 
      icon: Trophy,
      gradient: "from-yellow-300 via-yellow-400 to-amber-500",
      glow: "shadow-yellow-400/80",
      ringColor: "border-yellow-400",
      delay: 0,
      scale: 1.1,
    },
    { 
      amount: "₹30,000", 
      rank: "Second Runner Up", 
      position: "3rd", 
      height: "h-64", 
      icon: Medal,
      gradient: "from-orange-400 via-orange-500 to-orange-600",
      glow: "shadow-orange-400/60",
      ringColor: "border-orange-400",
      delay: 0.4,
      scale: 0.9,
    },
  ];

  return (
    <div className="section-container relative overflow-hidden" ref={ref}>
      {/* Animated Floating Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star className="text-lime-400" size={8 + Math.random() * 12} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <motion.h1 
        className="faq-title mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {['P','R','I','Z','E','S'].map((letter, i) => (
          <motion.span 
            key={i} 
            className="letter inline-block"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        className="text-center text-gray-400 text-base md:text-lg mb-12 md:mb-20 px-4"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
      >
        Win big and showcase your innovation! 🎉
      </motion.p>

      {/* DESKTOP: 3D Podium Stage */}
      <div className="hidden md:flex justify-center items-end gap-8 md:gap-16 perspective-1000 relative px-4">
        {prizes.map((prize, index) => {
          const Icon = prize.icon;
          return (
            <motion.div
              key={index}
              className={`relative ${prize.height} w-48 md:w-80`}
              initial={{ opacity: 0, y: 200, rotateY: -30 }}
              animate={inView ? { 
                opacity: 1, 
                y: 0, 
                rotateY: 0,
                scale: prize.scale,
              } : {}}
              transition={{ 
                duration: 1, 
                delay: prize.delay,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{ 
                y: -30, 
                rotateY: prize.position === '1st' ? [0, 5, -5, 0] : [0, 3, -3, 0],
                scale: prize.scale * 1.05,
                transition: { duration: 0.5 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glowing Base Ring */}
              <motion.div
                className={`absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-4 ${prize.glow} rounded-full blur-2xl`}
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />

              {/* 3D Podium Structure */}
              <div className={`absolute inset-0 bg-gradient-to-b ${prize.gradient} rounded-t-3xl ${prize.glow} shadow-2xl border-4 ${prize.ringColor} transform-gpu`}
                style={{
                  transform: 'translateZ(20px)',
                }}
              >
                {/* Metallic Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/20 rounded-t-3xl"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />

                {/* Top Gloss */}
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/30 to-transparent rounded-t-3xl" />
                
                {/* Side Panels for 3D Effect */}
                <div className="absolute -left-1 top-0 bottom-0 w-1 bg-black/30" />
                <div className="absolute -right-1 top-0 bottom-0 w-1 bg-white/20" />
              </div>

              {/* Content on Podium */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center"
                style={{ transform: 'translateZ(40px)' }}
              >
                {/* Crown for Winner */}
                {prize.position === '1st' && (
                  <motion.div
                    className="absolute -top-16"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    <Crown size={60} className="text-yellow-400 fill-yellow-400 drop-shadow-2xl" />
                  </motion.div>
                )}

                {/* Floating Icon with Rotation */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: prize.position === '1st' ? [0, 360] : [0, 10, -10, 0],
                  }}
                  transition={{
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: prize.position === '1st' ? 10 : 4, repeat: Infinity },
                  }}
                  className="mb-6"
                >
                  <Icon 
                    size={prize.position === '1st' ? 100 : 70} 
                    className="text-white drop-shadow-2xl" 
                    strokeWidth={1.5}
                  />
                </motion.div>
                
                {/* Prize Amount with Pulsing Effect */}
                <motion.div
                  className={`font-black text-white mb-4 drop-shadow-2xl ${
                    prize.position === '1st' ? 'text-5xl md:text-7xl' : 'text-4xl md:text-5xl'
                  }`}
                  animate={{
                    scale: prize.position === '1st' ? [1, 1.08, 1] : [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  {prize.amount}
                </motion.div>
                
                {/* Rank Label */}
                <div className={`text-white/95 font-bold mb-3 ${
                  prize.position === '1st' ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
                }`}>
                  {prize.rank}
                </div>
                
                {/* Position Badge with Sparkle */}
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`text-7xl md:text-8xl font-black text-white/30 ${
                    prize.position === '1st' ? 'text-yellow-200/40' : ''
                  }`}>
                    {prize.position}
                  </div>
                  
                  {prize.position === '1st' && (
                    <motion.div
                      className="absolute -top-2 -right-2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Sparkles className="text-yellow-300" size={24} fill="currentColor" />
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Floor Shadow */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-black/40 blur-2xl rounded-full" />
            </motion.div>
          );
        })}
      </div>

      {/* MOBILE: Vertical Cards - Winner First */}
      <div className="md:hidden flex flex-col gap-6 max-w-sm mx-auto px-4">
        {/* Show Winner First, then 2nd, then 3rd */}
        {[prizes[1], prizes[0], prizes[2]].map((prize, displayIndex) => {
          const Icon = prize.icon;
          const originalIndex = prizes.findIndex(p => p.position === prize.position);
          
          return (
            <motion.div
              key={prize.position}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: displayIndex * 0.15 }}
            >
              <motion.div
                className={`glass-card p-6 flex flex-col items-center text-center border-4 ${prize.ringColor} relative overflow-hidden`}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${prize.gradient} opacity-10`} />

                {/* Crown for Winner */}
                {prize.position === '1st' && (
                  <motion.div
                    className="absolute -top-10 left-1/2 -translate-x-1/2 text-5xl z-10"
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    👑
                  </motion.div>
                )}

                {/* Position Badge */}
                <div className={`absolute top-3 right-3 w-10 h-10 rounded-full bg-gradient-to-br ${prize.gradient} flex items-center justify-center text-white font-black text-lg shadow-lg`}>
                  {originalIndex + 1}
                </div>

                {/* Icon */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="mt-2 mb-4"
                >
                  <Icon 
                    size={prize.position === '1st' ? 70 : 60} 
                    className={`bg-gradient-to-br ${prize.gradient} bg-clip-text text-transparent`}
                    strokeWidth={1.5}
                    style={{
                      filter: 'drop-shadow(0 4px 8px rgba(168, 255, 0, 0.3))',
                    }}
                  />
                </motion.div>

                {/* Amount */}
                <motion.div 
                  className={`font-black bg-gradient-to-r ${prize.gradient} bg-clip-text text-transparent mb-3 ${
                    prize.position === '1st' ? 'text-5xl' : 'text-4xl'
                  }`}
                  animate={{
                    scale: prize.position === '1st' ? [1, 1.05, 1] : [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  {prize.amount}
                </motion.div>

                {/* Rank */}
                <div className={`text-white font-bold mb-2 ${
                  prize.position === '1st' ? 'text-xl' : 'text-lg'
                }`}>
                  {prize.rank}
                </div>

                {/* Position */}
                <div className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-3">
                  {prize.position} Position
                </div>

                {/* Sparkles for Winner */}
                {prize.position === '1st' && (
                  <div className="flex gap-2">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      >
                        <Sparkles size={14} className="text-yellow-400" fill="currentColor" />
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Confetti Burst on View */}
      {inView && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: ['#a8ff00', '#ffd700', '#ff6b6b', '#4ecdc4', '#fff'][i % 5],
                left: `${50 + (Math.random() - 0.5) * 60}%`,
                top: '20%',
              }}
              initial={{ y: 0, opacity: 1, rotate: 0, scale: 0 }}
              animate={{
                y: [0, 600],
                opacity: [1, 1, 0],
                rotate: 360 * (Math.random() > 0.5 ? 1 : -1) * Math.random() * 3,
                scale: [0, 1, 0.5],
                x: (Math.random() - 0.5) * 400,
              }}
              transition={{
                duration: 2.5 + Math.random() * 1.5,
                delay: Math.random() * 0.5,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PrizeCards;

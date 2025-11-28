// import React from 'react';
// import { motion } from 'framer-motion';
// import { Sparkles } from 'lucide-react';

// const sponsors = [
//   { id: 1, name: "BKT", logo: require("../assets/sponsors/bkt.png") },
//   { id: 2, name: "Godavari", logo: require("../assets/sponsors/godavari.png") },
//   { id: 3, name: "LIC", logo: require("../assets/sponsors/lic.png") },
//   { id: 4, name: "Unstop", logo: require("../assets/sponsors/unstop.png") },
//   { id: 5, name: "Innosight", logo: require("../assets/sponsors/innosight.png") },
//   { id: 6, name: "Vista", logo: require("../assets/sponsors/vista.png") },
//   { id: 7, name: "Kiaar", logo: require("../assets/sponsors/kiaar.png") },
//   { id: 8, name: "Max", logo: require("../assets/sponsors/max.png") },
//   { id: 9, name: "Dominos", logo: require("../assets/sponsors/dominos.png") },
//   { id: 10, name: "Neoperk", logo: require("../assets/sponsors/Neoperk.png") },
//   { id: 11, name: "Festo", logo: require("../assets/sponsors/festo.png") },
//   { id: 12, name: "Red Bull", logo: require("../assets/sponsors/redbull.png") },
//   { id: 13, name: "NABARD", logo: require("../assets/sponsors/nabard.png") },
// ];

// const Sponsors = () => {
//   const tripleSponsors = [...sponsors, ...sponsors, ...sponsors];
//   const reversedSponsors = [...sponsors].reverse();
//   const tripleReversed = [...reversedSponsors, ...reversedSponsors, ...reversedSponsors];

//   return (
//     <div className="relative section-container py-24 overflow-hidden bg-gradient-to-b from-neutral-900 via-black to-neutral-900">
//       {/* Animated Background Grid - ONLY IN THIS SECTION */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none">
//         <div className="absolute inset-0" style={{
//           backgroundImage: 'linear-gradient(#a8ff00 1px, transparent 1px), linear-gradient(90deg, #a8ff00 1px, transparent 1px)',
//           backgroundSize: '50px 50px'
//         }} />
//       </div>

//       <motion.h1 
//         className="faq-title mb-8 relative z-10"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//       >
//         {['O','U','R',' ','S','P','O','N','S','O','R','S'].map((letter, i) => (
//           <span key={i} className="letter">{letter === ' ' ? '\u00A0' : letter}</span>
//         ))}
//       </motion.h1>

//       <motion.p 
//         className="text-center text-gray-300 mb-16 text-xl font-light relative z-10"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.2 }}
//       >
//         Proudly supported by <span className="text-lime-400 font-semibold">industry leaders</span> and <span className="text-emerald-400 font-semibold">innovators</span>
//       </motion.p>

//       <div className="space-y-10 relative z-10">
//         {/* First Row - Left to Right - COLORFUL! */}
//         <div className="relative overflow-hidden py-6">
//           <motion.div
//             className="flex gap-10 items-center"
//             animate={{
//               x: ['0%', '-33.33%'],
//             }}
//             transition={{
//               x: {
//                 repeat: Infinity,
//                 repeatType: "loop",
//                 duration: 40,
//                 ease: "linear",
//               },
//             }}
//           >
//             {tripleSponsors.map((sponsor, index) => (
//               <motion.div
//                 key={`row1-${index}`}
//                 className="flex-shrink-0 group cursor-pointer"
//                 whileHover={{ scale: 1.15, y: -15, rotate: [0, -2, 2, 0] }}
//                 transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
//               >
//                 <div className="relative w-52 h-36 flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border-2 border-lime-400/20 p-8 hover:border-lime-400 hover:shadow-2xl hover:shadow-lime-500/40 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-lime-400/10 group-hover:to-emerald-500/10">
//                   {/* Animated Border Glow */}
//                   <motion.div
//                     className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
//                     style={{
//                       background: 'linear-gradient(45deg, #a8ff00, #10b981, #a8ff00)',
//                       filter: 'blur(20px)',
//                       zIndex: -1,
//                     }}
//                     animate={{
//                       rotate: 360,
//                     }}
//                     transition={{
//                       duration: 3,
//                       repeat: Infinity,
//                       ease: "linear",
//                     }}
//                   />
                  
//                   {/* Logo - FULL COLOR */}
//                   <img
//                     src={sponsor.logo}
//                     alt={sponsor.name}
//                     className="relative z-10 w-full h-full object-contain transition-all duration-500 group-hover:drop-shadow-2xl"
//                     style={{ 
//                       filter: 'brightness(1.1) contrast(1.1)',
//                     }}
//                   />

//                   {/* Sparkle Effect on Hover */}
//                   <motion.div
//                     className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
//                     animate={{
//                       rotate: [0, 180, 360],
//                       scale: [1, 1.2, 1],
//                     }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                     }}
//                   >
//                     <Sparkles className="text-lime-400" size={20} />
//                   </motion.div>

//                   {/* Name Badge */}
//                   <motion.div 
//                     className="absolute -bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                     initial={{ y: 10 }}
//                     whileHover={{ y: 0 }}
//                   >
//                     <span className="text-xs font-bold text-black bg-gradient-to-r from-lime-400 to-emerald-500 px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
//                       {sponsor.name}
//                     </span>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Second Row - Right to Left - COLORFUL! */}
//         <div className="relative overflow-hidden py-6">
//           <motion.div
//             className="flex gap-10 items-center"
//             animate={{
//               x: ['-33.33%', '0%'],
//             }}
//             transition={{
//               x: {
//                 repeat: Infinity,
//                 repeatType: "loop",
//                 duration: 40,
//                 ease: "linear",
//               },
//             }}
//           >
//             {tripleReversed.map((sponsor, index) => (
//               <motion.div
//                 key={`row2-${index}`}
//                 className="flex-shrink-0 group cursor-pointer"
//                 whileHover={{ scale: 1.15, y: -15, rotate: [0, 2, -2, 0] }}
//                 transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
//               >
//                 <div className="relative w-52 h-36 flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border-2 border-emerald-400/20 p-8 hover:border-emerald-400 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-emerald-400/10 group-hover:to-lime-500/10">
//                   <motion.div
//                     className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
//                     style={{
//                       background: 'linear-gradient(45deg, #10b981, #a8ff00, #10b981)',
//                       filter: 'blur(20px)',
//                       zIndex: -1,
//                     }}
//                     animate={{
//                       rotate: -360,
//                     }}
//                     transition={{
//                       duration: 3,
//                       repeat: Infinity,
//                       ease: "linear",
//                     }}
//                   />
                  
//                   <img
//                     src={sponsor.logo}
//                     alt={sponsor.name}
//                     className="relative z-10 w-full h-full object-contain transition-all duration-500 group-hover:drop-shadow-2xl"
//                     style={{ 
//                       filter: 'brightness(1.1) contrast(1.1)',
//                     }}
//                   />

//                   <motion.div
//                     className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
//                     animate={{
//                       rotate: [360, 180, 0],
//                       scale: [1, 1.2, 1],
//                     }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                     }}
//                   >
//                     <Sparkles className="text-emerald-400" size={20} />
//                   </motion.div>

//                   <motion.div 
//                     className="absolute -bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   >
//                     <span className="text-xs font-bold text-black bg-gradient-to-r from-emerald-400 to-lime-500 px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
//                       {sponsor.name}
//                     </span>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* CTA Section with Micro-animations */}
//       <motion.div
//         className="mt-20 text-center relative z-10"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         <motion.p 
//           className="text-xl text-gray-300 mb-8 font-light"
//           animate={{
//             opacity: [0.7, 1, 0.7],
//           }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//           }}
//         >
//           Interested in <span className="text-lime-400 font-semibold">sponsoring</span> this event?
//         </motion.p>
//         <motion.a
//           href="mailto:eesa.engg@somaiya.edu"
//           className="inline-flex items-center gap-3 btn-primary px-10 py-5 text-xl font-bold"
//           whileHover={{ scale: 1.08, boxShadow: "0 0 40px rgba(168, 255, 0, 0.6)" }}
//           whileTap={{ scale: 0.95 }}
//           animate={{
//             y: [0, -5, 0],
//           }}
//           transition={{
//             y: {
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }
//           }}
//         >
//           <Sparkles size={24} />
//           Become a Sponsor
//           <Sparkles size={24} />
//         </motion.a>
//       </motion.div>
//     </div>
//   );
// };

// export default Sponsors;
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const sponsors = [
  { id: 1, name: "BKT", logo: require("../assets/sponsors/bkt.png") },
  { id: 2, name: "Godavari", logo: require("../assets/sponsors/godavari.png") },
  { id: 3, name: "LIC", logo: require("../assets/sponsors/lic.png") },
  { id: 4, name: "Unstop", logo: require("../assets/sponsors/unstop.png") },
  { id: 5, name: "Innosight", logo: require("../assets/sponsors/innosight.png") },
  { id: 6, name: "Vista", logo: require("../assets/sponsors/vista.png") },
  { id: 7, name: "Kiaar", logo: require("../assets/sponsors/kiaar.png") },
  { id: 8, name: "Max", logo: require("../assets/sponsors/max.png") },
  { id: 9, name: "Dominos", logo: require("../assets/sponsors/dominos.png") },
  { id: 10, name: "Neoperk", logo: require("../assets/sponsors/Neoperk.png") },
  { id: 11, name: "Festo", logo: require("../assets/sponsors/festo.png") },
  { id: 12, name: "Red Bull", logo: require("../assets/sponsors/redbull.png") },
  { id: 13, name: "NABARD", logo: require("../assets/sponsors/nabard.png") },
];

// Memoized Sponsor Card Component
const SponsorCard = memo(({ sponsor, index, direction }) => {
  const isLeftToRight = direction === 'ltr';
  
  return (
    <motion.div
      className="flex-shrink-0 group cursor-pointer"
      whileHover={{ scale: 1.15, y: -15, rotate: [0, isLeftToRight ? -2 : 2, isLeftToRight ? 2 : -2, 0] }}
      transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
    >
      <div className={`relative w-52 h-36 flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border-2 p-8 hover:shadow-2xl transition-all duration-500 ${
        isLeftToRight 
          ? 'border-lime-400/20 hover:border-lime-400 hover:shadow-lime-500/40 group-hover:from-lime-400/10 group-hover:to-emerald-500/10'
          : 'border-emerald-400/20 hover:border-emerald-400 hover:shadow-emerald-500/40 group-hover:from-emerald-400/10 group-hover:to-lime-500/10'
      }`}>
        {/* Animated Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
          style={{
            background: isLeftToRight 
              ? 'linear-gradient(45deg, #a8ff00, #10b981, #a8ff00)'
              : 'linear-gradient(45deg, #10b981, #a8ff00, #10b981)',
            filter: 'blur(20px)',
            zIndex: -1,
          }}
          animate={{
            rotate: isLeftToRight ? 360 : -360,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Logo - FULL COLOR */}
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          className="relative z-10 w-full h-full object-contain transition-all duration-500 group-hover:drop-shadow-2xl"
          style={{ 
            filter: 'brightness(1.1) contrast(1.1)',
          }}
          loading="lazy"
        />

        {/* Sparkle Effect on Hover */}
        <motion.div
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
          animate={{
            rotate: isLeftToRight ? [0, 180, 360] : [360, 180, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <Sparkles className={isLeftToRight ? "text-lime-400" : "text-emerald-400"} size={20} />
        </motion.div>

        {/* Name Badge */}
        <motion.div 
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ y: 10 }}
          whileHover={{ y: 0 }}
        >
          <span className={`text-xs font-bold text-black px-4 py-2 rounded-full shadow-lg whitespace-nowrap ${
            isLeftToRight 
              ? 'bg-gradient-to-r from-lime-400 to-emerald-500'
              : 'bg-gradient-to-r from-emerald-400 to-lime-500'
          }`}>
            {sponsor.name}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
});

SponsorCard.displayName = 'SponsorCard';

const Sponsors = () => {
  const tripleSponsors = [...sponsors, ...sponsors, ...sponsors];
  const reversedSponsors = [...sponsors].reverse();
  const tripleReversed = [...reversedSponsors, ...reversedSponsors, ...reversedSponsors];

  return (
    <div className="relative section-container py-24 overflow-hidden bg-gradient-to-b from-neutral-900 via-black to-neutral-900">
      {/* Animated Background Grid - ONLY IN THIS SECTION */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#a8ff00 1px, transparent 1px), linear-gradient(90deg, #a8ff00 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <motion.h1 
        className="faq-title mb-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {['O','U','R',' ','S','P','O','N','S','O','R','S'].map((letter, i) => (
          <span key={i} className="letter">{letter === ' ' ? '\u00A0' : letter}</span>
        ))}
      </motion.h1>

      <motion.p 
        className="text-center text-gray-300 mb-16 text-xl font-light relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Proudly supported by <span className="text-lime-400 font-semibold">industry leaders</span> and <span className="text-emerald-400 font-semibold">innovators</span>
      </motion.p>

      <div className="space-y-10 relative z-10">
        {/* First Row - Left to Right */}
        <div className="relative overflow-hidden py-6">
          <motion.div
            className="flex gap-10 items-center"
            animate={{
              x: ['0%', '-33.33%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {tripleSponsors.map((sponsor, index) => (
              <SponsorCard
                key={`row1-${index}`}
                sponsor={sponsor}
                index={index}
                direction="ltr"
              />
            ))}
          </motion.div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="relative overflow-hidden py-6">
          <motion.div
            className="flex gap-10 items-center"
            animate={{
              x: ['-33.33%', '0%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {tripleReversed.map((sponsor, index) => (
              <SponsorCard
                key={`row2-${index}`}
                sponsor={sponsor}
                index={index}
                direction="rtl"
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="mt-20 text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.p 
          className="text-xl text-gray-300 mb-8 font-light"
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          Interested in <span className="text-lime-400 font-semibold">sponsoring</span> this event?
        </motion.p>
        <motion.a
          href="mailto:eesa.engg@somaiya.edu"
          className="inline-flex items-center gap-3 btn-primary px-10 py-5 text-xl font-bold"
          whileHover={{ scale: 1.08, boxShadow: "0 0 40px rgba(168, 255, 0, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
        >
          <Sparkles size={24} />
          Become a Sponsor
          <Sparkles size={24} />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default memo(Sponsors);

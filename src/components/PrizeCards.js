import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Medal, Star, Users } from 'lucide-react';

const podiumOrder = [
  {
    prize: '2nd Prize',
    icon: Award,
    gradient: 'from-slate-300 via-slate-400 to-slate-500',
    ringColor: 'border-slate-400',
    textColor: 'text-slate-300',
    team: 'Team Troubleshoot\n& Team Circuit 25',
    college: 'Joint Winners',
    description: 'Innovative and impactful AgriTech solutions.',
    badge: '🥈',
    podiumHeight: 'h-32',
    cardHeight: 'h-52',
    delay: 0.2,
    position: 'left',
  },
  {
    prize: '1st Prize',
    icon: Trophy,
    gradient: 'from-yellow-300 via-yellow-400 to-amber-500',
    ringColor: 'border-yellow-400',
    textColor: 'text-yellow-400',
    team: 'Team Snack Overflow',
    college: 'D. J. Sanghvi College of Engineering',
    description: 'Automated tractor-mounted sprinkler system for irrigation efficiency.',
    badge: '🥇',
    podiumHeight: 'h-48',
    cardHeight: 'h-64',
    delay: 0,
    position: 'center',
  },
  {
    prize: '3rd Prize',
    icon: Medal,
    gradient: 'from-orange-400 via-orange-500 to-orange-600',
    ringColor: 'border-orange-400',
    textColor: 'text-orange-400',
    team: 'Team Kronix',
    college: '',
    description: 'Effective problem-solving and technical implementation.',
    badge: '🥉',
    podiumHeight: 'h-20',
    cardHeight: 'h-44',
    delay: 0.3,
    position: 'right',
  },
];

const specialAwards = [
  {
    award: 'Best Women-Led Team',
    team: 'Team Weble',
    description: 'Recognizing leadership and innovation by women participants.',
    emoji: '⭐',
    gradient: 'from-pink-400 to-rose-500',
    delay: 0.1,
  },
  {
    award: 'Best Hardware Implementation',
    team: 'Team Black 2.0',
    description: 'Outstanding hardware-based design and execution.',
    emoji: '🔧',
    gradient: 'from-cyan-400 to-blue-500',
    delay: 0.2,
  },
  {
    award: 'Special Recognition',
    team: 'Team Mad Tech & Team Kisan Setu',
    description: 'Practical field-oriented hardware solutions addressing agricultural challenges.',
    emoji: '🌾',
    gradient: 'from-lime-400 to-emerald-500',
    delay: 0.3,
  },
];

const PrizeCards = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="section-container relative overflow-hidden" ref={ref}>
      {/* Animated floating stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -25, 0], opacity: [0.1, 0.5, 0.1], scale: [1, 1.4, 1] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          >
            <Star className="text-lime-400" size={5 + Math.random() * 9} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Title */}
      <motion.h1
        className="faq-title mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {['W', 'I', 'N', 'N', 'E', 'R', 'S'].map((letter, i) => (
          <motion.span
            key={i}
            className="letter inline-block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        className="text-center text-gray-400 text-base md:text-lg mb-12 px-4"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
      >
        Congratulations to all our incredible winners! 🏆🎉
      </motion.p>

      {/* ── PODIUM ── */}
      <div className="flex items-end justify-center gap-3 md:gap-6 max-w-4xl mx-auto px-4 mb-0">
        {podiumOrder.map((winner) => {
          const Icon = winner.icon;
          const isCenter = winner.position === 'center';
          return (
            <motion.div
              key={winner.prize}
              initial={{ opacity: 0, y: 80 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: winner.delay, type: 'spring', stiffness: 70 }}
              className="flex flex-col items-center flex-1 max-w-xs"
            >
              {/* Card above podium */}
              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                className={`relative w-full rounded-2xl border-2 ${winner.ringColor} bg-black/50 backdrop-blur-sm p-4 flex flex-col items-center text-center overflow-hidden shadow-2xl mb-0`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${winner.gradient} opacity-10 rounded-2xl`} />

                {/* Crown for 1st */}
                {isCenter && (
                  <motion.div
                    className="text-3xl mb-1 relative z-10"
                    animate={{ y: [0, -6, 0], rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    👑
                  </motion.div>
                )}

                {/* Badge emoji */}
                <motion.div
                  className={`${isCenter ? 'text-4xl' : 'text-3xl'} mb-1 relative z-10`}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, delay: winner.delay }}
                >
                  {winner.badge}
                </motion.div>

                {/* Icon */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="mb-2 relative z-10"
                >
                  <Icon size={isCenter ? 32 : 24} className={`${winner.textColor}`} strokeWidth={1.5} />
                </motion.div>

                {/* Prize label */}
                <div className={`text-xs font-black uppercase tracking-widest mb-1 ${winner.textColor} relative z-10`}>
                  {winner.prize}
                </div>

                {/* Team name */}
                <h3 className={`text-white font-black ${isCenter ? 'text-base md:text-xl' : 'text-sm md:text-base'} mb-1 relative z-10 whitespace-pre-line leading-tight`}>
                  {winner.team}
                </h3>

                {/* College */}
                {winner.college && (
                  <p className={`text-xs font-semibold mb-1 ${winner.textColor} relative z-10`}>{winner.college}</p>
                )}

                {/* Description - only on center */}
                {isCenter && (
                  <p className="text-white/60 text-xs leading-relaxed relative z-10 mt-1">{winner.description}</p>
                )}
              </motion.div>

              {/* Podium block */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.6, delay: winner.delay + 0.3, origin: 'bottom' }}
                style={{ transformOrigin: 'bottom' }}
                className={`w-full ${winner.podiumHeight} rounded-t-lg relative overflow-hidden`}
              >
                {/* Gradient fill */}
                <div className={`absolute inset-0 bg-gradient-to-b ${winner.gradient} opacity-80`} />
                {/* Shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent" />
                {/* Side depth shadow */}
                <div className="absolute right-0 top-0 bottom-0 w-3 bg-black/25" />
                {/* Position number */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`font-black text-white/40 ${isCenter ? 'text-5xl' : 'text-4xl'}`}>
                    {winner.position === 'left' ? '2' : winner.position === 'center' ? '1' : '3'}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Podium base platform */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={inView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="max-w-4xl mx-auto px-4 mb-16"
      >
        <div className="h-4 bg-gradient-to-r from-lime-900/40 via-lime-600/60 to-lime-900/40 rounded-b-xl shadow-lg shadow-lime-500/20" />
      </motion.div>

      {/* ── WINNER PHOTO ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-4xl mx-auto px-4 mb-16"
      >
        <div className="relative rounded-2xl overflow-hidden border-2 border-lime-400/30 shadow-2xl shadow-lime-400/10">
          {/* Glow border effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-lime-400/10 via-transparent to-yellow-400/10 pointer-events-none z-10" />
          <img
            src="/winners.jpg"
            alt="Agri-Tech Hackathon 2026 Winners - Prize Distribution Ceremony"
            className="w-full h-auto object-cover rounded-2xl"
            style={{ filter: 'brightness(1.05) contrast(1.05)' }}
          />
          {/* Caption bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-20">
            <p className="text-white font-semibold text-sm md:text-base text-center tracking-wide">
              🏆 Agri-Tech Hackathon 2026 — Prize Distribution Ceremony
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── SPECIAL AWARDS ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-4xl mx-auto px-4"
      >
        <div className="flex items-center gap-3 justify-center mb-8">
          <Users size={20} className="text-lime-400" />
          <h2 className="text-white font-bold text-xl md:text-2xl tracking-wide uppercase">Special Awards</h2>
          <Users size={20} className="text-lime-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {specialAwards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + award.delay }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex flex-col items-center text-center overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${award.gradient} opacity-5 rounded-xl`} />
              <span className="text-3xl mb-2 relative z-10">{award.emoji}</span>
              <div className={`text-xs font-bold uppercase tracking-widest mb-2 bg-gradient-to-r ${award.gradient} bg-clip-text text-transparent relative z-10`}>
                {award.award}
              </div>
              <p className="text-white font-bold text-sm mb-1 relative z-10">{award.team}</p>
              <p className="text-white/60 text-xs leading-relaxed relative z-10">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Confetti */}
      {inView && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(35)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: ['#a8ff00', '#ffd700', '#ff6b6b', '#4ecdc4', '#fff'][i % 5],
                left: `${50 + (Math.random() - 0.5) * 60}%`,
                top: '10%',
              }}
              initial={{ y: 0, opacity: 1, scale: 0 }}
              animate={{
                y: [0, 600],
                opacity: [1, 1, 0],
                rotate: 360 * (Math.random() > 0.5 ? 1 : -1) * 2,
                scale: [0, 1, 0.5],
                x: (Math.random() - 0.5) * 300,
              }}
              transition={{
                duration: 2.5 + Math.random() * 1.5,
                delay: Math.random() * 0.8,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PrizeCards;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, CheckCircle2, Rocket, Award } from 'lucide-react';

const TimelineItem = ({ event, index, isInView }) => {
  const icons = [Calendar, Rocket, CheckCircle2, Award, Trophy];
  const Icon = icons[index % icons.length];
  const { ref, inView: itemInView } = useInView({ threshold: 0.5, triggerOnce: true });
  
  return (
    <motion.div
      ref={ref}
      className={`relative flex items-center mb-20 ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={itemInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, type: "spring" }}
    >
      {/* Content Card with Glassmorphism */}
      <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.03, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          {/* Glow Effect on Hover */}
          <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
          
          <div className="relative glass-card p-6 border-2 border-lime-400/20 hover:border-lime-400/50 transition-all">
            {/* Date Badge */}
            <motion.div
              className="inline-block px-4 py-2 bg-gradient-to-r from-lime-400 to-emerald-500 text-black font-bold rounded-full mb-4 text-sm"
              whileHover={{ scale: 1.1 }}
            >
              {event.date}
            </motion.div>
            
            {/* Title */}
            <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-3 justify-start md:justify-end">
              <Icon className="text-lime-400" size={28} />
              {event.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-300 leading-relaxed">
              {event.description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Center Dot with Pulse Effect */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div
          className="relative"
          initial={{ scale: 0 }}
          animate={itemInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
        >
          {/* Pulse Ring */}
          <motion.div
            className="absolute inset-0 bg-lime-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
          
          {/* Main Dot */}
          <div className="relative w-6 h-6 bg-gradient-to-br from-lime-400 to-emerald-500 rounded-full border-4 border-neutral-900 shadow-lg shadow-lime-500/50" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { ref: containerRef, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('timeline-container');
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrolled = -rect.top;
      const height = rect.height - window.innerHeight;
      const progress = Math.min(Math.max(scrolled / height, 0), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const events = [
    {
      date: '29th Jan 2026',
      title: 'Phase 1: Registrations Begin',
      description: 'Registrations go live and idea submission begins. Get ready to showcase your innovative ideas!',
    },
    {
      date: '10th March 2026',
      title: 'Submission Deadline',
      description: "Final day to submit your groundbreaking ideas. Don't miss this deadline!",
    },
    {
      date: '12th March 2026',
      title: 'Results Announcement',
      description: 'The moment of truth! Find out if your idea has been selected for the next phase.',
    },
    {
      date: '27th - 28th March 2026',
      title: 'Hackathon Sprint',
      description: 'Get ready for the main event! 24-hour coding sprint with mentorship and collaboration.',
    },
    {
      date: '28th March 2026',
      title: 'Winner Announcement',
      description: "Time's up! Final pitches, judging, and the crowning of champions.",
    }
  ];

  return (
    <div className="section-container" id="timeline-container" ref={containerRef}>
      {/* Title with Letter Animation */}
      <h1 className="faq-title mb-8">
        {['H','A','C','K','A','T','H','O','N',' ',' ','T','I','M','E','L','I','N','E'].map((letter, i) => (
          <span key={i} className="letter">{letter === ' ' ? '\u00A0' : letter}</span>
        ))}
      </h1>

      <p className="text-center text-gray-400 mb-20 max-w-2xl mx-auto text-lg">
        Join us on this exciting journey of innovation and creativity. Mark these dates on your calendar!
      </p>

      <div className="relative max-w-5xl mx-auto">
        {/* Animated Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-800 hidden md:block" />
        
        {/* Progress Line with Glow */}
        <motion.div
          className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-lime-400 via-emerald-500 to-lime-400 hidden md:block shadow-lg shadow-lime-500/50"
          style={{
            height: `${scrollProgress * 100}%`,
            transformOrigin: 'top',
          }}
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: scrollProgress } : {}}
        />

        {/* Timeline Items */}
        {events.map((event, index) => (
          <TimelineItem key={index} event={event} index={index} isInView={inView} />
        ))}
      </div>
    </div>
  );
};

const Trophy = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M6 9H4.5C3.67157 9 3 8.32843 3 7.5C3 6.67157 3.67157 6 4.5 6H6M18 9h1.5c.8284 0 1.5-.67157 1.5-1.5S20.3284 6 19.5 6H18M12 15c-2.7614 0-5-2.2386-5-5V6h10v4c0 2.7614-2.2386 5-5 5zm0 0v3m0 0H9m3 0h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Timeline;

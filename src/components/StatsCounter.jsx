import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Briefcase, Trophy, TrendingUp } from 'lucide-react';

const AnimatedNumber = ({ target, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTime;
      const startValue = 0;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * (target - startValue) + startValue);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatCard = ({ icon: Icon, value, label, suffix = "", color, delay }) => {
  return (
    <motion.div
      className="glass-card p-8 text-center border-2 border-lime-400/20 hover:border-lime-400 transition-all group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <motion.div
        className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${color} mb-4 group-hover:scale-110 transition-transform`}
      >
        <Icon size={32} className="text-white" />
      </motion.div>
      
      <div className="text-5xl md:text-6xl font-black gradient-text mb-2">
        <AnimatedNumber target={value} suffix={suffix} />
      </div>
      
      <p className="text-gray-400 font-medium uppercase tracking-wider text-sm">
        {label}
      </p>

      {/* Particle Effect on Hover */}
      <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-lime-400 rounded-full opacity-0 group-hover:opacity-100"
            style={{
              left: `${20 + i * 15}%`,
              bottom: '10%',
            }}
            animate={{
              y: [0, -50, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

const StatsCounter = () => {
  const stats = [
    {
      icon: Users,
      value: 500,
      suffix: "+",
      label: "Participants",
      color: "from-lime-400 to-emerald-500",
      delay: 0,
    },
    {
      icon: Briefcase,
      value: 125,
      suffix: "+",
      label: "Teams Formed",
      color: "from-emerald-400 to-teal-500",
      delay: 0.1,
    },
    {
      icon: Trophy,
      value: 200000,
      suffix: "",
      label: "Prize Pool (₹)",
      color: "from-yellow-400 to-orange-500",
      delay: 0.2,
    },
    {
      icon: TrendingUp,
      value: 5,
      suffix: "",
      label: "Innovation Tracks",
      color: "from-blue-400 to-purple-500",
      delay: 0.3,
    },
  ];

  return (
    <div className="section-container bg-gradient-to-b from-neutral-900 to-black">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-6xl font-black gradient-text mb-4">
          By The Numbers
        </h2>
        <p className="text-gray-400 text-lg">
          Join the growing community of agricultural innovators! 🌾
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default StatsCounter;

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const items = [
    { src: '/gallery/img1.jpg', type: 'image' },
    { src: '/gallery/img2.jpg', type: 'image' },
    { src: '/gallery/img3.jpg', type: 'image' },
    { src: '/gallery/img4.jpg', type: 'image' },
    { src: '/gallery/img5.jpg', type: 'image' },
    { src: '/gallery/img6.jpg', type: 'image' },
    { src: '/gallery/img7.jpg', type: 'image' },
    { src: '/gallery/img8.jpg', type: 'image' },
    { src: '/gallery/img9.jpg', type: 'image' },
    { src: '/gallery/img10.jpg', type: 'image' },
    { src: '/gallery/img11.jpg', type: 'image' },
    { src: '/gallery/img12.jpg', type: 'image' },
    { src: '/gallery/img13.jpg', type: 'image' },
    { src: '/gallery/img14.jpg', type: 'image' },
    { src: '/gallery/video1.mp4', type: 'video' },
    { src: '/gallery/video2.mp4', type: 'video' },
  ];

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <div className="min-h-screen bg-black">
      {/* HERO SECTION - Parallax */}
      <motion.div 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity }}
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(168, 255, 0, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(168, 255, 0, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-lime-400/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, -40, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        {/* Title */}
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tight">
              <motion.span 
                className="inline-block gradient-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                AGRI-TECH
              </motion.span>
            </h1>
            <motion.p 
              className="text-4xl md:text-6xl font-bold text-lime-400 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              2025
            </motion.p>
            <motion.p 
              className="text-2xl md:text-3xl text-gray-400 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Glimpses of Innovation
            </motion.p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-20 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-lime-400/50 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-lime-400 rounded-full" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* GALLERY SECTION */}
      <div className="relative px-4 md:px-8 py-20 bg-gradient-to-b from-black via-neutral-950 to-black">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">The Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-lime-400 to-emerald-500 mx-auto" />
        </motion.div>

        {/* MASONRY GRID - Natural Aspect Ratios */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 max-w-[2000px] mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="group relative mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-2xl bg-neutral-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ 
                scale: 1.03,
                zIndex: 20,
                transition: { duration: 0.3 }
              }}
              onClick={() => setSelectedIndex(i)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image/Video */}
              {item.type === 'image' ? (
                <motion.img 
                  src={item.src} 
                  alt=""
                  className="w-full h-auto block"
                  loading="lazy"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
              ) : (
                <div className="relative">
                  <video 
                    src={item.src}
                    className="w-full h-auto block"
                    muted={isMuted}
                    loop
                    playsInline
                    autoPlay={hoveredIndex === i}
                  />
                  {/* Play Overlay */}
                  <AnimatePresence>
                    {hoveredIndex !== i && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-black/40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className="w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center shadow-2xl shadow-lime-400/50">
                          <Play size={32} className="text-black ml-1" fill="currentColor" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Hover Gradient Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              >
                {/* Expand Icon */}
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
              </motion.div>

              {/* Glow Border on Hover */}
              <motion.div 
                className="absolute inset-0 border-2 border-lime-400/0 group-hover:border-lime-400 rounded-2xl transition-all duration-300"
                initial={false}
              />

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  x: hoveredIndex === i ? ['-100%', '100%'] : '-100%'
                }}
                transition={{
                  duration: 1.5,
                  repeat: hoveredIndex === i ? Infinity : 0,
                  repeatDelay: 1
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Load More Indicator (Optional) */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-sm">
            {items.length} memories captured
          </p>
        </motion.div>
      </div>

      {/* LIGHTBOX - Premium Fullscreen */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <motion.button 
              className="absolute top-6 right-6 w-14 h-14 bg-white/5 hover:bg-lime-400 rounded-full flex items-center justify-center group backdrop-blur-xl border border-white/10 transition-all z-30"
              onClick={() => setSelectedIndex(null)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="text-white group-hover:text-black transition-colors" size={28} />
            </motion.button>

            {/* Navigation */}
            <motion.button 
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/5 hover:bg-lime-400 rounded-full flex items-center justify-center group backdrop-blur-xl border border-white/10 transition-all z-30"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="text-white group-hover:text-black transition-colors" size={32} />
            </motion.button>

            <motion.button 
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/5 hover:bg-lime-400 rounded-full flex items-center justify-center group backdrop-blur-xl border border-white/10 transition-all z-30"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="text-white group-hover:text-black transition-colors" size={32} />
            </motion.button>

            {/* Mute Toggle for Videos */}
            {items[selectedIndex].type === 'video' && (
              <motion.button
                className="absolute top-6 right-24 w-14 h-14 bg-white/5 hover:bg-lime-400 rounded-full flex items-center justify-center group backdrop-blur-xl border border-white/10 transition-all z-30"
                onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMuted ? (
                  <VolumeX className="text-white group-hover:text-black transition-colors" size={24} />
                ) : (
                  <Volume2 className="text-white group-hover:text-black transition-colors" size={24} />
                )}
              </motion.button>
            )}

            {/* Content with Glow Effect */}
            <motion.div
              className="relative w-full h-full flex items-center justify-center p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {items[selectedIndex].type === 'video' ? (
                <video 
                  src={items[selectedIndex].src} 
                  controls 
                  autoPlay
                  muted={isMuted}
                  className="max-w-full max-h-full rounded-2xl"
                  style={{ 
                    objectFit: 'contain',
                    boxShadow: '0 0 100px rgba(168, 255, 0, 0.3)'
                  }}
                />
              ) : (
                <motion.img 
                  src={items[selectedIndex].src} 
                  alt=""
                  className="max-w-full max-h-full rounded-2xl"
                  style={{ 
                    objectFit: 'contain',
                    boxShadow: '0 0 100px rgba(168, 255, 0, 0.3)'
                  }}
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>

            {/* Counter with Progress */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
              <div className="px-8 py-4 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
                <div className="flex items-center gap-4">
                  <span className="text-white font-bold text-lg">{selectedIndex + 1}</span>
                  <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-lime-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${((selectedIndex + 1) / items.length) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <span className="text-gray-400 font-medium text-lg">{items.length}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Images,
  Sparkles,
  Maximize2,
  Play,
  Pause,
  Calendar,
  ArrowLeft,
  SlidersHorizontal,
  LayoutGrid
} from 'lucide-react';
import { Link } from 'react-router-dom';

const items2025 = [
  { src: '/gallery/img1.jpg', tag: 'Team Ideation' },
  { src: '/gallery/img2.jpg', tag: 'Mentorship Session' },
  { src: '/gallery/img3.jpg', tag: 'Hardware Prototyping' },
  { src: '/gallery/img4.jpg', tag: 'Software Sprint' },
  { src: '/gallery/img5.jpg', tag: 'Code Review' },
  { src: '/gallery/img6.jpg', tag: 'Midway Evaluation' },
  { src: '/gallery/img7.jpg', tag: 'Project Demos' },
  { src: '/gallery/img8.jpg', tag: 'Jury Evaluation' },
  { src: '/gallery/img9.jpg', tag: 'Team Collaboration' },
  { src: '/gallery/img10.jpg', tag: 'Keynote Speech' },
  { src: '/gallery/img11.jpg', tag: 'Participant Engagement' },
  { src: '/gallery/img12.jpg', tag: 'Award Ceremony' },
  { src: '/gallery/img13.jpg', tag: 'Winner Celebration' },
  { src: '/gallery/img14.jpg', tag: 'Closing Ceremony' },
];

const items2026 = [
  { src: '/gallery2026/img1.jpg', tag: 'Hackathon Kickoff' },
  { src: '/gallery2026/img2.jpg', tag: 'Innovation Sprint' },
  { src: '/gallery2026/img3.jpg', tag: 'Hardware Labs' },
  { src: '/gallery2026/img4.jpg', tag: 'Team Discussion' },
  { src: '/gallery2026/img5.jpg', tag: 'Mentorship Guidance' },
  { src: '/gallery2026/img6.jpg', tag: 'Circuit Prototyping' },
  { src: '/gallery2026/img7.jpg', tag: 'Deep Hacking' },
  { src: '/gallery2026/img8.jpg', tag: 'Design Iteration' },
  { src: '/gallery2026/img9.jpg', tag: 'AgriTech Solutions' },
  { src: '/gallery2026/img10.jpg', tag: 'Jury Assessment' },
  { src: '/gallery2026/img11.jpg', tag: 'Project Showcase' },
  { src: '/gallery2026/img12.jpg', tag: 'Live Demonstrations' },
  { src: '/gallery2026/img13.jpg', tag: 'Special Recognitions' },
  { src: '/gallery2026/img14.jpg', tag: 'Podium Finishers' },
  { src: '/gallery2026/img15.jpg', tag: 'Winner Felicitation' },
  { src: '/gallery2026/img16.jpg', tag: 'Team Spirits' },
  { src: '/gallery2026/img17.jpg', tag: 'Grand Finale' },
  { src: '/gallery2026/img18.jpg', tag: 'Commemorative Photo' },
];

const YEARS = [
  {
    year: '2026',
    title: 'Agri-Tech Hackathon 2026',
    subtitle: 'Latest Edition · February 2026',
    badge: 'Latest Edition',
    items: items2026,
  },
  {
    year: '2025',
    title: 'Agri-Tech Hackathon 2025',
    subtitle: 'Inaugural Edition',
    badge: 'Archive',
    items: items2025,
  },
];

const Gallery = () => {
  const [activeYearIndex, setActiveYearIndex] = useState(0); // 0 = 2026 (Latest)
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'slider'
  const [sliderIndex, setSliderIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.18], [1, 0.96]);

  const currentYearData = YEARS[activeYearIndex];
  const items = currentYearData.items;

  // Change year handler
  const handleYearChange = (idx) => {
    setActiveYearIndex(idx);
    setSelectedIndex(null);
    setSliderIndex(0);
  };

  // Lightbox navigation
  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % items.length : null));
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + items.length) % items.length : null));
  }, [items.length]);

  // Slideshow navigation
  const nextSlide = useCallback(() => {
    setSliderIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setSliderIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  // Auto-play for slider mode
  useEffect(() => {
    if (!isPlaying || viewMode !== 'slider') return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(interval);
  }, [isPlaying, viewMode, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex !== null) {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'Escape') setSelectedIndex(null);
      } else if (viewMode === 'slider') {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, viewMode, handleNext, handlePrev, nextSlide, prevSlide]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-lime-400 selection:text-black">
      {/* ── AMBIENT BACKGROUND GLOWS ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-lime-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px]" />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-lime-400/5 rounded-full blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#a8ff00 1px, transparent 1px), linear-gradient(90deg, #a8ff00 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* ── TOP NAVIGATION BAR ── */}
      <div className="relative z-30 pt-6 px-4 md:px-12 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-lime-400/50 text-gray-300 hover:text-lime-400 text-sm font-medium transition-all group backdrop-blur-md"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-lime-400/80 font-mono bg-lime-400/10 border border-lime-400/20 px-3.5 py-1.5 rounded-full">
          <Sparkles size={13} className="text-lime-400 animate-pulse" />
          <span>Visual Archive</span>
        </div>
      </div>

      {/* ── HERO BANNER ── */}
      <motion.div
        className="relative z-10 pt-10 pb-8 md:pt-14 md:pb-12 text-center px-4"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs md:text-sm font-medium mb-5"
        >
          <Images size={15} />
          <span>Official Event Photo Gallery</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4"
        >
          AGRI-TECH <span className="gradient-text">GALLERY</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto font-light mb-8"
        >
          Relive the passion, code, hardware prototypes, and unforgettable moments of AgriTech Hackathon.
        </motion.p>

        {/* ── YEAR SWITCHER SLIDER (Interactive Pill) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-3 mb-6"
        >
          <div className="relative flex items-center bg-neutral-900/90 backdrop-blur-2xl p-1.5 rounded-full border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
            {YEARS.map((y, idx) => {
              const isSelected = activeYearIndex === idx;
              return (
                <button
                  key={y.year}
                  onClick={() => handleYearChange(idx)}
                  className={`relative z-10 px-8 py-3 rounded-full text-base md:text-lg font-bold transition-colors duration-300 flex items-center gap-2.5 ${
                    isSelected ? 'text-black font-extrabold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {/* Sliding highlight indicator */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeYearIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400 shadow-[0_0_25px_rgba(168,255,0,0.5)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{y.year}</span>
                    {idx === 0 && (
                      <span
                        className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-semibold ${
                          isSelected
                            ? 'bg-black/20 text-black border border-black/20'
                            : 'bg-lime-400/20 text-lime-400 border border-lime-400/30'
                        }`}
                      >
                        New
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 text-xs md:text-sm text-gray-400">
            <span className="text-lime-400 font-semibold">{currentYearData.title}</span>
            <span>·</span>
            <span>{items.length} High-Res Photos</span>
          </div>
        </motion.div>

        {/* ── CONTROLS TOOLBAR (Grid vs Slider mode toggle) ── */}
        <div className="flex items-center justify-center gap-3">
          <div className="inline-flex items-center bg-white/5 backdrop-blur-md p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all ${
                viewMode === 'grid'
                  ? 'bg-lime-400 text-black shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <LayoutGrid size={15} />
              <span>Masonry Grid</span>
            </button>
            <button
              onClick={() => setViewMode('slider')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all ${
                viewMode === 'slider'
                  ? 'bg-lime-400 text-black shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <SlidersHorizontal size={15} />
              <span>Interactive Slider</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* ── MAIN CONTENT AREA ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-24">
        {/* ======================================================== */}
        {/* MODE 1: INTERACTIVE SLIDER / CAROUSEL                     */}
        {/* ======================================================== */}
        {viewMode === 'slider' ? (
          <div className="relative w-full max-w-5xl mx-auto my-6">
            {/* Slider frame */}
            <div className="relative aspect-[16/10] md:aspect-[16/9] bg-neutral-900 rounded-3xl overflow-hidden border border-lime-400/30 shadow-[0_0_60px_rgba(168,255,0,0.15)] group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={sliderIndex}
                  src={items[sliderIndex].src}
                  alt={`AgriTech ${currentYearData.year} - Photo ${sliderIndex + 1}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="w-full h-full object-cover select-none"
                />
              </AnimatePresence>

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

              {/* Top controls in slider */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-lime-400 font-semibold">
                  Photo {sliderIndex + 1} of {items.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-full bg-black/60 hover:bg-lime-400 hover:text-black backdrop-blur-md border border-white/10 text-white transition-colors"
                    title={isPlaying ? 'Pause Auto-Play' : 'Start Auto-Play'}
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </button>
                  <button
                    onClick={() => setSelectedIndex(sliderIndex)}
                    className="p-2 rounded-full bg-black/60 hover:bg-lime-400 hover:text-black backdrop-blur-md border border-white/10 text-white transition-colors"
                    title="View Fullscreen"
                  >
                    <Maximize2 size={16} />
                  </button>
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-20 pointer-events-none">
                <div>
                  <span className="text-xs uppercase tracking-wider text-lime-400 font-bold bg-lime-400/20 px-2.5 py-1 rounded-full border border-lime-400/30">
                    {items[sliderIndex].tag}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-white mt-2">
                    Agri-Tech {currentYearData.year}
                  </h3>
                </div>
              </div>

              {/* Previous / Next Arrow Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-lime-400 hover:text-black border border-white/10 backdrop-blur-md text-white flex items-center justify-center transition-all opacity-80 hover:opacity-100 z-20 group-hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-lime-400 hover:text-black border border-white/10 backdrop-blur-md text-white flex items-center justify-center transition-all opacity-80 hover:opacity-100 z-20 group-hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Thumbnail scrubber bar */}
            <div className="mt-4 flex items-center gap-2 overflow-x-auto py-2 px-1 scrollbar-thin scrollbar-thumb-lime-400">
              {items.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSliderIndex(idx)}
                  className={`relative flex-shrink-0 w-16 h-12 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    sliderIndex === idx
                      ? 'border-lime-400 scale-105 shadow-[0_0_12px_rgba(168,255,0,0.5)]'
                      : 'border-white/10 opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={item.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* ======================================================== */
          /* MODE 2: RESPONSIVE MASONRY GRID                          */
          /* ======================================================== */
          <AnimatePresence mode="wait">
            <motion.div
              key={currentYearData.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 [column-fill:_balance]"
            >
              {items.map((item, index) => (
                <motion.div
                  key={`${currentYearData.year}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
                  className="mb-5 break-inside-avoid"
                >
                  <div
                    onClick={() => setSelectedIndex(index)}
                    className="relative group cursor-pointer rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-lime-400/80 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,255,0,0.25)]"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={item.src}
                        alt={`AgriTech ${currentYearData.year} - Memory ${index + 1}`}
                        loading="lazy"
                        className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-500 ease-out"
                      />

                      {/* Glass gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                        {/* Top tag badge */}
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono text-lime-400 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-lime-400/30">
                            #{index + 1}
                          </span>
                          <div className="w-8 h-8 rounded-full bg-lime-400 text-black flex items-center justify-center shadow-lg shadow-lime-400/40">
                            <Maximize2 size={14} />
                          </div>
                        </div>

                        {/* Bottom title */}
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-lime-400">
                            {currentYearData.year} Edition
                          </span>
                          <h4 className="text-sm font-bold text-white leading-tight mt-0.5">
                            {item.tag}
                          </h4>
                        </div>
                      </div>
                    </div>

                    {/* Subtle bottom edge lime shimmer on hover */}
                    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* ── FOOTER SUMMARY ── */}
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            Displaying <span className="text-lime-400 font-bold">{items.length}</span> photographs from{' '}
            <span className="text-white font-medium">{currentYearData.title}</span>.
          </p>
        </div>
      </div>

      {/* ======================================================== */}
      {/* ── FULLSCREEN LIGHTBOX MODAL ──                          */}
      {/* ======================================================== */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10 select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            {/* Top Toolbar */}
            <div
              className="absolute top-4 left-4 right-4 md:top-6 md:left-8 md:right-8 flex items-center justify-between z-30 pointer-events-none"
            >
              {/* Badge & Year */}
              <div className="pointer-events-auto flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono text-lime-400 font-semibold">
                  AgriTech {currentYearData.year}
                </span>
                <span className="text-gray-400 text-xs hidden sm:inline">
                  {items[selectedIndex].tag}
                </span>
              </div>

              {/* Close Button */}
              <motion.button
                onClick={() => setSelectedIndex(null)}
                className="pointer-events-auto w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-lime-400 hover:text-black border border-white/15 text-white flex items-center justify-center transition-all duration-200"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close lightbox"
              >
                <X size={22} />
              </motion.button>
            </div>

            {/* Left Prev Arrow */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/60 hover:bg-lime-400 hover:text-black border border-white/10 backdrop-blur-md text-white flex items-center justify-center transition-all z-30"
              whileHover={{ scale: 1.1, x: -4 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous photo"
            >
              <ChevronLeft size={28} />
            </motion.button>

            {/* Right Next Arrow */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/60 hover:bg-lime-400 hover:text-black border border-white/10 backdrop-blur-md text-white flex items-center justify-center transition-all z-30"
              whileHover={{ scale: 1.1, x: 4 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next photo"
            >
              <ChevronRight size={28} />
            </motion.button>

            {/* Main Lightbox Image Viewport */}
            <motion.div
              className="relative max-w-5xl max-h-[82vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedIndex}
                  src={items[selectedIndex].src}
                  alt={`Full size - ${items[selectedIndex].tag}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="max-w-full max-h-[82vh] object-contain rounded-2xl border border-white/10 shadow-[0_0_80px_rgba(168,255,0,0.25)]"
                />
              </AnimatePresence>
            </motion.div>

            {/* Bottom Progress Bar & Counter */}
            <div
              className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-5 py-2.5 rounded-full bg-neutral-900/90 backdrop-blur-xl border border-white/10 flex items-center gap-4 shadow-xl">
                <span className="text-lime-400 font-mono font-bold text-sm">
                  {selectedIndex + 1}
                </span>

                {/* Progress bar */}
                <div className="w-24 md:w-40 h-1.5 bg-white/15 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-lime-400 to-emerald-400"
                    animate={{ width: `${((selectedIndex + 1) / items.length) * 100}%` }}
                    transition={{ duration: 0.25 }}
                  />
                </div>

                <span className="text-gray-400 font-mono text-sm">
                  {items.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;

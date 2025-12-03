
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sprout, TrendingUp, Fuel, Users, Lightbulb, X } from "lucide-react";

const FlipCard = ({ image, problemStatement, details, icon: Icon, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-full aspect-[4/3] cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-2 border-lime-400/20"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-6">
            <Icon className="text-lime-400 mb-3" size={40} strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-white mb-2">{problemStatement}</h3>
            <p className="text-lime-400 text-sm font-semibold flex items-center gap-2">
              Hover to explore <span className="text-lg">→</span>
            </p>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-neutral-900 to-black border-2 border-lime-400 p-6"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-lime-400 scrollbar-track-neutral-800">
            <div className="flex items-center gap-3 mb-4">
              <Icon className="text-lime-400" size={32} />
              <h3 className="text-xl font-bold gradient-text">{problemStatement}</h3>
            </div>
            
            <div className="space-y-3">
              {details.map((detail, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border-l-4 border-lime-400"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isFlipped ? 1 : 0, x: isFlipped ? 0 : -20 }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                >
                  <h4 className="text-lime-400 font-bold text-sm mb-1">
                    {detail.title}
                  </h4>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {detail.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Flip Indicator */}
      {!isFlipped && (
        <motion.div
          className="absolute top-4 right-4 bg-lime-400 text-black rounded-full p-2 z-10"
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <Lightbulb size={20} fill="currentColor" />
        </motion.div>
      )}
    </motion.div>
  );
};

const Domain = () => {
  const [activeModal, setActiveModal] = useState(null);

  const domains = [
    {
      src: require("../assets/images/farm.jpg"),
      alt: "Green Growth",
      problemStatement: "Green Growth",
      icon: Sprout,
      details: [
        { title: "🌾 AI/IoT Pest Detection", desc: "IoT irrigation controllers" },
        { title: "🧪 Soil Nutrient Monitoring", desc: "Soil health scanners and carbon capture monitoring devices" },
        { title: "🌱 Regenerative Farming Impact", desc: "Soil regenerative dashboards quantifying environmental and economic benefits of regenerative practices." },
        { title: "💧 Smart Irrigation System", desc: "AI water-usage prediction systems" },
      ],
    },
    {
      src: require("../assets/images/supply.png"),
      alt: "Supply Chain",
      problemStatement: "Agri-Market Access",
      icon: TrendingUp,
      details: [
        { title: "🔗 Blockchain Traceability", desc: "Track products from farm to consumer with transparency and enhanced food safety." },
        { title: "📊 AI-Driven Demand Prediction", desc: "Predict crop demand using market trends and historical data." },
        { title: "🤝 Direct Marketplaces", desc: "Direct farmer-to-consumer platforms." },
        { title: "📦 Post harvest innovation, quality grading and smart storage", desc: "Smart cold storage with spoilage sensors, automated grading machines and freshness-indicators" },
      ],
    },
    {
      src: require("../assets/images/robot.jpg"),
      alt: "Next-Gen Agri-Tech",
      problemStatement: "Next-Gen Agri-Tech",
      icon: Fuel,
      details: [
        { title: "🤖 Computer Vision and Autonomous Robots", desc: "Autonomous rovers and solar powered drones" },
        { title: "📡 IoT and AI", desc: "Multi-sensor crop monitors, AI disease identification and farm digital twins" },
        { title: "📈 Predictive Analytics", desc: "ML models for efficient resource allocation in energy crops." },
        
      ],
    },
    {
      src: require("../assets/images/farmer.jpg"),
      alt: "Farmer Empowerment",
      problemStatement: "Farmer Empowerment",
      icon: Users,
      details: [
        { title: "📱 AR/VR training", desc: "AR/VR learning modules and collaborative knowledge sharing apps" },
        { title: "🤖 Multilingual AI Community Platforms", desc: "Multilingual AI Chatbot and community platform for instant farming advice." },
        { title: "🔍 Crop Health Diagnostic Tool", desc: "Low cost crop diagnostic devices" },
        { title: "🌦️ Localized Weather Advisory", desc: "Compact weather stations via SMS/app." },
      ],
    },
    
  ];

  return (
    <div className="section-container">
      <h1 className="faq-title mb-16">
        {['D', 'O', 'M', 'A', 'I', 'N', 'S'].map((letter, i) => (
          <span key={i} className="letter">{letter}</span>
        ))}
      </h1>

      <p className="text-center text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
        Choose your domain and revolutionize agriculture with cutting-edge technology! 🌾
      </p>

      {/* Flip Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {domains.map((domain, index) => (
          <FlipCard
            key={index}
            image={{ src: domain.src, alt: domain.alt }}
            problemStatement={domain.problemStatement}
            details={domain.details}
            icon={domain.icon}
            index={index}
          />
        ))}
      </div>

      {/* Mobile Modal Trigger */}
      <div className="grid grid-cols-1 md:hidden gap-4">
        {domains.map((domain, index) => {
          const Icon = domain.icon;
          return (
            <motion.button
              key={index}
              onClick={() => setActiveModal(domain)}
              className="glass-card p-6 text-left border-2 border-lime-400/20 hover:border-lime-400 transition-all"
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-4">
                <Icon className="text-lime-400" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-white">{domain.problemStatement}</h3>
                  <p className="text-sm text-lime-400">Tap to explore →</p>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Mobile Modal */}
      <AnimatePresence>
        {activeModal && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
            />
            <motion.div
              className="fixed inset-4 z-50 glass-card p-6 overflow-y-auto md:hidden rounded-2xl border-2 border-lime-400"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-white/60 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <activeModal.icon className="text-lime-400" size={32} />
                <h2 className="text-2xl font-bold gradient-text">{activeModal.problemStatement}</h2>
              </div>

              <div className="space-y-4">
                {activeModal.details.map((detail, idx) => (
                  <div key={idx} className="border-l-4 border-lime-400 pl-4 py-2">
                    <h3 className="text-lg font-semibold text-lime-400 mb-1">
                      {detail.title}
                    </h3>
                    <p className="text-gray-300">{detail.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Domain;

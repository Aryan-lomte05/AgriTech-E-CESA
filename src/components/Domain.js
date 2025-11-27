// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X } from "lucide-react";

// const Domain = () => {
//   const [activeImage, setActiveImage] = useState(null);

//   const images = [
//     {
//       src: require("../assets/images/farm.jpg"),
//       alt: "Precision Agriculture",
//       problemStatement: "Precision Agriculture",
//       details: [
//         { title: "AI/IoT-Enabled Pest Detection", desc: "Real-time monitoring system to identify pest infestations and minimize crop damage." },
//         { title: "Automated Soil Nutrient Monitoring", desc: "IoT-based solution for continuous soil assessment and fertilizer optimization." },
//         { title: "Impact Estimator for Regenerative Farming", desc: "Platform quantifying environmental and economic benefits of regenerative practices." },
//         { title: "Smart Irrigation System", desc: "Optimize water usage with soil sensors and weather forecasts." },
//       ],
//     },
//     {
//       src: require("../assets/images/supply.png"),
//       alt: "Supply Chain",
//       problemStatement: "Supply Chain & Market Access",
//       details: [
//         { title: "Blockchain-Based Traceability", desc: "Track products from farm to consumer with transparency and enhanced food safety." },
//         { title: "AI-Driven Demand Forecasting", desc: "Predict crop demand using market trends and historical data." },
//         { title: "Farmer-to-Consumer Platform", desc: "Direct marketplace connecting farmers with consumers for fair pricing." },
//         { title: "Smart Packaging Solution", desc: "Sensor-embedded packaging to monitor freshness and extend shelf life." },
//       ],
//     },
//     {
//       src: require("../assets/images/robot.jpg"),
//       alt: "Biofuel",
//       problemStatement: "Biofuel Innovation",
//       details: [
//         { title: "AI-Optimized Biomass Collection", desc: "Streamline agricultural residue collection for biofuel production." },
//         { title: "Smart Biomass Management", desc: "IoT sensors to monitor storage and prevent degradation." },
//         { title: "Energy Crop Yield Prediction", desc: "ML models for efficient resource allocation in energy crops." },
//         { title: "Community Biofuel Initiative", desc: "Cooperative model for shared biomass contribution and benefits." },
//       ],
//     },
//     {
//       src: require("../assets/images/farmer.jpg"),
//       alt: "Farmer Empowerment",
//       problemStatement: "Farmers' Empowerment",
//       details: [
//         { title: "Mobile Training Platform", desc: "Interactive modules on sustainable practices in local languages." },
//         { title: "AI-Powered Support Platform", desc: "Chatbot and community platform for instant farming advice." },
//         { title: "Crop Health Diagnostic Tool", desc: "AI-powered image analysis for disease diagnosis." },
//         { title: "Localized Weather Advisory", desc: "Hyper-local forecasts and farming advisories via SMS/app." },
//       ],
//     },
//     {
//       src: require("../assets/images/soil.jpg"),
//       alt: "Open Innovation",
//       problemStatement: "Open Innovation",
//       details: [
//         { title: "Your Disruptive Idea", desc: "Propose innovative solutions in any agri-tech-related domain." },
//       ],
//     },
//   ];

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       const modal = document.querySelector(".domain-modal");
//       if (activeImage && modal && !modal.contains(event.target)) {
//         setActiveImage(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [activeImage]);

//   return (
//     <div className="section-container">
//       <h1 className="faq-title mb-16">
//         {['D', 'O', 'M', 'A', 'I', 'N', 'S'].map((letter, i) => (
//           <span key={i} className="letter">{letter}</span>
//         ))}
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {images.map((image, index) => (
//           <motion.div
//             key={index}
//             className="relative group overflow-hidden rounded-xl cursor-pointer aspect-video"
//             whileHover={{ scale: 1.05 }}
//             onClick={() => setActiveImage(image)}
//           >
//             <img
//               src={image.src}
//               alt={image.alt}
//               className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                 <h3 className="text-xl font-bold mb-2">{image.problemStatement}</h3>
//                 <button className="btn-primary text-sm px-4 py-2">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {activeImage && (
//           <>
//             <motion.div
//               className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setActiveImage(null)}
//             />
//             <motion.div
//               className="domain-modal fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-11/12 max-w-3xl max-h-[80vh] overflow-y-auto glass-card"
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//             >
//               <button
//                 onClick={() => setActiveImage(null)}
//                 className="absolute top-4 right-4 text-white/60 hover:text-white z-10"
//               >
//                 <X className="w-6 h-6" />
//               </button>

//               <h2 className="text-3xl font-bold mb-6 gradient-text">
//                 {activeImage.problemStatement}
//               </h2>

//               <div className="space-y-4">
//                 {activeImage.details.map((detail, idx) => (
//                   <div key={idx} className="border-l-4 border-lime-400 pl-4 py-2">
//                     <h3 className="text-lg font-semibold text-lime-400 mb-1">
//                       {detail.title}
//                     </h3>
//                     <p className="text-gray-300">{detail.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Domain;
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
      alt: "Precision Agriculture",
      problemStatement: "Precision Agriculture",
      icon: Sprout,
      details: [
        { title: "🌾 AI/IoT Pest Detection", desc: "Real-time monitoring system to identify pest infestations and minimize crop damage." },
        { title: "🧪 Soil Nutrient Monitoring", desc: "IoT-based solution for continuous soil assessment and fertilizer optimization." },
        { title: "🌱 Regenerative Farming Impact", desc: "Platform quantifying environmental and economic benefits of regenerative practices." },
        { title: "💧 Smart Irrigation System", desc: "Optimize water usage with soil sensors and weather forecasts." },
      ],
    },
    {
      src: require("../assets/images/supply.png"),
      alt: "Supply Chain",
      problemStatement: "Supply Chain & Market Access",
      icon: TrendingUp,
      details: [
        { title: "🔗 Blockchain Traceability", desc: "Track products from farm to consumer with transparency and enhanced food safety." },
        { title: "📊 AI-Driven Demand Forecasting", desc: "Predict crop demand using market trends and historical data." },
        { title: "🤝 Farmer-to-Consumer Platform", desc: "Direct marketplace connecting farmers with consumers for fair pricing." },
        { title: "📦 Smart Packaging Solution", desc: "Sensor-embedded packaging to monitor freshness and extend shelf life." },
      ],
    },
    {
      src: require("../assets/images/robot.jpg"),
      alt: "Biofuel",
      problemStatement: "Biofuel Innovation",
      icon: Fuel,
      details: [
        { title: "🤖 AI-Optimized Biomass Collection", desc: "Streamline agricultural residue collection for biofuel production." },
        { title: "📡 Smart Biomass Management", desc: "IoT sensors to monitor storage and prevent degradation." },
        { title: "📈 Energy Crop Yield Prediction", desc: "ML models for efficient resource allocation in energy crops." },
        { title: "🌿 Community Biofuel Initiative", desc: "Cooperative model for shared biomass contribution and benefits." },
      ],
    },
    {
      src: require("../assets/images/farmer.jpg"),
      alt: "Farmer Empowerment",
      problemStatement: "Farmers' Empowerment",
      icon: Users,
      details: [
        { title: "📱 Mobile Training Platform", desc: "Interactive modules on sustainable practices in local languages." },
        { title: "🤖 AI-Powered Support Platform", desc: "Chatbot and community platform for instant farming advice." },
        { title: "🔍 Crop Health Diagnostic Tool", desc: "AI-powered image analysis for disease diagnosis." },
        { title: "🌦️ Localized Weather Advisory", desc: "Hyper-local forecasts and farming advisories via SMS/app." },
      ],
    },
    {
      src: require("../assets/images/soil.jpg"),
      alt: "Open Innovation",
      problemStatement: "Open Innovation",
      icon: Lightbulb,
      details: [
        { title: "💡 Your Disruptive Idea", desc: "Propose innovative solutions in any agri-tech-related domain." },
        { title: "🚀 Breakthrough Technologies", desc: "Explore emerging tech like drones, satellites, and quantum computing for agriculture." },
        { title: "🌍 Sustainable Solutions", desc: "Create eco-friendly innovations that benefit both farmers and the planet." },
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

import { motion } from 'framer-motion';

const GalleryLoader = () => (
  <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
    <div className="text-center">
      <motion.div
        className="w-20 h-20 border-4 border-lime-400 border-t-transparent rounded-full mx-auto mb-6"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.p 
        className="text-lime-400 text-xl font-bold"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Loading Memories...
      </motion.p>
    </div>
  </div>
);

export default GalleryLoader;

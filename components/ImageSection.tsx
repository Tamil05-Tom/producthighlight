import { motion } from "framer-motion";

export const ImageSection = () => {
  return (
    <div className="glass-card p-6 rounded-lg overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative aspect-[4/3] rounded-lg overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
          alt="Medical Imaging Interface"
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">
            Advanced Visualization
          </h3>
          <p className="text-gray-200">
            Experience seamless 3D rendering and analysis
          </p>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative aspect-square rounded-lg overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Multi-monitor Setup"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative aspect-square rounded-lg overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
            alt="Analysis Tools"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </div>
    </div>
  );
};
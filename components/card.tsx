"use client";
import React, { useState, useEffect } from 'react';
import { Eye, Zap, Shield, Brain } from "lucide-react";
import { motion } from "framer-motion";

// const features = [
//   {
//     icon: <Eye className="w-6 h-6 text-purple-400" />,
//     title: "Intuitive Viewer",
//     description: "Advanced visualization with zero-footprint web access from anywhere"
//   },
//   {
//     icon: <Zap className="w-6 h-6 text-green-400" />,
//     title: "Blazing Fast",
//     description: "HTJ2K technology for instantaneous image loading and rendering"
//   },
//   {
//     icon: <Brain className="w-6 h-6 text-blue-400" />,
//     title: "Secure Sharing",
//     description: "Share images and reports to patients and physicians with ease"
//   },
//   {
//     icon: <Shield className="w-6 h-6 text-orange-400" />,
//     title: "AI-Powered Reporting",
//     description: "Smart description generation with in-built speech-to-text for accurate reports"
//   }
// ];

export const features = [
  { id: 0, icon: <Eye className="w-6 h-6 text-purple-400" />, title: "Intuitive Viewer", description: "Advanced visualization with zero-footprint web access from anywhere" },
  { id: 1, icon: <Zap className="w-6 h-6 text-green-400" />, title: "Blazing Fast", description: "HTJ2K technology for instantaneous image loading and rendering" },
  { id: 2, icon: <Brain className="w-6 h-6 text-blue-400" />, title: "Secure Sharing", description: "Share images and reports to patients and physicians with ease" },
  { id: 3, icon: <Shield className="w-6 h-6 text-orange-400" />, title: "AI-Powered Reporting", description: "Smart description generation with in-built speech-to-text for accurate reports" },
];

export const FeatureCard = ({
  id,
  icon,
  title,
  description,
  activeId
}: {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  activeId: number;
}) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{
        opacity: activeId === id ? 1 : 0.3,
        y: 0,
        scale: activeId === id ? 1.05 : 1,
    }}
    transition={{ duration: 0.5 }}
    className={`
        group flex flex-col w-full px-4 py-4 
        bg-[#111111] rounded-2xl cursor-pointer 
        transition-all duration-300
        ${activeId === id ? 'ring-2 ring-white/20 bg-[#1A1A1A]' : 'filter '}
    `}
>
    <div className="flex items-start">
        <div className={`flex-shrink-0 transition-transform duration-300 ${activeId === id ? 'scale-110' : ''}`}>
            {icon}
        </div>
    </div>
    <div className="mt-4">
        <h3 className="text-white text-lg font-medium mb-1">{title}</h3>
        <p className="text-[#8E8E8E] text-sm leading-relaxed">{description}</p>
    </div>
</motion.div>
  );
};

const Index = ( ) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black px-4 flex items-center">
      <div className="max-w-3xl mx-auto w-full">
        <motion.div
          className="w-full h-2 bg-gray-800 rounded-full mb-8 overflow-hidden"
          initial={{ width: "0%" }}
        >
          <motion.div
            className="h-full bg-white/20"
            animate={{
              width: ["0%", "100%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>

        <div className="flex flex-col space-y-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              activeId={activeIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
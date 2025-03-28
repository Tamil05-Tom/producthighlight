"use client"

import React, { useState, useEffect, useRef } from 'react';
import { MoveRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import MacWindow from './MacWindow';

const LinearLoader = ({ duration = 5000 }) => {
  return (
    <motion.div
      className="absolute bottom-0 left-0 h-[2px] bg-[#754cff]/30 origin-left w-full"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: duration / 1000,
          ease: "linear"
        }}
        className="h-full bg-[#754cff] origin-left w-full"
      />
    </motion.div>
  );
};

const Feature3: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const features = [
    {
      title: "All-in-One Platform",
      description: "Billing, RIS, Reporting, and PACS—fully integrated to simplify workflows. No switching between softwares.",
      image: "/feature-3/all-in-one.jpg"
    },
    {
      title: "Hybrid Performance",
      description: "Experience local speed with cloud-backed security for the best of both worlds.",
      image: "/feature-3/hybrid-performance.png"
    },
    {
      title: "Modern API Compatibility",
      description: "HL7 and FHIR standards for smooth integration with your HIS or LMS.",
      image: "/feature-3/modern-api.png"
    },
    {
      title: "End-to-End Workflow",
      description: "From scheduling to reporting—every step streamlined.",
      image: "/feature-3/end-to-end.jpg"
    }
  ];

  // Clear existing timer
  const clearFeatureTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  // Start a new feature timer
  const startFeatureTimer = () => {
    // Clear any existing timer
    clearFeatureTimer();

    // Set a new timer
    timerRef.current = setTimeout(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 5000);
  };

  // Effect for automatic cycling and initial setup
  useEffect(() => {
    // Start initial timer
    startFeatureTimer();

    // Cleanup timer on component unmount
    return () => {
      clearFeatureTimer();
    };
  }, [activeFeature]);

  // Handle manual feature click
  const handleFeatureClick = (index: number) => {
    // Clear existing timer
    clearFeatureTimer();

    // Set the clicked feature as active
    setActiveFeature(index);

    // Start a new timer
    startFeatureTimer();
  };

  const featureVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className='bg-black'>
      <section>
        <div className='px-10'>
          <div className='pl-0 pr-0 p-24'>
            <div className='max-w-[79.5rem] mx-auto w-full flex flex-col'>
              <div className='gap-[6.5rem] flex flex-col min-h-[52.5rem] relative'>
                <div className='gap-[1rem] text-left flex flex-col justify-start items-start max-w-[25.5rem]'>
                  <div className='gap-[0.5rem] justify-center items-center flex text-[#363a45]'>
                    <div className='bg-[#754cff] rounded-full w-[0.5rem] h-[0.5rem]'></div>
                    <div className='text-[#606776] tracking-[0.28px] text-sm leading-[1.14]'>Solutions</div>
                  </div>
                  <h2 className='text-white/70 text-[2.75rem] font-semibold tracking-[1px]'>Run Smarter with<br />
                    <span className="text-[2.5rem] bg-gradient-to-r from-[#754cff] via-[#9b85ff] to-[#bcb1ff] bg-clip-text text-transparent font-semibold">
                      Unified Imaging
                    </span>
                  </h2>
                </div>

                {/* feature section */}
                <div className='justify-start items-end w-full flex static flex-row'>
                  <div className='self-start mb-0 ml-0 flex flex-col justify-center items-stretch w-full max-w-[25.5rem] m-auto relative'>
                    <div className='gap-[1.5rem] justify-start items-stretch flex flex-col p-0'>
                      {features.map((feature, index) => (
                        <div
                          key={index}
                          className={`gap-0 items-stretch p-0 flex flex-col w-full cursor-pointer relative 
                            ${activeFeature === index
                              ? 'border-b-0'
                              : 'border-b border-[#2c2f36]'}`}
                        >
                          <div
                            className='gap-[0.5rem] justify-between items-center w-full pt-[1.5rem] pb-[1.5rem] flex relative text-[rgb(27,29,34)] '
                            onClick={() => handleFeatureClick(index)}
                          >
                            <h3 className='text-white'>{feature.title}</h3>
                            <MoveRight
                              className={`w-4 h-4 
                                ${activeFeature === index
                                  ? 'text-[#754cff]'
                                  : 'text-[#606776]'}`}
                            />
                          </div>
                          <AnimatePresence>
                            {activeFeature === index && (
                              <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={featureVariants}
                                className='overflow-hidden relative'
                              >
                                <p className='text-white/40 pb-2'>{feature.description}</p>
                                <div className='mt-4'>
                                  <LinearLoader
                                    duration={5000}
                                  />
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='w-[50%] max-w-[39rem] absolute top-24 bottom-0 right-0'>
                    <MacWindow className="w-full max-w-4xl mx-auto my-8 shadow-2xl">
                      <div className="bg-black">
                        <div className="w-full flex items-center justify-center">
                          <Image
                            src={features[activeFeature].image}
                            width={400}
                            height={300}
                            alt={features[activeFeature].title}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </MacWindow>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature3;
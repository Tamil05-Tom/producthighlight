"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MonitorIcon, 
  BuildingIcon, 
  CalendarCheckIcon, 
  AlarmClockCheckIcon, 
  Share2Icon, 
  LaptopIcon, 
  ClockIcon, 
  CalendarIcon, 
  ShareIcon, 
  LucideIcon 
} from 'lucide-react';
import { CrossPatternCard, CrossPatternCardBody } from "@/components/ui/card-with-cross-patter"
import { WordsPullUp } from "@/components/ui/framer-motion/words-pull"

// Define types for features
interface FeatureColors {
  bgColor: string;
  iconColor: string;
}

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  alt: string;
  desktopPosition?: string;
}

const HomepageHero: React.FC = () => {
  // Define color configurations for each feature
  const featureColors: Record<string, FeatureColors> = {
    "Remote Reading": {
      bgColor: "bg-blue-900/20",
      iconColor: "text-blue-600"
    },
    "Real-Time Confirmations": {
      bgColor: "bg-green-900/20",
      iconColor: "text-green-600"
    },
    "Online Appointment Booking": {
      bgColor: "bg-purple-900/20", 
      iconColor: "text-purple-600"
    },
    "Secure Report Sharing": {
      bgColor: "bg-red-900/20",
      iconColor: "text-red-600"
    }
  };

  const mobileFeatureColors: Record<string, FeatureColors> = {
    "Remote Reading": {
      bgColor: "bg-blue-900/20",
      iconColor: "text-blue-600"
    },
    "Real-Time Confirmations": {
      bgColor: "bg-green-900/20",
      iconColor: "text-green-600"
    },
    "Online Appointment Booking": {
      bgColor: "bg-purple-900/20", 
      iconColor: "text-purple-600"
    },
    "Secure Report Sharing": {
      bgColor: "bg-red-900/20",
      iconColor: "text-red-600"
    }
  };

  const features: Feature[] = [
    {
      title: "Remote Reading",
      description: "Radiologists can access and interpret studies across multiple branches effortlessly.",
      icon: LaptopIcon,
      alt: "Remote reading icon",
      desktopPosition: "absolute top-0 left-0"
    },
    {
      title: "Real-Time Confirmations",
      description: "Avoid missed appointments and manual follow-ups.",
      icon: AlarmClockCheckIcon,
      alt: "Real-time confirmations icon",
      desktopPosition: "absolute top-0 right-0"
    },
    {
      title: "Online Appointment Booking", 
      description: "Let patients schedule scans at their convenience, reducing phone calls.",
      icon: CalendarIcon,
      alt: "Online appointment booking icon",
      desktopPosition: "absolute top-[65%] left-0"
    },
    {
      title: "Secure Report Sharing",
      description: "Share reports and images instantly with patients and referring doctors via Email or Whatsapp.",
      icon: ShareIcon,
      alt: "Secure report sharing icon",
      desktopPosition: "absolute top-[65%] right-0"
    }
  ];

  const mobileFeatures: Feature[] = [
    {
        title: "Remote Reading",
        description: "Radiologists can access and interpret studies across multiple branches effortlessly.",
        icon: LaptopIcon,
        alt: "Remote reading icon",
      },
      {
        title: "Real-Time Confirmations",
        description: "Avoid missed appointments and manual follow-ups.",
        icon: AlarmClockCheckIcon,
        alt: "Real-time confirmations icon",
      },
      {
        title: "Online Appointment Booking", 
        description: "Let patients schedule scans at their convenience, reducing phone calls.",
        icon: CalendarIcon,
        alt: "Online appointment booking icon",
      },
      {
        title: "Secure Report Sharing",
        description: "Share reports and images instantly with patients and referring doctors via Email or Whatsapp.",
        icon: ShareIcon,
        alt: "Secure report sharing icon",
      }
  ];

  return (
    <div className="py-20 md:py-24 lg:py-[120px]">
      <div className="mx-auto sm:px-7 px-4 dark:text-white max-w-screen-xl">
        <div className="py-20 md:py-24 lg:py-[120px] relative">
          <motion.h2 
            className="max-w-[1016px] mx-auto text-center font-chromatic-grotesque text-5xl sm:text-6xl lg:text-7xl xl:text-[85px] font-medium mb-16 my-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <WordsPullUp text="Seamless Engagement for" className=' text-white'/>
            <WordsPullUp text="Patients and Physicians" className=' bg-gradient-to-r from-[#0437F2] to-[#5CB3FF] bg-clip-text text-transparent !text-5xl !mt-4'/>
          </motion.h2>
          
          {/* Mobile View */}
          <div className="lg:hidden grid gap-2 translate-y-4 justify-items-center">
            {mobileFeatures.map((feature, index) => {
              const colors = mobileFeatureColors[feature.title];
              return (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4 p-6 bg-black/10 shadow-lg max-w-[458px] rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`p-3.5 ${colors.bgColor} rounded-full flex-shrink-0`}>
                    <feature.icon className={`h-7 w-7 ${colors.iconColor}`} />
                  </div>
                  <div className="font-semibold flex flex-col gap-1">
                    <p className="text-white text-lg">{feature.title}</p>
                    <p className="text-white/70 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Desktop View */}
          <div className="absolute inset-0 hidden lg:block">
            {features.map((feature, index) => {
              const colors = featureColors[feature.title];
              return (
                <motion.div 
                  key={index}
                  className={`${feature.desktopPosition} w-full max-w-[458px] h-[130px]`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <CrossPatternCard className="w-full h-full">
                    <CrossPatternCardBody className="flex items-center justify-center w-full h-full">
                      <div className="flex items-center gap-4 w-full px-4">
                        <div className={`p-3.5 ${colors.bgColor} rounded-full flex-shrink-0`}>
                          <feature.icon className={`h-7 w-7 ${colors.iconColor}`} />
                        </div>
                        <div className="font-semibold flex flex-col gap-1">
                          <p className="text-white font-semibold text-base">{feature.title}</p>
                          <p className="text-white/70 font-normal text-sm">{feature.description}</p>
                        </div>
                      </div>
                    </CrossPatternCardBody>
                  </CrossPatternCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageHero;
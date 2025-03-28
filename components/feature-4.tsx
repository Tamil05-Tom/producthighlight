'use client'

import { useRef, FC, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { NoisePatternCard, NoisePatternCardBody } from "@/components/ui/card-with-noise-patter"
import { useInView } from "react-intersection-observer"
import { useRouter } from 'next/navigation'
import HalfFilledText  from './half-filled-text'
import { TextFade } from './ui/text-fade'
import { AnimatedText } from "@/components/ui/animated-underline-text-one";

interface ContentSectionProps {
  index: number
  onInView: (index: number, inView: boolean) => void
}

const ContentSection: FC<ContentSectionProps> = ({ index, onInView }) => {
  const { ref } = useInView({
    threshold: 0.6,
    onChange: (inView: boolean) => onInView(index, inView),
  })

  return (
    <div ref={ref} className="h-screen" />
  )
}

const Stickwithscroll = () => {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const features = [
    {
      "type": "",
      "content": {
        "title": "",
        "description": "",
        "data": [
          {
            "title": "Real-Time Business Intelligence",
            "description": "Monitor revenue, operational costs, and key performance indicators—all in one dashboard.",
            "image": "/feature-4/all-in-one.png"
          },
          {
            "title": "Turnaround Time (TAT) & MIS Reporting",
            "description": "Track TATs and instantly generate detailed MIS reports for improved efficiency and compliance.",
            "image": "/feature-4/tat.png"
          },
          {
            "title": "Referring Physician Analytics",
            "description": "Identify top referrers, track referral trends, and grow your physician network strategically.",
            "image": "/feature-4/refer.png"
          },
          {
            "title": "Automated Follow-Up Alerts",
            "description": "Never miss a patient re-scan—automate reminders for scheduled or overdue follow-ups.",
            "image": "/feature-4/automated-followup-alerts.png"
          },
          {
            "title": "Advanced Admin Controls",
            "description": "Easily define and manage user roles, access levels, and permissions with precision.",
            "image": "/feature-4/admin-control.png"
          },
          {
            "title": "Simplified User Management",
            "description": "Streamline onboarding, offboarding, and day-to-day user operations with minimal admin effort.",
            "image": "/feature-4/user-management.png"
          }
        ]
      }
    }
  ]

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 1])

  const handleInView = (index: number, inView: boolean) => {
    if (inView) {
      setActiveIndex(index)
    }
  }

  const currentFeature = features[0].content.data[activeIndex]

  return (
    <div className="relative bg-black pb-24">

<div className="sticky top-10 z-20 pb-4 flex items-center flex-col gap-4 justify-center">
<TextFade
  direction="up"
  className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
>
  <h2 className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[0rem] prose-h2:my-0">
  Smart Insights and <span className='bg-gradient-to-r from-[#0437F2] to-[#5CB3FF] bg-clip-text text-transparent md:text-6xl font-bold text-center'>Easy Management</span>
  </h2>
 
</TextFade>
      </div>
     
     
 
      <div className="w-full flex flex-row justify-center items-center gap-2 sticky top-56 md:top-40 z-20 pb-4">
        <div className="flex items-center max-w-screen-sm gap-4">
          {features[0].content.data.map((_, index) => (
            <motion.div
              key={index}
              className="w-16 h-1 rounded-full flex-1"
              initial={false}
              animate={{
                backgroundColor: index <= activeIndex ? "#754cff" : "#9ca3af",
              }}
              transition={{ duration: 0.4 }}
            />
          ))}
        </div>
      </div>

      <div className="sticky top-52 z-10 w-full px-4">
        <NoisePatternCard className="w-full mx-auto max-w-screen-lg">
          <NoisePatternCardBody>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 p-8"
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src={currentFeature.image}
                  alt={currentFeature.title}
                  width={500}
                  height={320}
                  className="p-px"
                />
              </motion.div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-4xl tracking-tighter mb-4">{currentFeature.title}</h2>
                <p className="text-muted-foreground">{currentFeature.description}</p>
              </motion.div>
            </motion.div>
          </NoisePatternCardBody>
        </NoisePatternCard>
      </div>

      <motion.div
        ref={containerRef}
        style={{ opacity }}
        className="relative w-full bg-black"
      >
        {features[0].content.data.map((_, index: number) => (
          <ContentSection
            key={index}
            index={index}
            onInView={handleInView}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default Stickwithscroll
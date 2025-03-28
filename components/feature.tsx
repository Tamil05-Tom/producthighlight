import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function FeatureSection() {
  return (
    <section className="py-20  bg-black text-white ">
      <div className="max-w-full  mb-10 flex flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
          A Secure, Hybrid and Intuitive Viewer - Accessible from anywhere, anytime
          </h2>
          {/* <p className="mt-2 text-xl text-white/80 max-w-3xl mx-auto mb-8">
            A Secure, Hybrid and Intuitive Viewer - Accessible from anywhere, anytime
          </p> */}
        </div>
        
        <div className="relative w-full  h-80 md:h-[450px] mb-16 overflow-hidden rounded-2xl group">
          {/* Main image */}
          <img 
            src="/viewer.png" 
            alt="Advanced Medical Imaging Technology" 
            className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-5 right-8 w-20 h-20 border-t-2 border-r-2 border-white/20 rounded-tr-lg"></div>
            <div className="absolute bottom-5 left-8 w-20 h-20 border-b-2 border-l-2 border-white/20 rounded-bl-lg"></div>
          </div>
          
          {/* Floating text badges */}
          {/* <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 border border-white/10">AI-Powered</span>
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 border border-white/10">High Resolution</span>
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 border border-white/10">3D Rendering</span>
          </div> */}
        </div>
      </div>

      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 "></div>
);

const items = [
  {
    title: "Blazing-Fast Performance",
    description: "Hybrid imaging viewer optimized for rapid loading using HTJ2K and smooth navigation.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Intelligent",
    description: "Measures, labels, and enhances images for rapid interpretation.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Advanced Visualization Tools",
    description: "Leverage MPR, MIP and 3D/4D volume rendering on both desktop and web.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Customizable Workflows",
    description: "Hanging protocols, shortcuts and toolset to your preference, whether on a single or multi-monitor setup.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Integrated Anatomy Atlas",
    description: "Access reference data on-the-fly for precise localization and correlation.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  }
];
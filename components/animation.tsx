import React, { useState, useEffect } from 'react';
import { Eye, Shield, Zap, Brain } from 'lucide-react';
import Image from 'next/image';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import sphere_particle from "../assets/sphere_particle-opti.svg"
import logo_white from "../assets/logo_white.svg"

const Animation = () => {
    const [activeId, setActiveId] = useState(0);
    
    // Set up auto-rotation every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveId(prevId => (prevId + 1) % 4);
        }, 3000);
        
        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    // Define the icon data with fixed positioning relative to the circle
    const iconData = [
        {
            id: 0,
            Icon: Eye,
            title: "Intuitive Viewer",
            description: "Advanced visualization with zero-footprint web access from anywhere",
            color: "text-[#d6bcfa]",
            position: "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
            tooltipSide: "top" as const,
            align: "center" as const,
            sideOffset: 7
        },
        {
            id: 1,
            Icon: Zap,
            title: "Blazing Fast",
            description: "HTJ2K technology for instantaneous image loading and rendering",
            color: "text-[#22C55E]",
            position: "absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
            tooltipSide: "right" as const,
            align: "center" as const,
            sideOffset: 7
        },
        {
            id: 2,
            Icon: Brain,
            title: "Secure Sharing",
            description: "Share images and reports to patients and physicians with ease",
            color: "text-[#3B82F6]",
            position: "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
            tooltipSide: "bottom" as const,
            align: "center" as const,
            sideOffset: 7
        },
        {
            id: 3,
            Icon: Shield,
            title: "AI-Powered Reporting",
            description: "Smart description generation with in-built speech-to-text for accurate reports",
            color: "text-[#ed8936]",
            position: "absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
            tooltipSide: "left" as const,
            align: "center" as const,
            sideOffset: 7
        }
    ];

    return (
        <TooltipProvider delayDuration={400}>
            <div className="h-full w-full flex items-center justify-center">
                <div className="h-[20rem] md:h-[30rem] w-full relative flex justify-center items-center p-4 md:p-10">
                    {/* Create a centered circular container for positioning the icons */}
                    <div className="relative w-[16rem] h-[16rem] md:w-[20rem] md:h-[20rem]">
                        {iconData.map(({ Icon, title, description, color, position, tooltipSide, align, sideOffset }, id) => (
                            <div key={title} className={position}>
                                {activeId === id ? (
                                    <Tooltip defaultOpen>
                                        <TooltipTrigger asChild>
                                            <div
                                                className={`bg-stone-900/80 backdrop-blur-sm flex justify-center items-center z-[100] p-2 border-2 rounded-2xl border-stone-600/50 h-[3rem] w-[3rem] md:h-[3.5rem] md:w-[3.5rem] hover:bg-stone-800/90`}
                                            >
                                                <Icon
                                                    data-nimage="1"
                                                    className={`object-contain filter mx-0 h-[1.8rem] w-[1.8rem] md:h-[2rem] md:w-[2rem] ${color}`}
                                                />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent
                                            side={tooltipSide}
                                            align={align}
                                            sideOffset={sideOffset}
                                            className={`
                                                relative backdrop-blur-md text-white border border-white/10
                                                rounded-lg shadow-xl animate-in duration-300
                                                data-[state=closed]:animate-out data-[state=closed]:fade-out-0
                                                data-[state=closed]:zoom-out-95 data-[state=closed]:duration-200
                                                ${tooltipSide === 'top' && 'data-[state=delayed-open]:animate-tooltip-slide-down-fade'}
                                                ${tooltipSide === 'bottom' && 'data-[state=delayed-open]:animate-tooltip-slide-up-fade'}
                                                ${tooltipSide === 'left' && 'data-[state=delayed-open]:animate-tooltip-slide-right-fade'}
                                                ${tooltipSide === 'right' && 'data-[state=delayed-open]:animate-tooltip-slide-left-fade'}
                                                after:content-[''] after:absolute after:border-[6px] after:border-transparent
                                                ${tooltipSide === 'top' ? 'after:top-full after:left-1/2 after:-translate-x-1/2 after:border-t-stone-800/70' : ''}
                                                ${tooltipSide === 'bottom' ? 'after:bottom-full after:left-1/2 after:-translate-x-1/2 after:border-b-stone-800/70' : ''}
                                                ${tooltipSide === 'left' ? 'after:left-full after:top-1/2 after:-translate-y-1/2 after:border-l-stone-800/70' : ''}
                                                ${tooltipSide === 'right' ? 'after:right-full after:top-1/2 after:-translate-y-1/2 after:border-r-stone-800/70' : ''}
                                                transition-all duration-500 ease
                                            `}
                                            style={{
                                                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                                            }}
                                        >
                                           <div className="flex flex-col gap-1.5 p-3 backdrop-blur-sm z-[100]">
                                                <p className="font-semibold text-white/90">{title}</p>
                                                <p className="text-sm text-white/70 max-w-[200px]">{description}</p>
                                            </div>
                                        </TooltipContent>
                                    </Tooltip>
                                ) : (
                                    <div
                                        className={`bg-stone-900/80 backdrop-blur-sm flex justify-center items-center z-[100] p-2 border-2 rounded-2xl border-stone-600/50 h-[3rem] w-[3rem] md:h-[3.5rem] md:w-[3.5rem] hover:bg-stone-800/90`}
                                    >
                                        <Icon
                                            data-nimage="1"
                                            className={`object-contain filter mx-0 h-[1.8rem] w-[1.8rem] md:h-[2rem] md:w-[2rem] ${color}`}
                                        />
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Central logo and animation */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                            <div className="rotate-[282.78deg]">
                                <Image
                                    alt="header"
                                    src={sphere_particle}
                                    width={120}
                                    height={120}
                                    className="select-none animate-[spin_5s_linear_infinite]"
                                />
                            </div>
                        </div>
                        <Image
                            src={logo_white}
                            alt="Somatiq Logo"
                            className="text-lg font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[-0.8rem] opacity-85"
                            width={100}
                            height={40}
                        />
                    </div>

                    {/* SVG background elements */}
                    <svg
                        width="500"
                        height="500"
                        viewBox="-40 -40 319 303"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.922757]"
                    >
                        <rect
                            x="0.5"
                            y="0.5"
                            width="238"
                            height="222"
                            rx="50"
                            stroke="#b3ddff"
                            strokeWidth="1"
                            opacity="0.4"
                            style={{ transformOrigin: "119.5px 111.5px" }}
                            className="animate-smooth-spin"
                        />
                        <rect
                            x="15"
                            y="17"
                            width="208"
                            height="192"
                            rx="50"
                            stroke="#b3ddff"
                            strokeWidth="1.1"
                            opacity="0.4"
                            style={{ transformOrigin: "119px 113px" }}
                            className="animate-smooth-spin-reverse"
                        />
                        <rect
                            x="36.25"
                            y="30.25"
                            width="163.5"
                            height="159.5"
                            rx="50"
                            stroke="#b3ddff"
                            strokeWidth="1.2"
                            opacity="0.4"
                            style={{ transformOrigin: "118px 110px" }}
                            className="animate-smooth-spin"
                        />
                        <rect
                            x="58.5"
                            y="52.5"
                            width="120"
                            height="114"
                            rx="50"
                            stroke="#b3ddff"
                            strokeWidth="1.3"
                            opacity="0.4"
                            style={{ transformOrigin: "118.5px 109.5px" }}
                            className="animate-smooth-spin-reverse"
                        />
                    </svg>
                </div>
            </div>
        </TooltipProvider>
    );
}

export default Animation;
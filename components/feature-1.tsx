"use client"

import React from "react";
import { ServerOff, BadgeDollarSign, RefreshCw, Headset } from "lucide-react";

export function FeatureSection() {

    const features = [
        {
            title: "No Upfront Infrastructure Cost",
            description: "Our subscription-based model eliminates the need for expensive servers or on-site hardware",
            icon: ServerOff,
            iconBgColor: "bg-blue-900/20",
            iconColor: "text-blue-400"
        },
        {
            title: "Transparent, Predictable Pricing",
            description: "Clear pricing plans with no hidden fees—so you can budget confidently and scale effortlessly",
            icon: BadgeDollarSign,
            iconBgColor: "bg-green-900/20", 
            iconColor: "text-green-400"
        },
        {
            title: "Free Continuous Updates",
            description: "Always stay current with the latest features and security enhancements at no extra cost",
            icon: RefreshCw,
            iconBgColor: "bg-indigo-900/20",
            iconColor: "text-indigo-400"
        },
        {
            title: "24/7 Technical Support Included",
            description: "Round-the-clock assistance reduces your in-house IT burden and ensures smooth operations.",
            icon: Headset,
            iconBgColor: "bg-amber-900/20", 
            iconColor: "text-amber-400"
        }
    ]
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      <section className="relative w-full mx-auto pt-[116px] pb-[172px] bg-[radial-gradient(45.1%_50%_at_50%_50%,_rgba(148,_101,_255,_0.06)_0%,_rgba(3,_0,_20,_0)_100%)]">
        <div className="static-lines"></div>
        <div className=" mb-[48px] relative z-[3] ">
            <div className="section-header relative isolate overflow-hidden flex items-center mx-auto mb-[12px] w-max rounded-[32px] bg-opacity-75 backdrop-blur-[6px] shadow-[inset_0_-7px_11px_#a48fff1f] px-[14px] py-[6px] font-medium text-[14px] leading-[20px]">
                <div className="bg-gradient-to-r from-[#e59cff] via-[#ba9cff] to-[#9cb2ff]  bg-clip-text ">placeholder</div>
            </div>
            <h2 className="text-[56px] leading-[64px] text-center">
                <span>Cost Control and Reliability</span>
                {/* <span>Reliability</span> */}
            </h2>
        </div>

        <div className="feature-section-wrapper">
            {features.map((item, index) => (
                <div key={index} className="feature-section-items flex flex-col items-center justify-center">
                    <div className={`mb-4 h-[80px] w-[80px] rounded-full flex items-center justify-center ${item.iconBgColor}`}>
                                <item.icon className={`h-[40px] w-[40px] ${item.iconColor}`} />
                            </div>
                    <div className="text-[#f4f0ff] mb-[8px] font-medium text-[16px] leading-[24px]">
                        {item.title}
                    </div>
                    <div className="text-[#efedfdb3] text-[16px] leading-[24px]">
                        {item.description}
                    </div>
                </div>
            ))}
            <img src="/feature-1/radial-center.png" alt="feature" className="lazy-image lazy-image-loaded integrations-logo"></img>
            <div className="integrations-lines">
                <div></div>
                <div></div>
            </div>
            <div className=" integrations-waves">
                <img src="/feature-1/wave-1.png" alt="feature" className="lazy-image lazy-image-loaded"></img>
                <img src="/feature-1/wave-2.png" alt="feature" className="lazy-image lazy-image-loaded"></img>
                <img src="/feature-1/wave-3.png" alt="feature" className="lazy-image lazy-image-loaded"></img>
            </div>
        </div>


      </section>
    </div>
  );
}

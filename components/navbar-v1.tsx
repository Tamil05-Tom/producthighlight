import { useState, useEffect } from 'react';
import Link from 'next/link';
import logo from '../assets/logo_white.svg'
import Image from 'next/image';
export default function Navbar() {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage >= 30) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full">
      <nav className="max-w-7xl fixed top-4 mx-auto inset-x-0 z-50 w-[95%] lg:w-full animate-navbar-slide">
        <div className="hidden lg:block w-full">
          <div className={`w-full flex relative justify-between px-4 py-2 rounded-full transition-all duration-500 ease-in-out ${showBackground ? 'dark:bg-neutral-900/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
            {showBackground && (
              <div className="animate-fade-in opacity-100 dark:bg-[#262626] bg-[#262626] [mask-image:linear-gradient(180deg,#fff,transparent_50%,#fff)] rounded-full w-full h-full inset-0 absolute transition-opacity duration-500 ease-in-out" 
                   style={{ animation: 'fadeIn 0.5s ease-in-out forwards', }}
              />
            )}
            <div className="flex flex-row gap-1 items-center">
              <Link href="/" className="font-normal flex space-x-2 items-center text-lg text-white px-2 py-1 relative z-20">
                <Image src={logo} alt="Logo" className="w-[6.5rem]" />
              </Link>
              <div className="flex items-center gap-1.5"></div>
            </div>
            <div className="flex items-center">
              <Link 
                href="/contact"
                className="relative border-none text-white text-sm md:text-sm transition-all font-medium duration-300 rounded-full px-6 py-2.5 flex items-center justify-center bg-gradient-to-r from-[#0437F2] to-[#5CB3FF] shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] z-[100] pointer-events-auto cursor-pointer transform hover:scale-105"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full items-center lg:hidden">
          <div className={`flex justify-between items-center w-full rounded-full px-2.5 py-2 transition-all duration-500 ease-in-out ${showBackground ? 'bg-neutral-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <Link href="/" className="font-normal flex space-x-2 items-center text-lg text-white px-2 py-1 relative z-20">
              <span className="text-lg font-semibold">Your Logo</span>
            </Link>
            <Link
              href="/contact"
              className="z-10 bg-gradient-to-r from-[#0437F2] to-[#5CB3FF] relative border border-transparent text-white md:text-sm transition-all font-medium duration-300 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] text-xs transform hover:scale-105"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
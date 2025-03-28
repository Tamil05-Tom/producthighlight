import React from 'react';
import { cn } from '@/lib/utils';

interface MacWindowProps {
  className?: string;
  children: React.ReactNode;
  darkMode?: boolean;
}

const MacWindow = ({ className, children, darkMode = false }: MacWindowProps) => {
  return (
    <div className={cn(
        'flex flex-col rounded-lg overflow-hidden border border-gray-900 bg-[#0c1222] shadow-xl',
        className
      )}>
        <div className="flex items-center px-4 py-2 bg-white/90 border-b border-gray-900">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#fc635d]" />
            <div className="w-3 h-3 rounded-full bg-[#fdbc40]" />
            <div className="w-3 h-3 rounded-full bg-[#33c748]" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-16 py-1 rounded-md text-sm font-medium bg-transparent text-black">
              {/* Somatiq */}
            </div>
          </div>
        </div>
        {children}
      </div>
  );
};

export default MacWindow;
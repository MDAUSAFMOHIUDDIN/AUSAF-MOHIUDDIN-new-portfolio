import React from 'react';
import { motion } from 'motion/react';

interface HeroScrollTransitionProps {
  onScrollClick: () => void;
}

export const HeroScrollTransition: React.FC<HeroScrollTransitionProps> = ({ onScrollClick }) => {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-auto">
      <button
        type="button"
        onClick={onScrollClick}
        className="group flex flex-col items-center gap-2 cursor-pointer focus:outline-none"
        aria-label="Scroll to enter Chapter 01 - The Creator"
      >
        <span className="font-technical text-[8px] sm:text-[9px] tracking-[0.3em] uppercase text-[#777064] group-hover:text-[#9B7A3E] transition-colors">
          SCROLL TO ENTER · 01
        </span>

        {/* Delicate Vertical Guide Line with Breathing Movement */}
        <div className="w-[1px] h-9 sm:h-12 bg-[#2E241C]/15 relative overflow-hidden">
          <motion.div
            animate={{
              y: ['-100%', '100%'],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-full h-1/2 bg-gradient-to-b from-transparent via-[#9B7A3E] to-transparent"
          />
        </div>
      </button>
    </div>
  );
};

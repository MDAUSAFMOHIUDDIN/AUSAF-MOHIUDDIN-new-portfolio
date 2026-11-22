import React from 'react';
import { motion } from 'motion/react';
import { creatorProfile } from '../../data/portfolioData';

interface HeroTypographyProps {
  parallaxOffset?: { x: number; y: number };
}

export const HeroTypography: React.FC<HeroTypographyProps> = ({
  parallaxOffset = { x: 0, y: 0 },
}) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-between items-center pointer-events-none z-5 pt-28 sm:pt-32 pb-16 px-4 sm:px-8">
      {/* Top Identity Plaque / Eyebrow Record */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="text-center space-y-1.5 z-20 pointer-events-auto"
      >
        <div className="inline-flex items-center gap-3 px-3 py-1 border border-[#2E241C]/12 bg-[#F1E8D8]/80 backdrop-blur-2xs">
          <span className="w-1.5 h-1.5 bg-[#9B7A3E] rotate-45" />
          <span className="font-technical text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#2E241C] font-semibold">
            {creatorProfile.name}
          </span>
          <span className="w-1.5 h-1.5 bg-[#9B7A3E] rotate-45" />
        </div>

        <div className="flex items-center justify-center gap-2 font-technical text-[8px] sm:text-[9px] tracking-[0.25em] text-[#777064] uppercase">
          <span>WEB DEVELOPER</span>
          <span className="text-[#9B7A3E]">·</span>
          <span>DIGITAL CREATOR</span>
          <span className="text-[#9B7A3E]">·</span>
          <span>AI SYSTEMS</span>
        </div>
      </motion.div>

      {/* MONUMENTAL DISPLAY TYPOGRAPHY: AUSAF */}
      {/* Positioned centrally across the canvas, framing the classical figure with depth */}
      <motion.div
        style={{
          x: parallaxOffset.x * 0.15,
          y: parallaxOffset.y * 0.15,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 45 }}
        className="relative w-full flex items-center justify-center my-auto select-none pointer-events-none"
      >
        <h1 className="font-serif-cormorant font-normal text-[22vw] sm:text-[20vw] md:text-[18vw] lg:text-[16vw] xl:text-[15vw] text-[#2E241C]/85 leading-[0.8] tracking-[-0.04em] text-center uppercase flex justify-center items-center drop-shadow-[0_2px_12px_rgba(46,36,28,0.06)]">
          <span className="inline-block transition-transform duration-700 hover:scale-[1.02]">A</span>
          <span className="inline-block transition-transform duration-700 hover:scale-[1.02]">U</span>
          <span className="inline-block transition-transform duration-700 hover:scale-[1.02]">S</span>
          <span className="inline-block transition-transform duration-700 hover:scale-[1.02]">A</span>
          <span className="inline-block transition-transform duration-700 hover:scale-[1.02]">F</span>
        </h1>

        {/* Faint Shadow Inscription for Antique Art Book Feel */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center font-cinzel text-[23vw] sm:text-[21vw] md:text-[19vw] lg:text-[17vw] xl:text-[16vw] text-[#9B7A3E]/[0.04] leading-[0.8] tracking-widest text-center select-none pointer-events-none -z-10"
        >
          AUSAF
        </div>
      </motion.div>

      {/* Supporting Aphorism & Philosophy Inscription */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-lg mx-auto z-20 space-y-1.5 pointer-events-auto"
      >
        <p className="font-technical text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#9B7A3E] font-medium">
          CODE IS THE MEDIUM · CREATION IS THE PRACTICE
        </p>
        <p className="font-serif-eb italic text-xs sm:text-sm text-[#554E44]">
          &ldquo;Bridging the visual gravity of classical Renaissance order with contemporary web engineering.&rdquo;
        </p>
      </motion.div>
    </div>
  );
};

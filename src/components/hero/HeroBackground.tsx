import React from 'react';
import { motion } from 'motion/react';
import { artAssets } from '../../data/artAssets';

interface HeroBackgroundProps {
  parallaxOffset?: { x: number; y: number };
  scrollProgress?: number;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({
  parallaxOffset = { x: 0, y: 0 },
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden select-none pointer-events-none z-0">
      {/* Base Canvas Aged Ivory Tone */}
      <div className="absolute inset-0 bg-[#EEE6D6]" />

      {/* Main Renaissance Architectural Hall Painting Layer */}
      <motion.div
        style={{
          x: parallaxOffset.x * 0.4,
          y: parallaxOffset.y * 0.4,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 60, mass: 0.8 }}
        className="absolute inset-0 flex items-center justify-center will-change-transform"
      >
        <div className="relative w-full h-full">
          <img
            src={artAssets.heroBackground.source}
            alt={artAssets.heroBackground.alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-30 md:opacity-35 mix-blend-multiply filter contrast-[0.95] brightness-[1.03] saturate-[0.85]"
            loading="eager"
          />

          {/* Soft Luminous Travertine Gradient Overlays to preserve bright identity */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#EEE6D6] via-transparent to-[#EEE6D6]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#EEE6D6]/80 via-transparent to-[#EEE6D6]/80" />
        </div>
      </motion.div>

      {/* Renaissance Codex & Geometric Harmonic Blueprint Overlay */}
      <motion.div
        style={{
          x: parallaxOffset.x * -0.2,
          y: parallaxOffset.y * -0.2,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 50 }}
        className="absolute right-0 top-0 w-full sm:w-2/3 md:w-1/2 h-full opacity-15 md:opacity-20 mix-blend-multiply pointer-events-none"
      >
        <img
          src={artAssets.engravingStudy.source}
          alt={artAssets.engravingStudy.alt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain object-right-top filter sepia-[0.25]"
          loading="lazy"
        />
      </motion.div>

      {/* Subtle Classical Arch Geometry Lines */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="w-[85vw] h-[85vw] max-w-[900px] max-h-[900px] rounded-full border border-[#9B7A3E] scale-y-125" />
        <div className="absolute w-[65vw] h-[65vw] max-w-[700px] max-h-[700px] rounded-full border border-[#2E241C]" />
        <div className="absolute w-px h-full bg-[#9B7A3E]/40" />
        <div className="absolute w-full h-px bg-[#9B7A3E]/40" />
      </div>
    </div>
  );
};

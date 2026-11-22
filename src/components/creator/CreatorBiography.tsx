import React from 'react';
import { motion } from 'motion/react';
import { creatorProfile } from '../../data/portfolioData';

interface CreatorBiographyProps {
  className?: string;
}

export const CreatorBiography: React.FC<CreatorBiographyProps> = ({ className = '' }) => {
  return (
    <div className={`space-y-6 ${className}`}>
      {/* Chapter 01 Eyebrow & Title */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-2 border-b border-[#2E241C]/10 pb-6"
      >
        <div className="flex items-center gap-3 font-technical text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#9B7A3E]">
          <span>CAPUT I</span>
          <span className="w-1 h-1 rounded-full bg-[#9B7A3E]" />
          <span>DE VITA ET ARTIFICIO</span>
        </div>

        <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-light text-[#2E241C] tracking-[-0.02em] leading-none uppercase">
          The Creator
        </h2>

        <p className="font-technical text-xs sm:text-sm tracking-[0.2em] uppercase text-[#777064] font-medium pt-1">
          {creatorProfile.name} · <span className="text-[#9B7A3E]">Web Developer & Digital Creator</span>
        </p>
      </motion.div>

      {/* Main Biographical Prose */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-4 font-serif-eb text-base sm:text-lg text-[#2E241C]/90 leading-relaxed"
      >
        <p className="drop-cap">
          I build digital experiences where design, code and practical problem-solving meet. My work spans websites, UI/UX, deployment, AI-assisted development and digital business solutions.
        </p>
        <p className="text-sm sm:text-base text-[#554E44] leading-relaxed">
          Working across real-world business websites, bespoke digital products, and experimental AI-driven systems, every interface is approached with architectural discipline, optical balance, and human clarity.
        </p>
      </motion.div>

      {/* Structured Archival Identity Categories (No modern pills, pure classical grid) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="pt-4 border-t border-[#2E241C]/10 grid grid-cols-1 sm:grid-cols-2 gap-4 font-technical text-xs"
      >
        {/* Record Item: Name */}
        <div className="space-y-1">
          <span className="text-[9px] tracking-[0.25em] text-[#9B7A3E] uppercase block font-semibold">
            NAME
          </span>
          <p className="font-cinzel text-xs text-[#2E241C] tracking-[0.15em] font-semibold">
            {creatorProfile.name}
          </p>
        </div>

        {/* Record Item: Location */}
        <div className="space-y-1">
          <span className="text-[9px] tracking-[0.25em] text-[#9B7A3E] uppercase block font-semibold">
            BASED
          </span>
          <p className="text-[#2E241C] font-medium tracking-wide">
            HYDERABAD, INDIA · <span className="text-[#777064] text-[10px]">17.3850° N</span>
          </p>
        </div>

        {/* Record Item: Practice */}
        <div className="space-y-1 sm:col-span-2">
          <span className="text-[9px] tracking-[0.25em] text-[#9B7A3E] uppercase block font-semibold">
            PRACTICE
          </span>
          <p className="text-[#2E241C] font-medium tracking-wider text-[11px] leading-relaxed">
            WEB DEVELOPMENT · UI/UX DESIGN · AI-ASSISTED BUILDING · DIGITAL SOLUTIONS
          </p>
        </div>

        {/* Record Item: Education Reference */}
        <div className="space-y-1">
          <span className="text-[9px] tracking-[0.25em] text-[#9B7A3E] uppercase block font-semibold">
            STUDY
          </span>
          <p className="text-[#2E241C] font-medium tracking-wide">
            BCA — OSMANIA UNIVERSITY
          </p>
        </div>

        {/* Record Item: Era */}
        <div className="space-y-1">
          <span className="text-[9px] tracking-[0.25em] text-[#9B7A3E] uppercase block font-semibold">
            CURRENT ERA
          </span>
          <p className="text-[#2E241C] font-medium tracking-wide">
            2026 · ANNO MMXXVI
          </p>
        </div>
      </motion.div>
    </div>
  );
};

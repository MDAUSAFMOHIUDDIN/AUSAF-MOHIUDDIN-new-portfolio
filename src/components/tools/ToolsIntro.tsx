import React from 'react';
import { motion } from 'motion/react';

export const ToolsIntro: React.FC = () => {
  return (
    <div className="border-b border-[#2E241C]/15 pb-12 mb-16 sm:mb-20">
      {/* Chapter Marker Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
      >
        <div className="space-y-3">
          <div className="flex items-center gap-3 font-technical text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#9B7A3E]">
            <span>CAPUT III</span>
            <span className="w-1 h-1 rounded-full bg-[#9B7A3E]" />
            <span>INSTRUMENTA ARTIS</span>
            <span className="w-1 h-1 rounded-full bg-[#9B7A3E]" />
            <span>THE WORKSHOP</span>
          </div>

          <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-light text-[#2E241C] tracking-[-0.02em] leading-none uppercase">
            Tools of Creation
          </h2>

          <p className="font-serif-eb italic text-sm sm:text-base text-[#64352F] max-w-xl">
            &ldquo;Every work begins with an instrument. Mine happen to be digital.&rdquo;
          </p>
        </div>

        {/* Archival Right-Side Notation */}
        <div className="lg:text-right space-y-1 font-technical text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-[#777064]">
          <span className="block text-[#9B7A3E] font-semibold">
            INSTRUMENTS OF DIGITAL CONSTRUCTION · MMXXVI
          </span>
          <span className="block text-[#554E44]">
            CODEX MECHANICA / FRONTEND, DATA & AI ARCHITECTURES
          </span>
          <p className="font-serif-eb italic text-xs text-[#777064] max-w-sm ml-auto pt-1 normal-case tracking-normal">
            From interface and interaction to deployment and AI-assisted workflows, these are the systems behind the work.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

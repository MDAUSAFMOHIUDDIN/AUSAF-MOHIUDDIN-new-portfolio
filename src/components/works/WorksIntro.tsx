import React from 'react';
import { motion } from 'motion/react';

export const WorksIntro: React.FC = () => {
  return (
    <div className="border-b border-[#2E241C]/15 pb-12 mb-16 sm:mb-20">
      {/* Chapter Marker Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4"
      >
        <div className="space-y-2">
          <div className="flex items-center gap-3 font-technical text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#9B7A3E]">
            <span>CAPUT II</span>
            <span className="w-1 h-1 rounded-full bg-[#9B7A3E]" />
            <span>OPERA SELECTA</span>
          </div>

          <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-light text-[#2E241C] tracking-[-0.02em] leading-none uppercase">
            Selected Works
          </h2>
        </div>

        {/* Minimal Supporting Line */}
        <div className="text-left sm:text-right space-y-1">
          <span className="font-technical text-xs tracking-[0.25em] uppercase text-[#777064] block">
            SELECTED DIGITAL WORKS / MMXXVI
          </span>
          <span className="font-serif-eb italic text-xs text-[#9B7A3E] block">
            Exhibition of live websites, bespoke architectures & AI platforms
          </span>
        </div>
      </motion.div>
    </div>
  );
};

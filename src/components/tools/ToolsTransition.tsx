import React from 'react';
import { motion } from 'motion/react';

export const ToolsTransition: React.FC = () => {
  return (
    <div className="relative pt-12 pb-16 text-center border-t border-[#2E241C]/15">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-xl mx-auto space-y-4"
      >
        <div className="flex items-center justify-center gap-3 font-technical text-[9px] tracking-[0.3em] uppercase text-[#9B7A3E]">
          <span className="w-6 h-px bg-[#9B7A3E]/40" />
          <span>TRANSITUS AD CAPUT IV</span>
          <span className="w-6 h-px bg-[#9B7A3E]/40" />
        </div>

        <p className="font-serif-eb italic text-sm text-[#777064]">
          The instruments now put aside, the table is cleared for execution.
        </p>

        <div className="pt-2">
          <div className="inline-flex flex-col items-center gap-1 font-technical text-[8px] tracking-[0.25em] text-[#554E44] uppercase">
            <span className="text-[#9B7A3E] font-semibold">SEQUITUR: CAPUT IV · THE PRACTICE</span>
            <span className="text-[#777064]">WHAT THE WORKSHOP PRODUCES FOR CLIENTS & ENTERPRISES</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

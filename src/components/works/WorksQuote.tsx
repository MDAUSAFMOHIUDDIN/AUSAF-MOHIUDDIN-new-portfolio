import React from 'react';
import { motion } from 'motion/react';

interface WorksQuoteProps {
  quote?: string;
  subtext?: string;
  className?: string;
}

export const WorksQuote: React.FC<WorksQuoteProps> = ({
  quote = 'THE WORK IS THE RECORD · IDEAS BECOME OBJECTS.',
  subtext = 'Software crafted with structural permanence, optical rhythm, and practical purpose.',
  className = '',
}) => {
  return (
    <div className={`my-20 sm:my-28 text-center flex flex-col items-center justify-center ${className}`}>
      {/* Delicate Gold Rhombus Divider */}
      <div className="relative w-36 sm:w-56 h-px mb-6 flex items-center justify-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#9B7A3E] to-transparent" />
        <div className="absolute w-2 h-2 rotate-45 border border-[#9B7A3E] bg-[#EEE6D6]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="space-y-2 max-w-2xl px-4"
      >
        <span className="font-technical text-[8px] sm:text-[9px] tracking-[0.35em] text-[#9B7A3E] uppercase font-semibold block">
          EXHIBITION SENTENTIA
        </span>

        <p className="font-serif-cormorant text-xl sm:text-2xl lg:text-3xl text-[#2E241C] font-normal tracking-wide uppercase">
          &ldquo;{quote}&rdquo;
        </p>

        <p className="font-serif-eb italic text-xs sm:text-sm text-[#777064]">
          {subtext}
        </p>
      </motion.div>
    </div>
  );
};

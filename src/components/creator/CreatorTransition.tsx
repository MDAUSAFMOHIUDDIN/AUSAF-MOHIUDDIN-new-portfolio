import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

interface CreatorTransitionProps {
  onNextChapterClick?: () => void;
}

export const CreatorTransition: React.FC<CreatorTransitionProps> = ({ onNextChapterClick }) => {
  const handleClick = () => {
    if (onNextChapterClick) {
      onNextChapterClick();
    } else {
      const worksElem = document.getElementById('works');
      if (worksElem) {
        worksElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="pt-20 pb-6 border-t border-[#2E241C]/10 mt-16 flex flex-col items-center justify-center text-center">
      {/* Thin Gold Ornamental Divider */}
      <div className="relative w-48 sm:w-72 h-px mb-8 flex items-center justify-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#9B7A3E] to-transparent" />
        <div className="absolute w-2 h-2 rotate-45 border border-[#9B7A3E] bg-[#EEE6D6]" />
      </div>

      {/* Transition Chapter Header Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="space-y-2"
      >
        <span className="font-technical text-[9px] tracking-[0.35em] text-[#9B7A3E] uppercase font-semibold block">
          TRANSITIO AD CAPUT II
        </span>

        <h3 className="font-serif-cormorant text-2xl sm:text-3xl text-[#2E241C] uppercase tracking-[0.1em] font-light">
          02 · Selected Works
        </h3>

        <p className="font-serif-eb italic text-xs text-[#777064]">
          Turning from biographical chronicle into the gallery of digital creations & client works.
        </p>

        <button
          type="button"
          onClick={handleClick}
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 border border-[#2E241C]/15 bg-[#F1E8D8] hover:border-[#9B7A3E] transition-all cursor-pointer font-technical text-[9px] tracking-[0.25em] text-[#2E241C] uppercase shadow-xs group"
          aria-label="Proceed to Chapter 02 - Selected Works"
        >
          <span>PROCEED TO GALLERY</span>
          <ArrowDown size={11} className="text-[#9B7A3E] group-hover:translate-y-0.5 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
};

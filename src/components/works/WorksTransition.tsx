import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { artAssets } from '../../data/artAssets';

interface WorksTransitionProps {
  onNextChapterClick?: () => void;
}

export const WorksTransition: React.FC<WorksTransitionProps> = ({ onNextChapterClick }) => {
  const handleClick = () => {
    if (onNextChapterClick) {
      onNextChapterClick();
    } else {
      const toolsElem = document.getElementById('tools');
      if (toolsElem) {
        toolsElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="pt-24 sm:pt-32 pb-8 border-t border-[#2E241C]/10 mt-20 flex flex-col items-center justify-center text-center relative">
      {/* Decorative Technical Drawing / Engineering Sketch Hint */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-[#9B7A3E]/30 bg-[#F1E8D8] p-2 mb-6 shadow-xs flex items-center justify-center"
      >
        <div className="w-full h-full rounded-full overflow-hidden border border-[#2E241C]/15">
          <img
            src={artAssets.engravingStudy.source}
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter sepia-[0.3] contrast-[0.95]"
            loading="lazy"
          />
        </div>
      </motion.div>

      {/* Chapter Marker Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.15 }}
        className="space-y-2 max-w-lg px-4"
      >
        <div className="flex items-center justify-center gap-2 font-technical text-[9px] sm:text-[10px] tracking-[0.35em] text-[#9B7A3E] uppercase font-semibold">
          <span>TRANSITIO AD CAPUT III</span>
          <span className="w-1 h-1 rounded-full bg-[#9B7A3E]" />
          <span>INSTRUMENTA ARTIS</span>
        </div>

        <h3 className="font-serif-cormorant text-3xl sm:text-4xl text-[#2E241C] uppercase tracking-[0.08em] font-light">
          03 · Tools of Creation
        </h3>

        <p className="font-serif-eb italic text-xs sm:text-sm text-[#777064]">
          Departing the gallery of completed works and entering the workshop of modern engineering instruments, code languages, and AI systems.
        </p>

        <button
          type="button"
          onClick={handleClick}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 border border-[#2E241C]/15 bg-[#F1E8D8] hover:border-[#9B7A3E] transition-all cursor-pointer font-technical text-[9px] tracking-[0.25em] text-[#2E241C] uppercase shadow-xs group"
          aria-label="Proceed to Chapter 03 - Tools of Creation"
        >
          <span>ENTER THE WORKSHOP</span>
          <ArrowDown size={11} className="text-[#9B7A3E] group-hover:translate-y-0.5 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
};

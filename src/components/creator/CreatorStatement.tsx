import React from 'react';
import { motion } from 'motion/react';

interface CreatorStatementProps {
  className?: string;
}

export const CreatorStatement: React.FC<CreatorStatementProps> = ({ className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`relative pl-6 sm:pl-8 border-l-2 border-[#9B7A3E] py-2 my-8 ${className}`}
    >
      {/* Decorative Classical Rhombus Marker */}
      <span className="absolute -left-[5px] top-0 w-2 h-2 rotate-45 bg-[#9B7A3E] border border-[#EEE6D6]" />

      <span className="font-technical text-[8px] sm:text-[9px] tracking-[0.3em] uppercase text-[#9B7A3E] block mb-2 font-semibold">
        CREATOR SENTENTIA · PRINCIPLE
      </span>

      <blockquote className="font-serif-cormorant text-2xl sm:text-3xl lg:text-[32px] text-[#2E241C] font-normal leading-[1.25] tracking-tight">
        &ldquo;I build at the intersection of design, technology and curiosity.&rdquo;
      </blockquote>

      <p className="font-serif-eb italic text-xs sm:text-sm text-[#777064] mt-2">
        Software crafted with structural permanence, optical rhythm, and practical purpose.
      </p>
    </motion.div>
  );
};

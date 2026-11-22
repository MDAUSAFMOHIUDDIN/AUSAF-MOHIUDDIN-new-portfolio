import React, { useState } from 'react';
import { motion } from 'motion/react';
import { artAssets } from '../../data/artAssets';

interface CreatorPortraitProps {
  className?: string;
}

const PORTRAIT_CANDIDATES = [
  encodeURI('/ChatGPT Image Sep 4, 2026, 01_37_04 AM.png'),
  encodeURI('/images/creator/ChatGPT Image Sep 4, 2026, 01_37_04 AM.png'),
  '/images/creator/ausaf-portrait.png',
  '/ausaf-portrait.png',
  '/images/creator/ausaf-portrait.webp',
  '/images/creator/ausaf-portrait.jpg',
];

export const CreatorPortrait: React.FC<CreatorPortraitProps> = ({ className = '' }) => {
  const [candidateIndex, setCandidateIndex] = useState(0);

  const handleImageError = () => {
    if (candidateIndex < PORTRAIT_CANDIDATES.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    }
  };

  const currentSource = PORTRAIT_CANDIDATES[candidateIndex] || artAssets.creatorPortrait.fallbackSource;

  return (
    <div className={`relative flex flex-col items-center lg:items-start ${className}`}>
      {/* Outer Museum Painting Mount / Parchment Mat */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-md bg-[#F1E8D8] p-4 sm:p-5 border border-[#2E241C]/15 shadow-[0_8px_30px_rgba(46,36,28,0.08)]"
      >
        {/* Double Concentric Antique Rule Inset */}
        <div className="absolute inset-2 sm:inset-2.5 border border-[#9B7A3E]/25 pointer-events-none" />
        <div className="absolute inset-3 sm:inset-3.5 border border-[#2E241C]/10 pointer-events-none" />

        {/* Top Catalogue Reference Bar */}
        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#2E241C]/10 px-1 font-technical text-[9px] tracking-[0.25em] text-[#777064] uppercase">
          <span className="text-[#9B7A3E] font-semibold">PORTRAIT / MMXXVI</span>
          <span>ARCHIVE 01 · HYDERABAD</span>
        </div>

        {/* Main Historical Portrait Container */}
        <div className="relative aspect-square w-full overflow-hidden bg-[#E7DBCA] border border-[#2E241C]/20 group shadow-inner">
          {/* Subtle Directional Amber Light Wash */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#2E241C]/10 via-transparent to-[#F1E8D8]/15 pointer-events-none z-10" />

          {/* Portrait Image */}
          <img
            src={currentSource}
            alt={artAssets.creatorPortrait.alt}
            referrerPolicy="no-referrer"
            onError={handleImageError}
            loading="eager"
            className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
          />

          {/* Soft Archival Edge Vignette */}
          <div className="absolute inset-0 ring-1 ring-inset ring-[#2E241C]/15 pointer-events-none" />

          {/* Historical Wax Seal Inset / Monogram Seal */}
          <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#9B7A3E]/85 border border-[#F1E8D8] flex items-center justify-center shadow-xs z-15 select-none pointer-events-none">
            <span className="font-cinzel text-[10px] font-bold text-[#F1E8D8] tracking-widest">
              AM
            </span>
          </div>
        </div>

        {/* Museum Accession Plate & Signature Underneath */}
        <div className="mt-4 pt-3 border-t border-[#2E241C]/10 px-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>
            <span className="font-cinzel text-xs font-semibold text-[#2E241C] tracking-[0.18em] block">
              MD AUSAF MOHIUDDIN
            </span>
            <span className="font-technical text-[9px] text-[#777064] tracking-[0.2em] uppercase block mt-0.5">
              ANNO MMXXVI · PRIMARY RECORD
            </span>
          </div>

          {/* Elegant Handwritten Calligraphic Signature */}
          <div className="text-right">
            <span className="font-serif-eb italic text-base text-[#64352F] tracking-wide select-none">
              M. Ausaf
            </span>
            <span className="font-technical text-[8px] text-[#9B7A3E] tracking-widest block uppercase">
              [Autographum]
            </span>
          </div>
        </div>
      </motion.div>

      {/* Secondary Supporting Historical Sketch: Renaissance Hand with Compass */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="hidden sm:flex items-center gap-3 mt-6 p-3 bg-[#F1E8D8]/70 border border-[#2E241C]/10 max-w-sm"
      >
        <div className="w-14 h-14 shrink-0 overflow-hidden border border-[#2E241C]/15 bg-[#EEE6D6]">
          <img
            src={artAssets.renaissanceHand.source}
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter sepia-[0.2] contrast-[0.95]"
            loading="lazy"
          />
        </div>
        <div className="space-y-0.5">
          <span className="font-technical text-[8px] text-[#9B7A3E] tracking-[0.25em] uppercase font-semibold block">
            MANUSCRIPT FIG. 1.2
          </span>
          <p className="font-serif-eb italic text-xs text-[#554E44] leading-tight">
            &ldquo;Manual precision & structural execution in drafting digital form.&rdquo;
          </p>
        </div>
      </motion.div>
    </div>
  );
};

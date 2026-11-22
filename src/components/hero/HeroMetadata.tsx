import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, Compass } from 'lucide-react';
import { creatorProfile } from '../../data/portfolioData';

interface HeroMetadataProps {
  onEnterArchive: () => void;
}

export const HeroMetadata: React.FC<HeroMetadataProps> = ({ onEnterArchive }) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-6 sm:p-10 lg:p-14">
      {/* Top Left: Archival Reference Tag */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 font-technical text-[9px] tracking-[0.25em] text-[#777064] uppercase border-l border-[#9B7A3E]/40 pl-3">
          <span className="text-[#9B7A3E] font-semibold">FOLIO</span>
          <span>MMXXVI</span>
          <span>·</span>
          <span>OPUS I</span>
        </div>
      </div>

      {/* Top Right: Geographic Coordinate Plaque */}
      <div className="self-end hidden md:flex items-center gap-2 font-technical text-[9px] tracking-[0.25em] text-[#777064] uppercase">
        <Compass size={11} className="text-[#9B7A3E]" />
        <span>{creatorProfile.location}</span>
        <span className="text-[#9B7A3E]">·</span>
        <span>17.3850° N</span>
      </div>

      {/* Bottom Left: Museum Collection Accession Note */}
      <div className="hidden lg:block max-w-xs space-y-1">
        <span className="font-technical text-[8px] tracking-[0.3em] uppercase text-[#9B7A3E] block">
          CATALOGUE SPEC · PHASE II HERO
        </span>
        <p className="font-serif-eb text-xs text-[#554E44] italic leading-tight">
          Renaissance fresco chiaroscuro, classical pointing philosopher motif, harmonic proportions & high-density digital folio.
        </p>
      </div>

      {/* Bottom Right: Primary Call-to-Action "ENTER THE ARCHIVE" */}
      <div className="self-center sm:self-end pointer-events-auto">
        <motion.button
          type="button"
          onClick={onEnterArchive}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="group relative inline-flex items-center gap-3 px-5 py-2.5 bg-[#F1E8D8] border border-[#2E241C]/15 hover:border-[#9B7A3E] shadow-[0_2px_12px_rgba(46,36,28,0.06)] cursor-pointer transition-all duration-300"
          aria-label="Enter the digital archive and proceed to chapter one"
        >
          {/* Corner gold ticks */}
          <span className="absolute -top-px -left-px w-2 h-2 border-t border-l border-[#9B7A3E]" />
          <span className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-[#9B7A3E]" />

          <div className="flex flex-col text-left">
            <span className="font-technical text-[8px] text-[#9B7A3E] tracking-[0.25em] uppercase font-medium">
              BEGIN EXPLORATION
            </span>
            <span className="font-cinzel text-xs text-[#2E241C] tracking-[0.2em] font-semibold group-hover:text-[#64352F] transition-colors">
              ENTER THE ARCHIVE
            </span>
          </div>

          <div className="w-6 h-6 rounded-none border border-[#9B7A3E]/40 flex items-center justify-center bg-[#EEE6D6] group-hover:bg-[#9B7A3E] group-hover:text-[#F1E8D8] transition-colors">
            <ArrowDownRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </div>
        </motion.button>
      </div>
    </div>
  );
};

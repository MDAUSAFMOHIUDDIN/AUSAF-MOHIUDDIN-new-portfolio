import React, { useState } from 'react';
import { motion } from 'motion/react';
import { artAssets } from '../../data/artAssets';

interface AnnotationPoint {
  id: string;
  name: string;
  discipline: string;
  annotation: string;
  marginNote: string;
  x: number; // percentage on manuscript
  y: number;
  labelPosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const annotations: AnnotationPoint[] = [
  {
    id: 'html',
    name: 'HTML',
    discipline: 'STRUCTURE OF THE DOCUMENT',
    annotation: 'The fundamental semantic skeleton and accessible DOM hierarchy upon which all web experiences rest.',
    marginNote: 'prima structura',
    x: 28,
    y: 22,
    labelPosition: 'top-left',
  },
  {
    id: 'css',
    name: 'CSS & TAILWIND',
    discipline: 'VISUAL FORM & OPTICAL RHYTHM',
    annotation: 'Mathematical proportions, typographic scale, fluid layouts, and delicate chiaroscuro contrast.',
    marginNote: 'forma et proportio',
    x: 72,
    y: 24,
    labelPosition: 'top-right',
  },
  {
    id: 'javascript',
    name: 'JAVASCRIPT / TS',
    discipline: 'INTERACTION & SYSTEMIC LOGIC',
    annotation: 'Kinetic behaviour, reactive state propagation, type-safe integrity, and client-side intelligence.',
    marginNote: 'motus et ratio',
    x: 24,
    y: 74,
    labelPosition: 'bottom-left',
  },
  {
    id: 'react',
    name: 'REACT & MOTION',
    discipline: 'COMPONENT-BASED SYSTEMS',
    annotation: 'Composable modular architecture and fluid declarative state transitions that bring digital matter to life.',
    marginNote: 'organismus vivus',
    x: 76,
    y: 76,
    labelPosition: 'bottom-right',
  },
];

export const ManuscriptCenterpiece: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="relative mb-28 sm:mb-36">
      {/* Manuscript Sheet Container */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-[#F1E8D8] p-4 sm:p-8 lg:p-10 border border-[#2E241C]/20 shadow-[0_16px_48px_rgba(46,36,28,0.1)] overflow-hidden"
      >
        {/* Parchment Grid & Double Rule Borders */}
        <div className="absolute inset-2 sm:inset-3 border border-[#9B7A3E]/30 pointer-events-none" />
        <div className="absolute inset-3.5 sm:inset-4.5 border border-[#2E241C]/10 pointer-events-none" />

        {/* Faint watermark / geometry circles background */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-[#9B7A3E]/10 pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full border border-[#9B7A3E]/10 pointer-events-none" />

        {/* Top Manuscript Plate Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-[#2E241C]/15 font-technical text-[8px] sm:text-[9px] tracking-[0.25em] uppercase text-[#777064]">
          <div className="flex items-center gap-2">
            <span className="text-[#9B7A3E] font-bold">FIG. 03.1 · CODEX INVENTUM</span>
            <span>·</span>
            <span>MANUSCRIPT SPREAD</span>
          </div>
          <div className="flex items-center gap-3">
            <span>SCALE: 1:1 RECURSIVE DOM</span>
            <span className="text-[#9B7A3E]">ARCHIVE REF: MMXXVI-03</span>
          </div>
        </div>

        {/* Main Spread Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          {/* Central Leonardo Da Vinci Engineering Artwork */}
          <div className="lg:col-span-8 lg:col-start-3 relative mx-auto w-full max-w-2xl">
            {/* Centerpiece Image Frame */}
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#2E241C]/20 bg-[#E5D8C3] shadow-[0_8px_30px_rgba(46,36,28,0.08)]">
              <img
                src={artAssets.engineeringManuscript.source}
                alt={artAssets.engineeringManuscript.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter contrast-[0.98] sepia-[0.1]"
                loading="lazy"
              />

              {/* Faded Vignette & Parchment Stains */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#F1E8D8]/30 via-transparent to-[#F1E8D8]/20 pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-[#2E241C]/15 pointer-events-none" />

              {/* Animated SVG Diagram Connecting Lines (Visible on Large Screens) */}
              <svg
                className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-20"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {/* Line to HTML (Top Left) */}
                <motion.path
                  d="M 50 50 L 32 30 L 15 30"
                  fill="none"
                  stroke={activeId === 'html' ? '#64352F' : '#9B7A3E'}
                  strokeWidth={activeId === 'html' ? '0.7' : '0.4'}
                  strokeDasharray="2,1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.8 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                />

                {/* Line to CSS (Top Right) */}
                <motion.path
                  d="M 50 50 L 68 30 L 85 30"
                  fill="none"
                  stroke={activeId === 'css' ? '#64352F' : '#9B7A3E'}
                  strokeWidth={activeId === 'css' ? '0.7' : '0.4'}
                  strokeDasharray="2,1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.8 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2, ease: 'easeInOut' }}
                />

                {/* Line to JavaScript (Bottom Left) */}
                <motion.path
                  d="M 50 50 L 32 70 L 15 70"
                  fill="none"
                  stroke={activeId === 'javascript' ? '#64352F' : '#9B7A3E'}
                  strokeWidth={activeId === 'javascript' ? '0.7' : '0.4'}
                  strokeDasharray="2,1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.8 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.4, ease: 'easeInOut' }}
                />

                {/* Line to React (Bottom Right) */}
                <motion.path
                  d="M 50 50 L 68 70 L 85 70"
                  fill="none"
                  stroke={activeId === 'react' ? '#64352F' : '#9B7A3E'}
                  strokeWidth={activeId === 'react' ? '0.7' : '0.4'}
                  strokeDasharray="2,1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.8 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.6, ease: 'easeInOut' }}
                />

                {/* Central Focus Pin */}
                <circle cx="50" cy="50" r="1.5" fill="#9B7A3E" />
                <circle cx="50" cy="50" r="3.5" fill="none" stroke="#9B7A3E" strokeWidth="0.3" strokeDasharray="1,1" />
              </svg>
            </div>

            {/* Handwritten Center Annotations */}
            <div className="mt-3 flex justify-between items-center px-1 font-technical text-[8px] tracking-[0.2em] uppercase text-[#777064]">
              <span className="font-serif-eb italic text-[10px] lowercase tracking-normal text-[#9B7A3E]">
                &ldquo;mechanica et constructio digitalis&rdquo;
              </span>
              <span>MEASUREMENTS ACCORDING TO HARMONIC RATIOS</span>
            </div>
          </div>
        </div>

        {/* Surrounding Technical Instrument Annotations (Interactive Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-6 border-t border-[#2E241C]/15">
          {annotations.map((item) => {
            const isHovered = activeId === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                onMouseLeave={() => setActiveId(null)}
                className={`p-3.5 transition-all duration-300 border ${
                  isHovered
                    ? 'bg-[#EEE6D6] border-[#9B7A3E] shadow-sm'
                    : 'bg-[#F1E8D8]/70 border-[#2E241C]/10 hover:border-[#9B7A3E]/50'
                }`}
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-1.5 font-technical text-[8px] tracking-widest uppercase">
                  <span className="text-[#9B7A3E] font-semibold">{item.name}</span>
                  <span className="font-serif-eb italic text-[9px] lowercase tracking-normal text-[#64352F]">
                    {item.marginNote}
                  </span>
                </div>

                {/* Instrument Role */}
                <h4 className="font-serif-cormorant text-base sm:text-lg font-medium text-[#2E241C] leading-snug uppercase tracking-tight">
                  {item.discipline}
                </h4>

                {/* Explanation */}
                <p className="font-serif-eb text-xs text-[#554E44] leading-relaxed mt-1.5">
                  {item.annotation}
                </p>

                {/* Sub-label */}
                <div className="mt-2.5 pt-1.5 border-t border-[#2E241C]/10 flex items-center justify-between font-technical text-[7px] tracking-[0.2em] text-[#777064] uppercase">
                  <span>DISCIPLINE: CORE IMPLEMENT</span>
                  <span className="text-[#9B7A3E]">STABLE</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Manuscript Ledger Details */}
        <div className="mt-6 pt-3 border-t border-[#2E241C]/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 font-technical text-[8px] tracking-[0.2em] text-[#777064] uppercase">
          <div className="flex items-center gap-3">
            <span>OBSERVATION: NO PROGRESS BARS</span>
            <span>·</span>
            <span>EVALUATED BY COMPLETED ARTIFACTS</span>
          </div>
          <span className="font-serif-eb italic text-[10px] text-[#9B7A3E] normal-case tracking-normal">
            &ldquo;The measure of an instrument is the fidelity of the work it produces.&rdquo;
          </span>
        </div>
      </motion.div>
    </div>
  );
};

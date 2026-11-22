import React from 'react';
import { motion } from 'motion/react';

interface InstrumentDetail {
  latinName: string;
  modernEquiv: string;
  symbol: string;
  role: string;
}

const physicalDraftingTools: InstrumentDetail[] = [
  {
    latinName: 'Circinus Aureus',
    modernEquiv: 'THE COMPASS · PROPORTION & RADIUS',
    symbol: '⊕',
    role: 'Establishing harmonic radii, fluid responsive bounds, and Golden Ratio viewport divisions.',
  },
  {
    latinName: 'Calamus et Atramentum',
    modernEquiv: 'THE QUILL & INK · SEMANTIC CODE',
    symbol: '✒',
    role: 'Marking permanent semantic statements and declaring unyielding structural documents.',
  },
  {
    latinName: 'Norma et Regula',
    modernEquiv: 'THE SQUARE & RULE · GRID SYSTEM',
    symbol: '📐',
    role: 'Enforcing strict typographic scales, optical baselines, and alignment discipline.',
  },
  {
    latinName: 'Dentata Rota',
    modernEquiv: 'THE GEAR & PULLEY · SYSTEMIC LOGIC',
    symbol: '⚙',
    role: 'Orchestrating kinetic event loops, asynchronous promises, and reactive state machinery.',
  },
];

export const PhysicalInstruments: React.FC = () => {
  return (
    <div className="relative mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="p-4 sm:p-6 bg-[#EEE6D6] border border-[#2E241C]/15"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#2E241C]/10 pb-3 mb-4 gap-2">
          <div className="flex items-center gap-2 font-technical text-[9px] tracking-[0.25em] uppercase text-[#777064]">
            <span className="text-[#9B7A3E] font-semibold">APPENDIX III.A</span>
            <span>·</span>
            <span>ANALOGICAL INSTRUMENTS OF THE WORKSHOP</span>
          </div>
          <span className="font-serif-eb italic text-xs text-[#64352F]">
            Archival Study of Drafting Implements
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {physicalDraftingTools.map((tool, idx) => (
            <div
              key={idx}
              className="p-3 bg-[#F1E8D8] border border-[#2E241C]/10 space-y-1.5"
            >
              <div className="flex items-center justify-between font-technical text-[8px] tracking-wider text-[#9B7A3E] uppercase font-semibold">
                <span>{tool.latinName}</span>
                <span className="text-sm">{tool.symbol}</span>
              </div>
              <h5 className="font-serif-cormorant text-sm font-medium text-[#2E241C] uppercase tracking-tight">
                {tool.modernEquiv}
              </h5>
              <p className="font-serif-eb text-[11px] text-[#554E44] leading-relaxed">
                {tool.role}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

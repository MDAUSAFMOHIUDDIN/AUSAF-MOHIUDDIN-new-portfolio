import React from 'react';
import { motion } from 'motion/react';
import { artAssets } from '../../data/artAssets';

interface FoundationTool {
  name: string;
  purpose: string;
  description: string;
  latinRole: string;
}

const foundationTools: FoundationTool[] = [
  {
    name: 'HTML5',
    purpose: 'STRUCTURE',
    description: 'Semantic markup, accessible tree hierarchies, landmark elements, and resilient structural skeletons.',
    latinRole: 'Fundamentum Structurae',
  },
  {
    name: 'CSS3 & MODERN LAYOUTS',
    purpose: 'FORM & PROPORTION',
    description: 'Subgrid, flexbox geometry, fluid typography, optical letter-spacing, and harmonious color spaces.',
    latinRole: 'Harmonia et Proportio',
  },
  {
    name: 'JAVASCRIPT (ESNEXT)',
    purpose: 'BEHAVIOUR & MOTION',
    description: 'Reactive state management, DOM event orchestration, asynchronous protocols, and kinetic physics.',
    latinRole: 'Motus et Vivacitas',
  },
  {
    name: 'TYPESCRIPT',
    purpose: 'ORDER & RIGOR',
    description: 'Strict type systems, predictable contracts, compiler-verified correctness, and architectural reliability.',
    latinRole: 'Disciplina et Ordo',
  },
  {
    name: 'RESPONSIVE WEB DESIGN',
    purpose: 'ADAPTIVE GEOMETRY',
    description: 'Fluid viewpoint scaling, touch-target ergonomics, container queries, and seamless cross-device fidelity.',
    latinRole: 'Flexibilitas Mechanica',
  },
];

export const FoundationsPlate: React.FC = () => {
  return (
    <div className="relative mb-24 sm:mb-32">
      {/* Plate Sheet */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#F1E8D8] p-5 sm:p-8 lg:p-10 border border-[#2E241C]/15 shadow-[0_12px_40px_rgba(46,36,28,0.08)] relative"
      >
        {/* Concentric Frame Inset */}
        <div className="absolute inset-2 sm:inset-3 border border-[#9B7A3E]/25 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          {/* Left Column: Heading & Philosophical Framing */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2 border-b border-[#2E241C]/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="font-cinzel text-xs text-[#9B7A3E] font-bold tracking-[0.25em]">
                  GROUP I · FOUNDATIONS
                </span>
                <span className="w-4 h-px bg-[#9B7A3E]/40" />
                <span className="font-technical text-[9px] text-[#777064] tracking-[0.25em] uppercase">
                  PLATE 03.01
                </span>
              </div>

              <h3 className="font-serif-cormorant text-3xl sm:text-4xl text-[#2E241C] font-light uppercase tracking-tight">
                Architectural Foundations
              </h3>

              <p className="font-technical text-[10px] text-[#777064] tracking-[0.2em] uppercase font-medium">
                THE PRIMARY CODE DIALECTS
              </p>
            </div>

            <p className="font-serif-eb text-sm sm:text-base text-[#2E241C]/85 leading-relaxed">
              Every digital edifice requires unshakable structural ground. Rather than transient novelty, these fundamental languages provide the enduring principles of semantic integrity, visual proportion, and operational reliability.
            </p>

            {/* Hand Study Art Asset Inset */}
            <div className="p-3 bg-[#EEE6D6] border border-[#2E241C]/15 flex items-center gap-3">
              <div className="w-16 h-16 shrink-0 overflow-hidden border border-[#2E241C]/15 bg-[#E2D6C0]">
                <img
                  src={artAssets.handStudy.source}
                  alt=""
                  aria-hidden="true"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter sepia-[0.2] contrast-[0.96]"
                  loading="lazy"
                />
              </div>
              <div className="space-y-1 font-technical text-[8px] tracking-wider uppercase text-[#777064]">
                <span className="text-[#9B7A3E] font-semibold block">FIG. 3.1A · DRAFTING PRECISION</span>
                <p className="font-serif-eb italic text-[11px] text-[#554E44] normal-case tracking-normal">
                  Manual discipline in code structure creates seamless tactile user experiences.
                </p>
              </div>
            </div>

            {/* Handwritten Note Callout */}
            <div className="border-l-2 border-[#9B7A3E] pl-3 py-1">
              <span className="font-serif-eb italic text-xs text-[#64352F] block">
                &ldquo;structure first, styled with measure, verified with type rigor.&rdquo;
              </span>
            </div>
          </div>

          {/* Right Column: Foundation Tools Breakdown */}
          <div className="lg:col-span-7 space-y-3">
            {foundationTools.map((tool, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-[#EEE6D6]/70 border border-[#2E241C]/10 hover:border-[#9B7A3E]/60 transition-colors group"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-technical text-[9px] text-[#9B7A3E] font-semibold select-none">
                      [0{idx + 1}]
                    </span>
                    <h4 className="font-serif-cormorant text-lg sm:text-xl font-medium text-[#2E241C] tracking-wide group-hover:text-[#64352F] transition-colors">
                      {tool.name}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 font-technical text-[8px] tracking-[0.2em] uppercase">
                    <span className="px-2 py-0.5 bg-[#F1E8D8] border border-[#2E241C]/10 text-[#9B7A3E] font-semibold">
                      {tool.purpose}
                    </span>
                    <span className="text-[#777064] hidden sm:inline">{tool.latinRole}</span>
                  </div>
                </div>

                <p className="font-serif-eb text-xs text-[#554E44] leading-relaxed pl-5">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

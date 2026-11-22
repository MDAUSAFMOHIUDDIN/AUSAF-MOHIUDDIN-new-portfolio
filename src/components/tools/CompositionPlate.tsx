import React from 'react';
import { motion } from 'motion/react';
import { artAssets } from '../../data/artAssets';

interface CompositionTool {
  name: string;
  discipline: string;
  purpose: string;
  description: string;
}

const compositionTools: CompositionTool[] = [
  {
    name: 'REACT 18 / 19',
    discipline: 'COMPONENT-BASED SYSTEMS',
    purpose: 'SYSTEMIC ARCHITECTURE',
    description: 'Modular state trees, reactive lifecycle synchronization, custom hook encapsulation, and declarative rendering pipelines.',
  },
  {
    name: 'TAILWIND CSS',
    discipline: 'UTILITY GEOMETRY & TYPOGRAPHY',
    purpose: 'OPTICAL PRECISION',
    description: 'Strict spacing scales, typographic mathematical ratios, responsive breakpoint constraints, and zero runtime overhead.',
  },
  {
    name: 'UI / UX DESIGN',
    discipline: 'HUMAN EXPERIENCE & ERGONOMICS',
    purpose: 'INTENTIONAL INTERACTION',
    description: 'Cognitive load reduction, typographic hierarchy, spatial rhythm, accessible contrast ratios, and deliberate micro-interactions.',
  },
  {
    name: 'MOBILE-FRIENDLY & TOUCH SYSTEMS',
    discipline: 'TACTILE ERGONOMICS',
    purpose: 'PORTABLE HARMONY',
    description: 'Thumb-zone navigation patterns, 44px+ touch targets, dynamic viewports, and fluid touch gesture response.',
  },
];

export const CompositionPlate: React.FC = () => {
  return (
    <div className="relative mb-24 sm:mb-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#F1E8D8] p-5 sm:p-8 lg:p-10 border border-[#2E241C]/15 shadow-[0_12px_40px_rgba(46,36,28,0.08)] relative"
      >
        <div className="absolute inset-2 sm:inset-3 border border-[#9B7A3E]/25 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          {/* Left Column: Composition Breakdown */}
          <div className="lg:col-span-7 space-y-3 order-2 lg:order-1">
            {compositionTools.map((tool, idx) => (
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
                  <span className="font-technical text-[8px] tracking-[0.2em] text-[#9B7A3E] uppercase font-semibold px-2 py-0.5 bg-[#F1E8D8] border border-[#2E241C]/10 w-fit">
                    {tool.purpose}
                  </span>
                </div>

                <div className="font-technical text-[8px] text-[#777064] tracking-wider uppercase pl-5 mb-1">
                  DISCIPLINE: {tool.discipline}
                </div>

                <p className="font-serif-eb text-xs text-[#554E44] leading-relaxed pl-5">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Geometry / Proportional Studies Image & Text */}
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <div className="space-y-2 border-b border-[#2E241C]/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="font-cinzel text-xs text-[#9B7A3E] font-bold tracking-[0.25em]">
                  GROUP II · COMPOSITION
                </span>
                <span className="w-4 h-px bg-[#9B7A3E]/40" />
                <span className="font-technical text-[9px] text-[#777064] tracking-[0.25em] uppercase">
                  PLATE 03.02
                </span>
              </div>

              <h3 className="font-serif-cormorant text-3xl sm:text-4xl text-[#2E241C] font-light uppercase tracking-tight">
                Geometry & Proportions
              </h3>

              <p className="font-technical text-[10px] text-[#777064] tracking-[0.2em] uppercase font-medium">
                THE LAWS OF DIGITAL HARMONY
              </p>
            </div>

            <p className="font-serif-eb text-sm sm:text-base text-[#2E241C]/85 leading-relaxed">
              True digital craftsmanship is not about arbitrary decoration; it is the mathematical arrangement of negative space, optical hierarchy, and modular component geometry.
            </p>

            {/* Geometry Study Art Asset */}
            <div className="p-3 bg-[#EEE6D6] border border-[#2E241C]/15 flex items-center gap-3">
              <div className="w-16 h-16 shrink-0 overflow-hidden border border-[#2E241C]/15 bg-[#E2D6C0]">
                <img
                  src={artAssets.geometryStudy.source}
                  alt=""
                  aria-hidden="true"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter sepia-[0.2] contrast-[0.96]"
                  loading="lazy"
                />
              </div>
              <div className="space-y-1 font-technical text-[8px] tracking-wider uppercase text-[#777064]">
                <span className="text-[#9B7A3E] font-semibold block">FIG. 3.2A · HARMONIC SCALES</span>
                <p className="font-serif-eb italic text-[11px] text-[#554E44] normal-case tracking-normal">
                  Proportions derived from classical mathematical ratios applied to modern responsive viewports.
                </p>
              </div>
            </div>

            <div className="border-l-2 border-[#9B7A3E] pl-3 py-1">
              <span className="font-serif-eb italic text-xs text-[#64352F] block">
                &ldquo;responsive by design · balanced by optical measure.&rdquo;
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

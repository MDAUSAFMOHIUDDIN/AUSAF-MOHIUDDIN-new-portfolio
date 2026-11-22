import React from 'react';
import { motion } from 'motion/react';
import { artAssets } from '../../data/artAssets';

interface IntelligenceTool {
  name: string;
  discipline: string;
  purpose: string;
  description: string;
  annotation: string;
}

const intelligenceTools: IntelligenceTool[] = [
  {
    name: 'AI-ASSISTED DEVELOPMENT',
    discipline: 'ACCELERATED REASONING',
    purpose: 'ARCHITECTURAL MULTIPLIER',
    description: 'Rapid structural prototyping, iterative refactoring, edge-case generation, and algorithmic problem decomposition.',
    annotation: 'cogitatio mechanica',
  },
  {
    name: 'PROMPT ENGINEERING & DIRECTION',
    discipline: 'SYSTEMIC SPECIFICATION',
    purpose: 'INTENT CLARITY',
    description: 'Structuring precise constraints, few-shot contextual priming, multi-step chain-of-thought directives, and deterministic outputs.',
    annotation: 'directio rationis',
  },
  {
    name: 'LOVABLE AI & RAPID FABRICATION',
    discipline: 'EXPERIENCE PROTOTYPING',
    purpose: 'RAPID SYNTHESIS',
    description: 'Full-stack application scaffolding, instant UI preview loops, generative component generation, and rapid deployment testing.',
    annotation: 'synthesio celeris',
  },
  {
    name: 'GOOGLE AI STUDIO & MODEL WORKFLOWS',
    discipline: 'MULTIMODAL INTELLIGENCE',
    purpose: 'COGNITIVE LOGIC',
    description: 'Direct model orchestration, structured JSON output enforcement, multimodal token processing, and server-side AI endpoints.',
    annotation: 'artificium mentis',
  },
];

export const IntelligencePlate: React.FC = () => {
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
          {/* Left Column: Philosophical Framing of Artificial Intelligence in the Renaissance Mind */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2 border-b border-[#2E241C]/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="font-cinzel text-xs text-[#9B7A3E] font-bold tracking-[0.25em]">
                  GROUP III · INTELLIGENCE
                </span>
                <span className="w-4 h-px bg-[#9B7A3E]/40" />
                <span className="font-technical text-[9px] text-[#777064] tracking-[0.25em] uppercase">
                  PLATE 03.03
                </span>
              </div>

              <h3 className="font-serif-cormorant text-3xl sm:text-4xl text-[#2E241C] font-light uppercase tracking-tight">
                Reasoning & Artificial Intellect
              </h3>

              <p className="font-technical text-[10px] text-[#777064] tracking-[0.2em] uppercase font-medium">
                THE MACHINE THAT ASSISTS THOUGHT
              </p>
            </div>

            <p className="font-serif-eb text-sm sm:text-base text-[#2E241C]/85 leading-relaxed">
              If an inventor of antiquity discovered generative artificial intelligence, they would view it not as a replacement for human taste, but as an extraordinary computational lever: multiplying the speed at which ideas become living structures.
            </p>

            {/* Mechanical Sketch Art Asset */}
            <div className="p-3 bg-[#EEE6D6] border border-[#2E241C]/15 flex items-center gap-3">
              <div className="w-16 h-16 shrink-0 overflow-hidden border border-[#2E241C]/15 bg-[#E2D6C0]">
                <img
                  src={artAssets.mechanicalSketch.source}
                  alt=""
                  aria-hidden="true"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter sepia-[0.2] contrast-[0.96]"
                  loading="lazy"
                />
              </div>
              <div className="space-y-1 font-technical text-[8px] tracking-wider uppercase text-[#777064]">
                <span className="text-[#9B7A3E] font-semibold block">FIG. 3.3A · TRANSMISSION OF LOGIC</span>
                <p className="font-serif-eb italic text-[11px] text-[#554E44] normal-case tracking-normal">
                  Pulleys and gears translated into semantic reasoning chains and autonomous builds.
                </p>
              </div>
            </div>

            <div className="border-l-2 border-[#9B7A3E] pl-3 py-1">
              <span className="font-serif-eb italic text-xs text-[#64352F] block">
                &ldquo;idea directed by human intent → synthesized by algorithmic reasoning.&rdquo;
              </span>
            </div>
          </div>

          {/* Right Column: AI Tooling Breakdown */}
          <div className="lg:col-span-7 space-y-3">
            {intelligenceTools.map((tool, idx) => (
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
                  <div className="flex items-center gap-2">
                    <span className="font-technical text-[8px] tracking-[0.2em] text-[#9B7A3E] uppercase font-semibold px-2 py-0.5 bg-[#F1E8D8] border border-[#2E241C]/10">
                      {tool.purpose}
                    </span>
                    <span className="font-serif-eb italic text-[9px] text-[#777064] hidden sm:inline">
                      {tool.annotation}
                    </span>
                  </div>
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
        </div>
      </motion.div>
    </div>
  );
};

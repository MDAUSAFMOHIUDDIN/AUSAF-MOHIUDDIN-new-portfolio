import React from 'react';
import { motion } from 'motion/react';
import { artAssets } from '../../data/artAssets';

interface InfraTool {
  name: string;
  discipline: string;
  purpose: string;
  description: string;
}

const infraTools: InfraTool[] = [
  {
    name: 'SUPABASE & SQL DATABASES',
    discipline: 'PERSISTENCE & DATA VAULT',
    purpose: 'DURABLE STORAGE',
    description: 'Relational data modeling, secure Row Level Security (RLS) policies, real-time subscriptions, and serverless authentication.',
  },
  {
    name: 'GITHUB & VERSION CONTROL',
    discipline: 'COLLABORATIVE CHRONOLOGY',
    purpose: 'VERSION INTEGRITY',
    description: 'Immutable commit trees, branching strategies, automated CI/CD validation actions, and collaborative multi-engineer workflows.',
  },
  {
    name: 'VERCEL & EDGE DEPLOYMENT',
    discipline: 'GLOBAL DELIVERY & LATENCY',
    purpose: 'INSTANT PRODUCTION',
    description: 'Zero-configuration global CDN routing, atomic preview deployments, serverless function compute, and resilient DNS management.',
  },
  {
    name: 'CLOUD & HOSTING WORKFLOWS',
    discipline: 'INFRASTRUCTURE ORCHESTRATION',
    purpose: 'OPERATIONAL RESILIENCE',
    description: 'Environment variable isolation, containerized runtimes, production monitoring, and automated SSL encryption lifecycles.',
  },
];

export const InfrastructurePlate: React.FC = () => {
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
          {/* Left Column: Infrastructure Breakdown */}
          <div className="lg:col-span-7 space-y-3 order-2 lg:order-1">
            {infraTools.map((tool, idx) => (
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

          {/* Right Column: Infrastructure Philosophy & Drafting Implements Image */}
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <div className="space-y-2 border-b border-[#2E241C]/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="font-cinzel text-xs text-[#9B7A3E] font-bold tracking-[0.25em]">
                  GROUP IV · INFRASTRUCTURE
                </span>
                <span className="w-4 h-px bg-[#9B7A3E]/40" />
                <span className="font-technical text-[9px] text-[#777064] tracking-[0.25em] uppercase">
                  PLATE 03.04
                </span>
              </div>

              <h3 className="font-serif-cormorant text-3xl sm:text-4xl text-[#2E241C] font-light uppercase tracking-tight">
                Delivery & Persistence
              </h3>

              <p className="font-technical text-[10px] text-[#777064] tracking-[0.2em] uppercase font-medium">
                HOW THE WORK LEAVES THE WORKSHOP
              </p>
            </div>

            <p className="font-serif-eb text-sm sm:text-base text-[#2E241C]/85 leading-relaxed">
              A blueprint remains a theoretical drawing until it is built and inhabited. Infrastructure represents the bridge from the workshop table to global production availability.
            </p>

            {/* Compass Engraving Art Asset */}
            <div className="p-3 bg-[#EEE6D6] border border-[#2E241C]/15 flex items-center gap-3">
              <div className="w-16 h-16 shrink-0 overflow-hidden border border-[#2E241C]/15 bg-[#E2D6C0]">
                <img
                  src={artAssets.compassEngraving.source}
                  alt=""
                  aria-hidden="true"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter sepia-[0.2] contrast-[0.96]"
                  loading="lazy"
                />
              </div>
              <div className="space-y-1 font-technical text-[8px] tracking-wider uppercase text-[#777064]">
                <span className="text-[#9B7A3E] font-semibold block">FIG. 3.4A · INSTRUMENTS OF SHIPMENT</span>
                <p className="font-serif-eb italic text-[11px] text-[#554E44] normal-case tracking-normal">
                  Reliable deployment pipelines transform digital concepts into accessible public realities.
                </p>
              </div>
            </div>

            <div className="border-l-2 border-[#9B7A3E] pl-3 py-1">
              <span className="font-serif-eb italic text-xs text-[#64352F] block">
                &ldquo;ship with confidence · persist with integrity · scale globally.&rdquo;
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

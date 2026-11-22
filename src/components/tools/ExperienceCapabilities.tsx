import React from 'react';
import { motion } from 'motion/react';

interface CapabilityItem {
  numeral: string;
  name: string;
  category: string;
  description: string;
}

const capabilities: CapabilityItem[] = [
  {
    numeral: 'I',
    name: 'Responsive Multi-Page Websites',
    category: 'DIGITAL ARCHITECTURE',
    description: 'Bespoke corporate and institutional presences built with fluid typographic grids, fast page loads, and distinct aesthetic character.',
  },
  {
    numeral: 'II',
    name: 'Progressive Web Apps (PWA)',
    category: 'APPLICATION RUNTIMES',
    description: 'Offline-capable, installable web experiences combining native mobile performance with zero app-store friction.',
  },
  {
    numeral: 'III',
    name: 'Full-Stack Web Applications',
    category: 'INTERACTIVE SYSTEMS',
    description: 'Dynamic user portals, inventory control suites, generative canvas utilities, and authenticated management workflows.',
  },
  {
    numeral: 'IV',
    name: 'E-Commerce & WhatsApp Showrooms',
    category: 'COMMERCIAL PLATFORMS',
    description: 'Frictionless product presentation engines optimized for rapid product discovery and direct WhatsApp customer inquiries.',
  },
  {
    numeral: 'V',
    name: 'Editorial Landing Pages & Monograph Stories',
    category: 'NARRATIVE DESIGN',
    description: 'High-conversion product debuts and storytelling experiences designed with cinematic scroll pacing and intentional typography.',
  },
  {
    numeral: 'VI',
    name: 'Search & Generative Discovery (SEO & GEO)',
    category: 'DISCOVERY OPTIMIZATION',
    description: 'Semantic DOM architecture, JSON-LD structured schema markup, and content indexing optimized for modern search engines and AI citation models.',
  },
];

export const ExperienceCapabilities: React.FC = () => {
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

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#2E241C]/10 pb-4 mb-8 relative z-10 gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-cinzel text-xs text-[#9B7A3E] font-bold tracking-[0.25em]">
                GROUP V · THE OUTPUT
              </span>
              <span className="w-4 h-px bg-[#9B7A3E]/40" />
              <span className="font-technical text-[9px] text-[#777064] tracking-[0.25em] uppercase">
                PLATE 03.05
              </span>
            </div>
            <h3 className="font-serif-cormorant text-3xl sm:text-4xl text-[#2E241C] font-light uppercase tracking-tight mt-1">
              Artifacts of the Workshop
            </h3>
          </div>
          <span className="font-technical text-[9px] text-[#777064] tracking-[0.22em] uppercase">
            WHAT THESE INSTRUMENTS ENABLE ME TO CONSTRUCT
          </span>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-4 bg-[#EEE6D6]/75 border border-[#2E241C]/10 hover:border-[#9B7A3E]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-technical text-[8px] tracking-[0.2em] uppercase text-[#777064] mb-2 pb-1.5 border-b border-[#2E241C]/10">
                  <span className="text-[#9B7A3E] font-semibold">FORM [{cap.numeral}]</span>
                  <span>{cap.category}</span>
                </div>
                <h4 className="font-serif-cormorant text-lg font-medium text-[#2E241C] mb-2 leading-snug">
                  {cap.name}
                </h4>
                <p className="font-serif-eb text-xs text-[#554E44] leading-relaxed">
                  {cap.description}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-[#2E241C]/10 flex items-center justify-between font-technical text-[7px] tracking-widest text-[#777064] uppercase">
                <span>FABRICATED ON DEMAND</span>
                <span className="text-[#9B7A3E]">READY</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 pt-4 border-t border-[#2E241C]/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 font-technical text-[8px] tracking-[0.2em] text-[#777064] uppercase relative z-10">
          <span>NOTICE: DETAILED COMMISSION PACKAGES DETAILED IN CHAPTER 04</span>
          <span className="font-serif-eb italic text-[10px] text-[#9B7A3E] normal-case tracking-normal">
            &ldquo;From raw tools to refined utility.&rdquo;
          </span>
        </div>
      </motion.div>
    </div>
  );
};

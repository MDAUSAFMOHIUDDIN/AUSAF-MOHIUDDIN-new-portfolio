import React from 'react';
import { motion } from 'motion/react';

interface CreatorCapabilitiesProps {
  className?: string;
}

export const CreatorCapabilities: React.FC<CreatorCapabilitiesProps> = ({ className = '' }) => {
  const capabilities = [
    {
      numeral: 'I',
      title: 'WEB DEVELOPMENT',
      detail: 'Full-stack web architecture, React, Next.js, Node.js & high-performance APIs.',
    },
    {
      numeral: 'II',
      title: 'UI / UX DESIGN',
      detail: 'Bespoke design systems, typography hierarchy, motion craft & responsive interfaces.',
    },
    {
      numeral: 'III',
      title: 'AI-ASSISTED BUILDING',
      detail: 'Integration of LLMs, intelligent workflow automation & generative features.',
    },
    {
      numeral: 'IV',
      title: 'DIGITAL STRATEGY',
      detail: 'End-to-end digital solutions tailored for real-world businesses and client goals.',
    },
    {
      numeral: 'V',
      title: 'DEPLOYMENT',
      detail: 'Cloud infrastructure, Vercel, Cloud Run, CI/CD pipelines & production hardening.',
    },
    {
      numeral: 'VI',
      title: 'SEO & GEO',
      detail: 'Search engine discoverability, structured schemas & local search presence.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`pt-6 border-t border-[#2E241C]/10 ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="font-technical text-[9px] tracking-[0.3em] uppercase text-[#9B7A3E] font-semibold">
          CAPABILITIES PREVIEW · CLASSIFICATIO
        </span>
        <span className="font-technical text-[8px] tracking-[0.2em] uppercase text-[#777064]">
          [VI DISCIPLINAE]
        </span>
      </div>

      {/* 2-Column or 3-Column Archival Grid (No modern cards/pills) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 font-technical">
        {capabilities.map((item, idx) => (
          <div
            key={idx}
            className="p-3 bg-[#F1E8D8]/60 border border-[#2E241C]/10 hover:border-[#9B7A3E]/60 transition-colors"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="font-cinzel text-xs text-[#9B7A3E] font-bold">
                {item.numeral}
              </span>
              <span className="w-3 h-px bg-[#9B7A3E]/40" />
              <span className="text-[11px] font-semibold tracking-wider text-[#2E241C]">
                {item.title}
              </span>
            </div>
            <p className="font-serif-eb italic text-xs text-[#554E44] leading-tight">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

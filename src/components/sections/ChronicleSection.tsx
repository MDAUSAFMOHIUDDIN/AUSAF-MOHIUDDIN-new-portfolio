import React from 'react';
import { ChapterNumber } from '../common/ChapterNumber';
import { EditorialHeading } from '../common/EditorialHeading';
import { GoldDivider } from '../common/GoldDivider';
import { AntiqueBorder } from '../common/AntiqueBorder';
import { chapters } from '../../data/portfolioData';

const chronicleEntries = [
  {
    year: '2024–Present',
    romanYear: 'MMXXIV–MMXXVI',
    title: 'Independent Digital Artisan & Full-Stack AI Engineer',
    desc: 'Engineering generative interfaces, full-stack web platforms, and custom architectural solutions for global clients.',
  },
  {
    year: '2023–2024',
    romanYear: 'MMXXIII',
    title: 'Platform Architecture & Web Development',
    desc: 'Delivering responsive e-commerce portals, academic institutions, and high-conversion client web presences.',
  },
];

export const ChronicleSection: React.FC = () => {
  const meta = chapters[6];

  return (
    <section
      id="chronicle"
      className="relative min-h-[70vh] py-24 px-4 sm:px-6 lg:px-8 border-b border-[#2E241C]/15 bg-[#F1E8D8]/40"
    >
      <div className="max-w-4xl w-full mx-auto relative z-10">
        {/* Chapter Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#2E241C]/15 pb-4 mb-10">
          <ChapterNumber
            number={meta.chapterNumber}
            romanNumeral={meta.romanNumeral}
            title={meta.title}
          />
          <span className="font-serif-eb italic text-sm text-[#777064] mt-2 sm:mt-0">
            {meta.latinSubtitle} — Historical Annals
          </span>
        </div>

        {/* Heading */}
        <EditorialHeading
          title="The Chronicle & Trajectory"
          subtitle="An archival record of formative milestones, foundational projects, and career evolutions."
          latinTag="ANNALES ET ITINERA · CAPUT VI"
          level={2}
          className="mb-10"
        />

        {/* Timeline Annals */}
        <div className="space-y-6">
          {chronicleEntries.map((entry, idx) => (
            <AntiqueBorder key={idx} variant="corners" className="bg-[#EEE6D6]">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#2E241C]/10 pb-2 mb-2">
                <span className="font-cinzel text-xs font-semibold text-[#9B7A3E] tracking-widest uppercase">
                  {entry.romanYear} ({entry.year})
                </span>
                <span className="font-sans-modern text-[10px] text-[#777064] uppercase tracking-widest mt-1 sm:mt-0">
                  RECORD NO. 0{idx + 1}
                </span>
              </div>
              <h4 className="font-serif-cormorant text-2xl font-medium text-[#1D1915]">
                {entry.title}
              </h4>
              <p className="font-sans-modern text-xs text-[#554E44] mt-2 leading-relaxed">
                {entry.desc}
              </p>
            </AntiqueBorder>
          ))}
        </div>

        <GoldDivider ornament="asterisk" className="mt-14" />
      </div>
    </section>
  );
};

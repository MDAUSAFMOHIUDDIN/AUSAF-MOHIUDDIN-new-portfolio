import React from 'react';
import { ChapterNumber } from '../common/ChapterNumber';
import { EditorialHeading } from '../common/EditorialHeading';
import { GoldDivider } from '../common/GoldDivider';
import { AntiqueBorder } from '../common/AntiqueBorder';
import { chapters } from '../../data/portfolioData';

const practiceTenets = [
  {
    numeral: 'I',
    title: 'Architectural Rigor',
    latin: 'Firmitas',
    desc: 'Structured component hierarchies, strict type contracts, and predictable state lifecycles ensuring stability across scale.',
  },
  {
    numeral: 'II',
    title: 'Optical & Typographical Weight',
    latin: 'Venustas',
    desc: 'Mathematical scales, intentional spacing ratios, and balanced contrast avoiding disposable clichés.',
  },
  {
    numeral: 'III',
    title: 'Performance & Velocity',
    latin: 'Utilitas',
    desc: 'GPU-accelerated transformations, zero layout shifting, and disciplined asset pipelines ensuring instant tactile responsiveness.',
  },
];

export const PracticeSection: React.FC = () => {
  const meta = chapters[4];

  return (
    <section
      id="practice"
      className="relative min-h-[70vh] py-24 px-4 sm:px-6 lg:px-8 border-b border-[#2E241C]/15 bg-[#F1E8D8]/40"
    >
      <div className="max-w-5xl w-full mx-auto relative z-10">
        {/* Chapter Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#2E241C]/15 pb-4 mb-10">
          <ChapterNumber
            number={meta.chapterNumber}
            romanNumeral={meta.romanNumeral}
            title={meta.title}
          />
          <span className="font-serif-eb italic text-sm text-[#777064] mt-2 sm:mt-0">
            {meta.latinSubtitle} — Tenets of the Discipline
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-3xl mb-12">
          <EditorialHeading
            title="The Practice & Methodology"
            subtitle="The Vitruvian triad applied to the modern web: strength, utility, and enduring beauty."
            latinTag="METHODUS ET DISCIPLINA · CAPUT IV"
            level={2}
          />
        </div>

        {/* Tenets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {practiceTenets.map((tenet, idx) => (
            <AntiqueBorder key={idx} variant="corners" className="bg-[#EEE6D6] h-full flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between border-b border-[#2E241C]/10 pb-2 mb-3">
                  <span className="font-cinzel text-lg font-bold text-[#9B7A3E]">
                    {tenet.numeral}
                  </span>
                  <span className="font-serif-eb italic text-xs text-[#64352F]">
                    {tenet.latin}
                  </span>
                </div>
                <h4 className="font-serif-cormorant text-xl font-medium text-[#1D1915] mb-2">
                  {tenet.title}
                </h4>
                <p className="font-sans-modern text-xs text-[#554E44] leading-relaxed">
                  {tenet.desc}
                </p>
              </div>
            </AntiqueBorder>
          ))}
        </div>

        <GoldDivider ornament="rhombus" className="mt-14" />
      </div>
    </section>
  );
};

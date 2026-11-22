import React from 'react';
import { ChapterNumber } from '../common/ChapterNumber';
import { EditorialHeading } from '../common/EditorialHeading';
import { GoldDivider } from '../common/GoldDivider';
import { AntiqueBorder } from '../common/AntiqueBorder';
import { AntiqueButton } from '../common/AntiqueButton';
import { chapters, creatorProfile } from '../../data/portfolioData';
import { Mail, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const meta = chapters[7];

  return (
    <section
      id="contact"
      className="relative min-h-[75vh] py-24 px-4 sm:px-6 lg:px-8 bg-[#EEE6D6]"
    >
      <div className="max-w-4xl w-full mx-auto relative z-10 text-center">
        {/* Chapter Header */}
        <ChapterNumber
          number={meta.chapterNumber}
          romanNumeral={meta.romanNumeral}
          title={meta.title}
          align="center"
          className="mb-6"
        />

        {/* Heading */}
        <EditorialHeading
          title="Epistle & Dialogue"
          subtitle="Direct channels for architectural commissions, bespoke web development, and creative collaboration."
          italicWord="Dialogue"
          latinTag="EPISTOLA ET DIALOGUS · CAPUT VII"
          level={2}
          align="center"
          className="mb-8"
        />

        <GoldDivider ornament="fleuron" className="max-w-md mx-auto my-6" />

        {/* Epistle Dispatch Plaque */}
        <AntiqueBorder variant="ornate" className="max-w-xl mx-auto my-8 text-left">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#2E241C]/10 pb-2">
              <span className="font-cinzel text-[11px] text-[#9B7A3E] tracking-widest uppercase">
                Direct Dispatch Channel
              </span>
              <span className="font-sans-modern text-[10px] text-[#777064] tracking-widest uppercase">
                {creatorProfile.location}
              </span>
            </div>

            <p className="font-serif-eb italic text-sm text-[#443D35] leading-relaxed">
              For inquiries regarding custom web applications, digital art direction, or engineering leadership, dispatch your correspondence directly to the studio address:
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <AntiqueButton
                href={`mailto:${creatorProfile.contactEmail}`}
                variant="primary"
                icon={<Mail size={14} />}
                className="w-full sm:w-auto"
              >
                {creatorProfile.contactEmail}
              </AntiqueButton>

              <AntiqueButton
                href="https://ausafportfolio.vercel.app/"
                variant="secondary"
                icon={<ArrowUpRight size={14} />}
                external
                className="w-full sm:w-auto"
              >
                Current Portfolio
              </AntiqueButton>
            </div>
          </div>
        </AntiqueBorder>
      </div>
    </section>
  );
};

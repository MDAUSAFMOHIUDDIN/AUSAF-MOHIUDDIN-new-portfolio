import React from 'react';
import { ChapterNumber } from '../common/ChapterNumber';
import { EditorialHeading } from '../common/EditorialHeading';
import { GoldDivider } from '../common/GoldDivider';
import { QuoteBlock } from '../common/QuoteBlock';
import { AntiqueBorder } from '../common/AntiqueBorder';
import { chapters } from '../../data/portfolioData';

export const PhilosophySection: React.FC = () => {
  const meta = chapters[5];

  return (
    <section
      id="philosophy"
      className="relative min-h-[70vh] py-24 px-4 sm:px-6 lg:px-8 border-b border-[#2E241C]/15 bg-[#EEE6D6]"
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
            {meta.latinSubtitle} — Treatise on Enduring Design
          </span>
        </div>

        {/* Heading */}
        <EditorialHeading
          title="On Enduring Craftsmanship"
          subtitle="Why the modern web requires tactile depth, restraint, and deliberate friction rather than sterile disposable uniformity."
          latinTag="SENTENTIA ET RATIO · CAPUT V"
          level={2}
          className="mb-8"
        />

        <QuoteBlock
          quote="True artistry is not the accumulation of superfluous ornament, but the deliberate mastery of proportion, purpose, and restraint."
          author="Treatise on Craft"
          source="Studio Canon"
          latinTranslation="Simplicitas est summa sophisticationis"
        />

        <AntiqueBorder variant="double" className="my-8">
          <p className="font-serif-eb text-base text-[#3A322A] leading-relaxed drop-cap">
            In an era saturated with ephemeral trends and cookie-cutter templates, software should evoke the timeless permanence of an archival manuscript. Every interaction, typeface, and pixel must serve the narrative and respect the intelligence of the visitor.
          </p>
        </AntiqueBorder>

        <GoldDivider ornament="fleuron" className="mt-14" />
      </div>
    </section>
  );
};

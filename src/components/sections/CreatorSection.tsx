import React from 'react';
import { CreatorPortrait } from '../creator/CreatorPortrait';
import { CreatorBiography } from '../creator/CreatorBiography';
import { CreatorStatement } from '../creator/CreatorStatement';
import { CreatorCapabilities } from '../creator/CreatorCapabilities';
import { CreatorTransition } from '../creator/CreatorTransition';
import { artAssets } from '../../data/artAssets';

export const CreatorSection: React.FC = () => {
  return (
    <section
      id="creator"
      className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#EEE6D6] border-b border-[#2E241C]/15 overflow-hidden"
      aria-label="Chapter 01 - The Creator"
    >
      {/* Background Subtle Watermark & Archival Framing */}
      <div className="absolute inset-4 sm:inset-8 border border-[#2E241C]/6 pointer-events-none" />
      <div className="absolute inset-5 sm:inset-9 border border-[#9B7A3E]/10 pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Main Asymmetric Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column (~45% on desktop): Museum Portrait & Historical Sketches */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-6">
            <CreatorPortrait className="w-full" />

            {/* Additional Manuscript Detail Fragment for Rich Visual Texture */}
            <div className="hidden lg:flex items-center gap-3 p-3 bg-[#F1E8D8]/50 border border-[#2E241C]/10 w-full max-w-md">
              <div className="w-16 h-12 shrink-0 overflow-hidden border border-[#2E241C]/15">
                <img
                  src={artAssets.manuscriptDetail.source}
                  alt=""
                  aria-hidden="true"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter sepia-[0.25]"
                  loading="lazy"
                />
              </div>
              <div className="space-y-0.5">
                <span className="font-technical text-[8px] text-[#9B7A3E] tracking-[0.25em] uppercase font-semibold block">
                  MANUSCRIPT FIG. 1.3
                </span>
                <p className="font-serif-eb italic text-[11px] text-[#554E44] leading-tight">
                  Archival treatise on structural order, typography, and optical proportion.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (~55% on desktop): Identity, Biography, Statement, Capabilities */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-start">
            {/* Biography & Factual Identity Categories */}
            <CreatorBiography />

            {/* Creator Principle Statement */}
            <CreatorStatement />

            {/* Compact Capabilities Preview */}
            <CreatorCapabilities />
          </div>
        </div>

        {/* Chapter Transition into 02 · SELECTED WORKS */}
        <CreatorTransition />
      </div>
    </section>
  );
};

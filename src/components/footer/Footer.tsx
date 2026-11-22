import React from 'react';
import { creatorProfile } from '../../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#F1E8D8]/50 border-t border-[#2E241C]/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-[#2E241C]">
      {/* Top Ornamental Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9B7A3E]/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#2E241C]/10">
          {/* Left Column: Monogram & Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 antique-border bg-[#F1E8D8] flex items-center justify-center">
                <span className="font-cinzel-dec text-lg font-bold text-[#2E241C]">
                  {creatorProfile.monogram}
                </span>
              </div>
              <div>
                <h3 className="font-cinzel text-sm font-semibold tracking-[0.25em] text-[#2E241C]">
                  MD AUSAF MOHIUDDIN
                </h3>
                <p className="font-technical text-[10px] tracking-[0.25em] text-[#777064] uppercase">
                  Digital Creator & Web Developer
                </p>
              </div>
            </div>

            <p className="font-serif-eb italic text-sm text-[#443D35] leading-relaxed max-w-sm">
              Conceived as a synthesis of Renaissance harmony, archival preservation, and modern computational engineering.
            </p>
          </div>

          {/* Center Column: Colophon Specifications */}
          <div className="md:col-span-4 space-y-2 font-technical text-xs text-[#554E44]">
            <span className="font-technical text-[10px] text-[#9B7A3E] tracking-[0.25em] uppercase block mb-2 font-semibold">
              Colophon & Geometry
            </span>
            <p>
              <span className="text-[#777064]">Display Type:</span> Cormorant Garamond & Cinzel
            </p>
            <p>
              <span className="text-[#777064]">Technical Spec:</span> Inter & EB Garamond
            </p>
            <p>
              <span className="text-[#777064]">Palette:</span> Aged Ivory (#EEE6D6) · Faded Gold (#9B7A3E)
            </p>
            <p>
              <span className="text-[#777064]">Theme:</span> Geometric Balance · Phase I Foundation
            </p>
          </div>

          {/* Right Column: Index Jump & Studio Coordinates */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div>
              <span className="font-technical text-[10px] text-[#9B7A3E] tracking-[0.25em] uppercase block mb-2 font-semibold">
                Studio Locale
              </span>
              <p className="font-serif-eb text-sm text-[#2E241C]">
                {creatorProfile.location}
              </p>
              <p className="font-technical text-[10px] text-[#777064] tracking-widest mt-1">
                17.3850° N, 78.4867° E
              </p>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="mt-6 md:mt-0 inline-flex items-center gap-2 antique-border bg-[#F1E8D8] px-3.5 py-2 font-technical text-[10px] text-[#2E241C] tracking-[0.25em] uppercase hover:border-[#9B7A3E] hover:bg-[#EEE6D6] transition-all cursor-pointer shadow-2xs"
              aria-label="Return to top of folio"
            >
              <span>Ad Summitatem</span>
              <ArrowUp size={12} className="text-[#9B7A3E]" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Archival Seal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-technical text-xs text-[#777064]">
          <p>© MMXXIV–MMXXVI MD Ausaf Mohiuddin. All rights reserved.</p>
          <div className="flex items-center gap-4 font-technical text-[9px] tracking-[0.3em] text-[#9B7A3E] uppercase">
            <span>Non Sibi Sed Omnibus</span>
            <span>❖</span>
            <span>Folio Index I</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

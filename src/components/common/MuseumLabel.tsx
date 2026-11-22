import React from 'react';

interface MuseumLabelProps {
  plateNumber?: string;
  title: string;
  artist?: string;
  year?: string;
  medium?: string;
  dimensions?: string;
  accessionNo?: string;
  description?: string;
  className?: string;
}

export const MuseumLabel: React.FC<MuseumLabelProps> = ({
  plateNumber,
  title,
  artist = 'MD Ausaf Mohiuddin',
  year = '2024–2026',
  medium = 'Digital Architecture · Full-Stack Web',
  dimensions = '1920 × 1080 px · Responsive Canvas',
  accessionNo = 'CAT. MMXXIV–IX',
  description,
  className = '',
}) => {
  return (
    <div
      className={`relative bg-[#F1E8D8] antique-border p-4 sm:p-5 shadow-[0_1px_10px_rgba(46,36,28,0.03)] text-[#2E241C] max-w-sm ${className}`}
    >
      {/* Brass Pin Top Center */}
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#9B7A3E] border border-[#F1E8D8] shadow-2xs" />

      {/* Header Plate */}
      <div className="flex items-center justify-between border-b border-[#2E241C]/10 pb-2 mb-3">
        <span className="font-technical text-[9px] tracking-[0.3em] text-[#9B7A3E] uppercase font-semibold">
          {plateNumber || 'EXHIBIT'}
        </span>
        <span className="font-technical text-[9px] text-[#777064] tracking-[0.2em] uppercase">
          {accessionNo}
        </span>
      </div>

      {/* Primary Info */}
      <h4 className="font-serif-cormorant text-xl font-medium text-[#2E241C] leading-tight">
        {title}
      </h4>
      <p className="font-serif-eb text-sm italic text-[#64352F] mt-0.5">
        {artist} ({year})
      </p>

      {/* Technical Spec */}
      <div className="mt-3 pt-2 border-t border-[#2E241C]/8 space-y-1 font-technical text-[10px] text-[#777064]">
        <div className="flex justify-between">
          <span className="text-[#9B7A3E]">Medium:</span>
          <span className="text-right text-[#2E241C]">{medium}</span>
        </div>
        {dimensions && (
          <div className="flex justify-between">
            <span className="text-[#9B7A3E]">Format:</span>
            <span className="text-right text-[#2E241C]">{dimensions}</span>
          </div>
        )}
      </div>

      {description && (
        <p className="mt-3 text-xs font-serif-eb text-[#2E241C]/80 leading-relaxed border-t border-[#2E241C]/8 pt-2">
          {description}
        </p>
      )}
    </div>
  );
};

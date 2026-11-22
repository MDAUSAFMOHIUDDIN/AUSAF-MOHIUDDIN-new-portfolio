import React from 'react';

interface ClassicalImageFrameProps {
  src: string;
  alt: string;
  caption?: string;
  plateNumber?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'golden';
  className?: string;
  filterVintage?: boolean;
}

export const ClassicalImageFrame: React.FC<ClassicalImageFrameProps> = ({
  src,
  alt,
  caption,
  plateNumber,
  aspectRatio = 'landscape',
  className = '',
  filterVintage = true,
}) => {
  const aspectClass = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[16/10]',
    golden: 'aspect-[1.618/1]',
  }[aspectRatio];

  return (
    <figure className={`flex flex-col group ${className}`}>
      {/* Outer Mat Frame */}
      <div className="relative p-2.5 sm:p-3.5 bg-[#F1E8D8] border border-[#2E241C]/20 shadow-[0_4px_20px_rgba(46,36,28,0.06)]">
        {/* Inner Gold Inset Line */}
        <div className="relative border border-[#9B7A3E]/40 overflow-hidden bg-[#E3D4BA]">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02] ${aspectClass} ${
              filterVintage ? 'sepia-[0.18] contrast-[1.03] brightness-[0.98]' : ''
            }`}
          />
          {/* Subtle canvas oil texture highlight */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#2E241C]/25 via-transparent to-transparent opacity-60" />
        </div>
      </div>

      {/* Archival Legend */}
      {(caption || plateNumber) && (
        <figcaption className="mt-2.5 flex items-center justify-between px-1 font-sans-modern text-[11px] text-[#777064]">
          {plateNumber && (
            <span className="font-cinzel text-[#9B7A3E] font-medium tracking-widest uppercase">
              {plateNumber}
            </span>
          )}
          {caption && (
            <span className="font-serif-eb italic text-[#554E44] text-xs">
              {caption}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
};

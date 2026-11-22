import React from 'react';

interface ChapterNumberProps {
  number: string; // e.g. "01"
  romanNumeral?: string; // e.g. "CAPUT I"
  title?: string; // e.g. "THE CREATOR"
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export const ChapterNumber: React.FC<ChapterNumberProps> = ({
  number,
  romanNumeral,
  title,
  className = '',
  align = 'left',
}) => {
  const alignClass = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }[align];

  return (
    <div className={`flex flex-col ${alignClass} font-cinzel text-xs tracking-widest ${className}`}>
      <div className="flex items-center gap-3 text-[#9B7A3E]">
        <span className="font-semibold text-sm tabular-nums tracking-widest">{number}</span>
        <span className="w-6 h-px bg-[#9B7A3E]/40" />
        {romanNumeral && (
          <span className="text-[11px] font-medium tracking-[0.2em] text-[#777064] uppercase">
            {romanNumeral}
          </span>
        )}
      </div>
      {title && (
        <span className="mt-1 text-[13px] font-medium tracking-[0.25em] text-[#2E241C] uppercase font-cinzel">
          {title}
        </span>
      )}
    </div>
  );
};

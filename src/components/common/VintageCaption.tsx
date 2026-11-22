import React from 'react';

interface VintageCaptionProps {
  children: React.ReactNode;
  indexNumber?: string;
  source?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export const VintageCaption: React.FC<VintageCaptionProps> = ({
  children,
  indexNumber,
  source,
  className = '',
  align = 'left',
}) => {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  return (
    <div className={`font-sans-modern text-xs tracking-wider text-[#777064] leading-relaxed ${alignClass} ${className}`}>
      {indexNumber && (
        <span className="font-cinzel text-[#9B7A3E] font-medium mr-2 tracking-widest">
          Fig. {indexNumber} —
        </span>
      )}
      <span className="text-[#554E44]">{children}</span>
      {source && (
        <span className="block mt-0.5 text-[10px] text-[#9B7A3E]/80 tracking-widest uppercase font-cinzel">
          [{source}]
        </span>
      )}
    </div>
  );
};

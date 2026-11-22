import React from 'react';

interface GoldDividerProps {
  ornament?: 'rhombus' | 'fleuron' | 'asterisk' | 'cross' | 'none';
  className?: string;
}

export const GoldDivider: React.FC<GoldDividerProps> = ({
  ornament = 'rhombus',
  className = '',
}) => {
  return (
    <div className={`flex items-center justify-center w-full my-6 gap-3 ${className}`} aria-hidden="true">
      <span className="flex-1 h-px bg-gradient-to-r from-transparent via-[#9B7A3E]/40 to-[#9B7A3E]/70" />
      
      {ornament === 'rhombus' && (
        <span className="text-[#9B7A3E] text-[10px] transform rotate-45 select-none opacity-80">
          ◆
        </span>
      )}
      {ornament === 'fleuron' && (
        <span className="text-[#9B7A3E] text-xs font-serif select-none opacity-85">
          ❧
        </span>
      )}
      {ornament === 'asterisk' && (
        <span className="text-[#9B7A3E] text-xs select-none opacity-80 font-cinzel">
          ✦
        </span>
      )}
      {ornament === 'cross' && (
        <span className="text-[#9B7A3E] text-[10px] select-none opacity-70">
          ❖
        </span>
      )}

      <span className="flex-1 h-px bg-gradient-to-l from-transparent via-[#9B7A3E]/40 to-[#9B7A3E]/70" />
    </div>
  );
};

import React from 'react';

interface VerticalLabelProps {
  text: string;
  position?: 'left' | 'right';
  className?: string;
}

export const VerticalLabel: React.FC<VerticalLabelProps> = ({
  text,
  position = 'left',
  className = '',
}) => {
  return (
    <div
      className={`hidden lg:flex items-center gap-3 font-cinzel text-[10px] tracking-[0.3em] uppercase text-[#777064]/80 select-none ${
        position === 'left' ? 'rotate-180 [writing-mode:vertical-rl]' : '[writing-mode:vertical-rl]'
      } ${className}`}
      aria-hidden="true"
    >
      <span className="w-12 h-px bg-[#9B7A3E]/30" />
      <span>{text}</span>
      <span className="w-12 h-px bg-[#9B7A3E]/30" />
    </div>
  );
};

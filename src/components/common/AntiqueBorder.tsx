import React from 'react';

interface AntiqueBorderProps {
  children: React.ReactNode;
  variant?: 'double' | 'corners' | 'archival' | 'ornate';
  className?: string;
  innerClassName?: string;
}

export const AntiqueBorder: React.FC<AntiqueBorderProps> = ({
  children,
  variant = 'corners',
  className = '',
  innerClassName = '',
}) => {
  if (variant === 'double') {
    return (
      <div className={`p-1 antique-border bg-transparent ${className}`}>
        <div className={`antique-border p-4 sm:p-6 bg-[#F1E8D8]/60 ${innerClassName}`}>
          {children}
        </div>
      </div>
    );
  }

  if (variant === 'ornate') {
    return (
      <div className={`relative antique-border p-5 sm:p-8 bg-[#EEE6D6] ${className}`}>
        {/* Corner Ornaments */}
        <span className="absolute top-1 left-1.5 text-[9px] text-[#9B7A3E] font-technical select-none">┌</span>
        <span className="absolute top-1 right-1.5 text-[9px] text-[#9B7A3E] font-technical select-none">┐</span>
        <span className="absolute bottom-1 left-1.5 text-[9px] text-[#9B7A3E] font-technical select-none">└</span>
        <span className="absolute bottom-1 right-1.5 text-[9px] text-[#9B7A3E] font-technical select-none">┘</span>

        {/* Center Top Diamond */}
        <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 bg-[#EEE6D6] px-2 text-[#9B7A3E] text-[10px]">
          ❖
        </span>

        <div className={innerClassName}>{children}</div>
      </div>
    );
  }

  // Default 'corners'
  return (
    <div className={`relative antique-border p-4 sm:p-6 bg-[#F1E8D8]/30 ${className}`}>
      {/* Corner brackets */}
      <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-[#9B7A3E]" />
      <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 border-[#9B7A3E]" />
      <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 border-[#9B7A3E]" />
      <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-[#9B7A3E]" />
      <div className={innerClassName}>{children}</div>
    </div>
  );
};

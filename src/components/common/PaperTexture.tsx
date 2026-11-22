import React from 'react';

/**
 * PaperTexture: Reusable warm aged paper background layer with subtle fibers.
 */
export const PaperTexture: React.FC<{ className?: string; children?: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  return (
    <div className={`relative bg-[#EEE6D6] text-[#1D1915] paper-texture ${className}`}>
      {children}
    </div>
  );
};

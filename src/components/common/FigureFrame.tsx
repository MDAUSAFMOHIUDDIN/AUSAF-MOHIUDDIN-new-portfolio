import React from 'react';

interface FigureFrameProps {
  src: string;
  alt: string;
  poseDescription?: string;
  overlayText?: string;
  alignment?: 'left' | 'right' | 'center';
  className?: string;
}

export const FigureFrame: React.FC<FigureFrameProps> = ({
  src,
  alt,
  poseDescription,
  overlayText,
  alignment = 'center',
  className = '',
}) => {
  return (
    <div className={`relative flex flex-col items-${alignment === 'center' ? 'center' : alignment === 'right' ? 'end' : 'start'} ${className}`}>
      {/* Archival Figure Container */}
      <div className="relative overflow-hidden max-w-md w-full border border-[#2E241C]/15 bg-[#F1E8D8] p-2">
        <div className="relative overflow-hidden bg-[#E3D4BA]">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover filter contrast-[1.05] sepia-[0.22] brightness-[0.96] mix-blend-multiply transition-all duration-700"
          />
          {/* Subtle Warm Amber Vignette */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#EEE6D6]/10 to-[#2E241C]/20" />
        </div>

        {overlayText && (
          <div className="absolute bottom-4 left-4 right-4 bg-[#EEE6D6]/90 backdrop-blur-xs p-3 border border-[#9B7A3E]/30 text-center">
            <p className="font-cinzel text-xs text-[#2E241C] tracking-[0.2em] uppercase">
              {overlayText}
            </p>
          </div>
        )}
      </div>

      {poseDescription && (
        <span className="mt-2 font-sans-modern text-[10px] uppercase tracking-[0.2em] text-[#777064]">
          {poseDescription}
        </span>
      )}
    </div>
  );
};

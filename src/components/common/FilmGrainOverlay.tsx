import React from 'react';

/**
 * FilmGrainOverlay: An ultra-subtle cinematic grain and dust overlay.
 * Uses pointer-events-none and low opacity to avoid disrupting interaction.
 */
export const FilmGrainOverlay: React.FC<{ opacity?: number }> = ({ opacity = 0.045 }) => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden mix-blend-multiply"
      style={{ opacity }}
    >
      {/* SVG Turbulence Noise Canvas */}
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="cinematic-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#cinematic-grain)" />
      </svg>
      
      {/* Very subtle ambient vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#2E241C]/8" />
    </div>
  );
};

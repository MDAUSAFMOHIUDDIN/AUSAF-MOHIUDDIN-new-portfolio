import React from 'react';

interface HeroAtmosphereProps {
  className?: string;
}

export const HeroAtmosphere: React.FC<HeroAtmosphereProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden z-20 ${className}`}>
      {/* Directional Sunlight Ingress - Simulating afternoon sunlight through high arched loggia */}
      <div className="absolute -top-32 -left-20 w-[900px] h-[900px] bg-[radial-gradient(ellipse_at_top_left,rgba(255,248,230,0.45)_0%,rgba(238,230,214,0.25)_40%,transparent_75%)] mix-blend-screen opacity-80" />

      {/* Atmospheric Warm Amber Glow over Central Subject */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[600px] bg-[radial-gradient(circle,rgba(241,218,172,0.18)_0%,rgba(155,122,62,0.06)_50%,transparent_80%)] mix-blend-soft-light" />

      {/* Perimeter Vignette for Historical Painting Focus */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(46,36,28,0.12)_85%,rgba(46,36,28,0.22)_100%)]" />

      {/* Outer Archival Framing Guides */}
      <div className="absolute inset-3 sm:inset-6 lg:inset-8 border border-[#2E241C]/8" />
      <div className="absolute inset-4 sm:inset-7 lg:inset-9 border border-[#9B7A3E]/15" />

      {/* Corner Renaissance Accents */}
      <span className="absolute top-5 sm:top-8 lg:top-10 left-5 sm:left-8 lg:left-10 font-technical text-[9px] text-[#9B7A3E]/60 select-none">
        ✦
      </span>
      <span className="absolute top-5 sm:top-8 lg:top-10 right-5 sm:right-8 lg:right-10 font-technical text-[9px] text-[#9B7A3E]/60 select-none">
        ✦
      </span>
      <span className="absolute bottom-5 sm:bottom-8 lg:bottom-10 left-5 sm:left-8 lg:left-10 font-technical text-[9px] text-[#9B7A3E]/60 select-none">
        ✦
      </span>
      <span className="absolute bottom-5 sm:bottom-8 lg:bottom-10 right-5 sm:right-8 lg:right-10 font-technical text-[9px] text-[#9B7A3E]/60 select-none">
        ✦
      </span>

      {/* Subtle Dust / Patina specks */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-color-burn"
        style={{
          backgroundImage: `radial-gradient(#2E241C 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { HeroAtmosphere } from './HeroAtmosphere';
import { HeroBackground } from './HeroBackground';
import { HeroFigure } from './HeroFigure';
import { HeroTypography } from './HeroTypography';
import { HeroMetadata } from './HeroMetadata';
import { HeroScrollTransition } from './HeroScrollTransition';

interface HeroSectionProps {
  id?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ id = 'prologue' }) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized coordinates (-1 to 1) from window center
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const normalizedX = (e.clientX - centerX) / centerX;
      const normalizedY = (e.clientY - centerY) / centerY;

      // Subtle range constraint (max ~10px)
      setMouseOffset({
        x: normalizedX * 8,
        y: normalizedY * 8,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollToNext = () => {
    const creatorElem = document.getElementById('creator');
    if (creatorElem) {
      creatorElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      id={id}
      className="relative w-full min-h-screen h-[100vh] min-h-[700px] flex items-center justify-center overflow-hidden border-b border-[#2E241C]/10 bg-[#EEE6D6]"
      aria-label="Renaissance Hero Archive & Prologue"
    >
      {/* 1. Deep Atmospheric Background & Architectural Vaults */}
      <HeroBackground parallaxOffset={mouseOffset} />

      {/* 2. Monumental Display Typography (Layered with figure) */}
      <HeroTypography parallaxOffset={mouseOffset} />

      {/* 3. Classical Pointing Figure (Conception & Ambition) */}
      <HeroFigure parallaxOffset={mouseOffset} />

      {/* 4. Film Atmosphere & Sunlight Highlights */}
      <HeroAtmosphere />

      {/* 5. Editorial Metadata & Interactive Exploration Trigger */}
      <HeroMetadata onEnterArchive={handleScrollToNext} />

      {/* 6. Cinematic Scroll Indicator into Chapter 01 */}
      <HeroScrollTransition onScrollClick={handleScrollToNext} />
    </section>
  );
};

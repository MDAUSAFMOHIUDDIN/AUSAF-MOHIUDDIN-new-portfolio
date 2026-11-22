import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CinematicPrologueProps {
  onComplete: () => void;
  autoPlay?: boolean;
}

export const CinematicPrologue: React.FC<CinematicPrologueProps> = ({
  onComplete,
  autoPlay = true,
}) => {
  const [phase, setPhase] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;

    // Timeline of the cinematic prologue sequence:
    // 0ms: Initial parchment stillness with faint grain
    // 600ms: Phase 1 - Name & Origin fade in with subtle tracking
    // 2400ms: Phase 2 - Gold line expands
    // 3400ms: Phase 3 - "THE DIGITAL RENAISSANCE" film title emerges with exposure & blur resolve
    // 6800ms: Phase 4 - Dissolve transition into the Renaissance hero painting
    const t1 = setTimeout(() => setPhase(1), 600);
    const t2 = setTimeout(() => setPhase(2), 2200);
    const t3 = setTimeout(() => setPhase(3), 3200);
    const t4 = setTimeout(() => {
      setPhase(4);
      setTimeout(() => {
        setIsDismissed(true);
        onComplete();
      }, 1200);
    }, 6600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [autoPlay, onComplete]);

  const handleSkip = () => {
    setIsDismissed(true);
    onComplete();
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="cinematic-prologue-overlay"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 4 ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#EEE6D6] overflow-hidden select-none cursor-default"
        role="dialog"
        aria-label="Cinematic Prologue Title Screen"
      >
        {/* Background Radial Vignette & Parchment Patina */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(241,232,216,0.9)_0%,rgba(238,230,214,0.95)_50%,rgba(46,36,28,0.14)_100%)] pointer-events-none" />

        {/* Subtle Film Grain Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Framing Geometry */}
        <div className="absolute inset-8 sm:inset-12 border border-[#2E241C]/8 pointer-events-none" />
        <div className="absolute inset-10 sm:inset-14 border border-[#9B7A3E]/15 pointer-events-none" />

        {/* Corner Ornaments */}
        <span className="absolute top-9 sm:top-13 left-9 sm:left-13 font-technical text-[9px] text-[#9B7A3E]/60 select-none">
          ┌
        </span>
        <span className="absolute top-9 sm:top-13 right-9 sm:right-13 font-technical text-[9px] text-[#9B7A3E]/60 select-none">
          ┐
        </span>
        <span className="absolute bottom-9 sm:bottom-13 left-9 sm:left-13 font-technical text-[9px] text-[#9B7A3E]/60 select-none">
          └
        </span>
        <span className="absolute bottom-9 sm:bottom-13 right-9 sm:right-13 font-technical text-[9px] text-[#9B7A3E]/60 select-none">
          ┘
        </span>

        {/* Main Prologue Typography Container */}
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center flex flex-col items-center">
          {/* Act/Vol Marker */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : -8 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 flex items-center gap-3 text-[9px] font-technical tracking-[0.35em] text-[#9B7A3E] uppercase"
          >
            <span>PROLOGUS</span>
            <span className="w-1 h-1 rounded-full bg-[#9B7A3E]" />
            <span>MMXXVI</span>
          </motion.div>

          {/* Author Name */}
          <motion.h2
            initial={{ opacity: 0, filter: 'blur(8px)', letterSpacing: '0.15em' }}
            animate={{
              opacity: phase >= 1 ? 1 : 0,
              filter: phase >= 1 ? 'blur(0px)' : 'blur(8px)',
              letterSpacing: phase >= 1 ? '0.28em' : '0.15em',
            }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-cinzel text-base sm:text-lg md:text-xl text-[#2E241C] font-semibold uppercase"
          >
            MD AUSAF MOHIUDDIN
          </motion.h2>

          {/* Identity & Origin Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 6 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 space-y-1"
          >
            <p className="font-technical text-[10px] sm:text-[11px] tracking-[0.3em] text-[#777064] uppercase">
              A DIGITAL PORTFOLIO
            </p>
            <p className="font-technical text-[9px] sm:text-[10px] tracking-[0.25em] text-[#777064]/80 uppercase">
              HYDERABAD · 2026
            </p>
          </motion.div>

          {/* Delicate Antique Gold Horizontal Line */}
          <div className="relative my-8 sm:my-10 w-48 sm:w-64 h-[1px] flex items-center justify-center">
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: phase >= 2 ? 1 : 0,
                opacity: phase >= 2 ? 1 : 0,
              }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#9B7A3E] to-transparent origin-center"
            />
            {phase >= 2 && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute w-2 h-2 rotate-45 border border-[#9B7A3E] bg-[#EEE6D6]"
              />
            )}
          </div>

          {/* Grand Cinematic Film Title */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(12px)', scale: 0.96 }}
            animate={{
              opacity: phase >= 3 ? 1 : 0,
              filter: phase >= 3 ? 'blur(0px)' : 'blur(12px)',
              scale: phase >= 3 ? 1 : 0.96,
            }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            <span className="font-serif-eb italic text-sm sm:text-base text-[#64352F] block tracking-wide">
              An Archival Unveiling
            </span>
            <h1 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#2E241C] tracking-[0.08em] uppercase leading-tight">
              The Digital Renaissance
            </h1>
          </motion.div>

          {/* Poetic Aphorism */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 3 ? 0.75 : 0 }}
            transition={{ duration: 1.4, delay: 0.8 }}
            className="mt-6 font-serif-eb italic text-xs sm:text-sm text-[#777064] max-w-md"
          >
            &ldquo;Ideas, when guided by optical harmony and architectural discipline, become enduring form.&rdquo;
          </motion.p>
        </div>

        {/* Skip / Enter Directly Control */}
        <motion.button
          type="button"
          onClick={handleSkip}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
          className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 font-technical text-[9px] sm:text-[10px] tracking-[0.25em] text-[#777064] hover:text-[#9B7A3E] uppercase flex items-center gap-2 cursor-pointer transition-colors p-2 z-20"
          aria-label="Skip prologue and enter archive directly"
        >
          <span>ENTER DIRECTLY</span>
          <span className="text-[#9B7A3E]">→</span>
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FilmGrainOverlay } from './components/common/FilmGrainOverlay';
import { CinematicPrologue } from './components/prologue/CinematicPrologue';
import { GlobalNavigation } from './components/navigation/GlobalNavigation';
import { PrologueSection } from './components/sections/PrologueSection';
import { CreatorSection } from './components/sections/CreatorSection';
import { WorksSection } from './components/sections/WorksSection';
import { ToolsSection } from './components/sections/ToolsSection';
import { PracticeSection } from './components/sections/PracticeSection';
import { PhilosophySection } from './components/sections/PhilosophySection';
import { ChronicleSection } from './components/sections/ChronicleSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/footer/Footer';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export default function App() {
  const [prologueComplete, setPrologueComplete] = useState(false);

  // Initialize smooth scroll engine
  useSmoothScroll();

  return (
    <div className="relative min-h-screen bg-[#EEE6D6] text-[#2E241C] font-technical selection:bg-[#9B7A3E]/20 selection:text-[#2E241C] antialiased">
      {/* Scene 01: Initial Cinematic Prologue Title Sequence */}
      {!prologueComplete && (
        <CinematicPrologue onComplete={() => setPrologueComplete(true)} />
      )}

      {/* Global Cinematic Subtle Grain & Atmospheric Vignette */}
      <FilmGrainOverlay opacity={0.04} />

      {/* Global Navigation */}
      <GlobalNavigation />

      {/* Main Chapter Flow */}
      <main className="relative z-10">
        {/* Phase 2: Master Renaissance Hero Experience */}
        <PrologueSection />

        {/* Phase 1 Preserved Chapter Placeholders (To be developed in future phases) */}
        <CreatorSection />
        <WorksSection />
        <ToolsSection />
        <PracticeSection />
        <PhilosophySection />
        <ChronicleSection />
        <ContactSection />
      </main>

      {/* Archival Colophon Footer */}
      <Footer />
    </div>
  );
}

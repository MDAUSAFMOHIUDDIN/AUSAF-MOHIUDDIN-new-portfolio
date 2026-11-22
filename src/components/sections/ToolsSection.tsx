import React from 'react';
import { ToolsIntro } from '../tools/ToolsIntro';
import { ManuscriptCenterpiece } from '../tools/ManuscriptCenterpiece';
import { FoundationsPlate } from '../tools/FoundationsPlate';
import { CompositionPlate } from '../tools/CompositionPlate';
import { IntelligencePlate } from '../tools/IntelligencePlate';
import { InfrastructurePlate } from '../tools/InfrastructurePlate';
import { ExperienceCapabilities } from '../tools/ExperienceCapabilities';
import { PhysicalInstruments } from '../tools/PhysicalInstruments';
import { ToolsTransition } from '../tools/ToolsTransition';

export const ToolsSection: React.FC = () => {
  return (
    <section
      id="tools"
      className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 lg:px-10 border-b border-[#2E241C]/15 bg-[#EEE6D6] overflow-hidden"
    >
      {/* Subtle Archival Texture / Grid Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#2E241C_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Chapter 03 Opening Introduction */}
        <ToolsIntro />

        {/* Centerpiece: Leonardo-Style Engineering Manuscript with Animated Diagram Lines */}
        <ManuscriptCenterpiece />

        {/* Group I: Foundations (HTML, CSS, JavaScript, TypeScript, Responsive Design) */}
        <FoundationsPlate />

        {/* Group II: Composition (React, Tailwind CSS, UI/UX Design, Mobile Systems) */}
        <CompositionPlate />

        {/* Group III: Intelligence (AI-Assisted Development, Prompt Engineering, Lovable AI, AI Studio) */}
        <IntelligencePlate />

        {/* Group IV: Infrastructure & Delivery (Supabase, GitHub, Vercel, Cloud Workflows) */}
        <InfrastructurePlate />

        {/* Group V: The Experience / Finished Capabilities */}
        <ExperienceCapabilities />

        {/* Decorative Historical Drafting Instruments */}
        <PhysicalInstruments />

        {/* Transition into Chapter 04 (The Practice) */}
        <ToolsTransition />
      </div>
    </section>
  );
};

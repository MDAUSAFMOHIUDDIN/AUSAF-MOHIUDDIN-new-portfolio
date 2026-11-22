import React from 'react';
import { WorksIntro } from '../works/WorksIntro';
import { MonumentalProject } from '../works/MonumentalProject';
import { EditorialProject } from '../works/EditorialProject';
import { CanvasProject } from '../works/CanvasProject';
import { ArchiveArtworkProject } from '../works/ArchiveArtworkProject';
import { WorksQuote } from '../works/WorksQuote';
import { WorksArchive } from '../works/WorksArchive';
import { WorksTransition } from '../works/WorksTransition';
import { projectsData } from '../../data/projects';

export const WorksSection: React.FC = () => {
  // Separate featured works (4 major gallery pieces) and archive inventory
  const featuredProjects = projectsData.filter((p) => p.featured);
  const archiveProjects = projectsData.filter((p) => !p.featured);

  // Extract individual featured projects by ID or index
  const zfDecor = featuredProjects.find((p) => p.id === 'zf-decor') || featuredProjects[0];
  const siddiqAcademy = featuredProjects.find((p) => p.id === 'siddiq-academy') || featuredProjects[1];
  const hiaiImagine = featuredProjects.find((p) => p.id === 'hiai-imagine') || featuredProjects[2];
  const noirAi = featuredProjects.find((p) => p.id === 'noir-ai') || featuredProjects[3];

  return (
    <section
      id="works"
      className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#EEE6D6] border-b border-[#2E241C]/15 overflow-hidden"
      aria-label="Chapter 02 - Selected Works"
    >
      {/* Background Archival Rules Framing */}
      <div className="absolute inset-4 sm:inset-8 border border-[#2E241C]/6 pointer-events-none" />
      <div className="absolute inset-5 sm:inset-9 border border-[#9B7A3E]/10 pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Chapter Introduction */}
        <WorksIntro />

        {/* WORK I — ZF Decor (Monumental Exhibition Piece) */}
        {zfDecor && <MonumentalProject project={zfDecor} />}

        {/* WORK II — Siddiq Academy (Editorial Archival Spread) */}
        {siddiqAcademy && <EditorialProject project={siddiqAcademy} />}

        {/* WORK III — HiAI Imagine (Antique Canvas Plate) */}
        {hiaiImagine && <CanvasProject project={hiaiImagine} />}

        {/* WORK IV — Noir AI (Dark Chiaroscuro Archival Frame) */}
        {noirAi && <ArchiveArtworkProject project={noirAi} />}

        {/* Exhibition Sententia Quote */}
        <WorksQuote
          quote="THE WORK IS THE RECORD · IDEAS BECOME OBJECTS."
          subtext="Software engineered with structural permanence, optical rhythm, and practical purpose."
        />

        {/* The Digital Archive (Historical Catalogue Register for Secondary Works) */}
        <WorksArchive archiveProjects={archiveProjects} />

        {/* Cinematic Chapter Transition into 03 · Tools of Creation */}
        <WorksTransition />
      </div>
    </section>
  );
};

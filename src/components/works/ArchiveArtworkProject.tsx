import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Project } from '../../types';
import { ProjectArtworkFrame } from './ProjectArtworkFrame';
import { ProjectActions } from './ProjectActions';
import { artAssets } from '../../data/artAssets';

interface ArchiveArtworkProjectProps {
  project: Project;
}

export const ArchiveArtworkProject: React.FC<ArchiveArtworkProjectProps> = ({ project }) => {
  return (
    <div className="relative mb-24 sm:mb-32 lg:mb-40 pt-8 border-t border-[#2E241C]/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Dark Chiaroscuro Archival Artwork Frame */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 order-2 lg:order-1 relative"
        >
          {/* Main Dark Archive Frame */}
          <ProjectArtworkFrame
            project={project}
            variant="archive"
            aspectRatio="aspect-[16/10]"
            className="w-full relative z-10"
          />

          {/* Supporting Chiaroscuro Sculpture Detail Etching */}
          <div className="hidden lg:flex items-center gap-3 mt-4 p-2.5 bg-[#2E241C] text-[#F1E8D8] border border-[#9B7A3E]/30 max-w-sm">
            <div className="w-12 h-12 shrink-0 overflow-hidden border border-[#9B7A3E]/30 bg-[#1A1410]">
              <img
                src={artAssets.statueDetail.source}
                alt=""
                aria-hidden="true"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter contrast-[1.1] brightness-[0.9]"
                loading="lazy"
              />
            </div>
            <div className="space-y-0.5 font-technical">
              <span className="text-[8px] text-[#9B7A3E] tracking-[0.25em] uppercase font-semibold block">
                CHIAROSCURO STUDY · FIG. 2.4
              </span>
              <p className="font-serif-eb italic text-[11px] text-[#C9BCA5] leading-tight">
                Psychological archetype diagnostics & high-contrast analytical interfaces.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Metadata & Exposition */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 order-1 lg:order-2 space-y-6"
        >
          {/* Work Numeral & Category */}
          <div className="space-y-2 border-b border-[#2E241C]/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="font-cinzel text-sm text-[#9B7A3E] font-bold tracking-[0.25em]">
                {project.workNumeral || 'WORK IV'}
              </span>
              <span className="w-4 h-px bg-[#9B7A3E]/40" />
              <span className="font-technical text-[9px] text-[#777064] tracking-[0.25em] uppercase">
                {project.archivalPlate || 'PLATE 02.04'}
              </span>
            </div>

            <h3 className="font-serif-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-[#2E241C] tracking-tight leading-none uppercase">
              {project.title}
            </h3>

            <p className="font-technical text-[10px] sm:text-xs tracking-[0.2em] text-[#777064] uppercase font-medium">
              {project.category}
            </p>
          </div>

          {/* Description */}
          <p className="font-serif-eb text-base text-[#2E241C]/85 leading-relaxed">
            {project.description}
          </p>

          {/* Disciplines */}
          <div className="space-y-3 pt-2">
            <span className="font-technical text-[8px] tracking-[0.3em] uppercase text-[#9B7A3E] font-semibold block">
              DISCIPLINES & EXECUTION
            </span>
            <div className="flex flex-wrap gap-2">
              {project.services.map((service, idx) => (
                <span
                  key={idx}
                  className="font-technical text-[10px] tracking-wider text-[#2E241C] px-2.5 py-1 bg-[#F1E8D8] border border-[#2E241C]/10 uppercase"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Build Stack */}
          {project.buildStack && (
            <div className="pt-2 font-technical text-[9px] text-[#777064] tracking-wider uppercase">
              <span className="text-[#9B7A3E] font-semibold">BUILD:</span> {project.buildStack}
            </div>
          )}

          {/* Museum Accession Plaque */}
          <div className="p-3 bg-[#F1E8D8]/70 border border-[#2E241C]/10 space-y-1 font-technical text-[8px] tracking-widest text-[#777064] uppercase">
            <div className="flex justify-between">
              <span>RECORD: {project.exhibitionPlaque?.accessionNo || 'NOIR-2024'}</span>
              <span className="text-[#9B7A3E]">{project.exhibitionPlaque?.year || '2024'}</span>
            </div>
            <div className="text-[#2E241C] font-semibold">
              SYSTEM: {project.medium || 'BEHAVIORAL INTELLIGENCE'}
            </div>
          </div>

          {/* Action Links adhering to verified URL rules */}
          <ProjectActions project={project} />
        </motion.div>
      </div>
    </div>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Project } from '../../types';
import { ProjectArtworkFrame } from './ProjectArtworkFrame';
import { ProjectActions } from './ProjectActions';

interface CanvasProjectProps {
  project: Project;
}

export const CanvasProject: React.FC<CanvasProjectProps> = ({ project }) => {
  return (
    <div className="relative mb-24 sm:mb-32 lg:mb-40 pt-8 border-t border-[#2E241C]/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Metadata & Exposition */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 space-y-6"
        >
          {/* Work Numeral & Category */}
          <div className="space-y-2 border-b border-[#2E241C]/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="font-cinzel text-sm text-[#9B7A3E] font-bold tracking-[0.25em]">
                {project.workNumeral || 'WORK III'}
              </span>
              <span className="w-4 h-px bg-[#9B7A3E]/40" />
              <span className="font-technical text-[9px] text-[#777064] tracking-[0.25em] uppercase">
                {project.archivalPlate || 'PLATE 02.03'}
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
              <span>RECORD: {project.exhibitionPlaque?.accessionNo || 'HIAI-2025'}</span>
              <span className="text-[#9B7A3E]">{project.exhibitionPlaque?.year || '2025'}</span>
            </div>
            <div className="text-[#2E241C] font-semibold">
              MEDIUM: {project.medium || 'GENERATIVE AI SYNTHESIS'}
            </div>
          </div>

          {/* Action Links adhering to verified URL rules */}
          <ProjectActions project={project} />
        </motion.div>

        {/* Right Column: Canvas Artwork Frame */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 relative"
        >
          <ProjectArtworkFrame
            project={project}
            variant="canvas"
            aspectRatio="aspect-[16/10]"
            className="w-full relative z-10"
          />
        </motion.div>
      </div>
    </div>
  );
};

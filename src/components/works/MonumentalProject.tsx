import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Project } from '../../types';
import { ProjectArtworkFrame } from './ProjectArtworkFrame';
import { ProjectActions } from './ProjectActions';

interface MonumentalProjectProps {
  project: Project;
}

export const MonumentalProject: React.FC<MonumentalProjectProps> = ({ project }) => {
  return (
    <div className="relative mb-24 sm:mb-32 lg:mb-40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Exhibition Metadata & Plaque */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 space-y-6 flex flex-col justify-between"
        >
          {/* Work Numeral & Category */}
          <div className="space-y-2 border-b border-[#2E241C]/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="font-cinzel text-sm text-[#9B7A3E] font-bold tracking-[0.25em]">
                {project.workNumeral || 'WORK I'}
              </span>
              <span className="w-4 h-px bg-[#9B7A3E]/40" />
              <span className="font-technical text-[9px] text-[#777064] tracking-[0.25em] uppercase">
                {project.archivalPlate || 'PLATE 02.01'}
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

          {/* Services & Craft Breakdown */}
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
              <span>RECORD: {project.exhibitionPlaque?.accessionNo || 'ZF-2026-LIVE'}</span>
              <span className="text-[#9B7A3E]">{project.exhibitionPlaque?.year || '2026'}</span>
            </div>
            <div className="text-[#2E241C] font-semibold">
              ORIGIN: {project.exhibitionPlaque?.origin || 'HYDERABAD / CLIENT COMMISSION'}
            </div>
          </div>

          {/* Action Links adhering to verified URL rules */}
          <ProjectActions project={project} />
        </motion.div>

        {/* Right Column: Massive Exhibition Artwork Frame with Overlapping Secondary Detail */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 relative"
        >
          {/* Main Monumental Exhibition Frame */}
          <ProjectArtworkFrame
            project={project}
            variant="monumental"
            aspectRatio="aspect-[16/10]"
            className="w-full z-10 relative"
          />

          {/* Secondary Tactile Detail Preview (Mobile / Catalog Slice) overlapping subtly */}
          {project.images?.detail && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="hidden sm:block absolute -bottom-6 -right-4 w-44 lg:w-52 p-2 bg-[#F1E8D8] border border-[#9B7A3E]/40 shadow-[0_8px_24px_rgba(46,36,28,0.15)] z-20"
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-[#2E241C]/15 bg-[#E7DBCA]">
                <img
                  src={project.images.detail}
                  alt={`${project.title} detail catalog showcase`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter contrast-[0.98]"
                  loading="lazy"
                />
              </div>
              <div className="mt-1.5 px-0.5 flex justify-between font-technical text-[7px] tracking-widest text-[#777064] uppercase">
                <span className="text-[#9B7A3E] font-semibold">FIG. 2.1 DETAIL</span>
                <span>CATALOGUE CROP</span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

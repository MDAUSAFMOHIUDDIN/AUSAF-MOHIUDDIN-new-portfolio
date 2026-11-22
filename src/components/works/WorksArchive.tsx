import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Eye, ArrowUpRight } from 'lucide-react';
import { Project } from '../../types';

interface WorksArchiveProps {
  archiveProjects: Project[];
}

export const WorksArchive: React.FC<WorksArchiveProps> = ({ archiveProjects }) => {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  return (
    <div className="pt-16 sm:pt-20 border-t border-[#2E241C]/15 mt-16 sm:mt-24">
      {/* Archive Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.2 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-8 border-b border-[#2E241C]/10 gap-2"
      >
        <div>
          <div className="flex items-center gap-2 font-technical text-[9px] tracking-[0.3em] uppercase text-[#9B7A3E] mb-1">
            <span>INDEX OPERUM</span>
            <span className="w-1 h-1 rounded-full bg-[#9B7A3E]" />
            <span>CATALOGUE REGISTER</span>
          </div>

          <h3 className="font-serif-cormorant text-2xl sm:text-3xl lg:text-4xl text-[#2E241C] font-light uppercase tracking-wide">
            The Digital Archive
          </h3>
        </div>

        <span className="font-technical text-[9px] tracking-[0.2em] uppercase text-[#777064]">
          [INVENTORY ENTRIES MMXXIV – MMXXVI]
        </span>
      </motion.div>

      {/* Main Archival Register Table (Classical Ledger View) */}
      <div className="relative">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 pb-2.5 px-3 border-b border-[#2E241C]/15 font-technical text-[8px] sm:text-[9px] tracking-[0.25em] text-[#9B7A3E] uppercase font-semibold">
          <span className="col-span-2">PLATE / ENTRY</span>
          <span className="col-span-4">PROJECT TITLE</span>
          <span className="col-span-3">CLASSIFICATION</span>
          <span className="col-span-1">YEAR</span>
          <span className="col-span-2 text-right">ACCESS</span>
        </div>

        {/* Project Rows */}
        <div className="divide-y divide-[#2E241C]/10 font-technical text-xs">
          {archiveProjects.map((project, idx) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              className="py-4 px-2 sm:px-3 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-start md:items-center hover:bg-[#F1E8D8] transition-colors group"
            >
              {/* Plate Number */}
              <div className="col-span-2 flex items-center gap-2">
                <span className="font-cinzel text-xs text-[#9B7A3E] font-bold">
                  {project.workNumeral || `ARCHIVE 02.${idx + 5}`}
                </span>
                <span className="md:hidden text-[9px] text-[#777064]">· {project.year}</span>
              </div>

              {/* Title & Short Description */}
              <div className="col-span-4 space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-serif-cormorant text-lg sm:text-xl font-normal text-[#2E241C] group-hover:text-[#64352F] transition-colors">
                    {project.title}
                  </span>
                  {project.status && (
                    <span className="font-technical text-[8px] tracking-widest uppercase px-1.5 py-0.5 border border-[#2E241C]/10 bg-[#EEE6D6] text-[#777064]">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="font-serif-eb italic text-xs text-[#777064] line-clamp-1">
                  {project.description}
                </p>
              </div>

              {/* Category */}
              <div className="col-span-3 text-[10px] tracking-wider text-[#554E44] uppercase">
                {project.category}
              </div>

              {/* Year */}
              <div className="hidden md:block col-span-1 text-[10px] tracking-wider text-[#777064]">
                {project.year}
              </div>

              {/* Action Link */}
              <div className="col-span-2 flex flex-wrap items-center justify-start md:justify-end gap-2 pt-2 md:pt-0">
                {(() => {
                  const live = (project.liveUrl || project.url || '').trim();
                  const preview = (project.previewUrl || project.reviewUrl || '').trim();
                  const hasLive = live.startsWith('http://') || live.startsWith('https://');
                  const hasPreview = preview.startsWith('http://') || preview.startsWith('https://');
                  const isIdentical = hasLive && hasPreview && live === preview;

                  if (!hasLive && !hasPreview) {
                    return (
                      <span className="text-[8px] font-technical tracking-widest uppercase text-[#777064]/60 px-2 py-1 border border-[#2E241C]/10 bg-[#EEE6D6]/50">
                        UNLISTED
                      </span>
                    );
                  }

                  return (
                    <>
                      {hasLive && (
                        <a
                          href={live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[9px] tracking-[0.2em] uppercase font-semibold text-[#2E241C] hover:text-[#9B7A3E] transition-colors py-1 px-2 border border-[#2E241C]/15 bg-[#EEE6D6] group-hover:border-[#9B7A3E]"
                          aria-label={`Visit project ${project.title}`}
                        >
                          <span>VISIT PROJECT</span>
                          <ArrowUpRight size={11} className="text-[#9B7A3E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                      {hasPreview && !isIdentical && (
                        <a
                          href={preview}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[9px] tracking-[0.2em] uppercase font-semibold text-[#2E241C] hover:text-[#9B7A3E] transition-colors py-1 px-2 border border-[#2E241C]/15 bg-[#F1E8D8] group-hover:border-[#9B7A3E]"
                          aria-label={`View preview for ${project.title}`}
                        >
                          <span>VIEW PREVIEW</span>
                          <Eye size={10} className="text-[#9B7A3E]" />
                        </a>
                      )}
                      {!hasLive && hasPreview && (
                        <a
                          href={preview}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[9px] tracking-[0.2em] uppercase font-semibold text-[#2E241C] hover:text-[#9B7A3E] transition-colors py-1 px-2 border border-[#2E241C]/15 bg-[#EEE6D6] group-hover:border-[#9B7A3E]"
                          aria-label={`View preview for ${project.title}`}
                        >
                          <span>VIEW PREVIEW</span>
                          <Eye size={10} className="text-[#9B7A3E]" />
                        </a>
                      )}
                    </>
                  );
                })()}
              </div>
            </div>
          ))}
        </div>

        {/* Floating / Contextual Archival Preview Modal on Desktop Hover */}
        <AnimatePresence>
          {hoveredProject && hoveredProject.image && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-64 p-3 bg-[#F1E8D8] border border-[#9B7A3E]/40 shadow-[0_12px_36px_rgba(46,36,28,0.18)] pointer-events-none z-30"
            >
              <div className="relative aspect-[16/10] overflow-hidden border border-[#2E241C]/15 bg-[#E7DBCA] mb-2">
                <img
                  src={hoveredProject.image}
                  alt=""
                  aria-hidden="true"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter contrast-[0.98]"
                />
              </div>
              <div className="font-technical text-[8px] tracking-wider uppercase text-[#777064] space-y-0.5">
                <span className="text-[#9B7A3E] font-semibold block">{hoveredProject.title}</span>
                <span className="block truncate">{hoveredProject.medium || hoveredProject.category}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

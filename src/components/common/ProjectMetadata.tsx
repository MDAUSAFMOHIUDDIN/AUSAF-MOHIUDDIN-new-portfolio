import React from 'react';
import { Project } from '../../types';

interface ProjectMetadataProps {
  project: Project;
  className?: string;
}

export const ProjectMetadata: React.FC<ProjectMetadataProps> = ({ project, className = '' }) => {
  return (
    <div className={`antique-border bg-[#F1E8D8]/70 p-5 space-y-3 ${className}`}>
      {/* Plate & Title */}
      <div className="flex items-center justify-between border-b border-[#2E241C]/10 pb-2">
        <span className="font-technical text-[9px] font-semibold text-[#9B7A3E] tracking-[0.25em] uppercase">
          {project.archivalPlate || 'FOLIO RECORD'}
        </span>
        <span className="font-technical text-[9px] text-[#777064] tracking-[0.2em] uppercase">
          ANNO {project.year}
        </span>
      </div>

      <div>
        <h4 className="font-serif-cormorant text-2xl font-medium text-[#2E241C]">
          {project.title}
        </h4>
        <p className="font-serif-eb text-sm italic text-[#64352F]">{project.category}</p>
      </div>

      <p className="font-technical text-xs text-[#2E241C]/80 leading-relaxed">
        {project.description}
      </p>

      {/* Services List */}
      <div className="pt-2 border-t border-[#2E241C]/10">
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.services.map((service, idx) => (
            <span
              key={idx}
              className="inline-block font-technical text-[9px] uppercase tracking-wider bg-[#EEE6D6] antique-border text-[#2E241C] px-2 py-0.5"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

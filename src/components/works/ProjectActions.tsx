import React from 'react';
import { ArrowRight, Eye, ArrowUpRight } from 'lucide-react';
import { Project } from '../../types';

interface ProjectActionsProps {
  project: Project;
  className?: string;
  size?: 'default' | 'compact';
}

export const ProjectActions: React.FC<ProjectActionsProps> = ({
  project,
  className = '',
  size = 'default',
}) => {
  const liveUrl = (project.liveUrl || project.url || '').trim();
  const previewUrl = (project.previewUrl || project.reviewUrl || '').trim();

  const isValidUrl = (str: string | null | undefined): boolean => {
    if (!str) return false;
    return str.startsWith('http://') || str.startsWith('https://');
  };

  const hasLive = isValidUrl(liveUrl);
  const hasPreview = isValidUrl(previewUrl);
  const isIdentical = hasLive && hasPreview && liveUrl === previewUrl;

  // Case 1: No valid URLs at all - NO BROKEN LINKS
  if (!hasLive && !hasPreview) {
    return (
      <div className={`flex items-center gap-2 pt-2 ${className}`}>
        <span className="font-technical text-[9px] tracking-[0.2em] uppercase text-[#777064] px-2.5 py-1 border border-[#2E241C]/10 bg-[#F1E8D8]/50">
          [ARCHIVAL RECORD · DEPLOYMENT UNLISTED]
        </span>
      </div>
    );
  }

  // Case 2: Only preview exists
  if (!hasLive && hasPreview) {
    return (
      <div className={`pt-2 flex flex-wrap gap-3 ${className}`}>
        <a
          href={previewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-between gap-3 px-5 py-2.5 bg-[#2E241C] text-[#F1E8D8] border border-[#9B7A3E] hover:bg-[#64352F] hover:border-[#F1E8D8] transition-all font-technical text-[9px] tracking-[0.25em] uppercase shadow-sm group"
          aria-label={`View preview for ${project.title}`}
        >
          <span>VIEW PREVIEW</span>
          <Eye size={12} className="text-[#9B7A3E] group-hover:scale-110 transition-transform" />
        </a>
      </div>
    );
  }

  // Case 3: Live exists (and preview either doesn't exist, is identical, or is separate)
  return (
    <div className={`pt-2 flex flex-wrap items-center gap-3 ${className}`}>
      {/* Primary Live URL */}
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-between gap-3 px-6 py-3 bg-[#2E241C] text-[#F1E8D8] border border-[#9B7A3E] hover:bg-[#64352F] hover:border-[#F1E8D8] transition-all font-technical text-[10px] tracking-[0.25em] uppercase shadow-md group"
        aria-label={`Visit live website for ${project.title}`}
      >
        <span>VISIT PROJECT</span>
        <ArrowRight size={13} className="text-[#9B7A3E] group-hover:translate-x-1 transition-transform" />
      </a>

      {/* Secondary Preview URL if distinct from liveUrl */}
      {hasPreview && !isIdentical && (
        <a
          href={previewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-3 bg-[#F1E8D8] text-[#2E241C] border border-[#2E241C]/20 hover:border-[#9B7A3E] hover:text-[#64352F] transition-all font-technical text-[10px] tracking-[0.2em] uppercase group"
          aria-label={`View preview for ${project.title}`}
        >
          <span>VIEW PREVIEW</span>
          <Eye size={12} className="text-[#9B7A3E]" />
        </a>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, AlertCircle } from 'lucide-react';
import { Project } from '../../types';

interface ProjectArtworkFrameProps {
  project: Project;
  variant?: 'antique' | 'canvas' | 'archive' | 'minimal' | 'monumental';
  className?: string;
  showDetails?: boolean;
  aspectRatio?: string;
}

export const ProjectArtworkFrame: React.FC<ProjectArtworkFrameProps> = ({
  project,
  variant = 'antique',
  className = '',
  showDetails = false,
  aspectRatio = 'aspect-[16/10]',
}) => {
  const [imageError, setImageError] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<'cover' | 'detail' | 'mobile'>('cover');

  const getActiveSrc = () => {
    if (activeImageIndex === 'detail' && project.images?.detail) {
      return project.images.detail;
    }
    if (activeImageIndex === 'mobile' && project.images?.mobile) {
      return project.images.mobile;
    }
    return project.images?.cover || project.image;
  };

  const getFallbackSrc = () => {
    if (activeImageIndex === 'detail' && project.images?.detailFallback) {
      return project.images.detailFallback;
    }
    if (activeImageIndex === 'mobile' && project.images?.mobileFallback) {
      return project.images.mobileFallback;
    }
    return project.images?.coverFallback || project.image;
  };

  // Frame Styles based on variant
  const getFrameStyling = () => {
    switch (variant) {
      case 'monumental':
        return {
          wrapper: 'bg-[#F1E8D8] p-3 sm:p-5 border border-[#2E241C]/20 shadow-[0_12px_40px_rgba(46,36,28,0.12)]',
          innerBorder: 'border-[#9B7A3E]/30',
          accent: 'border-[#2E241C]/15',
        };
      case 'canvas':
        return {
          wrapper: 'bg-[#EFE7D7] p-3 sm:p-4 border border-[#9B7A3E]/30 shadow-[0_8px_32px_rgba(46,36,28,0.09)]',
          innerBorder: 'border-[#9B7A3E]/40',
          accent: 'border-[#2E241C]/10',
        };
      case 'archive':
        return {
          wrapper: 'bg-[#2E241C] p-3 sm:p-5 border border-[#9B7A3E]/40 shadow-[0_16px_48px_rgba(0,0,0,0.22)]',
          innerBorder: 'border-[#9B7A3E]/40',
          accent: 'border-[#9B7A3E]/20',
        };
      case 'minimal':
        return {
          wrapper: 'bg-[#F1E8D8]/70 p-2 sm:p-3 border border-[#2E241C]/15 shadow-xs',
          innerBorder: 'border-transparent',
          accent: 'border-[#2E241C]/10',
        };
      case 'antique':
      default:
        return {
          wrapper: 'bg-[#F1E8D8] p-3 sm:p-4 border border-[#2E241C]/15 shadow-[0_8px_30px_rgba(46,36,28,0.08)]',
          innerBorder: 'border-[#9B7A3E]/25',
          accent: 'border-[#2E241C]/10',
        };
    }
  };

  const style = getFrameStyling();

  return (
    <div className={`relative group ${className}`}>
      {/* Outer Museum Frame Mount */}
      <div className={`relative transition-all duration-700 ease-out ${style.wrapper}`}>
        {/* Double Concentric Antique Rule Insets */}
        <div className={`absolute inset-1.5 sm:inset-2 border pointer-events-none ${style.innerBorder}`} />
        <div className={`absolute inset-2.5 sm:inset-3 border pointer-events-none ${style.accent}`} />

        {/* Top Catalogue Reference Bar */}
        <div
          className={`flex items-center justify-between pb-2 mb-2 border-b px-1 font-technical text-[8px] sm:text-[9px] tracking-[0.22em] uppercase select-none ${
            variant === 'archive'
              ? 'border-[#9B7A3E]/20 text-[#A39A8E]'
              : 'border-[#2E241C]/10 text-[#777064]'
          }`}
        >
          <span className="font-semibold text-[#9B7A3E]">
            {project.workNumeral || project.archivalPlate || 'EXHIBIT'}
          </span>
          <span className="truncate max-w-[180px] sm:max-w-none">
            {project.category} · {project.year}
          </span>
        </div>

        {/* Artwork Canvas / Screenshot Container */}
        <div
          className={`relative ${aspectRatio} w-full overflow-hidden bg-[#E7DBCA] border ${
            variant === 'archive' ? 'border-[#9B7A3E]/30' : 'border-[#2E241C]/15'
          }`}
        >
          {/* Subtle directional lighting layer (non-distorting) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#2E241C]/10 via-transparent to-[#F1E8D8]/10 pointer-events-none z-10" />

          {/* Screenshot Image with high clarity & minimal hover motion */}
          {!imageError ? (
            <motion.img
              src={getActiveSrc()}
              alt={`${project.title} - ${project.category} website screenshot`}
              referrerPolicy="no-referrer"
              loading="lazy"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            />
          ) : (
            /* Archival Fallback Plaque when screenshot cannot be fetched */
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#E5D8C3] text-[#2E241C]">
              <AlertCircle size={24} className="text-[#9B7A3E] mb-2 stroke-1" />
              <span className="font-cinzel text-xs font-semibold tracking-widest uppercase">
                {project.title}
              </span>
              <span className="font-technical text-[9px] text-[#777064] tracking-[0.2em] uppercase mt-1">
                DIGITAL WORK · ARCHIVE VISUAL PENDING
              </span>
              <p className="font-serif-eb italic text-xs text-[#554E44] max-w-xs mt-2">
                &ldquo;{project.description}&rdquo;
              </p>
            </div>
          )}

          {/* Archival Inset Vignette Ring */}
          <div className="absolute inset-0 ring-1 ring-inset ring-[#2E241C]/10 pointer-events-none z-10" />

          {/* Interactive Multi-View Selector Tabs if additional details exist */}
          {project.images?.detail && (
            <div className="absolute bottom-2 left-2 z-20 flex items-center gap-1 bg-[#2E241C]/85 backdrop-blur-xs p-1 border border-[#9B7A3E]/40 text-[8px] font-technical tracking-wider text-[#F1E8D8]">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveImageIndex('cover');
                }}
                className={`px-2 py-0.5 cursor-pointer uppercase transition-colors ${
                  activeImageIndex === 'cover'
                    ? 'bg-[#9B7A3E] text-[#2E241C] font-semibold'
                    : 'hover:text-[#9B7A3E]'
                }`}
                aria-label="View cover screenshot"
              >
                Overview
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveImageIndex('detail');
                }}
                className={`px-2 py-0.5 cursor-pointer uppercase transition-colors ${
                  activeImageIndex === 'detail'
                    ? 'bg-[#9B7A3E] text-[#2E241C] font-semibold'
                    : 'hover:text-[#9B7A3E]'
                }`}
                aria-label="View detail crop screenshot"
              >
                Detail
              </button>
              {project.images?.mobile && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveImageIndex('mobile');
                  }}
                  className={`px-2 py-0.5 cursor-pointer uppercase transition-colors ${
                    activeImageIndex === 'mobile'
                      ? 'bg-[#9B7A3E] text-[#2E241C] font-semibold'
                      : 'hover:text-[#9B7A3E]'
                  }`}
                  aria-label="View mobile screenshot"
                >
                  Mobile
                </button>
              )}
            </div>
          )}

          {/* Live Hover Overlay Hint */}
          <div className="absolute inset-0 bg-[#2E241C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center z-15">
            <span className="px-3 py-1.5 bg-[#2E241C]/90 text-[#F1E8D8] border border-[#9B7A3E] font-technical text-[9px] tracking-[0.25em] uppercase">
              EXAMINE ARTIFACT
            </span>
          </div>
        </div>

        {/* Museum Plaque Underneath */}
        {showDetails && (
          <div
            className={`mt-3 pt-2.5 border-t flex items-center justify-between font-technical text-[9px] tracking-wider uppercase ${
              variant === 'archive'
                ? 'border-[#9B7A3E]/20 text-[#C9BCA5]'
                : 'border-[#2E241C]/10 text-[#554E44]'
            }`}
          >
            <div>
              <span className="font-cinzel font-semibold text-xs tracking-[0.15em] block text-[#2E241C]">
                {project.title}
              </span>
              <span className="text-[8px] text-[#777064] tracking-[0.2em] block">
                {project.exhibitionPlaque?.discipline || project.medium || 'Digital Experience'}
              </span>
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#9B7A3E] hover:text-[#64352F] font-semibold transition-colors py-1 px-2 border border-[#9B7A3E]/30 bg-[#F1E8D8]/50"
              aria-label={`Visit live project ${project.title}`}
            >
              <span>VISIT LIVE</span>
              <ExternalLink size={10} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

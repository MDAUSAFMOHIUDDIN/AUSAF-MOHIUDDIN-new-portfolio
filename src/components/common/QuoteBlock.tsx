import React from 'react';

interface QuoteBlockProps {
  quote: string;
  author?: string;
  source?: string;
  className?: string;
  latinTranslation?: string;
}

export const QuoteBlock: React.FC<QuoteBlockProps> = ({
  quote,
  author,
  source,
  className = '',
  latinTranslation,
}) => {
  return (
    <blockquote className={`relative border-l-2 border-[#9B7A3E] pl-6 sm:pl-8 py-2 my-8 ${className}`}>
      {/* Decorative Initial Quote Mark */}
      <span
        aria-hidden="true"
        className="absolute -top-4 -left-3 font-serif-cormorant text-5xl text-[#9B7A3E]/30 select-none leading-none"
      >
        “
      </span>

      <p className="font-serif-cormorant text-xl sm:text-2xl text-[#1D1915] italic leading-relaxed">
        {quote}
      </p>

      {latinTranslation && (
        <p className="font-serif-eb text-xs text-[#777064] tracking-wide mt-2">
          ({latinTranslation})
        </p>
      )}

      {(author || source) && (
        <footer className="mt-3 flex items-center gap-2 font-sans-modern text-xs tracking-wider text-[#64352F]">
          <span className="w-4 h-px bg-[#64352F]/40" />
          {author && <cite className="not-italic font-medium">{author}</cite>}
          {source && <span className="text-[#777064] italic">— {source}</span>}
        </footer>
      )}
    </blockquote>
  );
};

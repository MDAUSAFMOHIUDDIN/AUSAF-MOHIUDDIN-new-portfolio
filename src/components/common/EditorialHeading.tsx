import React from 'react';

interface EditorialHeadingProps {
  title: string;
  subtitle?: string;
  italicWord?: string;
  latinTag?: string;
  level?: 1 | 2 | 3 | 4;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export const EditorialHeading: React.FC<EditorialHeadingProps> = ({
  title,
  subtitle,
  italicWord,
  latinTag,
  level = 2,
  className = '',
  align = 'left',
}) => {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align];

  const renderHeading = () => {
    let content: React.ReactNode = title;
    if (italicWord && title.includes(italicWord)) {
      const parts = title.split(italicWord);
      content = (
        <>
          {parts[0]}
          <span className="italic font-serif-eb font-normal text-[#64352F]">{italicWord}</span>
          {parts[1]}
        </>
      );
    }

    const baseStyle = "font-serif-cormorant font-normal text-[#1D1915] tracking-tight leading-[1.08]";

    switch (level) {
      case 1:
        return <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${baseStyle}`}>{content}</h1>;
      case 2:
        return <h2 className={`text-3xl sm:text-4xl md:text-5xl ${baseStyle}`}>{content}</h2>;
      case 3:
        return <h3 className={`text-2xl sm:text-3xl md:text-4xl ${baseStyle}`}>{content}</h3>;
      case 4:
        return <h4 className={`text-xl sm:text-2xl ${baseStyle}`}>{content}</h4>;
    }
  };

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {latinTag && (
        <span className="font-cinzel text-[11px] uppercase tracking-[0.25em] text-[#9B7A3E] mb-2">
          {latinTag}
        </span>
      )}
      {renderHeading()}
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg font-serif-eb text-[#777064] italic max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

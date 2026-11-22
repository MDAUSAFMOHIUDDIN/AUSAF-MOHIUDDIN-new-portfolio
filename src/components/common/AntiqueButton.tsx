import React from 'react';

interface AntiqueButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'subtle';
  className?: string;
  icon?: React.ReactNode;
  external?: boolean;
}

export const AntiqueButton: React.FC<AntiqueButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  icon,
  external = false,
}) => {
  const baseClasses =
    'relative inline-flex items-center justify-center gap-2.5 font-cinzel text-xs tracking-[0.2em] uppercase transition-all duration-300 select-none py-3 px-6 cursor-pointer text-center';

  const variants = {
    primary:
      'bg-[#2E241C] text-[#EEE6D6] hover:bg-[#1D1915] border border-[#9B7A3E]/40 hover:border-[#9B7A3E] shadow-[0_2px_10px_rgba(46,36,28,0.12)]',
    secondary:
      'bg-[#F1E8D8] text-[#2E241C] hover:bg-[#E3D4BA] border border-[#2E241C]/20 hover:border-[#9B7A3E] shadow-sm',
    subtle:
      'bg-transparent text-[#2E241C] hover:text-[#9B7A3E] border-b border-[#9B7A3E]/50 hover:border-[#9B7A3E] px-2 py-1',
  };

  const content = (
    <>
      <span>{children}</span>
      {icon && <span className="text-[#9B7A3E] transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={`group ${baseClasses} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group ${baseClasses} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
};

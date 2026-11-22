import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { creatorProfile } from '../../data/portfolioData';

interface NavItem {
  label: string;
  href: string;
  chapterNo: string;
}

const navItems: NavItem[] = [
  { label: 'Creator', href: '#creator', chapterNo: '01' },
  { label: 'Works', href: '#works', chapterNo: '02' },
  { label: 'Tools', href: '#tools', chapterNo: '03' },
  { label: 'Practice', href: '#practice', chapterNo: '04' },
  { label: 'Philosophy', href: '#philosophy', chapterNo: '05' },
  { label: 'Chronicle', href: '#chronicle', chapterNo: '06' },
  { label: 'Contact', href: '#contact', chapterNo: '07' },
];

export const GlobalNavigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('prologue');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['prologue', 'creator', 'works', 'tools', 'practice', 'philosophy', 'chronicle', 'contact'];
      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-[#EEE6D6]/95 backdrop-blur-xs py-3 border-[#2E241C]/10 shadow-[0_1px_10px_rgba(46,36,28,0.03)]'
            : 'bg-transparent py-4 sm:py-5 border-[#2E241C]/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Monogram & Title */}
          <a
            href="#prologue"
            onClick={(e) => scrollToSection(e, '#prologue')}
            className="flex items-center gap-3.5 group focus:outline-none focus:ring-1 focus:ring-[#9B7A3E]"
            aria-label="Ausaf Mohiuddin Portfolio - Return to Prologue"
          >
            {/* Monogram Badge */}
            <div className="w-8 h-8 rounded-none border border-[#9B7A3E]/40 bg-[#F1E8D8] flex items-center justify-center transition-colors duration-300 group-hover:border-[#9B7A3E] group-hover:bg-[#E3D4BA]">
              <span className="font-cinzel-dec text-sm font-bold text-[#2E241C] tracking-tighter">
                {creatorProfile.monogram}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-cinzel text-xs font-semibold tracking-[0.25em] text-[#2E241C] group-hover:text-[#9B7A3E] transition-colors">
                MD AUSAF MOHIUDDIN
              </span>
              <span className="font-technical text-[9px] tracking-[0.3em] text-[#777064] uppercase hidden sm:block">
                FOLIO MMXXVI · DIGITAL CREATOR
              </span>
            </div>
          </a>

          {/* Desktop Chapter Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`group relative py-1 flex items-center gap-1.5 font-technical text-[10px] tracking-[0.25em] uppercase transition-colors duration-200 ${
                    isActive ? 'text-[#9B7A3E] font-semibold' : 'text-[#2E241C]/70 hover:text-[#2E241C]'
                  }`}
                >
                  <span className="text-[9px] text-[#9B7A3E] opacity-70 group-hover:opacity-100 font-technical tabular-nums">
                    {item.chapterNo}
                  </span>
                  <span>{item.label}</span>
                  
                  {/* Subtle Underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-[#9B7A3E] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-[#2E241C]/15 bg-[#F1E8D8] text-[#2E241C] hover:border-[#9B7A3E] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Artistic Renaissance Index Style) */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="fixed inset-0 z-30 bg-[#EEE6D6]/98 backdrop-blur-md pt-24 pb-8 px-6 flex flex-col justify-between md:hidden border-b border-[#2E241C]/20"
        >
          {/* Watermark Latin Background */}
          <div className="absolute top-28 right-4 font-cinzel-dec text-7xl text-[#9B7A3E]/5 select-none pointer-events-none">
            AM
          </div>

          <div className="space-y-6">
            <div className="border-b border-[#2E241C]/15 pb-3">
              <span className="font-cinzel text-xs text-[#9B7A3E] tracking-[0.25em] uppercase">
                Tabula Index · Chapters
              </span>
            </div>

            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="flex items-baseline justify-between py-2 border-b border-[#2E241C]/8 group text-[#1D1915]"
                >
                  <span className="font-serif-cormorant text-2xl group-hover:text-[#64352F] group-hover:translate-x-1 transition-transform">
                    {item.label}
                  </span>
                  <span className="font-cinzel text-xs text-[#9B7A3E] tracking-widest">
                    CAP. {item.chapterNo}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="border-t border-[#2E241C]/15 pt-4 text-center">
            <p className="font-serif-eb italic text-xs text-[#777064]">
              MD Ausaf Mohiuddin — Folio MMXXVI
            </p>
          </div>
        </div>
      )}
    </>
  );
};

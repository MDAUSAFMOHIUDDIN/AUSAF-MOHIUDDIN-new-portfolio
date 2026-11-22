export interface Project {
  id: string;
  title: string;
  name?: string;
  slug: string;
  category: string;
  description: string;
  longDescription?: string;
  image: string;
  fallbackColor?: string;
  url?: string | null;
  liveUrl?: string | null;
  projectUrl?: string | null;
  previewUrl?: string | null;
  reviewUrl?: string | null;
  demoUrl?: string | null;
  githubUrl?: string | null;
  technologies?: string[];
  year: string;
  services: string[];
  featured: boolean;
  status: 'Completed' | 'In Progress' | 'Archived' | 'Live' | 'In Development' | 'Unavailable';
  archivalPlate?: string; // Roman numeral plate reference e.g., "Plate IV"
  workNumeral?: string; // e.g., "WORK I", "WORK II"
  medium?: string; // e.g. "Full-Stack Web Application", "AI-Powered Interface"
  buildStack?: string; // e.g. "React / TypeScript / Vercel Edge"
  layoutVariant?: 'monumental' | 'editorial' | 'canvas' | 'archive';
  images?: {
    cover: string;
    coverFallback?: string;
    detail?: string;
    detailFallback?: string;
    mobile?: string;
    mobileFallback?: string;
  };
  exhibitionPlaque?: {
    origin: string;
    discipline: string;
    year: string;
    accessionNo: string;
  };
}

export interface SectionMeta {
  id: string;
  chapterNumber: string;
  romanNumeral: string;
  title: string;
  latinSubtitle?: string;
  description: string;
}

export interface CreatorProfile {
  name: string;
  monogram: string;
  title: string;
  role: string;
  biographySummary: string;
  location: string;
  focusAreas: string[];
  contactEmail: string;
}

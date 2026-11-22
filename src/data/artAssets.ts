/**
 * Archival Art Assets Registry
 * High Renaissance paintings, architectural frescoes, engravings, and figure studies.
 */

export interface ArtAsset {
  id: string;
  title: string;
  artist?: string;
  period?: string;
  source: string;
  alt: string;
  description: string;
  aspectRatio?: string;
}

export const artAssets = {
  heroBackground: {
    id: 'hero-background',
    title: 'Grand Renaissance Arch & Fresco Hall',
    artist: 'High Renaissance Master Study',
    period: 'Circa 1510 / Classical Architectural Loggia',
    source: '/art/hero-background.jpg',
    alt: 'Grand classical Renaissance architectural hall with monumental arched stone vaults and soft golden afternoon sunlight',
    description: 'Monumental vaulted stone loggia with classical Roman arches, coffered ceiling, and soft natural chiaroscuro light.',
    aspectRatio: '16:9',
  },
  heroFigure: {
    id: 'hero-figure',
    title: 'The Pointing Philosopher · Vision & Conception',
    artist: 'Florentine Fresco Master Tradition',
    period: 'High Renaissance Classical Study',
    source: '/art/hero-figure.jpg',
    alt: 'Classical Renaissance philosopher in draped terracotta and ivory robes raising one hand and pointing an index finger upward toward higher ideas',
    description: 'An allegorical classical figure pointing upward in noble contemplation, symbolizing ideas, vision, and ambition.',
    aspectRatio: '3:4',
  },
  engravingStudy: {
    id: 'engraving-study',
    title: 'Codex Proportions & Harmonic Geometries',
    artist: 'Renaissance Manuscript Engraving',
    period: 'Circa 1500',
    source: '/art/engraving-01.jpg',
    alt: 'Delicate sepia ink classical architectural blueprints, golden ratio circles, and harmonic geometric studies on parchment',
    description: 'Intricate geometric calculations, golden proportions, and sepia architectural drafts etched on aged parchment.',
    aspectRatio: '1:1',
  },
  creatorPortrait: {
    id: 'creator-portrait',
    title: 'Portrait of MD Ausaf Mohiuddin',
    artist: 'Classical Studio Inscription',
    period: 'Anno MMXXVI',
    source: '/images/creator/ausaf-portrait.webp',
    fallbackSource: '/images/creator/ausaf-portrait.jpg',
    alt: 'Classical Renaissance portrait of MD Ausaf Mohiuddin set before Roman architectural arches and marble sculptures',
    description: 'Museum-grade portrait of MD Ausaf Mohiuddin framed with warm chiaroscuro lighting, Roman architectural loggia, and archival plate notation.',
    aspectRatio: '1:1',
  },
  manuscriptDetail: {
    id: 'manuscript-detail',
    title: 'Codex Marginalia & Architectural Manuscript',
    artist: 'Italian Renaissance Scribe & Architect',
    period: 'Circa 1505',
    source: '/art/creator/manuscript-detail.webp',
    fallbackSource: '/art/creator/manuscript-detail.jpg',
    alt: 'Renaissance codex manuscript page fragment with Italian calligraphy and architectural capital study',
    description: 'Calligraphic manuscript fragment reflecting architectural proportion, discipline, and historical craft.',
    aspectRatio: '4:3',
  },
  renaissanceHand: {
    id: 'renaissance-hand',
    title: 'Study of the Architect Hand with Compass',
    artist: 'Florentine Workshop Sketch',
    period: 'Circa 1495',
    source: '/art/creator/renaissance-hand.webp',
    fallbackSource: '/art/creator/renaissance-hand.jpg',
    alt: 'Delicate anatomical sepia sketch of a Renaissance artisan hand holding a drafting compass over parchment',
    description: 'Master anatomical drawing representing tactile execution, manual precision, and drafting rigor.',
    aspectRatio: '1:1',
  },
  galleryColumn: {
    id: 'gallery-column',
    title: 'Study of the Corinthian Order & Entablature',
    artist: 'Renaissance Architectural Manuscript',
    period: 'Circa 1515',
    source: '/art/works/gallery-column.webp',
    fallbackSource: '/art/works/gallery-column.jpg',
    alt: 'Sepia architectural study of classical column capital and architrave',
    description: 'Architectural study drawing of classical column capital and entablature on aged parchment.',
    aspectRatio: '3:4',
  },
  statueDetail: {
    id: 'statue-detail',
    title: 'Classical Figure Study in Chiaroscuro',
    artist: 'Roman & Renaissance Sculpture Archive',
    period: 'Circa 1500',
    source: '/art/works/statue-detail.webp',
    fallbackSource: '/art/works/statue-detail.jpg',
    alt: 'Classical museum bust sculpture in chiaroscuro lighting on warm ivory background',
    description: 'Archival drawing of classical museum sculpture displaying form, balance, and illumination.',
    aspectRatio: '1:1',
  },
  engineeringManuscript: {
    id: 'engineering-manuscript',
    title: 'Codex Mechanica & Digital Systems',
    artist: 'Leonardo-Style Engineering Codex',
    period: 'Circa 1508 / Technical Drawing',
    source: '/art/tools/engineering-manuscript.webp',
    fallbackSource: '/art/tools/engineering-manuscript.jpg',
    alt: 'Leonardo da Vinci engineering notebook manuscript page with sepia iron gall ink mechanical inventions, geometry measurements, and technical annotations',
    description: 'Master engineering manuscript page illustrating mechanics, geometric proportions, and systemic architecture on aged parchment.',
    aspectRatio: '4:3',
  },
  geometryStudy: {
    id: 'geometry-study',
    title: 'Harmonic Geometry & Proportional Systems',
    artist: 'Renaissance Mathematical Manuscript',
    period: 'Circa 1500',
    source: '/art/tools/geometry-study.webp',
    fallbackSource: '/art/tools/geometry-study.jpg',
    alt: 'Renaissance architectural geometry study with golden ratio circles and Euclidean proportions',
    description: 'Geometric diagram exploring modular scale, responsive proportion, and layout harmony.',
    aspectRatio: '1:1',
  },
  mechanicalSketch: {
    id: 'mechanical-sketch',
    title: 'Study of Mechanical Transmission & Logic',
    artist: 'Florentine Engineering Archive',
    period: 'Circa 1505',
    source: '/art/tools/mechanical-sketch.webp',
    fallbackSource: '/art/tools/mechanical-sketch.jpg',
    alt: 'Leonardo da Vinci technical sketch of interlocking wooden gears, pulleys, and mechanical levers',
    description: 'Technical study of interconnected mechanical systems, programmatic logic, and kinetic movement.',
    aspectRatio: '4:3',
  },
  compassEngraving: {
    id: 'compass-engraving',
    title: 'The Master Drafting Implements',
    artist: 'Renaissance Drafting Instrument Etching',
    period: 'Circa 1498',
    source: '/art/tools/compass-engraving.webp',
    fallbackSource: '/art/tools/compass-engraving.jpg',
    alt: 'Renaissance drafting compass, precision dividers, caliper, and vintage drafting ruler on aged parchment',
    description: 'Classical etching of geometric drafting instruments representing precision, calibration, and execution.',
    aspectRatio: '1:1',
  },
  handStudy: {
    id: 'hand-study',
    title: 'Study of the Architect Hand in Execution',
    artist: 'Leonardo Workshop Anatomical Study',
    period: 'Circa 1502',
    source: '/art/tools/hand-study.webp',
    fallbackSource: '/art/tools/hand-study.jpg',
    alt: 'Sepia chalk drawing of artisan hand holding a drafting compass and stylus over paper',
    description: 'Anatomical drawing of an artisan hand drafting geometric curves, symbolizing tactile craftsmanship and deliberate execution.',
    aspectRatio: '1:1',
  },
} as const;

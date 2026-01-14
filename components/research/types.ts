export type ResearchLink = { label: string; href: string };

export type ResearchItem = {
  title: string;
  subtitle?: string; // e.g., "Master’s Thesis" or "Poster / Paper"
  description: string;
  bullets?: string[];
  topics?: string[];
  tech?: string[];
  links?: ResearchLink[];
  featured?: boolean;
};

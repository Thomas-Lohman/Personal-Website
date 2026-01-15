export type LinkItem = { label: string; href: string };

export type Project = {
  title: string;
  description: string;
  bullets: string[];
  tech: string[];
  links?: LinkItem[];
  featured?: boolean;
  status?: string;
};

export type Experience = {
  role: string;
  org: string;
  dates: string;
  description?: string;
  bullets: string[];
  tech?: string[];
};

export type TeachingItem = {
  title: string;
  org: string;
  dates: string;
  description: string;
  bullets: string[];
  topics?: string[];
  tech?: string[];
  featured?: boolean;
};

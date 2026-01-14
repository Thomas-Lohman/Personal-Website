import SectionHeader from "@/components/work/SectionHeader";
import ProjectCard from "@/components/work/ProjectCard";
import ExperienceRow from "@/components/work/ExperienceRow";
import TeachingCard from "@/components/work/TeachingCard";

import type { Experience, Project, TeachingItem } from "@/components/work/types";

export default function WorkPage() {
  // ---- Selected Projects (filled) ----
  const projects: Project[] = [
    {
      title: "Multi-Agent AI System for Effective Language Learning",
      description:
        "A multi-agent language learning system with an LLM conversational agent, real-time translation, and lightweight image generation for immersive practice.",
      bullets: [
        "Designed a multi-agent workflow combining conversation, translation, and image generation to simulate context-rich language practice.",
        "Implemented constrained decoding via adaptive logit biasing to keep responses aligned with a target proficiency level.",
        "Built a structured prompting + generation loop to maintain coherence across turns while enforcing level constraints.",
      ],
      tech: [
        "Python",
        "LLMs",
        "Constrained Decoding",
        "Logit Biasing",
        "Multi-Agent",
        "Translation Pipeline",
        "Image Generation",
      ],
      links: [
        // { label: "GitHub", href: "https://github.com/Thomas-Lohman/REPO" },
      ],
    },
    {
      title: "March Madness Analytics Project",
      description:
        "An analytics project for exploring NCAA tournament matchups with data-driven features and interactive analysis views.",
      bullets: [
        "Built a pipeline to structure and analyze team/game data for matchup comparisons and tournament insights.",
        "Designed statistical features to summarize team strength, style differences, and historical performance trends.",
        "Created interactive views to explore predictions, what-if scenarios, and interpretable team comparisons.",
      ],
      tech: ["Python", "Pandas", "Statistics", "Data Visualization", "Analytics"],
      links: [
        // { label: "GitHub", href: "https://github.com/Thomas-Lohman/REPO" },
      ],
    },
    {
      title: "WorNDle — Multilingual Wordle Web Application",
      description:
        "A full-stack, multilingual Wordle-style web game with authentication, persistent user history, and API-driven purchases for extra plays.",
      bullets: [
        "Developed a multilingual Wordle-style game supporting five languages with a daily play limit (up to three games/day) and persistent user history.",
        "Implemented core gameplay logic in Python and JavaScript and built a personalized user page for viewing game history.",
        "Integrated RESTful APIs to support secure purchases of additional plays from a remote server and update access in real time.",
        "Used Django authentication to handle secure signup/login flows, verification, and reliable session management.",
      ],
      tech: ["Django", "Python", "JavaScript", "Bootstrap", "SQLite", "REST APIs", "Auth"],
      links: [
        // { label: "GitHub", href: "https://github.com/Thomas-Lohman/REPO" },
      ],
    },
  ];

  // ---- Internships & Jobs (placeholder) ----
  const experience: Experience[] = [
    {
      role: "Intern / Job Title",
      org: "Company or Organization",
      dates: "Month YYYY — Month YYYY",
      description: "One-line scope (optional).",
      bullets: [
        "Impact bullet #1 (Built/Improved/Automated...).",
        "Impact bullet #2 (include numbers if you have them).",
      ],
      tech: ["Python", "SQL", "Cloud (optional)"],
    },
  ];

  // ---- Teaching (placeholder; Intro to AI highlighted) ----
  const teaching: TeachingItem[] = [
    {
      title: "Intro to AI — ML Visualization & Instructional Notebooks",
      org: "University of Notre Dame",
      dates: "Teaching Assistant • 2 years",
      description:
        "Developed Jupyter/Colab notebooks to demonstrate core AI/ML concepts and visualize deep learning behavior for students.",
      bullets: [
        "Created code-first demos to build intuition (training curves, overfitting, optimization behavior).",
        "Implemented reference notebooks for key models and concepts used throughout the course.",
        "Focused on clear explanations, reproducible experiments, and high-quality visualizations.",
      ],
      topics: [
        "Search",
        "CSPs",
        "Linear Models",
        "CNNs",
        "Optimization",
        "RNNs",
        "Transformers",
      ],
      tech: ["Python", "Jupyter", "Google Colab", "PyTorch", "NumPy", "Matplotlib"],
      featured: true,
    },
  ];

  return (
    <section className="space-y-14">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold">Work</h1>
        <p className="opacity-80 max-w-3xl">
          A selection of projects, experience, and teaching work. For research-focused work, see the{" "}
          <a className="underline underline-offset-4" href="/research">
            Research
          </a>{" "}
          page.
        </p>
      </header>

      <section className="space-y-6">
        <SectionHeader
          title="Selected Projects"
          subtitle="A few projects I’m most proud of—focused on ML systems, evaluation, and usable tools."
        />
        <div
          className={
            "grid gap-6"
            // + " sm:grid-cols-2"   // ← old two-column layout
          }
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader
          title="Internships & Jobs"
          subtitle="Roles where I collaborated with others and shipped work under real constraints."
        />
        <div className="space-y-4">
          {experience.map((e) => (
            <ExperienceRow key={`${e.role}-${e.org}-${e.dates}`} exp={e} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader
          title="Teaching"
          subtitle="Teaching roles where I built technical materials and helped students learn core AI concepts."
        />
        <div className="grid gap-4">
          {teaching.map((t) => (
            <TeachingCard key={`${t.title}-${t.org}-${t.dates}`} item={t} />
          ))}
        </div>
      </section>

      <footer className="flex flex-wrap gap-3 pt-4">
        <a
          href="/resume"
          className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-foreground/10"
        >
          View Resume
        </a>
        <a
          href="/research"
          className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-foreground/10"
        >
          View Research
        </a>
      </footer>
    </section>
  );
}


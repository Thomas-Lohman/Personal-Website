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

  // ---- Internships & Jobs ----
  const experience: Experience[] = [
  {
    role: "Data Scientist",
    org: "DroneResponse",
    dates: "Jan 2026 — May 2026",
    description:
      "Applied data science work focused on building and improving data-driven decision support.",
    bullets: [
      "Developed and evaluated data-driven methods to support business and operational decision-making.",
      "Collaborated with stakeholders to translate requirements into measurable modeling objectives and deliverables.",
    ],
    tech: [
      "Python (optional)",
      "Pandas (optional)",
      "Modeling (optional)",
      "Data Analysis (optional)",
    ],
  },
  {
    role: "Data Science Intern",
    org: "1st Source Bank",
    dates: "Jan 2024 — Jul 2024",
    description:
      "Customer analytics and classification using 15+ years of historical customer data.",
    bullets: [
      "Developed new methods to classify the bank’s primary customers using 15+ years of customer data.",
      "Built a logistic regression model to predict primary-customer classification, achieving 85%+ test accuracy.",
      "Performed feature engineering and validation to improve model stability and interpretability.",
    ],
    tech: ["Python", "Pandas", "scikit-learn", "SQL (optional)", "Logistic Regression"],
  },
  {
    role: "Technical Market Analyst Intern",
    org: "Idea Center, University of Notre Dame",
    dates: "Jan 2024 — Jul 2024",
    description:
      "Market research and commercialization support for university research and technology transfer efforts.",
    bullets: [
      "Conducted market research to identify commercialization opportunities for faculty research and IP.",
      "Created and presented reports summarizing market size, competitive landscape, and actionable recommendations.",
      "Synthesized technical and business considerations into clear narratives for decision-makers.",
    ],
    tech: ["Market Research", "Competitive Analysis", "Technical Writing", "Presentations"],
  },
  ];

  // ---- Teaching (placeholder; Intro to AI highlighted) ----
  const teaching: TeachingItem[] = [
  {
    title: "Intro to Artificial Intelligence — Teaching Assistant",
    org: "University of Notre Dame · CSE Department",
    dates: "May 2024 — May 2026",
    description:
      "Teaching assistant for a core undergraduate AI course, supporting instruction across foundational AI algorithms, probabilistic models, and modern machine learning.",
    bullets: [
      "Assisted in teaching core AI topics including search algorithms, Bayesian statistics, Markovian models, and foundational machine learning concepts.",
      "Lectured to 100+ students on neural networks, backpropagation, clustering methods, and dimensionality reduction.",
      "Hosted weekly office hours to support students with conceptual understanding and technical programming challenges.",
      "Developed assignment and exam materials including questions, answer keys, rubrics, and code outlines.",
    ],
    topics: [
      "AI Search",
      "Bayesian Statistics",
      "Markov Models",
      "Machine Learning",
      "Neural Networks",
      "Backpropagation",
      "Clustering",
      "Dimensionality Reduction",
    ],
    tech: ["Python", "Jupyter", "PyTorch", "NumPy", "Matplotlib"],
    featured: true,
  },
  {
    title: "Generative AI — Teaching Assistant",
    org: "University of Notre Dame · CSE Department",
    dates: "Jan 2026 — May 2026",
    description:
      "Teaching assistant for a Generative AI course focused on modern generative models and applied AI systems.",
    bullets: [
      "Supported instruction and coursework related to generative AI models and modern AI techniques.",
      "Assisted students with understanding model behavior, implementation details, and experimental results.",
      "Provided technical guidance during office hours and assignment development.",
    ],
    tech: ["Python", "Deep Learning", "Generative Models"],
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
    </section>
  );
}


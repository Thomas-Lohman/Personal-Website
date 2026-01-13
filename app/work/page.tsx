type Project = {
  title: string;
  description: string;
  bullets: string[];
  tech: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
};

type Experience = {
  role: string;
  org: string;
  dates: string;
  description?: string;
  bullets: string[];
  tech?: string[];
};

type TeachingItem = {
  title: string;
  org: string;
  dates: string;
  description: string;
  bullets: string[];
  topics?: string[];
  tech?: string[];
  featured?: boolean;
};

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="space-y-2">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {subtitle ? <p className="opacity-80 max-w-3xl">{subtitle}</p> : null}
    </header>
  );
}

function TagRow({ tags }: { tags: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((t) => (
        <span
          key={t}
          className="rounded-full border px-2.5 py-1 text-xs opacity-80"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function Card({
  children,
  featured,
}: {
  children: React.ReactNode;
  featured?: boolean;
}) {
  return (
    <article
      className={[
        "rounded-2xl border p-6 shadow-sm transition",
        "hover:-translate-y-0.5 hover:shadow-md",
        featured ? "border-foreground/30 bg-foreground/5" : "",
      ].join(" ")}
    >
      {children}
    </article>
  );
}

function FeaturedBadge({ text }: { text: string }) {
  return (
    <div className="inline-flex rounded-full border px-2.5 py-1 text-xs font-medium opacity-90">
      {text}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card featured={project.featured}>
      <div className="space-y-2">
        {project.featured ? (
          <FeaturedBadge text="Featured" />
        ) : null}

        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="opacity-80">{project.description}</p>
      </div>

      {project.bullets?.length ? (
        <ul className="mt-4 list-disc space-y-1 pl-5 opacity-80">
          {project.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}

      {project.tech?.length ? <TagRow tags={project.tech} /> : null}

      {project.links?.length ? (
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="underline underline-offset-4 opacity-90 hover:opacity-100"
              target="_blank"
              rel="noreferrer"
            >
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </Card>
  );
}

function ExperienceRow({ exp }: { exp: Experience }) {
  return (
    <div className="rounded-2xl border p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-lg font-semibold">
          {exp.role} <span className="opacity-70">— {exp.org}</span>
        </h3>
        <div className="text-sm opacity-70">{exp.dates}</div>
      </div>

      {exp.description ? <p className="mt-3 opacity-80">{exp.description}</p> : null}

      <ul className="mt-4 list-disc space-y-1 pl-5 opacity-80">
        {exp.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      {exp.tech?.length ? <TagRow tags={exp.tech} /> : null}
    </div>
  );
}

function TeachingCard({ item }: { item: TeachingItem }) {
  return (
    <Card featured={item.featured}>
      <div className="space-y-2">
        {item.featured ? (
          <FeaturedBadge text="Featured Teaching Work" />
        ) : null}

        <h3 className="text-lg font-semibold">{item.title}</h3>

        <div className="text-sm opacity-70">
          {item.org} • {item.dates}
        </div>

        <p className="opacity-80">{item.description}</p>
      </div>

      <ul className="mt-4 list-disc space-y-1 pl-5 opacity-80">
        {item.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      {item.topics?.length ? (
        <div className="mt-4">
          <div className="text-sm font-medium opacity-90">Topics</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {item.topics.map((t) => (
              <span
                key={t}
                className="rounded-full border px-2.5 py-1 text-xs opacity-80"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {item.tech?.length ? <TagRow tags={item.tech} /> : null}
    </Card>
  );
}

export default function WorkPage() {
  // ---- Replace these placeholders with your real content ----
  const projects: Project[] = [
    {
      title: "Language Learning Multi-Agent Tutor",
      description:
        "A level-aware conversational tutor with constrained decoding, translation support, and visual grounding.",
      bullets: [
        "Built a constrained-decoding interaction loop tailored to beginner Spanish.",
        "Designed an evaluation pipeline to measure language correctness and coherence.",
        "Integrated lightweight image generation to visualize conversational context.",
      ],
      tech: ["Python", "LLMs", "Constrained Decoding", "Evaluation"],
      links: [
        // { label: "GitHub", href: "https://github.com/..." },
        // { label: "Demo", href: "https://..." },
      ],
      featured: true,
    },
    {
      title: "March Madness Advanced Analytics",
      description:
        "A full-stack analytics dashboard for matchup insights, modeling, and interactive exploration.",
      bullets: [
        "Designed a data model for teams, games, and features.",
        "Built interactive views for matchup comparisons and summaries.",
      ],
      tech: ["Next.js", "React", "Database", "Analytics"],
    },
    {
      title: "Abstract Art Understanding",
      description:
        "VLM/LLM experiments aligning emotion classification with explanation quality on abstract artworks.",
      bullets: [
        "Benchmarked models across 0/1/2/4-shot prompting setups.",
        "Evaluated explanation alignment against human annotations.",
      ],
      tech: ["VLMs", "ICL", "Embeddings", "Metrics"],
    },
  ];

  const experience: Experience[] = [
    {
      role: "Intern / Job Title",
      org: "Company or Organization",
      dates: "Month YYYY — Month YYYY",
      description:
        "One-line scope: what team/problem area you worked on (optional).",
      bullets: [
        "Impact bullet #1 (start with a verb: Built/Improved/Automated/etc.).",
        "Impact bullet #2 (include numbers if you have them).",
      ],
      tech: ["Python", "SQL", "AWS (optional)"],
    },
  ];

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
    // Add other teaching roles here if you want:
    // {
    //   title: "Teaching Role / Course",
    //   org: "Institution",
    //   dates: "Month YYYY — Month YYYY",
    //   description: "Short description.",
    //   bullets: ["Bullet 1", "Bullet 2"],
    // },
  ];

  return (
    <section className="space-y-14">
      {/* Page header */}
      <header className="space-y-3">
        <h1 className="text-3xl font-bold">Work</h1>
        <p className="opacity-80 max-w-3xl">
          A selection of projects, experience, and teaching work. For research-focused work,
          see the <a className="underline underline-offset-4" href="/research">Research</a> page.
        </p>
      </header>

      {/* Selected Projects */}
      <section className="space-y-6">
        <SectionHeader
          title="Selected Projects"
          subtitle="A few projects I’m most proud of—focused on ML systems, evaluation, and usable tools."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      {/* Internships & Jobs */}
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

      {/* Teaching */}
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

      {/* Footer CTA */}
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



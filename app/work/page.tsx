import SectionHeader from "@/components/work/SectionHeader";
import ProjectCard from "@/components/work/ProjectCard";
import ExperienceRow from "@/components/work/ExperienceRow";
import TeachingCard from "@/components/work/TeachingCard";

import type { Experience, Project, TeachingItem } from "@/components/work/types";

function DropdownSection({
  title,
  subtitle,
  children,
  defaultOpen = false,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details className="group space-y-6" open={defaultOpen}>
      <summary className="list-none cursor-pointer">
        <div className="flex items-start justify-between gap-4">
          <SectionHeader title={title} subtitle={subtitle} />
          <span className="mt-1 select-none text-lg opacity-70 transition-transform group-open:rotate-180">
            ▾
          </span>
        </div>
      </summary>

      <div className="space-y-6">{children}</div>
    </details>
  );
}

export default function WorkPage() {
  // ---- Selected Projects (filled) ----
  const projects: Project[] = [
    {
      title: "March Madness Analytics Web Application",
      description:
        "A full-stack web application providing data-driven NCAA March Madness bracket guidance and predictive insights.",
      bullets: [
        "Co-founded a full-stack web application for NCAA March Madness bracket guidance and paid picks.",
        "Built data pipelines and a Supabase-backed database for team, game, and tournament data.",
        "Trained statistical and machine learning models to predict game outcomes in the bracket.",
        "Integrated predictive insights into interactive matchup and bracket decision tools.",
        "Developing an AI-powered research assistant (LLM) for tournament analysis.",
      ],
      tech: [
        "Python",
        "Typescript",
        "SQL",
        "Relational Databases",
        "Vercel",
        "Pandas",
        "Sklearn",
        "PyTorch",
      ],
      links: [
        // { label: "GitHub", href: "https://github.com/Thomas-Lohman/REPO" },
      ],
    },
    {
      title: "Generative AI System for Effective Language Learning",
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
      title: "Homelessness Discourse Retrieval-Augmented Generation System",
      description:
        "An AI-for-social-good project using retrieval-augmented generation to provide fact-grounded, cited responses to questions about homelessness in the United States.",
      bullets: [
        "Built an end-to-end conversational RAG pipeline using LangChain and Chainlit, maintaining persistent memory, generating fact-grounded responses, and citing document sources in real time",
        "Indexed policy briefs, research papers, and news reports into a Milvus vector database for semantic retrieval.",
        "Designed a document ingestion pipeline with text extraction, chunking, metadata enrichment, and embedding generation.",
        "Tuned retrieval performance using L2 similarity search hyperparamter tuning and evaluated citation reliability.",
        "Ensured fact-grounded responses by surfacing document sources, filenames, and content previews in real time with system responses.",
      ],
      tech: [
        "Python",
        "LLMs",
        "Retrieval-Augmented Generation (RAG)",
        "LangChain",
        "Chainlit",
        "Vector Databases",
        "Document Embeddings",
      ],
      links: [
        // { label: "GitHub", href: "https://github.com/Thomas-Lohman/REPO" },
      ],
    },
    {
      title: "Fine-Tuning LLMs for Text-to-Emoji Translation",
      description:
        "A large language model fine-tuning project focused on translating natural language into expressive emoji sequences.",
      bullets: [
        "Fine-tuned a 7B-parameter LLaMA 2 model using QLoRA with 4-bit quantization (nf4) and LoRA adapters, enabling efficient low-resource translations.",
        "Evaluated performance through zero-shot and few-shot testing on both known and novel prompts, analyzing the model’s ability to capture sentiment, tone, and figurative meaning in ambiguous or contradictory inputs",
        "Gained hands-on experience with LLM fine-tuning, prompt design, and PEFT techniques.",
      ],
      tech: [
        "Python",
        "PyTorch",
        "Hugging Face Transformers",
        "PEFT Methods",
        "LoRA",
        "LLMs",
      ],
      links: [
        // { label: "GitHub", href: "https://github.com/Thomas-Lohman/REPO" },
      ],
    },
    {
      title: "CycleGAN Seasonal Translation Model",
      description:
        "A generative adversarial network for unpaired image-to-image translation between seasonal domains.",
      bullets: [
        "Implemented a custom CycleGAN architecture in PyTorch for unpaired seasonal image translation.",
        "Engineered a data preprocessing and augmentation pipeline to resize, crop, flip, normalize, and augment high-resolution images for robust seasonal style generalization",
        "Experimented with loss function weighting and training stability techniques to improve visual realism and consistency.",
      ],
      tech: [
        "Python",
        "PyTorch",
        "Computer Vision",
        "Generative Adversarial Networks",
        "Generative AI",
      ],
      links: [
        // { label: "GitHub", href: "https://github.com/Thomas-Lohman/REPO" },
      ],
    },
    {
      title: "WorNDle — Multilingual Wordle Web Application",
      description: "A full-stack, multilingual Wordle-style web game",
      bullets: [
        "Developed a multilingual Wordle-style game supporting five languages with a daily play limit and persistent user history.",
        "Implemented core gameplay logic in Python and JavaScript and built a personalized user page for viewing game history.",
        "Integrated RESTful APIs to support secure purchases of additional plays from a remote server and update access in real time.",
        "Used Django authentication to handle secure signup/login, verification, and reliable session management.",
      ],
      tech: ["Django", "Bootstrap", "SQLite", "Javascript", "Python", "RESTful APIs"],
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

  // ---- Teaching ----
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
          A selection of past projects, work experience, and teaching experience. For research-focused work, see the{" "}
          <a className="underline underline-offset-4" href="/research">
            Research
          </a>{" "}
          page.
        </p>
        <p className="opacity-80 max-w-3xl">
         Click the dropdowns below to expand any of the sections :)
        </p>
      </header>

      <div className="space-y-10">
        <DropdownSection
          title="Selected Projects"
          subtitle="A few projects I thought were interesting."
          defaultOpen
        >
          <div
            className={
              "grid gap-6"
              // + " sm:grid-cols-2"
            }
          >
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </DropdownSection>

        <DropdownSection
          title="Internships & Jobs"
          subtitle="Past jobs and internships involving hands-on technical and analytical work."
        >
          <div className="space-y-4">
            {experience.map((e) => (
              <ExperienceRow key={`${e.role}-${e.org}-${e.dates}`} exp={e} />
            ))}
          </div>
        </DropdownSection>

        <DropdownSection
          title="Teaching"
          subtitle="Teaching roles in artificial intelligence and machine learning."
        >
          <div className="grid gap-4">
            {teaching.map((t) => (
              <TeachingCard key={`${t.title}-${t.org}-${t.dates}`} item={t} />
            ))}
          </div>
        </DropdownSection>
      </div>
    </section>
  );
}


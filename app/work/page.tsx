import SectionHeader from "@/components/work/SectionHeader";
import ProjectCard from "@/components/work/ProjectCard";
import ResearchCard from "@/components/work/ResearchCard";
import ExperienceRow from "@/components/work/ExperienceRow";
import TeachingCard from "@/components/work/TeachingCard";

import type {
  Experience,
  Project,
  TeachingItem,
  ResearchItem,
} from "@/components/work/types";

function DropdownSection({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group space-y-6">
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
      status: "Current",
      featured: true,
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
      title: "Multimodal Generative AI System for Effective Language Learning",
      description:
        "A multimodal AI system that acts as a dynamic conversational partner for language learners",
      bullets: [
        "Designed a modular AI system that enables open-ended, level-appropriate conversation for beginner Spanish learners using constrained decoding.",
        "Implemented token-level decoding constraints to restrict vocabulary and grammar to CEFR A2 standards while preserving conversational coherence.",
        "Integrated real-time English translation to support comprehension during live foreign-language interaction.",
        "Developed a multimodal pipeline that extracts keywords from conversation turns and generates contextual images to reinforce word-to-picture associations.",
      ],
      tech: [
        "Python",
        "Large Language Models (LLMs)",
        "Constrained Decoding",
        "AI Systems",
        "Mistral-7B",
        "Multimodal Systems",
      ],
      links: [
        // { label: "Paper", href: "/path-to-paper.pdf" },
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

  // ---- Research (NEW) ----
  const research: ResearchItem[] = [
    {
      title: "Machine Learning for Transaction-Cost-Aware Portfolio Allocation",
      subtitle: "Master’s Thesis Direction · Jun 2025 — Dec 2025",
      description:
        "Master’s thesis research focused on integrating transaction costs into machine learning–based portfolio optimization to improve net-of-cost performance at scale.",
      bullets: [
        "Designed machine learning–driven portfolio allocation models that explicitly incorporate transaction costs to reduce turnover and slippage.",
        "Studied the trade-off between expected returns and trading frictions to improve net-of-cost performance for large-scale capital deployment.",
        "Conducted empirical analysis using CRSP equity data to benchmark ML-based strategies against traditional portfolio construction baselines.",
        "Developed a backtesting framework to evaluate performance, turnover, and stability across market regimes."
      ],
      topics: [
        "Portfolio Optimization",
        "Machine Learning for Finance",
        "Empirical Finance",
      ],
      tech: ["Python", "CRSP", "Pandas", "Optimization", "Backtesting"],
      links: [
        { label: "Thesis Proposal", href: "https://example.com/thesis-proposal.pdf" },
        { label: "Code (Private)", href: "https://github.com/username/thesis-repo" },
        { label: "CRSP Dataset", href: "https://www.crsp.org/" },
      ],
      featured: true,
    },
    {
      title: "Abstract Art Analysis with Large Language Models",
      subtitle: "Vision-Language & LLM Evaluation Research",
      description:
        "Empirical evaluation of open-weight multimodal LLMs on emotion classification and explanation alignment for abstract art using the ArtEmis dataset.",
      bullets: [
        "Evaluated multiple open-weight vision-language models on abstract art interpretation using zero- and few-shot in-context learning (0–4 shots).",
        "Designed an evaluation framework measuring both emotion classification accuracy and semantic alignment of model-generated explanations with human annotations.",
        "Used embedding-based cosine similarity to compare model explanations against diverse human-written affective descriptions.",
        "Found that in-context learning provided minimal improvement over zero-shot performance, while models exhibited latent alignment comparable to human–human agreement in explanation generation."
      ],
      topics: [
        "Vision-Language Models",
        "LLMs",
        "In-Context Learning",
        "Evaluation",
        "Emotion Classification",
      ],
      tech: ["Python", "PyTorch", "Sentence Embeddings", "Evaluation"],
      links: [
        { label: "Paper (Preprint)", href: "https://arxiv.org/abs/xxxx.xxxxx" },
        { label: "GitHub", href: "https://github.com/username/abstract-art-llm" },
        { label: "Poster", href: "https://example.com/poster.pdf" },
      ],
    },
    {
      title: "Publication Network Analysis",
      subtitle:
        "Undergraduate Research · University of Notre Dame CSE · Aug 2024 — Dec 2024",
      description:
        "Large-scale network analysis of scientific publication and citation data to study structural differences between disruptive and developmental research.",
      bullets: [
        "Constructed citation networks from the SciSciNet dataset containing ~2.5 billion rows of publication data.",
        "Developed a methodology for evaluating the similarity of publications to select networks for comparison.",
        "Analyzed citation graphs using NetworkX, learning how local network structure and citation growth evolve over time."
      ],
      topics: [
        "Network Analysis",
        "Large-Scale Data",
      ],
      tech: ["Python", "Graph Analysis", "NetworkX"],
      links: [
        { label: "Technical Report", href: "https://example.com/report.pdf" },
        { label: "Code", href: "https://github.com/username/pub-network-analysis" },
      ],
    },
  ];

  // ---- Internships & Jobs ----
  const experience: Experience[] = [
    {
      role: "Data Scientist",
      org: "NASA Sade (Safety-Aware Drone Ecosystem)",
      dates: "Jan 2026 — May 2026",
      description: "",
      bullets: [
        "Building a real-time monitoring system to verify drone behavior and mission compliance when entering regulated and safety-critical airspaces.",
      ],
      tech: ["MQTT"],
    },
    {
      role: "Data Science Intern",
      org: "1st Source Bank",
      dates: "Jan 2024 — Jul 2024",
      description:
        "Applied statistical modeling to large-scale customer and transaction data to support customer segmentation and predictive insights for retail banking.",
      bullets: [
        "Developed new methods to classify the bank’s primary customers using 15+ years of customer data.",
        "Built logistic regression model to predict primary-customer classification, achieving 85%+ test accuracy.",
        "Analyzed customer transaction behavior over time to identify predictors of future primary-customer status.",
      ],
      tech: ["Python", "Pandas", "Numpy", "Scikit-learn"],
    },
    {
      role: "Technical Market Analyst Intern",
      org: "Idea Center, University of Notre Dame",
      dates: "Aug 2023 — May 2024",
      description: "Assess commercialization prospects of professor research and IP.",
      bullets: [
        "Conducted market research to identify commercialization opportunities for faculty research and IP.",
        "Created and presented reports summarizing market size, competitive landscape, and actionable recommendations.",
        "Synthesized technical and business considerations into clear narratives for decision-makers.",
      ],
      tech: [
        "Powerpoint",
        "Market Research",
        "Competitive Analysis",
        "Technical Writing",
        "Presenting",
      ],
    },
  ];

  // ---- Teaching ----
  const teaching: TeachingItem[] = [
    {
      title: "Intro to Artificial Intelligence — Teaching Assistant",
      org: "University of Notre Dame · CSE Department",
      dates: "May 2024 — May 2026",
      description: "TA for a core junior/senior level AI course.",
      bullets: [
        "Lectured to over 100 students on topics including neural networks, backpropagation, clustering, and dimensionality reduction.",
        "Co-designed a series of programming assignments covering AI search, Bayesian statistics, classical machine learning, deep learning foundations, and transformer architectures.",
      ],
      topics: [
        "AI Search",
        "Bayesian Statistics",
        "Markov Models",
        "Decision Trees",
        "Resression Models",
        "Neural Networks",
        "Deep Learning",
        "Clusterning",
      ],
      tech: [
        "Python",
        "Numpy",
        "Pandas",
        "Sklearn",
        "PyTorch",
        "Matplotlib",
        "Huggingface",
      ],
      featured: true,
    },
    {
      title: "Generative AI — Teaching Assistant",
      org: "University of Notre Dame · CSE Department",
      dates: "Jan 2026 — May 2026",
      description: "TA for new GenAI course in Notre Dame engineering school.",
      bullets: [
        "Guided students through a from-scratch implementation of a minimal ChatGPT-style language model, covering tokenization, transformer blocks, training loops, and inference.",
      ],
      tech: ["Python", "Deep Learning", "Generative Models", "LLMs"],
    },
  ];

  return (
    <section className="space-y-14">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold">Work</h1>
        <p className="opacity-80">
          A selection of past projects, research-driven work, work experience, and teaching experience.
        </p>
        <p className="opacity-80">
          Click the dropdowns below to expand any of the sections :)
        </p>
      </header>

      <div className="space-y-10">
        <DropdownSection
          title="Selected Projects"
          subtitle="A few projects I thought were interesting."
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
          title="Research"
          subtitle="Research-driven projects with papers, posters, and presentations."
        >
          <div className="grid gap-6">
            {research.map((r) => (
              <ResearchCard key={r.title} item={r} />
            ))}
          </div>
        </DropdownSection>

        <DropdownSection
          title="Jobs and Internships"
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


import ResearchCard from "../../components/work/ResearchCard";
import type { ResearchItem } from "../../components/research/types";

export default function ResearchPage() {
  const research: ResearchItem[] = [
    {
      title: "Machine Learning for Transaction-Cost-Aware Portfolio Allocation",
      subtitle: "Master’s Thesis Direction · Jun 2025 — Dec 2025",
      description:
        "Temporary desc.",
      bullets: [
        "temp bullet point",
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
        "Temp description",
      bullets: [
        "Temp bullet point",
      ],
      topics: [
        "Vision-Language Models",
        "LLMs",
        "In-Context Learning",
        "Evaluation",
        "Emotion Classification",
      ],
      tech: ["Python", "PyTorch", "Embeddings", "Evaluation"],
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
        "Temp description",
      bullets: [
        "Temp bullet point.",
      ],
      topics: [
        "Network Analysis",
        "Graph Methods",
        "Scientific Publications",
        "Large-Scale Data",
      ],
      tech: ["Python", "Graph Analysis", "Large-Scale Data Processing"],
      links: [
        { label: "Technical Report", href: "https://example.com/report.pdf" },
        { label: "Code", href: "https://github.com/username/pub-network-analysis" },
      ],
    },
  ];

  return (
    <section className="space-y-14">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold">Research</h1>
        <p className="max-w-3xl opacity-80">
          Some of the research I've done during my time at university.
        </p>
      </header>

      <div className="grid gap-6">
        {research.map((r) => (
          <ResearchCard key={r.title} item={r} />
        ))}
      </div>
    </section>
  );
}


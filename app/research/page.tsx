import ResearchCard from "../../components/research/ResearchCard";
import type { ResearchItem } from "../../components/research/types";

export default function ResearchPage() {
  const research: ResearchItem[] = [
    {
      title: "Machine Learning for Transaction-Cost-Aware Portfolio Allocation",
      subtitle: "Master’s Thesis Direction · Jun 2025 — Dec 2025",
      description:
        "Thesis work on ML-driven portfolio allocation that explicitly models transaction costs to improve net-of-cost performance under realistic rebalancing and capacity constraints.",
      bullets: [
        "Built allocation models that incorporate transaction cost signals (e.g., liquidity, turnover, spread proxies) directly into the decision process.",
        "Reduced unnecessary turnover to mitigate slippage and improve scalability for larger capital deployment.",
        "Benchmarked ML strategies against classical allocation baselines using CRSP data and a reproducible backtesting pipeline.",
      ],
      topics: [
        "Portfolio Optimization",
        "Machine Learning for Finance",
        "Transaction Costs",
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
        "Study of how LLMs and vision-language models interpret abstract art—evaluating emotion classification accuracy and whether model explanations align with human annotations.",
      bullets: [
        "Evaluated multiple LLM/VLM families on emotion classification with controlled in-context learning (ICL) setups (0–k demonstrations).",
        "Measured explanation alignment via embedding-based similarity and analyzed failure modes where models produce plausible but misaligned rationales.",
        "Investigated how dataset noise and annotator disagreement affect evaluation reliability and apparent model performance.",
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
        "Large-scale graph analysis of scientific publication networks to quantify structural similarity and community overlap across research domains.",
      bullets: [
        "Processed and analyzed a publication dataset at ~2.5B-row scale to construct co-authorship and citation-derived network views.",
        "Developed similarity metrics and comparison procedures to evaluate overlap and structural correspondence between research communities.",
        "Applied network analysis to surface cross-domain patterns (e.g., clustering behavior, centrality profiles, and connectivity signatures).",
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
          Selected research projects and ongoing work. I’m gradually adding deeper
          write-ups, artifacts, and links as each project matures.
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


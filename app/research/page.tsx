import SectionHeader from "../../components/work/SectionHeader";
import ResearchCard from "../../components/research/ResearchCard";
import type { ResearchItem } from "../../components/research/types";

export default function ResearchPage() {
  // Replace placeholders with your real research entries
  const research: ResearchItem[] = [
  {
    title: "Machine Learning for Transaction-Cost-Aware Portfolio Allocation",
    subtitle: "Master’s Thesis Direction · Jun 2025 — Dec 2025",
    description:
      "Thesis research focused on machine learning–based portfolio allocation methods that explicitly account for transaction costs to improve net-of-cost performance.",
    bullets: [
      "Designed and implemented machine learning models for portfolio allocation that incorporate transaction costs as model inputs.",
      "Reduced portfolio turnover and slippage to improve net-of-cost performance for large-scale capital deployment scenarios.",
      "Conducted empirical benchmarking using CRSP data to compare ML-driven strategies against classical allocation approaches.",
    ],
    topics: [
      "Portfolio Optimization",
      "Machine Learning for Finance",
      "Transaction Costs",
      "Empirical Finance",
    ],
    tech: ["Python", "CRSP", "Pandas", "Optimization", "Backtesting"],
    featured: true,
  },
  {
    title: "Abstract Art Analysis with Large Language Models",
    subtitle: "Vision-Language & LLM Evaluation Research",
    description:
      "Research investigating how LLMs and vision-language models interpret abstract art, focusing on emotion classification and explanation alignment with human annotations.",
    bullets: [
      "Evaluated LLM and VLM performance on abstract art emotion classification across multiple in-context learning setups.",
      "Analyzed explanation alignment between model-generated descriptions and human annotations.",
      "Studied the impact of dataset quality and annotator agreement on evaluation reliability.",
    ],
    topics: [
      "Vision-Language Models",
      "LLMs",
      "In-Context Learning",
      "Evaluation",
      "Emotion Classification",
    ],
    tech: ["Python", "PyTorch", "Embeddings", "Evaluation"],
  },
  {
    title: "Publication Network Analysis",
    subtitle: "Undergraduate Research · University of Notre Dame CSE · Aug 2024 — Dec 2024",
    description:
      "Undergraduate research project analyzing large-scale publication networks to study structural similarity and research community overlap.",
    bullets: [
      "Constructed and analyzed social networks from a dataset containing approximately 2.5 billion rows.",
      "Developed a methodology to evaluate similarity between publication networks for comparative analysis.",
      "Applied network analysis techniques to identify structural patterns across research domains.",
    ],
    topics: [
      "Network Analysis",
      "Graph Methods",
      "Scientific Publications",
      "Large-Scale Data",
    ],
    tech: ["Python", "Graph Analysis", "Large-Scale Data Processing"],
  },
];

  return (
    <section className="space-y-14">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold">Research</h1>
        <p className="opacity-80 max-w-3xl">
          Selected research projects and ongoing work. I’ll add deeper write-ups and
          links as I polish each project.
        </p>
      </header>

      <section className="space-y-6">
        <SectionHeader
          title="Research Highlights"
          subtitle="A curated set of projects focused on ML/AI evaluation, applied systems, and research-driven engineering."
        />

        {/* One-per-row tiles (same as your updated Work preference) */}
        <div className="grid gap-6">
          {research.map((r) => (
            <ResearchCard key={r.title} item={r} />
          ))}
        </div>
      </section>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Top nav */}
        <header className="flex items-center justify-between">
          <div className="text-lg font-semibold tracking-tight">Thomas Lohman</div>

          <nav className="hidden gap-6 text-sm text-neutral-600 dark:text-neutral-300 sm:flex">
            <a className="hover:text-neutral-900 dark:hover:text-white" href="#projects">
              Projects
            </a>
            <a className="hover:text-neutral-900 dark:hover:text-white" href="#about">
              About
            </a>
            <a className="hover:text-neutral-900 dark:hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="mt-16">
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            AI Engineering • Machine Learning • Data Systems
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            Building practical ML systems and clean, usable products.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
            I’m a CS master’s student focused on AI engineering and applied machine learning. This
            site is a home for my projects, research notes, and things I’m learning along the way.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 dark:bg-white dark:text-neutral-900"
            >
              View projects
            </a>

            <a
              href="#contact"
              className="rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-800 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900"
            >
              Contact me
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-20">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">
            A few highlights — I’ll add full write-ups and links as I polish each one.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "March Madness Advanced Analytics",
                desc: "A full-stack dashboard with models, matchup analysis, and interactive views.",
                tags: ["Next.js", "DB", "Analytics"],
              },
              {
                title: "Language Learning Multi-Agent Tutor",
                desc: "Constrained-decoding LLM for level-aware conversation + translation + visuals.",
                tags: ["LLMs", "Constrained Decoding", "Evaluation"],
              },
              {
                title: "Abstract Art Understanding",
                desc: "VLM/LLM experiments aligning emotion classification + explanation quality.",
                tags: ["VLMs", "ICL", "RAG"],
              },
              {
                title: "Portfolio Optimization Research",
                desc: "Transaction-cost-aware ML portfolio allocation and benchmarking.",
                tags: ["Quant", "Optimization", "ML"],
              },
            ].map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
              >
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-neutral-200 px-2.5 py-1 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-20">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>

          <div className="mt-6 space-y-4 text-neutral-600 dark:text-neutral-300">
            <p>
              I’m interested in the intersection of machine learning, evaluation, and product.
              I like building systems that are both technically strong and actually usable.
            </p>
            <p>
              Outside of academics and projects: volleyball, music deep-dives, and turning random
              ideas into prototypes.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-20">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>

          <div className="mt-6 rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
            <p className="text-neutral-600 dark:text-neutral-300">
              Want to chat or collaborate? Best places to reach me:
            </p>

            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex flex-wrap gap-x-2">
                <span className="font-medium">Email:</span>
                <span className="text-neutral-600 dark:text-neutral-300">
                  youremail@domain.com
                </span>
              </li>
              <li className="flex flex-wrap gap-x-2">
                <span className="font-medium">GitHub:</span>
                <span className="text-neutral-600 dark:text-neutral-300">
                  github.com/Thomas-Lohman
                </span>
              </li>
              <li className="flex flex-wrap gap-x-2">
                <span className="font-medium">LinkedIn:</span>
                <span className="text-neutral-600 dark:text-neutral-300">
                  linkedin.com/in/your-handle
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-neutral-200 pt-8 text-sm text-neutral-500 dark:border-neutral-800">
          © {new Date().getFullYear()} Thomas Lohman. Built with Next.js + Tailwind.
        </footer>
      </div>
    </main>
  );
}




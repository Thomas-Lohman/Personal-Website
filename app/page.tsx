import Image from "next/image";

export default function HomePage() {
  return (
    <section className="space-y-10">
      {/* About + Photo */}
      <div className="grid gap-10 md:grid-cols-[1.4fr_0.6fr] md:items-start">
        {/* About */}
        <div className="space-y-4">
          <p className="text-sm font-medium opacity-70">
            CS M.S. @ Notre Dame • ML/AI Engineering
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h1>

          <p className="opacity-80 max-w-2xl leading-relaxed">
            Temp Paragraph 1.
          </p>

          <p className="opacity-80 max-w-2xl leading-relaxed">
            Temp Paragraph 2.
          </p>

          <p className="opacity-80 max-w-2xl leading-relaxed">
            Temp Paragraph 3.
          </p>
        </div>

        {/* Photo (no links) */}
        <div className="md:justify-self-end w-full max-w-[320px]">
          <div className="overflow-hidden rounded-2xl border shadow-sm">
            <div className="relative aspect-square w-full">
              <Image
                src="/me.png"
                alt="Photo of Thomas Lohman"
                fill
                priority
                className="object-cover select-none"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="border-t pt-8 space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
        <p className="opacity-80 max-w-2xl">
          If you want to reach me: 
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:tlohman@nd.edu"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm transition hover:bg-foreground/5"
          >
            <MailIcon />
            <span>Gmail</span>
          </a>

          <a
            href="https://www.linkedin.com/in/thomas-lohman/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm transition hover:bg-foreground/5"
          >
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/Thomas-Lohman"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm transition hover:bg-foreground/5"
          >
            <GitHubIcon />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Icons ---------------- */

function MailIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-5 w-5 opacity-80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-5 w-5 opacity-80"
      fill="currentColor"
    >
      <path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 002.48 2.5A2.5 2.5 0 007.5 6a2.5 2.5 0 00-2.52-2.5zM3 9h4v12H3zM9 9h3.8v1.6h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.7 2.6 4.7 6v6.2h-4V15c0-1.5 0-3.5-2.1-3.5s-2.4 1.6-2.4 3.4v6.1H9z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-5 w-5 opacity-80"
      fill="currentColor"
    >
      <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 2.3 3.4 1.6.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0012 .5z" />
    </svg>
  );
}



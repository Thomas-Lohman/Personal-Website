export default function ResumePage() {
  return (
    <section className="space-y-10">
      <header className="max-w-3xl space-y-3">
        <h1 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
          Resume
        </h1>
        <p className="max-w-3xl leading-7 opacity-80">
          View my resume below or download the PDF.
        </p>
      </header>

      {/* Download button (forces filename) */}
      <div>
        <a
          href="/resume.pdf"
          download="Thomas_Lohman_Resume.pdf"
          className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium transition hover:bg-foreground/10"
        >
          Download Resume (PDF)
        </a>
      </div>

      {/* Inline PDF embed */}
      <div className="w-full overflow-hidden rounded-2xl border shadow-sm">
        <iframe
          src="/resume.pdf"
          title="Thomas Lohman Resume"
          className="h-[80vh] w-full"
        />
      </div>
    </section>
  );
}


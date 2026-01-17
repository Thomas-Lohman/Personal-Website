export default function ResumePage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Resume</h1>
        <p className="opacity-80 max-w-2xl">
          View my resume below or download the PDF. 
        </p>
      </header>

      {/* Download button (forces filename) */}
      <div>
        <a
          href="/resume.pdf"
          download="Thomas_Lohman_Resume.pdf"
          className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-foreground/10"
        >
          Download Resume (PDF)
        </a>
      </div>

      {/* Inline PDF embed */}
      <div className="w-full overflow-hidden rounded-lg border">
        <iframe
          src="/resume.pdf"
          title="Thomas Lohman Resume"
          className="h-[80vh] w-full"
        />
      </div>
    </section>
  );
}



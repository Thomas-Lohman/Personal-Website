export default function Card({
  children,
  featured,
}: {
  children: React.ReactNode;
  featured?: boolean;
}) {
  return (
    <article
      className={[
        // Base card styling
        "rounded-2xl border p-6 shadow-sm transition",
        "hover:-translate-y-0.5 hover:shadow-md",

        // SAME surface color for all cards
        "bg-foreground/5 dark:bg-foreground/10",

        // Featured cards: slightly stronger border only (no bg change)
        featured ? "border-foreground/30" : "border-foreground/15",
      ].join(" ")}
    >
      {children}
    </article>
  );
}

export function Badge({ text }: { text: string }) {
  return (
    <div className="inline-flex rounded-full border border-foreground/30 px-2.5 py-1 text-xs font-medium opacity-90">
      {text}
    </div>
  );
}

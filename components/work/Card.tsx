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
        "rounded-2xl border p-6 shadow-sm transition",
        "hover:-translate-y-0.5 hover:shadow-md",
        featured ? "border-foreground/30 bg-foreground/5" : "",
      ].join(" ")}
    >
      {children}
    </article>
  );
}

export function Badge({ text }: { text: string }) {
  return (
    <div className="inline-flex rounded-full border px-2.5 py-1 text-xs font-medium opacity-90">
      {text}
    </div>
  );
}

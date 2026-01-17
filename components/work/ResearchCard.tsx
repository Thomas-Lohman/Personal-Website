import Card, { Badge } from "./Card";
import TagRow from "./TagRow";
import type { ResearchItem } from "./types";

export default function ResearchCard({ item }: { item: ResearchItem }) {
  return (
    <Card featured={item.featured}>
      <div className="space-y-2">
        {/* Title row with right-aligned badge */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          {item.featured ? <Badge text="Featured" /> : null}
        </div>

        {item.subtitle ? (
          <div className="text-sm opacity-70">{item.subtitle}</div>
        ) : null}

        <p className="opacity-80">{item.description}</p>
      </div>

      {item.bullets?.length ? (
        <ul className="mt-4 list-disc space-y-1 pl-5 opacity-80">
          {item.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}

      {item.topics?.length ? <TagRow tags={item.topics} /> : null}
      {item.tech?.length ? <TagRow tags={item.tech} /> : null}

      {item.links?.length ? (
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {item.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 underline underline-offset-4 opacity-80 hover:opacity-100"
            >
              {link.label}
              <span className="opacity-60">↗</span>
            </a>
          ))}
        </div>
      ) : null}
    </Card>
  );
}

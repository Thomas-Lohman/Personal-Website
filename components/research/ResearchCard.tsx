import Card, { Badge } from "../work/Card";
import TagRow from "../work/TagRow";
import type { ResearchItem } from "./types";

export default function ResearchCard({ item }: { item: ResearchItem }) {
  return (
    <Card featured={item.featured}>
      <div className="space-y-2">
        {item.featured ? <Badge text="Featured" /> : null}

        <h3 className="text-lg font-semibold">{item.title}</h3>

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
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          {item.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="underline underline-offset-4 opacity-90 hover:opacity-100"
              target="_blank"
              rel="noreferrer"
            >
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </Card>
  );
}

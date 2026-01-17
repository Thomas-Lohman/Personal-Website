import Card, { Badge } from "./Card";
import TagRow from "./TagRow";
import type { TeachingItem } from "./types";

export default function TeachingCard({ item }: { item: TeachingItem }) {
  return (
    <Card featured={item.featured}>
      <div className="space-y-2">
        {/* Title row with right-aligned Featured badge */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          {item.featured ? <Badge text="FEATURED" /> : null}
        </div>

        <div className="text-sm opacity-70">
          {item.org} • {item.dates}
        </div>

        <p className="opacity-80">{item.description}</p>
      </div>

      <ul className="mt-4 list-disc space-y-1 pl-5 opacity-80">
        {item.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      {item.topics?.length ? (
        <div className="mt-4">
          <div className="text-sm font-medium opacity-90"></div>
          <div className="mt-2 flex flex-wrap gap-2">
            {item.topics.map((t) => (
              <span
                key={t}
                className="rounded-full border px-2.5 py-1 text-xs opacity-80"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {item.tech?.length ? <TagRow tags={item.tech} /> : null}
    </Card>
  );
}

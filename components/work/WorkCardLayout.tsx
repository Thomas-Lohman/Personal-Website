import Card, { Badge } from "./Card";
import TagRow from "./TagRow";
import type { LinkItem } from "./types";

type WorkCardLayoutProps = {
  title: string;
  meta?: string;
  description?: string;
  bullets?: string[];
  topics?: string[];
  tech?: string[];
  links?: LinkItem[];
  featured?: boolean;
  status?: string;
};

export default function WorkCardLayout({
  title,
  meta,
  description,
  bullets,
  topics,
  tech,
  links,
  featured,
  status,
}: WorkCardLayoutProps) {
  return (
    <Card featured={featured}>
      <div className="space-y-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">{title}</h3>
            {meta ? <p className="text-sm opacity-70">{meta}</p> : null}
          </div>

          {(featured || status) ? (
            <div className="flex flex-wrap gap-2 sm:justify-end">
              {featured ? <Badge text="Featured" /> : null}
              {status ? <Badge text={status} /> : null}
            </div>
          ) : null}
        </div>

        {description ? <p className="opacity-80">{description}</p> : null}
      </div>

      {bullets?.length ? (
        <ul className="mt-4 list-disc space-y-1 pl-5 opacity-80">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}

      {topics?.length ? <TagRow tags={topics} /> : null}
      {tech?.length ? <TagRow tags={tech} /> : null}

      {links?.length ? (
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {links.map((link) => (
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

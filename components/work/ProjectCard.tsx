import Card, { Badge } from "./Card";
import TagRow from "./TagRow";
import type { Project } from "./types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card featured={project.featured}>
      <div className="space-y-2">
        {project.featured ? <Badge text="Featured" /> : null}
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="opacity-80">{project.description}</p>
      </div>

      {project.bullets?.length ? (
        <ul className="mt-4 list-disc space-y-1 pl-5 opacity-80">
          {project.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}

      {project.tech?.length ? <TagRow tags={project.tech} /> : null}

      {project.links?.length ? (
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          {project.links.map((l) => (
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

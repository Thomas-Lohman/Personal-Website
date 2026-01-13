import TagRow from "./TagRow";
import type { Experience } from "./types";

export default function ExperienceRow({ exp }: { exp: Experience }) {
  return (
    <div className="rounded-2xl border p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-lg font-semibold">
          {exp.role} <span className="opacity-70">— {exp.org}</span>
        </h3>
        <div className="text-sm opacity-70">{exp.dates}</div>
      </div>

      {exp.description ? <p className="mt-3 opacity-80">{exp.description}</p> : null}

      <ul className="mt-4 list-disc space-y-1 pl-5 opacity-80">
        {exp.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      {exp.tech?.length ? <TagRow tags={exp.tech} /> : null}
    </div>
  );
}

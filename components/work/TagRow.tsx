export default function TagRow({ tags }: { tags: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((t) => (
        <span
          key={t}
          className="rounded-full border px-2.5 py-1 text-xs opacity-80"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

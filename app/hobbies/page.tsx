export default function HobbiesPage() {
  return (
    <section className="space-y-10">
      <h1 className="text-3xl font-bold">Hobbies</h1>

      <p className="opacity-80 max-w-2xl">
        A few things I enjoy working on outside of research and coursework.
      </p>

      {/* Pokémon Nuzlocking */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Pokémon Nuzlocking</h2>
        <p className="opacity-80 max-w-2xl">
          Challenge runs of Pokémon games using self-imposed rules that emphasize
          long-term strategy, risk management, and adaptability.
        </p>
        <p className="text-sm opacity-60">More content coming soon.</p>
      </section>

      {/* YouTube Channel */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">YouTube: Teaching AI</h2>
        <p className="opacity-80 max-w-2xl">
          A planned YouTube channel focused on teaching AI and machine learning
          concepts in a clear, intuitive, and example-driven way.
        </p>
        <p className="text-sm opacity-60">More content coming soon.</p>
      </section>
    </section>
  );
}

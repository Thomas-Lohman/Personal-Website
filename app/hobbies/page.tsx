import Image from "next/image";

export default function HobbiesPage() {
  return (
    <section className="space-y-10">
      <h1 className="text-3xl font-bold">Hobbies</h1>

      <p className="opacity-80 max-w-2xl">
        A few things I enjoy working on outside of research and coursework.
      </p>

      {/* Pokémon Nuzlocking */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Pokémon Nuzlocking</h2>

        <p className="opacity-80 max-w-2xl">
          Challenge runs of Pokémon games using self-imposed rules that emphasize
          long-term planning, careful decision-making, and adaptability.
        </p>

        {/* Rules */}
        <div className="max-w-2xl space-y-2">
          <h3 className="text-lg font-semibold tracking-wide">
            Ruleset
          </h3>
          <ul className="list-disc space-y-1 pl-5 text-sm opacity-80">
            <li>Only the first encounter on each route may be caught.</li>
            <li>The game is played in set battle mode.</li>
            <li>Pokémon may not exceed the level of the next gym leader’s ace.</li>
            <li>No healing items may be used during battle.</li>
            <li>If a Pokémon faints, it is considered permanently lost.</li>
            <li>Bonus: Not allowed to use a damage calculator for planning fights.</li>
          </ul>
        </div>

        {/* Sacred Gold */}
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          {/* Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border">
            <Image
              src="/sacred-gold-elite4-team.png"
              alt="Elite Four team from Hardcore Sacred Gold Nuzlocke"
              fill
              className="object-cover"
            />
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold tracking-tight">
              Sacred Gold
            </h3>

            <p className="opacity-80">
              Sacred Gold is an enhancement ROM hack of Pokémon HeartGold (by
              Drayano) that introduces a wide range of balance and difficulty
              adjustments. These include tougher trainer teams, expanded Pokémon
              availability, revised trainer battles, and updated move sets and
              abilities.
            </p>

            <p className="opacity-80">
              The final team used to complete the Elite Four and Champion is shown
              on the left.
            </p>
          </div>
        </div>

        {/* Renegade Platinum */}
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          {/* Description (left) */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold tracking-tight">
              Renegade Platinum
            </h3>

            <p className="opacity-80">
              Renegade Platinum is an enhancement ROM hack of Pokémon Platinum
              that reworks the Sinnoh region with extensive balance changes and
              increased difficulty. The game features tougher trainer teams,
              expanded encounter variety, and redesigned boss battles.
            </p>

            <p className="opacity-80">
              The final team used to complete the Elite Four and Champion is shown
              on the right.
            </p>
          </div>

          {/* Image (right) */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border">
            <Image
              src="/renegade-platinum-elite4-team.JPG"
              alt="Elite Four team from Hardcore Renegade Platinum Nuzlocke"
              fill
              className="object-cover"
            />
          </div>
        </div>
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

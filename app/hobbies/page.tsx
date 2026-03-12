import Image from "next/image";

export default function HobbiesPage() {
  return (
    <section className="space-y-10">
      <header className="max-w-3xl space-y-3">
        <h1 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
          Hobbies
        </h1>

        <p className="max-w-3xl leading-7 opacity-80">
          A few things I enjoy working on outside of research and coursework.
        </p>
      </header>

      {/* Pokémon Nuzlocking */}
      <section className="space-y-6">
        <h2 className="font-serif text-xl font-semibold tracking-tight sm:text-2xl">
          Pokemon Nuzlocking
        </h2>

        <div className="max-w-3xl space-y-3">
          <p className="leading-7 opacity-80">
            I have always loved the Pokemon franchise and grew up playing nearly
            all of the games. As I got older, I started looking for ways to make
            them more challenging and strategic. To get that challenge, I
            occasionally play competitive on Pokemon Showdown, but I mostly play
            enhancement hacks of Pokemon games using hardcore Nuzlocke rules.
          </p>

          <p className="leading-7 opacity-80">
            An enhancement hack, often called a ROM hack or game mod, is a
            modified version of an existing video game. These hacks expand on the
            original in ways that create a fresh experience for players already
            familiar with the base game. I specifically play enhanced-difficulty
            Pokemon hacks, which are designed to raise the challenge through
            stronger trainers, smarter AI, and tighter resources that force more
            careful planning and strategy.
          </p>

          <p className="leading-7 opacity-80">
            A Pokemon Nuzlocke is a self-imposed challenge run built around a set
            of rules that limit which Pokemon you can catch and how you handle
            fainted team members, turning the game into more of a strategy and
            survival challenge.
          </p>

          <p className="leading-7 opacity-80">
            Hardcore Nuzlockes of difficult enhancement hacks require a
            significant amount of planning, and a successful run can take weeks
            or even months to finish. Below, I explain the ruleset I use and
            document some of my past successful Nuzlocke runs.
          </p>
        </div>

        {/* Rules */}
        <div className="max-w-3xl space-y-3">
          <h3 className="font-serif text-lg font-semibold tracking-tight sm:text-xl">
            Ruleset
          </h3>
          <ul className="list-disc space-y-2 pl-5 leading-7 opacity-80">
            <li>Only the first encounter on each route may be caught.</li>
            <li>The game is played in set battle mode.</li>
            <li>Pokemon may not exceed the level of the next gym leader’s ace.</li>
            <li>No healing items may be used during battle.</li>
            <li>If a Pokemon faints, it is considered permanently lost.</li>
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
            <h3 className="font-serif text-xl font-semibold tracking-tight sm:text-2xl">
              Sacred Gold
            </h3>

            <p className="leading-7 opacity-80">
              Sacred Gold is an ROM hack of Pokémon HeartGold (by
              Drayano) that introduces a wide range of balance and difficulty
              adjustments. The final team used to complete the Elite Four and Champion is shown
              on the left.
            </p>

          </div>
        </div>

        {/* Renegade Platinum */}
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          {/* Description (left) */}
          <div className="space-y-3">
            <h3 className="font-serif text-xl font-semibold tracking-tight sm:text-2xl">
              Renegade Platinum
            </h3>

            <p className="leading-7 opacity-80">
              Renegade Platinum is a ROM hack of Pokémon Platinum (my favorite game in the series)
              that reworks the Sinnoh region with extensive balance changes and
              increased difficulty. The final team used to complete the Elite Four and Champion is shown
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

        {/* Blaze Black 2 Redux */}
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          {/* Image placeholder (left) */}
          <div className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-dashed bg-foreground/5 px-6 text-center">
            <p className="max-w-sm leading-7 opacity-70">
              Winning team image coming soon.
            </p>
          </div>

          {/* Description (right) */}
          <div className="space-y-3">
            <h3 className="font-serif text-xl font-semibold tracking-tight sm:text-2xl">
              Blaze Black 2 Redux
            </h3>

            <p className="leading-7 opacity-80">
              Blaze Black 2 Redux is a ROM hack of Pokémon Black 2 that significantly 
              upgrades trainer teams, encounter variety, and battle depth across the Unova region. 
              I am currently working through this game and will update this page once I complete it. 
            </p>
          </div>
        </div>
      </section>

      {/* YouTube Channel */}
      <section className="space-y-3">
        <h2 className="font-serif text-xl font-semibold tracking-tight sm:text-2xl">
          YouTube: Teaching AI
        </h2>
        <p className="max-w-3xl leading-7 opacity-80">
          A planned YouTube channel focused on teaching AI and machine learning
          concepts in a clear, intuitive, and example-driven way.
        </p>
        <p className="text-sm opacity-60">More content coming soon.</p>
      </section>
    </section>
  );
}

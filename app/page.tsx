import Image from "next/image";
import ContactButton from "@/components/ContactButton";
import { MailIcon, LinkedInIcon, GitHubIcon } from "@/components/Icons";

export default function HomePage() {
  return (
    <section className="space-y-8">
      {/* About + Photos */}
      <div className="grid gap-10 md:grid-cols-[1.3fr_260px] md:items-start">
        {/* Left Column: About + Contact */}
        <div className="space-y-4">
          {/* About */}
          <div className="space-y-3">
            <h1 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
              About Me
            </h1>

            <p className="opacity-80 max-w-3xl leading-7">
              I’m a Master’s student in Computer Science and Engineering at the
              University of Notre Dame, specializing in machine learning and data
              science. I’m passionate about (1) modeling relationships in data and
              (2) exploring how deep learning models can learn from and reason
              with data.
            </p>

            <p className="opacity-80 max-w-3xl leading-7">
              My research focuses on machine learning for portfolio optimization
              in U.S. equity markets, with additional experience in customer
              analytics in banking, AI systems in education, ML for art creation,
              and predictive modeling in sports. I’m driven by curiosity and a
              desire to build AI systems that are not only accurate and efficient,
              but also interpretable, adaptable, and impactful in the real world.
            </p>

            <p className="opacity-80 max-w-3xl leading-7">
              At the core of my interest in AI is an appreciation for data and the
              stories it can tell. Whether informing decisions, shaping model
              behavior, or enabling new forms of interaction, I’m excited by how
              thoughtfully used data can drive solutions and power AI systems that
              are both impactful and fun to design. 
            </p>
          </div>

          {/* Contact */}
          <div className="max-w-3xl pt-4 space-y-4">
            <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
              Contact Information
            </h2>

            <p className="opacity-80">If you want to reach me:</p>

            <div className="flex flex-wrap gap-4">
              <ContactButton href="mailto:tlohman@nd.edu">
                <MailIcon />
                <span>Gmail</span>
              </ContactButton>

              <ContactButton
                href="https://www.linkedin.com/in/thomas-lohman/"
                external
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
              </ContactButton>

              <ContactButton href="https://github.com/Thomas-Lohman" external>
                <GitHubIcon />
                <span>GitHub</span>
              </ContactButton>
            </div>
          </div>
        </div>

        {/* Right Column: Photos */}
        <div className="md:justify-self-end w-full max-w-[240px] mt-10 md:mt-14 space-y-4">
          {/* Professional photo */}
          <div className="overflow-hidden rounded-2xl border shadow-sm">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/me.png"
                alt="Photo of Thomas Lohman"
                fill
                priority
                className="object-cover select-none"
                draggable={false}
              />
            </div>
          </div>

          {/* Jolteon icon */}
          <div className="overflow-hidden rounded-2xl border shadow-sm">
            <div className="relative aspect-square w-full">
              <Image
                src="/jolteon.png"
                alt="Jolteon icon"
                fill
                className="object-cover select-none"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

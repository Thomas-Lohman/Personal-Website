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

              I’m a Master’s student studying computer science at the University of Notre Dame, 
              specializing in machine learning and data science. I’m interested in building intelligent 
              systems that turn data into insights which drive decision-making at scale. 
            </p>

            <p className="opacity-80 max-w-3xl leading-7">
              I’m passionate about three core areas: (1) modeling relationships in data, 
              (2) building efficient data infrastructure that enables end-to-end AI solutions, 
              and (3) exploring how deep learning models learn from and reason with data. 
              I enjoy working across the full lifecycle of AI systems and am always eager to learn about new tools, 
              techniques, and applications in the field. I have experience in data engineering, data science, 
              and machine learning engineering across a variety of domains, including finance, customer analytics, 
              education, art, and sports.
            </p>

            <p className="opacity-80 max-w-3xl leading-7">
              At the core of my interest in AI is an appreciation for data and the stories it can tell. 
              I’m motivated by curiosity and a desire to solve complex problems at the intersection 
              of data, AI, and software. My passion for AI/ML continues to drive me to learn, 
              build, and grow as the field evolves.
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

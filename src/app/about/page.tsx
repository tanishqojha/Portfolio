import type { CSSProperties } from "react";
import Image from "next/image";
import { BookOpen, Coffee, Crown, Disc3, Keyboard } from "lucide-react";
import portrait from "@/Profile.jpg";
import { ProjectCard } from "@/components/project-card";
import { ScrubText } from "@/components/scrub-text";
import { sideProjects } from "@/lib/work";

export const metadata = { title: "About · Tanishq Ojha" };

/**
 * The company you founded. Fill in `name` and the founder card appears in the hero.
 * Leave `url` empty if there is no site yet.
 */
const company = { name: "", url: "", line: "" };

const beliefs = [
  {
    title: "Build the thing",
    line: "I'd rather ship a rough version on Friday than polish a deck for a month. Users tell you more in a week than planning does in a quarter.",
  },
  {
    title: "AI, done properly",
    line: "A wrapper around an API call isn't a product. The work is in the evals, the guardrails, and knowing what the model gets wrong.",
  },
  {
    title: "Design counts",
    line: "People only trust software they can understand. I spend real time on the interface around the model.",
  },
];

const hobbies = [
  { icon: Crown, what: "Bullet chess", detail: "rated 1800+, one-minute games, mostly blunders" },
  { icon: BookOpen, what: "Sci-fi and philosophy", detail: "currently Snow Crash" },
  { icon: Disc3, what: "Electronic music", detail: "IDM, on vinyl when I can" },
  { icon: Coffee, what: "Espresso", detail: "1:2 ratio, no exceptions" },
  { icon: Keyboard, what: "Keyboards", detail: "building boards and tinkering with QMK firmware" },
];

const box = "border-[3px] border-ink shadow-[8px_8px_0_var(--color-ink)]";
const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 data-reveal className="mb-10 border-t-[3px] border-ink pt-8 text-[clamp(2rem,4vw,3rem)] uppercase leading-none tracking-[-0.02em]">
      {children}
    </h2>
  );
}

export default function AboutPage() {
  return (
    <main className="w-full flex-1 overflow-x-clip bg-chalk pt-32 pb-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 md:gap-32 lg:px-6">
        {/* Hero */}
        <section className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div data-reveal className="flex flex-col gap-6 lg:col-span-7">
            <p className="font-mono text-sm text-steel">Founder · engineer · chess player</p>
            <h1 className="text-[clamp(2.75rem,6vw,5rem)] uppercase leading-[0.95] tracking-[-0.03em]">
              So, you want to <span className="inline-block border-[3px] border-ink bg-ember px-2 shadow-[6px_6px_0_var(--color-ink)]">know me?</span>
            </h1>
            <p className="max-w-[58ch] text-lg leading-relaxed text-steel">
              I&apos;m Tanishq, 21, and I build companies and the software inside them. I wrote my first Python script in 2021, got hooked on hackathons, and somewhere between the eighth win and the five-hundredth commit decided I&apos;d rather build my own thing than wait for permission.
            </p>
            <p className="max-w-[58ch] text-lg leading-relaxed text-steel">
              Most days that means AI products: agents, retrieval and the boring reliability work around them. The rest of the time I&apos;m on a side project, a chess board, or a keyboard I&apos;m halfway through building.
            </p>
            {company.name && (
              <a
                href={company.url || undefined}
                target="_blank"
                rel="noreferrer noopener"
                className="flex max-w-xl items-center justify-between gap-6 border-[3px] border-ink bg-ink p-5 text-chalk shadow-[6px_6px_0_var(--color-ember)] hover:-translate-y-1"
              >
                <span>
                  <span className="block font-mono text-xs uppercase text-fog">Founder</span>
                  <span className="block text-2xl font-bold uppercase tracking-[-0.01em]">{company.name}</span>
                  {company.line && <span className="mt-1 block text-fog">{company.line}</span>}
                </span>
                {company.url && <span aria-hidden className="text-2xl text-ember">→</span>}
              </a>
            )}
          </div>
          <figure data-reveal style={stagger(1)} className="lg:col-span-5">
            <div className={`relative bg-mist p-3 ${box}`}>
              <Image
                src={portrait}
                alt="Tanishq Ojha in a black shirt, chin resting on his hand, smiling at the camera"
                placeholder="blur"
                priority
                sizes="(min-width: 1024px) 34vw, 92vw"
                className="aspect-[4/5] w-full border-[2px] border-ink object-cover object-[50%_30%]"
              />
              <figcaption className="absolute -bottom-5 left-6 border-[3px] border-ink bg-ember px-3 py-1 font-mono text-xs font-bold uppercase text-ink">
                Founder, building with AI
              </figcaption>
            </div>
          </figure>
        </section>

        {/* Statement */}
        <section className="bg-ink px-6 py-20 text-chalk md:px-16 md:py-28">
          <ScrubText
            className="max-w-5xl text-[clamp(1.6rem,3.4vw,2.75rem)] font-semibold leading-[1.2] tracking-[-0.01em]"
            text="I started building because I wanted things that didn't exist yet. That hasn't changed. The tools got better and the projects got bigger."
          />
        </section>

        {/* Beliefs: gapless 2x2, first spans both rows. */}
        <section>
          <Heading>How I work</Heading>
          <div className="grid grid-flow-dense gap-6 md:grid-cols-[1.2fr_1fr]">
            {beliefs.map((b, i) => (
              <div
                key={b.title}
                data-reveal
                style={stagger(i)}
                className={`flex flex-col justify-end gap-4 p-7 md:p-9 ${box} ${i === 0 ? "bg-ember md:row-span-2" : "bg-chalk"}`}
              >
                <h3 className={`uppercase leading-none tracking-[-0.02em] ${i === 0 ? "text-[clamp(2.25rem,4vw,3.25rem)]" : "text-2xl"}`}>{b.title}</h3>
                <p className={`max-w-[48ch] leading-relaxed ${i === 0 ? "text-lg text-ink" : "text-steel"}`}>{b.line}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Side projects */}
        <section>
          <Heading>Side projects</Heading>
          <p data-reveal className="-mt-4 mb-10 max-w-[56ch] text-lg text-steel">Things I built because I wanted them to exist. Some of them got more users than I expected.</p>
          <div className="grid gap-8 md:grid-cols-2">
            {sideProjects.map((p, i) => (
              <div key={p.name} data-reveal style={stagger(i)} className={`grid ${i === sideProjects.length - 1 && sideProjects.length % 2 ? "md:col-span-2" : ""}`}>
                <ProjectCard p={p} />
              </div>
            ))}
          </div>
        </section>

        {/* Hobbies: icon-led rows. */}
        <section>
          <Heading>Off the clock</Heading>
          <ul className="divide-y-[3px] divide-ink border-y-[3px] border-ink">
            {hobbies.map((h, i) => (
              <li key={h.what} data-reveal style={stagger(i)} className="group flex items-center gap-5 py-5">
                <span className="grid size-12 shrink-0 place-items-center border-[3px] border-ink bg-chalk transition-colors duration-300 group-hover:bg-ember">
                  <h.icon aria-hidden className="size-6" strokeWidth={2} />
                </span>
                <span className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <span className="text-2xl font-bold uppercase tracking-[-0.01em] transition-transform duration-500 group-hover:translate-x-2">{h.what}</span>
                  <span className="font-mono text-sm text-steel">{h.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA: the two doors. */}
        <section data-reveal className={`flex flex-col items-start justify-between gap-8 bg-ember p-8 md:flex-row md:items-center md:p-12 ${box}`}>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] uppercase leading-none tracking-[-0.02em]">Want to work together?</h2>
          <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
            <a href="/hire" className="inline-flex min-h-14 items-center justify-center gap-3 border-[3px] border-ink bg-ink px-7 font-mono text-sm font-bold uppercase text-chalk shadow-[5px_5px_0_var(--color-chalk)] hover:-translate-y-1 active:translate-y-0.5 active:shadow-none">
              Hire me <span aria-hidden>→</span>
            </a>
            <a href="/employ" className="inline-flex min-h-14 items-center justify-center border-[3px] border-ink bg-chalk px-7 font-mono text-sm font-bold uppercase text-ink shadow-[5px_5px_0_var(--color-ink)] hover:-translate-y-1 active:translate-y-0.5 active:shadow-none">
              Employ me
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

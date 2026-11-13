import type { CSSProperties } from "react";
import { Bot, PanelsTopLeft, Rocket } from "lucide-react";
import { ClientCarousel } from "@/components/client-carousel";
import { clients } from "@/lib/work";
import { email } from "@/lib/socials";

export const metadata = {
  title: "Hire me · Tanishq Ojha",
  description: "Freelance AI features, MVPs and websites, built and shipped by Tanishq Ojha.",
};

const services = [
  {
    icon: Bot,
    title: "AI features",
    line: "A support bot that answers from your docs, a pipeline that sorts your inbox, an agent that does the boring part of someone's job. Built with evals so you know it works.",
    tags: ["RAG", "agents", "automations"],
  },
  {
    icon: Rocket,
    title: "MVPs",
    line: "From idea to something real users can log into, usually in 2 to 6 weeks.",
    tags: ["Next.js", "Supabase", "Stripe"],
  },
  {
    icon: PanelsTopLeft,
    title: "Websites",
    line: "Fast, good-looking sites that you can edit yourself after I leave.",
    tags: ["landing pages", "CMS", "SEO"],
  },
];

// A real sequence, so the numbers carry meaning.
const steps = [
  ["Call", "30 minutes. You tell me the problem, I tell you honestly if I'm the right person."],
  ["Plan", "A short written scope with a fixed price and a date. No surprises later."],
  ["Build", "You get a working link every week, not a big reveal at the end."],
  ["Hand over", "Code, docs and a walkthrough. Two weeks of fixes included."],
];

const stagger = (i: number) => ({ "--i": i }) as CSSProperties;
const shadow = "shadow-[8px_8px_0_var(--color-ink)]";

export default function HirePage() {
  return (
    <main className="w-full flex-1 overflow-x-clip bg-chalk pt-32 pb-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 md:gap-32 lg:px-6">
        {/* Hero */}
        <section className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div data-reveal>
            <p className="flex items-center gap-2 font-mono text-sm text-steel">
              <span className="size-2.5 rounded-full bg-ember motion-safe:animate-pulse" /> Taking freelance projects
            </p>
            <h1 className="mt-5 text-[clamp(2.75rem,6vw,5rem)] uppercase leading-[0.95] tracking-[-0.03em]">
              Need it built? <span className="inline-block border-[3px] border-ink bg-ember px-2 shadow-[6px_6px_0_var(--color-ink)]">I&apos;ll ship it.</span>
            </h1>
          </div>
          <div data-reveal style={stagger(1)} className="flex flex-col gap-6">
            <p className="max-w-[46ch] text-lg leading-relaxed text-steel">
              I take on a few freelance projects at a time, mostly for founders and small teams who need something real, fast. Fixed price, weekly demos, and you own everything.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="/contact" className={`inline-flex min-h-14 items-center justify-center gap-3 border-[3px] border-ink bg-ink px-7 font-mono text-sm font-bold uppercase text-chalk ${shadow} hover:-translate-y-1 active:translate-y-0.5 active:shadow-none`}>
                Start a project <span aria-hidden>→</span>
              </a>
              <a href="#clients" className="inline-flex min-h-14 items-center justify-center border-[3px] border-ink px-7 font-mono text-sm font-bold uppercase hover:bg-ink hover:text-chalk">
                Client work
              </a>
            </div>
          </div>
        </section>

        {/* Services: gapless 2x2, first tile spans both rows. */}
        <section>
          <h2 data-reveal className="mb-10 border-t-[3px] border-ink pt-8 text-[clamp(2rem,4vw,3rem)] uppercase leading-none tracking-[-0.02em]">What I can build for you</h2>
          <div className="grid grid-flow-dense gap-6 md:grid-cols-[1.25fr_1fr]">
            {services.map((s, i) => (
              <article
                key={s.title}
                data-reveal
                style={stagger(i)}
                className={`group flex flex-col justify-between gap-10 border-[3px] border-ink p-7 md:p-9 ${shadow} hover:-translate-y-1 hover:shadow-[12px_12px_0_var(--color-ink)] ${i === 0 ? "bg-ember md:row-span-2" : "bg-chalk"}`}
              >
                <s.icon aria-hidden strokeWidth={2} className={`transition-transform duration-500 group-hover:-rotate-6 ${i === 0 ? "size-14" : "size-9 text-ember"}`} />
                <div>
                  <h3 className={`uppercase leading-none tracking-[-0.02em] ${i === 0 ? "text-[clamp(2.5rem,5vw,4rem)]" : "text-3xl"}`}>{s.title}</h3>
                  <p className={`mt-4 max-w-[46ch] leading-relaxed ${i === 0 ? "text-lg" : "text-steel"}`}>{s.line}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li key={t} className={`border-[1.5px] border-ink px-2.5 py-1 font-mono text-xs ${i === 0 ? "bg-chalk" : "bg-mist"}`}>{t}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* From my clients */}
        <section id="clients" className="scroll-mt-28">
          <div className="mb-10 flex flex-col justify-between gap-4 border-t-[3px] border-ink pt-8 md:flex-row md:items-end">
            <h2 data-reveal className="text-[clamp(2rem,4vw,3rem)] uppercase leading-none tracking-[-0.02em]">From my clients</h2>
            <p data-reveal className="max-w-[40ch] text-steel">What I built for them, and what they said afterwards.</p>
          </div>
          <ClientCarousel items={clients} />
        </section>

        {/* How it works */}
        <section className="bg-ink px-6 py-16 text-chalk md:px-14 md:py-20">
          <h2 data-reveal className="text-[clamp(2rem,4vw,3rem)] uppercase leading-none tracking-[-0.02em]">How it works</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([title, line], i) => (
              <li key={title} data-reveal style={stagger(i)} className="flex flex-col gap-3 border-t-[3px] border-ember pt-5">
                <span className="font-mono text-sm text-ember">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-2xl uppercase tracking-[-0.01em]">{title}</h3>
                <p className="leading-relaxed text-fog">{line}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <section data-reveal className={`flex flex-col items-start justify-between gap-8 border-[3px] border-ink bg-ember p-8 md:flex-row md:items-center md:p-12 ${shadow}`}>
          <div>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] uppercase leading-none tracking-[-0.02em]">Got a project?</h2>
            <p className="mt-3 font-mono text-sm">{email}</p>
          </div>
          <a href="/contact" className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 border-[3px] border-ink bg-ink px-7 font-mono text-sm font-bold uppercase text-chalk shadow-[5px_5px_0_var(--color-chalk)] hover:-translate-y-1 active:translate-y-0.5 active:shadow-none">
            Tell me about it <span aria-hidden>→</span>
          </a>
        </section>
      </div>
    </main>
  );
}

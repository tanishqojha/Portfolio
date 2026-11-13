import { AgentTrace } from "@/components/agent-trace";
import { DrawingFilm } from "@/components/drawing-film";
import { email } from "@/lib/socials";

const paths = [
  { title: "Know me", line: "Founder, builder, side-project addict. The person behind the code.", href: "/about", tone: "bg-chalk" },
  { title: "Hire me", line: "Freelance AI features, MVPs and websites. See client work and reviews.", href: "/hire", tone: "bg-ember" },
  { title: "Employ me", line: "Open to full-time AI engineering roles. Agents, retrieval, evals.", href: "/employ", tone: "bg-chalk" },
];

const shadow = "shadow-[8px_8px_0_var(--color-ink)]";

export default function Home() {
  return (
    <main className="w-full overflow-x-clip">
      {/* Hero: a dark chapter. The trace panel is the hero image: it shows the work instead of describing it. */}
      <section className="bg-ink pt-32 pb-24 text-chalk md:pt-40 md:pb-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-[1.1fr_1fr] lg:px-6">
          <div data-reveal>
            <p className="font-mono text-sm text-fog">Tanishq Ojha · AI engineer</p>
            <h1 className="mt-5 text-[clamp(2.6rem,5.6vw,4.75rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em]">
              I build AI that still works <span className="text-ember">after the demo.</span>
            </h1>
            <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-fog">
              Agents, retrieval pipelines and the evals that keep them honest. Mostly TypeScript and Python, shipped to people who actually use it.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#paths"
                className="inline-flex min-h-14 items-center justify-center gap-3 border-[3px] border-chalk bg-ember px-7 font-mono text-sm font-bold uppercase text-ink shadow-[5px_5px_0_var(--color-chalk)] hover:-translate-y-1 hover:shadow-[8px_8px_0_var(--color-chalk)] active:translate-y-0.5 active:shadow-none"
              >
                Work with me <span aria-hidden>↓</span>
              </a>
              <a
                href={`mailto:${email}`}
                className="inline-flex min-h-14 items-center justify-center border-[3px] border-chalk px-7 font-mono text-sm font-bold uppercase text-chalk hover:bg-chalk hover:text-ink"
              >
                Email me
              </a>
            </div>
          </div>
          <div data-reveal style={{ "--i": 1 } as React.CSSProperties}>
            <AgentTrace />
          </div>
        </div>
      </section>


      {/* Pick a path */}
      <section id="paths" className="scroll-mt-16 bg-mist py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mb-14 grid items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
            <div data-reveal>
              <h2 className="text-[clamp(2.25rem,4.5vw,3.75rem)] uppercase leading-none tracking-[-0.03em]">What brought you here?</h2>
              <p className="mt-5 text-lg text-steel">Pick a door.</p>
            </div>
            <DrawingFilm src="/dw/scene-path-card.js" className={`border-[3px] border-ink bg-white ${shadow}`} />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {paths.map((p, i) => (
              <a
                key={p.title}
                href={p.href}
                data-reveal
                style={{ "--i": i } as React.CSSProperties}
                className={`group flex min-h-64 flex-col justify-between gap-10 border-[3px] border-ink p-7 ${p.tone} ${shadow} hover:-translate-y-2 hover:shadow-[14px_14px_0_var(--color-ink)]`}
              >
                <div>
                  <h3 className="text-[2rem] uppercase leading-none tracking-[-0.02em]">{p.title}</h3>
                  <p className="mt-3 max-w-[30ch] text-base text-ink/80">{p.line}</p>
                </div>
                <span className="flex items-center justify-between border-t-[3px] border-ink pt-4 font-mono text-sm font-bold uppercase">
                  Go
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

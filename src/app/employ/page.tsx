import type { CSSProperties } from "react";
import { BrainCircuit, Database, FlaskConical, Server } from "lucide-react";
import { AgentTrace } from "@/components/agent-trace";
import { ProjectCard } from "@/components/project-card";
import { aiProjects } from "@/lib/work";
import { email } from "@/lib/socials";

export const metadata = {
  title: "Employ me · Tanishq Ojha",
  description: "Tanishq Ojha is an AI engineer open to full-time roles: agents, retrieval, evals and the infrastructure around them.",
};

const work = [
  {
    title: "Agents",
    line: "Tool-using agents with a budget, a timeout and a way to say \"I don't know\". I care more about the failure path than the happy one.",
    tags: ["LangGraph", "tool calling", "multi-agent"],
  },
  {
    title: "Retrieval",
    line: "RAG that cites its sources. Chunking, hybrid search and reranking, tuned against real questions.",
    tags: ["pgvector", "Pinecone", "rerankers"],
  },
  {
    title: "Evals",
    line: "If I can't measure it, I don't ship it. Every prompt change runs against a test set first.",
    tags: ["golden sets", "LLM-as-judge", "regressions"],
  },
];

const stack = [
  { icon: BrainCircuit, label: "Models and agents", items: ["OpenAI", "Anthropic", "open-weight models", "LangGraph", "LangChain"] },
  { icon: Database, label: "Data and retrieval", items: ["PostgreSQL", "pgvector", "Pinecone", "Supabase"] },
  { icon: FlaskConical, label: "Evals and quality", items: ["golden sets", "LLM-as-judge", "tracing"] },
  { icon: Server, label: "Shipping", items: ["TypeScript", "Python", "FastAPI", "Next.js", "Rust", "Docker"] },
];

const journey = [
  { year: "2024 to now", title: "AI systems and agents", tags: ["Multi-agent", "LangGraph", "TypeScript", "Rust"] },
  { year: "2023", title: "Hackathons and open source", tags: ["8 wins", "2.1k stars"] },
  { year: "2022", title: "CS and systems foundations", tags: ["OS", "Networking", "PostgreSQL", "C / C++"] },
  { year: "2021", title: "First lines of code", tags: ["Python", "JavaScript"] },
];

const stagger = (i: number) => ({ "--i": i }) as CSSProperties;
const shadow = "shadow-[8px_8px_0_var(--color-ink)]";

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 data-reveal className="mb-10 border-t-[3px] border-ink pt-8 text-[clamp(2rem,4vw,3rem)] uppercase leading-none tracking-[-0.02em]">{children}</h2>;
}

export default function EmployPage() {
  return (
    <main className="w-full flex-1 overflow-x-clip bg-chalk">
      {/* Hero: dark chapter, the trace panel shows the kind of system I build. */}
      <section className="bg-ink pt-32 pb-24 text-chalk md:pt-40 md:pb-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-[1.1fr_1fr] lg:px-6">
          <div data-reveal>
            <p className="flex items-center gap-2 font-mono text-sm text-fog">
              <span className="size-2.5 rounded-full bg-ember motion-safe:animate-pulse" /> Open to full-time AI engineering roles
            </p>
            <h1 className="mt-5 text-[clamp(2.6rem,5.6vw,4.75rem)] uppercase leading-[0.95] tracking-[-0.03em]">
              Hiring an <span className="text-ember">AI engineer?</span>
            </h1>
            <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-fog">
              I build agents, retrieval systems and the evals around them, then put them in front of real users. I&apos;m looking for a team that ships AI products and cares whether they actually work.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="/contact" className="inline-flex min-h-14 items-center justify-center gap-3 border-[3px] border-chalk bg-ember px-7 font-mono text-sm font-bold uppercase text-ink shadow-[5px_5px_0_var(--color-chalk)] hover:-translate-y-1 hover:shadow-[8px_8px_0_var(--color-chalk)] active:translate-y-0.5 active:shadow-none">
                Ask for my CV <span aria-hidden>→</span>
              </a>
              <a href={`mailto:${email}`} className="inline-flex min-h-14 items-center justify-center border-[3px] border-chalk px-7 font-mono text-sm font-bold uppercase hover:bg-chalk hover:text-ink">
                Email me
              </a>
            </div>
          </div>
          <div data-reveal style={stagger(1)}>
            <AgentTrace />
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 py-24 md:gap-32 md:py-32 lg:px-6">
        {/* What I bring: gapless 2x2, first spans both rows. */}
        <section>
          <h2 data-reveal className="max-w-3xl text-[clamp(2rem,4vw,3.25rem)] uppercase leading-none tracking-[-0.02em]">The unglamorous half of AI</h2>
          <p data-reveal className="mt-5 max-w-[60ch] text-lg leading-relaxed text-steel">
            Getting a model to answer once is easy. Getting it to answer well on the thousandth try, at a cost you can live with, is the job.
          </p>
          <div className="mt-14 grid grid-flow-dense gap-6 md:grid-cols-[1.25fr_1fr]">
            {work.map((w, i) => (
              <article
                key={w.title}
                data-reveal
                style={stagger(i)}
                className={`flex flex-col justify-between gap-10 border-[3px] border-ink p-7 md:p-9 ${shadow} hover:-translate-y-1 hover:shadow-[12px_12px_0_var(--color-ink)] ${i === 0 ? "bg-ink text-chalk md:row-span-2" : "bg-chalk"}`}
              >
                <h3 className={`uppercase leading-none tracking-[-0.02em] ${i === 0 ? "text-[clamp(2.5rem,5vw,4rem)]" : "text-3xl"}`}>
                  {w.title}
                  <span className="text-ember">.</span>
                </h3>
                <div>
                  <p className={`max-w-[46ch] leading-relaxed ${i === 0 ? "text-fog" : "text-steel"}`}>{w.line}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {w.tags.map((t) => (
                      <li key={t} className={`border-[1.5px] px-2.5 py-1 font-mono text-xs ${i === 0 ? "border-fog/60 text-fog" : "border-ink bg-mist"}`}>{t}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Selected AI work */}
        <section>
          <Heading>Selected AI work</Heading>
          <div className="grid gap-8 lg:grid-cols-2">
            {aiProjects.map((p, i) => (
              <div key={p.name} data-reveal style={stagger(i)} className={`grid ${i === 0 || (i === aiProjects.length - 1 && (aiProjects.length - 1) % 2) ? "lg:col-span-2" : ""}`}>
                <ProjectCard p={p} featured={i === 0} />
              </div>
            ))}
          </div>
        </section>

        {/* Stack: icons lead, so it scans in a second. */}
        <section>
          <Heading>What I work with</Heading>
          <div className="grid gap-[3px] border-[3px] border-ink bg-ink sm:grid-cols-2 lg:grid-cols-4">
            {stack.map((s, i) => (
              <div key={s.label} data-reveal style={stagger(i)} className="flex flex-col gap-5 bg-chalk p-6">
                <s.icon aria-hidden className="size-9 text-ember" strokeWidth={2} />
                <h3 className="text-xl uppercase tracking-[-0.01em]">{s.label}</h3>
                <ul className="flex flex-wrap gap-1.5">
                  {s.items.map((t) => (
                    <li key={t} className="border-[1.5px] border-ink bg-mist px-2 py-0.5 font-mono text-xs">{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Journey: a real sequence, so years carry information. */}
        <section>
          <Heading>How I got here</Heading>
          <ol className="relative flex flex-col gap-6 pl-8 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-[3px] before:bg-ink">
            {journey.map((j, i) => (
              <li key={j.year} data-reveal style={stagger(i)} className="relative">
                <span className={`absolute top-7 -left-[29px] size-5 rotate-45 border-[2.5px] border-ink ${i === 0 ? "bg-ember" : "bg-mist"}`} />
                <div className="flex flex-col gap-4 border-[3px] border-ink bg-chalk p-6 shadow-[6px_6px_0_var(--color-ink)] md:flex-row md:items-center md:gap-8">
                  <span className="shrink-0 self-start bg-ink px-2.5 py-1 font-mono text-xs font-bold uppercase text-chalk md:self-auto">{j.year}</span>
                  <h3 className="flex-1 text-2xl uppercase tracking-[-0.01em]">{j.title}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {j.tags.map((t) => (
                      <li key={t} className="border-[1.5px] border-ink bg-mist px-2.5 py-1 font-mono text-xs uppercase">{t}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <section data-reveal className={`flex flex-col items-start justify-between gap-8 border-[3px] border-ink bg-ember p-8 md:flex-row md:items-center md:p-12 ${shadow}`}>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] uppercase leading-none tracking-[-0.02em]">Let&apos;s talk about the role</h2>
          <a href="/contact" className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 border-[3px] border-ink bg-ink px-7 font-mono text-sm font-bold uppercase text-chalk shadow-[5px_5px_0_var(--color-chalk)] hover:-translate-y-1 active:translate-y-0.5 active:shadow-none">
            Get in touch <span aria-hidden>→</span>
          </a>
        </section>
      </div>
    </main>
  );
}

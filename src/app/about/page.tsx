export const metadata = { title: "About — Tanishq Ojha" };

export default function AboutPage() {
  return (
    <main className="w-full pt-28 flex-1 bg-stitch-background">
      <div className="flex flex-col w-full">
        {/* SECTION 1: EDITORIAL HERO */}
        <section className="relative w-full max-w-7xl mx-auto px-5 lg:px-12 pt-6 lg:pt-10">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b-[2.5px] border-stitch-on-background">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-stitch-primary-container border-[1.5px] border-stitch-on-background animate-ping" />
              <span className="font-code-sm text-code-sm uppercase tracking-wider text-stitch-on-background">PROFILE_REF // TANISHQ_PERSONAL_INDEX</span>
            </div>
            <div className="flex items-center gap-4 font-code-sm text-code-sm text-stitch-on-surface-variant">
              <span>LOC: 37.7749° N, 122.4194° W</span>
              <span className="hidden sm:inline">|</span>
              <span className="hidden sm:inline">STATUS: COMPILING_FUTURE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-start">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 self-start bg-stitch-primary-container text-stitch-on-background border-[2.5px] border-stitch-on-background px-4 py-1.5 shadow-[4px_4px_0px_0px_#1b1c1a]">
                <span className="material-symbols-outlined text-[18px]">terminal</span>
                <span className="font-code-sm text-code-sm uppercase font-bold tracking-wider">01 // WANNA KNOW ME?</span>
              </div>
              <h1 className="font-display-xl text-display-xl tracking-tight text-stitch-on-background uppercase font-bold leading-none">
                SO, YOU WANNA <br />
                <span className="bg-stitch-primary-container px-2 border-[3px] border-stitch-on-background shadow-[6px_6px_0px_0px_#1b1c1a] inline-block my-1">KNOW ME?</span>
              </h1>
              <div className="border-l-[4px] border-stitch-primary pl-4 py-1">
                <p className="font-code-lg text-code-lg uppercase text-stitch-primary font-bold tracking-tight">
                  BUILDER. TINKERER. STUDENT OF SYSTEMS.
                </p>
              </div>
              <p className="font-body-lg text-body-lg text-stitch-on-surface leading-relaxed max-w-3xl">
                I am a software developer obsessed with the intersection of machine intelligence, intuitive human interfaces, and zero-to-one product engineering. I believe software should be as delightful to touch as a physical instrument—fast, tactile, uncompromising, and deeply empowering.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                <div className="bg-stitch-surface-container border-[2.5px] border-stitch-on-background p-3 shadow-[4px_4px_0px_0px_#1b1c1a] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
                  <span className="font-code-sm text-code-sm text-stitch-on-surface-variant block uppercase">AGE</span>
                  <span className="font-headline-sm text-headline-sm text-stitch-on-background font-bold">21 YRS OLD</span>
                </div>
                <div className="bg-stitch-surface-bright border-[2.5px] border-stitch-on-background p-3 shadow-[4px_4px_0px_0px_#1b1c1a] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
                  <span className="font-code-sm text-code-sm text-stitch-on-surface-variant block uppercase">VELOCITY</span>
                  <span className="font-headline-sm text-headline-sm text-stitch-on-background font-bold">500+ COMMITS</span>
                </div>
                <div className="bg-stitch-primary-container border-[2.5px] border-stitch-on-background p-3 shadow-[4px_4px_0px_0px_#1b1c1a] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
                  <span className="font-code-sm text-code-sm text-stitch-on-background block uppercase">HACKATHONS</span>
                  <span className="font-headline-sm text-headline-sm text-stitch-on-background font-bold">8+ WON 🏆</span>
                </div>
                <div className="bg-stitch-surface-container-high border-[2.5px] border-stitch-on-background p-3 shadow-[4px_4px_0px_0px_#1b1c1a] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
                  <span className="font-code-sm text-code-sm text-stitch-on-surface-variant block uppercase">BASE</span>
                  <span className="font-headline-sm text-headline-sm text-stitch-on-background font-bold">TECH HUB</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="relative bg-stitch-surface-container border-[3px] border-stitch-on-background shadow-[8px_8px_0px_0px_#1b1c1a] p-3">
                <div className="flex items-center justify-between border-b-[2px] border-stitch-on-background pb-2 mb-3 bg-stitch-surface-bright px-2">
                  <span className="font-code-sm text-code-sm font-bold uppercase">IDENT_FILE // TANISHQ.RAW</span>
                  <span className="w-2.5 h-2.5 bg-stitch-on-background rounded-none" />
                </div>
                <div className="relative w-full aspect-[4/5] bg-stitch-surface-variant overflow-hidden border-[2px] border-stitch-on-background">
                  <img
                    className="w-full h-full object-cover grayscale contrast-125"
                    alt="Monochrome portrait photograph of a young sharp software engineer sitting in a minimalist tech workshop with mechanical keyboards, warm desk lamps, and circuit boards in the background."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW_AB0inuYNsoBrzVohm2i4DpybAstIxTCgoMbimxRHQPhfoQo0RAv8RrE1MDWFmyv8GTHoAkASrcOu6uQaCbwZRvu5857WJh-jd4WysdlzzYJYEGG-RbZ_hgePx26owQZvCFlOmwKwpJEOEYBFWRkqTbxIrPjPMqLemyUNWVHucOK4lFyNjh0KlCvSfW_IvnHMg1ex5gKvcfWKu3bN_T5dwuGeW0-BO7VYuaVl-7JVlN264ccB0Q"
                  />
                  <div className="absolute bottom-2 left-2 bg-stitch-on-background text-stitch-primary-container px-2 py-0.5 font-code-sm text-code-sm font-bold uppercase">
                    DEV_ID: 8094-TX
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-stitch-on-surface-variant font-code-sm text-code-sm px-1">
                  <span>CORE: COMPUTE &amp; COGNITION</span>
                  <span>VER: 2025.2</span>
                </div>
              </div>
              <div className="bg-stitch-on-background text-stitch-surface p-4 border-[2.5px] border-stitch-on-background shadow-[4px_4px_0px_0px_#ccff00]">
                <p className="font-code-sm text-code-sm text-stitch-primary-container uppercase font-bold mb-1">{"// TRANSMISSION"}</p>
                <p className="font-body-sm text-body-sm text-stitch-surface-container-low leading-normal">
                  &quot;I do not view engineering as mere implementation; it is applied philosophy rendered in executable syntax.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE PHILOSOPHY & MANIFESTO */}
        <section className="w-full max-w-7xl mx-auto px-5 lg:px-12 pt-10">
          <div className="border-t-[3px] border-stitch-on-background pt-8 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-label-caps text-label-caps uppercase text-stitch-primary font-bold tracking-widest block mb-1">AXIOMS &amp; PRINCIPLES</span>
              <h2 className="font-headline-lg text-headline-lg text-stitch-on-background uppercase font-bold">
                THE PHILOSOPHY &amp; MANIFESTO
              </h2>
            </div>
            <div className="font-code-sm text-code-sm text-stitch-on-surface-variant max-w-md">
              Structured beliefs forged across hundreds of PRs, 3am system outages, and frantic hackathon sprints.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col justify-between bg-stitch-surface-container-low border-[3px] border-stitch-on-background p-6 shadow-[6px_6px_0px_0px_#1b1c1a] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#1b1c1a] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-stitch-on-background text-stitch-surface font-code-sm text-code-sm px-2.5 py-1 font-bold">01 // AUTONOMY</span>
                  <span className="material-symbols-outlined text-stitch-primary text-[28px]">code</span>
                </div>
                <h3 className="font-headline-md text-headline-md uppercase text-stitch-on-background mb-3 font-bold">Why I Code</h3>
                <p className="font-body-md text-body-md text-stitch-on-surface-variant leading-relaxed">
                  Code is the only medium where thought directly transforms into working infrastructure with zero friction of physical manufacturing. It offers pure digital autonomy: the ability to architect self-sustaining artifacts that solve genuine friction for thousands without asking permission.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t-[2px] border-stitch-on-background flex items-center justify-between font-code-sm text-code-sm">
                <span className="uppercase text-stitch-on-surface">LEVERAGE: HIGH</span>
                <span className="text-stitch-primary font-bold">→ AGENTIC REACH</span>
              </div>
            </div>
            <div className="flex flex-col justify-between bg-stitch-surface-bright border-[3px] border-stitch-on-background p-6 shadow-[6px_6px_0px_0px_#ccff00] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#1b1c1a] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-stitch-primary-container text-stitch-on-background font-code-sm text-code-sm px-2.5 py-1 font-bold border border-stitch-on-background">02 // COGNITION</span>
                  <span className="material-symbols-outlined text-stitch-on-background text-[28px]">psychology</span>
                </div>
                <h3 className="font-headline-md text-headline-md uppercase text-stitch-on-background mb-3 font-bold">The AI Thesis</h3>
                <p className="font-body-md text-body-md text-stitch-on-surface-variant leading-relaxed">
                  The era of superficial API wrappers is obsolete. I focus on agentic state orchestration, deterministic guardrails around probabilistic engines, and context-engineered pipelines that transform raw foundation models into domain-native, proactive partners.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t-[2px] border-stitch-on-background flex items-center justify-between font-code-sm text-code-sm">
                <span className="uppercase text-stitch-on-surface">ORCHESTRATION</span>
                <span className="text-stitch-on-background font-bold">→ DEEP CONTEXT</span>
              </div>
            </div>
            <div className="flex flex-col justify-between bg-stitch-surface-container-low border-[3px] border-stitch-on-background p-6 shadow-[6px_6px_0px_0px_#1b1c1a] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#1b1c1a] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-stitch-on-background text-stitch-surface font-code-sm text-code-sm px-2.5 py-1 font-bold">03 // COGNITIVE LOAD</span>
                  <span className="material-symbols-outlined text-stitch-primary text-[28px]">design_services</span>
                </div>
                <h3 className="font-headline-md text-headline-md uppercase text-stitch-on-background mb-3 font-bold">Design Matters</h3>
                <p className="font-body-md text-body-md text-stitch-on-surface-variant leading-relaxed">
                  Aesthetics are not cosmetic glaze applied after code is written. Great interface architecture actively respects the user&apos;s sensory bandwidth, minimizes mental latency, and produces visceral tactile satisfaction with every keystroke and state transition.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t-[2px] border-stitch-on-background flex items-center justify-between font-code-sm text-code-sm">
                <span className="uppercase text-stitch-on-surface">TACTILITY: 100%</span>
                <span className="text-stitch-primary font-bold">→ ZERO FATIGUE</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: INTERACTIVE VERTICAL TIMELINE ("The Journey So Far") */}
        <section className="w-full max-w-7xl mx-auto px-5 lg:px-12 pt-10">
          <div className="border-t-[3px] border-stitch-on-background pt-8 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-label-caps text-label-caps uppercase text-stitch-primary font-bold tracking-widest block mb-1">CHRONOLOGY // 2021 — 2025</span>
              <h2 className="font-headline-lg text-headline-lg text-stitch-on-background uppercase font-bold">THE JOURNEY SO FAR</h2>
            </div>
            <div className="inline-flex items-center gap-2 border-[2px] border-stitch-on-background bg-stitch-surface-container px-3 py-1 font-code-sm text-code-sm">
              <span className="material-symbols-outlined text-[16px]">tune</span>
              <span>CLICK NODES TO REVEAL TECHNICAL LOGS</span>
            </div>
          </div>

          <div className="relative pl-6 md:pl-10 flex flex-col gap-8 before:content-[''] before:absolute before:left-[11px] md:before:left-[19px] before:top-2 before:bottom-2 before:w-[3px] before:bg-stitch-on-background">
            {/* Node 1 (2024-Present) */}
            <div className="relative group">
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-6 h-6 bg-stitch-primary-container border-[2.5px] border-stitch-on-background rotate-45 flex items-center justify-center shadow-[2px_2px_0px_0px_#1b1c1a]">
                <div className="w-2 h-2 bg-stitch-on-background rotate-45" />
              </div>
              <div className="bg-stitch-surface-bright border-[3px] border-stitch-on-background p-6 shadow-[6px_6px_0px_0px_#1b1c1a]">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-stitch-on-background text-stitch-surface font-code-sm text-code-sm px-2.5 py-0.5 font-bold uppercase">2024 — PRESENT</span>
                    <span className="bg-stitch-primary-container text-stitch-on-background border border-stitch-on-background font-code-sm text-code-sm px-2 py-0.5 font-bold uppercase">CURRENT EPOCH</span>
                  </div>
                  <span className="font-code-sm text-code-sm text-stitch-on-surface-variant font-semibold">STAGE 04 // ACTIVE RUNTIME</span>
                </div>
                <h3 className="font-headline-md text-headline-md uppercase text-stitch-on-background font-bold mb-2">AI Systems &amp; Autonomous Agents</h3>
                <p className="font-body-md text-body-md text-stitch-on-surface-variant mb-4">
                  Researching multi-agent orchestration, synthetic data fine-tuning pipelines, and shipping developer tooling leveraged across modern engineering teams. Focused on latency reduction for edge inference and agentic tool-use loops.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="font-code-sm text-code-sm bg-stitch-surface-container px-2.5 py-1 border-[1.5px] border-stitch-on-background uppercase">Multi-Agent Systems</span>
                  <span className="font-code-sm text-code-sm bg-stitch-surface-container px-2.5 py-1 border-[1.5px] border-stitch-on-background uppercase">LangGraph / LlamaIndex</span>
                  <span className="font-code-sm text-code-sm bg-stitch-surface-container px-2.5 py-1 border-[1.5px] border-stitch-on-background uppercase">vLLM &amp; TensorRT</span>
                  <span className="font-code-sm text-code-sm bg-stitch-surface-container px-2.5 py-1 border-[1.5px] border-stitch-on-background uppercase">TypeScript &amp; Rust</span>
                </div>
                <details className="cursor-pointer border-t-[2px] border-stitch-on-background pt-3 group/detail">
                  <summary className="font-code-sm text-code-sm uppercase font-bold text-stitch-primary flex items-center justify-between list-none">
                    <span>[+] INSPECT ARCHITECTURAL ARTIFACTS</span>
                    <span className="group-open/detail:rotate-180 transition-transform">↓</span>
                  </summary>
                  <div className="mt-3 p-4 bg-stitch-surface-container-lowest border-[1.5px] border-stitch-on-background font-code-sm text-code-sm text-stitch-on-surface space-y-2">
                    <p className="text-stitch-on-background font-bold">{"// BENCHMARKS & DELIVERABLES"}</p>
                    <p>• Designed a DAG-based parallel reasoning engine reducing multi-step workflow latency by 41%.</p>
                    <p>• Shipped high-throughput context-caching middleware serving 120k daily queries with sub-80ms TTFT.</p>
                    <p>• Authored technical breakdowns on deterministic JSON decoding with constrained grammars.</p>
                  </div>
                </details>
              </div>
            </div>

            {/* Node 2 (2023) */}
            <div className="relative group">
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-6 h-6 bg-stitch-surface-container-high border-[2.5px] border-stitch-on-background rotate-45 flex items-center justify-center shadow-[2px_2px_0px_0px_#1b1c1a]">
                <div className="w-2 h-2 bg-stitch-on-background rotate-45" />
              </div>
              <div className="bg-stitch-surface-container-low border-[3px] border-stitch-on-background p-6 shadow-[6px_6px_0px_0px_#1b1c1a]">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-stitch-on-background text-stitch-surface font-code-sm text-code-sm px-2.5 py-0.5 font-bold uppercase">2023</span>
                    <span className="bg-stitch-surface-variant text-stitch-on-surface border border-stitch-on-background font-code-sm text-code-sm px-2 py-0.5 font-bold uppercase">ACCELERATION</span>
                  </div>
                  <span className="font-code-sm text-code-sm text-stitch-on-surface-variant font-semibold">STAGE 03 // COMPETITIVE CRUCIBLE</span>
                </div>
                <h3 className="font-headline-md text-headline-md uppercase text-stitch-on-background font-bold mb-2">Hackathon Circuit &amp; Founder Fellowship</h3>
                <p className="font-body-md text-body-md text-stitch-on-surface-variant mb-4">
                  Secured 1st place in the National AI Hackathon, launched open-source developer tooling that crossed 2,000+ GitHub stars, and immersed in high-intensity founder cohorts building zero-to-one prototypes under extreme 36-hour deadlines.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="font-code-sm text-code-sm bg-stitch-surface-bright px-2.5 py-1 border-[1.5px] border-stitch-on-background uppercase">8x Winner</span>
                  <span className="font-code-sm text-code-sm bg-stitch-surface-bright px-2.5 py-1 border-[1.5px] border-stitch-on-background uppercase">2.1k Stars on GitHub</span>
                  <span className="font-code-sm text-code-sm bg-stitch-surface-bright px-2.5 py-1 border-[1.5px] border-stitch-on-background uppercase">Vector Search</span>
                  <span className="font-code-sm text-code-sm bg-stitch-surface-bright px-2.5 py-1 border-[1.5px] border-stitch-on-background uppercase">Distributed Caching</span>
                </div>
                <details className="cursor-pointer border-t-[2px] border-stitch-on-background pt-3 group/detail2">
                  <summary className="font-code-sm text-code-sm uppercase font-bold text-stitch-on-background flex items-center justify-between list-none">
                    <span>[+] INSPECT TOURNAMENT RECORDS</span>
                    <span className="group-open/detail2:rotate-180 transition-transform">↓</span>
                  </summary>
                  <div className="mt-3 p-4 bg-stitch-surface-container-lowest border-[1.5px] border-stitch-on-background font-code-sm text-code-sm text-stitch-on-surface space-y-2">
                    <p>• Engineered a real-time semantic code search CLI using local ONNX embeddings in Rust.</p>
                    <p>• Presented prototype in front of 400+ attendees; awarded $15,000 grant for continued open-source research.</p>
                  </div>
                </details>
              </div>
            </div>

            {/* Node 3 (2022) */}
            <div className="relative group">
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-6 h-6 bg-stitch-surface-container-high border-[2.5px] border-stitch-on-background rotate-45 flex items-center justify-center shadow-[2px_2px_0px_0px_#1b1c1a]">
                <div className="w-2 h-2 bg-stitch-on-background rotate-45" />
              </div>
              <div className="bg-stitch-surface-container-low border-[3px] border-stitch-on-background p-6 shadow-[6px_6px_0px_0px_#1b1c1a]">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-stitch-on-background text-stitch-surface font-code-sm text-code-sm px-2.5 py-0.5 font-bold uppercase">2022</span>
                    <span className="bg-stitch-surface-variant text-stitch-on-surface border border-stitch-on-background font-code-sm text-code-sm px-2 py-0.5 font-bold uppercase">THEORY &amp; METAL</span>
                  </div>
                  <span className="font-code-sm text-code-sm text-stitch-on-surface-variant font-semibold">STAGE 02 // SUBSTRATE</span>
                </div>
                <h3 className="font-headline-md text-headline-md uppercase text-stitch-on-background font-bold mb-2">Computer Science &amp; Systems Foundations</h3>
                <p className="font-body-md text-body-md text-stitch-on-surface-variant mb-4">
                  Deep dive into distributed computing, operating systems primitives, database query planners, and modern web application scaling patterns. Transitioned from high-level scripting into memory management, concurrent pipelines, and protocol design.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="font-code-sm text-code-sm bg-stitch-surface-bright px-2.5 py-1 border-[1.5px] border-stitch-on-background uppercase">Operating Systems</span>
                  <span className="font-code-sm text-code-sm bg-stitch-surface-bright px-2.5 py-1 border-[1.5px] border-stitch-on-background uppercase">TCP/IP &amp; WebSockets</span>
                  <span className="font-code-sm text-code-sm bg-stitch-surface-bright px-2.5 py-1 border-[1.5px] border-stitch-on-background uppercase">PostgreSQL Internals</span>
                  <span className="font-code-sm text-code-sm bg-stitch-surface-bright px-2.5 py-1 border-[1.5px] border-stitch-on-background uppercase">C / C++</span>
                </div>
                <details className="cursor-pointer border-t-[2px] border-stitch-on-background pt-3 group/detail3">
                  <summary className="font-code-sm text-code-sm uppercase font-bold text-stitch-on-background flex items-center justify-between list-none">
                    <span>[+] INSPECT FOUNDATIONAL WORK</span>
                    <span className="group-open/detail3:rotate-180 transition-transform">↓</span>
                  </summary>
                  <div className="mt-3 p-4 bg-stitch-surface-container-lowest border-[1.5px] border-stitch-on-background font-code-sm text-code-sm text-stitch-on-surface space-y-2">
                    <p>• Wrote a basic HTTP/1.1 server from scratch in C with epoll event pooling.</p>
                    <p>• Built a B-Tree based key-value storage engine exploring disk page serialization and WAL logging.</p>
                  </div>
                </details>
              </div>
            </div>

            {/* Node 4 (2021) */}
            <div className="relative group">
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-6 h-6 bg-stitch-surface-container-high border-[2.5px] border-stitch-on-background rotate-45 flex items-center justify-center shadow-[2px_2px_0px_0px_#1b1c1a]">
                <div className="w-2 h-2 bg-stitch-on-background rotate-45" />
              </div>
              <div className="bg-stitch-surface-container-low border-[3px] border-stitch-on-background p-6 shadow-[6px_6px_0px_0px_#1b1c1a]">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-stitch-on-background text-stitch-surface font-code-sm text-code-sm px-2.5 py-0.5 font-bold uppercase">2021</span>
                    <span className="bg-stitch-surface-variant text-stitch-on-surface border border-stitch-on-background font-code-sm text-code-sm px-2 py-0.5 font-bold uppercase">GENESIS</span>
                  </div>
                  <span className="font-code-sm text-code-sm text-stitch-on-surface-variant font-semibold">STAGE 01 // FIRST CONTACT</span>
                </div>
                <h3 className="font-headline-md text-headline-md uppercase text-stitch-on-background font-bold mb-2">First Lines of Code &amp; Early Curiosity</h3>
                <p className="font-body-md text-body-md text-stitch-on-surface-variant mb-4">
                  Started with mundane task automation, web scrapers, and crude visual experiments in Python and JavaScript. Realized that code is not arithmetic—it is creative leverage that can reshape reality.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="font-code-sm text-code-sm bg-stitch-surface-bright px-2.5 py-1 border-[1.5px] border-stitch-on-background uppercase">Python Automation</span>
                  <span className="font-code-sm text-code-sm bg-stitch-surface-bright px-2.5 py-1 border-[1.5px] border-stitch-on-background uppercase">DOM Manipulation</span>
                  <span className="font-code-sm text-code-sm bg-stitch-surface-bright px-2.5 py-1 border-[1.5px] border-stitch-on-background uppercase">Bash Scripts</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: "OUTSIDE THE CODE" */}
        <section className="w-full max-w-7xl mx-auto px-5 lg:px-12 pt-10">
          <div className="border-t-[3px] border-stitch-on-background pt-8 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-label-caps text-label-caps uppercase text-stitch-primary font-bold tracking-widest block mb-1">ANALOG PASSIONS &amp; SUBROUTINES</span>
              <h2 className="font-headline-lg text-headline-lg text-stitch-on-background uppercase font-bold">OUTSIDE THE CODE</h2>
            </div>
            <div className="font-code-sm text-code-sm text-stitch-on-surface-variant">
              Cognitive cross-training: habits, hardware, and physical tactile interests.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Chess */}
            <div className="bg-stitch-surface-bright border-[3px] border-stitch-on-background p-5 shadow-[6px_6px_0px_0px_#1b1c1a] flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
              <div>
                <div className="flex items-center justify-between border-b-[2px] border-stitch-on-background pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">♟️</span>
                    <span className="font-code-sm text-code-sm font-bold uppercase text-stitch-on-background">BULLET CHESS &amp; STRATEGY</span>
                  </div>
                  <span className="bg-stitch-primary-container px-2 py-0.5 border border-stitch-on-background font-code-sm text-code-sm font-bold">1800+ ELO</span>
                </div>
                <div className="w-full h-36 bg-stitch-surface-container mb-4 border-[2px] border-stitch-on-background overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover grayscale contrast-125"
                    alt="Monochrome overhead close-up shot of a wooden tournament chessboard with a wooden knight and bishop in mid-game focus."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8CuZXEQfZRc_pO1lSMg8gjnsYmz9B-uQy6JN2eqNT6eeSlqqqDKhB_G0XD3qaq7LdesyUaaGc4gRHtdnchGQf7_Gg5-meF4S04v8nCK2ZSX5yUwGzxBTEqZNbRKs0JpWTXOSLxZQl_gXADyi3WwdsrKSnrX3JUOpkOSnlP98FUOagZC70ZHLXIOQxkmrNt9vHNV1EO2RZ4YgVmM1iS57k5tIiaAFUV8sFDlC_naSqJ-T3CY1FtU0"
                  />
                  <div className="absolute top-2 right-2 bg-stitch-on-background text-stitch-surface font-code-sm text-code-sm px-2 py-0.5">3-MIN BLITZ</div>
                </div>
                <p className="font-body-md text-body-md text-stitch-on-surface-variant leading-relaxed">
                  High-speed decision making under strict time constraints. Cultivates rapid pattern recognition, tactical sacrifice calculation, and psychological composure under clock pressure.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t-[1.5px] border-stitch-outline-variant font-code-sm text-code-sm text-stitch-primary font-bold uppercase">{"// FAV OPENING: SICILIAN NAJDORF"}</div>
            </div>

            {/* Card 2: Sci-Fi & Literature */}
            <div className="bg-stitch-surface-bright border-[3px] border-stitch-on-background p-5 shadow-[6px_6px_0px_0px_#1b1c1a] flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
              <div>
                <div className="flex items-center justify-between border-b-[2px] border-stitch-on-background pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📚</span>
                    <span className="font-code-sm text-code-sm font-bold uppercase text-stitch-on-background">SCI-FI &amp; PHILOSOPHY</span>
                  </div>
                  <span className="bg-stitch-surface-variant px-2 py-0.5 border border-stitch-on-background font-code-sm text-code-sm font-bold">LIT_INDEX</span>
                </div>
                <div className="w-full h-36 bg-stitch-surface-container mb-4 border-[2px] border-stitch-on-background overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover grayscale contrast-125"
                    alt="Editorial stack of vintage cyberpunk paperback books including Neuromancer and Foundation on an industrial concrete desk."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdmt7j4YXM6lFJUlIxpp9kWSF-1vl_ELFbK43CqWGnA0QaF2mlUgAm5vbz1Wqh50qBmrldDIAAYG-U7pODHgJG-3Hf21Iob2jlw3i1ESowvTYJaw93nsFy3eJKedpekrx7xTWV_hs5wNyQoFVSGHvD8WOTI7edAZuEdpGp88347FeaSmnRBk7InseYswD0JBbv5YbA71HO9PrLEoWxcXna1qvYHTQd6ijMirHejuAIXPV7VGhbVyc"
                  />
                  <div className="absolute bottom-2 left-2 bg-stitch-on-background text-stitch-primary-container font-code-sm text-code-sm px-2 py-0.5 font-bold">SYS_THEORY</div>
                </div>
                <p className="font-body-md text-body-md text-stitch-on-surface-variant leading-relaxed">
                  Voracious consumer of speculative systems fiction: Gibson, Stephenson, Asimov, alongside architectural epistemology (Christopher Alexander) and cybernetic theory (Norbert Wiener).
                </p>
              </div>
              <div className="mt-4 pt-3 border-t-[1.5px] border-stitch-outline-variant font-code-sm text-code-sm text-stitch-primary font-bold uppercase">{"// RE-READING: &apos;SNOW CRASH&apos;"}</div>
            </div>

            {/* Card 3: Vinyl & Audio */}
            <div className="bg-stitch-surface-bright border-[3px] border-stitch-on-background p-5 shadow-[6px_6px_0px_0px_#1b1c1a] flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
              <div>
                <div className="flex items-center justify-between border-b-[2px] border-stitch-on-background pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🎧</span>
                    <span className="font-code-sm text-code-sm font-bold uppercase text-stitch-on-background">ELECTRONIC &amp; VINYL</span>
                  </div>
                  <span className="bg-stitch-primary-container px-2 py-0.5 border border-stitch-on-background font-code-sm text-code-sm font-bold">ANALOG</span>
                </div>
                <div className="w-full h-36 bg-stitch-surface-container mb-4 border-[2px] border-stitch-on-background p-3 flex flex-col justify-between bg-stitch-on-background text-stitch-surface">
                  <div className="flex items-center justify-between font-code-sm text-code-sm text-stitch-primary-container">
                    <span>FREQUENCY: 432Hz</span>
                    <span className="animate-pulse">REC ●</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-16 w-full">
                    <div className="flex-1 bg-stitch-primary-container h-[45%]" />
                    <div className="flex-1 bg-stitch-surface h-[80%]" />
                    <div className="flex-1 bg-stitch-primary-container h-[65%]" />
                    <div className="flex-1 bg-stitch-surface h-[95%]" />
                    <div className="flex-1 bg-stitch-primary-container h-[35%]" />
                    <div className="flex-1 bg-stitch-surface h-[75%]" />
                    <div className="flex-1 bg-stitch-primary-container h-[55%]" />
                    <div className="flex-1 bg-stitch-surface h-[90%]" />
                    <div className="flex-1 bg-stitch-primary-container h-[40%]" />
                  </div>
                  <div className="font-code-sm text-code-sm text-stitch-surface-container-high truncate">NOW_SPINNING: APEX TWIN / SELECTED AMBIENT</div>
                </div>
                <p className="font-body-md text-body-md text-stitch-on-surface-variant leading-relaxed">
                  Deep focus soundscapes, modular synthesizer patching, and vintage turntable mechanics. Sound as an acoustic feedback loop for extended deep-work flow states.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t-[1.5px] border-stitch-outline-variant font-code-sm text-code-sm text-stitch-primary font-bold uppercase">{"// GENRE: IDM / AMBIENT TECHNO"}</div>
            </div>

            {/* Card 4: Espresso */}
            <div className="bg-stitch-surface-bright border-[3px] border-stitch-on-background p-5 shadow-[6px_6px_0px_0px_#1b1c1a] flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
              <div>
                <div className="flex items-center justify-between border-b-[2px] border-stitch-on-background pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">☕</span>
                    <span className="font-code-sm text-code-sm font-bold uppercase text-stitch-on-background">THIRD-WAVE ESPRESSO</span>
                  </div>
                  <span className="bg-stitch-surface-variant px-2 py-0.5 border border-stitch-on-background font-code-sm text-code-sm font-bold">9 BAR</span>
                </div>
                <div className="bg-stitch-surface-container p-4 border-[2px] border-stitch-on-background mb-4">
                  <div className="grid grid-cols-3 gap-2 text-center font-code-sm text-code-sm">
                    <div className="border-[1.5px] border-stitch-on-background p-2 bg-stitch-surface-bright">
                      <span className="text-stitch-on-surface-variant block">DOSE</span>
                      <span className="font-bold text-stitch-on-background">18.5g</span>
                    </div>
                    <div className="border-[1.5px] border-stitch-on-background p-2 bg-stitch-surface-bright">
                      <span className="text-stitch-on-surface-variant block">YIELD</span>
                      <span className="font-bold text-stitch-on-background">38.0g</span>
                    </div>
                    <div className="border-[1.5px] border-stitch-on-background p-2 bg-stitch-primary-container">
                      <span className="text-stitch-on-background block">TIME</span>
                      <span className="font-bold text-stitch-on-background">27s</span>
                    </div>
                  </div>
                </div>
                <p className="font-body-md text-body-md text-stitch-on-surface-variant leading-relaxed">
                  Treating extractions like thermodynamics experiments. Dialing in grind particle distributions, pressure profiling on manual lever machines, and chasing natural Ethiopian florals.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t-[1.5px] border-stitch-outline-variant font-code-sm text-code-sm text-stitch-primary font-bold uppercase">{"// EXTRACTION RATIO: 1:2.05 OPTIMAL"}</div>
            </div>

            {/* Card 5: Hardware & Keyboards */}
            <div className="lg:col-span-2 bg-stitch-surface-bright border-[3px] border-stitch-on-background p-5 shadow-[6px_6px_0px_0px_#1b1c1a] flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
              <div>
                <div className="flex items-center justify-between border-b-[2px] border-stitch-on-background pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🛠️</span>
                    <span className="font-code-sm text-code-sm font-bold uppercase text-stitch-on-background">HARDWARE &amp; MECHANICAL KEYBOARDS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-stitch-primary-container px-2 py-0.5 border border-stitch-on-background font-code-sm text-code-sm font-bold">SOLDERING</span>
                    <span className="bg-stitch-on-background text-stitch-surface px-2 py-0.5 font-code-sm text-code-sm font-bold">QMK/VIA</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="border-[2px] border-stitch-on-background bg-stitch-surface-container p-3 flex flex-col justify-between">
                    <span className="font-code-sm text-code-sm font-bold uppercase text-stitch-primary mb-1">{"// DAILY DRIVER BUILD"}</span>
                    <p className="font-body-sm text-body-sm text-stitch-on-surface mb-2">
                      Custom milled 60% brass plate, Lubed Gateron Oil Kings, GMK dual-shot keycaps, hand-flashed RP2040 microcontroller firmware with custom layers.
                    </p>
                    <span className="font-code-sm text-code-sm text-stitch-on-surface-variant">TACTILITY: LINEAR / 55g ACTUATION</span>
                  </div>
                  <div className="border-[2px] border-stitch-on-background bg-stitch-surface-container p-3 flex flex-col justify-between">
                    <span className="font-code-sm text-code-sm font-bold uppercase text-stitch-primary mb-1">{"// PHYSICAL EMBEDDED"}</span>
                    <p className="font-body-sm text-body-sm text-stitch-on-surface mb-2">
                      Soldering microcontrollers, 3D printing custom enclosure prototypes in PLA+, designing discrete desktop peripherals that interface with custom daemon scripts.
                    </p>
                    <span className="font-code-sm text-code-sm text-stitch-on-surface-variant">CAD: FUSION 360 / ONYX PRINTER</span>
                  </div>
                </div>
                <p className="font-body-md text-body-md text-stitch-on-surface-variant leading-relaxed">
                  The keyboard is the primary interface between the brain and machine. Tuning its acoustics, spring resistance, and layout creates an intimate, tactile communion with the code itself.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t-[1.5px] border-stitch-outline-variant flex items-center justify-between font-code-sm text-code-sm">
                <span className="text-stitch-primary font-bold uppercase">{"// HARDWARE BENCH: ACTIVE"}</span>
                <span className="text-stitch-on-surface-variant uppercase">SOLDER: LEAD-FREE KESTER 63/37</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: BOTTOM CTA BANNER */}
        <section className="w-full max-w-7xl mx-auto px-5 lg:px-12 pt-10 pb-6">
          <div className="relative bg-stitch-primary-container border-[3px] border-stitch-on-background p-8 md:p-12 shadow-[8px_8px_0px_0px_#1b1c1a] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 self-start bg-stitch-on-background text-stitch-primary-container px-3 py-1 font-code-sm text-code-sm uppercase font-bold">NEXT DESTINATION</div>
              <h2 className="font-display-lg text-display-lg uppercase font-bold text-stitch-on-background leading-none">CURIOUS WHAT I CAN BUILD?</h2>
              <p className="font-body-lg text-body-lg text-stitch-on-background font-medium">
                Talk is cheap. Inspect production deployments, verified open-source repositories, and autonomous system prototypes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto flex-shrink-0">
              <a className="inline-flex items-center justify-center gap-3 bg-stitch-on-background text-stitch-primary-container px-6 py-4 font-code-lg text-code-lg uppercase font-bold border-[2.5px] border-stitch-on-background shadow-[4px_4px_0px_0px_#faf9f5] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#faf9f5] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all text-center" href="/projects">
                <span>CHECK OUT THE CODE</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </a>
              <a className="inline-flex items-center justify-center gap-2 bg-stitch-surface-bright text-stitch-on-background px-6 py-4 font-code-lg text-code-lg uppercase font-bold border-[2.5px] border-stitch-on-background shadow-[4px_4px_0px_0px_#1b1c1a] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#1b1c1a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all text-center" href="/contact">
                <span>INITIATE CONTACT</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

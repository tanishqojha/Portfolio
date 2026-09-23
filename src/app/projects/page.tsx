"use client";

import { useState } from "react";

const filters = [
  { key: "all", label: "[ ALL (8) ]" },
  { key: "ai-ml", label: "[ AI / ML (3) ]" },
  { key: "web-platforms", label: "[ WEB PLATFORMS (3) ]" },
  { key: "experimental", label: "[ EXPERIMENTAL & OPEN SOURCE (2) ]" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const cardClass = (category: string) =>
    activeFilter === "all" || activeFilter === category ? "flex" : "hidden";

  return (
    <main className="w-full pt-28 flex-1 bg-stitch-background">
      <div className="flex flex-col w-full">
        {/* SECTION 1: HEADER & SYSTEM TELEMETRY */}
        <section className="w-full border-b-[2.5px] border-stitch-on-background bg-stitch-surface-bright px-5 lg:px-12 py-10">
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-label-caps text-label-caps uppercase text-stitch-on-surface-variant">
                <span className="inline-block w-2.5 h-2.5 bg-stitch-primary-container border-[1.5px] border-stitch-on-background" />
                <span>INDEX / ARCHIVE // 02 WANNA HIRE ME?</span>
              </div>
              <div className="flex items-center gap-2 bg-stitch-surface-container border-[1.5px] border-stitch-on-background px-3 py-1 shadow-[2px_2px_0px_0px_#1b1c1a]">
                <span className="inline-block w-2 h-2 rounded-full bg-stitch-primary-container animate-ping" />
                <span className="font-code-sm text-code-sm text-stitch-on-background font-bold tracking-wider">INDEX_REFRESHED: OCT 2024</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-display-xl text-display-xl uppercase tracking-tighter text-stitch-on-background leading-none">
                THINGS I&apos;VE BUILT<span className="text-stitch-primary tracking-normal">.</span>
              </h1>
              <p className="font-headline-md text-headline-md text-stitch-on-surface-variant max-w-3xl">
                Some serious. Some experimental. All engineered to dismantle friction and handle ruthless scale.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-[2.5px] border-stitch-on-background bg-stitch-surface shadow-[4px_4px_0px_0px_#1b1c1a] mt-4">
              <div className="p-4 border-b-[2.5px] md:border-b-0 md:border-r-[2.5px] border-stitch-on-background flex flex-col justify-between bg-stitch-surface-bright">
                <span className="font-label-caps text-label-caps uppercase text-stitch-secondary">METRIC // 01</span>
                <div className="flex items-baseline justify-between mt-2">
                  <span className="font-code-lg text-code-lg text-stitch-on-surface">ACTIVE REPOSITORIES</span>
                  <span className="font-headline-lg text-headline-lg text-stitch-on-background">24</span>
                </div>
              </div>
              <div className="p-4 border-b-[2.5px] md:border-b-0 md:border-r-[2.5px] border-stitch-on-background flex flex-col justify-between bg-stitch-surface-bright">
                <span className="font-label-caps text-label-caps uppercase text-stitch-secondary">METRIC // 02</span>
                <div className="flex items-baseline justify-between mt-2">
                  <span className="font-code-lg text-code-lg text-stitch-on-surface">PRODUCTION SHIPPED</span>
                  <span className="font-headline-lg text-headline-lg text-stitch-primary">09</span>
                </div>
              </div>
              <div className="p-4 flex flex-col justify-between bg-stitch-primary-container/20">
                <span className="font-label-caps text-label-caps uppercase text-stitch-on-surface-variant font-bold">METRIC // 03</span>
                <div className="flex items-baseline justify-between mt-2">
                  <span className="font-code-lg text-code-lg text-stitch-on-surface">TOTAL REACH / USERS</span>
                  <span className="font-headline-lg text-headline-lg text-stitch-on-background">45K+</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: INTERACTIVE FILTER CONTROL BAR */}
        <section className="w-full bg-stitch-surface-container-low border-b-[2.5px] border-stitch-on-background px-5 lg:px-12 py-4 sticky top-20 z-40">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-stitch-on-background">tune</span>
              <span className="font-label-caps text-label-caps uppercase text-stitch-on-background">TAG_FILTER:</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`px-4 py-2 border-[2px] border-stitch-on-background font-code-sm text-code-sm font-bold uppercase transition-all shadow-[3px_3px_0px_0px_#1b1c1a] ${
                    activeFilter === f.key
                      ? "bg-stitch-primary-container text-stitch-on-background"
                      : "bg-stitch-surface-bright text-stitch-on-surface hover:bg-stitch-surface-container-highest"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: EDITORIAL MASONRY / BENTO GRID */}
        <section className="w-full px-5 lg:px-12 py-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* PROJECT 01: HERO LARGE FEATURE */}
            <article className={`${cardClass("ai-ml")} lg:col-span-12 flex-col border-[2.5px] border-stitch-on-background bg-stitch-surface-bright shadow-[6px_6px_0px_0px_#1b1c1a] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_#1b1c1a]`}>
              <div className="bg-stitch-surface-container-high border-b-[2.5px] border-stitch-on-background px-4 py-2.5 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full border-[1.5px] border-stitch-on-background bg-stitch-surface-bright inline-block" />
                    <span className="w-3 h-3 rounded-full border-[1.5px] border-stitch-on-background bg-stitch-surface-bright inline-block" />
                    <span className="w-3 h-3 rounded-full border-[1.5px] border-stitch-on-background bg-stitch-surface-bright inline-block" />
                  </div>
                  <span className="font-code-sm text-code-sm text-stitch-on-surface font-bold tracking-tight">~/sys/projects/synapse-ai.daemon</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-label-caps text-label-caps uppercase bg-stitch-primary-container px-2 py-0.5 border-[1.5px] border-stitch-on-background text-stitch-on-background font-bold">LIVE IN PRODUCTION</span>
                  <span className="font-label-caps text-label-caps text-stitch-secondary font-bold">YEAR: 2024</span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-7 border-b-[2.5px] lg:border-b-0 lg:border-r-[2.5px] border-stitch-on-background p-6 md:p-8 flex flex-col justify-between bg-stitch-surface-container-low">
                  <div className="relative border-[2.5px] border-stitch-on-background bg-stitch-on-background p-4 shadow-[4px_4px_0px_0px_#ccff00] overflow-hidden">
                    <img
                      className="w-full h-80 object-cover object-center grayscale contrast-125 border border-stitch-outline-variant"
                      alt="Technical dashboard terminal showing high-density neural network graphs, citation synthesis trees, and telemetry console with monochrome aesthetics and acid lime vector highlights"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYYJ1u5gMNXWBk1fEvCEYci0fGEBJ4pI9AfKqDpt_VJoXcomxbPijIL2qkfy4Ev_2sbldZRSMG5eP_NuGhreI0KIpnTImGObpmGxOgDdDsX3CqAx7Q_gMbb_3nT0_aT439tEz_JyXUhmiJU7phHFqPgfYxwgtiPccLjEsIa3KoKaeeg7hVr5yeV7husnV2hVJAbwgCY-AcWeWwgvYJGAeqBPeLfCIBCuJzWHp7FUNiBjiSYCOP1fo"
                    />
                    <div className="absolute bottom-6 left-6 bg-stitch-on-background/95 border-[1.5px] border-stitch-primary-container p-3 max-w-sm backdrop-blur">
                      <div className="font-label-caps text-label-caps text-stitch-primary-container uppercase font-bold mb-1">LATENCY &amp; FIDELITY MONITOR</div>
                      <div className="font-code-sm text-code-sm text-stitch-surface">RETRIEVAL FIDELITY: 94.2% (±0.4)</div>
                      <div className="font-code-sm text-code-sm text-stitch-surface">GRAPH NODES GENERATED: 1,842,900</div>
                    </div>
                  </div>
                  <div className="mt-6 border-[2px] border-stitch-on-background bg-stitch-surface p-4 shadow-[2px_2px_0px_0px_#1b1c1a]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-label-caps text-label-caps uppercase text-stitch-on-surface-variant font-bold">EXECUTION PIPELINE PIPES</span>
                      <span className="font-code-sm text-code-sm text-stitch-primary font-bold">SYNC: OK</span>
                    </div>
                    <div className="flex items-center justify-between text-center overflow-x-auto gap-2 py-1">
                      <span className="border-[1.5px] border-stitch-on-background bg-stitch-surface-bright px-3 py-1 font-code-sm text-code-sm flex-shrink-0">PDF INGEST</span>
                      <span className="font-headline-sm text-headline-sm text-stitch-on-surface-variant">→</span>
                      <span className="border-[1.5px] border-stitch-on-background bg-stitch-surface-bright px-3 py-1 font-code-sm text-code-sm flex-shrink-0">OCR &amp; LAYOUT</span>
                      <span className="font-headline-sm text-headline-sm text-stitch-on-surface-variant">→</span>
                      <span className="border-[1.5px] border-stitch-on-background bg-stitch-primary-container text-stitch-on-background font-bold px-3 py-1 font-code-sm text-code-sm flex-shrink-0">PINECONE RAG</span>
                      <span className="font-headline-sm text-headline-sm text-stitch-on-surface-variant">→</span>
                      <span className="border-[1.5px] border-stitch-on-background bg-stitch-surface-bright px-3 py-1 font-code-sm text-code-sm flex-shrink-0">SYNTHESIS</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between bg-stitch-surface-bright">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 bg-stitch-on-background text-stitch-surface font-code-sm text-code-sm font-bold uppercase">AI / ML AGENT</span>
                      <span className="font-label-caps text-label-caps uppercase text-stitch-secondary">ARCH_ID: #001</span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg uppercase text-stitch-on-background leading-tight">SynapseAI — Context-Aware Autonomous Research Agent</h2>
                    <div className="p-4 bg-stitch-surface-container border-l-4 border-stitch-primary">
                      <span className="font-label-caps text-label-caps uppercase text-stitch-secondary block mb-1">PROBLEM SOLVED:</span>
                      <p className="font-body-md text-body-md text-stitch-on-surface">
                        Researchers spend 40% of their operational hours synthesizing cross-domain academic PDFs. Synapse auto-ingests citations, decomposes multi-modal tables, maps conflict vectors, and generates self-audited synthesis trees.
                      </p>
                    </div>
                    <div>
                      <span className="font-label-caps text-label-caps uppercase text-stitch-on-surface-variant block mb-2">INFRASTRUCTURE &amp; STACK</span>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="border-[1.5px] border-stitch-on-background bg-stitch-surface-container-high px-2 py-1 font-code-sm text-code-sm text-stitch-on-surface">Python</span>
                        <span className="border-[1.5px] border-stitch-on-background bg-stitch-surface-container-high px-2 py-1 font-code-sm text-code-sm text-stitch-on-surface">PyTorch</span>
                        <span className="border-[1.5px] border-stitch-on-background bg-stitch-surface-container-high px-2 py-1 font-code-sm text-code-sm text-stitch-on-surface">LangChain</span>
                        <span className="border-[1.5px] border-stitch-on-background bg-stitch-surface-container-high px-2 py-1 font-code-sm text-code-sm text-stitch-on-surface">FastAPI</span>
                        <span className="border-[1.5px] border-stitch-on-background bg-stitch-surface-container-high px-2 py-1 font-code-sm text-code-sm text-stitch-on-surface">Next.js</span>
                        <span className="border-[1.5px] border-stitch-on-background bg-stitch-surface-container-high px-2 py-1 font-code-sm text-code-sm text-stitch-on-surface">Pinecone</span>
                      </div>
                    </div>
                    <div className="border-[2px] border-stitch-on-background bg-stitch-primary-container p-4 shadow-[3px_3px_0px_0px_#1b1c1a]">
                      <div className="font-label-caps text-label-caps uppercase text-stitch-on-surface-variant font-bold">VERIFIED PRODUCTION IMPACT</div>
                      <div className="font-headline-sm text-headline-sm text-stitch-on-background mt-1">Processed 85,000+ academic papers with a 94.2% factual retrieval score.</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 pt-6 mt-6 border-t-[2px] border-stitch-surface-variant">
                    <a className="flex items-center gap-2 bg-stitch-primary-container text-stitch-on-background px-5 py-3 border-[2.5px] border-stitch-on-background font-code-sm text-code-sm font-bold uppercase shadow-[4px_4px_0px_0px_#1b1c1a] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#1b1c1a] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all" href="#">
                      <span>LIVE DEMO</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                    </a>
                    <a className="flex items-center gap-2 bg-stitch-surface-bright text-stitch-on-surface px-5 py-3 border-[2.5px] border-stitch-on-background font-code-sm text-code-sm font-bold uppercase shadow-[4px_4px_0px_0px_#1b1c1a] hover:bg-stitch-on-background hover:text-stitch-surface transition-all" href="#">
                      <span>GITHUB REPO</span>
                      <span className="material-symbols-outlined text-[18px]">terminal</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* PROJECT 02 */}
            <article className={`${cardClass("web-platforms")} lg:col-span-6 flex-col justify-between border-[2.5px] border-stitch-on-background bg-stitch-surface-bright shadow-[6px_6px_0px_0px_#1b1c1a] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_#1b1c1a]`}>
              <div>
                <div className="bg-stitch-surface-container-high border-b-[2.5px] border-stitch-on-background px-4 py-2 flex items-center justify-between">
                  <span className="font-code-sm text-code-sm font-bold text-stitch-on-surface">~/sys/hyperdraft.io</span>
                  <div className="flex items-center gap-2">
                    <span className="font-label-caps text-label-caps uppercase bg-stitch-surface border border-stitch-on-background px-2 py-0.5">BETA</span>
                    <span className="font-label-caps text-label-caps text-stitch-secondary">2024</span>
                  </div>
                </div>
                <div className="border-b-[2.5px] border-stitch-on-background bg-stitch-surface-container-low p-4">
                  <img
                    className="w-full h-48 object-cover border-[1.5px] border-stitch-on-background grayscale hover:grayscale-0 transition-all"
                    alt="Editorial interface screenshot of HyperDraft markdown editor featuring bidirectional link graphs, split-pane syntax highlighting in dark mode, and latency telemetry graphs"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgGIbAjRfkdvrRqP0e2bq2wAMvV70gwJpzCb7tcxue0_O5ncs6twMtAb2Lyjxx1KH8N4YNXqU_xv6eA_DhraLyvPfyU9anPEXIn23WQdUbtXQldZfDgPSU_fYxQ_2P5tHO45xlYegXepMhwRuXMk2UIi6aX4JuMuTzztxjxYQQakkIA2y-leRAfYdSV2wo0B4tOAsxVXFURsDPKb1MuQtcru1Bl2Lt-sBgPuTiJ2qUkL-bF406hfQ"
                  />
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="border border-stitch-on-background bg-stitch-surface-container px-2 py-0.5 font-label-caps text-label-caps uppercase text-stitch-on-surface font-bold">WEB PLATFORM</span>
                    <span className="font-label-caps text-label-caps uppercase text-stitch-secondary">LOCAL-FIRST COLLAB</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md uppercase text-stitch-on-background">HyperDraft — Collaborative Markdown with Local-First Sync</h3>
                  <p className="font-body-md text-body-md text-stitch-on-surface">
                    Engineered a deterministic CRDT engine enabling friction-free concurrent editing without cloud lock-in. Preserves data integrity through offline SQLite merges.
                  </p>
                  <div className="bg-stitch-surface-container border-[1.5px] border-stitch-on-background p-3 flex items-center justify-between">
                    <span className="font-label-caps text-label-caps uppercase text-stitch-on-surface-variant font-bold">SYNC PERFORMANCE</span>
                    <span className="font-code-sm text-code-sm text-stitch-on-background font-bold bg-stitch-primary-container px-2 py-0.5 border border-stitch-on-background">SUB-15MS WORLDWIDE</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="border border-stitch-on-background bg-stitch-surface-bright px-2 py-0.5 font-code-sm text-code-sm text-stitch-on-surface">TypeScript</span>
                    <span className="border border-stitch-on-background bg-stitch-surface-bright px-2 py-0.5 font-code-sm text-code-sm text-stitch-on-surface">Yjs</span>
                    <span className="border border-stitch-on-background bg-stitch-surface-bright px-2 py-0.5 font-code-sm text-code-sm text-stitch-on-surface">WebSockets</span>
                    <span className="border border-stitch-on-background bg-stitch-surface-bright px-2 py-0.5 font-code-sm text-code-sm text-stitch-on-surface">Rust Engine</span>
                    <span className="border border-stitch-on-background bg-stitch-surface-bright px-2 py-0.5 font-code-sm text-code-sm text-stitch-on-surface">TailwindCSS</span>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t-[2.5px] border-stitch-on-background bg-stitch-surface flex items-center justify-between">
                <a className="font-code-sm text-code-sm font-bold uppercase text-stitch-on-background flex items-center gap-1 hover:text-stitch-primary transition-colors" href="#">
                  <span>INSPECT DEPLOYMENT</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </a>
                <span className="font-label-caps text-label-caps text-stitch-secondary font-mono">STATUS // STABLE</span>
              </div>
            </article>

            {/* PROJECT 03 */}
            <article className={`${cardClass("experimental")} lg:col-span-6 flex-col justify-between border-[2.5px] border-stitch-on-background bg-stitch-surface-bright shadow-[6px_6px_0px_0px_#1b1c1a] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_#1b1c1a]`}>
              <div>
                <div className="bg-stitch-surface-container-high border-b-[2.5px] border-stitch-on-background px-4 py-2 flex items-center justify-between">
                  <span className="font-code-sm text-code-sm font-bold text-stitch-on-surface">~/sys/kroma-3d.glsl</span>
                  <div className="flex items-center gap-2">
                    <span className="font-label-caps text-label-caps uppercase bg-stitch-primary-container border border-stitch-on-background px-2 py-0.5 text-stitch-on-background font-bold">OPEN SOURCE</span>
                    <span className="font-label-caps text-label-caps text-stitch-secondary">2023</span>
                  </div>
                </div>
                <div className="border-b-[2.5px] border-stitch-on-background bg-stitch-surface-container-low p-4">
                  <img
                    className="w-full h-48 object-cover border-[1.5px] border-stitch-on-background grayscale hover:grayscale-0 transition-all"
                    alt="Interactive generative wireframe render displaying procedural audio waveforms and complex GLSL raymarching shaders in striking lime green and deep black neo-brutalist styling"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4Q78yv0XiADEO-eHcA8kuvFn7DkurcBbrg13s3kLvRGL_7I3J4V_XyGaXb_lRXbWdcKcPihWN_KY8OCE3N8pSfwPnCmj5mAPC5Q7ArxsIwzz-BONbTxxBn53D9q_79BI1xVzBENsd-AvwPtotVgfODEBINIit-7tR5zA0yUdvbzvvfkGwzTybV135Peboihn1LWkwQED8x4mcx02feI4BRUkyqME4LqM4YWZpQC_qcocpbXRcOyw"
                  />
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="border border-stitch-on-background bg-stitch-surface-container px-2 py-0.5 font-label-caps text-label-caps uppercase text-stitch-on-surface font-bold">EXPERIMENTAL</span>
                    <span className="font-label-caps text-label-caps uppercase text-stitch-secondary">AUDIOVISUAL COMPUTE</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md uppercase text-stitch-on-background">Kroma 3D — Real-Time Shader &amp; Procedural Audio Engine</h3>
                  <p className="font-body-md text-body-md text-stitch-on-surface">
                    High-throughput GPU compute experiment synthesizing live audio harmonics into volumetric fractals via custom WebGL vertex and fragment shaders.
                  </p>
                  <div className="bg-stitch-surface-container border-[1.5px] border-stitch-on-background p-3 flex items-center justify-between">
                    <span className="font-label-caps text-label-caps uppercase text-stitch-on-surface-variant font-bold">COMMUNITY RECEPTION</span>
                    <span className="font-code-sm text-code-sm text-stitch-on-background font-bold bg-stitch-surface-bright px-2 py-0.5 border border-stitch-on-background flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-stitch-primary">star</span>
                      1.4K GITHUB STARS
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="border border-stitch-on-background bg-stitch-surface-bright px-2 py-0.5 font-code-sm text-code-sm text-stitch-on-surface">WebGL</span>
                    <span className="border border-stitch-on-background bg-stitch-surface-bright px-2 py-0.5 font-code-sm text-code-sm text-stitch-on-surface">Three.js</span>
                    <span className="border border-stitch-on-background bg-stitch-surface-bright px-2 py-0.5 font-code-sm text-code-sm text-stitch-on-surface">Web Audio API</span>
                    <span className="border border-stitch-on-background bg-stitch-surface-bright px-2 py-0.5 font-code-sm text-code-sm text-stitch-on-surface">GLSL Shaders</span>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t-[2.5px] border-stitch-on-background bg-stitch-surface flex items-center justify-between">
                <a className="font-code-sm text-code-sm font-bold uppercase text-stitch-on-background flex items-center gap-1 hover:text-stitch-primary transition-colors" href="#">
                  <span>EXPLORE SHADERS</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </a>
                <span className="font-label-caps text-label-caps text-stitch-secondary font-mono">PUBLIC / MIT</span>
              </div>
            </article>

            {/* PROJECT 04 */}
            <article className={`${cardClass("ai-ml")} lg:col-span-6 flex-col justify-between border-[2.5px] border-stitch-on-background bg-stitch-surface-bright shadow-[4px_4px_0px_0px_#1b1c1a] p-6 transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#1b1c1a]`}>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="border border-stitch-on-background bg-stitch-surface-container px-2 py-0.5 font-label-caps text-label-caps uppercase text-stitch-on-surface font-bold">AI / ML PIPELINE</span>
                  <span className="font-label-caps text-label-caps text-stitch-secondary">YEAR: 2024</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm uppercase text-stitch-on-background">AgenticFlow — Low-Code LLM Pipeline Visualizer</h3>
                <p className="font-body-sm text-body-sm text-stitch-on-surface-variant">
                  Interactive node-based canvas for constructing multi-agent reinforcement loops, routing strategies, and fallback state machines.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t-[1.5px] border-stitch-surface-variant flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  <span className="border border-stitch-on-background bg-stitch-surface px-2 py-0.5 font-code-sm text-code-sm">React Flow</span>
                  <span className="border border-stitch-on-background bg-stitch-surface px-2 py-0.5 font-code-sm text-code-sm">Python</span>
                  <span className="border border-stitch-on-background bg-stitch-surface px-2 py-0.5 font-code-sm text-code-sm">Supabase</span>
                </div>
                <a className="p-2 border-[1.5px] border-stitch-on-background bg-stitch-surface hover:bg-stitch-primary-container transition-colors" href="#">
                  <span className="material-symbols-outlined text-[18px]">north_east</span>
                </a>
              </div>
            </article>

            {/* PROJECT 05 */}
            <article className={`${cardClass("web-platforms")} lg:col-span-6 flex-col justify-between border-[2.5px] border-stitch-on-background bg-stitch-surface-bright shadow-[4px_4px_0px_0px_#1b1c1a] p-6 transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#1b1c1a]`}>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="border border-stitch-on-background bg-stitch-surface-container px-2 py-0.5 font-label-caps text-label-caps uppercase text-stitch-on-surface font-bold">DEVTOOLS // CLI</span>
                  <span className="font-label-caps text-label-caps text-stitch-secondary">YEAR: 2023</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm uppercase text-stitch-on-background">OmniCLI — Terminal Utility for Instant Cloud Deployments</h3>
                <p className="font-body-sm text-body-sm text-stitch-on-surface-variant">
                  Zero-configuration single-binary CLI tool for scaffolding ephemeral dev clusters, container sandboxing, and SSL tunnel provisioning in under 3 seconds.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t-[1.5px] border-stitch-surface-variant flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  <span className="border border-stitch-on-background bg-stitch-surface px-2 py-0.5 font-code-sm text-code-sm">Go (Golang)</span>
                  <span className="border border-stitch-on-background bg-stitch-surface px-2 py-0.5 font-code-sm text-code-sm">Cobra</span>
                  <span className="border border-stitch-on-background bg-stitch-surface px-2 py-0.5 font-code-sm text-code-sm">Docker SDK</span>
                </div>
                <a className="p-2 border-[1.5px] border-stitch-on-background bg-stitch-surface hover:bg-stitch-primary-container transition-colors" href="#">
                  <span className="material-symbols-outlined text-[18px]">north_east</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* SECTION 4: CLIENT / COLLABORATION PITCH BANNER */}
        <section className="w-full px-5 lg:px-12 pb-10">
          <div className="max-w-7xl mx-auto border-[3px] border-stitch-on-background bg-stitch-surface-container-lowest shadow-[8px_8px_0px_0px_#1b1c1a] overflow-hidden">
            <div className="bg-stitch-primary-container border-b-[3px] border-stitch-on-background px-6 py-3 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 bg-stitch-on-background inline-block" />
                <span className="font-code-sm text-code-sm font-bold uppercase tracking-wider text-stitch-on-background">COMMISSION &amp; CONTRACT COURIER // OPEN CHANNEL</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-stitch-primary animate-pulse" />
                <span className="font-label-caps text-label-caps uppercase text-stitch-on-surface-variant font-bold">NEXT OPENING: IMMEDIATE</span>
              </div>
            </div>
            <div className="p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-stitch-surface-bright">
              <div className="lg:col-span-8 flex flex-col gap-4">
                <span className="font-label-caps text-label-caps uppercase text-stitch-primary font-bold tracking-widest">{"// CUSTOM PRODUCT INITIATION"}</span>
                <h2 className="font-display-lg text-display-lg uppercase tracking-tight text-stitch-on-background leading-none">HAVE A CUSTOM PRODUCT IN MIND?</h2>
                <p className="font-body-lg text-body-lg text-stitch-on-surface-variant max-w-2xl mt-2">
                  I take projects from whiteboard napkins to production deployment in weeks, not quarters. High fault tolerance, deterministic code, and tactile interfaces built to outlast trends.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="border-[1.5px] border-stitch-on-background bg-stitch-surface-container-high px-3 py-1 font-label-caps text-label-caps uppercase font-bold text-stitch-on-surface">FIXED-PRICE SPRINTS</span>
                  <span className="border-[1.5px] border-stitch-on-background bg-stitch-surface-container-high px-3 py-1 font-label-caps text-label-caps uppercase font-bold text-stitch-on-surface">FULL ARCHITECTURE OWNERSHIP</span>
                  <span className="border-[1.5px] border-stitch-on-background bg-stitch-surface-container-high px-3 py-1 font-label-caps text-label-caps uppercase font-bold text-stitch-on-surface">AI INTEGRATION &amp; AUDITS</span>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
                <a className="inline-flex items-center justify-center gap-3 bg-stitch-primary-container text-stitch-on-background border-[3px] border-stitch-on-background px-8 py-5 font-code-lg text-code-lg font-bold uppercase shadow-[6px_6px_0px_0px_#1b1c1a] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#1b1c1a] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all w-full sm:w-auto text-center" href="/contact">
                  <span>START A PROJECT WITH ME</span>
                  <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
                </a>
                <span className="font-label-caps text-label-caps uppercase text-stitch-secondary mt-3">TYPICAL RESPONSE TIME &lt; 12 HOURS</span>
              </div>
            </div>
            <div className="h-4 w-full bg-[repeating-linear-gradient(45deg,#1b1c1a,#1b1c1a_10px,#ccff00_10px,#ccff00_20px)] border-t-[2.5px] border-stitch-on-background" />
          </div>
        </section>
      </div>
    </main>
  );
}

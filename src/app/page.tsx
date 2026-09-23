export default function Home() {
  return (
    <main className="w-full min-h-screen bg-stitch-surface flex items-center pt-28 pb-12">
      <div className="flex flex-col w-full">
        <section className="w-full max-w-7xl mx-auto px-4 lg:px-6 pt-6 pb-10">
          {/* Breadcrumb & Routing Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 mb-6 border-b-[3px] border-[#0a0a0a]">
            <div className="flex items-center flex-wrap gap-1">
              <span className="bg-[#0a0a0a] text-[#ccff00] font-code-sm text-code-sm px-2 py-1 font-bold tracking-widest uppercase">
                [ SYSTEM ROUTER // V3.2 ]
              </span>
              <span className="bg-stitch-surface-container-high text-stitch-on-surface font-code-sm text-code-sm px-2 py-1 border-[2.5px] border-[#0a0a0a] font-bold uppercase shadow-[2px_2px_0px_#0a0a0a]">
                PROTOCOL: 03 ENTRY VECTORS AVAILABLE
              </span>
            </div>
            <div className="flex items-center gap-2 font-code-sm text-code-sm text-stitch-secondary">
              <span className="inline-block w-2.5 h-2.5 bg-[#ccff00] border-[1.5px] border-[#0a0a0a] animate-pulse" />
              <span className="font-bold tracking-wider text-stitch-on-surface">ROUTING ENGINE: READY</span>
              <span className="text-stitch-outline">/</span>
              <span className="text-stitch-on-surface-variant">LOC: 37.7749° N, 122.4194° W</span>
            </div>
          </div>

          {/* Main CTA Prompt Section */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-[#506600] text-[20px]">near_me</span>
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-[#506600] font-bold">
                  CHOOSE YOUR PATH. NO WRONG ANSWERS.
                </span>
              </div>
              <h1 className="font-display-xl text-display-xl tracking-tight text-[#0a0a0a] uppercase font-bold leading-none">
                WHAT BROUGHT YOU HERE TODAY?
              </h1>
              <p className="font-body-lg text-body-lg text-stitch-secondary mt-2 max-w-2xl font-normal">
                Select a protocol below to access the tailored dossier, architectural work, or verified career telemetry.
              </p>
            </div>

            {/* Quick Session Metric Box */}
            <div className="bg-stitch-surface-container-lowest border-[2.5px] border-[#0a0a0a] p-4 shadow-[4px_4px_0px_#0a0a0a] flex items-center gap-4 shrink-0">
              <div className="border-r-[2px] border-[#0a0a0a] pr-4">
                <p className="font-label-caps text-label-caps uppercase text-stitch-secondary">ACTIVE PROTOCOLS</p>
                <p className="font-headline-md text-headline-md font-bold text-[#0a0a0a] leading-none mt-1">3/3</p>
              </div>
              <div>
                <p className="font-label-caps text-label-caps uppercase text-stitch-secondary">TIME TO DEPLOY</p>
                <p className="font-headline-md text-headline-md font-bold text-[#506600] leading-none mt-1">&lt; 48 HRS</p>
              </div>
            </div>
          </div>

          {/* THE 3 MEGA OPTION BRUTALIST CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10 items-stretch">
            {/* OPTION 1: WANNA KNOW ME? (PERSONAL PROFILE) */}
            <article className="group relative flex flex-col justify-between bg-stitch-surface-container-lowest border-[3px] border-[#0a0a0a] shadow-[8px_8px_0px_#0a0a0a] transition-all duration-200 ease-out hover:-translate-y-3 hover:-rotate-1 hover:shadow-[12px_12px_0px_#0a0a0a] p-6">
              <div>
                <div className="flex items-center justify-between pb-4 border-b-[2px] border-[#0a0a0a] mb-6">
                  <span className="bg-[#f4f3ee] text-[#0a0a0a] border-[2px] border-[#0a0a0a] font-label-caps text-label-caps px-2 py-1 font-bold uppercase tracking-wider shadow-[2px_2px_0px_#0a0a0a]">
                    01 // PERSONAL PROFILE
                  </span>
                  <span className="font-code-sm text-code-sm text-stitch-secondary font-bold tracking-widest">~/HUMAN</span>
                </div>
                <div className="w-full h-24 mb-4 bg-stitch-surface-container flex items-center justify-center border-[2px] border-[#0a0a0a] overflow-hidden relative">
                  <svg className="w-full h-full text-stitch-outline-variant opacity-40 absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 60">
                    <path d="M0 10 H100 M0 25 H100 M0 40 H100 M0 55 H100 M20 0 V60 M40 0 V60 M60 0 V60 M80 0 V60" fill="none" stroke="currentColor" strokeDasharray="2,2" strokeWidth="0.8" />
                    <circle cx="50" cy="30" fill="none" r="14" stroke="#0a0a0a" strokeWidth="1.5" />
                    <circle cx="50" cy="30" fill="#0a0a0a" r="4" />
                  </svg>
                  <div className="relative z-10 flex items-center gap-2 bg-stitch-surface px-2 py-1 border-[1.5px] border-[#0a0a0a] shadow-[2px_2px_0px_#0a0a0a]">
                    <span className="material-symbols-outlined text-[16px] text-stitch-on-surface">psychology</span>
                    <span className="font-code-sm text-code-sm font-bold text-stitch-on-surface">PHILOSOPHY &amp; ETHOS</span>
                  </div>
                </div>
                <h2 className="font-headline-lg text-headline-lg font-bold text-[#0a0a0a] uppercase tracking-tight mb-1 group-hover:text-stitch-primary transition-colors">
                  WANNA KNOW ME?
                </h2>
                <p className="font-body-md text-body-md text-stitch-secondary leading-relaxed mb-6">
                  The human, the philosophy, late-night experiments, and what drives the relentless curiosity beyond production code.
                </p>
                <div className="flex flex-wrap gap-1 mb-10">
                  <span className="bg-[#f4f3ee] text-[#0a0a0a] font-code-sm text-code-sm px-2 py-1 border-[1.5px] border-[#0a0a0a] font-bold uppercase shadow-[2px_2px_0px_#0a0a0a]">ETHOS</span>
                  <span className="bg-[#f4f3ee] text-[#0a0a0a] font-code-sm text-code-sm px-2 py-1 border-[1.5px] border-[#0a0a0a] font-bold uppercase shadow-[2px_2px_0px_#0a0a0a]">JOURNEY</span>
                  <span className="bg-[#f4f3ee] text-[#0a0a0a] font-code-sm text-code-sm px-2 py-1 border-[1.5px] border-[#0a0a0a] font-bold uppercase shadow-[2px_2px_0px_#0a0a0a]">OUTSIDE THE CODE</span>
                  <span className="bg-[#f4f3ee] text-[#0a0a0a] font-code-sm text-code-sm px-2 py-1 border-[1.5px] border-[#0a0a0a] font-bold uppercase shadow-[2px_2px_0px_#0a0a0a]">CHESS &amp; TACTICS</span>
                </div>
              </div>
              <a className="w-full flex items-center justify-between bg-stitch-surface-container-lowest text-[#0a0a0a] border-[2.5px] border-[#0a0a0a] px-4 py-4 font-code-lg text-code-lg font-bold uppercase shadow-[4px_4px_0px_#0a0a0a] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#faf9f5] active:translate-x-1 active:translate-y-1 active:shadow-none" href="/about">
                <span>ENTER PERSONAL PROFILE</span>
                <span className="font-headline-sm leading-none">→</span>
              </a>
            </article>

            {/* OPTION 2: WANNA HIRE ME? (FREELANCER PROFILE) */}
            <article className="group relative flex flex-col justify-between bg-[#ccff00] border-[3px] border-[#0a0a0a] shadow-[8px_8px_0px_#0a0a0a] transition-all duration-200 ease-out hover:-translate-y-4 hover:scale-[1.02] hover:shadow-[14px_14px_0px_#0a0a0a] p-6">
              <div className="absolute -top-3.5 right-6 bg-[#0a0a0a] text-[#ccff00] font-label-caps text-label-caps px-2 py-1 border-[2px] border-[#0a0a0a] font-bold tracking-widest uppercase shadow-[3px_3px_0px_#ffffff]">
                ★ HIGH DEMAND // 2 SLOTS OPEN
              </div>
              <div>
                <div className="flex items-center justify-between pb-4 border-b-[2px] border-[#0a0a0a] mb-6">
                  <span className="bg-[#0a0a0a] text-[#ffffff] font-label-caps text-label-caps px-2 py-1 border-[2px] border-[#0a0a0a] font-bold uppercase tracking-wider shadow-[2px_2px_0px_#0a0a0a]">
                    02 // FREELANCER PROFILE
                  </span>
                  <span className="font-code-sm text-code-sm text-[#0a0a0a] font-bold tracking-widest">~/CONTRACTS</span>
                </div>
                <div className="w-full h-24 mb-4 bg-[#0a0a0a] text-[#ccff00] border-[2px] border-[#0a0a0a] p-3 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="font-code-sm text-code-sm font-bold tracking-widest uppercase text-[#ffffff]">SYSTEM VELOCITY</span>
                    <span className="flex items-center gap-1 font-code-sm text-code-sm text-[#ccff00]">
                      <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-ping" /> LIVE
                    </span>
                  </div>
                  <svg className="w-full h-8 text-[#ccff00]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 200 35">
                    <polyline points="0,28 35,22 65,30 95,12 130,18 165,5 200,8" />
                  </svg>
                  <div className="flex items-center justify-between font-code-sm text-code-sm text-stitch-tertiary-fixed">
                    <span>EST. MVP: 14 DAYS</span>
                    <span className="font-bold text-[#ccff00]">FASTAPI + NEXT15</span>
                  </div>
                </div>
                <h2 className="font-headline-lg text-headline-lg font-bold text-[#0a0a0a] uppercase tracking-tight mb-1">
                  WANNA HIRE ME?
                </h2>
                <p className="font-body-md text-body-md text-[#1b1c1a] font-medium leading-relaxed mb-6">
                  0-to-1 full-stack MVPs, autonomous AI agent pipelines, resilient system integration, and bespoke client engineering.
                </p>
                <div className="flex flex-wrap gap-1 mb-10">
                  <span className="bg-[#ffffff] text-[#0a0a0a] font-code-sm text-code-sm px-2 py-1 border-[1.5px] border-[#0a0a0a] font-bold uppercase shadow-[2px_2px_0px_#0a0a0a]">AGENCY &amp; CONTRACTS</span>
                  <span className="bg-[#ffffff] text-[#0a0a0a] font-code-sm text-code-sm px-2 py-1 border-[1.5px] border-[#0a0a0a] font-bold uppercase shadow-[2px_2px_0px_#0a0a0a]">AGENTIC AI</span>
                  <span className="bg-[#ffffff] text-[#0a0a0a] font-code-sm text-code-sm px-2 py-1 border-[1.5px] border-[#0a0a0a] font-bold uppercase shadow-[2px_2px_0px_#0a0a0a]">NEXT.JS &amp; FASTAPI</span>
                  <span className="bg-[#ffffff] text-[#0a0a0a] font-code-sm text-code-sm px-2 py-1 border-[1.5px] border-[#0a0a0a] font-bold uppercase shadow-[2px_2px_0px_#0a0a0a]">PRODUCTION READY</span>
                </div>
              </div>
              <a className="w-full flex items-center justify-between bg-[#0a0a0a] text-[#ccff00] border-[2.5px] border-[#0a0a0a] px-4 py-4 font-code-lg text-code-lg font-bold uppercase shadow-[4px_4px_0px_#ffffff] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#ffffff] active:translate-x-1 active:translate-y-1 active:shadow-none" href="/projects">
                <span>VIEW FREELANCER PROFILE</span>
                <span className="font-headline-sm leading-none">→</span>
              </a>
            </article>

            {/* OPTION 3: WANNA EMPLOY ME? (CAREER & ENTERPRISE PROFILE) */}
            <article className="group relative flex flex-col justify-between bg-[#fcfbf7] border-[3px] border-[#0a0a0a] shadow-[8px_8px_0px_#0a0a0a] transition-all duration-200 ease-out hover:-translate-y-3 hover:rotate-1 hover:shadow-[12px_12px_0px_#0a0a0a] p-6">
              <div>
                <div className="flex items-center justify-between pb-4 border-b-[2px] border-[#0a0a0a] mb-6">
                  <span className="bg-[#eeede8] text-[#0a0a0a] border-[2px] border-[#0a0a0a] font-label-caps text-label-caps px-2 py-1 font-bold uppercase tracking-wider shadow-[2px_2px_0px_#0a0a0a]">
                    03 // JOB &amp; CAREER PROFILE
                  </span>
                  <span className="font-code-sm text-code-sm text-stitch-secondary font-bold tracking-widest">~/RESUME.RAW</span>
                </div>
                <div className="w-full h-24 mb-4 bg-[#1b1c1a] border-[2px] border-[#0a0a0a] p-3 flex flex-col justify-center relative overflow-hidden">
                  <div className="grid grid-cols-3 gap-2 text-center z-10">
                    <div className="bg-[#2f312e] p-1 border-[1px] border-stitch-outline text-[#faf9f5]">
                      <p className="font-label-caps text-[10px] text-stitch-tertiary-fixed">ROLE LEVEL</p>
                      <p className="font-code-sm text-code-sm font-bold text-[#ccff00]">STAFF / L6</p>
                    </div>
                    <div className="bg-[#2f312e] p-1 border-[1px] border-stitch-outline text-[#faf9f5]">
                      <p className="font-label-caps text-[10px] text-stitch-tertiary-fixed">UPTIME</p>
                      <p className="font-code-sm text-code-sm font-bold text-[#ffffff]">99.98%</p>
                    </div>
                    <div className="bg-[#2f312e] p-1 border-[1px] border-stitch-outline text-[#faf9f5]">
                      <p className="font-label-caps text-[10px] text-stitch-tertiary-fixed">EXPERIENCE</p>
                      <p className="font-code-sm text-code-sm font-bold text-[#ccff00]">7+ YRS</p>
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    <span className="font-code-sm text-[11px] text-stitch-tertiary-fixed uppercase tracking-widest font-semibold">{"// DISTRIBUTED SYSTEMS & CORE INFRA"}</span>
                  </div>
                </div>
                <h2 className="font-headline-lg text-headline-lg font-bold text-[#0a0a0a] uppercase tracking-tight mb-1 group-hover:text-stitch-primary transition-colors">
                  WANNA EMPLOY ME?
                </h2>
                <p className="font-body-md text-body-md text-stitch-secondary leading-relaxed mb-6">
                  Senior engineering roles, verified systems track record, enterprise architecture rigour, and ATS-optimized resume.
                </p>
                <div className="flex flex-wrap gap-1 mb-10">
                  <span className="bg-[#eeede8] text-[#0a0a0a] font-code-sm text-code-sm px-2 py-1 border-[1.5px] border-[#0a0a0a] font-bold uppercase shadow-[2px_2px_0px_#0a0a0a]">SYSTEM ARCHITECTURE</span>
                  <span className="bg-[#eeede8] text-[#0a0a0a] font-code-sm text-code-sm px-2 py-1 border-[1.5px] border-[#0a0a0a] font-bold uppercase shadow-[2px_2px_0px_#0a0a0a]">FOUNDING ENG</span>
                  <span className="bg-[#eeede8] text-[#0a0a0a] font-code-sm text-code-sm px-2 py-1 border-[1.5px] border-[#0a0a0a] font-bold uppercase shadow-[2px_2px_0px_#0a0a0a]">Q1 2025 RESUME</span>
                  <span className="bg-[#eeede8] text-[#0a0a0a] font-code-sm text-code-sm px-2 py-1 border-[1.5px] border-[#0a0a0a] font-bold uppercase shadow-[2px_2px_0px_#0a0a0a]">FULL-TIME</span>
                </div>
              </div>
              <a className="w-full flex items-center justify-between bg-[#1b1c1a] text-[#ffffff] border-[2.5px] border-[#0a0a0a] px-4 py-4 font-code-lg text-code-lg font-bold uppercase shadow-[4px_4px_0px_#0a0a0a] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#0a0a0a] hover:text-[#ccff00] active:translate-x-1 active:translate-y-1 active:shadow-none" href="/contact">
                <span>ACCESS JOB PROFILE</span>
                <span className="font-headline-sm leading-none">→</span>
              </a>
            </article>
          </div>

          {/* SUPPORTING CALL-TO-ACTION & DIRECT ACTION BAR */}
          <div className="bg-stitch-surface-container border-[3px] border-[#0a0a0a] shadow-[8px_8px_0px_#0a0a0a] p-6 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#ccff00] border-[2.5px] border-[#0a0a0a] flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#0a0a0a]">
                <span className="material-symbols-outlined text-[#0a0a0a] text-[28px]">terminal</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm font-bold uppercase tracking-tight text-[#0a0a0a]">
                  NOT SURE WHERE TO START?
                </h3>
                <p className="font-body-sm text-body-sm text-stitch-secondary font-medium">
                  Read the engineering manifesto, inspect raw code repositories, or transmit directly.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              <a className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 bg-[#ffffff] text-[#0a0a0a] border-[2.5px] border-[#0a0a0a] px-4 py-3 font-code-sm text-code-sm font-bold uppercase shadow-[4px_4px_0px_#0a0a0a] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#0a0a0a] active:translate-x-1 active:translate-y-1 active:shadow-none" href="/about">
                <span>READ MANIFESTO</span>
                <span className="material-symbols-outlined text-[16px]">menu_book</span>
              </a>
              <a className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 bg-[#f4f3ee] text-[#0a0a0a] border-[2.5px] border-[#0a0a0a] px-4 py-3 font-code-sm text-code-sm font-bold uppercase shadow-[4px_4px_0px_#0a0a0a] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#0a0a0a] active:translate-x-1 active:translate-y-1 active:shadow-none" href="/projects">
                <span>DOWNLOAD QUICK RESUME (PDF)</span>
                <span className="material-symbols-outlined text-[16px]">download</span>
              </a>
              <a className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 bg-[#ccff00] text-[#0a0a0a] border-[2.5px] border-[#0a0a0a] px-4 py-3 font-code-sm text-code-sm font-bold uppercase shadow-[4px_4px_0px_#0a0a0a] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#0a0a0a] active:translate-x-1 active:translate-y-1 active:shadow-none" href="/contact">
                <span>TRANSMIT DIRECT INQUIRY</span>
                <span className="material-symbols-outlined text-[18px]">bolt</span>
              </a>
            </div>
          </div>

          {/* Micro Industrial Status Ticker */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 pt-2 text-stitch-secondary font-code-sm text-code-sm">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-[#506600] border-[1px] border-[#0a0a0a]" />
                <span className="font-bold text-[#0a0a0a]">SYSTEM: ONLINE &amp; DEPLOYED</span>
              </div>
              <span className="text-stitch-outline">/</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#0a0a0a]">PING: 24MS</span>
              </div>
              <span className="text-stitch-outline">/</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#506600]">LATENCY: OPTIMAL</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-label-caps text-label-caps uppercase text-stitch-on-surface-variant font-bold">SHA-256: e8b9...7f1a</span>
              <span className="text-stitch-outline">•</span>
              <span className="font-code-sm text-code-sm text-[#0a0a0a] font-bold">EST. RESPONSE: &lt; 4 HOURS</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

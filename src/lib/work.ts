/*
 * All portfolio content that changes over time lives here.
 * Add an entry to an array and it shows up on the site; no component edits needed.
 */

export type Project = {
  name: string;
  line: string;
  stack: string[];
  stat?: string;
  img?: string; // remote URL or a file in /public, e.g. "/work/synapse.png"
  href?: string; // link button only renders when this is set
};

/** AI engineering work. Shown on /employ. The first one is featured. */
export const aiProjects: Project[] = [
  {
    name: "SynapseAI",
    line: "A research agent that reads papers for you and writes summaries where every claim links back to a source.",
    stat: "85k+ papers · 94.2% retrieval",
    stack: ["Python", "LangChain", "FastAPI", "Next.js", "Pinecone"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYYJ1u5gMNXWBk1fEvCEYci0fGEBJ4pI9AfKqDpt_VJoXcomxbPijIL2qkfy4Ev_2sbldZRSMG5eP_NuGhreI0KIpnTImGObpmGxOgDdDsX3CqAx7Q_gMbb_3nT0_aT439tEz_JyXUhmiJU7phHFqPgfYxwgtiPccLjEsIa3KoKaeeg7hVr5yeV7husnV2hVJAbwgCY-AcWeWwgvYJGAeqBPeLfCIBCuJzWHp7FUNiBjiSYCOP1fo",
  },
  {
    name: "AgenticFlow",
    line: "Drag-and-drop canvas for wiring up LLM pipelines, with a trace view so you can see where a run went wrong.",
    stack: ["React Flow", "Python", "Supabase"],
  },
];

/** Things built for fun or curiosity. Shown on /about. */
export const sideProjects: Project[] = [
  {
    name: "Kroma 3D",
    line: "Feed it live audio and it draws fractals that move with the music. A weekend project that got out of hand.",
    stat: "1.4k stars",
    stack: ["WebGL", "Three.js", "GLSL"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4Q78yv0XiADEO-eHcA8kuvFn7DkurcBbrg13s3kLvRGL_7I3J4V_XyGaXb_lRXbWdcKcPihWN_KY8OCE3N8pSfwPnCmj5mAPC5Q7ArxsIwzz-BONbTxxBn53D9q_79BI1xVzBENsd-AvwPtotVgfODEBINIit-7tR5zA0yUdvbzvvfkGwzTybV135Peboihn1LWkwQED8x4mcx02feI4BRUkyqME4LqM4YWZpQC_qcocpbXRcOyw",
  },
  {
    name: "HyperDraft",
    line: "A markdown editor that works offline and merges edits from several people without conflicts.",
    stat: "Sub-15ms sync",
    stack: ["TypeScript", "Yjs", "Rust"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgGIbAjRfkdvrRqP0e2bq2wAMvV70gwJpzCb7tcxue0_O5ncs6twMtAb2Lyjxx1KH8N4YNXqU_xv6eA_DhraLyvPfyU9anPEXIn23WQdUbtXQldZfDgPSU_fYxQ_2P5tHO45xlYegXepMhwRuXMk2UIi6aX4JuMuTzztxjxYQQakkIA2y-leRAfYdSV2wo0B4tOAsxVXFURsDPKb1MuQtcru1Bl2Lt-sBgPuTiJ2qUkL-bF406hfQ",
  },
  {
    name: "OmniCLI",
    line: "Spin up a cloud dev environment with one command and throw it away when you're done.",
    stack: ["Go", "Docker"],
  },
];

export type ClientWork = {
  client: string; // company or person
  person?: string; // who gave the review
  role?: string; // their title
  project: string; // what you built
  quote: string; // the review, in their words
  tags: string[]; // stack or outcomes
  img?: string; // screenshot of the work
  href?: string; // live link or case study
  sample?: boolean; // true = placeholder, shows a "Sample" badge. Delete these once you add real ones.
};

/**
 * Freelance client work and reviews. Shown in the "From my clients" carousel on /hire.
 * The three entries below are SAMPLES so the layout is visible. Replace them with real
 * clients and real quotes (with their permission), and drop `sample: true`.
 */
export const clients: ClientWork[] = [
  {
    client: "Client name",
    person: "Reviewer name",
    role: "Founder",
    project: "AI support assistant",
    quote: "Paste the client's review here, in their own words. One to three sentences reads best.",
    tags: ["Next.js", "RAG", "2 weeks"],
    sample: true,
  },
  {
    client: "Client name",
    person: "Reviewer name",
    role: "Head of Product",
    project: "MVP web app",
    quote: "A second review. Mention what was built and what changed for them after it shipped.",
    tags: ["TypeScript", "Supabase", "MVP"],
    sample: true,
  },
  {
    client: "Client name",
    person: "Reviewer name",
    role: "Marketing lead",
    project: "Landing page and CMS",
    quote: "A third review. Short and specific beats long and generic.",
    tags: ["Design", "Next.js", "SEO"],
    sample: true,
  },
];

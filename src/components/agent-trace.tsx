"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

// A believable agent run, replayed as a trace. Plain data so it is easy to swap for a real log.
const lines: [kind: "in" | "tool" | "ok" | "out", text: string][] = [
  ["in", "user: summarize the 3 open incidents and draft a status update"],
  ["tool", "search_incidents(status=\"open\")  → 3 results  212ms"],
  ["tool", "fetch_runbook(\"INC-4471\")  → 1.8k tokens  96ms"],
  ["tool", "eval.groundedness(draft)  → 0.94"],
  ["ok", "guardrail: no PII in output"],
  ["out", "draft ready · 3 citations · 4.1s · $0.0038"],
];

const tone = { in: "text-chalk", tool: "text-fog", ok: "text-fog", out: "text-ember" };
const mark = { in: ">", tool: "·", ok: "✓", out: "→" };

/** Terminal-style agent trace that types itself in, then loops. Isolated client leaf. */
export function AgentTrace() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia(root.current ?? undefined);
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const rows = gsap.utils.toArray<HTMLElement>("[data-row]", root.current);
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2.5, delay: 0.6 });
      tl.set(rows, { autoAlpha: 0, y: 8 });
      rows.forEach((r, i) => {
        tl.to(r, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power3.out" }, i === 0 ? 0 : "+=0.55");
      });
      tl.to(rows, { autoAlpha: 0, duration: 0.5, ease: "power2.in" }, "+=3");
    });
    return () => mm.revert();
  }, []);

  return (
    <div
      ref={root}
      className="border-[3px] border-chalk/90 bg-carbon shadow-[8px_8px_0_var(--color-ember)]"
      role="img"
      aria-label="Example trace of an AI agent answering a request with tool calls, an eval score and a guardrail check"
    >
      <div className="flex items-center gap-2 border-b-[3px] border-chalk/90 px-4 py-3">
        <span className="size-3 rounded-full bg-ember" />
        <span className="size-3 rounded-full bg-fog/50" />
        <span className="size-3 rounded-full bg-fog/50" />
        <span className="ml-3 font-mono text-xs text-fog">agent.run · trace</span>
        <span className="ml-auto flex items-center gap-2 font-mono text-xs text-fog">
          <span className="size-2 rounded-full bg-ember motion-safe:animate-pulse" /> live
        </span>
      </div>
      <ol className="flex min-h-[17rem] flex-col gap-3 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {lines.map(([kind, text]) => (
          <li key={text} data-row className={`flex gap-3 ${tone[kind]}`}>
            <span aria-hidden className="w-3 shrink-0 text-ember">{mark[kind]}</span>
            <span className="break-words">{text}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

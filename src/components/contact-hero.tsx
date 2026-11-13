"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { email } from "@/lib/socials";

gsap.registerPlugin(SplitText, DrawSVGPlugin);

const btn =
  "inline-flex min-h-14 items-center justify-center border-[3px] border-foreground px-8 font-mono text-sm font-bold uppercase shadow-[5px_5px_0_var(--foreground)] hover:-translate-y-1 hover:shadow-[8px_8px_0_var(--foreground)] active:translate-y-1 active:shadow-none";

/** Cinematic-center hero: SplitText character cascade, two CTAs (mail + copy). */
export function ContactHero() {
  const h1 = useRef<HTMLHeadingElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const split = SplitText.create(h1.current!, { type: "chars,words", mask: "chars" });
      gsap.from(split.chars, { yPercent: 110, duration: 0.9, ease: "power4.out", stagger: { each: 0.025, from: "start" } });
      gsap.from(".hero-underline", { drawSVG: 0, duration: 0.9, delay: 0.7, ease: "power2.inOut" });
      return () => split.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="mx-auto flex max-w-[72rem] flex-col items-center text-center">
      <h1
        ref={h1}
        aria-label="Let's build something."
        className="text-[clamp(3rem,8.5vw,6rem)] font-bold uppercase leading-[0.95] tracking-tight [text-wrap:balance]"
      >
        Let&apos;s build something<span className="text-ember">.</span>
      </h1>
      <svg viewBox="0 0 600 24" preserveAspectRatio="none" aria-hidden className="mt-3 h-4 w-[min(32rem,80%)] overflow-visible">
        <path className="hero-underline" d="M4 14 C 90 2, 160 22, 260 10 S 460 4, 596 12" fill="none" stroke="#ff5b1f" strokeWidth="5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="mt-12 flex flex-col gap-4 sm:flex-row">
        <a href={`mailto:${email}`} className={`${btn} bg-primary text-primary-foreground`}>
          Open my mail app
        </a>
        <button
          type="button"
          onClick={() => {
            navigator.clipboard?.writeText(email).then(() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 1800);
            });
          }}
          className={`${btn} bg-foreground text-background`}
          aria-live="polite"
        >
          {copied ? "Copied" : "Copy address"}
        </button>
      </div>
      <p className="mt-6 font-mono text-sm text-muted-foreground">{email} · or use the form below</p>
    </section>
  );
}

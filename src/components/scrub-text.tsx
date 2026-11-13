"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Paragraph whose words brighten one by one as it scrolls through the viewport. Fully readable without JS. */
export function ScrubText({ text, className = "" }: { text: string; className?: string }) {
  const el = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia(el.current ?? undefined);
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        el.current!.querySelectorAll("span"),
        { opacity: 0.15 },
        { opacity: 1, stagger: 0.1, ease: "none", scrollTrigger: { trigger: el.current, start: "top 80%", end: "bottom 45%", scrub: true } }
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <p ref={el} className={className}>
      {text.split(" ").map((w, i) => (
        <span key={i}>{w} </span>
      ))}
    </p>
  );
}

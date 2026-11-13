"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp, Cpu, Handshake, House, Mail, User } from "lucide-react";
import { socials } from "@/lib/socials";

gsap.registerPlugin(ScrollTrigger);

const icons: Record<string, string> = {
  GitHub:
    "M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z",
  LinkedIn:
    "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z",
  X: "M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.63 7.58H.49l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93Zm-1.29 19.5h2.04L6.48 3.24H4.3l13.31 17.41Z",
  Email:
    "M2 5h20a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.3 2 8.7 6.2L20.7 7H3.3Z",
};

/** Social icon row: magnetic pull toward the cursor, springy release. */
export function Socials({ className = "" }: { className?: string }) {
  const root = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia(root.current ?? undefined);
    mm.add("(hover: hover) and (prefers-reduced-motion: no-preference)", () => {
      root.current?.querySelectorAll<HTMLElement>("a").forEach((a) => {
        const x = gsap.quickTo(a, "x", { duration: 0.5, ease: "power3.out" });
        const y = gsap.quickTo(a, "y", { duration: 0.5, ease: "power3.out" });
        a.addEventListener("pointermove", (e) => {
          const r = a.getBoundingClientRect();
          x((e.clientX - (r.left + r.width / 2)) * 0.35);
          y((e.clientY - (r.top + r.height / 2)) * 0.35);
        });
        a.addEventListener("pointerleave", () => {
          gsap.to(a, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1,0.4)" });
        });
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <ul ref={root} className={`flex gap-4 ${className}`}>
      {socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            aria-label={s.label}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group grid size-14 place-items-center border-[3px] border-chalk bg-ink text-chalk shadow-[4px_4px_0_var(--color-ember)] [transition-property:background-color,color,box-shadow] hover:bg-ember hover:text-ink hover:shadow-[7px_7px_0_var(--color-chalk)] active:shadow-none"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-6 fill-current transition-transform duration-500 group-hover:rotate-[360deg]"
              aria-hidden
            >
              <path d={icons[s.label]} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Brand marquee: drifts constantly, surges and reverses with scroll velocity. */
function Marquee() {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tween = gsap.to(track.current, { xPercent: -50, duration: 30, ease: "none", repeat: -1 });
      const st = ScrollTrigger.create({
        onUpdate: (self) => {
          gsap.timeline({ overwrite: true })
            .to(tween, { timeScale: gsap.utils.clamp(-8, 8, self.getVelocity() / 200), duration: 0.2 })
            .to(tween, { timeScale: self.direction, duration: 1 });
        },
      });
      return () => st.kill();
    });
    return () => mm.revert();
  }, []);

  const phrase = "AI engineering • Agents • Retrieval • Evals • Open to work • ";
  return (
    <div aria-hidden className="overflow-hidden border-y-[3px] border-ink bg-ember py-3 text-ink">
      <div ref={track} className="flex w-max whitespace-nowrap font-heading text-3xl font-bold uppercase tracking-tight">
        {[0, 1].map((i) => (
          <span key={i} className="pr-6">
            {phrase.repeat(4)}
          </span>
        ))}
      </div>
    </div>
  );
}

const pages = [
  { label: "Home", href: "/", icon: House },
  { label: "About", href: "/about", icon: User },
  { label: "Hire me", href: "/hire", icon: Handshake },
  { label: "Employ me", href: "/employ", icon: Cpu },
  { label: "Contact", href: "/contact", icon: Mail },
];

/** Square icon link with a label that pops above it on hover or keyboard focus. */
function IconLink({ href, label, children, className = "" }: { href: string; label: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`group relative grid size-14 place-items-center border-[3px] border-chalk text-chalk hover:-translate-y-1 hover:bg-chalk hover:text-ink ${className}`}
    >
      {children}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 translate-y-1 whitespace-nowrap bg-ember px-2 py-1 font-mono text-[11px] font-bold uppercase text-ink opacity-0 transition-[opacity,translate] duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
      >
        {label}
      </span>
    </a>
  );
}

export function Footer() {
  const root = useRef<HTMLElement>(null);

  // The wordmark rises out of the bottom edge as the footer scrolls in.
  useEffect(() => {
    const mm = gsap.matchMedia(root.current ?? undefined);
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from("[data-wordmark]", {
        yPercent: 70,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom bottom", scrub: true },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <>
      <Marquee />
      <footer ref={root} className="overflow-hidden bg-ink text-chalk">
        <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 pt-20 pb-14 md:pt-24 lg:px-6">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <p className="font-heading text-[clamp(2.25rem,5vw,4rem)] font-bold uppercase leading-none tracking-[-0.03em]">
              Let&apos;s build<span className="text-ember">.</span>
            </p>
            <Socials />
          </div>

          <div className="flex flex-col justify-between gap-8 border-t-[3px] border-carbon pt-14 sm:flex-row sm:items-center">
            <nav aria-label="Footer" className="flex flex-wrap gap-3">
              {pages.map((p) => (
                <IconLink key={p.href} href={p.href} label={p.label}>
                  <p.icon aria-hidden className="size-6" strokeWidth={2} />
                </IconLink>
              ))}
            </nav>
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-2 font-mono text-xs uppercase text-fog">
                <span className="size-2.5 rounded-full bg-ember motion-safe:animate-pulse" /> Open to work
              </span>
              <IconLink href="#top" label="Back to top" className="border-ember text-ember hover:border-chalk">
                <ArrowUp aria-hidden className="size-6" strokeWidth={2.5} />
              </IconLink>
            </div>
          </div>
        </div>

        <p
          data-wordmark
          aria-hidden
          className="select-none whitespace-nowrap text-center font-heading text-[14vw] font-bold uppercase leading-[0.78] tracking-[-0.04em] text-carbon"
        >
          Tanishq Ojha
        </p>

        <div className="relative border-t-[3px] border-carbon bg-ink">
          <p className="mx-auto max-w-7xl px-4 py-5 font-mono text-xs uppercase text-fog lg:px-6">© {new Date().getFullYear()} Tanishq Ojha</p>
        </div>
      </footer>
    </>
  );
}

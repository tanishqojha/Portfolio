"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/*
 * Plays a dimensional-drawing-motion scene (public/dw/*.js) in the page.
 * The scene is the skill's format: a script using a global `kit` that registers
 * { init(kit), render(t) }, where render is a pure function of time. This is the
 * same kit shim the skill's headless player uses, so the file also renders to MP4.
 */

type Scene = { init(kit: unknown): void; render(t: number): void };

const STAGE_W = 1920;
const STAGE_H = 1080;
const END = 12; // seconds; the film's last beat is a slow hold, so stop here

function makeKit(stage: HTMLElement, register: (s: Scene) => void) {
  const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
  return {
    clamp01,
    seg: (t: number, a: number, b: number) => clamp01((t - a) / (b - a)),
    lerp: (a: number, b: number, p: number) => a + (b - a) * p,
    eo: (x: number) => 1 - Math.pow(1 - x, 3),
    ei: (x: number) => x * x * x,
    eio: (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2),
    stage,
    width: STAGE_W,
    height: STAGE_H,
    h: (s: string) => {
      const d = document.createElement("div");
      d.innerHTML = s.trim();
      return d.firstElementChild;
    },
    css: (s: string) => {
      const st = document.createElement("style");
      st.textContent = s;
      stage.appendChild(st);
    },
    scene: (_id: string, s: Scene) => register(s),
  };
}

export function DrawingFilm({ src, className = "", scrollFx = false }: { src: string; className?: string; scrollFx?: boolean }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = boxRef.current!;
    const stage = stageRef.current!;
    const fit = () => stage.style.setProperty("scale", String(box.clientWidth / STAGE_W));
    const ro = new ResizeObserver(fit);
    ro.observe(box);
    fit();

    let raf = 0;
    let dead = false;
    let io: IntersectionObserver | undefined;
    fetch(src)
      .then((r) => r.text())
      .then((code) => {
        if (dead) return;
        let scene: Scene | undefined;
        // Scene files are first-party, served from /public.
        const kit = makeKit(stage, (s) => (scene = s));
        new Function("kit", code)(kit);
        if (!scene) return;
        scene.init(kit);
        if (matchMedia("(prefers-reduced-motion: reduce)").matches) return scene.render(END);
        // Start the draw-in only once the film is actually on screen.
        scene.render(0);
        io = new IntersectionObserver(([e]) => {
          if (!e.isIntersecting) return;
          io?.disconnect();
          const t0 = performance.now();
          const tick = (now: number) => {
            const t = Math.min(END, (now - t0) / 1000);
            scene!.render(t);
            if (t < END) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        }, { threshold: 0.25 });
        io.observe(box);
      })
      .catch(() => {});

    return () => {
      dead = true;
      io?.disconnect();
      cancelAnimationFrame(raf);
      ro.disconnect();
      stage.replaceChildren();
    };
  }, [src]);

  // Image scale and fade: grows in as it enters, dims as it leaves.
  useEffect(() => {
    if (!scrollFx) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(boxRef.current, { scale: 0.88 }, { scale: 1, ease: "none", scrollTrigger: { trigger: boxRef.current, start: "top 95%", end: "top 40%", scrub: true } });
      gsap.to(boxRef.current, { opacity: 0.25, ease: "none", scrollTrigger: { trigger: boxRef.current, start: "bottom 40%", end: "bottom 0%", scrub: true } });
    });
    return () => mm.revert();
  }, [scrollFx]);

  return (
    <div ref={boxRef} className={`relative overflow-hidden aspect-video ${className}`} aria-hidden>
      <div
        ref={stageRef}
        className="absolute left-0 top-0 origin-top-left overflow-hidden"
        style={{ width: STAGE_W, height: STAGE_H }}
      />
    </div>
  );
}

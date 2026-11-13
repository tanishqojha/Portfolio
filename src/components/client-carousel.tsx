/* eslint-disable @next/next/no-img-element -- client screenshots can come from any host */
"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { ClientWork } from "@/lib/work";

/**
 * "From my clients" carousel. Native scroll-snap does the physics (swipe, trackpad, keyboard);
 * the buttons just scroll one slide. No library.
 */
export function ClientCarousel({ items }: { items: ClientWork[] }) {
  const track = useRef<HTMLUListElement>(null);
  const [at, setAt] = useState(0);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    const el = track.current!;
    const onScroll = () => {
      const slide = el.firstElementChild as HTMLElement | null;
      if (slide) setAt(Math.round(el.scrollLeft / (slide.offsetWidth + 24)));
      setEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const go = (dir: number) => {
    const el = track.current!;
    const slide = el.firstElementChild as HTMLElement;
    const smooth = !matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (slide.offsetWidth + 24), behavior: smooth ? "smooth" : "auto" });
  };

  const last = items.length - 1;
  const btn =
    "grid size-14 place-items-center border-[3px] border-ink bg-chalk shadow-[4px_4px_0_var(--color-ink)] hover:bg-ember active:translate-y-0.5 active:shadow-none disabled:pointer-events-none disabled:opacity-35";

  return (
    <div aria-roledescription="carousel" aria-label="Client work and reviews">
      <ul
        ref={track}
        tabIndex={0}
        className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-4 px-4 pt-2 pb-6 [scrollbar-width:none] focus-visible:outline-offset-[-3px] lg:-mx-6 lg:scroll-px-6 lg:px-6 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((c, i) => (
          <li
            key={i}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${items.length}`}
            className="flex w-[86%] shrink-0 snap-start flex-col border-[3px] border-ink bg-chalk shadow-[8px_8px_0_var(--color-ink)] sm:w-[70%] lg:w-[46%]"
          >
            {c.img ? (
              <div className="overflow-hidden border-b-[3px] border-ink">
                <img src={c.img} alt={`${c.project} for ${c.client}`} loading="lazy" className="h-56 w-full object-cover" />
              </div>
            ) : (
              <div className="flex items-center justify-between border-b-[3px] border-ink bg-ink px-6 py-5 text-chalk">
                <span className="text-xl font-bold uppercase tracking-[-0.01em]">{c.project}</span>
                <Quote aria-hidden className="size-7 text-ember" strokeWidth={2.5} />
              </div>
            )}
            <div className="flex flex-1 flex-col gap-6 p-6 md:p-8">
              {c.img && <p className="text-xl font-bold uppercase tracking-[-0.01em]">{c.project}</p>}
              <blockquote className="text-[clamp(1.1rem,1.6vw,1.35rem)] leading-snug">&ldquo;{c.quote}&rdquo;</blockquote>
              <div className="mt-auto flex items-end justify-between gap-4 border-t-[3px] border-ink pt-5">
                <div>
                  <p className="font-bold">
                    {c.person ?? c.client}
                    {c.sample && <span className="ml-2 bg-ember px-1.5 py-0.5 align-middle font-mono text-[10px] font-bold uppercase">Sample</span>}
                  </p>
                  <p className="text-sm text-steel">{[c.role, c.person ? c.client : null].filter(Boolean).join(", ")}</p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {c.tags.map((t) => (
                      <li key={t} className="border-[1.5px] border-ink bg-mist px-2 py-0.5 font-mono text-xs">{t}</li>
                    ))}
                  </ul>
                </div>
                {c.href && (
                  <a href={c.href} target="_blank" rel="noreferrer noopener" aria-label={`See ${c.project}`} className="shrink-0 border-[1.5px] border-ink p-2 hover:bg-ember">
                    <ArrowUpRight aria-hidden className="size-[18px]" />
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between gap-6">
        <p className="font-mono text-sm" aria-live="polite">
          <span className="font-bold">{String(end ? last + 1 : at + 1).padStart(2, "0")}</span>
          <span className="text-steel"> / {String(items.length).padStart(2, "0")}</span>
        </p>
        <div className="flex gap-3">
          <button type="button" onClick={() => go(-1)} disabled={at <= 0} aria-label="Previous client" className={btn}>
            <ChevronLeft aria-hidden className="size-6" strokeWidth={2.5} />
          </button>
          <button type="button" onClick={() => go(1)} disabled={end} aria-label="Next client" className={btn}>
            <ChevronRight aria-hidden className="size-6" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

export interface PillNavItem {
  label: string;
  href: string;
  ariaLabel?: string;
}

export interface PillNavProps {
  logo: string;
  logoAlt?: string;
  items: PillNavItem[];
  /** Defaults to the current pathname. */
  activeHref?: string;
  className?: string;
  /** GSAP ease. Legacy names ("power2.easeOut") are normalized to v3 ("power2.out"). */
  ease?: string;
  /** Nav bar + logo circle background, and the colour of the hover fill. */
  baseColor?: string;
  /** Pill background. */
  pillColor?: string;
  /** Pill label colour while hovered/active. */
  hoveredPillTextColor?: string;
  /** Pill label colour at rest. */
  pillTextColor?: string;
  /** Hide the nav at the top of the page, reveal it once the user scrolls. */
  revealOnScroll?: boolean;
  /** Scroll distance in px before the nav reveals. */
  revealOffset?: number;
}

/** GSAP 2 ease names still show up in copy-pasted snippets; GSAP 3 wants `.out`. */
function normalizeEase(ease: string): string {
  return ease.replace(
    /\.ease(In|Out|InOut)$/i,
    (_m, dir: string) => "." + dir.charAt(0).toLowerCase() + dir.slice(1)
  );
}

const LABEL_GAP = 12;

export function PillNav({
  logo,
  logoAlt = "Logo",
  items,
  activeHref,
  className,
  ease = "power2.easeOut",
  baseColor = "#000000",
  pillColor = "#ffffff",
  hoveredPillTextColor = "#ffffff",
  pillTextColor = "#000000",
  revealOnScroll = false,
  revealOffset = 24,
}: PillNavProps) {
  const pathname = usePathname();
  const currentHref = activeHref ?? pathname;

  const pillRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const timelines = useRef<Array<gsap.core.Timeline | null>>([]);
  const logoRef = useRef<HTMLAnchorElement>(null);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Derived, not stored: avoids a setState-in-effect cascade.
  const visible = !revealOnScroll || scrolled;
  const menuVisible = menuOpen && visible;

  const easeName = normalizeEase(ease);

  // ---------------------------------------------------------------------
  // Hover fill: a circle sized to fully cover the pill as it scales up from
  // just below the pill's bottom edge, with the label sliding out of the way.
  // ---------------------------------------------------------------------
  const buildTimelines = useCallback(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduced ? 0 : 0.4;

    pillRefs.current.forEach((pill, i) => {
      const circle = circleRefs.current[i];
      if (!pill || !circle) return;

      const label = pill.querySelector<HTMLElement>("[data-pill-label]");
      const labelHover = pill.querySelector<HTMLElement>("[data-pill-label-hover]");
      if (!label || !labelHover) return;

      const { width: w, height: h } = pill.getBoundingClientRect();
      if (!w || !h) return;

      // Radius of a circle through the pill's bottom corners and top edge.
      const R = (w * w) / 4 / (2 * h) + h / 2;
      const D = Math.ceil(2 * R) + 2;
      const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
      const originY = D - delta;

      gsap.set(circle, {
        width: D,
        height: D,
        bottom: -delta,
        left: "50%",
        xPercent: -50,
        transformOrigin: `50% ${originY}px`,
        scale: 0,
      });
      gsap.set(label, { y: 0 });
      gsap.set(labelHover, { y: h + LABEL_GAP, opacity: 0 });

      timelines.current[i]?.kill();
      const tl = gsap.timeline({ paused: true });
      tl.to(circle, { scale: 1.2, duration, ease: easeName }, 0);
      tl.to(label, { y: -(h + LABEL_GAP), duration, ease: easeName }, 0);
      tl.to(labelHover, { y: 0, opacity: 1, duration, ease: easeName }, 0);
      timelines.current[i] = tl;
    });
  }, [easeName]);

  useEffect(() => {
    buildTimelines();
    window.addEventListener("resize", buildTimelines);

    // Web fonts change pill widths after first paint; remeasure once ready.
    let cancelled = false;
    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(() => {
        if (!cancelled) buildTimelines();
      });
    }

    const tls = timelines.current;
    return () => {
      cancelled = true;
      window.removeEventListener("resize", buildTimelines);
      tls.forEach((tl) => tl?.kill());
    };
  }, [buildTimelines, items.length]);

  // ---------------------------------------------------------------------
  // Reveal on scroll
  // ---------------------------------------------------------------------
  useEffect(() => {
    if (!revealOnScroll) return;
    const onScroll = () => setScrolled(window.scrollY > revealOffset);
    // rAF covers a restored scroll position on reload, without a sync setState.
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [revealOnScroll, revealOffset]);

  const handleEnter = (i: number) => timelines.current[i]?.play();
  const handleLeave = (i: number) => timelines.current[i]?.reverse();

  const isActive = (href: string) =>
    href === "/" ? currentHref === "/" : currentHref.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[1000] flex justify-center px-4 pt-4",
        "transition-[transform,opacity] duration-500 ease-out motion-reduce:transition-none",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-[140%] opacity-0",
        className
      )}
    >
      <nav
        aria-label="Main"
        className="flex w-full max-w-5xl items-center gap-2 md:w-auto"
      >
        {/* Logo */}
        <Link
          ref={logoRef}
          href="/"
          aria-label={logoAlt}
          onMouseEnter={() => {
            gsap.to(logoRef.current, {
              rotate: 360,
              duration: 0.6,
              ease: easeName,
            });
          }}
          onMouseLeave={() => {
            gsap.set(logoRef.current, { rotate: 0 });
          }}
          className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-full outline-offset-4 focus-visible:outline-2"
          style={{ background: baseColor }}
        >
          <img
            src={logo}
            alt={logoAlt}
            width={44}
            height={44}
            className="size-full object-cover"
          />
        </Link>

        {/* Desktop pills */}
        <ul
          className="hidden items-center gap-1 rounded-full p-1 md:flex"
          style={{ background: baseColor }}
        >
          {items.map((item, i) => {
            const active = isActive(item.href);
            return (
              <li key={item.href} className="list-none">
                <Link
                  href={item.href}
                  aria-label={item.ariaLabel ?? item.label}
                  aria-current={active ? "page" : undefined}
                  ref={(node) => {
                    pillRefs.current[i] = node;
                  }}
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={() => handleLeave(i)}
                  className="relative isolate inline-flex items-center justify-center overflow-hidden rounded-full px-5 py-2 text-sm font-semibold leading-none outline-offset-4 focus-visible:outline-2"
                  style={{
                    background: active ? baseColor : pillColor,
                    color: active ? hoveredPillTextColor : pillTextColor,
                  }}
                >
                  {/* Expanding hover fill */}
                  <span
                    ref={(node) => {
                      circleRefs.current[i] = node;
                    }}
                    aria-hidden="true"
                    className="pointer-events-none absolute -z-10 block rounded-full"
                    style={{ background: active ? pillColor : baseColor }}
                  />
                  {/* Sliding label pair */}
                  <span className="relative block overflow-hidden">
                    <span data-pill-label className="block">
                      {item.label}
                    </span>
                    <span
                      data-pill-label-hover
                      aria-hidden="true"
                      className="absolute inset-0 block"
                      style={{ color: active ? pillTextColor : hoveredPillTextColor }}
                    >
                      {item.label}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuVisible}
          aria-controls="pill-nav-mobile"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="ml-auto grid size-11 shrink-0 place-items-center rounded-full outline-offset-4 focus-visible:outline-2 md:hidden"
          style={{ background: baseColor }}
        >
          <span className="relative block h-4 w-5">
            <span
              className="absolute left-0 block h-0.5 w-5 rounded-full transition-transform duration-300 motion-reduce:transition-none"
              style={{
                background: pillColor,
                top: menuOpen ? "7px" : "1px",
                transform: menuOpen ? "rotate(45deg)" : "none",
              }}
            />
            <span
              className="absolute left-0 block h-0.5 w-5 rounded-full transition-opacity duration-300 motion-reduce:transition-none"
              style={{ background: pillColor, top: "7px", opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="absolute left-0 block h-0.5 w-5 rounded-full transition-transform duration-300 motion-reduce:transition-none"
              style={{
                background: pillColor,
                top: menuOpen ? "7px" : "13px",
                transform: menuOpen ? "rotate(-45deg)" : "none",
              }}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="pill-nav-mobile"
        hidden={!menuVisible}
        className="absolute inset-x-4 top-[4.5rem] rounded-3xl p-2 shadow-2xl md:hidden"
        style={{ background: baseColor }}
      >
        <ul className="flex flex-col gap-1">
          {items.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href} className="list-none">
                <Link
                  href={item.href}
                  aria-label={item.ariaLabel ?? item.label}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-full px-5 py-3 text-sm font-semibold outline-offset-4 focus-visible:outline-2"
                  style={{
                    background: active ? "transparent" : pillColor,
                    color: active ? hoveredPillTextColor : pillTextColor,
                  }}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export default PillNav;

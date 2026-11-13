/* eslint-disable @next/next/no-img-element -- images can be any remote host; next/image would need each domain allow-listed */
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/work";

/** Hard-shadow project card. `featured` lays it out wide with the image on the left. */
export function ProjectCard({ p, featured = false }: { p: Project; featured?: boolean }) {
  return (
    <article
      className={`group flex flex-col border-[3px] border-ink bg-chalk shadow-[8px_8px_0_var(--color-ink)] hover:-translate-y-1 hover:shadow-[12px_12px_0_var(--color-ink)] ${
        featured ? "lg:col-span-2 lg:flex-row" : ""
      }`}
    >
      {p.img && (
        <div className={`overflow-hidden border-b-[3px] border-ink ${featured ? "lg:w-7/12 lg:border-b-0 lg:border-r-[3px]" : ""}`}>
          <img
            src={p.img}
            alt={`${p.name} screenshot`}
            loading="lazy"
            className={`w-full object-cover grayscale transition-[filter,scale] duration-700 group-hover:scale-[1.03] group-hover:grayscale-0 ${featured ? "h-72 lg:h-full" : "h-52"}`}
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
        <h3 className={`uppercase tracking-[-0.02em] ${featured ? "text-4xl" : "text-2xl"}`}>{p.name}</h3>
        <p className="max-w-[52ch] leading-relaxed text-steel">{p.line}</p>
        {p.stat && <span className="self-start border-[1.5px] border-ink bg-ember px-2 py-0.5 font-mono text-xs font-bold">{p.stat}</span>}
        <div className="mt-auto flex items-end justify-between gap-4 pt-4">
          <ul className="flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <li key={s} className="border-[1.5px] border-ink bg-mist px-2 py-0.5 font-mono text-xs">{s}</li>
            ))}
          </ul>
          {p.href && (
            <a href={p.href} target="_blank" rel="noreferrer noopener" aria-label={`Open ${p.name}`} className="shrink-0 border-[1.5px] border-ink bg-chalk p-2 hover:bg-ember">
              <ArrowUpRight aria-hidden className="size-[18px]" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

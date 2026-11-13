import { ContactHero } from "@/components/contact-hero";
import { ContactForm } from "@/components/contact-form";
import { DrawingFilm } from "@/components/drawing-film";
import { socials } from "@/lib/socials";

export const metadata = { title: "Contact · Tanishq Ojha" };

export default function ContactPage() {
  const links = socials.filter((s) => s.label !== "Email");
  return (
    <main className="mx-auto w-full max-w-7xl overflow-x-clip px-4 pb-24 pt-36 md:pt-48 lg:px-6">
      <ContactHero />

      <section className="mt-24 grid items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div data-reveal>
          <ContactForm />
        </div>
        <div data-reveal style={{ "--i": 1 } as React.CSSProperties} className="flex flex-col gap-8">
          <p className="max-w-[40ch] text-lg leading-relaxed text-steel">
            Hiring for an AI role, building something with LLMs, or stuck on an agent that keeps going off the rails? Tell me about it.
          </p>
          <ul className="border-[3px] border-ink bg-chalk shadow-[8px_8px_0_var(--color-ink)]">
            {links.map((s) => (
              <li key={s.label} className="border-b-[3px] border-ink last:border-b-0">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center justify-between px-6 py-5 text-2xl font-bold uppercase hover:bg-ink hover:text-chalk"
                >
                  {s.label}
                  <span aria-hidden className="text-ember transition-transform duration-300 group-hover:-rotate-45">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div data-reveal className="mt-24">
        <DrawingFilm src="/dw/scene-social-button.js" scrollFx className="border-[3px] border-ink bg-white shadow-[8px_8px_0_var(--color-ink)]" />
      </div>
    </main>
  );
}

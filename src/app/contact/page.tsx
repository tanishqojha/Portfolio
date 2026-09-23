export const metadata = { title: "Contact — Tanishq Ojha" };

const email = "tanishqojha10@gmail.com";

const socials = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
];

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 pb-24 pt-40 md:pt-48">
      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
        Contact
      </p>
      <h1 className="mt-4 text-5xl font-bold tracking-tighter text-foreground md:text-7xl">
        Let&apos;s talk
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
        Open to new projects and opportunities. Reach out and I&apos;ll get
        back to you.
      </p>

      <a
        href={`mailto:${email}`}
        className="mt-10 inline-flex items-center border-[2.5px] border-foreground bg-primary px-6 py-3 font-mono text-sm font-bold text-primary-foreground shadow-[4px_4px_0_0_var(--foreground)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--foreground)] active:translate-x-1 active:translate-y-1 active:shadow-none"
      >
        {email}
      </a>

      <ul className="mt-14 flex flex-wrap gap-3">
        {socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              className="inline-block rounded-full border-2 border-foreground bg-muted px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-foreground shadow-[2px_2px_0_0_var(--foreground)] transition-colors hover:bg-foreground hover:text-background"
            >
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}

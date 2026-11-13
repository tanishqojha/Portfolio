import type { Metadata } from "next";
import { Geist, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import { PillNav } from "@/components/ui/pill-nav";
import { Smooth } from "@/components/smooth";
import { Footer } from "@/components/footer";
import "./globals.css";

// Ember on Graphite (brand/brandkit.html): Bricolage Grotesque for display/headline,
// Geist for body copy, JetBrains Mono for technical metadata & labels.
const geist = Geist({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanishq Ojha · AI engineer",
  description: "Tanishq Ojha builds AI agents, retrieval pipelines and the evals that keep them reliable in production.",
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Hire", href: "/hire" },
  { label: "Employ", href: "/employ" },
  { label: "Contact", href: "/contact" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${bricolage.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body id="top" className="min-h-full flex flex-col">
        {/* Global nav: hidden at the top of the page, revealed once scrolling starts. */}
        <PillNav
          logo="/Logo.svg"
          logoAlt="Tanishq Ojha"
          items={navItems}
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#111316"
          pillColor="#f3f4f6"
          hoveredPillTextColor="#f3f4f6"
          pillTextColor="#111316"
          revealOnScroll
        />
        <Smooth />
        {children}
        <Footer />
      </body>
    </html>
  );
}

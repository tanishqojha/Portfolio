/* eslint-disable @next/next/no-page-custom-font -- Material Symbols is an icon font with variable axes next/font/google doesn't expose; the documented <link> approach applies. */
import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { PillNav } from "@/components/ui/pill-nav";
import "./globals.css";

// Neo-brutalist system (.stitch/DESIGN.md): Space Grotesk for display/headline,
// Inter for body copy, JetBrains Mono for technical metadata & labels.
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanishq Ojha",
  description: "Portfolio of Tanishq Ojha",
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Material Symbols: icon font used by the Stitch-ported pages. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        {/* Global nav: hidden at the top of the page, revealed once scrolling starts. */}
        <PillNav
          logo="/Logo.svg"
          logoAlt="Tanishq Ojha"
          items={navItems}
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#0a0a0a"
          pillColor="#fcfbf7"
          hoveredPillTextColor="#fcfbf7"
          pillTextColor="#0a0a0a"
          revealOnScroll
        />
        {children}
      </body>
    </html>
  );
}

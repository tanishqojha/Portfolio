import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SiteFooter } from "@/components/ui/site-footer";
import { PillNav } from "@/components/ui/pill-nav";
import "./globals.css";

// Variable font: one file covering the full 200-800 axis, so headings (600-700)
// and body (400-500) both render without extra downloads.
const manrope = Manrope({
  variable: "--font-manrope",
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
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* Global nav: hidden at the top of the page, revealed once scrolling starts. */}
        <PillNav
          logo="/Logo.svg"
          logoAlt="Tanishq Ojha"
          items={navItems}
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
          revealOnScroll
        />
        {children}
        {/* Global footer: renders on every route, current and future. */}
        <SiteFooter />
      </body>
    </html>
  );
}

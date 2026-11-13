import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hides the Next.js dev tools badge (bottom-left in dev only).
  devIndicators: false,
  // /projects was split into /employ (AI work) and /about (side projects).
  redirects: async () => [{ source: "/projects", destination: "/employ", permanent: true }],
};

export default nextConfig;

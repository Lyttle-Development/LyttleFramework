import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  experimental: {
    // Fix TLS certificate issues when Turbopack fetches Google Fonts
    turbopackUseSystemTlsCerts: true,
  },
  turbopack: {
    // Set root to monorepo root so Turbopack can resolve packages/ui
    root: path.resolve(__dirname, "../.."),
  },
};

export default nextConfig;
import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Serve the original Leap Square mirror (in public/ls) verbatim at clean routes.
  // beforeFiles runs before app routing, so these win over any app/ page.
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/ls/index.html" },
        { source: "/careers", destination: "/ls/careers/index.html" },
        { source: "/careers/", destination: "/ls/careers/index.html" },
        { source: "/privacy-policy", destination: "/ls/privacy-policy/index.html" },
        { source: "/privacy-policy/", destination: "/ls/privacy-policy/index.html" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;

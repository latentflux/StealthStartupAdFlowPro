import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // Output configuration for static export
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  
  // Base path for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/adflow-pro-developer-credits' : '',
  
  // Headers configuration
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig; 
// Empty for Netlify (served at the domain root). The GitHub Pages build sets it to
// /bahai-website-design because that site lives in a subfolder.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath,
  // Build to plain static HTML in out/ so it can be hosted anywhere for free.
  output: 'export',
  // Each page becomes folder/index.html, which every static host serves correctly.
  trailingSlash: true,
  images: { unoptimized: true },
  // A stray package-lock.json sits in the parent folder; pin the project root.
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;

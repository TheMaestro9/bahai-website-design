/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build to plain static HTML in out/ so it can be hosted anywhere for free.
  output: 'export',
  // Each page becomes folder/index.html, which every static host serves correctly.
  trailingSlash: true,
  images: { unoptimized: true },
  // A stray package-lock.json sits in the parent folder; pin the project root.
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;

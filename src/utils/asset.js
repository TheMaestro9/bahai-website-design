// Folder the site is served from: '' on Netlify, '/bahai-website-design' on GitHub Pages.
// Set at build time by the deploy workflow.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Next.js adds the base path to <Link> and its own files, but not to plain
// paths like <img src="/assets/...">. Wrap those with asset().
export const asset = (path) => `${BASE_PATH}${path}`;

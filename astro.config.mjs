/** @type {import('astro').AstroUserConfig} */
import mdx from "@astrojs/mdx";

const config = {
  output: "static",
  integrations: [mdx()],
  build: { format: "directory" },
};

// Only set in CI; locally leave undefined for localhost-friendly paths.
if (process.env.SITE) config.site = process.env.SITE;   // e.g., https://peachy-codes.github.io/github-website/
if (process.env.BASE) config.base = process.env.BASE;   // e.g., /github-website/

export default config;

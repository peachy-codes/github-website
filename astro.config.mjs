/** @type {import('astro').AstroUserConfig} */
import mdx from "@astrojs/mdx";

const base = process.env.BASE; // e.g. /github-website/

/**
 * Rehype plugin to automatically prefix root-relative paths in Markdown/MDX
 * with the GitHub Pages base path when building in CI.
 */
function rehypePrefixBase(basePath) {
  if (!basePath || basePath === "/") return () => {};
  const prefix = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;
  const prefixWithoutLeadingSlash = prefix.replace(/^\//, "");

  function visit(node) {
    if (node && typeof node === "object") {
      if (node.type === "element" && node.properties) {
        for (const attr of ["src", "href"]) {
          const val = node.properties[attr];
          if (
            typeof val === "string" &&
            val.startsWith("/") &&
            !val.startsWith("//") &&
            !val.startsWith(prefix + "/")
          ) {
            node.properties[attr] = `${prefix}${val}`;
          }
        }
      }
      if (node.type === "raw" && typeof node.value === "string") {
        node.value = node.value.replace(
          /(src|href)=["']\/([^"']+)["']/g,
          (match, attr, path) => {
            if (
              path.startsWith(prefixWithoutLeadingSlash + "/") ||
              path.startsWith("/")
            ) {
              return match;
            }
            return `${attr}="${prefix}/${path}"`;
          }
        );
      }
      if (Array.isArray(node.children)) {
        node.children.forEach(visit);
      }
    }
  }

  return () => (tree) => {
    visit(tree);
  };
}

const config = {
  output: "static",
  markdown: {
    rehypePlugins: [rehypePrefixBase(base)],
  },
  integrations: [
    mdx({
      rehypePlugins: [rehypePrefixBase(base)],
    }),
  ],
  build: { format: "directory" },
};

// Only set in CI; locally leave undefined for localhost-friendly paths.
if (process.env.SITE) config.site = process.env.SITE; // e.g., https://peachy-codes.github.io/github-website/
if (process.env.BASE) config.base = process.env.BASE; // e.g., /github-website/

export default config;

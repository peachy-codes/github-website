
# Georgia von Minden — Website (Astro)

Static, Markdown-first site with projects, posts, and testimonials.
- Localhost works by default (no env vars).
- GitHub Pages is configured in the workflow for: https://peachy-codes.github.io/github-website/

## Local
1. Node 20+
2. `npm install`
3. `npm run dev`

## Content
- Posts: `src/content/posts/*.md`
- Projects: `src/content/projects/*.md`
- Testimonials: `src/content/testimonials/*.md`

## Deploy (GitHub Pages)
Push to `main`. Workflow injects:
- `BASE=/github-website/`
- `SITE=https://peachy-codes.github.io/github-website/`

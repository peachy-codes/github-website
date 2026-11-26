# Peach Productions

The official website and digital archive for **Peach Productions** (`peachproductions.art`), a spatial design and installation studio.

Built with [Astro](https://astro.build/) using a pure Markdown-driven architecture and a minimalist monochrome editorial design system.

---

## Content Architecture

All website copy, navigation, metadata, and project archives are managed directly through four Markdown files located in `src/pages/`:

1. **`src/pages/_site.md`**  
   Global studio identity, browser tab metadata defaults, top navigation menu items, footer statement, and button labels across every page.

2. **`src/pages/index.md`**  
   The **Studio** (`/`) home page containing the studio ethos, spatial research focus, and practice statements.

3. **`src/pages/works.md`**  
   The **Works** (`/works`) page. Serves as the single source of truth for all spatial installations, exhibitions, and video projections via its `works:` YAML array. Detail pages (`/works/[slug]`) are statically generated directly from this list.

4. **`src/pages/contact.md`**  
   The **Contact** (`/contact`) page for commissions, curatorial proposals, and studio correspondence.

---

## Styling & Design System

* **Styling:** `public/assets/style.css` (imported via `src/layouts/BaseLayout.astro` for instant Hot Module Replacement in dev).
* **Typography:** `Newsreader` (optical publication serif) throughout all headings, body copy, navigation, and metadata.
* **Atmosphere:** Pitch void monochrome (`#000000` / `#ffffff`) with an anamorphic projector beam horizon vignette and a built-in dark/light mode toggle.
* **Media Assets:** `public/assets/images/` contains all photography and installation video loops.

---

## Local Development

```bash
# Install dependencies
npm install

# Start local dev server (default http://localhost:4321)
npm run dev

# Build production static site
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment

The site builds statically to `dist/` and is deployed to GitHub Pages via `.github/workflows/deploy.yml` on every push to the `main` branch.

* **Custom Domain:** `peachproductions.art` (managed via `public/CNAME`).

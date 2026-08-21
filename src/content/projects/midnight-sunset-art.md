---
title: "Midnight Sunset & Generative Visual Computing"
role: Creative Coder & Visual Artist
timeline: 2026
overview: An in-situ piece designed for a music festival hosted annually in the summer of Mendocino. This year's theme was 'Luxury Resort' and the sunset art piece was ran from approximately 9PM to 4AM.
status: active
stack: [Processing, Java, GLSL Shaders, Creative Coding, Computational Art]
kpis: ["Dynamic atmospheric light modeling", "Real-time shader color blending", "Generative raster & vector geometry"]
links:
  - label: Processing Sketches on GitHub
    href: https://github.com/peachy-codes
---

![Midnight Sunset Outdoor Fabric Projection](/assets/images/sunset-installation.jpg)

## Overview

**Midnight Sunset** is an algorithmic art and projection installation combining procedural color synthesis, gradient field equations, and generative raster geometry projected onto suspended organic fabric.

<div style="margin: 1.5rem 0; border: 1px solid var(--border); background: #000; overflow: hidden;">
  <video 
    src="/assets/images/sunset-projection.mp4" 
    controls 
    muted 
    playsinline 
    loop 
    style="width: 100%; max-height: 500px; display: block; margin: auto;"
  ></video>
</div>

---

## Artistic & Technical Themes

- **Procedural Rendering:** Non-linear trig and other methods used to create chromatic aberration and other sunlight effects.
- **Projection Medium:** Multi-layered tulle draped over paracord fastened to neighboring trees in a non-destructive manner.
- **Custom Shaders & Real-Time Performance:** GLSL was utilized to keep power draw low since this was for an outdoor event where battery power was limited. 
- **Generative Textures:** Perlin noise was used to create the whitecaps of the waves as well as the clouds.

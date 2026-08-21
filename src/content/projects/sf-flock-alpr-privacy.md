---
title: "SF-Flock: ALPR Surveillance Privacy Analysis System"
role: Systems Researcher & Lead Developer
timeline: 2025 -- 2026
overview: Interactive simulation framework and graph engine to quantify vehicle anonymity loss across San Francisco's ALPR camera network using time-geographic space-time prisms and negative observation constraints.
status: active
stack: [Python, FastAPI, NetworkX, OSMnx, SciPy, Shapely, React, MapLibre GL, TailwindCSS]
kpis: ["Custom Dijkstra for prism calculations.", "Negative information modeling", "Real-time space-time prism rendering", "Precomputed test routes"]
links:
  - label: SF-Flock Repository
    href: https://github.com/peachy-codes/sf-flock
---

## Overview

**SF-Flock** is an interactive, data-driven simulation and analysis system designed to measure and visualize the privacy implications of Automated License Plate Reader (ALPR) camera networks across San Francisco.

Using **Time-Geographic Space-Time Prisms**, the system maps vehicle location uncertainty between known observation timestamps, quantifying the computational power of **negative information** (*if a vehicle was not detected by any intermediate camera, it could not have taken any route containing one*).

---

## Technical Architecture

### 1. Spatial Graph Traversal & Pruning
- Modeled the complete San Francisco road network as a directed graph using **OSMnx** and **NetworkX**.
- Implemented **SciPy CKDTree** spatial indexing for rapid geometric camera snapping and coordinate nearest-neighbor queries.
- Algorithmic median-crossover and U-turn filters prevent unrealistic route trajectories across parallel segments.

### 2. Time-Geographic Space-Time Prisms
- Formulated forward and backward reachable time cones based on travel speed budgets between two known camera observations.
- Intersected the forward and backward reachable subgraphs to compute the exact reachable space-time prism.
- Applied **negative camera constraints** to prune graph nodes and edges that intersect un-triggered ALPR cameras, measuring the exact percentage reduction in citizen anonymity.

### 3. Backend & Frontend Implementation
- Built a high-performance **FastAPI** backend serving on-demand route graph computations and cached simulation payloads.
- Implemented an interactive dashboard using **React**, **MapLibre GL**, and custom canvas shaders to render glowing gradient uncertainty overlays in real time.

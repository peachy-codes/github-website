---
title: Differential Geometry & UMAP Manifold Curvature Analysis
role: Mathematics & ML Researcher
timeline: 2025
overview: Investigating high-dimensional embedding stability and boundary deformation in 2D UMAP manifolds using differential geometry, alpha-shape concave hulls, periodic splines, and Wasserstein distance.
status: active
stack: [Python, UMAP, SciPy, Differential Geometry, Shapely, Wasserstein Distance, Matplotlib, NumPy]
kpis: ["Alpha-shape concave hull boundary fitting", "Scale-invariant periodic spline curvature", "Wasserstein distance drift quantification", "Automated perturbation experiment pipeline"]
links:
  - label: UMAP Hull Curvature Project on GitHub
    href: https://github.com/peachy-codes/umap_hull_curvature_project
---

## Overview

This research bridges **Pure Mathematics (Differential Geometry)** and **Representation Learning (Manifold Embeddings)**. 

The project constructs an automated experiment measuring how topological embeddings deform when subsets of data (e.g. digit classes in MNIST) are removed and incrementally restored.

---

## Methodology & Mathematical Formulation

### 1. Manifold Embedding & Class Perturbations
- Fit reference UMAP embeddings on controlled high-dimensional image subsets.
- Incrementally drop and re-introduce individual classes across controlled fractional stages, refitting embeddings deterministically.

### 2. Concave Boundary & Periodic Spline Curvature
- Fit enclosing boundary curves via **alpha-shape concave hulls** around target embedding clusters.
- Parameterize boundaries as smooth, periodic 2D splines and sample uniformly by arc length.
- Compute local signed curvature \(\kappa(s)\) along the boundary curve from first and second parametric derivatives.

### 3. Scale-Invariance & Wasserstein Distance
- Enforce scale-invariance by normalizing curvature distributions with the boundary's root-mean-square (RMS) radius.
- Quantify topological deformation by computing the **Wasserstein distance** (Earth Mover's Distance) between perturbed curvature distributions and the unperturbed reference embedding.
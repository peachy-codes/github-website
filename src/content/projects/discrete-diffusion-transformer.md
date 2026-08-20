---
title: "Discrete Diffusion Language Modeling (Transformer Denoiser)"
role: AI Researcher & Engineer
timeline: 2025
overview: Implementation and training of a ~253M parameter discrete diffusion Transformer in PyTorch for non-autoregressive, controllable text generation and fixed-token infilling.
status: active
stack: [Python, PyTorch, Transformers, Masked Diffusion, Hugging Face, MPS / Apple Silicon, YAML]
kpis: ["~253M parameter Transformer denoiser", "Fixed-token constraint generation", "Masked discrete diffusion (MDLM)", "Offline local training & inference"]
links:
  - label: Diff-LLM Playground Repository
    href: https://github.com/peachy-codes/diff-llm-playground
---

## Overview

An experimental investigation into **discrete diffusion language modeling** (non-autoregressive generation) as an alternative to traditional causal next-token prediction.

The system trains a bidirectional **Transformer Denoiser** to iteratively refine fully masked or noisy token sequences into coherent natural language text under arbitrary fixed-token constraints.

---

## Technical Details

### 1. Architecture & Denoising Objectives
- Implemented a ~253M parameter bidirectional Transformer denoiser in **PyTorch**.
- Built time-step embedding schedules and discrete transition matrices for continuous-to-discrete noise schedules.
- Formulated categorical diffusion and masked language modeling objectives (MDLM) over 1.0B English tokens (SlimPajama corpus).

### 2. Controllable Text Infilling & Fixed-Token Sampling
- Implemented conditional inference algorithms allowing users to pin tokens at arbitrary sequence indices (prefix, suffix, or infill).
- The diffusion sampling loop preserves fixed positions during reverse denoising steps, generating syntactically and semantically coherent text connecting boundary constraints.
- Benchmarked offline inference performance and perplexity metrics across Apple Silicon (MPS) and CUDA environments.

---
title: ACLU Legal Document Processing Pipeline
role: ML Engineer & Data Scientist
timeline: 2024–2025
overview: A local-first, privacy-preserving ML and OCR pipeline designed for rapid discovery triage across terabytes of sensitive legal records without cloud exposure.
status: active
stack: [PyTorch, Transformers, Tesseract OCR, Whisper, MLflow, Metaflow, DVC, Python]
kpis: ["100% On-Premise Execution", "Zero Cloud Data Leakage", "Substantial Reduction in Review Bottlenecks", "Reproducible Audit Trails"]
links: []
---

## The Core Challenge: Discovery Overload in Public Interest Law

In civil rights litigation against state agencies and law enforcement, discovery production often results in massive "document and media dumps"—hundreds of hours of body-worn camera (BWC) footage, thousands of scanned PDFs, and messy email archives. 

Legal teams face two critical constraints:
1. **Severe Resource Asymmetry:** Non-profit legal investigators must manually review hundreds of hours of raw footage and dense paper scans to identify key infractions.
2. **Strict OpSec & Protective Orders:** Case evidence is bound by court orders and bar confidentiality rules. Uploading sensitive investigative materials to hosted commercial APIs (e.g., OpenAI, Anthropic) violates legal ethics and protective covenants.

---

## Technical Approach: Local-First Systems Engineering

To solve both constraints, I built an end-to-end local document and media processing engine that runs entirely on isolated, in-house hardware.

```
[Raw BWC Footage / PDF Scans]
         │
         ├───► Audio Extraction ───► Local Whisper ────┐
         │                                            ▼
         └───► Image Preprocessing ──► Local OCR ──► [Normalized Text Stream]
                                                           │
                                                           ▼
                                               [Local Embedding & Index]
                                                           │
                                                           ▼
                                                [Investigator Triage UI]
```

### 1. Ingestion & Multimodal Extraction
- **Optical Character Recognition (OCR):** Preprocessing scanned court filings, handwritten field notes, and low-contrast paper documents using tuned binarization before text extraction.
- **Audio & Speech-to-Text:** Local Whisper models transcribing BWC audio in parallel, producing timestamp-aligned transcripts indexed by speaker turn and incident time.

### 2. Local-First Indexing & Semantic Triage
- Text streams are chunked and embedded with local transformer models, allowing attorneys to search across multimodal archives using semantic concepts rather than just fragile keyword matches.
- All embeddings and vector indexes remain strictly local with zero internet transmission.

### 3. Workflow Orchestration & Version Control
- **Metaflow** manages deterministic DAG pipelines from raw media ingest to feature storage.
- **MLflow & DVC** track model versions, parameter configs, and data hashes to ensure every step is auditable for court evidentiary standards.

---

## Impact

* **Drastic Triage Acceleration:** Accelerated investigative document review cycles, allowing legal teams to pinpoint relevant timestamps and key evidence across massive productions.
* **Full Data Sovereignty:** Maintained strict compliance with protective court orders by keeping 100% of data processing within trusted physical boundaries.

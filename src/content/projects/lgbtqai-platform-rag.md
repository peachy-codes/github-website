---
title: LGBTQ.ai+ Content Analysis Platform
role: Lead ML Engineer
timeline: 2025
overview: RAG-based classification and retrieval with containerized deployment on GCP; bias-aware stance classification for anti-/pro-trans news content.
status: active
stack: [Python, PyTorch, Transformers, sentence-transformers, TripletLoss, scikit-learn, MongoDB, Airflow, Docker, Kubernetes, GCP, RSS, News APIs, DVC]
kpis: ["Automated twice-daily ingestion", "Human-in-the-loop labeling workflow", "Staged data buckets to prevent leakage", "Reproducible training and deployment pipelines"]
links: 
- label: lgbtq.ai+ repo on Github
href: https://github.com/peachy-codes/lgbtq.ai
---

**Problem.** Build a retrieval-and-generation platform that surfaces trustworthy, trans-affirming sources and reduces the impact of biased or hostile content. Classify article stance (pro/neutral vs. anti-trans) and enable transparent retrieval for downstream RAG.

**Data sources.**
- News aggregator **APIs** (e.g., NewsAPI) and **RSS** feeds polled on a fixed schedule.  
- Deduplication via deterministic filename/title **hash** to handle updates without double-counting.

**Storage and data hygiene.**
- **MongoDB** with staged buckets: raw → review queue → labeled-recent → labeled-all → retrieval.  
- Separation of training vs. retrieval stores to **avoid data leakage**.  
- Minimal metadata retained; no web crawling to respect site guidelines.

**Labeling.**
- Human review of articles sampled into the queue; stance labels recorded and promoted to the labeled stores.  
- Accumulated labels batched to trigger training.

**Modeling.**
- **Transformer** encoder with **triplet loss** training (anchor/positive/negative) using transfer learning.  
- Batches of ~20 labeled articles per training cycle; three epochs per model variant.  
- Periodic training across model candidates; embeddings used for stance separation and retrieval scoring.

**Pipeline & operations.**
- **Airflow DAG** with six stages, scheduled **twice daily**: fetch → dedupe → queue for review → label consolidation → embed & train → evaluation + deploy notification.  
- **Docker** images orchestrated on **Kubernetes** (GCP).  
- **DVC** for dataset and experiment versioning; artifact logs retained for auditability.

**Evaluation & findings.**
- Tracked **triplet loss** across 11 model variants; best observed loss ≈ 0.3.  
- End-task accuracy currently **~50–70%** depending on batch and epoch settings; higher epochs and larger batches did **not** improve accuracy.  
- Confusion matrices show degradation under growing dataset size with naive transfer learning.

**Mitigations and next steps.**
- Introduce **hard triplet mining** using **k-NN** in embedding space to select challenging positives/negatives near the decision boundary.  
- Explore a **bespoke encoder** (reduced reliance on transfer learning) and a **larger embedding dimensionality** tuned to stance nuance.  
- Review clustering choice in the retrieval layer and its interaction with transformer embeddings.  
- Continue human-in-the-loop review and threshold calibration; add drift checks on stance distribution.

**Results.**
- End-to-end **RAG pipeline** with automated ingestion, labeling, training, and deployment notifications.  
- Transparent retrieval with staged data governance and reproducible runs.  
- Clear improvement path identified (hard mining, architecture tuning) to raise stance classification quality while keeping the system auditable.
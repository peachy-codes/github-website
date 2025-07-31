---
title: Communications Graph Analytics
role: Data Scientist
timeline: 2025
overview: Influence and topic flow analysis across internal communication streams.
status: active
stack: [Python, pandas, scikit-learn, NetworkX, matplotlib, PyVis]
kpis: ["Time-sliced network summaries", "Top communicators by weighted degree", "Topic keywords by TF-IDF"]
links: []
---

**Problem.** Understand communication patterns and topic propagation over time.

**Data.** Message metadata with timestamp, sender, recipient, subject, and reply-to or thread id. Addresses normalized to consistent identifiers.

**Approach.**
- **Preprocessing.** Remove duplicates. Normalize email aliases to a canonical id. Reconstruct threads using reply-to or subject heuristics. Bucket messages by week or month for temporal analysis.
- **Graph construction.** Nodes represent people or channels. Edges represent message interactions. Edge weights equal message count within the selected window. Optional recency weighting that down-weights older interactions.
- **Network measures.** Degree and weighted degree to surface high-traffic actors. Betweenness centrality to flag bridges between groups. Connected components and basic density to describe structure.
- **Communities.** Community detection with NetworkX (greedy modularity or label propagation) to group related actors. Summarize traffic within and across communities.
- **Topics (lightweight).** TF-IDF on subject or short text with unigrams and bigrams. Top terms by window and by community to show what each group discusses. Cosine similarity across windows to spot shifts in emphasis.
- **Visualization.** Static network plots with matplotlib for reports. Interactive exploration with PyVis when reviewing nodes and edges. Line charts of message volume and stacked bars by community over time.

**Results.** Clear identification of active communicators and bridges. Simple topic keywords tied to communities and time windows. Faster review by focusing on high-impact nodes and periods with notable shifts in message volume or theme.
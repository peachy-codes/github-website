---
title: Exploring Disparate Impact with Geospatial Analysis and Communication Graphing
role: Data Scientist, Machine Learning Engineer
timeline: 2025
overview: This research explores whether law enforcement disproportionately patrols certain communities, combining geospatial analysis and communication graphing to uncover patterns. The work supports investigations into potential violations of the Fourth Amendment (Search and Seizure) and the Fourteenth Amendment (Equal Protection Clause).
status: active
stack: [NetworkX, Graph tooling, Python, Visualization, ArcGIS, YOLOv5]
kpis: ["Open-ended", "Reduced time-to-action"]
links:
  - label: Creative Activity Research Day
    href: https://myusf.usfca.edu/card2025

---

## Research Questions

- **Where** does patrolling occur most intensely?
- **How** are these activities discussed internally by law enforcement?
- Do patterns show **disparate impact** on protected communities?

_Disparate impact_ refers to policies or practices that adversely affect one group more than others, even when not intentionally discriminatory.

---

## Geospatial Analysis

### Dataset

- **Unit of analysis:** Census Block Groups (n=230)
- **Attributes extracted using ArcGIS Pro:**
  - **Demographic:** Race/Ethnicity, Poverty Rate, Median Income, English Learner Status, Educational Attainment, Unemployment Rate  
  - **Environmental:** Wetland & Watershed Coverage  
  - **Zoning:** Residential Housing Density, Private Area, Population Estimates, Homeowner Rate

- **Targets:**
  - All patrol reports
  - Cannabis-flagged patrol reports  
  (Derived from PRA requests and internal documents)

### Modeling

- **Model type:** Random Forest Regression
- **Train/Test split:** 184 / 46 block groups
- **Goal:** Assess if cannabis-related patrols concentrate in specific communities

### Results

#### All Patrol Reports  
**Test R²:** 0.41  
**Validation R²:** 0.52

| Feature                      | Importance Score |
|-----------------------------|------------------|
| Wetland/Watershed           | 0.1909           |
| Poverty Rate                | 0.1362           |
| Population Estimate         | 0.1048           |
| Bachelor's Attainment       | 0.1021           |
| Residential Housing Density | 0.0917           |

#### Cannabis-Flagged Reports  
**Test R²:** Invalid  
**Validation R²:** 0.44  

| Feature                      | Importance Score |
|-----------------------------|------------------|
| Bachelor's Attainment       | 0.2825           |
| Hispanic/Latino             | 0.1642           |
| Wetland/Watershed           | 0.1640           |
| English Learner Rate        | 0.1083           |
| Residential Housing Density | 0.0741           |

### SHAP Explanations (Cannabis-Flagged Reports)

| Feature                      | Mean \|SHAP\| | Mean SHAP | StdDev   |
|-----------------------------|---------------|------------|----------|
| Bachelor's Attainment       | 0.4424        | 0.0545     | 0.9268   |
| English Learner Status      | 0.2575        | 0.0045     | 0.5071   |
| Hispanic/Latino             | 0.2171        | 0.0365     | 0.4634   |
| Residential Housing Density | 0.1324        | -0.0075    | 0.2714   |
| Wetland/Watershed           | 0.0510        | 0.0012     | 0.6608   |

> **Conclusion:** Patterns suggest patrols may be concentrated in areas with higher Hispanic/Latino and English Learner populations, especially for cannabis-related investigations. However, model performance is moderate—results should guide further research, not legal conclusions.

---

## Communication Graphing

### Dataset

- ~5,000 internal emails from a law enforcement agency over 4 years
- ~200 employees, multiple teams
- Collected via PRA request
- Unstructured and noisy (non-standard formats)

### Methodology

1. **Latent Dirichlet Allocation (LDA)** for topic discovery  
2. **Network graphing** to visualize:
   - Who discusses which topics
   - Topic evolution over time
3. **Statistical significance testing** on topic frequency over time (α = 0.05)

### Example Workflow

1. Extracted topic: _“permit”, “surveillance”, “cannabis”, “dwelling”_
2. Batch group emails by this topic
3. Identify individuals discussing it
4. Map topic intensity over time across the org

### Results

- **“Hot docs”** identified through LDA improve investigator efficiency
- Communication networks showed:
  - Team- and individual-level differences
  - Noticeable shifts after legal action (e.g., lawsuit filing)
- **Significant trends** in cannabis enforcement topics over time

> **Conclusion:** LDA-based communication modeling provides useful prioritization for litigation teams and supports rapid legal review of internal documents.

---

## Future Directions

- **Modeling improvements:**  
  Use GWR, GAM, and zero-inflated models to improve patrol prediction accuracy.
  
- **Communication modeling enhancements:**  
  Explore graph-based deep learning (e.g., GNNs, GANs) to enrich topic extraction and document prioritization.

---

## Acknowledgements

Special thanks to:
- **Robert Clements**, USF M.S. in Data Science
- **Dylan Verner-Crist** and **Ian Duke**, ACLU of Northern California

This work was supported by the Master’s in Data Science program at the University of San Francisco.

---

## Contact

**Hadley Dixon**  
📧 [hadley.dixon22@gmail.com](mailto:hadley.dixon22@gmail.com)

**Georgia von Minden**  
📧 [georgia.vonminden@gmail.com](mailto:georgia.vonminden@gmail.com)

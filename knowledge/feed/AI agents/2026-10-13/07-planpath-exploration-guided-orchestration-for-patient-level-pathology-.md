---
title: "PlanPath: Exploration-Guided Orchestration for Patient-Level Pathology Reasoning"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2610.18664v1"
date: "2026-10-13"
topic: "AI agents"
type: "paper"
read: false
summary: "A patient's pathology case spans tens of slides from distinct specimens and anatomical sites, each carrying non-redundant, site-specific evidence. Forming a patient-level conclusion therefore requires locating the slides relevant to a given question and integrating complementary findings across them. However, existing pathology agents analyze one slide at... (Local summary fallback used.)"
---

A patient's pathology case spans tens of slides from distinct specimens and anatomical sites, each carrying non-redundant, site-specific evidence. Forming a patient-level conclusion therefore requires locating the slides relevant to a given question and integrating complementary findings across them. However, existing pathology agents analyze one slide at a time and describe morphology rather than measure it, leaving evidence acquisition across a patient's specimens and patient-level quantification underexplored. To address this gap, we propose PlanPath, an agentic framework for patient-level pathology visual question answering (VQA). PlanPath turns the question into an exploration plan that specifies the evidence required, routes to the slides likely to carry it, and drives coarse-to-fine acquisition from tissue architecture down to individual cells. Tissue- and cell-level tools supply the counts, proportions, and extents, which PlanPath aggregates across slides into a traceable answer. To enable evaluation, we build two patient-level VQA datasets for renal and gastric cancer, averaging 15 WSIs per patient, with pathologist-verified question-answer pairs derived from diagnostic reports. Experimental results show that PlanPath outperforms the strongest baseline by 9.4% and 12.1% in overall accuracy on the two datasets and further improves existing slide-level agents when plugged into our framework. The dataset and code are available at: https://github.com/JSGe-AI/PlanPath_1.

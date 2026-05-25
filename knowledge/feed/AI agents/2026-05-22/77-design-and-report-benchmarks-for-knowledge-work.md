---
title: "Design and Report Benchmarks for Knowledge Work"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2605.23262v1"
date: "2026-05-22"
topic: "AI agents"
type: "paper"
read: false
summary: "The development of LLM agents has led to a growing body of work on knowledge-work AI, including coding, research, and healthcare. However, current knowledge-work evaluation and benchmark design still largely follow the logic of traditional NLP tasks. As a result, higher benchmark performance does not reliably show that a system can carry out knowledge wor... (Local summary fallback used.)"
---

The development of LLM agents has led to a growing body of work on knowledge-work AI, including coding, research, and healthcare. However, current knowledge-work evaluation and benchmark design still largely follow the logic of traditional NLP tasks. As a result, higher benchmark performance does not reliably show that a system can carry out knowledge work in real-world deployment settings. This paper contributes a three-step approach for making explicit how benchmarked tasks represent the work claims attached to their scores: defining the work activity under evaluation, specifying the tested setting, and scoring the appropriate work product. We review work studies showing that knowledge work is organized through roles and responsibilities, local materials and tools, and artifacts that must remain usable in downstream workflows. We then translate these concerns into benchmark design and reporting guidance, covering how tasks should be mapped to work activities, how tested settings should specify materials, tools, roles, and constraints, and how scoring should focus on the work product left by the system. To name the work activity being evaluated and distinguish it from common benchmark tasks, we derive an inventory of 18 work activities from the O{*}NET occupational task database. We demonstrate the approach through three benchmark case analyses: GDPval, a non-code occupational deliverable benchmark; OfficeQA Pro, a grounded document-analysis benchmark scored by final answers; and APEX-SWE, a software-engineering benchmark with executable scored products. These cases show how benchmark design choices shape the strongest work claim a score can support, and where gaps arise between the benchmarked task, tested setting, scored product, and broader work claim.

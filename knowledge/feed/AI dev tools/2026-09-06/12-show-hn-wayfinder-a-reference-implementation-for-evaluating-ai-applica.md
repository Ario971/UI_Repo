---
title: "Show HN: Wayfinder – A reference implementation for evaluating AI applications"
source: "Hacker News Show HN"
url: "https://github.com/DivakarUngatla/wayfinder"
date: "2026-09-06"
topic: "AI dev tools"
type: "article"
read: false
summary: "Testing is critical to software applications — first to make sure they reliably serve the purpose they were built for, and then to make sure they stay that way as they grow, evolve and change. The same applies to AI applications as well. But testing AI applications is very different from testing classic software applications, especially because of their n... (Local summary fallback used.)"
---

Testing is critical to software applications — first to make sure they reliably serve the purpose they were built for, and then to make sure they stay that way as they grow, evolve and change. The same applies to AI applications as well. But testing AI applications is very different from testing classic software applications, especially because of their non-deterministic nature. It is very important for AI Engineers to develop a deep understanding of AI Evaluation to be able to build reliable AI applications and ship changes faster without breaking their existing behavior. AI Evaluation is often presented as a long list of independent techniques: Rule-Based Evaluation, Human Evaluation, LLM-as-a-Judge, Offline Evaluation, Online Evaluation, Component Evaluation and End-to-End Evaluation. But in practice they all complement and build on each other. I built Wayfinder, a reference implementation where I explore these concepts progressively using the same AI application. My goal was to build an intuition for how the different evaluation techniques fit together, and how to turn them into an evaluation strategy for an AI application. I'd be interested to hear how others are approaching evaluation in production AI applications and what you think is missing from this implementation.

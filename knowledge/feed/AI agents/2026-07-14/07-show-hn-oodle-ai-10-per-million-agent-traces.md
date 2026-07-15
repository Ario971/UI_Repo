---
title: "Show HN: Oodle.ai – $10 per million agent traces"
source: "Hacker News Top + Show HN"
url: "https://www.oodle.ai/product/agent-observability"
date: "2026-07-14"
topic: "AI agents"
type: "article"
read: false
summary: "Hi HN, we're Kiran and Vijay! Over the past two years, we have built a columnar storage engine for observability: logs, metrics, and traces. Today, it's exciting for us to show what we've built on top of that foundation: LLM Agent Observability. Given how non-deterministic agents are, storing all traces without sampling was critical for us. But these trac... (Local summary fallback used.)"
---

Hi HN, we're Kiran and Vijay! Over the past two years, we have built a columnar storage engine for observability: logs, metrics, and traces. Today, it's exciting for us to show what we've built on top of that foundation: LLM Agent Observability. Given how non-deterministic agents are, storing all traces without sampling was critical for us. But these traces tend to be in the MBs, sometimes GBs - we needed to store them inexpensively. We also needed the queries and analyses to be fast. To meet both these goals, we store them in S3 in our own parquet-like file format, and query them using AWS Lambda. Since we process each span of every trace, instead of running LLM-based evals on each, we first analyze them using deterministic techniques. We detect tool failures, retries, loops, abnormal token usage, latency regressions, schema violations, sentiment, and other production signals. We've written more about the approach here: https://blog.oodle.ai/you-cant-sample-your-way-to-reliable-a... The combination of our own engine, no sampling, and deterministic processing before LLM-for-evals allows us to price at $10 per million traces, provide sub-second p99 query latency, and have healthy margins. Before building this, we used Langfuse for our own agent observability, which was 6x more expensive. Still super early, and rough around some edges, we would love your questions and feedback!

---
title: "Show HN: Recurse – Develop and deploy specialist agents faster"
source: "Hacker News Top + Show HN"
url: "https://recurse.run"
date: "2026-09-25"
topic: "AI agents"
type: "article"
read: false
summary: "Hi HN! We are looking to gather some feedback on our serverless agent harness. The admittedly not-so-specific use case is to accelerate agent development and deployment. After building several custom/special-purpose agents for a few customers, we built this to accelerate our workflow at first, and now we are trying to understand whether it could be useful... (Local summary fallback used.)"
---

Hi HN! We are looking to gather some feedback on our serverless agent harness. The admittedly not-so-specific use case is to accelerate agent development and deployment. After building several custom/special-purpose agents for a few customers, we built this to accelerate our workflow at first, and now we are trying to understand whether it could be useful to others. Our driver use case was development of specialist agents with a request/response lifecycle. Think of agents that have a well established input/output contract where they are expected to produce high-quality output (artifacts, responses etc.). Especially when the problem is in some verifiable domain and the LLM can iteratively refine a result to a final value that satisfies constraints or optimizes some goal. The product is a coding agent skill + a serverless execution runtime with a harness that takes in a system prompt + Python functions as tools. The coding agent takes in the requirements from the user, and tries agent variants by executing prompt/tool variants it creates. It works best for cases where you can think of how you can evaluate a candidate agent - when you describe this information to your coding agent, it often does a decent job at building candidate prompts, tools and even benchmarks. Prompts and Python tools that the coding agent creates integrate with a harness that implements an FSM that is tuned to drive an iterative refinement process for verifiable domains. This tuning enables one to use small models like Luna to produce high quality results while keeping costs at a manageable level. Our website is not 100% complete yet (some examples are missing write-ups, not all use cases we tried are there etc.), but the system is operational and docs are there. Thanks!

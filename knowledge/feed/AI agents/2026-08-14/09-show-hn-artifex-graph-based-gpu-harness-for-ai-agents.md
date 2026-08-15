---
title: "Show HN: Artifex - Graph Based GPU Harness for AI Agents"
source: "Hacker News Top + Show HN"
url: "https://gatewai.studio/artifex"
date: "2026-08-14"
topic: "AI agents"
type: "article"
read: false
summary: "Artifex is a machine-first, headless CLI runtime built for autonomous coding agents to author, validate, and render media node graphs locally. The agent talks to Artifex through a structured CLI interface. Workflows are DAGs, and each node is a plugin that can implement its own execution logic.. Each node has capability to inject logic into graph processi... (Local summary fallback used.)"
---

Artifex is a machine-first, headless CLI runtime built for autonomous coding agents to author, validate, and render media node graphs locally. The agent talks to Artifex through a structured CLI interface. Workflows are DAGs, and each node is a plugin that can implement its own execution logic.. Each node has capability to inject logic into graph processing, WebGPU rendering, audio processing and their own SKILL.md file. Nodes can also inject their react components (not available with CLI) - which will be available with the desktop app. Execution is topological and supports checkpoint caching via state flags (--state and --from-state), allowing agents to adjust layout coordinates or downstream filters without recomputing expensive and long upstream generation calls (such as Video Generation using Fal AI or an Agent Node using OpenRouter). Multi-track visual composition timeline with animations, blending, media cut, crop, color LUTs, filter graphs, audio effects and other media editing node's are compiled and rendered directly on the local GPU runtime, ensuring deterministic offline execution and intermediate artifacts at each step of the pipeline. The CLI[0] is not fully open source yet, but its repository contains the build bundle. The plan is to make it open source after we decouple it from our monorepo that powers our web application [1]. Our roadmap also contains a SDK for agents/programmers to build plugins locally in their own filesystem for custom use-cases. [0]: https://github.com/gatewai-dev/artifex [1]: https://gatewai.studio

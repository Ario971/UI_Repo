---
title: "Show HN: BeamWeaver – LangChain/DeepAgents-style agents and workflows for Elixir"
source: "Hacker News Top + Show HN"
url: "https://github.com/caudena/beam_weaver"
date: "2026-06-19"
topic: "AI agents"
type: "article"
read: false
summary: "Hi HN, We build agents in Elixir. We kept running into the same issue and found there is no observability for agentic systems. We decided to take the best aspects of LangChain, LangGraph, and DeepAgents and put them into Elixir. BeamWeaver comes with an OTP-native design and: - agents and tool calling - graph workflows - checkpoints and resumable executio... (Local summary fallback used.)"
---

Hi HN, We build agents in Elixir. We kept running into the same issue and found there is no observability for agentic systems. We decided to take the best aspects of LangChain, LangGraph, and DeepAgents and put them into Elixir. BeamWeaver comes with an OTP-native design and: - agents and tool calling - graph workflows - checkpoints and resumable execution - memory stores - retries, fallbacks, interrupts, and human review - typed streaming events - provider adapters for OpenAI, Anthropic, Google Gemini, xAI, and Moonshot/Kimi - fake/replay models for deterministic tests We're also building observability on top of it through WeaveScope, which we'll release very soon. BeamWeaver gives Elixir teams the tools needed to build advanced agentic systems without pushing the hard parts into Python services.

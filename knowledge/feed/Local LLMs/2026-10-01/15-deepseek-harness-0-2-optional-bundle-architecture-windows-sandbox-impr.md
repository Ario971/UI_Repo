---
title: "DeepSeek harness 0.2 - Optional Bundle Architecture, Windows Sandbox improvements, Async Question Mode, Desktop release, Web Search without key"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1wutkgt/deepseek_harness_02_optional_bundle_architecture/"
date: "2026-10-01"
topic: "Local LLMs"
type: "article"
read: false
summary: "Optional Bundle architecture : Schedule (session-local delayed / timed / interval reminders) was removed from the default set and made an explicit Optional Bundle. This cleanly separates “installed” from “enabled” and is the first systematic use of the Profile + Bundle model for official features. • Windows Sandbox improvements : A new permission-diagnosi... (Local summary fallback used.)"
---

Optional Bundle architecture : Schedule (session-local delayed / timed / interval reminders) was removed from the default set and made an explicit Optional Bundle. This cleanly separates “installed” from “enabled” and is the first systematic use of the Profile + Bundle model for official features. • Windows Sandbox improvements : A new permission-diagnosis skill can detect common Access Denied causes and perform backed-up, recoverable permission fixes after user authorization, giving the Agent a reliable recovery path instead of blind retries. • Async Question Mode (experimental) : “Ask the user” is no longer a hard synchronous block. After a timeout the Agent can keep working while the user answers later, introducing asynchrony between interaction and execution. • Model-layer polish : DeepSeek-account sessions can use Web Search without an extra API key; third-party model catalog updated (some old IDs removed); long model lists now support fuzzy search and keyboard navigation. • Desktop release : Official Windows and macOS clients are out (Linux unsupported). Account login is supported, suggesting paid plans may be coming soon. • Overall theme: Version 0.2 strengthens the Agent Runtime’s composability, recoverability, permission boundaries, and execution-state semantics — the practical foundations needed to move from a toy toward production use. submitted by /u/WebAssemblyMan [link] [comments]

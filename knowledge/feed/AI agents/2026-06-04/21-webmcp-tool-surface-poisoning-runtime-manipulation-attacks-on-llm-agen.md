---
title: "WebMCP Tool Surface Poisoning: Runtime Manipulation Attacks on LLM Agents"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2606.06387v1"
date: "2026-06-04"
topic: "AI agents"
type: "paper"
read: false
summary: "WebMCP is a newly emerging protocol that enables websites to expose tools directly to AI agents, bypassing traditional user interfaces and introducing new security risks. The dynamic exposure of agent-accessible tools in WebMCP expands the attack surface of web sessions, especially when third-party scripts are involved. In this study, we identify a new po... (Local summary fallback used.)"
---

WebMCP is a newly emerging protocol that enables websites to expose tools directly to AI agents, bypassing traditional user interfaces and introducing new security risks. The dynamic exposure of agent-accessible tools in WebMCP expands the attack surface of web sessions, especially when third-party scripts are involved. In this study, we identify a new potential threat, termed Mid-Session Tool Injection (MSTI), in which attackers leverage third-party scripts to inject malicious tools during an active session. To better characterize this threat, we classify MSTI based on the stage and target of manipulation, distinguishing between Tool Hijacking and Tool Framing. Tool Hijacking modifies the set of tools visible to the agent through mechanisms such as the AbortSignal API or race conditions during tool registration. In contrast, Tool Framing influences the agent's perception of tool roles through metadata fields such as tool name, description, readOnlyHint, and inputSchema. Our implementation demonstrates that both Tool Hijacking and Tool Framing can successfully disrupt the intended functionality of WebMCP. Based on these results, we outline potential mitigation directions and provide security design recommendations for WebMCP, including binding tool identity to its origin, ensuring lifecycle consistency, enforcing data boundaries for third-party tools, and maintaining traceable logs of tool registration and invocation. These findings indicate that MSTI arises from WebMCP's unique tool lifecycle and structured metadata, making the tool surface itself an emerging security concern.

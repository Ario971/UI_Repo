---
title: "My Credentials, Please: Detecting Filesystem Capability Laundering in MCP Servers at Scale"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2610.22301v1"
date: "2026-10-15"
topic: "AI agents"
type: "paper"
read: false
summary: "The Model Context Protocol (MCP) standardizes how AI agents invoke external tools. MCP servers expose tools through a declared contract consisting of a name, description, and argument schema. In typical local deployments, client-side approval of a tool call grants the underlying server process broad host filesystem permissions rather than restricting it t... (Local summary fallback used.)"
---

The Model Context Protocol (MCP) standardizes how AI agents invoke external tools. MCP servers expose tools through a declared contract consisting of a name, description, and argument schema. In typical local deployments, client-side approval of a tool call grants the underlying server process broad host filesystem permissions rather than restricting it to the declared operation. We study the resulting vulnerability class, filesystem capability laundering, where attacker-steered arguments cause a tool to access sensitive host files outside its declared contract and deployment scope. We analyze this capability gap across three layers: server-category screening (L1), per-tool contract analysis (L2), and bypassable path-validation checks (L3). We design MCP-FSD to catalog MCP servers, infer least-privilege boundaries per tool, plant credential fixtures outside those boundaries, and evaluate exploitability and sandbox containment via paired dynamic execution. Across 21,097 MCP servers from nine registries, 787 of 4,806 triaged servers (16.4%) exhibit filesystem capabilities despite non-filesystem functional classifications. Dynamic three-case validation confirms 150 vulnerable instances under tested sandbox policies. Coordinated disclosure yielded 13 security advisories, including two CVEs in Anthropic's Git MCP Server.

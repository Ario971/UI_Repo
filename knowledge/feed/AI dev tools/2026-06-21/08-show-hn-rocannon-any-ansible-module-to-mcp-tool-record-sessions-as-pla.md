---
title: "Show HN: Rocannon – Any Ansible module to MCP Tool, record sessions as playbooks"
source: "Hacker News Show HN"
url: "https://github.com/msradam/rocannon"
date: "2026-06-21"
topic: "AI dev tools"
type: "article"
read: false
summary: "I've been using Ansible for IT automation for a while, and the process of writing imperative playbooks in something that looks closer to English I felt was a good fit to design MCP tooling around. I specifically wanted to have a process of running Ansible modules directly as tools from an LLM and record it so my exploratory sessions can become runnable pl... (Local summary fallback used.)"
---

I've been using Ansible for IT automation for a while, and the process of writing imperative playbooks in something that looks closer to English I felt was a good fit to design MCP tooling around. I specifically wanted to have a process of running Ansible modules directly as tools from an LLM and record it so my exploratory sessions can become runnable playbooks. The ansible-doc command already emits the schema for each module, so tool calling is nice and structured, and it feels nice to have this available ad-hoc with all the existing Ansible collections that are out there.

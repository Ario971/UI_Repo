---
title: "Show HN: NUA an agent that tests for product correctness"
source: "Hacker News Top + Show HN"
url: "https://trynua.dev/"
date: "2026-06-02"
topic: "AI agents"
type: "article"
read: false
summary: "We’ve been using background Claude loops a lot recently, and we would wake up to PRs that didn’t solve the problem we wanted, made on assumptions that were wrong. Furthermore, the tests that the agents wrote were usually tautological, and didn’t test for intent. We wanted an agent that took all the context a company has, and writes tests that check for pr... (Local summary fallback used.)"
---

We’ve been using background Claude loops a lot recently, and we would wake up to PRs that didn’t solve the problem we wanted, made on assumptions that were wrong. Furthermore, the tests that the agents wrote were usually tautological, and didn’t test for intent. We wanted an agent that took all the context a company has, and writes tests that check for product correctness as well. For example, we work in reg tech, so bugs aren’t always technical. What we often see is things like insider trading alerts that should’ve fired that didn’t. We wanted an agent that turns laws and regulations into tests. For now, users can upload PDF, MD, TXT, and DOCX files, but we’re planning integrations like Slack, Notion, Linear, and Zoom in the future. We’re early on, so we would love to know what you all think!

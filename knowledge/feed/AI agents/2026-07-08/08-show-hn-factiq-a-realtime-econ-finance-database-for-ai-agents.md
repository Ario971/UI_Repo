---
title: "Show HN: FactIQ – a realtime econ+finance database for AI agents"
source: "Hacker News Top + Show HN"
url: "https://github.com/defog-ai/factiq-plugin"
date: "2026-07-08"
topic: "AI agents"
type: "article"
read: false
summary: "Hey HN, we built an Econ+Finance database to let AI agents do investment research. We spend a lot of tokens to organize macro releases and SEC filings into a clean format, so that your agents have more context to do actual analysis. The problem AI agents are great at data analysis. But they become ineffective if most of their context window is spent on ga... (Local summary fallback used.)"
---

Hey HN, we built an Econ+Finance database to let AI agents do investment research. We spend a lot of tokens to organize macro releases and SEC filings into a clean format, so that your agents have more context to do actual analysis. The problem AI agents are great at data analysis. But they become ineffective if most of their context window is spent on gathering and cleaning data, instead of validating hypotheses. Data in the wild is messy and rarely standardized. Definitions and measurements change over time. This problem is compounded by a fragmented data universe. Point solutions exist for getting just market data, just macro data, or just trade data. But unless you pay $30k/person/year for a Bloomberg terminal - you’re not getting that data inside your AI agent. How we're fixing this We source, clean, and standardize data from SEC filings, official economic series and macro-economic releases. We structure the data so it’s stupidly obvious to query for any agent. All data is stored in just 3 tables with identical schemas and a total of just 20 columns. We keep the metadata like units, methodology and coverage fresh. We're launching today with plugins for Claude Code and Codex. The plugin is open source, so you can adapt it to other agents. So far we have over 25M+ series including macro and detailed bilateral trade series from 8 countries, US equity prices and fundamentals, and much more. We’re adding new data every day - with structured insights from satellite imagery, investor calls and company leadership interviews coming soon. Our ask If you go deep into company fundamentals or sectors, and use AI agents in your investment decisions, we’d love to chat. Please drop us feedback below or at founders@factiq.com!

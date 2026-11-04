---
title: "Show HN: Kairos – Open-source risk and fraud decisioning platform"
source: "Hacker News Show HN"
url: "https://github.com/finic-ai/kairos"
date: "2026-11-03"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hey HN, Ayan here from Finic. We’re launching Kairos, an open source alternative to Sift, Sardine, and other real-time fraud decisioning platforms. Kairos addresses two of the biggest problems facing traditional decisioning tools: a lack of labeled data to train on and dealing with fraudsters that are constantly changing their tactics. 1. Traditional frau... (Local summary fallback used.)"
---

Hey HN, Ayan here from Finic. We’re launching Kairos, an open source alternative to Sift, Sardine, and other real-time fraud decisioning platforms. Kairos addresses two of the biggest problems facing traditional decisioning tools: a lack of labeled data to train on and dealing with fraudsters that are constantly changing their tactics. 1. Traditional fraud solutions use ML models such as XGBoost to detect fraud, but these models are dependent on quality labeled data which many businesses do not have. We address this by using “System One” decision models in additional to traditional models such as XGBoost and logistic regression. This allows you to incorporate plain language questions such as “Is this a throwaway email” into your decisioning, bypassing the need for large amounts of labeled data. This also allows you to capture aspects of fraud that are more unstructured, which is something that XGBoost models struggle with. 2. Fraud teams are facing off with live players that are constantly changing their behavior to bypass the detection logic they have in place. You can train a detection model or define a ruleset once, but it will become obsolete in a matter of weeks as fraudsters figure out what your detection logic is. This means that you need a team regularly training models and updating rules based on new fraud patterns. Typically this takes a large data science/ML team. Kairos addresses this by introducing an MCP server, so that your agent (Claude Code, Cursor, Codex, etc.) can define a decision workflow, train models on your data, and pick the variant that performs best. You can self-host Kairos with Docker or use the hosted version at https://kairos.finic.ai

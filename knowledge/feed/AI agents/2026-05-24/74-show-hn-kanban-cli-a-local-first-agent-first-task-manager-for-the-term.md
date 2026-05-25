---
title: "Show HN: Kanban CLI (A local-first, agent-first task manager for the terminal)"
source: "Hacker News Top + Show HN"
url: "https://codeberg.org/hydrafog/kanban"
date: "2026-05-24"
topic: "AI agents"
type: "article"
read: false
summary: "Hello HN, Ever since agents have become increasingly common in development, I've been scratching my head as to how to control their randomness. Recently, I decided to emulate an issue-tracking and project-management tool for agent-driven workflows. Kanban is a Rust-based coordination layer designed to provide a feature-rich terminal interface and enforce... (Local summary fallback used.)"
---

Hello HN, Ever since agents have become increasingly common in development, I've been scratching my head as to how to control their randomness. Recently, I decided to emulate an issue-tracking and project-management tool for agent-driven workflows. Kanban is a Rust-based coordination layer designed to provide a feature-rich terminal interface and enforce rigorous workflows. It aims to be versatile and extendable, made to be tailored to any preferred flow. It comes with full git integration and guardrails such that only what truly benefits a project can go through. The workflow boils down to 4 steps: 1. The model reads the skill to contextualize the requirements 2. It authenticates and receives a strict, schema-validated JSON payload outlining exact files, context, and acceptance criteria 3. Implementation is performed within an automatically isolated Git worktree and branch. The tool tracks progress (e.g., verifying all files were edited) before the task is submitted for review 4. A reviewer (preferably a human) evaluates the submission and manually transitions the task to "Done," which triggers the final merge and cleans up the task-specific environment. The tool significantly decreases the agent development time, while increasing the human planning phase. There is more to it than I can cover here, so I'd be happy to answer any questions about the architecture, the workflow, or the insights I gained while using it. For more information, I recommend skimming the README, which acts as an index to all documentation files. Repo: https://codeberg.org/hydrafog/kanban

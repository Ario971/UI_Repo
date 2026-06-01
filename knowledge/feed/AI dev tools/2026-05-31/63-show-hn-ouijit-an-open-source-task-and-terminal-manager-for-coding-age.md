---
title: "Show HN: Ouijit, an open-source task and terminal manager for coding agents"
source: "Hacker News Show HN"
url: "https://ouijit.com/"
date: "2026-05-31"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hi HN, I’m working on Ouijit. It’s a project and task-based terminal session manager that provides a few basic but useful tools for agent workflows: - Terminal sessions in Ouijit have access to the ouijit CLI, and supported agents (Claude, Codex, Pi) can work with it out of the box to manage tasks and customize a personal development workflow - Tasks live... (Local summary fallback used.)"
---

Hi HN, I’m working on Ouijit. It’s a project and task-based terminal session manager that provides a few basic but useful tools for agent workflows: - Terminal sessions in Ouijit have access to the ouijit CLI, and supported agents (Claude, Codex, Pi) can work with it out of the box to manage tasks and customize a personal development workflow - Tasks live on a kanban board that supports hooks for task lifecycle events (eg. ‘Run this script when a task moves to ‘in progress’) I’ve found this simple combination to be very expressive and flexible for adapting to changing workflows. I made the V1 a couple months ago for fun, and have kept at it since a friend shared they had logged an 8 hour work session in it. Along the way I’ve baked in lots of what I believe are table-stakes for this type of tool, like task isolation via Git worktrees, agent working/idle status with sound and notifications, diff/markdown plan/URL previews, and support for VM sandboxing using Lima. It’s free and open source with no login or telemetry, so feedback is highly appreciated. Github: https://github.com/ouijit/ouijit Website: https://ouijit.com

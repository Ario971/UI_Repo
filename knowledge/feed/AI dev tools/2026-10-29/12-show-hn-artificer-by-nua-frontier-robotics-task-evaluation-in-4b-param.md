---
title: "Show HN: Artificer by Nua: Frontier robotics task evaluation in 4B parameters"
source: "Hacker News Show HN"
url: "https://usenua.com/blog/artificer"
date: "2026-10-29"
topic: "AI dev tools"
type: "article"
read: false
summary: "We’re happy to introduce Artificer, our first robotics decision model for evaluating robot task progress and success. The problem Robot systems need feedback during training, evaluation, and deployment. An arm might grasp the right object, but place it in the wrong bin. A robot might’ve only completed part of its task before it stopped. Assessing these ou... (Local summary fallback used.)"
---

We’re happy to introduce Artificer, our first robotics decision model for evaluating robot task progress and success. The problem Robot systems need feedback during training, evaluation, and deployment. An arm might grasp the right object, but place it in the wrong bin. A robot might’ve only completed part of its task before it stopped. Assessing these outcomes from video often requires manual review or brittle, handcrafted objectives. Though frontier models do well in evaluation, they are expensive and slow. Artificer is a 4B parameter model that estimates task completion and progress, at the frontier level, from a task description and video. During deployment, these estimates provide feedback to a robot controller to help decide whether to continue an attempt, retry, or move to the next task. Know a robotics team working on task evaluation or success detection? We'd appreciate an introduction! For the robotics founders: we’d love to test Artificer on your task videos! Would love to chat more in the comments or over email! sunny@trynua.dev

---
title: "Show HN: Aigent-OS, a Claude Code harness that clears and resumes"
source: "Hacker News Top + Show HN"
url: "https://github.com/wrg32786/aigent-os"
date: "2026-10-27"
topic: "AI agents"
type: "article"
read: false
summary: "I run my business on four Claude Code agents: Titus, Pheme, Davinci and Metis. They write my newsletter, The AIgent (about 9k subscribers), every day through a drafting and proofreading engine that Pheme checks before scheduling. They also build AI courses, run a pipeline that turns the day's featured repo into a talking-head video of my avatar for Instag... (Local summary fallback used.)"
---

I run my business on four Claude Code agents: Titus, Pheme, Davinci and Metis. They write my newsletter, The AIgent (about 9k subscribers), every day through a drafting and proofreading engine that Pheme checks before scheduling. They also build AI courses, run a pipeline that turns the day's featured repo into a talking-head video of my avatar for Instagram, set up ad deals, and run Meta ads and email funnels with me. Nothing closes until I sign off. Metis posts jobs on a job board and the others claim them. The hard part wasn't any single task. It was keeping the agents coherent over weeks. Compaction kept dropping the small decisions, and then an agent would redo work I'd already ruled out. aigent-os is my fix. At a context threshold (80% by default) the agent writes a capsule, a checkpoint file in git, and has to reply with one exact line. Only then does the runner send /clear, wait for a SessionStart receipt proving a fresh session started, and resume. One ack buys at most one clear. If anything is ambiguous it stops at HOLD:clear-stalled-after-ack and doesn't retry. On resume the capsule is reference only, live state wins, and anything the writer couldn't capture is written as Unknown. First run interviews you with three plain questions and makes a first plan. Each agent gets its own memory vault. Limits, honestly: the public evidence is 11 of 11 cycles on one Windows seat. The runner can still miss a permission dialog (#104), a seat launched from inside another Claude Code session can lose its transcript (#98), and scrolling the seat window sends stray input (#99). v1.1.0 shipped on Sunday. Try bash install.sh --dry-run, it writes nothing. I'd like to hear where the loop could still double clear or strand a session.

---
title: "Show HN: Keep all microservices consistent and make batch changes"
source: "Hacker News Show HN"
url: "https://infraas.ai"
date: "2026-06-24"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hi everyone! tl;dr At work, I needed to find every repository that uses deprecated Node 16 and make a batch update. This process was exhausting, I had to find them, make a change and a PR for 30 repositories, and then follow up with the pipeline to make sure it's green. I built an MCP server that indexes all the repos, lets you query repositories, makes b... (Local summary fallback used.)"
---

Hi everyone! tl;dr At work, I needed to find every repository that uses deprecated Node 16 and make a batch update. This process was exhausting, I had to find them, make a change and a PR for 30 repositories, and then follow up with the pipeline to make sure it's green. I built an MCP server that indexes all the repos, lets you query repositories, makes batch PRs, and gives you a summary of the workflow runs. ## Here's what it does: 1. Indexing, which happens in 2 forms: - Codebase level: runs an agent CLI (with proper context) over all repos to extract what each one does, how they relate, and what the system looks like as a whole. - Repo level: Having the codebase context, it extracts logical info of each repo, and also the libraries, dependencies, etc for lexical search 2. Search, also in 2 forms: - Natural language: where it answers search queries with respect to the codebase and targeted repository context - Structured search: where it returns the result based on actual dependencies (eg "find me repositories that are written with Python, have requirements.txt, and are using FastAPI) 3. Batch change: Simply prompt "find my Python repositories and update library X from vY to vZ"; This will search and find the affected repos, clone them, run a CLI agent like CC on each with the context we already persisted, create and prepare PRs, and give you a report of the results. ## Tech stack `mongodb` To store the repository tree, dependencies, and workflows `redis` To store the user's session to track the ongoing batch job `claude-cli/Devin` Used as the main engine `docker-compose` to build `traefik` for routing I would appreciate your feedback and thoughts on this Demo video: https://infraas.ai/ PS: I reviewed all the code, so if it looks like slop, that's me ^^

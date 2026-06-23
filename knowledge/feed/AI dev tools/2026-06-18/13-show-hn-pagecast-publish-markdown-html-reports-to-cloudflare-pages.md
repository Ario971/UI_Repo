---
title: "Show HN: Pagecast – Publish Markdown/HTML Reports to Cloudflare Pages"
source: "Hacker News Show HN"
url: "https://github.com/Amal-David/pagecast"
date: "2026-06-18"
topic: "AI dev tools"
type: "article"
read: false
summary: "I built this because I kept generating HTML/Markdown reports from Claude Code/Codex and needed a permanent share link instead of a localhost tunnel. Pagecast is a local CLI that publishes those files to your own Cloudflare Pages account. It supports Markdown and HTML, stable URLs, renaming, republishing to the same URL, and watch mode for continuous updat... (Local summary fallback used.)"
---

I built this because I kept generating HTML/Markdown reports from Claude Code/Codex and needed a permanent share link instead of a localhost tunnel. Pagecast is a local CLI that publishes those files to your own Cloudflare Pages account. It supports Markdown and HTML, stable URLs, renaming, republishing to the same URL, and watch mode for continuous updates to same file. It is MIT licensed. The main design choice is that there is no hosted Pagecast account. It uses your Cloudflare account and deploys there directly and has claude code and codex integrations as skill/hooks. Basically it can be used as a replacement for codex sites or claude artifacts

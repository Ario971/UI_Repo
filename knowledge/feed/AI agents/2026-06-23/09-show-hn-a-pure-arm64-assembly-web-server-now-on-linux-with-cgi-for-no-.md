---
title: "Show HN: A pure ARM64 Assembly web server, now on Linux with CGI for no reason"
source: "Hacker News Top + Show HN"
url: "https://github.com/imtomt/ymawky/tree/linux"
date: "2026-06-23"
topic: "AI agents"
type: "article"
read: false
summary: "This is ymawky, a now-dynamic web server written entirely in ARM64 Assembly. I've previously posted about ymawky here: https://news.ycombinator.com/item?id=48080587 In the past month and a half, I've made some pretty major improvements: I've added CGI scripting support, so the server now supports query strings and dynamic content; and I've fully ported ym... (Local summary fallback used.)"
---

This is ymawky, a now-dynamic web server written entirely in ARM64 Assembly. I've previously posted about ymawky here: https://news.ycombinator.com/item?id=48080587 In the past month and a half, I've made some pretty major improvements: I've added CGI scripting support, so the server now supports query strings and dynamic content; and I've fully ported ymawky to run on Linux, rather than macOS-only. In addition to GET/PUT/HEAD/DELETE/OPTIONS requests, because of CGI support ymawky also accepts POST requests (only to CGI resources for now). I've also updated the more detailed writeup to reflect CGI support and the Linux port: https://imtomt.github.io/ymawky/

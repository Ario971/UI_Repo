---
title: "Show HN: Sigabrt.dev – cronjob monitor with an SSH TUI"
source: "Hacker News Show HN"
url: "https://sigabrt.dev"
date: "2026-09-19"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hello HN. I built this mostly to monitor the things I host myself. I know it's nothing too exciting. Anyway, the TL;DR is: Create an endpoint, and if your script/cronjob fails to regularly ping it, you get notified (by email or ntfy). E.g.: 0 * * * * ./script.sh && curl -fsS https://sigabrt.dev/pulse/<id>/beat It also has an SSH TUI which is currently exp... (Local summary fallback used.)"
---

Hello HN. I built this mostly to monitor the things I host myself. I know it's nothing too exciting. Anyway, the TL;DR is: Create an endpoint, and if your script/cronjob fails to regularly ping it, you get notified (by email or ntfy). E.g.: 0 * * * * ./script.sh && curl -fsS https://sigabrt.dev/pulse/<id>/beat It also has an SSH TUI which is currently experimental and read-only, mostly because I'm not sure whether it is actually useful or just a gimmick :): ssh sigabrt.dev To use it, simply add your SSH public key in your account settings. Yes, there are services like this already, and this is minimalistic by comparison. Feedback is welcome.

---
title: "Show HN: Kern – container and resource runtime in a 1.5 MB binary, no daemon"
source: "Hacker News Top + Show HN"
url: "https://github.com/getkern/kern"
date: "2026-08-24"
topic: "AI agents"
type: "article"
read: false
summary: "I built kern because I needed a fast, zero-daemon tool to set CPU/RAM limits and run isolated tasks without the overhead of Docker. It's a single 1.5MB Rust binary using OCI images, cgroup v2, and namespaces. Boxes start in ~3.5ms. It's not a Kubernetes CRI or a microVM, just a standalone container and resource runtime for CLI and agents. (Local summary fallback used.)"
---

I built kern because I needed a fast, zero-daemon tool to set CPU/RAM limits and run isolated tasks without the overhead of Docker. It's a single 1.5MB Rust binary using OCI images, cgroup v2, and namespaces. Boxes start in ~3.5ms. It's not a Kubernetes CRI or a microVM, just a standalone container and resource runtime for CLI and agents.

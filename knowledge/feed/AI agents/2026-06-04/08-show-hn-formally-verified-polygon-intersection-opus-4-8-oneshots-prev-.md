---
title: "Show HN: Formally verified polygon intersection – Opus 4.8 oneshots, prev failed"
source: "Hacker News Top + Show HN"
url: "https://github.com/schildep/verified-polygon-intersection"
date: "2026-06-04"
topic: "AI agents"
type: "article"
read: false
summary: "To my knowledge, this is the first formally verified implementation of an intersection algorithm for polygons. The experience of working with AI agents on this project changed a lot with recent model releases, as I describe in the readme. Opus 4.8 is able to provide algorithm implementation with formal proof in one shot, whereas previous models required m... (Local summary fallback used.)"
---

To my knowledge, this is the first formally verified implementation of an intersection algorithm for polygons. The experience of working with AI agents on this project changed a lot with recent model releases, as I describe in the readme. Opus 4.8 is able to provide algorithm implementation with formal proof in one shot, whereas previous models required me to provide proof strategies in multiple steps. Trust in the correctness comes entirely from the Lean checker and human review of a small specification, not from the LLM. Also check out the web demo built around the verified core linked in the readme: https://schildep.github.io/verified-polygon-intersection/ . It supports multipolygons including holes, self intersections, and overlapping edges.

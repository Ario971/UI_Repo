---
title: "Show HN: Breathe CLI – Paced resonance breathing in the macOS terminal"
source: "Hacker News Top + Show HN"
url: "https://github.com/marekkowalczyk/breathe-cli"
date: "2026-05-30"
topic: "AI agents"
type: "article"
read: false
summary: "I built a terminal app that paces slow breathing at 6 breaths per minute for vagal tone training. It's a single Python file, stdlib only, no dependencies — just run breathe and follow the bar. I'm a cardiology patient (HFrEF). Slow breathing at resonance frequency is one of the few non-pharmacological interventions shown to improve cardiac vagal tone and... (Local summary fallback used.)"
---

I built a terminal app that paces slow breathing at 6 breaths per minute for vagal tone training. It's a single Python file, stdlib only, no dependencies — just run breathe and follow the bar. I'm a cardiology patient (HFrEF). Slow breathing at resonance frequency is one of the few non-pharmacological interventions shown to improve cardiac vagal tone and baroreflex sensitivity (Bernardi et al., Circulation 2002; Lancet 1998). I wanted a frictionless daily habit tool — no app store, no account, no subscription, just open terminal and go. Design constraints, all grounded in the clinical literature: - No breath retention — Valsalva risk in cardiac patients - No rapid breathing — minimum 8-second cycles - Exhale ≤ 2x inhale — no evidence for extreme ratios - Immediate exit, always — q or Ctrl+C restores the terminal even on crash The README includes a resonance frequency measurement protocol for anyone with a chest-strap HRV monitor who wants to find their individual optimum instead of using the 6 bpm default. macOS only (uses afplay for audio cues). MIT licensed. pip install breathe-cli or brew tap marekkowalczyk/breathe && brew install breathe.

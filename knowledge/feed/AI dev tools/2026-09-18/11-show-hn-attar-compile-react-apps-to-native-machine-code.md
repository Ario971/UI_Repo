---
title: "Show HN: Attar – Compile React apps to native machine code"
source: "Hacker News Show HN"
url: "https://attar.dev/"
date: "2026-09-18"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hi HN, my cofounder and I are building Attar. It compiles React and TypeScript into native desktop apps, with Blink for HTML and CSS. I like building things with web tools. We wanted to take that experience all the way to a compiled desktop app: familiar components, familiar styles, native machine code. Attar builds on Static Hermes and Chromium. React’s... (Local summary fallback used.)"
---

Hi HN, my cofounder and I are building Attar. It compiles React and TypeScript into native desktop apps, with Blink for HTML and CSS. I like building things with web tools. We wanted to take that experience all the way to a compiled desktop app: familiar components, familiar styles, native machine code. Attar builds on Static Hermes and Chromium. React’s reconciler compiles alongside your application, and a native host connects its updates to Blink. JavaScript objects and garbage collection are handled by the compiled runtime. Its been about eight weeks since we started. We already have stateful React interfaces, Tailwind CSS, and an example with 15 unchanged shadcn/ui components compiling together. There’s a lot to explore here. You can try the starter on macOS 15+ with Apple silicon and Xcode Command Line Tools: brew install occam-tech/attar/attar attar init my-app --template tsx attar build my-app We’re also working toward Attar Electron. In an early Etcher experiment for that project, app size went from 375.1 to 73.3 MiB, idle memory from 293.9 to 91.8 MB, and time to the first window from 1,081 to 469 ms on the same Mac. Those results give us plenty of motivation to keep going. Today along with release on ProductHunt we’re sharing the standalone SDK. I’m around to talk about the compiler, how React runs as machine code, and how we connected it to Blink. Curious what you’d build with it.

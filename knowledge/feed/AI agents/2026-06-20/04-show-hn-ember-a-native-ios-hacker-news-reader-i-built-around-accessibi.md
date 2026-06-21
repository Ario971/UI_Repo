---
title: "Show HN: Ember, a native iOS Hacker News reader I built around accessibility"
source: "Hacker News Top + Show HN"
url: "https://github.com/DatanoiseTV/ember-hackernews"
date: "2026-06-20"
topic: "AI agents"
type: "article"
read: false
summary: "I read HN on my phone every day and never really settled on a reader, so I wrote my own and finally tidied it up enough to put out there. It's plain SwiftUI with no third-party dependencies. A few things I spent the most time on: Comments are parsed and drawn as native text instead of being dumped into a web view. Links, italics, quotes and code blocks be... (Local summary fallback used.)"
---

I read HN on my phone every day and never really settled on a reader, so I wrote my own and finally tidied it up enough to put out there. It's plain SwiftUI with no third-party dependencies. A few things I spent the most time on: Comments are parsed and drawn as native text instead of being dumped into a web view. Links, italics, quotes and code blocks behave like the rest of the OS, text selection works, and threads collapse instantly. The whole comment tree comes back from the Algolia API in a single request, which felt a lot nicer than walking the Firebase API node by node. Accessibility. Nothing depends on color on its own, so points, read state and selection all carry a shape or an icon too. VoiceOver reads each story as one coherent element with proper actions, Dynamic Type and Reduce Motion are respected, and there's a color-blind mode. The first-run setup actually looks at your device's accessibility settings, switches on the matching options, and tells you what it changed instead of making you hunt for them. Then the usual things you'd expect: Top/New/Best/Ask/Show/Jobs, search, saved stories, read tracking, an in-app reader, light and dark, and a handful of accent colors. It only talks to the public HN APIs, there's no account and nothing is tracked. Source and screenshots are in the repo. I'd most like feedback on the comment rendering and the accessibility choices, since those were the parts I cared about getting right. Happy to answer anything about how it's put together.

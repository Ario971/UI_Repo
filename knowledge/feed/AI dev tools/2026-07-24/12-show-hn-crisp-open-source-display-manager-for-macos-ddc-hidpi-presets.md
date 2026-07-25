---
title: "Show HN: Crisp – Open-source display manager for macOS (DDC, HiDPI, presets)"
source: "Hacker News Show HN"
url: "https://github.com/didriksg/Crisp"
date: "2026-07-24"
topic: "AI dev tools"
type: "article"
read: false
summary: "I recently bought a new 1440p monitor and connected it to my mac, but at native resolution the UI felt so tiny and unfamiliar. I'm fairly new to mac in general so I checked my options for scaling, but quickly learnt (afaik) that this wasn't a thing for external monitors. I found some options in BetterDisplay and Lunar, but it felt stupid to pay for a feat... (Local summary fallback used.)"
---

I recently bought a new 1440p monitor and connected it to my mac, but at native resolution the UI felt so tiny and unfamiliar. I'm fairly new to mac in general so I checked my options for scaling, but quickly learnt (afaik) that this wasn't a thing for external monitors. I found some options in BetterDisplay and Lunar, but it felt stupid to pay for a feature that should be included. FreeDisplay seemed like the perfect option, but when I tried it on my mac it didn't work for me. Development seemed stale so rather than adding a PR, I forked it and fixed it. After that I wanted to do some changes and add some features, which suddenly ended up in a full rewrite. It covers the thing I initially wanted, which was HiDPI, but I also wanted it to look native, so I added some native elements. I kept the display arranger and fixed a lot of the issues with e.g. auto and combined brightness, profiles for the monitors, presets etc. Can be installed with brew (brew install --cask didriksg/tap/crisp) or use the dmg file in the releases in the repo. It’s unsigned though, so you’ll probably get some warnings I’ve been using it for a week now and thought I’d share it with anyone that wants it. Open source and PRs are welcome.

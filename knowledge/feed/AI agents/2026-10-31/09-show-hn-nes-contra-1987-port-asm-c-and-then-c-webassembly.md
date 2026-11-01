---
title: "Show HN: NES Contra (1987) port (ASM –> C and then C –> WebAssembly)"
source: "Hacker News Top + Show HN"
url: "https://epoyraz.github.io/nes-contra-us/"
date: "2026-10-31"
topic: "AI agents"
type: "article"
read: false
summary: "Based on vermiceli's annotated disassembly of Contra: https://github.com/vermiceli/nes-contra-us . Thanks for the great work. I ported it in two steps. First to C: the game logic is translated routine by routine from the 6502 assembly, and checked frame by frame against the original in the Mesen emulator. Then the C code to WebAssembly so it runs in the b... (Local summary fallback used.)"
---

Based on vermiceli's annotated disassembly of Contra: https://github.com/vermiceli/nes-contra-us . Thanks for the great work. I ported it in two steps. First to C: the game logic is translated routine by routine from the 6502 assembly, and checked frame by frame against the original in the Mesen emulator. Then the C code to WebAssembly so it runs in the browser. The cherry on top: online multiplayer, so two players can play co-op over the internet. Source: https://github.com/epoyraz/nes-contra-us

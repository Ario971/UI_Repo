---
title: "Show HN: Remaking Unreal engine in Rust for coding agents"
source: "Hacker News Top + Show HN"
url: "https://machinesatplay.com"
date: "2026-08-09"
topic: "AI agents"
type: "article"
read: false
summary: "Hi HN! I'm kevin, cofounder of https://machinesatplay.com , a multiplayer 3d gaming engine for codex/claude code. TLDR: we're rebuilding unreal engine without the editor in rust meant to be used through the CLI. its open source/MIT. You prompt your favorite coding harness to create a game, and it'll give you a <name>.machinesatplay.com link Some multiplay... (Local summary fallback used.)"
---

Hi HN! I'm kevin, cofounder of https://machinesatplay.com , a multiplayer 3d gaming engine for codex/claude code. TLDR: we're rebuilding unreal engine without the editor in rust meant to be used through the CLI. its open source/MIT. You prompt your favorite coding harness to create a game, and it'll give you a <name>.machinesatplay.com link Some multiplayer games built with it: cubg: claudeunknownplayerbattle ground: https://pubg.machinesatplay.com/ car soccer: https://benchmark-rocket-league-claude.machinesatplay.com/ 4min demo: https://www.loom.com/share/e3e3a37f52b54405a6fd89da079fb1c2 source code: https://github.com/machinesatplay/game Why not use unreal engine/unity/godot? the approach to making 3D games right doesn't fit agents. you download this bulky editor, and drag and drop node-based / visual editing tools to code, create 3d objects, shaders, animations. with machinesatplay, the editor is files/folders and command line which is the DX that agents love. Why rust? I picked rust instead of c++ or typescript bc it moves more validation to compile time instead of runtime. it still is quite performant, has wasm support, and can target native desktop gpu/mobile gpu. downside is compile times, which im still figuring out how to address this. currently we use bevy, avian for physics, and lightyear for prediction/rollback/networking How do I use it? 1. pick your favorite coding agent: claude code, codex, opencode, etc. 2. paste in the prompt from the landing page. 3. iterate on a game. maybe /goal it against a screenshot 4. then mach deploy it, and you get a link to it I'd love to get y'all feedback on this. its still early and focused on multiplayer 3d. thanks for reading

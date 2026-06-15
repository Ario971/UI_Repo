---
title: "Show HN: AwsmAudio – a WebAudio editor with native MCP"
source: "Hacker News Top + Show HN"
url: "https://audio.awsm.fun"
date: "2026-06-15"
topic: "AI agents"
type: "article"
read: false
summary: "Hey y'all, So - the main idea of this is to make a WebAudio synthesis/sequencer tool which humans can use via the UI, but where the big unlock is for agents to drive with MCP It's semi decent as \"make a groovy jazz track\", especially for retro sounds - but the real use case is more like \"make a jetpack whoosh effect I can control via code at runtime - whe... (Local summary fallback used.)"
---

Hey y'all, So - the main idea of this is to make a WebAudio synthesis/sequencer tool which humans can use via the UI, but where the big unlock is for agents to drive with MCP It's semi decent as "make a groovy jazz track", especially for retro sounds - but the real use case is more like "make a jetpack whoosh effect I can control via code at runtime - where the sound changes based on character health or how much fuel is left" In other words, the target audience is not musicians (except maybe of the Max/MSP sort), but more like creative coders who want to shape the sound iteratively with an agent, and then use and _drive_ in in a game/simulation. Fwiw I think this approach is going to be more and more... and I'm working on a renderer/editor tool too (will share separately when ready). What I mean is, there's a lot of "block box" AI tooling out there, and a lot of "add MCP to existing tools", but building new tools where humans get one experience and MCP exposes another layer really just for agents.. I think that's powerful. Most if it is just mapping the WebAudio primitives to a UI and MCP server - but the AudioWorklet is a bit more interesting in that it expects a WASM file of a particular shape, and then uses that to expose the parameters in the UI and hook in as a Digital Signal Processor. That's the kind of thing that is nice for humans, but too convoluted to be usable in a UI, and agents can use super easily. As of right now, there's no hosting - so the MCP server is local as is project save/loading. Repo: https://github.com/awsm-fun/awsm-audio Crates: https://crates.io/search?q=awsm-audio

---
title: "Show HN: A self-running space economy SIM in Rust and Bevy"
source: "Hacker News Top + Show HN"
url: "https://github.com/Kalcode/spaceprojectsim"
date: "2026-07-21"
topic: "AI agents"
type: "article"
read: false
summary: "I built this with Claude cause I always wanted to tinker with a simulation economoy and I love space themes. A space-economy sim where nothing is scripted. A few hundred autonomous ships each run their own planner. Some chase the best trade route, take a delivery contract, refuel, retrofit at a shipyard, or dock so the crew can rest before morale tanks. M... (Local summary fallback used.)"
---

I built this with Claude cause I always wanted to tinker with a simulation economoy and I love space themes. A space-economy sim where nothing is scripted. A few hundred autonomous ships each run their own planner. Some chase the best trade route, take a delivery contract, refuel, retrofit at a shipyard, or dock so the crew can rest before morale tanks. Markets price everything off supply with shortage-urgency multipliers, factions tax and subsidize, populations migrate when they're unhappy, and stations that go broke get abandoned and rot. It started as an Elixir/Phoenix prototype, but the BEAM scheduler struggled on Windows gaming PCs, so I had Claude rewrite the engine in Rust. The sim core is pure, synchronous, IO-free (its own hecs ECS), and the Bevy client embeds it directly as a library, sim and renderer share one world with zero marshalling. Ship AI is a GOAP planner over a world state; ships replan mid-flight when a better option appears. ~485 agents today at p50 ~10-20ms/tick, architected to push toward 100k+. Single native binary, bundled SQLite, no runtime deps. Getting into 100k has been a struggle, but I have pushed it into the thousand and it was running fine. It's a sandbox, not a game yet, there's no objective yet, and I'm not actively pushing it toward "shippable." Anyone can fork it and take it over. Or it can stay as some type of AI slop, but part of me thinks it is already in a pretty good shape for a simulation use for various games or ideas. (Full disclosure: a lot of this was built pairing with Claude. That's how I had the bandwidth to take it this far. Happy to talk about what that workflow actually looked like.)

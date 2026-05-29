---
title: "Show HN: TapToyPia"
source: "Hacker News Show HN"
url: "https://memalign.github.io/m/taptoypia/index.html"
date: "2026-05-24"
topic: "AI dev tools"
type: "article"
read: false
summary: "My wife started playing Pokopia and told me it's the best game she's ever played. I watched her play for 10 minutes and thought that a simple demake inspired by Pokopia could be satisfying to play. TapToyPia is the result, playable in your web browser. In TapToyPia, you are an explorer sent on a one-way mission to a new planet. Your mission: build a settl... (Local summary fallback used.)"
---

My wife started playing Pokopia and told me it's the best game she's ever played. I watched her play for 10 minutes and thought that a simple demake inspired by Pokopia could be satisfying to play. TapToyPia is the result, playable in your web browser. In TapToyPia, you are an explorer sent on a one-way mission to a new planet. Your mission: build a settlement that can serve as a new home for humanity. While you explore, you discover flora and fauna to help you. The game mechanic is inspired by clicker games and maybe also Minesweeper though that wasn't a conscious influence. I tried to build a game that captures the zen of Pokopia's world rehabilitation and the building-up-to-greater-complexity of clicker games (such as my favorite, Universal Paperclips). As usual for projects aided by generative AI, I found myself building something more ambitious. The biggest example in this project is that you can zoom out from the 2D map to seamlessly transition to an interactive view of the 3D planet. Without genAI, I wouldn't have the time to figure out how to build this myself for a side project like this. Like my projects without generative AI assistance, I found unit test coverage to be key to moving quickly and trusting that changes were safe. I made sure tests could be run both in the browser and with node at the command-line. The AI tools can run tests with node, which makes for very effective and fast iteration. More development details here: https://memalign.github.io/p/taptoypia.html

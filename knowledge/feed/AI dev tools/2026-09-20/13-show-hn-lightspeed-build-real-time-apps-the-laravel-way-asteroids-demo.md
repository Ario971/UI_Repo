---
title: "Show HN: Lightspeed, build real time apps the Laravel way (+asteroids demo)"
source: "Hacker News Show HN"
url: "https://news.ycombinator.com/item?id=49781032"
date: "2026-09-20"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hi HN! Laravel has worked with websockets for years but generally speaking it's a one way push architecture (i.e. http in, sockets out). Lightspeed is kind of like node in that it's a single server that serves your http and your websockets all under one roof. Auth runs in 0.03ms (a Redis read, no database). Your Laravel handler runs inside the full contai... (Local summary fallback used.)"
---

Hi HN! Laravel has worked with websockets for years but generally speaking it's a one way push architecture (i.e. http in, sockets out). Lightspeed is kind of like node in that it's a single server that serves your http and your websockets all under one roof. Auth runs in 0.03ms (a Redis read, no database). Your Laravel handler runs inside the full container and the reply comes back down the same socket. I think this could be really cool for creating new ways of working with Laravel. Anyway, I put together a live demo to show it in action. Basically a cross between slither.io and Asteroids. Game here: https://innerloop.works/lightspeed Repo here: https://github.com/innerloop-dev/lightspeed Note: This is 0.1.0, the API may change before 1.0. It needs the Swoole extension and Redis. MIT.

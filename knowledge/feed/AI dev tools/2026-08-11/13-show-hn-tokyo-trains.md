---
title: "Show HN: Tokyo Trains"
source: "Hacker News Show HN"
url: "https://greggman.github.io/tokyo-trains/"
date: "2026-08-11"
topic: "AI dev tools"
type: "article"
read: false
summary: "Semi inspired by the 3d Shinjuku station that was posted again recently, I noticed it was missing a large portion of the \"complex\" where \"complex\" is defined loosly has how far you can walk without stepping outside. So I asked Claude to make a 3d map of all Tokyo Trains, no libraries, and let you zoom into stations, and the first version with both map and... (Local summary fallback used.)"
---

Semi inspired by the 3d Shinjuku station that was posted again recently, I noticed it was missing a large portion of the "complex" where "complex" is defined loosly has how far you can walk without stepping outside. So I asked Claude to make a 3d map of all Tokyo Trains, no libraries, and let you zoom into stations, and the first version with both map and the Shinjuku complex was ready in about 3 hours. It spent another 7 or so in various nit picky things I asked for to get to the current version. I know these will only get better but I think the thing I find most interesting is no libraries needed. Claude can write the shaders from scratch, it can do both WebGPU and WebGL, and it can often write optimal solutions. For example, the entire map/station/trains is rendered in 5 draw calls. I didn't ask for that, it just did it. This one has lots of imprefections. Most of that comes down to data and/or deciding how to use the data provided. For example, AFAICT there is nothing that says "these parts make the complex". It's something you either need to derive or hand code rules/lists (include this, don't include that). Anyway, I know not everyone is into it but I'm having fun.

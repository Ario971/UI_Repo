---
title: "Qwen 3.8 27b just feels… ok?"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1wyp4n2/qwen_38_27b_just_feels_ok/"
date: "2026-10-06"
topic: "Local LLMs"
type: "article"
read: false
summary: "I’ve seen posts here raving about how good Qwen 3.8 27b is. The benchmarks look incredible, and all the online discourse seems to deem it the best local model. I have 32GB VRAM and run Unsloth’s Q6 version with OpenCode. For small tasks, it feels fine. I range 30-40 t/s decode and smaller sized tasks do finish, usually, without much issue or time. The iss... (Local summary fallback used.)"
---

I’ve seen posts here raving about how good Qwen 3.8 27b is. The benchmarks look incredible, and all the online discourse seems to deem it the best local model. I have 32GB VRAM and run Unsloth’s Q6 version with OpenCode. For small tasks, it feels fine. I range 30-40 t/s decode and smaller sized tasks do finish, usually, without much issue or time. The issue stems when I give it anything with a bit of nuance. It constantly gets stuck in “but wait, “actually,” or other thinking loops. It can take up my entire 95k context window on thinking loops and have nothing done. If this is the state of local LLMs, that’s ok. I am a software dev by trade; I have my diploma and a few years of experience under my belt. It just feels like there is a bit of a disconnect from reality between public sentiment and the effectiveness of these models. A pretty common sentiment I see is that this model is as good as Opus 4.5. I never had the privilege of using Opus 4.5, so I can’t give an honest and proper opinion there. (Also, if this was good enough for the industry to start vibe coding, I have a lot of concerns about who is making decisions at a lot of these companies). One time, it even did a pfkill -f with a file I was currently modifying in my editor to kill the background process. That was kind of annoying. I should add I’ve also used the Swift 1.5 finetune people have been hyping up. I found it definitely thought less, but the quality was greatly degraded. Does anybody else feel similar regarding the disconnect? submitted by /u/YeetHub [link] [comments]

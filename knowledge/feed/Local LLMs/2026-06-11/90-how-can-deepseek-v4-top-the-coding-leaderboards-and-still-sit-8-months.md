---
title: "How can Deepseek v4 top the coding leaderboards and still sit 8 months behind the frontier?"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1u2nn2f/how_can_deepseek_v4_top_the_coding_leaderboards/"
date: "2026-06-11"
topic: "Local LLMs"
type: "article"
read: false
summary: "Two numbers on this model that don't sit comfortably with each other. The Pro config posts coding scores near the top of every board, 80.6 on SWE-bench Verified and 93.5 on LiveCodeBench. Then CAISI ran it across a spread of domains and landed on it being roughly eight months behind the US frontier, around where GPT-5 was. DeepSeek's own framing at launch... (Local summary fallback used.)"
---

Two numbers on this model that don't sit comfortably with each other. The Pro config posts coding scores near the top of every board, 80.6 on SWE-bench Verified and 93.5 on LiveCodeBench. Then CAISI ran it across a spread of domains and landed on it being roughly eight months behind the US frontier, around where GPT-5 was. DeepSeek's own framing at launch put it two months back, right behind the frontier at the time. Same weights, very different verdicts. The way I read it, both are right and they are measuring different things. A coding leaderboard is a narrow slice and it is the slice everyone optimizes against hardest, so a top score there tells you it codes well and not much about reasoning or the agentic side. CAISI spread the load wider and the gaps turned up in cybersecurity and abstract reasoning. And the frontier hasn't sat still, Fable 5 dropped this week, though that's a closed model you can't run on your own box. Which is the local angle on top of all this. The number everyone quotes is the 1.6T Pro config, which is not the thing most of us are running. By the time you are on Flash or a quant that fits your box, you are another step away from the headline. For people running it locally for agent work, where does it actually land for you once it is quantized and doing tool calls, not completing code? Source in the comments. submitted by /u/Substantial_Step_351 [link] [comments]

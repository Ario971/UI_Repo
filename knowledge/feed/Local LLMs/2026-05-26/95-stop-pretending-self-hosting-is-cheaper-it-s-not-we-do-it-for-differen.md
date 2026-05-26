---
title: "Stop pretending self-hosting is cheaper. It's not. We do it for different reasons and we should say so."
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1to017p/stop_pretending_selfhosting_is_cheaper_its_not_we/"
date: "2026-05-26"
topic: "Local LLMs"
type: "article"
read: false
summary: "Did the math on my own rig last week and I'm tired of seeing this sub repeat the \"local is cheaper\" line without numbers. Let me actaully break it down. My setup: 2x 3090 (used, $1400 total), Ryzen 7900X, 64GB DDR5, around $2800 all in. Pulls about 700W under load. At my electricity rate that's roughly $0.21/hour just to keep it serving. Add depreciation... (Local summary fallback used.)"
---

Did the math on my own rig last week and I'm tired of seeing this sub repeat the "local is cheaper" line without numbers. Let me actaully break it down. My setup: 2x 3090 (used, $1400 total), Ryzen 7900X, 64GB DDR5, around $2800 all in. Pulls about 700W under load. At my electricity rate that's roughly $0.21/hour just to keep it serving. Add depreciation on the GPUs (amortize over 3 years), and the marginal cost per active hour lands somewhere around $0.50-0.80 depending on how much I use it. Now compare RunPod: a single H100 80GB is around $1.99/hr on-demand, $1.49/hr if you commit. That H100 will run Qwen3.6-35B-A3B at 2-3x the throughput of my dual 3090 setup. So per-token, the H100 actually ends up cheaper. If I'm honest about my usage (maybe 2-3 hours of heavy inference per day), I am paying significantly more per token than I would by just renting when I needed it. So why tf do I keep the rig: - Privacy: I run things I don't want logged by a cloud provider - Dignity: I don't want to ask a company for permission to query my own data - Tinkering: I get to learn stuff you cannot learn renting - Cold start: My rig is always on, no 30 second container spin-up - Sovereignty: My infrastructure doesnt disappear when a provider rate-limits me None of those are economic. They are all about control. And thats fine. It is worth paying for. But lets stop pretending the math runs the other way. How many of you have actually run the numbers on your own setup vs renting equivalent compute? Or are we all just running on vibes lol? submitted by /u/Napster3301 [link] [comments]

---
title: "Made a fun tool using Steam tag data for finding game design ideas"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1xp8dda/made_a_fun_tool_using_steam_tag_data_for_finding/"
date: "2026-11-06"
topic: "Local LLMs"
type: "article"
read: false
summary: "Hey there ! Using a 100% local setup (Qwen3.8 FN + Strata + DeepSeek Harness on RX 9070XT + 64GB DDR4), I made a small open source tool to help with creativity for game dev using up-to-date Steam tag data. Everything is running statically in browser without any external dependencies, and the catalog is updated automatically every day. It also has addition... (Local summary fallback used.)"
---

Hey there ! Using a 100% local setup (Qwen3.8 FN + Strata + DeepSeek Harness on RX 9070XT + 64GB DDR4), I made a small open source tool to help with creativity for game dev using up-to-date Steam tag data. Everything is running statically in browser without any external dependencies, and the catalog is updated automatically every day. It also has additional fun modes that gamify the experience (like random crate unboxing), I suggest you give them a try ! It's live right now at https://mickabrig7.github.io/steam-tags-explorer/ . Additional implementation details are in the repo, if you're interested ( https://github.com/mickabrig7/steam-tags-explorer ). My takeaway from this project is that Qwen3.8 FN is surprisingly competent at making nice interfaces (it even decided to create sound effects on its own), BUT required very heavy supervision for actual UX and usability (I basically gave it zero freedom of choice for anything that wasn't UI because it would consistently take the most mind-twisting and least intuitive decisions). My biggest challenge was unslopifying its human-facing text output, it's actually infuriating how much current models overcomplicate their prose. All in all, I'm still amazed that we're able to run such powerful models locally, and Qwen4 isn't even out yet ! submitted by /u/mickabrig7 [link] [comments]

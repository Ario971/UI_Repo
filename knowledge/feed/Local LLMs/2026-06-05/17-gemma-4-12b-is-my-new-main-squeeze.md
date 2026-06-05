---
title: "Gemma 4 12B is my new main squeeze"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1txdcj9/gemma_4_12b_is_my_new_main_squeeze/"
date: "2026-06-05"
topic: "Local LLMs"
type: "article"
read: false
summary: "The Unsloth Q5_K_XL is officially my main squeeze for local coding. I started out with the Q4_K_XL, but found myself fixing syntax errors a little too often. It wasn't terrible, but I had one file where I had to make 23 edits just for syntax. With the Q4 I was pulling around 61 t/s, and moving to the Q5 dropped me down to 50 t/s, but now most things get o... (Local summary fallback used.)"
---

The Unsloth Q5_K_XL is officially my main squeeze for local coding. I started out with the Q4_K_XL, but found myself fixing syntax errors a little too often. It wasn't terrible, but I had one file where I had to make 23 edits just for syntax. With the Q4 I was pulling around 61 t/s, and moving to the Q5 dropped me down to 50 t/s, but now most things get one-shotted (not zero-shot, I still had to tell this baby what to build *wink*, looking at you grammar/tech Nazis). The model file sits right around 8.6GB. I ended up capping the context window at 32k with a Q8 KV cache in llama.cpp to keep things snappy. When all is said and done, it about 15.7 GB of vram with a gig spilling over on the cached checkpoints. Honestly, 32k is plenty for my workflow. It's more than enough room to focus on the exact tasks I need to get done. Before anyone asks if this is better than Qwen 3.6 27B (which I could never run anyway) or the 35B A3B... for me, the answer is yes, for a couple of reasons: Tool call headaches: I had to configure Qwen's tool calls from XML to JSON. It just made things inconsistent and required way too much messing around with the chat template, llama.cpp settings, and memory management. Gemma 4 is plug-and-play: I just set the cache, locked in the context length, attached it to my PI harness, and I was already rolling. I am able to write code, short stories, and HTML games. I still need to test it with Godot, but it works great for Lua since I do Cyberpunk 2077 mods as a hobby. I am sorry, Qwen, that we had to break up. Please understand it's not you, it's me. XOXO submitted by /u/Wrong_Mushroom_7350 [link] [comments]

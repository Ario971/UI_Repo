---
title: "LLC: lightweight OpenWebUI alt - now with chat converter + custom tool calls"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1tiunzw/llc_lightweight_openwebui_alt_now_with_chat/"
date: "2026-05-20"
topic: "Local LLMs"
type: "article"
read: false
summary: "Posted my project here a while back and got some solid feedback via DMs. The main ask was a converter so people don't lose their existing chats when switching - that's in now. https://preview.redd.it/mfn5i99d6c2h1.png?width=1400&format=png&auto=webp&s=10af6f8645c26d8d25b2356f98cee019c508a4d6 Quick context: LLC is a chat frontend for local LLMs. You downlo..."
---

Posted my project here a while back and got some solid feedback via DMs. The main ask was a converter so people don't lose their existing chats when switching - that's in now. https://preview.redd.it/mfn5i99d6c2h1.png?width=1400&format=png&auto=webp&s=10af6f8645c26d8d25b2356f98cee019c508a4d6 Quick context: LLC is a chat frontend for local LLMs. You download it, you run it, that's it - no install needed (unless you want), no dependencies, runs on pretty much anything including ancient hardware. I built it because OWUI kept feeling heavier than the models I was running. so, what's new in v0.6: Chat converter - import your OWUI history so you don't start from zero Custom tool calls - you can define your own tools the model can use ( for example weather, stock market or whatever you like) PS: You can run the converter easily with python convert_openwebui_to_locallightchat_v2.py webui.db --media-storage uploads (or --media-storage inline if you like it embedded with base64). The OpenWebui "uploads" folder should be in the same directory. Link: https://www.locallightai.com/llc/ Github: https://github.com/srware-net/LocalLightChat/ submitted by /u/PromptInjection_ [link] [comments]

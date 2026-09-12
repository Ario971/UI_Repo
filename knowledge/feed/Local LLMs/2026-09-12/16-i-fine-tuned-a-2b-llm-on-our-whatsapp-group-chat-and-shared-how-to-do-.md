---
title: "I fine-tuned a 2B LLM on our WhatsApp group chat, and shared how to do it on GitHub as a cookbook."
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1wdxz12/i_finetuned_a_2b_llm_on_our_whatsapp_group_chat/"
date: "2026-09-12"
topic: "Local LLMs"
type: "article"
read: false
summary: "https://github.com/Sayitobar/chat_llm_cookbook This is my personal project that took several months. I wanted to see whether a 2B small local model could simulate a six-person group chat trained & ran on an M1 Pro. How good is it?: - It's fun, but not great. It doesn't achieve coherent & consistent group simulation, but it learned enough of our slang, rea... (Local summary fallback used.)"
---

https://github.com/Sayitobar/chat_llm_cookbook This is my personal project that took several months. I wanted to see whether a 2B small local model could simulate a six-person group chat trained & ran on an M1 Pro. How good is it?: - It's fun, but not great. It doesn't achieve coherent & consistent group simulation, but it learned enough of our slang, reactions, and pacing to be fun. The generated messages are very similar to what we'd type. - There is some coherence, but not a deep understanding, and the model doesn't hold information about us (expect our names and a few very obvious stuff). How good is it on paper?: - I have evaluated my models performances by judging them with a judge LLM. The best version achieved an 80% human win rate at human-vs-model tests, ideal should be The main thing is, you'll have a lot of fun chatting with this model once you train it on YOUR data. (ask for consent pls) Cookbook: I published the reproducible local pipeline, chat UI, human-anchored evaluation, results, and experiment PDF. No private chat data or fine-tuned weights are released :) Fyi, all of the tests I've done were in Turkish. This project is still unfinished as there are still architectures and training data formats I haven't tested, or stronger 2B models that aren't released yet, as of September 2026. submitted by /u/BarisSayit [link] [comments]

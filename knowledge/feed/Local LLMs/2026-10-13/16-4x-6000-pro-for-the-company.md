---
title: "4x 6000 Pro for the company"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1x4yoqm/4x_6000_pro_for_the_company/"
date: "2026-10-13"
topic: "Local LLMs"
type: "article"
read: false
summary: "Here is how i serve 40 people (10 of them developers) with local AI services. n8n for automatisation whisper and Vexa AI, a bot joins Teams and makes transcripts, n8n later extracts decisions and todos OpenWebUI, ChatGPT-like webinterface for everyone, most agentic features are disabled, websearches via Tavily are possible Every developer has an API key t... (Local summary fallback used.)"
---

Here is how i serve 40 people (10 of them developers) with local AI services. n8n for automatisation whisper and Vexa AI, a bot joins Teams and makes transcripts, n8n later extracts decisions and todos OpenWebUI, ChatGPT-like webinterface for everyone, most agentic features are disabled, websearches via Tavily are possible Every developer has an API key to use via BiFrost (OpenAI compatible API router) for what they find useful Every developer has a local Linux VM where agents can be installed. A 4U server that contains 4 6000 Blackwell MaxQ and 384GB DDR5 and one AMD EPYC 9275F 24-Core CPU. The server runs Proxmox, every model or application runs inside LXC with Cuda 13.3 and Debian 13, Driver 595. mainmodel is Deepseek V4 Flash with vLLM, GPU utilization 0.55, TP4, 1M context. fallbackmodel is Qwen 3.8 27B Q8 with llama.cpp, 265K context in Q8. minimodel is K2-Horizon 7B Q6 with llama.cpp, with 64K context in Q8. ComfyUI to generate pics and videos for marketing. Embedding/Reranking with Geofront/BGE-M3-GGUF:BF16 and sinjab/bge-reranker-v2-m3-F16-GGUF with llama.cpp Overall cost of the server was around 55k€. Backup server with two 6000 Blackwell MaxQ is planned https://preview.redd.it/eribrlg7z8vh1.png?width=1913&format=png&auto=webp&s=33c7044412273dec45e9c251c879d4b2a1dd6e53 Ask if you have questions. submitted by /u/q-admin007 [link] [comments]

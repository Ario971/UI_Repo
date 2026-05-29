---
title: "How do I make MTP work in llama-server?"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1tqukp3/how_do_i_make_mtp_work_in_llamaserver/"
date: "2026-05-29"
topic: "Local LLMs"
type: "article"
read: false
summary: "Downloaded IQ4_NL gguf from unsloth/Qwen3.6-35B-A3B-MTP-GGUF. git cloned a recent llama.cpp (version: 9397 (ac4b5a3fd)) and compiled it with GGML_CUDA=ON to run on my single 3090 llama-server command without MTP: ./build/bin/llama-server -m ~/gguf/Qwen3.6-35B-A3B-UD-IQ4_NL.gguf --host 0.0.0.0 --port 8080 -c 4096 -fa on --no-mmap -np 1 -ngl 99 llama-server... (Local summary fallback used.)"
---

Downloaded IQ4_NL gguf from unsloth/Qwen3.6-35B-A3B-MTP-GGUF. git cloned a recent llama.cpp (version: 9397 (ac4b5a3fd)) and compiled it with GGML_CUDA=ON to run on my single 3090 llama-server command without MTP: ./build/bin/llama-server -m ~/gguf/Qwen3.6-35B-A3B-UD-IQ4_NL.gguf --host 0.0.0.0 --port 8080 -c 4096 -fa on --no-mmap -np 1 -ngl 99 llama-server command with MTP: ./build/bin/llama-server -m ~/gguf/Qwen3.6-35B-A3B-UD-IQ4_NL.gguf --host 0.0.0.0 --port 8080 -c 4096 -fa on --no-mmap -np 1 -ngl 99 --spec-type draft-mtp Since llama-bench doesn't support MTP, so I used llama-benchy instead: uv run llama-benchy --base-url http://localhost:8080/v1 --model Qwen/Qwen3.6-35B-A3B --pp 1024 --tg 1024 MTP spec-draft-n-max pp1024 tg1024 draft acceptance No N/A 1082.13t/s 116.63t/s N/A Yes 1 878.18t/s 108.41t/s 0.80778 Yes 3 899.27t/s 110.81t/s 0.62535 Yes 5 804.10t/s 92.66t/s 0.37234 How come it is slower for both pp and tg? Does this have to do with the low draft acceptance rate? How do I improve it? submitted by /u/Ok_Warning2146 [link] [comments]

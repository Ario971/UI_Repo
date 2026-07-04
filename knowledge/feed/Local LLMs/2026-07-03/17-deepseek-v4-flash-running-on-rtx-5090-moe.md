---
title: "Deepseek V4 Flash running on RTX 5090 MoE"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1umsik8/deepseek_v4_flash_running_on_rtx_5090_moe/"
date: "2026-07-03"
topic: "Local LLMs"
type: "article"
read: false
summary: "Here is the results of optimizing it for my setup: Benchmark results of the optimisation showing TG T/S from 22.7 to 21.3, and PP T/S from 1105 to 927, test ranges Prompt Processing from 8192 tokens to 65536 tokens, and is set to MoE with no unified KV, no memory map, n-cpu-moe 37 My setup: X870 AORUS ELITE WIFI7 AMD Ryzen 9 9900X3D (24) @ 4.40 GHz NVIDIA... (Local summary fallback used.)"
---

Here is the results of optimizing it for my setup: Benchmark results of the optimisation showing TG T/S from 22.7 to 21.3, and PP T/S from 1105 to 927, test ranges Prompt Processing from 8192 tokens to 65536 tokens, and is set to MoE with no unified KV, no memory map, n-cpu-moe 37 My setup: X870 AORUS ELITE WIFI7 AMD Ryzen 9 9900X3D (24) @ 4.40 GHz NVIDIA GeForce RTX 5090 [Discrete] DDR5 RAM: 18.80 GiB / 125.39 GiB (15%) OS: Bazzite(bazzite-dx-nvidia-gnome:testing) This was possible using this fork: https://github.com/fairydreaming/llama.cpp/tree/dsv4 Build script: cmake -B build \ -DGGML_CUDA=ON \ -DCMAKE_CUDA_ARCHITECTURES="120" \ -DGGML_CCACHE=OFF -DGGML_NATIVE=ON \ -DCMAKE_BUILD_TYPE=Release \ -DLLAMA_OPENSSL=ON cmake --build build --config Release -j$(nproc) Benchmark command: llama-batched-bench -hf tarruda/DeepSeek-V4-Flash-GGUF:Q2_K -b 8192 -ub 8192 -npl 1 -npp 8192,16384,32768,65536 -ntg 128 -fa 1 --no-repack -no-kvu --ctx-size 70000 --no-mmap --n-cpu-moe 37 Daily use command: llama-server -hf tarruda/DeepSeek-V4-Flash-GGUF:Q2_K -fa 1 --ctx-size 1048576 -ub 512 -b 512 -np 1 -no-kvu --host 0.0.0.0 --port 8099 -t 12 --temp 1 --top-p 1.00 --metrics --perf Yes, 1 million context, it fits with ub 512, and there's even a little bit of VRAM left to utilize. You can even fit in --n-cpu-moe 37 or 36 if you're really lean on your OS. Thanks to u/tarruda for the Q2_K model and helping digging into all the fixes in order to get this going! llama-cpp webui prompting to let everybody at llocallama community know they are awesome, DeepSeek flash replied using 145 tokens and 21.14 t/s submitted by /u/H_DANILO [link] [comments]

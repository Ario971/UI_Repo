---
title: "125 tok/s for Qwen3.6 q4xl on 2x 4060ti is insane perf/dollar"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1tryp2q/125_toks_for_qwen36_q4xl_on_2x_4060ti_is_insane/"
date: "2026-05-30"
topic: "Local LLMs"
type: "article"
read: false
summary: "Under $1000 for 32gb vram from 2023, and ~300 watts draw... and this thing is outperforming the latest pick-your-vendor $5k mini pcs from 2026. So.. next question is can I make it squeeze 150 t/s with the same q4xl on cuda 13.3 this weekend. Anyone try it yet? **Edit** llamacpp ini/flags: podman run -d \\ --name llama-qwen36-router \\ --device nvidia.com/gp... (Local summary fallback used.)"
---

Under $1000 for 32gb vram from 2023, and ~300 watts draw... and this thing is outperforming the latest pick-your-vendor $5k mini pcs from 2026. So.. next question is can I make it squeeze 150 t/s with the same q4xl on cuda 13.3 this weekend. Anyone try it yet? **Edit** llamacpp ini/flags: podman run -d \ --name llama-qwen36-router \ --device nvidia.com/gpu=all \ -v /data/models:/root/.cache/huggingface:ro \ -v /data/llama_presets:/presets:ro \ -p 8001:8080 \ --env NVIDIA_VISIBLE_DEVICES=all \ --env LD_LIBRARY_PATH=/app:/usr/lib64:/usr/local/nvidia/lib64:/usr/local/cuda/lib64 \ --ipc=host \ --restart=unless-stopped \ ghcr.io/ggml-org/llama.cpp:server-cuda13 \ --models-preset /presets/qwen36-models.ini \ --models-max 1 \ --host 0.0.0.0 \ --port 8080 And qwen36-models.ini used for benchmark - Dropped the 27b to 100k for friendlier experience: version = 1 [*] n-gpu-layers = all host = 0.0.0.0 port = 8080 ctx-checkpoints = -1 mmap = false flash-attn = on ; threads = 16 ; threads-batch = 20 cache-ram = 2048 parallel = 1 batch-size = 2048 ubatch-size = 1024 jinja = true reasoning = on reasoning-budget = 1000 metrics = true load-on-startup = false [qwen36-27b-mtp-tensor] hf-repo = unsloth/Qwen3.6-27B-MTP-GGUF hf-file = Qwen3.6-27B-UD-Q4_K_XL.gguf split-mode = tensor tensor-split = 0.95,0.95 ctx-size = 100000 spec-type = draft-mtp spec-draft-n-max = 2 [qwen36-35b-a3b-mtp-q4xl-mtpOn-Tensor] hf-repo = unsloth/Qwen3.6-35B-A3B-MTP-GGUF hf-file = Qwen3.6-35B-A3B-UD-Q4_K_XL.gguf split-mode = tensor tensor-split = 0.97,0.97 ctx-size = 125000 spec-type = draft-mtp spec-draft-n-max = 2 submitted by /u/Chuyito [link] [comments]

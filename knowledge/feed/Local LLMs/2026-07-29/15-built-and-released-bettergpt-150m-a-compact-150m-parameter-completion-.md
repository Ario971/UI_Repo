---
title: "Built and released BetterGPT-150M – A compact 150M parameter completion model (+ live HF Space demo)"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1v9oa1u/built_and_released_bettergpt150m_a_compact_150m/"
date: "2026-07-29"
topic: "Local LLMs"
type: "article"
read: false
summary: "Hey everyone, ​I recently finished pre-training BetterGPT-150M, a small, lightweight causal language model with ~152 million parameters.Trained on 15B tokens. Dataset & Training: Trained across stable and annealing phases using curated datasets (including FineWeb-Edu, fine maths, cosmopedia, starcode-python), ensuring strong capability retention while max... (Local summary fallback used.)"
---

Hey everyone, ​I recently finished pre-training BetterGPT-150M, a small, lightweight causal language model with ~152 million parameters.Trained on 15B tokens. Dataset & Training: Trained across stable and annealing phases using curated datasets (including FineWeb-Edu, fine maths, cosmopedia, starcode-python), ensuring strong capability retention while maximizing token efficiency. ​Performance: Benchmark evaluations show it outperforms GPT-2 Small while remaining on par with models trained on significantly larger token budgets. ​Since many small/tiny models tend to get buried under massive LLM releases, I wanted to share it here for anyone interested in lightweight architectures, fast CPU inference, or small edge-device experimentation. Repo: https://github.com/harikrish2727/BetterGPT ​Model Hub: https://huggingface.co/Harikrish2727/BetterGPT-150M ​Live Demo: https://huggingface.co/spaces/Harikrish2727/BetterGPT-Demo (Hosted on ZeroGPU with token streaming) ​Model Notes: ​Task: Text completion / generation (it is a standard base completion model, not instruction-tuned). ​Footprint: Very low RAM/vRAM footprint, runs instantly on standard CPUs. ​Feel free to try out prompts on the Space demo or pull the weights to run locally. Feedback, benchmark suggestions, or ideas for instruction fine-tuning are always welcome! This is my very first serious try, hope I get genuine feedback from you guys. submitted by /u/Rich-Title-3668 [link] [comments]

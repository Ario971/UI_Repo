---
title: "[Discussion] A 5KB pure x86-64 assembly engine for Gemma-2B (FP16, 4.6 tok/s on CPU)"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1wx5x1p/discussion_a_5kb_pure_x8664_assembly_engine_for/"
date: "2026-10-04"
topic: "Local LLMs"
type: "article"
read: false
summary: "Hi everyone, Sharing a personal project exploring the minimal bare-metal footprint required to run an autoregressive LLM. Instead of relying on large runtimes or compiler abstractions, I wrote an inference engine for Gemma-2B entirely in flat x86-64 assembly (FASM): - **Binary footprint**: Total 5.2 KB flat machine code (`gemma_engine.bin` 3.7 KB + `mat_s... (Local summary fallback used.)"
---

Hi everyone, Sharing a personal project exploring the minimal bare-metal footprint required to run an autoregressive LLM. Instead of relying on large runtimes or compiler abstractions, I wrote an inference engine for Gemma-2B entirely in flat x86-64 assembly (FASM): - **Binary footprint**: Total 5.2 KB flat machine code (`gemma_engine.bin` 3.7 KB + `mat_smp_f16c_gemm_avx2.bin` 1.5 KB). - **Execution**: Pure AVX2 + F16C with custom 4-thread SMP GEMM for prefill. Sustains ~18.5 GB/s memory bandwidth on commodity DDR4-2400. - **Decoding**: 4.5 ~ 4.7 tokens/s in FP16 on an older quad-core i5 desktop. - **Dependencies**: Zero C/C++ runtime, zero PyTorch. The Python harness only uses `ctypes` for `VirtualAlloc` and OS threads. This isn't meant to compete with feature-complete tools like llama.cpp. Rather, it's a first-principles exploration to see how cleanly a modern Transformer can be mapped to raw silicon, and to serve as a reference point for future micro-LLMs on resource-constrained microcontrollers (MCU/DSP). The repository is open source: - GitHub: https://github.com/tomtsai28/PULSAR-ASM - Architecture notes: https://github.com/tomtsai28/PULSAR-ASM/blob/main/doc/pulsar_asm_cpu_limit_retrospective.md Any code audits, observations, or thoughts on bare-metal inference are welcome. submitted by /u/tom_tsai28 [link] [comments]

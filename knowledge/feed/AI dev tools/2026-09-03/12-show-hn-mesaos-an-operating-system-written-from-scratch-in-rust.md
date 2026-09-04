---
title: "Show HN: MesaOS – An operating system written from scratch in Rust"
source: "Hacker News Show HN"
url: "https://github.com/crackanimad0r/MesaOS"
date: "2026-09-03"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hello! I'm a student from Spain and I'm the creator of MesaOS, an open-source operating system written from scratch in Rust for x86_64. I've been working on it mostly by myself. MesaOS currently has: A hybrid kernel Preemptive multitasking A Linux driver shim with 400+ exported kernel symbols (still in development) HDA audio and WAV streaming A shell with... (Local summary fallback used.)"
---

Hello! I'm a student from Spain and I'm the creator of MesaOS, an open-source operating system written from scratch in Rust for x86_64. I've been working on it mostly by myself. MesaOS currently has: A hybrid kernel Preemptive multitasking A Linux driver shim with 400+ exported kernel symbols (still in development) HDA audio and WAV streaming A shell with around 82 commands VFS, RamFS and persistent initrd File persistence through automatic folder-to-ISO injection SMP / multicore support xHCI / USB 3.0 support It works on QEMU and on my HP 15s-eq2xxx laptop. Some of the things I'm currently working on are USB storage, TCP, Wi-Fi and more hardware support. Wi-Fi is one of the harder problems for me right now. My laptop uses a Realtek RTL8822CE, and there isn't much information available about it. The project is still very much a work in progress, but I've reached a point where I would like to have other people working on it with me. I'm especially interested in people who like operating systems, kernels, drivers, networking, Rust or low-level programming. I'm also transparent about using AI during development. The source code is generated using language models based on my instructions. I handle the architecture design, debugging, hardware testing and integration myself. There is also an English/Spanish Discord server for the project if anyone wants to discuss development or contribute. Discord: https://discord.gg/sEaB7KAwtr

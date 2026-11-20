---
title: "Show HN: Radiotherapy Delivery Demo"
source: "Hacker News Show HN"
url: "https://tps.neuralrad.com"
date: "2026-11-14"
topic: "AI dev tools"
type: "article"
read: false
summary: "The treatment planning station (TPS) software field is currently monopolized by Varian's Eclipse and Raystation from Raysearch. Current software is still using technology stack 2 decades old. At UT Southwest Medical Center, we are working on a technology stack which is leveraging modern browser technology using WebAseembly and WebGPU for implementing not... (Local summary fallback used.)"
---

The treatment planning station (TPS) software field is currently monopolized by Varian's Eclipse and Raystation from Raysearch. Current software is still using technology stack 2 decades old. At UT Southwest Medical Center, we are working on a technology stack which is leveraging modern browser technology using WebAseembly and WebGPU for implementing not only the 2D and 3D display of treatment delivery but also GPU-accelerated dose calculation engine running inside browser to simulating dose deposition and plan delivery. This would enable accessibility of the technology and much easier to explain the treatment planning process to the patients. This post is a demo of how the system works. Originally developed by Chris Kabat at UT Southwestern Medical Center using three.js. Neuralrad rewrote it with Rust stack and build into wasm module.

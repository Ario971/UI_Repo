---
title: "Show HN: Wyzer Programming Language"
source: "Hacker News Show HN"
url: "https://github.com/Wyzer-Lang/wyzer"
date: "2026-08-07"
topic: "AI dev tools"
type: "article"
read: false
summary: "So i've been working on this project since a few days (or months i should say), it's called wyzer (meaning wiser) it's a statically typed, compiled, resource-oriented programming language with integrated distributed safety via choreographic programming and perceus memory model, The reason why i began this project is out of frustration from Rust, you see i... (Local summary fallback used.)"
---

So i've been working on this project since a few days (or months i should say), it's called wyzer (meaning wiser) it's a statically typed, compiled, resource-oriented programming language with integrated distributed safety via choreographic programming and perceus memory model, The reason why i began this project is out of frustration from Rust, you see it does provide safety for your memory by the strict type checking but what it does not gurantee safety against are distributed deadlocks which is basically a few independent nodes or services wait permanently for resources or messages held by each other, forming a circular wait, the rest are cross-service correctness and protocol mismatch as well. If we are specific over here Wyzer works on mainly generalizing the concept of choreographic programming in a high level programming language because its the very few attempts of actually solving these gaps of safety. Instead of borrow checkers and lifetimes wyzer has linear/affine types and a perceus reference counting which is computationally much simpler for an LSP to understand as well after 5 months of research and a few weeks of development i am soon going to release version 0.1.0 of it, if you would like to contribute to it you're most welcome!

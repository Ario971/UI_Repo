---
title: "Show HN: Fuse – statically typed functional programming language"
source: "Hacker News Show HN"
url: "https://fuselang.org"
date: "2026-08-02"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hi HN! I've been working on the fuse programming language, it's a statically typed purely functional language with higher-kinder types and ad-hoc polymorphism. It compiles to the GRIN whole-program optimizer, producing LLVM-generated native code. Fuse supports ADTs, Generics, Type Methods, Traits, Pattern matching etc. all in a functional style with no mu... (Local summary fallback used.)"
---

Hi HN! I've been working on the fuse programming language, it's a statically typed purely functional language with higher-kinder types and ad-hoc polymorphism. It compiles to the GRIN whole-program optimizer, producing LLVM-generated native code. Fuse supports ADTs, Generics, Type Methods, Traits, Pattern matching etc. all in a functional style with no mutations. I’ve been developing the language for 5 years, with code written in Scala. I’ve started coding the language from the base of System F that was implemented as part of the book: Types and Programming Languages (tapl). And then extending with concepts such as Bidirectional Type Checking with Higher-Rank Polymorphism. I’ve mainly drawn inspiration from Rust, Haskell, Scala and Python (in terms of syntax). It all started because I wanted a language that has Rust-like concepts such as: ADT, Traits, Impl block syntax, etc. but have the pure functional semantics. I'd would love feedback on the language design and its general usage.

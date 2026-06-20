---
title: "Show HN: Jumpjet – a WASM runtime for game developers"
source: "Hacker News Show HN"
url: "https://jumpjet.dev"
date: "2026-06-19"
topic: "AI dev tools"
type: "article"
read: false
summary: "I built Jumpjet because I realized that engine and indie game developers are always repeating the same work: building the core infrastructure that touches the OS. Webassembly solves this in the Component Model by enabling interop between packages written in different languages. And in my opinion it's sort of the perfect fit for Jumpjet's model: providing... (Local summary fallback used.)"
---

I built Jumpjet because I realized that engine and indie game developers are always repeating the same work: building the core infrastructure that touches the OS. Webassembly solves this in the Component Model by enabling interop between packages written in different languages. And in my opinion it's sort of the perfect fit for Jumpjet's model: providing a chassis without an engine. Jumpjet works by defining a very close mapping of WebGPU (and a few other WebIDL features) to WIT so that they can be used in any language that can target the wasm Component Model. Your game then runs as a guest application in Jumpjet's host runtime (powered by wasmtime), which shrinks final bundle size considerably versus something like Electron. Right now a bare bones game in Jumpjet is about 40mb. Right now the project is in an alpha or possibly pre-alpha state, it's not production ready. On the commercial side, I think there's an opportunity for cloud storage, game server hosting, a package manager and/or marketplace, distribution, and more. Right now you can target macOS, Windows, Linux, Android and iOS. (I haven't done any real testing on mobile so good luck.) The languages you can use will depend on their support for generating bindings from .wit files. There are a few templates available, I recommend one of the Rust ones. If you are a game developer or just like tinkering, I'd love for you to try the project out and tell me what you think!

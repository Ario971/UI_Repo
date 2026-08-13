---
title: "Show HN: Woxi - Open-source Mathematica / Wolfram Language reimplementation"
source: "Hacker News Top + Show HN"
url: "https://woxi.ad-si.com"
date: "2026-08-12"
topic: "AI agents"
type: "article"
read: false
summary: "Woxi is an interpreter for the Wolfram Language written in Rust. It comes with Woxi Studio, a Mathematica-like GUI built with iced, but you can also use Woxi through a CLI, Jupyter kernel, Python package, npm package, or WASM module. Compared with wolframscript / Mathematica, the main differences are: - Free and open source - Very fast startup - Typically... (Local summary fallback used.)"
---

Woxi is an interpreter for the Wolfram Language written in Rust. It comes with Woxi Studio, a Mathematica-like GUI built with iced, but you can also use Woxi through a CLI, Jupyter kernel, Python package, npm package, or WASM module. Compared with wolframscript / Mathematica, the main differences are: - Free and open source - Very fast startup - Typically milliseconds rather than seconds for the Wolfram kernel, making Woxi practical for shell scripts, one-liners, and other short-lived processes - Embeddable - It can run in a browser via WASM or be embedded into another application as a scripting language A more detailed comparison with Mathematica is available here: https://woxi.ad-si.com/docs/comparison/mathematica/ . Conformance is ensured with ~26'000 unit tests and ~900 .wls script snapshot tests. The current focus is on fixing remaining edge cases, improving performance, and growing the community. If you use the Wolfram Language, I'd be particularly interested in feedback on compatibility and missing functionality. Contributions and bug reports are also very welcome: https://github.com/ad-si/Woxi

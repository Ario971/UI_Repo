---
title: "Show HN: Don't Hit Send – the model answers while you type"
source: "Hacker News Show HN"
url: "https://github.com/scalattice/dont-hit-send"
date: "2026-09-12"
topic: "AI dev tools"
type: "article"
read: false
summary: "Type. The model is already answering. There is no send button. Left pane is one long draft. Right pane is a stack of replies. Pause for ~350ms and it fires a normal streaming chat completion with the whole draft. Type again and it aborts the last request if that reply never produced text; if it did, that bubble stays and a new one stacks. Bubbles never re... (Local summary fallback used.)"
---

Type. The model is already answering. There is no send button. Left pane is one long draft. Right pane is a stack of replies. Pause for ~350ms and it fires a normal streaming chat completion with the whole draft. Type again and it aborts the last request if that reply never produced text; if it did, that bubble stays and a new one stacks. Bubbles never rewrite. Enter is a newline. That is overlapping unary streams, not a duplex socket. Same shape as ghost-text, pointed at a conversation instead of a code line. The bit that took the work is the hold: do not fire on "and N" while someone is still typing "and NASA". git clone https://github.com/scalattice/dont-hit-send.git cd dont-hit-send export SCALATTICE_API_KEY=slt_... # or OPENAI_API_KEY + OPENAI_BASE_URL ./run.sh # http://127.0.0.1:8766 Stdlib Python, MIT, key stays on your machine. Defaults to Scalattice OpenAI-compat; any host that speaks /v1/chat/completions works from Settings or env. Browser demo on our inference platform (sign-in after a short try): https://scalattice.com/dont-hit-send/ Why've we built this? The conventional AI chat interface is overdone and lacks innovation, I've personally been building agentic software for a while now and feel a lack of innovation in the interactivity. This is a step towards trialling some different inference interfaces!

---
id: "nicolevanderhoeven/quillgrep"
name: "nicolevanderhoeven/quillgrep"
url: "https://github.com/nicolevanderhoeven/quillgrep"
date: "2026-11-22"
source: "GitHub Search API"
category: "github_discovery"
kind: "mcp_server"
compatibility: 100
momentum: 45
risk: 32
integration_effort: 56
expected_gain: 87
composite: 73
replacement_target: ""
related_articles: [{"title":"luokai25/ultran","date":"2026-11-09","topic":"AI dev tools","similarity":0.19,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-11-09/13-luokai25-ultran.md"}]
pros: ["Recently updated (2026-11-22)","Apache-2.0 license","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["Integration may take more than a quick install","README mentions telemetry/analytics"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 5
dependency_files: [{"name":"pyproject.toml","summary":"python project; deps requires, build-backend, name, version, description, readme, license, license-files"}]
install_commands: ["ollama pull nomic-embed-text   # turns your notes into searchable vectors (about 270 MB)","ollama pull qwen3.5:9b         # writes the answers (about 7.6 GB; wants roughly 16 GB of RAM)","pipx install git+https://github.com/nicolevanderhoeven/quillgrep","uv tool install git+https://github.com/nicolevanderhoeven/quillgrep","git clone https://github.com/nicolevanderhoeven/quillgrep && cd quillgrep","claude mcp add quillgrep -- quillgrep mcp"]
risk_flags: ["README mentions telemetry/analytics"]
status: "new"
---

# nicolevanderhoeven/quillgrep

Private, local AI search and answers over your Obsidian vault. Your notes never leave your computer.

URL: https://github.com/nicolevanderhoeven/quillgrep

## Why it matters
You saved an article on 2026-11-09 about AI dev tools; this candidate overlaps with "luokai25/ultran" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-11-22)
+ Apache-2.0 license
+ GitHub Actions/CI detected
+ README mentions tests or validation

## Cons
- Integration may take more than a quick install
- README mentions telemetry/analytics

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 5

Dependency files:
- pyproject.toml: python project; deps requires, build-backend, name, version, description, readme, license, license-files

Install commands found:
- ollama pull nomic-embed-text   # turns your notes into searchable vectors (about 270 MB)
- ollama pull qwen3.5:9b         # writes the answers (about 7.6 GB; wants roughly 16 GB of RAM)
- pipx install git+https://github.com/nicolevanderhoeven/quillgrep
- uv tool install git+https://github.com/nicolevanderhoeven/quillgrep
- git clone https://github.com/nicolevanderhoeven/quillgrep && cd quillgrep
- claude mcp add quillgrep -- quillgrep mcp

Risk flags:
- README mentions telemetry/analytics

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# Quillgrep

**Ask questions about your Obsidian vault. Private, local AI. Your notes never leave your computer.**

Quillgrep reads your vault, builds a search index on your own machine, and answers questions in plain
language using an open-weight AI model that runs locally. Every answer cites the notes it came from.
It can also act as a go-between for bigger AI models such as Claude: they ask Quillgrep a question, your
local model reads the notes, and only a short written summary goes back. The big model never reads your notes.

> **Status: version 0.1, an early command-line release.** The engine works end to end on macOS, Linux
> and Windows, but you need a terminal and a local [Ollama](https://ollama.com) install to use it.
> The point-and-click app, bundled model engine and Obsidian plugin are planned; see the [roadmap](#roadmap).

## Contents

[Privacy promise](#privacy-promise) · [Install](#install) · [First run](#first-run) · [Commands](#commands) ·
[Use it from Claude (MCP)](#use-it-from-claude-or-other-ai-tools-mcp) · [Configuration](#configuration) ·
[Troubleshooting](#troubleshooting) · [Architecture](#architecture) · [Roadmap](#roadmap) ·
[Contributing](#contributing) · [License](#license)

## Privacy promise

- **Your notes are only read, never changed.** Quillgrep opens your vault read-only.
- **Nothing is uploaded.** Indexing, search and answers happen on your computer with a model served by your own
  Ollama. The only network traffic Quillgrep creates is to Ollama at `127.0.0.1` (your own machine). There is no
  telemetry, no account and no cloud service. (If you point `models.host` at another computer, your notes go
  there. That is your choice to make.)
- **Everything is stored locally**, in an index file and an audit log you can find and delete (see
  [where files live](#where-files-live)).
- **When you let another AI ask your notes** (the MCP server), it receives a synthesis written by your local
  model, never the notes, file paths or excerpts. You choose which folders are off limits, whether titles may be
  shown, and what gets redacted, and every request and response is written to a local
  [audit log](#what-the-mcp-server-shares-and-what-it-never-does).

## Install

You need three things: **Ollama** (runs the AI models), **two models**, and **Quillgrep** itself.
Quillgrep needs Python 3.11 or newer, which is probably already on your computer
(check with `python3 --version`, or `py --version` on Windows; if not, get it from
[python.org](https://www.python.org/downloads/)).

**1. Install Ollama** from <https://ollama.com/download> and start it (open the Ollama app; on Linux it runs as
a service or with `ollama serve`).

**2. Download the models.** In a terminal:

```bash
ollama pull nomic-embed-text   # turns your notes into searchable vectors (about 270 MB)
ollama pull qwen3.5:9b         # writes the answers (about 7.6 GB; wants roughly 16 GB of RAM)
```

Short on memory? Pick a smaller chat model from <https://ollama.com/search?q=qwen> (`ollama pull <name>`) and
set `chat = "<name>"` in the config (see [Configuration](#configuration)). Answers will be a little less sharp.

**3. Install Quillgrep** with one command, using [pipx](https://pipx.pypa.io) or
[uv](https://docs.astral.sh/uv/), which put the `quillgrep` command on your path without touching other Python
projects:

```bash
pipx install git+https://github.com/nicolevanderhoeven/quillgrep
# or
uv tool install git+https://github.com/nicolevanderhoeven/quillgrep
```

No pipx or uv yet? `python3 -m pip install --user pipx && python3 -m pipx ensurepath` installs pipx
(on Windows use `py -m pip install --user pipx`), then open a new terminal.

To upgrade later: `pipx upgrade quillgrep` (or `uv tool upgrade quillgrep`).

## First run

```bash
quillgrep init                      # finds your vault and writes the config file (or: quillgrep init /path/to/vault)
quillgrep doctor                    # checks Ollama and the models; tells you exactly what to install if anything is missing
quillgrep index                     # reads your notes. The first run takes a while; later runs only redo what changed
quillgrep ask "What did I decide about the conference talk?"
```

`quillgrep doctor` is the first-run check. If Ollama is not installed or running, or a model is missing, it says
so and prints the exact command to fix it (`ollama pull ...`). `index`, `ask` and `deep` run the same check
before they start.

**Want to try it before pointing it at your own notes?** This repository ships a small made-up vault:

```bash
git clone https://github.com/nicolevanderhoeven/quillgrep && cd quillgrep
quillgrep init examples/sample-vault
quillgrep index
quillgrep ask "When is the seed swap and who is bringing what?"
quillgrep deep "What should I work on this week, given my goals and deadlines?"
```

How long things take depends on your machine. On an Apple M2 with 24 GB and `qwen3.5:9b`, `ask` takes about
a minute (the first one longer, while the model loads into memory), and `deep` takes a few minutes because it
makes several model calls. Indexing a large vault takes a while the first time; after that only changed notes
are redone.

## Commands

| Command | What it does |
|---|---|
| `quillgrep init [VAULT]` | Create the config file for your vault and run the first-run check. |
| `quillgrep doctor` | Check Python, Ollama, the models, the vault and the index. Says what to fix. |
| `quillgrep index` | Read the vault and update the index. Only new or changed files are processed. `--rebuild` starts over. |
| `quillgrep ask "question"` | The fast path: hybrid search, re-rank, then a streamed answer that cites its notes. |
| `quillgrep deep "question"` | For broader questions ("what should I do next?"): a small model splits the question into several searches, results are pooled and re-ranked, and a bigger context is used for the answer. Slower, much better at synthesis. |
| `quillgrep mcp` | Run the [MCP server](#use-it-from-claude-or-other-ai-tools-mcp). `--print-setup` prints how to add it to Claude. |
| `quillgrep audit` | Show what the MCP server was asked and what it returned. `--verify` checks the log was not edited. |
| `quillgrep status` | What is in the index. |
| `quillgrep config` | Where the config file, index and audit log are. |

Useful options for `ask` and `deep`: `--recent` favours recently edited notes (good for "what should I do
next"), `--no-rerank` skips re-ranking (faster, less precise), `-v` shows what the search did. Global options
`--config FILE` and `--vault DIR` work with every command.

Answers cite excerpts as `[1]`, `[2]`, and a **Sources** list at the end maps each number to a note path.

### What gets indexed

Every Markdown note, the text of PDFs, and the **text elements** of Excalidraw drawings. Embedded images,
base64 data and the compressed drawing data Excalidraw stores are stripped so they do not pollute search.
Only `.trash` and `.obsidian` are skipped by default; change that, or limit indexing to certain folders, with
the `[index]` settings. Scanned PDFs (pictures of text) have no text layer and are skipped; there is no OCR yet.

## Use it from Claude or other AI tools (MCP)

`quillgrep mcp` is a [Model Context Protocol](https://modelcontextprotocol.io) server. It lets an AI assistant
such as Claude ask questions of your vault **without ever seeing the notes**: your local model reads them and
sends back a synthesis with note titles as citations.

It offers two tools: `ask_notes` (`question`, `depth` of `fast` or `deep`, optional `recent`) and `notes_status`
(counts only).

Index your vault first (`quillgrep index`). Then:

**Claude Code**: run once in a terminal:

```bash
claude mcp add quillgrep -- quillgrep mcp
```

**Claude Desktop**: open *Settings → Developer → Edit Config* and add this to `claude_desktop_config.json`,
then restart Claude Desktop:

```json
{
  "mcpServers": {
    "quillgrep": {
      "command": "quillgrep",
      "args": ["mcp"]
    }
  }
}
```

Desktop apps do not always see your terminal's `PATH`. If Claude says it cannot start the server, run
`quillgrep mcp --print-setup`, which prints both snippets with the full path to `quillgrep` filled in.
If you keep the config somewhere other than the default, add `"--config", "/path/to/config.toml"` before
`"mcp"` in `args`.

Then ask Claude something like *"Using my notes, what should I focus on this week?"*.

**Time limits.** `depth: "fast"` answers in tens of seconds. `depth: "deep"` can take several minutes, and
some clients give up on a tool call after a minute or so. In Claude Code you can raise the limit with the
`MCP_TOOL_TIMEOUT` environment variable (milliseconds).

### What the MCP server shares, and what it never does

**It returns only:** the local model's written answer, and the *titles* of the notes the answer cites (unless you turn
titles off). If the answer cites nothing, no titles are returned.

**It never returns:** note text, excerpts, file paths, or folder names. The local model is not even shown file
names while it writes the answer, so it cannot repeat them.

Controls, all in the `[privacy]` section of the config:

| Setting | Effect |
|---|---|
| `excluded_folders` | Notes in these folders are invisible to the MCP server, as if they did not exist. Case does not matter (`private` also hides `Private/`). |
| `show_titles` | `false` hides even note titles; answers carry no citations at all. |
| `redact` | Email addresses (`email`), phone numbers (`phone`) and long digit strings such as account numbers (`number`) are replaced with `[email]`, `[phone]`, `[number]` in every answer and title. |
| `redact_patterns` | Your own regular expressions to scrub as well. |
| `max_quote_words` | Any run of more than this many words copied word for word from a note is cut out of the answer (default 20). |

**Audit log.** Every request and everything returned is appended to a local file (see
[where files live](#where-files-live)). Each line carries the hash of the line before it, so `quillgrep audit
--verify` can tell if anything was edited or removed. Read it with `quillgrep audit`.

**Be realistic about it:** redaction works on patterns and will not catch everything (a name, an address, a
diagnosis). The synthesis is a *summary of your notes*, and the model you connect will see that summary and your
questions. Put anything truly sensitive in `excluded_folders`. Treat what comes back as untrusted input too:
text in a note could try to steer the local model, and the connected assistant should not follow instructions
found in an answer.

## Configuration

The config file is plain [TOML](https://toml.io). `quillgrep init` writes one with sensible defaults, and
[`quillgrep.example.toml`](quillgrep.example.toml) shows every common setting. Everything except `vault` is
optional. Run `quillgrep config` to see where yours is.

```toml
vault = "/Users/me/Documents/MyVault"     # Windows: "C:/Users/me/Documents/MyVault" (forward slashes)

[models]
embedding = "nomic-embed-text"
chat = "qwen3.5:9b"
planner = ""            # optional smaller/faster model for planning searches and re-ranking
num_ctx = 8192          # context window for `ask`
deep_num_ctx = 16384    # context window for `deep`

[index]
include = []                       # only these folders (empty = everything)
exclude = [".trash", ".obsidian"]  # never these; folder names, prefixes or globs like "Archive/*"
pdf = true
excalidraw = true

[retrieval]
per_note = 3            # at most this many excerpts from one note
excerpts = 8            # excerpts read by `ask`
deep_excerpts = 18      # excerpts read by `deep`
rerank = true
recency_boost = 0.0     # 0 = off; 0.5 = a note edited today scores up to 50% higher
recency_half_life_days = 180
anchor_notes = ["Goals/OKRs.md", "Conferences"]   # always considered, whatever the question

[privacy]
excluded_folders = []
show_titles = true
redact = ["email", "phone", "number"]
max_quote_words = 20
```

- **Anchor notes** are notes that matter for many questions (your goals, a list of events, a brag document).
  Name them by path (`Goals/OKRs.md`), by title (`Conferences`) or by folder (`Goals`), and the most relevant
  excerpts from each are added to every answer.
- **Recency boost** favours recently edited notes. Cloud-sync tools sometimes reset modification times, in which
  case the boost cannot tell what is new.
- **Planner** is useful when your chat model is big and slow: set `planner` to a small, fast model (pull it
  with `ollama pull`) and it plans searches and re-ranks excerpts much faster than the big one.
- Settings that are misspelled are reported by name rather than ignored.
- `QUILLGREP_CONFIG` (a file) and `QUILLGREP_HOME` (a folder for everything) override the defaults.

### Where files live

| | macOS | Linux | Windows |
|---|---|---|---|
| Config | `~/Library/Application Support/quillgrep/config.toml` | `~/.config/quillgrep/config.toml` | `%APPDATA%\quillgrep\config.toml` |
| Index and audit log | `~/Library/Application Support/quillgrep/` | `~/.local/share/quillgrep/` | `%LOCALAPPDATA%\quillgrep\` |

Delete the index file any time: `quillgrep index` rebuilds it. Your vault is never modified.

## Troubleshooting

Start with `quillgrep doctor`. It checks everything below and prints the fix.

| Symptom | What to do |
|---|---|
| *Could not reach Ollama* | Install it from <https://ollama.com/download>, then start the Ollama app (or run `ollama serve`). |
| *The model `…` is not installed* | Run the `ollama pull …` command shown. Names must match your config (`chat`, `embedding`, `planner`). |
| The first answer is very slow | Ollama is loading the model into memory. Later answers are quicker. A smaller `chat` model helps on small machines. |
| Out of memory, or the computer crawls | Use a smaller chat model, set `planner` to something small, or lower `num_ctx` / `deep_excerpts`. |
| "I could not find that in your notes" for something you know is there | Run `quillgrep index` (is it new?). Try `quillgrep deep`, which searches several ways. Check the folder is not in `exclude`. |
| A PDF is not found | Scanned PDFs have no text and are skipped (no OCR yet). PDFs over 50 MB are skipped (`max_pdf_mb`). |
| Config error mentioning backslashes | On Windows, write paths as `C:/Users/me/Vault` or in single quotes. |
| *SQLite … without FTS5* | Install Python from python.org; a few minimal builds lack full-text search. |
| Claude Desktop cannot start the server | Use the full path from `quillgrep mcp --print-setup`, then restart Claude Desktop. |
| A deep question times out in Claude | Use `depth: "fast"`, or raise the client's tool timeout (see [MCP](#use-it-from-claude-or-other-ai-tools-mcp)). |
| Changed the embedding model | Quillgrep notices and rebuilds the index on the next `quillgrep index`. |
| Still stuck | Open an issue with the output of `quillgrep doctor` (it contains no note text): <https://github.com/nicolevanderhoeven/quillgrep/issues>. |

## Architecture

```
                 your vault (read-only)
                          │
        extract: Markdown · PDF text · Excalidraw text   (strip base64 + drawing data)
                          │  chunks (~1200 chars, paragraph-aware)
                          ▼
        Ollama ◄── embeddings (nomic-embed-text) ──►  SQLite file ── FTS5 keyword index
                                                          │            vectors (float16)
   question ─► hybrid search: semantic + keyword (BM25) ──┘
                          │  reciprocal-rank fusion, recency boost, per-note cap
                          ▼
              re-rank (small model scores each excerpt) ─► + anchor notes
                          │
                          ▼
   ask:  chat model streams a cited answer
   deep: planner splits the question → several searches pooled → cited answer (bigger context)
   mcp:  same pipeline, then quote limit + redaction + titles only → audit log → the other AI
```

**How retrieval works.** Each question is searched two ways at once: by meaning (embedding similarity) and by
words (SQLite FTS5 with BM25 ranking over title, path and text). The two ranked lists are merged with
reciprocal-rank fusion, optionally nudged toward recent notes, and capped so no single note crowds out the
others. A small model then scores the surviving excerpts so the chat model reads fewer, better ones. `deep`
adds a planning step that turns one broad question into several focused searches plus title keywords, which
is what makes synthesis questions ("what should I do next given my goals?") work.

**Why Python.** The goal for this first version was a working, testable engine on all three desktop systems
that installs with one command. Python gives that fastest: SQLite with FTS5 is in the standard library (one
embedded database for keyword and vector search, no server), `numpy` does the vector maths, and the
installers `pipx` and `uv` make `quillgrep` a single command on macOS, Linux and Windows. There are only two
dependencies (`numpy`, `pypdf`), and the MCP server is a small hand-written JSON-RPC loop on the standard
library rather than a heavy framework, so the whole engine stays easy to bundle.

**With the Tauri desktop app in mind.** Tauri's shell is Rust, but the engine does not need to share its
language. The engine's contract with the outside world is deliberately language-neutral and small: a command
line, a TOML config, one SQLite file (documented schema in `store.py`) and newline-delimited JSON-RPC over
stdio (MCP). A Tauri app can run the engine as a bundled sidecar process and show the first-run wizard,
progress and settings on top of it, exactly as it will drive the bundled model engine later. If a part
(for example vector search at very large scale) outgrows Python, it can be moved to Rust behind the same
contract without changing how anything else talks to it.

**Scale.** Vectors are stored as float16 and compared by brute force in memory (as float32, about 3 KB per
passage), so a 100,000-passage vault needs around 300 MB of RAM while Quillgrep is answering. That is ample
for personal vaults; an approximate index is on the roadmap for much larger ones.

**Code map.** `src/quillgrep/`: `config` (settings), `extract` (files → clean text → chunks), `indexer`
(incremental indexing), `store` (SQLite: notes, chunks, vectors, FTS5), `retrieval` (hybrid search, fusion,
recency, anchors, per-note cap, re-rank), `answer` (`ask` and `deep`), `ollama` (client and first-run checks),
`doctor`, `mcp_server`, `privacy` (redaction, quote limit), `audit`, `cli`.

## Roadmap

Quillgrep is built in stages. **Version 0.1 (this release)** is the engine and command line described above.

- **Desktop app** (Tauri) for macOS, Linux and Windows: installers, a first-run wizard, no terminal needed.
- **Bundled model engine** (llama.cpp) so Ollama is no longer a separate install, plus a **model download
  wizard** that picks a Qwen model to fit your machine and downloads it on first run.
- **Obsidian plugin**, installable from Obsidian's Community plugins, to ask questions without leaving the vault.
- **Signed installers** (macOS notarization, Windows code signing).
- Retrieval: OCR for scanned PDFs, an approximate-nearest-neighbour index for huge vaults, background
  watching of the vault, a dedicated re-ranking model, and an evaluation set to measure answer quality.
- MCP: more granular per-folder privacy profiles and a remote transport with authentication.

Ideas and votes are welcome in the [issues](https://github.com/nicolevanderhoeven/quillgrep/issues).

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for setup, how to run the tests (they need no
Ollama and no model) and the one hard rule: **never commit real notes, vault paths or secrets**. Use the
synthetic vault in `examples/` for fixtures.

```bash
git clone https://github.com/nicolevanderhoeven/quillgrep && cd quillgrep
python3 -m venv .venv && . .venv/bin/activate     # Windows: .venv\Scripts\activate
pip install -e ".[dev]"
pytest && ruff check .
```

## License

[Apache License 2.0](LICENSE). It matches the licences of the open-weight models Quillgrep is designed to run
(such as Qwen), so the whole stack can be redistributed.


---
id: "tromolo/askrepo"
name: "Tromolo/askrepo"
url: "https://github.com/Tromolo/askrepo"
date: "2026-07-26"
source: "GitHub Trending"
category: "github_discovery"
kind: "local_model_tool"
compatibility: 100
momentum: 45
risk: 24
integration_effort: 60
expected_gain: 77
composite: 72
replacement_target: ""
related_articles: [{"title":"Show HN: Codebase Posters – turn any Git repo into generative poster art","date":"2026-07-12","topic":"AI agents","similarity":0.279,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-07-12/08-show-hn-codebase-posters-turn-any-git-repo-into-generative-poster-art.md"},{"title":"LagPixelLOL/shadertoy-local","date":"2026-07-26","topic":"AI dev tools","similarity":0.253,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-07-26/13-lagpixellol-shadertoy-local.md"},{"title":"Show HN: Local MCP – Claude/ChatGPT read your iMessage, Teams, files on-device","date":"2026-07-05","topic":"AI agents","similarity":0.221,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-07-05/09-show-hn-local-mcp-claude-chatgpt-read-your-imessage-teams-files-on-dev.md"}]
pros: ["Recently updated (2026-07-26)","MIT license","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["Integration may take more than a quick install"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 7
dependency_files: [{"name":"pyproject.toml","summary":"python project; deps name, version, description, readme, requires-python, license, authors, keywords"},{"name":"requirements.txt","summary":"deps tree-sitter>=0.21, tree-sitter-language-pack>=0.3, fastembed>=0.3, numpy>=1.26, lancedb>=0.13, pyarrow>=15, ollama>=0.3, typer>=0.12"}]
install_commands: ["pip install -e .          # or: pip install -r requirements.txt","ollama pull qwen3:14b","git repo -> ingest -> AST chunker -> embedder -> LanceDB","pip install -e \".[dev]\"","pip install -e ."]
risk_flags: []
status: "new"
---

# Tromolo/askrepo

Local codebase assistant: ask a git repo "where is auth handled?" and get answers with exact file:line citations. AST chunking + local LLM (Ollama).

URL: https://github.com/Tromolo/askrepo

## Why it matters
You saved an article on 2026-07-12 about AI agents; this candidate overlaps with "Show HN: Codebase Posters – turn any Git repo into generative poster art" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-07-26)
+ MIT license
+ GitHub Actions/CI detected
+ README mentions tests or validation

## Cons
- Integration may take more than a quick install

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 7

Dependency files:
- pyproject.toml: python project; deps name, version, description, readme, requires-python, license, authors, keywords
- requirements.txt: deps tree-sitter>=0.21, tree-sitter-language-pack>=0.3, fastembed>=0.3, numpy>=1.26, lancedb>=0.13, pyarrow>=15, ollama>=0.3, typer>=0.12

Install commands found:
- pip install -e .          # or: pip install -r requirements.txt
- ollama pull qwen3:14b
- git repo -> ingest -> AST chunker -> embedder -> LanceDB
- pip install -e ".[dev]"
- pip install -e .

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# AskRepo

A local codebase assistant. Point it at a git repository and ask questions like
*"where is authentication handled?"* or *"what does this function do?"* - it answers with
citations to exact `file:line` locations.

Two things make it work well:

- **AST chunking.** Code is split by structure using tree-sitter - one chunk per function,
  method, or class - instead of fixed line windows. Chunks stay semantically whole and every
  chunk knows its exact line range, so citations are precise.
- **Deterministic citations.** The model only refers to numbered snippets (`[1]`, `[2]`).
  The `file:line` for each is resolved from chunk metadata, not written by the model, so it
  can't hallucinate a line number. Snippets it doesn't cite are dropped from the answer.

Everything runs locally:

- `qwen3:14b` via [Ollama](https://ollama.com) generates the answer,
- `jina-embeddings-v2-base-code` (via [fastembed](https://github.com/qdrant/fastembed), ONNX)
  embeds the code - no torch, no transformers,
- `jina-reranker-v2-base-multilingual` (cross-encoder, ONNX) sharpens the top-k,
- [LanceDB](https://lancedb.com) stores the vectors and does hybrid dense + full-text search.

## Install

```bash
python -m venv venv && source venv/bin/activate
pip install -e .          # or: pip install -r requirements.txt
```

You need Ollama running with the answer model pulled:

```bash
ollama pull qwen3:14b
```

Embedding and reranker models are downloaded automatically on first use.

## Usage

```bash
# Index a repository (incremental - only changed files are re-embedded)
askrepo index /path/to/repo

# Ask
askrepo ask "where is authentication handled?" --repo /path/to/repo
askrepo ask "what does the login function do?" --repo /path/to/repo
```

If you installed with `pip install -e .` the `askrepo` command is on your PATH; otherwise
use `python -m askrepo ...`.

### Evaluate retrieval

```bash
askrepo eval --repo /path/to/repo --k 5
```

Ablates the retrieval stack - `dense`, `fts`, `hybrid`, `hybrid+boost`,
`hybrid+boost+rerank` - and reports hit@k, precision@k, recall@k, MRR, symbol-hit@k and
latency for each, against a labeled query set (`<repo>/eval/queries.json`). It's
retrieval-only (no LLM by default), so it's fast and deterministic. See `eval/queries.json`
for the format.

## How it works

```
git repo -> ingest -> AST chunker -> embedder -> LanceDB
                                                     |
question -> retriever (dense + FTS, RRF) -> reranker -> context -> qwen3 -> answer + citations
```

| Module | Responsibility |
|--------|----------------|
| `ingest.py` | Walk the repo, honor nested `.gitignore`, detect language, hash files for incremental indexing. Skips symlinks and oversized/binary files. |
| `chunker.py` | AST chunking with tree-sitter; overlapping line-window fallback for unsupported files. |
| `embedder.py` | jina (fastembed/ONNX) or ollama/nomic embeddings. |
| `store.py` | LanceDB table + file-hash manifest. |
| `retriever.py` | Hybrid retrieval: RRF over dense + full-text, symbol-name boost. |
| `reranker.py` | Cross-encoder reranking of the candidate set. |
| `answer.py` / `llm.py` | Prompt assembly, generation, deterministic `[n]` citation mapping. |
| `cli.py` | `index` / `ask` / `eval`. |

## Configuration

All settings can be overridden via environment variables:

| Variable | Default | Meaning |
|----------|---------|---------|
| `ASKREPO_EMBED_BACKEND` | `jina` | `jina` (fastembed) or `ollama` (nomic) |
| `ASKREPO_LLM` | `qwen3:14b` | Ollama model for answers |
| `ASKREPO_RERANK` | `1` | Cross-encoder reranker (`0` to disable) |
| `ASKREPO_RERANKER` | `jinaai/jina-reranker-v2-base-multilingual` | Reranker model (lighter: `Xenova/ms-marco-MiniLM-L-6-v2`) |
| `ASKREPO_TOPK` | `8` | Chunks put into the answer context |
| `ASKREPO_ENRICH` | `1` | Embed a path/symbol header with each chunk |
| `ASKREPO_CONTEXTUAL` | `0` | Add an LLM one-line summary per chunk at index time (slow) |
| `ASKREPO_HYDE` | `0` | Expand the query with a hypothetical snippet before embedding |
| `ASKREPO_EXPAND` | `0` | Follow the call graph and retrieve called-function definitions |
| `ASKREPO_EXPAND_DEPTH` | `2` | How many call levels `--expand` follows |
| `ASKREPO_EXPAND_CALLERS` | `1` | With `--expand`, also add a few call sites of the results |
| `ASKREPO_HOME` | `~/.askrepo` | Where indexes are stored |
| `OLLAMA_HOST` | `http://localhost:11434` | Ollama endpoint |

### Retrieval quality

- **Enrichment** (on by default): the embedded text is prefixed with the file path and
  symbol, which helps natural-language questions match code.
- **Contextual retrieval** (`askrepo index --contextual`): generates a one-line LLM summary
  per chunk and embeds it too. Higher quality on conceptual questions, but one LLM call per
  chunk makes indexing slow - opt-in.
- **HyDE** (`askrepo ask --hyde`): turns the question into a hypothetical code snippet and
  embeds that alongside it. One extra LLM call per question.
- **Callee expansion** (`askrepo ask --expand`): after retrieval, follows the call graph -
  the functions the matched chunks call, then what those call, up to `--expand-depth` levels
  (default 2) - and adds their definitions to the context, so an answer can trace down to
  where the work actually happens and cite the whole chain.

Each of these is a separate index (or query mode), so use `askrepo eval` to see whether it
actually helps on your repo before leaving it on.

Indexes are keyed by repo path *and* embedding model, so switching backend or model builds
a separate index rather than mixing incompatible vectors. `jina` and `nomic` are both
768-dim but not interchangeable - reindex after switching.

## Development

```bash
pip install -e ".[dev]"
pytest
```

The tests cover the chunker (AST boundaries, decorators, arrow functions, fallback), the
deterministic citation mapping, and ingest security (symlink and size handling). They don't
require Ollama or any model downloads.

## Scope

v1 is read-only Q&A. There's no code modification - the retriever and answer layer are kept
separate so a change-proposal step could be added later without a rewrite.

## License

MIT - see [LICENSE](LICENSE).


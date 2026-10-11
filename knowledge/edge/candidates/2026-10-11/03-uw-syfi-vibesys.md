---
id: "uw-syfi/vibesys"
name: "uw-syfi/vibesys"
url: "https://github.com/uw-syfi/vibesys"
date: "2026-10-11"
source: "GitHub Trending"
category: "github_discovery"
kind: "agent_framework"
compatibility: 80
momentum: 89
risk: 45
integration_effort: 58
expected_gain: 77
composite: 72
replacement_target: ""
related_articles: [{"title":"Show HN: Agent.reviews – Where AI agents read and write reviews on tools","date":"2026-10-07","topic":"AI agents","similarity":0.273,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-10-07/06-show-hn-agent-reviews-where-ai-agents-read-and-write-reviews-on-tools.md"},{"title":"Show HN: Crashlytics for AI Coding Agents","date":"2026-10-08","topic":"AI agents","similarity":0.261,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-10-08/06-show-hn-crashlytics-for-ai-coding-agents.md"},{"title":"Show HN: Rebuno - An open-source runtime for production agents","date":"2026-09-14","topic":"AI agents","similarity":0.256,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-09-14/07-show-hn-rebuno-an-open-source-runtime-for-production-agents.md"}]
pros: ["Recently updated (2026-10-11)","MIT license","108 GitHub stars","GitHub Actions/CI detected"]
cons: ["Integration may take more than a quick install","May require elevated privileges"]
readme_quality: 100
has_ci: true
has_tests: false
setup_steps_count: 2
dependency_files: [{"name":"pyproject.toml","summary":"python project; deps requires, build-backend, name, version, description, readme, requires-python, license"}]
install_commands: ["uv tool install vibesys","codex login"]
risk_flags: ["May require elevated privileges"]
status: "new"
---

# uw-syfi/vibesys

Can AI Agents Build Bespoke Systems?

URL: https://github.com/uw-syfi/vibesys

## Why it matters
You saved an article on 2026-10-07 about AI agents; this candidate overlaps with "Show HN: Agent.reviews – Where AI agents read and write reviews on tools" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-10-11)
+ MIT license
+ 108 GitHub stars
+ GitHub Actions/CI detected

## Cons
- Integration may take more than a quick install
- May require elevated privileges

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: no
Setup steps estimate: 2

Dependency files:
- pyproject.toml: python project; deps requires, build-backend, name, version, description, readme, requires-python, license

Install commands found:
- uv tool install vibesys
- codex login

Risk flags:
- May require elevated privileges

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# VibeSys: Generating Bespoke Systems with AI Agents

[![arXiv](https://img.shields.io/badge/arXiv-2605.06068-b31b1b.svg)](https://arxiv.org/abs/2605.06068)

**An agentic framework that generates bespoke systems from application requirements, workload characteristics, and the underlying hardware.**

One of VibeSys's first initiatives is **VibeServe**, which asks whether AI agents
can generate a bespoke LLM serving system for each model, workload, and hardware
target. The figures, blog post, and paper below document that initiative.

<p align="center">
  <img src="docs/figures/idea.png" width="85%" alt="Generic serving today vs. VibeServe's per-target bespoke systems">
</p>

## Updates

- **2026-05** — VibeServe blog post: [Let AI Agents Write Your Serving Stack with VibeServe](https://syfi.cs.washington.edu/blog/2026-05-12-introducing-vibeserve/).
- **2026-05** — Paper released on arXiv: [2605.06068](https://arxiv.org/abs/2605.06068).

## Introduction

VibeSys explores a broader approach to systems development: use application
requirements, workload characteristics, and hardware capabilities as the inputs
to an agentic search process that creates a purpose-built system. Each target
defines its own implementation contract, correctness checks, and performance
benchmark, allowing VibeSys to work across domains rather than assuming a single
runtime, programming language, or deployment shape.

The framework is organized as a multi-agent optimization loop. An outer loop
plans the search over system designs using persistent state such as issues,
memory, and git history, while an inner loop implements candidates, validates
correctness against target-specific requirements, and measures performance on
the target workload and hardware. VibeServe is the first substantial initiative
built on this approach; its serving-focused results include predicted-output
decoding, hybrid prompt caching, streaming ASR, constrained JSON decoding,
multimodal inference, and Apple Silicon deployment.

## Architecture

<p align="center">
  <img src="docs/figures/architecture.png" width="90%" alt="VibeServe architecture: outer loop dispatches per-round tasks to an inner loop of Implementer / Accuracy Judge / Performance Evaluator agents">
</p>

The framework factors the work along two axes:

- **Outer loop** — a fresh designer selects one falsifiable causal hypothesis
  from git history, profiling evidence, and durable roadmap/progress memory, then
  hands it off until it is proven, disproven, or otherwise terminated.
- **Inner loop** — a hypothesis-scoped implementer session edits the candidate,
  chooses targeted experiments and parameter ranges, and reports whether to
  continue or nominate the result.
- **Independent judge** — a fresh, read-only reviewer checks the implementation,
  activation evidence, invariants, and reward-hacking risks at a sparse cadence.
  After a PASS, the framework—not an agent—runs and records the canonical
  accuracy and benchmark commands.
- **Performance evaluator** — profiles the implementation (Nsight Systems,
  PyTorch profiler) and feeds bottleneck hints into future design decisions.
- **Skills library** — Agent Skills entries distilled from existing serving engines and research literature (continuous batching, paged-KV, FlashInfer/FlashAttention, MLX, hybrid-cache management, …). New model families, hardware platforms, and optimization techniques are added by writing a skill, not by modifying the framework.
- **Execution environment**: an isolated runtime view where candidate source
  is writable while evaluator-owned inputs and framework metadata are read-only
  and integrity-checked. It exposes the target hardware (local CUDA, Modal,
  Docker, or Apple Silicon) plus profilers.

Each round is recorded in git and a framework-owned audit. Provisional rounds
remain explicitly unreviewed; only judge-approved candidates receive official
accuracy and performance results.

## Quickstart

Install Python 3.12+, Git, and [uv](https://docs.astral.sh/uv/). Agents run in
a local Docker container, so Docker Engine must be reachable without `sudo` (add
your user to the `docker` group). Tasks whose candidate is a container topology,
such as the `microservices` examples, declare `docker_in_docker = true`: their
container gets a Docker daemon of its own and needs the
[Sysbox](https://github.com/nestybox/sysbox) runtime installed. The `slurm` environment
with `[vibesys.agent_gpu]` also needs `bubblewrap` on Linux and on the compute nodes (see the
[CLI reference](docs/cli-flags.md)): it confines the GPU jobs its agent starts there.
Then install VibeSys:

```bash
uv tool install vibesys
```

Install and authenticate a supported coding-agent CLI. For Codex CLI, run
`codex login`; see the [CLI reference](docs/cli-flags.md) for other supported
agents.

From the root of the project you want to optimize, add a named task under
`.vibesys/tasks/`:

- `.vibesys/tasks/<task>/OBJECTIVE.md` describes what to optimize and the
  constraints the result must preserve.
- `.vibesys/tasks/<task>/vibesys.input.toml` identifies the problem domain and
  the programs that check correctness and benchmark performance.
- `agent.toml` optionally selects the coding agent, model, and hardware backend.
  Keep it untracked.

For example:

```toml
[model]
name = "gpt-5.4"

[agent]
backend = "cli"
cli_provider = "codex"

[backend]
name = "cpu"
```

See [`examples/`](examples/) for complete objectives and manifests across data
structures, model serving, and microservices. New examples are registered in
[`examples/registry.toml`](examples/registry.toml); see
[Adding an example](docs/contributing/examples.md).

Run from the project root:

```bash
cd /path/to/my-project
vibesys validate --task my-task
vibesys --task my-task --max-rounds 4
```

The directory must be its Git repository root, or outside Git so VibeSys can
initialize a repository. An existing repository needs a baseline commit and a
clean worktree. See [Running VibeSys](docs/running-vibesys.md) for copied
projects, examples, Docker, Modal, remote repositories, resume, and
alternate search loops. The [CLI reference](docs/cli-flags.md) documents every
flag. Contributor setup belongs in [`docs/contributing/development.md`](docs/contributing/development.md).

## Citation

If you use the VibeServe initiative in your research, please cite:

```bibtex
@misc{kamahori2026vibeserveaiagentsbuild,
      title={VibeServe: Can AI Agents Build Bespoke LLM Serving Systems?},
      author={Keisuke Kamahori and Shihang Li and Simon Peter and Baris Kasikci},
      year={2026},
      eprint={2605.06068},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2605.06068},
}
```


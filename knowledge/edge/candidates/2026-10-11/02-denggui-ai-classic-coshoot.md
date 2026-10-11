---
id: "denggui-ai/classic-coshoot"
name: "denggui-ai/classic-coshoot"
url: "https://github.com/denggui-ai/classic-coshoot"
date: "2026-10-11"
source: "GitHub Search API"
category: "github_discovery"
kind: "claude_skill"
compatibility: 87
momentum: 45
risk: 24
integration_effort: 24
expected_gain: 87
composite: 75
replacement_target: ""
related_articles: [{"title":"instl999/exam-scribe","date":"2026-10-02","topic":"AI dev tools","similarity":0.18,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-10-02/12-instl999-exam-scribe.md"}]
pros: ["Recently updated (2026-10-11)","MIT license","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 85
has_ci: true
has_tests: true
setup_steps_count: 1
dependency_files: []
install_commands: ["codex exec"]
risk_flags: []
status: "new"
---

# denggui-ai/classic-coshoot

Step into a classic story and take a cinematic co-shot with a classic character using your own photo — a Codex skill (characters, not actors).

URL: https://github.com/denggui-ai/classic-coshoot

## Why it matters
You saved an article on 2026-10-02 about AI dev tools; this candidate overlaps with "instl999/exam-scribe" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-10-11)
+ MIT license
+ GitHub Actions/CI detected
+ README mentions tests or validation

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 1

Dependency files:
- none detected

Install commands found:
- codex exec

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# classic-coshoot · 经典合拍

Step into a classic story and take a cinematic still with a classic character — using your own photo.

用你自己的照片走进经典剧情（西游记、红楼梦、三国演义……），和经典角色同框，拍一张电影剧照感的合影。

> **Status: P1 (engine and skill skeleton).** The deterministic engine, CLI, workflow and tests are in place. The gold scene/character library and real-generation validation (P2) are **not done yet**, so this is not ready for end users. See [`RELEASE.md`](RELEASE.md).
>
> **状态：P1（引擎与 skill 骨架）。** 金牌场景库与真实出图验证（P2）尚未完成，暂不面向普通用户使用。

## How it works · 工作方式

- **Host**: [Codex CLI](https://github.com/openai/codex) is the primary host and uses its built-in image generation. Claude Code can drive the same workflow through `codex exec`.
- **The model understands, scripts enforce**: the model talks with you and writes scene/character cards (JSON). A stdlib-only Python engine (`skills/classic-coshoot/scripts/`) compiles the image request and enforces the rules below.
- **Workflow**: preflight → describe a scene → confirm the scene card → photo check + consent → quota confirmation → generate → audit → deliver → your own three-point check (looks like you? right character? faces not blended?).

## Principles · 原则（C+）

- **Characters, not actors.** You pose with the *character*. Actor names are only used to pick a costume version and never reach the image prompt; character faces are original designs that do not resemble any real actor or public figure.
- **合影对象是角色，不是演员本人。** 提到演员名只用来选择造型版本，不会进入生图提示词；角色的脸是原创设计。
- **Adults only, your own photo.** Use only photos of yourself or of people who have given consent. Photos of minors are not supported.
- **仅支持成年人，只用本人或已获同意的照片。**
- **AI-generated, labelled.** Delivered images keep the generator's C2PA provenance data untouched; an optional visible badge is a separate derivative file.
- **No workarounds.** Platform refusals are reported as-is; prompts are never rewritten to get around them. Failed generations are never retried automatically.
- For personal, non-commercial tribute use.

## Privacy · 隐私

Your photos stay in a local workspace (`coshoot-workspace/`, git-ignored) and are sent to OpenAI only as reference images for generation, through your own Codex account. Nothing is uploaded to this project or its maintainers.

照片保存在本地工作区，只会通过你自己的 Codex 账号作为参考图发送给 OpenAI 生图，不会上传到本项目或维护者。

## Development · 开发

```bash
python3.12 -m venv .venv
.venv/bin/pip install -r requirements-dev.txt
.venv/bin/python -m pytest tests -q
python3 skills/classic-coshoot/scripts/cli.py validate-library
```

Runtime code needs only Python 3.9+ and the standard library; OpenCV 4.x (photo/framing checks) and Pillow (optional badge) are optional and degrade gracefully when missing.

Design: [`docs/superpowers/specs/2026-10-10-classic-coshoot-design.md`](docs/superpowers/specs/2026-10-10-classic-coshoot-design.md)

## License

[MIT](LICENSE)


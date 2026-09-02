---
id: "ohblue/team-strategy-loop"
name: "ohblue/team-strategy-loop"
url: "https://github.com/ohblue/team-strategy-loop"
date: "2026-09-02"
source: "GitHub Search API"
category: "github_discovery"
kind: "claude_skill"
compatibility: 75
momentum: 45
risk: 35
integration_effort: 28
expected_gain: 81
composite: 68
replacement_target: ""
related_articles: [{"title":"Show HN: Parley – your coding agent can talk to a teammate's agent","date":"2026-08-11","topic":"AI agents","similarity":0.279,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-11/06-show-hn-parley-your-coding-agent-can-talk-to-a-teammate-s-agent.md"},{"title":"Show HN: Keen Code – an agentic-engineered coding agent","date":"2026-08-10","topic":"AI agents","similarity":0.264,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-10/06-show-hn-keen-code-an-agentic-engineered-coding-agent.md"},{"title":"scian0204/ClaudeCodeWorkspace","date":"2026-08-04","topic":"AI dev tools","similarity":0.225,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-08-04/11-scian0204-claudecodeworkspace.md"}]
pros: ["Recently updated (2026-09-02)","MIT license","Matches 3 saved Feed article(s)"]
cons: ["No clear install command found in README"]
readme_quality: 48
has_ci: false
has_tests: false
setup_steps_count: 0
dependency_files: []
install_commands: []
risk_flags: []
status: "new"
---

# ohblue/team-strategy-loop

Continuous team strategy loop for AI agents: think clearly → align → correct course. 团队战略持续思考循环：想清楚→对齐→纠偏。

URL: https://github.com/ohblue/team-strategy-loop

## Why it matters
You saved an article on 2026-08-11 about AI agents; this candidate overlaps with "Show HN: Parley – your coding agent can talk to a teammate's agent" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-09-02)
+ MIT license
+ Matches 3 saved Feed article(s)

## Cons
- No clear install command found in README

## Repository Inspection
README quality: 48/100
CI detected: no
Tests mentioned: no
Setup steps estimate: 0

Dependency files:
- none detected

Install commands found:
- none detected

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# team-strategy-loop

**Continuous team strategy loop for AI agents: think clearly → align → correct course.**

**团队/部门战略的持续思考循环：想清楚（战略会）→ 对齐（团队）→ 纠偏（周/月复盘）。**

Strategy is not a list of goals — **a strategy without trade-offs is not a strategy**, and **treating assumptions as facts is the biggest trap**. This skill turns strategic thinking from a one-off analysis into a persistent mechanism.

战略不是目标清单——**没有取舍的不是战略，把假设当事实是战略最大的坑**。本技能把战略思考从一次性的分析变成持续机制。

---

## What this skill is / 这个技能是什么

Two things at the core:

- **Trade-offs** — a strategy must answer "we choose A, and deliberately do not do B". A goal list is not a strategy.
- **Assumption register** — separate assumptions from facts, validate them continuously, and never let an unverified assumption pass as a fact.

核心是两件事：

- **取舍** — 战略必须有「选 A 暂不做 B」，目标清单不是战略。
- **假设登记** — 把假设与事实分开，持续验证，防止把未经验证的假设当事实。

## The loop / 循环

```text
Strategy
   ↓
Strategic Priorities
   ↓
Initiatives
   ↓
Metrics
   ↓
Weekly Ops Review
   ↓
Problems / Evidence
   ↓
Decisions
   ↓
Adjust Initiatives
   ↺
```

## Three rhythms / 三种节奏

| Trigger 触发 | Rhythm 节奏 | Flow 流程 |
|---|---|---|
| Strategic thinking, quarterly/half-year planning, team alignment | Strategy session 战略会 | 11-step main flow (see SKILL.md) |
| Weekly review | Ops review 运营复盘 | 5 questions (see SKILL.md) |
| Monthly/quarterly review | Business review 业务复盘 | `references/business-review.md` |

## Three mandatory documents / 三份强制文档

Maintained long-term under your strategy directory (templates in `templates/`):

- **`STRATEGY_STATE.md`** — current strategy state: current state, diagnosis, strategic questions, choices, non-goals, initiatives, metrics. 当前战略状态：现状、诊断、战略问题、选择、Non-goals、Initiatives、Metrics。
- **`DECISION_LOG.md`** — decision log: background, options, trade-offs, and conditions that would overturn each decision. 决策日志：背景、选项、取舍、推翻条件。
- **`ASSUMPTION_REGISTER.md`** — assumption register: separates assumptions from facts, marks evidence and confidence, validated regularly. **This is the memory of the loop.** 假设登记：把假设与事实分开，标注证据与 Confidence，定期验证。**这是循环的记忆。**

These three documents are the single source of truth — state, decisions, and assumptions are declared here only; other documents reference, never restate.

三份文档是单一事实源：状态、决策、假设只在此声明，其他文档引用不复述。

## Directory layout / 目录结构

| Path 路径 | Purpose 用途 |
|---|---|
| `SKILL.md` | Loop overview, rhythm triage, 11-step strategy session, weekly ops review, three mandatory docs |
| `references/strategy-framework.md` | Choices + trade-offs framework 取舍与选项分析框架 |
| `references/business-review.md` | Monthly/quarterly business review 月/季业务复盘流程 |
| `references/decision-framework.md` | Decision & assumption register conventions 决策与假设登记口径 |
| `templates/` | Skeleton for STRATEGY_STATE / DECISION_LOG / ASSUMPTION_REGISTER / initiative scorecard |

## How to use it / 使用方法

1. Confirm your strategy directory (where the three documents live). 确认战略目录（三份文档所在处）。
2. Run the matching rhythm: strategy session → 11-step main flow; weekly → ops review; monthly/quarterly → business review. 跑对应节奏：战略会走 11 步主流程；每周走运营复盘；月/季走业务复盘。
3. Update the three documents at the end of every run. 每次结束更新三份文档。

### Weekly ops review — 5 questions / 每周运营复盘 — 5 个问题

1. Has the goal changed? 目标有没有发生变化？
2. Is any metric off track? Metric 有没有偏离？
3. What is the biggest blocker? 最大 blocker 是什么？
4. Which strategic assumption might be wrong? 哪个战略假设可能错了？
5. What needs an owner's decision? 有什么事情需要负责人做决定？

### Strategy session — 11 steps / 战略会 — 11 步

1. **Current State** — what is happening now, described with facts. 现在发生了什么？用事实描述。
2. **Diagnosis** — the real problem, separating symptoms from root causes. 真正的问题是什么？区分症状与根因。
3. **Strategic Questions** — the 3–5 most important strategic questions. 当前最重要的 3~5 个战略问题。
4. **Options** — ≥2 candidate routes per question. 每个问题列出 ≥2 条可选路线。
5. **Trade-offs** — what each choice gives up. 每个选择写明放弃什么。
6. **Strategic Choices** — final choice written as "choose A, deliberately not B, because…". 最终选择，写成「选 A，暂不做 B，因为……」。
7. **Non-goals** — what is explicitly not done, into STRATEGY_STATE. 明确不做什么，写进 STRATEGY_STATE。
8. **Initiatives** — strategy lands on initiative / owner / milestone. 战略落到 initiative / owner / milestone。
9. **Metrics** — an observable metric per initiative. 每个 initiative 配可观测 metric。
10. **Evidence** — separate assumptions from existing evidence; assumptions go to ASSUMPTION_REGISTER with confidence. 区分假设与已有证据；假设进 ASSUMPTION_REGISTER，标注 Confidence。
11. **Review** — write down the conditions that would trigger re-evaluation. 写清什么情况下重新评估战略（触发条件）。

## License

MIT — see [LICENSE](LICENSE).

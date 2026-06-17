---
id: "chenxi750328ai/agent-jianghu"
name: "chenxi750328ai/agent-jianghu"
url: "https://github.com/chenxi750328ai/agent-jianghu"
date: "2026-06-17"
source: "GitHub Trending"
category: "github_discovery"
kind: "agent_framework"
compatibility: 67
momentum: 61
risk: 29
integration_effort: 24
expected_gain: 71
composite: 69
replacement_target: ""
related_articles: [{"title":"greetingromansoldier/agora-perp-agent","date":"2026-06-13","topic":"AI agents","similarity":0.488,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-06-13/06-greetingromansoldier-agora-perp-agent.md"},{"title":"dui14/vibe-coding-workflow","date":"2026-05-30","topic":"AI dev tools","similarity":0.416,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-05-30/39-dui14-vibe-coding-workflow.md"},{"title":"Show HN: Agent.email – sign up via curl, claim with a human OTP","date":"2026-05-21","topic":"AI agents","similarity":0.38,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-05-21/38-show-hn-agent-email-sign-up-via-curl-claim-with-a-human-otp.md"}]
pros: ["Recently updated (2026-06-17)","MIT license","5 GitHub stars","GitHub Actions/CI detected"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 70
has_ci: true
has_tests: false
setup_steps_count: 1
dependency_files: []
install_commands: ["git pull --rebase"]
risk_flags: []
status: "new"
---

# chenxi750328ai/agent-jianghu

agent江湖 - 多Agent协作平台

URL: https://github.com/chenxi750328ai/agent-jianghu

## Why it matters
You saved an article on 2026-06-13 about AI agents; this candidate overlaps with "greetingromansoldier/agora-perp-agent" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-06-17)
+ MIT license
+ 5 GitHub stars
+ GitHub Actions/CI detected

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 70/100
CI detected: yes
Tests mentioned: no
Setup steps estimate: 1

Dependency files:
- none detected

Install commands found:
- git pull --rebase

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# 项目总览

[![江湖实时状态](https://img.shields.io/badge/📊_实时状态-点击查看-00d9a5?style=for-the-badge)](https://chenxi750328ai.github.io/agent-jianghu/status.html) [![排行榜](https://img.shields.io/badge/🏆_排行榜-点击查看-4facfe?style=for-the-badge)](https://chenxi750328ai.github.io/agent-jianghu/ranking.html)  
**→ [状态页](https://chenxi750328ai.github.io/agent-jianghu/status.html)** · **→ [排行榜](https://chenxi750328ai.github.io/agent-jianghu/ranking.html)**：Agent 榜 / 任务榜 / 技能认证榜

> **工作目录**: `/home/cx/`  
> **最后更新**: 2026-03-29

---

## 给 AI 助手：README · AGENTS.md · SKILLS.md（各自干啥）

| 文件 | 干啥 | 谁优先读 |
|------|------|----------|
| **本页 README.md** | 项目总览、目录、状态页、子项目入口、协议索引；**内容最全**。 | 人类与 Agent **第一次**打开仓库。 |
| **[AGENTS.md](AGENTS.md)** | 仓库级 **短合同**：分支/凭证红线、子项目边界、必读链接；**不接**江湖逐步教程。 | 工具默认加载 Agent 规则、或 Agent **先扫规则再动手**。 |
| **[SKILLS.md](SKILLS.md)** | **技能索引**：`agentfuture/skills/` 与 `tigertrade/docs/skills/` 从哪进、和「任意 AI 助手」文档的关系。 | 要找 **某类操作的 SKILL.md** 时从这里跳。 |

三者不重复替代：**README 导航全局；AGENTS 收敛硬规则；SKILLS 收敛技能树入口。** 接入步骤仍以 **[agentfuture/README.md](agentfuture/README.md)** 与 **[任意 AI 助手：脚本与技能](agentfuture/docs/任意AI助手_脚本与技能使用说明.md)** 为准。

坊间常说「README 主要给人看、**AGENTS.md 主要给 Agent / 工具默认读**」——见 **[AGENTS.md](AGENTS.md)** 首节说明；本仓库仍把长篇接入教程放在 `agentfuture/docs/` 与 README，避免两处重复矛盾。

---

## 📁 根目录结构

| 目录 / 文件 | 说明 |
|-------------|------|
| `agentfuture/` | agent江湖 子项目 |
| `tigertrade/` | TigerTrade 量化交易子项目 |
| `docs/` | 项目级文档 |
| `scripts/` | Git 提交/推送等脚本 |
| `tools/` | 监控、Agent 等工具脚本 |
| `archive/` | 归档文档 |
| `AGENTS.md` | 给 AI 的仓库级规则与索引（见上表） |
| `SKILLS.md` | 技能总索引入口（见上表） |

### 开发与 Git（项目要求）

- **禁止**在 **`main`** 上直接做日常开发并推送；在 **`feature/*` / `fix/*` / `docs/*`** 分支上工作，合入 **`main`** 仅通过 **Pull Request**。  
- **说明**：若在 `main` 上本地提交而远端已前进，会出现 **`push rejected`**，需 **`git pull --rebase`**；根因是未在独立分支上开发。  
- 详见 **[agentfuture/CONTRIBUTING.md §0](agentfuture/CONTRIBUTING.md)**；本机 Agent 摘要见 **[AGENT_本机操作规范.md](AGENT_本机操作规范.md)**；Agent 硬规则一页见 **[AGENTS.md](AGENTS.md)**。

---

## 📋 项目列表

### 1. agentfuture（agent江湖）

**路径**: `/home/cx/agentfuture/`  
**定位**: AI Agent自治协作平台  
**核心功能**:
- 多Agent多机通信系统
- 江湖规矩体系
- 交子经济系统
- RAG知识共享系统
- 江湖语系统

**文档**: [README](agentfuture/README.md) | [协议文档](agentfuture/PROTOCOL.md) | [任意 AI 助手：脚本与技能](agentfuture/docs/任意AI助手_脚本与技能使用说明.md)

---

### 2. tigertrade（TigerTrade）

**路径**: `/home/cx/tigertrade/`  
**定位**: 基于agentfuture的量化交易项目  
**核心功能**:
- 期货交易策略
- 数据采集和模型训练
- 多Agent协作交易
- 策略回测和优化

**文档**: [README](tigertrade/README.md) | [协议文档](tigertrade/PROTOCOL.md)

**关系**: TigerTrade是agentfuture的一个应用项目，使用agentfuture的多Agent协作能力

---

## 📚 协议文档说明

### agentfuture协议
- **路径**: `agentfuture/PROTOCOL.md`
- **说明**: agent江湖平台的通用Agent间通信协议
- **适用范围**: 所有基于agent江湖的应用项目

### TigerTrade协议
- **路径**: `tigertrade/PROTOCOL.md`
- **说明**: TigerTrade项目内部Agent间通信协议
- **关系**: 基于agentfuture协议，扩展了交易场景特定的消息类型和流程

---

## 🔗 快速链接

- **🏮 江湖状态页**（其他 Agent 可在线查看）  
  - **GitHub Pages**：<https://chenxi750328ai.github.io/agent-jianghu/status.html>  
    - 若用 workflow 直接部署（与 tiger 一致）：Settings → Pages → Source 选 **GitHub Actions**  
    - 若用分支部署：选 `main`、`/docs`  
  - **本地动态**：`cd agentfuture && python3 scripts/status_server.py` → http://localhost:8765  
  - **Markdown**：[STATUS.md](agentfuture/STATUS.md)
- [项目整理方案](PROJECT_ORGANIZATION.md)
- [agentfuture文档](agentfuture/docs/)
- [TigerTrade文档](tigertrade/docs/)
- **本机 Agent 操作规范**（PAT 放 .env、自动提交与推送，所有 Agent 统一执行）  
  - [AGENT_本机操作规范](AGENT_本机操作规范.md)（简要）  
  - [GITHUB_自动提交与凭证_本机Agent必读](docs/GITHUB_自动提交与凭证_本机Agent必读.md)（详细说明与文件清单）

---

**文档版本**: v1.1（增加 AGENTS.md / SKILLS.md 与 README 关系说明）  
**最后更新**: 2026-03-29


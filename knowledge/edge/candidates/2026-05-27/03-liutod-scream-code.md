---
id: "liutod/scream-code"
name: "LIUTod/scream-code"
url: "https://github.com/LIUTod/scream-code"
date: "2026-05-27"
source: "awesome-mcp"
category: "awesome_lists"
kind: "agent_framework"
compatibility: 90
momentum: 57
risk: 45
integration_effort: 36
expected_gain: 77
composite: 71
replacement_target: ""
related_articles: [{"title":"Show HN: Agent-estimate, how long a coding task takes, at agent speed","date":"2026-05-21","topic":"AI agents","similarity":0.258,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-05-21/40-show-hn-agent-estimate-how-long-a-coding-task-takes-at-agent-speed.md"},{"title":"anzy-renlab-ai/pronounce","date":"2026-05-24","topic":"AI dev tools","similarity":0.217,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-05-24/66-anzy-renlab-ai-pronounce.md"},{"title":"Show HN: CoreMem – Portable context for AI agents","date":"2026-05-22","topic":"AI agents","similarity":0.214,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-05-22/50-show-hn-coremem-portable-context-for-ai-agents.md"}]
pros: ["Recently updated (2026-05-27)","Apache-2.0 license","6 GitHub stars","GitHub Actions/CI detected"]
cons: ["README includes remote script execution pattern","README mentions credentials or API tokens"]
readme_quality: 85
has_ci: true
has_tests: false
setup_steps_count: 2
dependency_files: [{"name":"pyproject.toml","summary":"python project; deps name, version, description, requires-python, dependencies, agent-client-protocol, aiofiles, aiohttp"}]
install_commands: ["uv tool install --upgrade --force git+https://github.com/LIUTod/scream-code.git","uv sync              # 同步依赖（自动创建 .venv）","uv tool install -e . # 将 scream 注册为全局命令"]
risk_flags: ["README includes remote script execution pattern","README mentions credentials or API tokens"]
status: "new"
---

# LIUTod/scream-code

任务式Agent多代理 / 中文UI / 短期自动+长期记忆 / 模型自定 / Cli交互

URL: https://github.com/LIUTod/scream-code

## Why it matters
You saved an article on 2026-05-21 about AI agents; this candidate overlaps with "Show HN: Agent-estimate, how long a coding task takes, at agent speed" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-05-27)
+ Apache-2.0 license
+ 6 GitHub stars
+ GitHub Actions/CI detected

## Cons
- README includes remote script execution pattern
- README mentions credentials or API tokens

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: no
Setup steps estimate: 2

Dependency files:
- pyproject.toml: python project; deps name, version, description, requires-python, dependencies, agent-client-protocol, aiofiles, aiohttp

Install commands found:
- uv tool install --upgrade --force git+https://github.com/LIUTod/scream-code.git
- uv sync              # 同步依赖（自动创建 .venv）
- uv tool install -e . # 将 scream 注册为全局命令

Risk flags:
- README includes remote script execution pattern
- README mentions credentials or API tokens

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
<img width="1146" height="333" alt="image" src="https://github.com/user-attachments/assets/5daae10d-6860-479d-80f5-71570348823b" />


告别复杂命令，动动手，即刻拥有自己的数字员工。

Scream Code 是一款省心的中文 AI Agent 助手。无需硬记代码，直接用中/英文下达指令，vibe coding、写代码、改文件、清理电脑、查资料、制作研报、制作skill、搜全网信息……你动嘴，它动手！

---

## 三分钟上手

### 第一步：安装

务必安装！！！！前置条件：**Python=≥ 3.12+** 和 **Git**。

> **国内用户**：安装过程需从 GitHub 下载，请确保网络可访问 GitHub。

**推荐：一键安装（macOS / Linux）**

```bash
curl -fsSL https://raw.githubusercontent.com/LIUTod/scream-code/main/install.sh | bash
```

**Windows — PowerShell：**

```powershell
irm https://raw.githubusercontent.com/LIUTod/scream-code/main/install.ps1 | iex
```

安装完成后，`scream` 命令自动加入 PATH。首次安装约需 2-5 分钟。

**升级到新版本**

根据你的安装方式选择对应的升级命令：

- **一键安装脚本（install.sh）：**
  ```bash
  cd ~/.scream-code && ./install.sh --upgrade
  ```

- **uv tool install（推荐）：**
  ```bash
  uv tool install --upgrade --force git+https://github.com/LIUTod/scream-code.git
  ```

- **手动安装（uv tool install -e .）：**
  ```bash
  cd /path/to/scream-code && git pull && uv sync
  ```

**手动安装**（一键脚本不可用时的备用方案）：

```bash
# 1. 下载文件包

# 下载ZIP包并解压（适合没有 git 的环境）
# 解压后进入 scream-code-main 目录（记得文件路径）
# 打开终端，windows用户打开powershell 输入cd+空格+scream-code-main放置目录（定位至项目目录）

# 2. 进入项目目录后执行
uv sync              # 同步依赖（自动创建 .venv）
uv tool install -e . # 将 scream 注册为全局命令

# 3. 输入：scream 进入scream-code交互界面
```

### 第二步：启动并配置 AI 服务

首次启动时，如果检测到没有配置模型，会自动进入交互式配置向导（`/config`）。按提示输入 API 地址、密钥、模型型号即可完成配置。


**支持多个模型**（配置好后可用 `/model` 随时切换）：

> 支持自定义 API（DeepSeek、openai、anthropic、Moonshot、MiniMax、通义千问、GPT、硅基流动等）。

配置完成后，在交互模式下输入 `/model` 即可切换模型或删除模型，无需重启。`/config` 支持追加配置，

### 审批面板

当它要修改文件或执行命令时，会弹出审批面板：

按数字键选择，回车确认。所有提示都是中文。

---

## 核心功能

- **对话式交互** —— 用自然语言描述需求，它自动写代码、改文件、跑命令
- **安全第一** —— 修改文件前必须征得同意，`.env` 等敏感文件默认禁止操作
- **权限引擎** —— 精细控制它能做什么（读取/写入/执行），防止误操作
- **状态机机制** —— 防漂移，强化任务颗粒度，不出错，任务完成度高，降低Token消耗
- **三层记忆系统** —— 上下文记忆+自动总结对话保存为短期记忆，超时自动清理；可通过记忆skill进行交互式记忆管理升级为长期记忆；长期记忆跨项目共享
- **会话恢复** —— 随时中断，随时继续，对话历史自动保存，除无效对话外所有会话都会进入48小时短期记忆系统，启动后根据提示自行注入历史会话
- **多模式** —— 交互模式、静默模式、计划模式、后台任务模式，可选
- **MCP 扩展** —— 连接外部工具（数据库、浏览器、API 等）
- **多Agent模式** —— 复杂任务自动拆解为多个子Agent并行执行（内置8类不同的子Agent，根据任务调用最契合的Agent们执行任务）
- **Skill 自定义** —— 在 `.scream/skills/` 下添加自定义技能，扩展助手能力（内置）


---

## 项目灵感与感谢支持
— scream是结合作者本人的使用习惯和个人理解自行开发重构的Agent工具助手，从最开始的rust版本，到python版本，
我在很多功能比如team群狼协作模式、网页视觉理解等做了减法，结合使用习惯与Agent harness的理解而开发，
部分UI及交互设计参考kimicli、Geminicli，Deepseektui等优质项目，欢迎各位的使用反馈与优化建议！

---
## 许可证

[LICENSE](LICENSE)

---
## 入口
https://scream.chat



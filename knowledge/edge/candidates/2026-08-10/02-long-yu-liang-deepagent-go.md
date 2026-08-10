---
id: "long-yu-liang/deepagent-go"
name: "Long-yu-liang/deepagent-go"
url: "https://github.com/Long-yu-liang/deepagent-go"
date: "2026-08-10"
source: "GitHub Trending"
category: "github_discovery"
kind: "mcp_server"
compatibility: 93
momentum: 45
risk: 38
integration_effort: 36
expected_gain: 81
composite: 71
replacement_target: ""
related_articles: [{"title":"Show HN: Abralo – Free, easy way to run several Claude Code agents in one window","date":"2026-07-08","topic":"AI agents","similarity":0.289,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-07-08/07-show-hn-abralo-free-easy-way-to-run-several-claude-code-agents-in-one-.md"},{"title":"Show HN: GAI – A Go runtime for typed, tool-using LLM agents","date":"2026-07-31","topic":"AI agents","similarity":0.282,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-07-31/08-show-hn-gai-a-go-runtime-for-typed-tool-using-llm-agents.md"},{"title":"Show HN: Zaivern Code – a Rust cockpit for parallel AI coding agents","date":"2026-08-07","topic":"AI agents","similarity":0.266,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-07/06-show-hn-zaivern-code-a-rust-cockpit-for-parallel-ai-coding-agents.md"}]
pros: ["Recently updated (2026-08-10)","MIT license","README mentions tests or validation","Matches 3 saved Feed article(s)"]
cons: ["No clear install command found in README","README mentions credentials or API tokens"]
readme_quality: 55
has_ci: false
has_tests: true
setup_steps_count: 0
dependency_files: [{"name":"go.mod","summary":"module deepagent-go"}]
install_commands: []
risk_flags: ["README mentions credentials or API tokens"]
status: "new"
---

# Long-yu-liang/deepagent-go

Claude Code-style coding agent CLI with a Go Runtime and Python extension bridge

URL: https://github.com/Long-yu-liang/deepagent-go

## Why it matters
You saved an article on 2026-07-08 about AI agents; this candidate overlaps with "Show HN: Abralo – Free, easy way to run several Claude Code agents in one window" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-08-10)
+ MIT license
+ README mentions tests or validation
+ Matches 3 saved Feed article(s)

## Cons
- No clear install command found in README
- README mentions credentials or API tokens

## Repository Inspection
README quality: 55/100
CI detected: no
Tests mentioned: yes
Setup steps estimate: 0

Dependency files:
- go.mod: module deepagent-go

Install commands found:
- none detected

Risk flags:
- README mentions credentials or API tokens

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# deepagent-go

一个面向本地代码仓库的 AI Coding Agent CLI，提供类似 Claude Code 的终端工作区。你可以让 Agent 阅读项目、修改文件、运行测试、恢复会话，并在执行有副作用的工具前进行人工审批。

本项目采用 **Go Runtime + Python 扩展桥接**：

- Go 负责 Agent Runtime、上下文、会话、SQLite checkpoint、工作区隔离、工具权限和审批。
- Python 只负责模型 Provider 和可选的 Python/MCP 扩展。
- Go 核心不依赖 LangChainGo 或 LangGraph，也不要求在 Go 中完整移植 LangChain/LangGraph。

## 界面预览

![deepagent CLI 交互界面](resources/test.png)

截图展示了真实 TTY 交互：连接 OpenAI-compatible 模型、创建和覆盖文件、工具状态、滚轮提示、审批模式和多行输入框。

## 主要能力

- **Claude Code 风格 Shell**：全屏 TUI、流式回答、工具状态、可滚动对话、多行输入和历史记录。
- **工作区工具**：ls、read_file、write_file、edit_file、glob、grep。
- **安全执行**：文件访问限制在 workspace 内；execute 命令支持风险分类、超时、输出限制和审批。
- **人工审批**：风险工具支持批准、编辑参数和拒绝，审批决定写入 SQLite 并可恢复。
- **会话恢复**：保存 thread、checkpoint、事件、artifact 和 Shell 历史，支持 /resume。
- **上下文管理**：自动压缩过长上下文，保留摘要、最近消息和 artifact 引用。
- **Memory、Skills 和子 Agent**：支持项目/用户长期 Memory、项目 Skills 以及隔离 thread 的子 Agent。
- **模型桥接**：内置 fake provider、OpenAI-compatible endpoint、Anthropic Messages API，以及可选 LangChain Provider。
- **自动化接口**：非 TTY 时自动降级为纯文本；--json 输出稳定 JSONL，适合脚本和 CI。

## 环境要求

- Go 1.25+
- Python 3.10+
- Linux、macOS 或 Windows

SQLite 使用纯 Go 驱动，不需要额外安装 C 编译器。

## 快速开始

### 构建

~~~bash
cd deepagent-go
export GOPROXY=https://goproxy.cn,direct
go mod download
go build -trimpath -o ./bin/deepagent ./cmd/deepagent
~~~

如果 goproxy.cn 不可用，可以使用阿里云镜像：

~~~bash
export GOPROXY=https://mirrors.aliyun.com/goproxy,direct
~~~

Windows PowerShell：

~~~powershell
$env:GOPROXY = "https://goproxy.cn,direct"
go mod download
go build -trimpath -o .\bin\deepagent.exe .\cmd\deepagent
~~~

### 检查并启动

~~~bash
./bin/deepagent --version
./bin/deepagent doctor --workspace .
./bin/deepagent --workspace .
~~~

首次启动默认使用离线 fake provider，不需要 API Key。可以先输入：

~~~text
检查当前项目结构，并告诉我如何运行测试
~~~

## 连接真实模型

### 交互式连接

先把 API Key 放入环境变量，然后启动 CLI：

~~~bash
export OPENAI_API_KEY="<your-api-key>"
./bin/deepagent
~~~

在界面输入 /connect，选择 Provider：

~~~text
Connect a model provider
  1. Anthropic
  2. OpenAI
  4. OpenAI-compatible endpoint
Provider [1/2/4] :
~~~

对于兼容 OpenAI API 的服务，依次输入 endpoint、模型 ID 和 API Key 环境变量名：

~~~text
4
https://api.openai.com/v1
<model-id>
OPENAI_API_KEY
~~~

密钥只从环境变量读取，不会写入 settings、Shell history、SQLite、事件或日志。/connect 的连接只对当前进程有效。

### 火山方舟示例

火山方舟是 OpenAI-compatible endpoint：

~~~bash
export ARK_API_KEY="<your-ark-api-key>"
export ARK_BASE_URL="https://ark.cn-beijing.volces.com/api/v3"
export ARK_MODEL="<your-endpoint-model-id>"
./bin/deepagent
~~~

执行 /connect，选择 4，填入：

~~~text
Endpoint: https://ark.cn-beijing.volces.com/api/v3
Model: <your-endpoint-model-id>
API key environment variable: ARK_API_KEY
~~~

也可以使用启动参数：

~~~bash
./bin/deepagent \
  --provider openai-compatible \
  --endpoint "$ARK_BASE_URL" \
  --model "$ARK_MODEL" \
  --api-key-env ARK_API_KEY
~~~

### 直接使用其他 Provider

Anthropic：

~~~bash
export ANTHROPIC_API_KEY="<your-api-key>"
./bin/deepagent --provider anthropic --model "<model-id>" --api-key-env ANTHROPIC_API_KEY
~~~

OpenAI-compatible：

~~~bash
export OPENAI_API_KEY="<your-api-key>"
./bin/deepagent --provider openai-compatible --endpoint "https://api.openai.com/v1" --model "<model-id>" --api-key-env OPENAI_API_KEY
~~~

远程 endpoint 必须使用 HTTPS；只有 localhost、127.0.0.1 和 ::1 允许使用 HTTP。

## 交互式 Shell

启动后可以直接输入自然语言任务：

~~~text
读取 README，运行测试，修复失败的测试并说明修改内容
~~~

### 常用命令

| 命令 | 作用 |
| --- | --- |
| /connect | 在终端连接或切换模型 Provider |
| /status | 查看 workspace、thread、model 和权限模式 |
| /new [thread] | 创建并切换到新会话 |
| /resume <thread> | 恢复已有会话 |
| /sessions | 查看会话列表 |
| /agents [profile] | 查看或切换 Agent Profile |
| /tools | 查看可用工具 |
| /permissions | 查看当前审批模式 |
| /memory | 管理长期 Memory |
| /compact | 请求压缩当前上下文 |
| /history | 查看 Shell 输入历史 |
| /help | 查看完整帮助 |
| /exit | 退出 CLI |

### 键盘操作

| 按键 | 作用 |
| --- | --- |
| Enter | 发送任务或命令 |
| Ctrl+J / Shift+Enter | 输入多行内容 |
| Ctrl+P / Ctrl+N | 浏览输入历史 |
| 鼠标滚轮、PageUp / PageDown | 查看之前的对话记录 |
| Ctrl+C | 取消当前任务；空闲时退出 |
| Ctrl+D | 空闲时退出 |

### 工具审批

交互式 Shell 默认是 ask 模式。执行 write_file、edit_file 或 execute 等风险工具前，会在界面底部显示审批面板：

~~~text
Approval required  write_file
[a] approve   [e] edit   [r] reject
~~~

- a / y：批准
- e：编辑 JSON 参数后批准
- r / n：拒绝

非交互 run 默认是 never。需要脚本明确允许时使用 --approve ask 或 --approve always。

## 非交互和自动化

~~~bash
# 执行一次性任务
./bin/deepagent run --workspace . --prompt "运行测试并解释失败原因"

# 只输出最终答案
./bin/deepagent run --quiet --prompt "总结这个项目"

# 输出 JSONL
./bin/deepagent run --json --prompt "检查 README"

# 恢复会话
./bin/deepagent sessions list
./bin/deepagent resume <thread-id> "继续完成剩余任务"
~~~

非 TTY 的 stdin/stdout 会自动使用无 ANSI 控制字符的纯文本协议，适合管道、CI 和测试环境。

## 项目配置

配置文件为 .deepagent/settings.json，优先级为：

~~~text
CLI 参数 > 项目 settings > 用户 settings > 内置默认值
~~~

最小的 OpenAI-compatible 配置示例：

~~~json
{
  "version": 1,
  "default_provider": "openai",
  "permissions": {
    "mode": "ask",
    "actor": "local-user"
  },
  "providers": {
    "openai": {
      "provider": "openai-compatible",
      "model": "<model-id>",
      "endpoint": "https://api.openai.com/v1",
      "env": {
        "DEEPAGENT_OPENAI_API_KEY": "${OPENAI_API_KEY}"
      }
    }
  }
}
~~~

完整字段说明见 [docs/SETTINGS.md](docs/SETTINGS.md)。

## 状态目录

默认情况下，项目状态保存在 workspace 下的 .deepagent/：

~~~text
.deepagent/state.db       # SQLite checkpoint、事件、Memory
.deepagent/artifacts/     # 超大工具结果和上下文 artifact
.deepagent/shell.history  # Shell 输入历史
~~~

这些文件可能包含项目路径、会话内容和审批审计信息，不应提交到 Git。API Key 不会写入其中。

## 架构概览

~~~text
┌──────────────────────────────┐
│ Go CLI / Bubble Tea TUI       │
│ slash commands / JSONL        │
└──────────────┬───────────────┘
               │ provider-neutral protocol
┌──────────────▼───────────────┐
│ Go Runtime                    │
│ context / tools / approval    │
│ workspace / checkpoint / event│
└──────────────┬───────────────┘
               │ JSONL bridge
┌──────────────▼───────────────┐
│ Managed Python Host           │
│ Anthropic / OpenAI-compatible │
│ optional LangChain / tools    │
└──────────────────────────────┘
~~~

Go Runtime 是安全边界的唯一持有者。Python 扩展不能直接访问 SQLite checkpoint，也不能绕过 Go 的 workspace containment、tool allowlist 和审批策略。

## 开发和测试

~~~bash
export GOPROXY=https://goproxy.cn,direct
go mod download
go test ./...
go vet ./...
go test -race ./...
python3 -m compileall -q python
go build -trimpath -o ./bin/deepagent ./cmd/deepagent
~~~

核心目录：

~~~text
cmd/deepagent/        CLI、Shell 和 TUI
internal/runtime/     Agent Loop、恢复和审批
internal/workspace/   workspace 隔离和文件后端
internal/store/       SQLite checkpoint、事件和 Memory
internal/extension/   Python JSONL 子进程协议
internal/security/    签名和信任根
python/deepagent_ext/ 托管 Python host 和 Provider
resources/            README 图片和项目资源
~~~

## 文档

- [CLI 使用指南](docs/CLI.md)
- [配置说明](docs/SETTINGS.md)
- [Provider 和 Python 扩展](docs/EXTENSIONS.md)
- [审批和恢复](docs/APPROVALS.md)
- [Memory 和子 Agent](docs/MEMORY_SUBAGENTS.md)
- [上下文管理](docs/CONTEXT.md)
- [Runtime 事件](docs/EVENTS.md)
- [安全模型](docs/SECURITY.md)
- [发布安全](docs/RELEASE_SECURITY.md)
- [完整开发计划](PLAN.md)

## 项目状态

当前已完成 M12 发布加固、M13 交互终端重构和 M14 终端模型连接。项目仍处于开发版本，正式发行包还需要在发布环境中完成平台签名、公证和发布凭据注入。

## 许可证

本项目使用仓库根目录中的 [LICENSE](../LICENSE)。


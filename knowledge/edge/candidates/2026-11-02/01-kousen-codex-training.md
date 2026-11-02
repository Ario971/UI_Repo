---
id: "kousen/codex-training"
name: "kousen/codex-training"
url: "https://github.com/kousen/codex-training"
date: "2026-11-02"
source: "GitHub Trending"
category: "github_discovery"
kind: "mcp_server"
compatibility: 92
momentum: 85
risk: 40
integration_effort: 56
expected_gain: 87
composite: 78
replacement_target: ""
related_articles: [{"title":"A curriculum for post-training agents huggingface • 10 days ago • 79","date":"2026-10-30","topic":"AI agents","similarity":0.267,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-10-30/09-a-curriculum-for-post-training-agents-huggingface-10-days-ago-79.md"},{"title":"DataSense-Bench: The First Step Toward an AI Scientist","date":"2026-10-08","topic":"AI agents","similarity":0.224,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-10-08/06-datasense-bench-the-first-step-toward-an-ai-scientist.md"},{"title":"From Training to Escalation: Forensic Analysis and Local Recreation of RL/RLHF-Induced Privilege Escalation in AI Agents (CVE-2026-65616)","date":"2026-10-14","topic":"AI agents","similarity":0.212,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-10-14/09-from-training-to-escalation-forensic-analysis-and-local-recreation-of-.md"}]
pros: ["Recently updated (2026-11-02)","MIT license","37 GitHub stars","GitHub Actions/CI detected"]
cons: ["Integration may take more than a quick install","README includes remote script execution pattern","README mentions credentials or API tokens"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 6
dependency_files: [{"name":"package.json","summary":"deps @slidev/cli, @slidev/theme-seriph, playwright-chromium, prettier; scripts dev, build, export, export-pdf, preview, format"}]
install_commands: ["codex-training/","npm install -g @openai/codex","codex --version","codex login","codex \"Create a hello world function in Python\"","git clone https://github.com/kousen/codex-training"]
risk_flags: ["README includes remote script execution pattern","README mentions credentials or API tokens"]
status: "new"
---

# kousen/codex-training

Slides and exercises for a training course on OpenAI's Codex CLI tool

URL: https://github.com/kousen/codex-training

## Why it matters
You saved an article on 2026-10-30 about AI agents; this candidate overlaps with "A curriculum for post-training agents huggingface • 10 days ago • 79" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-11-02)
+ MIT license
+ 37 GitHub stars
+ GitHub Actions/CI detected

## Cons
- Integration may take more than a quick install
- README includes remote script execution pattern
- README mentions credentials or API tokens

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 6

Dependency files:
- package.json: deps @slidev/cli, @slidev/theme-seriph, playwright-chromium, prettier; scripts dev, build, export, export-pdf, preview, format

Install commands found:
- codex-training/
- npm install -g @openai/codex
- codex --version
- codex login
- codex "Create a hello world function in Python"
- git clone https://github.com/kousen/codex-training

Risk flags:
- README includes remote script execution pattern
- README mentions credentials or API tokens

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# OpenAI Codex Training

A hands-on training course for using OpenAI Codex across the CLI, app, IDE extensions, and cloud workflows.

## Course Overview

This 5-hour hands-on workshop covers installation, authentication, safe agent workflows, configuration, MCP servers, skills, cloud tasks, and practical development labs.

### What You'll Learn

- 🚀 **Installation & Setup**: CLI, app, IDE, ChatGPT login, and API-key authentication
- 🛡️ **Safety & Security**: Sandbox modes, approval policies, trusted projects, and reviews
- 🎯 **Core Features**: AGENTS.md guidance, custom prompts, profiles, and session resumption
- ⚡ **Agent Skills**: Reusable workflow bundles with scripts, references, and assets
- 🔧 **Advanced Capabilities**: MCP integration, Codex Cloud, local OSS models, and CI/CD workflows
- 💻 **Practical Skills**: Real-world exercises in Java, Python, and TypeScript

## Prerequisites

- Command-line experience
- Basic programming knowledge in at least one language
- Git familiarity
- Docker (for advanced exercises)

## Repository Structure

```
codex-training/
├── slides.md                     # Slidev presentation (160+ slides)
├── exercises/                    # Hands-on labs with starter code
│   ├── plan-mode-warmup/        # Lab 0: Plan mode and steering warm-up
│   ├── java-spring-boot/        # Lab 1: Spring Boot REST API
│   ├── python-refactoring/      # Lab 2: Legacy code refactoring
│   ├── react-forms/             # Lab 3: React TypeScript forms
│   ├── microservices/           # Lab 4: Multi-language microservices
│   ├── skills-creation/         # Lab 5: Create custom Codex skills
│   └── mcp-context7/            # Lab 6: Connect current docs through MCP
├── config-examples/              # Sample configurations
│   ├── basic-config.toml        # Minimal setup for beginners
│   └── advanced-config.toml     # Full features with MCP, profiles
├── prompts/                      # Custom prompt templates
│   └── *.md                     # security-audit, test-gen, etc.
├── docs/                         # Reference documentation
│   ├── TROUBLESHOOTING.md       # Common issues and solutions
│   └── MODEL-SELECTION.md       # Cost/performance guide
├── .github/workflows/            # CI/CD examples
│   └── codex-review.yml         # Automated PR review with Codex
└── exports/                      # Slide exports (PDF)
```

## Quick Start

### 1. Install Codex

```bash
# Official install script (macOS/Linux)
curl -fsSL https://chatgpt.com/codex/install.sh | sh

# Via npm
npm install -g @openai/codex

# Via Homebrew (macOS/Linux)
brew install --cask codex

# Verify installation
codex --version
```

### 2. Authenticate

```bash
# ChatGPT account (recommended)
codex login

# Or store an API key with Codex
printenv OPENAI_API_KEY | codex login --with-api-key
```

### 3. Run Your First Command

```bash
codex "Create a hello world function in Python"
```

### 4. Start the Training

```bash
# Clone this repository
git clone https://github.com/kousen/codex-training
cd codex-training

# Install dependencies for slides
npm install

# Start the presentation
npm run dev

# Open browser to http://localhost:3030
```

## Slides Online

Every push to `main` that touches `slides.md` rebuilds the deck twice, via the workflows in [`.github/workflows/`](.github/workflows/):

- **Web version** (GitHub Pages): **<https://kousen.github.io/codex-training/>**
- **PDF**: [`codex-training-slides.pdf`](https://github.com/kousen/codex-training/releases/latest/download/codex-training-slides.pdf) from the rolling `slides-latest` release

## Exercises

### Lab 0: Planning and Steering Warm-Up
Learn the current Codex interaction model before the larger labs:
- Ask Codex to propose a plan before editing
- Steer an in-flight task with follow-up messages
- Inspect permissions, model choice, and diffs with slash commands

**Time**: 15-20 minutes

### Lab 1: Spring Boot REST API
Build a complete task management API with Spring Boot, including:
- CRUD operations with validation
- H2 database integration
- OpenAPI documentation
- Comprehensive test suite

**Time**: 60-90 minutes

### Lab 2: Python Code Refactoring
Transform legacy Python code using modern best practices:
- Add type hints and documentation
- Implement design patterns
- Create pytest test suite
- Setup code quality tools

**Time**: 45-60 minutes

### Lab 3: React TypeScript Forms
Create a production-ready registration form with:
- React Hook Form + Zod validation
- Accessibility compliance
- Multi-step workflow
- Full test coverage

**Time**: 45-60 minutes

### Lab 4: Microservices Architecture
Build an event-driven microservices system with:
- Multiple languages (Node.js, Python, Go, Java)
- RabbitMQ message queue
- Docker orchestration
- API gateway

**Time**: 90-120 minutes

### Lab 5: Skills Creation
Create a custom Codex skill using `$skill-creator`:
- SKILL.md format with YAML frontmatter
- Conventional commit message generator
- Team sharing via repository

**Time**: 30 minutes

### Lab 6: MCP Servers with Context7
Connect Codex to current library documentation:
- Add Context7 as an MCP server
- Inspect configured MCP tools
- Use current React Hook Form, Zod, pytest, and Spring docs in prompts

**Time**: 15-20 minutes

## Key Codex Features Covered

### Core Features
- ✅ Terminal UI navigation
- ✅ Sandbox modes and approval policies
- ✅ Project memory with AGENTS.md
- ✅ Custom prompts and profiles
- ✅ Session management and resumption

### Agent Skills
- ✅ Creating reusable skill bundles
- ✅ SKILL.md format and structure
- ✅ Explicit (`$skill-name`) and implicit invocation
- ✅ Built-in skills: `$skill-creator`, `$skill-installer`
- ✅ Skills vs prompts comparison

### Advanced Features
- ✅ Model Context Protocol (MCP)
- ✅ OpenAI models plus local OSS providers through Ollama or LM Studio
- ✅ Running as MCP server
- ✅ Codex App, IDE extensions, and Codex Cloud workflows
- ✅ CI/CD integration
- ✅ Non-interactive execution

### Configuration
- ✅ TOML configuration files
- ✅ Project-local config (`.codex/config.toml`)
- ✅ Environment variables
- ✅ Shell environment policies
- ✅ Notification systems

## Tips for Success

1. **Start Conservatively**: Use `workspace-write` with `on-request`, or `read-only` for review-only tasks
2. **Use AGENTS.md**: Provide context for better results
3. **Create Profiles**: Separate development/production configurations
4. **Review Generated Code**: Never blindly accept AI suggestions
5. **Leverage MCP**: Pull current documentation and project data into prompts
6. **Test Thoroughly**: Always verify generated code works correctly

## Useful Commands Reference

```bash
# Basic usage
codex                          # Interactive mode
codex "prompt"                 # Start with initial prompt
codex exec "prompt"            # Execute and exit
codex resume                   # Resume session picker
codex resume --last            # Resume most recent session
codex update                   # Update the CLI

# Configuration
codex --profile development    # Use specific profile
codex --sandbox read-only      # Set sandbox mode
codex --model gpt-6.1-sol      # Pin a model (/model or codex debug models lists your catalog)
codex --strict-config          # Fail fast on stale/unknown config keys
codex --search "latest docs"   # Enable live web search for that run

# Advanced
codex mcp list                 # List configured MCP servers
codex mcp login server-name    # OAuth login for supported MCP servers
codex doctor                   # Diagnose install, config, auth, and runtime health
codex cloud exec "prompt"      # Launch a cloud task
codex cloud diff               # Inspect cloud task changes
codex cloud apply              # Apply cloud task changes locally
codex login --device-auth      # Device-auth flow for remote/headless environments
codex review --uncommitted     # Review local changes
codex review --base main       # Review your branch against main
```

Inside an interactive Codex session, you can also invoke skills directly:

```text
$skill-creator
$skill-installer linear
$create-plan
```

## Resources

### Course Materials
- [Course Slides](./slides.md) - Full Slidev presentation
- [Exercises](./exercises/) - Hands-on labs with starter code
- [Troubleshooting Guide](./docs/TROUBLESHOOTING.md) - Common issues and solutions
- [Model Selection Guide](./docs/MODEL-SELECTION.md) - Cost/performance optimization

### Official Documentation
- [Codex CLI Documentation](https://learn.chatgpt.com/docs/codex/cli)
- [Codex App Documentation](https://learn.chatgpt.com/docs/app)
- [Codex MCP Documentation](https://learn.chatgpt.com/docs/extend/mcp)
- [Codex GitHub Repository](https://github.com/openai/codex)
- [Agent Skills Documentation](https://learn.chatgpt.com/docs/build-skills)
- [Skills Catalog](https://github.com/openai/skills)
- [Model Context Protocol](https://modelcontextprotocol.io)
- [agentskills.io Specification](https://agentskills.io)

## Instructor

**Kenneth Kousen**
- President, Kousen IT, Inc.
- Author & Technical Trainer
- ken.kousen@kousenit.com
- https://www.kousenit.com

## Contributing

Found an issue or want to contribute? Please:
1. Open an issue on GitHub
2. Submit a pull request
3. Share your experience

## License

This training material is licensed under the MIT License. See [LICENSE](./LICENSE) file for details.

## Acknowledgments

- OpenAI for Codex
- The open-source community for MCP tools

---

**Ready to start?** Navigate to the [exercises](./exercises/) directory and begin with Lab 1!


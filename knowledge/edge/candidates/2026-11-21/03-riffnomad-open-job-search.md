---
id: "riffnomad/open-job-search"
name: "riffnomad/open-job-search"
url: "https://github.com/riffnomad/open-job-search"
date: "2026-11-21"
source: "GitHub Trending"
category: "github_discovery"
kind: "claude_skill"
compatibility: 84
momentum: 45
risk: 45
integration_effort: 32
expected_gain: 87
composite: 70
replacement_target: ""
related_articles: [{"title":"Show HN: Freehire, open-source search 3M+ tech jobs from company career boards","date":"2026-10-26","topic":"AI dev tools","similarity":0.338,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-10-26/10-show-hn-freehire-open-source-search-3m-tech-jobs-from-company-career-b.md"},{"title":"Show HN: Cosh – An open-source AI agent orchestrator","date":"2026-11-10","topic":"AI agents","similarity":0.314,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-11-10/06-show-hn-cosh-an-open-source-ai-agent-orchestrator.md"},{"title":"Latest Open-Source Labs are gutting away cybersecurity and reverse-engineering capabilities","date":"2026-11-06","topic":"Local LLMs","similarity":0.259,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/Local LLMs/2026-11-06/14-latest-open-source-labs-are-gutting-away-cybersecurity-and-reverse-eng.md"}]
pros: ["Recently updated (2026-11-21)","MIT license","GitHub Actions/CI detected","README includes install commands"]
cons: ["README mentions credentials or API tokens","README mentions telemetry/analytics"]
readme_quality: 85
has_ci: true
has_tests: false
setup_steps_count: 1
dependency_files: [{"name":"package.json","summary":"deps @types/bun, typescript; scripts ojs, web, worker, test, typecheck"}]
install_commands: ["git clone https://github.com/riffnomad/open-job-search.git","claude        # or codex, agy, opencode"]
risk_flags: ["README mentions credentials or API tokens","README mentions telemetry/analytics"]
status: "new"
---

# riffnomad/open-job-search

Open-source AI job search: find roles early, find your way in, apply well. Works in your agent CLI (Claude Code, Codex, Antigravity, opencode) or a local web app.

URL: https://github.com/riffnomad/open-job-search

## Why it matters
You saved an article on 2026-10-26 about AI dev tools; this candidate overlaps with "Show HN: Freehire, open-source search 3M+ tech jobs from company career boards" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-11-21)
+ MIT license
+ GitHub Actions/CI detected
+ README includes install commands

## Cons
- README mentions credentials or API tokens
- README mentions telemetry/analytics

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: no
Setup steps estimate: 1

Dependency files:
- package.json: deps @types/bun, typescript; scripts ojs, web, worker, test, typecheck

Install commands found:
- git clone https://github.com/riffnomad/open-job-search.git
- claude        # or codex, agy, opencode

Risk flags:
- README mentions credentials or API tokens
- README mentions telemetry/analytics

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# open-job-search

**Find roles early. Find your way in. Apply well.**

An open-source AI job search assistant for everyone, whatever your role or background. Clone the repo, open the AI agent you already use (Claude Code, Codex, Antigravity, opencode…) inside it, and talk to it. A local web app is coming for people who'd rather not use a terminal.

> **Status: early development.** Building your profile from a CV works. Job discovery, evaluation and applications are next. See the [roadmap](#roadmap).

## What makes it different

- **An experience bank, not just a CV.** A CV holds a fraction of what you did. Your profile keeps one file per job and grows as your agent interviews you about it, so every application can draw on far more than two pages.
- **Past lives count.** Bar work, retail, trades, the career before this one: kept with the skills and stories they gave you, and brought back when a role makes them relevant.
- **Network first.** Referrals beat cold applications. For every good match, it looks for the warmest way in.
- **Any agent.** Works in whichever agent CLI you use. No extra subscription.
- **Always on.** A background worker watches for roles and pings you, even when no agent session is open.
- **UK first, then everywhere.** Starting with London, the UK and remote roles: GBP salaries, UK CV conventions, and the Home Office register of visa sponsors.
- **You press Submit.** It drafts and recommends. It never applies or sends messages on your behalf.

## Quick start

Requires [Bun](https://bun.sh) 1.3+ and an agent CLI such as [Claude Code](https://claude.com/claude-code), [Codex](https://github.com/openai/codex), Antigravity or opencode.

```bash
git clone https://github.com/riffnomad/open-job-search.git
cd open-job-search
bun install
```

Open your agent in the repo and ask it to set you up. It asks your name, makes you a folder in [`documents/`](documents/README.md) for your CV (PDF, Word, Markdown or text), and takes it from there:

```bash
claude        # or codex, agy, opencode
> Set me up and import my CV
```

It works step by step, and you decide when each step is done:

1. **Your experience.** It reads your CV, asks about anything it isn't sure of before saving, then interviews you role by role to get down everything your CV left out.
2. **Past lives.** Other jobs you've had, before or alongside your career, and the skills and stories they gave you.

Then come your searches (what you're looking for), finding roles, and applying. The more you tell it in the first steps, the better the roles it finds. `bun run ojs flow` shows where you are. The workflows are plain-text skills in [`.agents/skills/`](.agents/skills/).

## Your files

Two folders hold everything personal. Both are ignored by git, so nothing you add ever ends up in the public repo:

- [`documents/`](documents/README.md): what you put in. CVs, references, writing samples.
- [`data/`](data/README.md): what the tool builds. Your profile, your searches, settings, cache.

Your profile is plain Markdown and YAML. Read it, edit it, back it up.

**More than one person, more than one search.** Running the search for someone else as well? Add them (`ojs person add <name>`): each person has their own folders, and the agent always says whose profile it's working on. And one person can run several searches at once, say software engineering and product management (`ojs search add <name>`). Who you are is learnt once and shared; each search has its own target roles, locations, salary and angle.

## Commands

Your agent runs these for you, but you can too. Every command takes `--json`.

```bash
bun run ojs init                    # find your agent CLIs and set one as default
bun run ojs flow                    # where you are in the steps, and what's next
bun run ojs person add "Sam"        # set up someone else; `ojs person use <name>` to switch
bun run ojs search add "Product management"   # start another search; `ojs search use <name>` to switch
bun run ojs profile                 # overview of your profile
bun run ojs profile import          # import new files in your documents folder (shows changes, asks first)
bun run ojs profile gaps            # what's missing in each role
bun run ojs profile edit [role]     # open in your editor, checked when you save
bun run ojs help                    # everything else
```

### AI providers

Inside your agent, your agent does the thinking. When `ojs` needs AI on its own (importing a CV from the command line, the web app, the background worker), it calls your agent CLI headless, or an API if you prefer. `ojs init` sets this up.

| Agent CLI | Status |
|---|---|
| `claude` (Claude Code) | verified |
| `codex` (OpenAI Codex) | verified |
| `agy` (Antigravity) | verified |
| `gemini` (Gemini CLI) | best-effort; Google no longer serves it on the free individual tier |
| `opencode` | best-effort, help us verify it |

APIs work too. Keys are never written to config; you name the environment variable that holds the key:

```bash
bun run ojs providers add deepseek --type openai-compatible \
  --base-url https://api.deepseek.com/v1 --model deepseek-chat --api-key-env DEEPSEEK_API_KEY
bun run ojs providers add local --type openai-compatible --base-url http://localhost:11434/v1 --model llama3.1
bun run ojs providers add anthropic --type anthropic --model claude-opus-5-5 --api-key-env ANTHROPIC_API_KEY
```

## Roadmap

1. **Foundation**: provider layer, config, tools, web and worker skeletons ✅
2. **Profile**: CV import ✅, then interviews that deepen each role, past lives, people and searches ✅, LinkedIn export
3. **Discovery**: company job boards (Greenhouse, Lever, Ashby, Workable), UK sources (Adzuna, Reed), remote boards; dedup and liveness checks
4. **Evaluation**: structured fit scoring with reasons and hard blockers (visa sponsorship, location, level)
5. **Warm paths**: match roles to your network and draft referral asks
6. **Applications**: tailored CV, cover letter and form answers, with fact checks so nothing is invented
7. **Tracking and follow-ups**: pipeline, reminders, outcomes, learning from results
8. **Interviews and offers**: prep, story bank, mock interviews, negotiation

## Contributing

Early days, so the shape is still moving. Issues and ideas are very welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for how the code is organised and the rules that keep it safe.

## License

[MIT](LICENSE)


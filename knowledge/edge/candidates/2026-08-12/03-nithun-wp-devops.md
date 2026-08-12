---
id: "nithun/wp-devops"
name: "nithun/wp-devops"
url: "https://github.com/nithun/wp-devops"
date: "2026-08-12"
source: "GitHub Search API"
category: "github_discovery"
kind: "claude_skill"
compatibility: 75
momentum: 45
risk: 30
integration_effort: 36
expected_gain: 87
composite: 70
replacement_target: ""
related_articles: [{"title":"Show HN: Keen Code – an agentic-engineered coding agent","date":"2026-08-10","topic":"AI agents","similarity":0.33,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-10/06-show-hn-keen-code-an-agentic-engineered-coding-agent.md"},{"title":"Show HN: Claude-account – switch Claude Code accounts without logging in again","date":"2026-07-30","topic":"AI dev tools","similarity":0.307,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-07-30/12-show-hn-claude-account-switch-claude-code-accounts-without-logging-in-.md"},{"title":"Show HN: Parley – your coding agent can talk to a teammate's agent","date":"2026-08-11","topic":"AI agents","similarity":0.299,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-11/06-show-hn-parley-your-coding-agent-can-talk-to-a-teammate-s-agent.md"}]
pros: ["Recently updated (2026-08-12)","MIT license","README mentions tests or validation","README includes install commands"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 100
has_ci: false
has_tests: true
setup_steps_count: 2
dependency_files: []
install_commands: ["git clone https://github.com/nithun/wp-devops.git","CLAUDE.md ──→ capture.sh ──→ interactions.jsonl ──→ triage.sh (Stop hook)"]
risk_flags: []
status: "new"
---

# nithun/wp-devops

A Claude Code agent that deploys, optimizes, and monitors WordPress — and learns your site as it goes. 4 agents, 9 skills, 14 lessons from production.

URL: https://github.com/nithun/wp-devops

## Why it matters
You saved an article on 2026-08-10 about AI agents; this candidate overlaps with "Show HN: Keen Code – an agentic-engineered coding agent" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-08-12)
+ MIT license
+ README mentions tests or validation
+ README includes install commands

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 100/100
CI detected: no
Tests mentioned: yes
Setup steps estimate: 2

Dependency files:
- none detected

Install commands found:
- git clone https://github.com/nithun/wp-devops.git
- CLAUDE.md ──→ capture.sh ──→ interactions.jsonl ──→ triage.sh (Stop hook)

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# wp-devops

**A Claude Code agent that runs your WordPress site — and learns your site as it goes.**

Clone this, point Claude at your WordPress install, and you get an agent that
deploys it, measures it, speeds it up, hardens it, backs it up, and watches it.
Every time it works on your site it writes down what it learned, so the next run
starts smarter than the last.

Everything here came out of running two real WordPress sites in production: a
306,676-post news site, and a client LMS site on a cloud VM. The numbers below
are measured, not estimated.

---

## The one number that matters

On the LMS site we did the full modernization everyone recommends — swapped
MariaDB for Percona 8.4, swapped Apache/mod_php for nginx + php-fpm, moved PHP
8.2 → 8.4, raised the InnoDB buffer pool from 128 MB to 1 GB.

Page load went from **1.58 s to 1.55 s**. Thirty milliseconds. Effectively zero.

Then we added a page cache. **0.070 s.**

The bottleneck was single-thread CPU inside PHP execution, and not one of those
four upgrades touches that. Three measurements — a PHP loop, one database query,
and a `dd` write — would have predicted it in two minutes. They're in
[`scripts/bench.sh`](scripts/bench.sh), and `wp-optimizer` runs them before it
proposes anything.

**That's the whole philosophy of this repo: measure the layer before you change
the layer.**

---

## Quickstart

```bash
git clone https://github.com/nithun/wp-devops.git
cd wp-devops
./install.sh /path/to/your/project
```

Then open Claude Code in your project and say:

```
Profile my WordPress site.
```

The agent inspects the site, fills in `.claude/memory/site-profile.md`, and tells
you what it found. From there:

| You say | What happens |
|---|---|
| `Audit this site, change nothing` | `wp-guardian` runs the read-only diagnostic pass |
| `Deploy a WordPress stack for example.com` | `wp-deployer` stands up the golden-path stack |
| `My site is slow` | `wp-optimizer` benchmarks the layers, then fixes the slow one |
| `Harden this site` | `wp-guardian` applies the security baseline |
| `Set up backups` | `wp-guardian` installs backups **and runs a test restore** |
| `Migrate this site to a new host` | `wp-migrate-cutover` plans it with a rollback |

---

## Two modes

**Mode A — golden path.** A fresh VPS and a domain. You get this stack:

```
reverse proxy ─→ nginx-cache ─→ wordpress:6-php8.3-apache ─→ mysql:8.0
                                        └───────────────→ redis:7-alpine
```

Templates are in [`stack/`](stack/), with the reasoning for every tuned value
written into the file itself. All nine skills apply.

**Mode B — adopt an existing site.** Any WordPress you can reach over SSH with
WP-CLI: shared hosting, managed WordPress, cPanel, someone else's cloud VM.

Skills that need container control — the nginx page cache, MySQL tuning — will
**detect your host and tell you they don't apply**, instead of half-applying and
reporting success. Object cache, images, Core Web Vitals, hardening, backups,
and monitoring all still work.

That refusal is deliberate. A tool that claims it installed a page cache it could
not install is worse than one that says so plainly.

---

## What's in the box

### Four agents

| Agent | Owns | Will not |
|---|---|---|
| `wp-deployer` | Stand up or adopt a site, TLS, cutover | Cut over without a tested rollback |
| `wp-optimizer` | Benchmark → change → re-benchmark | Claim a win without a second measurement |
| `wp-guardian` | Hardening, backups, restore drills, monitoring | Call a backup working without a test restore |
| `retrospective` | Turn what happened into written lessons | Touch your site |

### Eleven skills

| Skill | What it knows |
|---|---|
| `wp-audit-inherited` | The read-only diagnostic pass on a site you didn't build — **start here** |
| `wp-deploy-stack` | The compose stack, proxy wiring, first boot |
| `wp-page-cache` | nginx `proxy_cache`, bypass rules, purge-on-publish |
| `wp-object-cache-php` | Redis object cache, OPcache, realpath cache |
| `wp-image-optimization` | WebP siblings, `Accept` negotiation, serving uploads without PHP |
| `wp-core-web-vitals` | Measure, fix, re-measure; cache lifetimes |
| `wp-hardening` | Permissions, XML-RPC, admin lockdown, PHP version gating |
| `wp-backup-restore` | Nightly dump, offsite mirror, and the restore drill |
| `wp-monitoring` | Probes, cache hit-rate from logs, push-based monitoring |
| `wp-migrate-cutover` | Host moves, certificates, post-cutover verification |
| `vm-multi-app-hosting` | Running many independent apps on one box without them colliding |

### A self-learning layer, in six files

```
CLAUDE.md ──→ capture.sh ──→ interactions.jsonl ──→ triage.sh (Stop hook)
                                                          │
                                              "retrospective due"
                                                          ▼
                                            retrospective ──→ lessons.md
```

That's the entire mechanism. Claude does work, writes one line about it, a hook
counts the lines, and when enough accumulate the `retrospective` agent turns them
into rules that get read at the start of every future task.

It ships with 14 lessons already written down, so it's useful on the first run.

---

## The write-ups

Where all of this came from. Plain markdown in [`blog/`](blog/) — read them here
or wherever they've been syndicated.

1. **[Build a Self-Learning DevOps Agent in Six Files](blog/01-self-learning-devops-agent-in-six-files.md)**
   — the pattern above, from scratch, if you'd rather understand it than clone it.
2. **[The Database Was Downloadable From the Website](blog/02-the-database-was-downloadable.md)**
   — a read-only audit of a 300,000-post site nobody had looked at in three years.
   A dormant crypto-miner, 364,909 failed root logins, and 7 GB of database dumps
   in the public web root.
3. **[How to Actually Make WordPress Fast](blog/03-how-to-actually-make-wordpress-fast.md)**
   — the five fixes in payoff order, and the four-part modernization that bought
   30 ms out of 1580.
4. **[One Server, Eleven Apps](blog/04-one-server-many-apps.md)**
   — 52 containers on a single box, and the layout that keeps it boring.

---

## Some things this repo will tell you that cost us real money to learn

- **A CDN will not cache any response carrying `Set-Cookie`.** One plugin calling
  `session_start()` on every request silently defeats edge caching site-wide.
- **A clean WordPress error log proves nothing about PHP compatibility.**
  WordPress sets `error_reporting` to 4983, which excludes `E_DEPRECATED`. You
  have to force `E_ALL` to actually validate a version bump.
- **Migrating only `wp-content` loses files.** Plugins write to the WordPress
  root too, and rewrite rules don't survive a host move. We shipped a silent 404
  flood that hit full PHP for weeks.
- **`OPTIMIZE TABLE` fails on any site migrated from a MySQL 5.x era box** —
  legacy tables carry `0000-00-00` defaults MySQL 8 refuses to rebuild.
- **A reverse proxy won't request a new certificate while any certificate in its
  store already covers the domain** — including the default one. "Seed a cert now,
  let ACME take over later" has no gapless path.
- **An "is this already configured?" `grep` that matches a commented-out example**
  reports success and changes nothing.

All 14 are in [`.claude/memory/lessons.md`](.claude/memory/lessons.md), each with
the symptom, the cause, and the rule.

---

## Requirements

- [Claude Code](https://claude.com/claude-code)
- **Mode A:** a VPS with Docker and Docker Compose, plus a domain
- **Mode B:** SSH access to your WordPress host, and WP-CLI available there

---

## Support

Questions, bugs, or you want a hand with your own site:
**devops@xoyo.ad**

Issues and pull requests are welcome. If you use this on a site and learn
something the hard way, a PR adding it to `lessons.md` helps everyone.

---

## License

MIT — see [LICENSE](LICENSE). Use it commercially, fork it, ship it.


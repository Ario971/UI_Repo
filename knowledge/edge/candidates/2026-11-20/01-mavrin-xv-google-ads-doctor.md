---
id: "mavrin-xv/google-ads-doctor"
name: "mavrin-xv/google-ads-doctor"
url: "https://github.com/mavrin-xv/google-ads-doctor"
date: "2026-11-20"
source: "GitHub Search API"
category: "github_discovery"
kind: "claude_skill"
compatibility: 97
momentum: 45
risk: 32
integration_effort: 24
expected_gain: 87
composite: 76
replacement_target: ""
related_articles: [{"title":"Show HN: Mimzie, an agent-neutral alternative to the Claude Suite/Claude Cowork","date":"2026-11-11","topic":"AI agents","similarity":0.253,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-11-11/09-show-hn-mimzie-an-agent-neutral-alternative-to-the-claude-suite-claude.md"},{"title":"Donating Agent Skills to the Agentic AI Foundation","date":"2026-10-25","topic":"AI agents","similarity":0.228,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-10-25/07-donating-agent-skills-to-the-agentic-ai-foundation.md"},{"title":"Show HN: Omnara – Open-source alternative to Claude Managed Agents","date":"2026-10-21","topic":"AI agents","similarity":0.217,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-10-21/06-show-hn-omnara-open-source-alternative-to-claude-managed-agents.md"}]
pros: ["Recently updated (2026-11-20)","MIT license","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["README mentions telemetry/analytics"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 1
dependency_files: []
install_commands: ["git clone https://github.com/mavrin-xv/google-ads-doctor && cd google-ads-doctor"]
risk_flags: ["README mentions telemetry/analytics"]
status: "new"
---

# mavrin-xv/google-ads-doctor

Finds where Google Ads money leaks and fixes it in order: conversions, search terms, negatives, structure.

URL: https://github.com/mavrin-xv/google-ads-doctor

## Why it matters
You saved an article on 2026-11-11 about AI agents; this candidate overlaps with "Show HN: Mimzie, an agent-neutral alternative to the Claude Suite/Claude Cowork" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-11-20)
+ MIT license
+ GitHub Actions/CI detected
+ README mentions tests or validation

## Cons
- README mentions telemetry/analytics

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 1

Dependency files:
- none detected

Install commands found:
- git clone https://github.com/mavrin-xv/google-ads-doctor && cd google-ads-doctor

Risk flags:
- README mentions telemetry/analytics

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
![google-ads-doctor](assets/banner.png)

# google-ads-doctor

**Find where Google Ads money leaks and fix it in the right order: conversion tracking, search terms, negatives, structure, then a weekly check that keeps it fixed.**

The account says 90 conversions and the business got 30 leads, a third of the spend goes to "jobs" and "how to" searches, and one negative added last spring quietly blocks your best keyword.

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![Works with](https://img.shields.io/badge/works%20with-Claude%20Code%20%7C%20Codex%20%7C%20any%20SKILL.md%20agent-black)
![Python](https://img.shields.io/badge/scripts-Python%203.8%2B%20stdlib-green)

![Example output](assets/example.png)

```bash
git clone https://github.com/mavrin-xv/google-ads-doctor && cd google-ads-doctor
./install.sh  # or: ./install.sh --project
```

<!-- install-notes:start -->
Other ways in: as a Claude Code plugin, run `/plugin marketplace add mavrin-xv/google-ads-doctor` and then `/plugin install google-ads-doctor@google-ads-doctor`. For Codex or another agent that reads `SKILL.md`, copy the folders under `skills/` into its skills directory. On Windows, run `install.sh` from Git Bash or WSL and type `py -3` where these docs say `python3`.
<!-- install-notes:end -->

Then download your reports and say "audit my Google Ads".

---

## What it solves

| Pain | Fix in this repo |
|---|---|
| Ads reports far more conversions than the business has leads | `conversions_audit.py` finds duplicates (Ads tag plus GA4 import), careers forms set primary, leads counted Every, directions clicks counted as leads |
| Waste is spread over thousands of cheap search terms | `ngrams.py` groups terms by the words they share and ranks the patterns that never convert |
| A negative keyword blocks buyers and nobody notices | `negatives_check.py` tests every negative against converting terms and your own keywords before upload |
| "Should we raise the budget?" | Structure check S06 separates budget-limited from rank-limited campaigns |
| Broad match burning money on manual bidding | S02 flags broad keywords in campaigns without conversion-based bidding |
| Conversions drop to 0 and bids get changed first | The weekly check raises TRACKING before CPA, so the tag gets tested first |
| Nobody remembers why a change was made | Every weekly run appends a dated entry with Decision, Why and Check again on |

## What's inside

| Skill | What it does | Say |
|---|---|---|
| `ads-data-pull` | Gets the reports: UI download steps, or a read-only API pull with GAQL | "export my Google Ads data", "pull search terms from the API" |
| `conversion-cleanup` | Ten checks on conversion actions so bidding optimises for real leads | "conversions look too high", "which conversions should be primary" |
| `search-terms-audit` | N-gram waste mining with verdicts, intent classes and a candidates file | "where is my ad money going", "mine my search terms" |
| `negative-keywords` | Simulates negative matching, flags harmful negatives, writes an upload file | "check these negatives", "did a negative block my leads" |
| `structure-audit` | Ten structure checks with pass, fail, warn or unknown and evidence coverage | "audit my account", "should I raise the budget" |
| `weekly-ads-check` | Week over week flags in action order plus a decisions log | "weekly ads check", "what changed this week" |

Also: `examples/northwind-plumbing/` (an invented account with planted problems), `templates/` (decisions log, lead paths map), `docs/how-it-works.md`.

## Quick start

```bash
E=examples/northwind-plumbing
python3 skills/conversion-cleanup/scripts/conversions_audit.py $E/conversion-actions.csv --owner-leads 34
python3 skills/search-terms-audit/scripts/ngrams.py $E/search-terms.csv --target-cpa 60 --csv candidates.csv
python3 skills/negative-keywords/scripts/negatives_check.py candidates.csv --terms $E/search-terms.csv --keywords $E/keywords.csv
python3 skills/structure-audit/scripts/structure_audit.py --campaigns $E/campaigns-month.csv --keywords $E/keywords.csv --target-cpa 60
python3 skills/weekly-ads-check/scripts/weekly_check.py $E/campaigns-week-curr.csv $E/campaigns-week-prev.csv --target-cpa 60
```

On your own account, replace the example files with your downloads. The scripts read UI CSV and TSV files (including UTF-16, title rows and totals) and the API CSVs from `gaql_pull.py`.

## How it works

```text
reports (UI CSV or gaql_pull.py) ─► adsreport.py: maps column names, parses numbers
                                      │
 1 conversion-cleanup ─► is the conversion count true?  (every CPA below depends on it)
 2 search-terms-audit ─► which word patterns cost money and never convert
 3 negative-keywords  ─► which negatives are safe; HARMFUL ones never reach the upload file
 4 structure-audit    ─► where setup loses money: bidding, kill rule, budget vs rank
 5 weekly-ads-check   ─► flags every week ─► decisions.md
```

Order matters. Search term and structure verdicts use CPA, and CPA is only as true as the conversion count, so tracking comes first. Every script proposes; the account owner approves and makes each change. Nothing here writes to Google Ads.

## Configure

| Setting | Where | Default |
|---|---|---|
| Target CPA | `--target-cpa` on every audit | account CPA when not given (weaker, the report says so) |
| Brand and competitor words | `ngrams.py --brand --competitors` | none |
| Kill line | `ngrams.py --kill-multiple`, S03 in `structure_audit.py` | 3x target CPA |
| Report period | `--days` | 30 (audits), 7 (weekly) |
| API credentials | environment variables, see `skills/ads-data-pull/references/api-setup.md` | none; the API path is optional |
| API version | `GOOGLE_ADS_API_VERSION` | v26 |

## Honest limits

- Search terms that Google hides for privacy are not in the report, so the audit covers the visible part of spend only.
- Performance Max is mostly out of scope: no keywords, search term insights come as categories.
- Negative matching is simulated from Google's documented rules. It cannot see searches that have not happened yet.
- Thresholds (3x CPA kill line, 15% lost budget share, about 15 to 30 conversions a month before smart bidding) are practitioner rules, not Google limits.
- The Editor upload file's column names differ between Editor versions; map them on import.
- Tested: every script on the invented example data, UTF-16 and API-shaped CSVs, and `gaql_pull.py` against a local mock of the search endpoint. Not tested by us: a real Google Ads API call, a real Editor import, accounts in UI languages other than English.
- Tested with Claude Code. Other agents that read SKILL.md files should work; not tested.

## Credits

- https://github.com/boringmarketer/boring-marketing-skills (MIT, Copyright (c) 2026 Boring Marketing, LLC): adapted the judge-after-2x-CPA rule, the 3-day minimum, slow scaling steps, one-campaign-on-small-budgets and the biddable-goal trap in the API. Rewritten, no text copied.
- https://github.com/AgriciDaniel/claude-ads: the idea of checks with pass, fail and unknown states plus an evidence coverage score.
- https://github.com/themattberman/google-ads-copilot: n-gram based search term mining as the first waste lens.
- https://github.com/googleads/google-ads-mcp and https://github.com/cohnen/mcp-google-ads: read-only GAQL access patterns.
- Google Ads Help, "About negative keywords" and the conversion action and impression share articles, for matching rules and column meanings.

## Contributing

See `CONTRIBUTING.md`. Coding agents should read `AGENTS.md` first.

<!-- author:start -->
## Author

Built and maintained by [Artem Mavrin](https://github.com/mavrin-xv). This repo is one of a set of agent skill packs for marketing and operations work. Each one installs on its own; the full list is in [agent-skill-packs](https://github.com/mavrin-xv/agent-skill-packs). If a pack saved you an afternoon, a star helps other people find it.
<!-- author:end -->

## License

MIT, see `LICENSE`.


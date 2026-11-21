---
id: "ferrstudio/verifier-supabase"
name: "FERRSTUDIO/verifier-supabase"
url: "https://github.com/FERRSTUDIO/verifier-supabase"
date: "2026-11-21"
source: "GitHub Search API"
category: "github_discovery"
kind: "claude_skill"
compatibility: 83
momentum: 45
risk: 30
integration_effort: 28
expected_gain: 87
composite: 73
replacement_target: ""
related_articles: [{"title":"Show HN: Mimzie, an agent-neutral alternative to the Claude Suite/Claude Cowork","date":"2026-11-11","topic":"AI agents","similarity":0.209,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-11-11/09-show-hn-mimzie-an-agent-neutral-alternative-to-the-claude-suite-claude.md"}]
pros: ["Recently updated (2026-11-21)","MIT license","README mentions tests or validation","README includes install commands"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 85
has_ci: false
has_tests: true
setup_steps_count: 2
dependency_files: []
install_commands: ["git clone https://github.com/FERRSTUDIO/verifier-supabase.git"]
risk_flags: []
status: "new"
---

# FERRSTUDIO/verifier-supabase

Skill Claude Code + script : vérifier la sécurité d'un projet Supabase en l'attaquant de l'extérieur (RLS, colonnes sensibles, fonctions, buckets), puis corriger proprement.

URL: https://github.com/FERRSTUDIO/verifier-supabase

## Why it matters
You saved an article on 2026-11-11 about AI agents; this candidate overlaps with "Show HN: Mimzie, an agent-neutral alternative to the Claude Suite/Claude Cowork" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-11-21)
+ MIT license
+ README mentions tests or validation
+ README includes install commands

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 85/100
CI detected: no
Tests mentioned: yes
Setup steps estimate: 2

Dependency files:
- none detected

Install commands found:
- git clone https://github.com/FERRSTUDIO/verifier-supabase.git

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# verifier-supabase

A Claude Code skill (plus a standalone Python script) that checks the security
of a site or SaaS built on Supabase **by attacking it from the outside**, then
helps you cleanly fix whatever is open.

Why: an AI that re-reads its own code almost always concludes "it's secure".
This skill only concludes from what the database really answers to a stranger
who has the site's URL and the public key found in its JavaScript.

## What it finds

- A `service_role` key published in the site (critical)
- Tables and views readable without an account
- Tables without RLS
- **Columns a member can update on their own rows**: `is_admin`, `plan`,
  `credits`, `banned`, `status`… RLS filters rows, not columns.
- `SECURITY DEFINER` functions executable without an account (trap: Postgres
  grants `EXECUTE` to `PUBLIC` by default)
- Permissive policies (`USING true`, `UPDATE` without `WITH CHECK`)
- Public Storage buckets
- Statuses written by the member that trigger a credit (through a trigger)

## Install

```bash
git clone https://github.com/FERRSTUDIO/verifier-supabase.git
cp -r verifier-supabase/verifier-supabase ~/.claude/skills/
```

Then, in Claude Code: "check the security of my Supabase on https://my-site.com".

## The script alone (without Claude)

```bash
python verifier-supabase/scripts/scan_supabase.py --site https://www.my-site.com
```

Python 3.9+, no dependencies. For the database part (grants, RLS, functions),
add management access to **your** project:

```bash
export SUPABASE_ACCESS_TOKEN=sbp_...        # supabase.com > Account > Access Tokens
# or, from a folder where `supabase link` was run:
python .../scan_supabase.py --site https://www.my-site.com --sql-cli .
```

The script **only reads**.

## The full method

[`verifier-supabase/SKILL.md`](verifier-supabase/SKILL.md):

1. automatic scan;
2. reading what matters by hand (functions, triggers, views, frontend);
3. proofs in a rolled-back transaction, with a test account;
4. fix through a versioned migration, after moving into the API the writes the
   frontend was doing itself;
5. the classic bypasses to test yourself;
6. a fresh reviewer who tries to break the fix;
7. shipping in order: API, frontend, migration;
8. proofs replayed on the real database.

Templates on a fictional schema, to adapt:

- [`templates/proofs.sql`](verifier-supabase/templates/proofs.sql): every attack
  comes out `blocked` or `OPEN`, every legitimate write `passes` or `BROKEN`,
  everything ends in `rollback`.
- [`templates/column-lockdown.sql`](verifier-supabase/templates/column-lockdown.sql):
  closed columns, status reserved by a trigger, functions revoked from `PUBLIC`,
  admin views closed.

## Scope

Use it **only** on a project you own, or with its owner's written permission.
No real write in production during the check: the proofs run in a rolled-back
transaction.

MIT License. By [Ferr Studio](https://www.ferrstudio.ch).


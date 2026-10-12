---
id: "malkreide/dealkit"
name: "malkreide/dealkit"
url: "https://github.com/malkreide/dealkit"
date: "2026-10-12"
source: "GitHub Trending"
category: "github_discovery"
kind: "claude_skill"
compatibility: 92
momentum: 45
risk: 24
integration_effort: 24
expected_gain: 79
composite: 75
replacement_target: ""
related_articles: [{"title":"xionglingsong/usage-evidence","date":"2026-09-19","topic":"AI agents","similarity":0.223,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-09-19/07-xionglingsong-usage-evidence.md"},{"title":"Show HN: Visually orchestrate Claude Code AI agents","date":"2026-09-23","topic":"AI agents","similarity":0.213,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-09-23/08-show-hn-visually-orchestrate-claude-code-ai-agents.md"},{"title":"Skill-Based AI Agents for Power-System Studies","date":"2026-09-30","topic":"AI agents","similarity":0.185,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-09-30/07-skill-based-ai-agents-for-power-system-studies.md"}]
pros: ["Recently updated (2026-10-12)","MIT license","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 1
dependency_files: [{"name":"pyproject.toml","summary":"python project; deps requires, build-backend, name, version, description, readme, license, requires-python"}]
install_commands: ["pip install -e \".[dev]\""]
risk_flags: []
status: "new"
---

# malkreide/dealkit

Evidence-based real-estate deal screening with a human gate – deterministic valuation engine (Immobilien-Kompass port), evidence schemas, market profiles DE/CH/Balkan, red-flag checklists and a Claude skill. Never says "buy".

URL: https://github.com/malkreide/dealkit

## Why it matters
You saved an article on 2026-09-19 about AI agents; this candidate overlaps with "xionglingsong/usage-evidence" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-10-12)
+ MIT license
+ GitHub Actions/CI detected
+ README mentions tests or validation

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 1

Dependency files:
- pyproject.toml: python project; deps requires, build-backend, name, version, description, readme, license, requires-python

Install commands found:
- pip install -e ".[dev]"

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# dealkit

**Evidence-based real-estate deal screening with a human gate.**

🇩🇪 [Deutsche Version](README.de.md)

dealkit turns a property listing plus an investor mandate into a reproducible
screening result: *pruefen* (review in depth), *beobachten* (watch, with
explicit triggers) or *verwerfen* (discard). It never says "buy".

The design principle is borrowed from the Immobilien-Kompass build plan and
made structural:

> **AI extracts and explains · the financial model computes deterministically ·
> rules decide transparently · a human decides.**

## What is in the box

| Component | Purpose |
|---|---|
| `schemas/evidence.schema.json` | Every fact carries a status (`belegt / geschaetzt / angenommen / fehlend`) and a source tier (`amtlich / portal / makler / …`). |
| `schemas/listing.schema.json` | Structured property profile (Objektprofil) built from evidenced values. |
| `schemas/mandate.schema.json` | The investor's standing instructions: markets, capital, strategy, limits, watch triggers. Everything the Kompass hard-coded lives here. |
| `src/dealkit/model.py` | Deterministic financing / cash-flow / target-price / stress / 5-10-15-year scenario engine. Python port of `lib/model.ts`, backtested to the cent. |
| `src/dealkit/profiles.py` | Market profiles: DE (reference), CH, AL, ME, RS (the last four are stubs with documented assumptions). AT, MK, BA, BG, HR are extraction-only markets without a profile. |
| `src/dealkit/redflags.py` | Per-market due-diligence checklists. The engine lists and tracks them; humans answer them. A `blocker` finding overrides any score. |
| `src/dealkit/rules.py` | `kompass_v1` (original score + decision table, for backtests) and `dealkit_v1` (reframed rules with three hard overrides). |
| `src/dealkit/cli.py` | `dealkit validate | screen | checklist | extract | backtest` |
| `src/dealkit/extraction.py`, `scripts/eval_extraction.py` | Extraction scaffold (`dealkit extract`, no LLM) and the stage-1 eval: gold vs. candidate, ±1 % on core values, exact status, every `belegt` quote must occur in the source text. Error classes: `docs/EXTRACTION_ERRORS.md`. |
| `skills/deal-screen/` | Claude skill that runs the pipeline end-to-end and ends at a preview. |

## Quick start

```bash
pip install -e ".[dev]"
dealkit backtest                                   # reproduces the Kompass worked example
dealkit validate examples/listing.leipzig.json     # schema + plausibility lints
dealkit screen examples/listing.leipzig.json -m examples/mandate.example.yaml
dealkit checklist AL --type wohnung                # red-flag list to paste into a listing
dealkit extract fixtures/listings/de-x.txt -o x.json # empty, schema-valid listing to fill
python scripts/eval_extraction.py                  # extraction eval (stage 1)
pytest
```

## The three hard rules

1. **Missing critical data blocks a positive outcome.** Purchase price, living
   area and rent must be present; `fehlend` → `daten_vervollstaendigen`.
2. **Severe object or legal risks override a good financial score.** A
   `blocker` finding (title, legalisation, restitution …) → `verwerfen`.
3. **Every market statement is sourced or flagged as an assumption.** Enforced
   by the evidence schema; the assessment reports the weakest status among the
   critical fields.

## What dealkit is not

- Not an automated valuation model (see AlpVal for that).
- Not a sourcing agent: scraping portals is out of scope by design (ToS,
  JavaScript, blocking). Feed it listings via URL/PDF or portal e-mail alerts.
- Not investment advice. Scores measure fit to *your* rules; they are not
  calibrated against outcomes. A decision log (`docs/ROADMAP.md`, stage 3) is
  the path to calibration.

## Roadmap

See [docs/ROADMAP.md](docs/ROADMAP.md) – five stages with gates, from the
engine port (stage 0, done) to an optional always-on fetcher on a Raspberry
Pi 5 (stage 5).

## Related projects

- [journeykit](https://github.com/malkreide/journeykit) – evidence-atom pattern
- [personakit](https://github.com/malkreide/personakit) – the mandate is a persona
- [swiss-housing-mcp](https://github.com/malkreide/swiss-housing-mcp), [swisstopo-mcp](https://github.com/malkreide/swisstopo-mcp), [swiss-snb-mcp](https://github.com/malkreide/swiss-snb-mcp) – market context and FX for CH objects

## License

MIT © Hayal Özkan


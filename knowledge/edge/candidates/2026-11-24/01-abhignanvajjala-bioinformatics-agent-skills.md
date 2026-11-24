---
id: "abhignanvajjala/bioinformatics-agent-skills"
name: "AbhignanVajjala/Bioinformatics-agent-skills"
url: "https://github.com/AbhignanVajjala/Bioinformatics-agent-skills"
date: "2026-11-24"
source: "GitHub Search API"
category: "github_discovery"
kind: "agent_framework"
compatibility: 80
momentum: 45
risk: 24
integration_effort: 32
expected_gain: 77
composite: 70
replacement_target: ""
related_articles: [{"title":"Muffin - A Shared Memory Buffer for Asynchronous AI Agents","date":"2026-10-22","topic":"AI agents","similarity":0.321,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-10-22/06-muffin-a-shared-memory-buffer-for-asynchronous-ai-agents.md"},{"title":"Donating Agent Skills to the Agentic AI Foundation","date":"2026-10-25","topic":"AI agents","similarity":0.319,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-10-25/07-donating-agent-skills-to-the-agentic-ai-foundation.md"},{"title":"Show HN: Omnara – Open-source alternative to Claude Managed Agents","date":"2026-10-21","topic":"AI agents","similarity":0.31,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-10-21/06-show-hn-omnara-open-source-alternative-to-claude-managed-agents.md"}]
pros: ["Recently updated (2026-11-24)","MIT license","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["No clear install command found in README"]
readme_quality: 85
has_ci: true
has_tests: true
setup_steps_count: 1
dependency_files: [{"name":"pyproject.toml","summary":"python project; deps requires, build-backend, name, version, maintainers, description, requires-python, license"}]
install_commands: []
risk_flags: []
status: "new"
---

# AbhignanVajjala/Bioinformatics-agent-skills

An open-source library of AI agent skills for bioinformatics, computational biology, and reproducible scientific research.

URL: https://github.com/AbhignanVajjala/Bioinformatics-agent-skills

## Why it matters
You saved an article on 2026-10-22 about AI agents; this candidate overlaps with "Muffin - A Shared Memory Buffer for Asynchronous AI Agents" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-11-24)
+ MIT license
+ GitHub Actions/CI detected
+ README mentions tests or validation

## Cons
- No clear install command found in README

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 1

Dependency files:
- pyproject.toml: python project; deps requires, build-backend, name, version, maintainers, description, requires-python, license

Install commands found:
- none detected

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# Bioinformatics Agent Skills

An open-source collection of **experimental Agent Skills and executable scientific
utilities for reproducible bioinformatics and computational biology**, initiated
and maintained by **Abhignan Vajjala**. It combines structured research
instructions, scientific validation checks and established computational workflows
to support more defensible AI-assisted scientific analysis.

## Project overview

A fluent scientific answer can conceal mismatched samples, pseudoreplication,
confounded designs, inappropriate count scales or unsupported biological claims.
This project makes selected assumptions and failure conditions explicit, supplies
executable checks, and records what actually ran. Whether these skills improve
agent behavior remains an open evaluation question.

An **Agent Skill** is a folder with a `SKILL.md` instruction file and optional
supporting resources. An agent host can use its description to select a workflow
and read detailed instructions when needed; host behavior must be verified.

There are **17 skills: seven domain skills and ten foundation/maintainer
skills**, seven validators, synthetic examples, pinned R recipes and an evaluation
harness. Foundation skills cover research planning, context, decomposition,
orchestration, debugging, evidence, prompts, reproducibility and skill authoring.
They are instruction workflows, not ten additional biological analysis methods.
See the [skill index](SKILL_INDEX.md) and [architecture](docs/architecture.md).

## Download the complete collection

**[Download Bioinformatics-Agent-Skills-Complete.zip](https://github.com/AbhignanVajjala/Bioinformatics-agent-skills/raw/refs/heads/main/Bioinformatics-Agent-Skills-Complete.zip)**

One universal ZIP contains all 17 experimental skills and references, scientific
utilities, seven validators, executable recipes, synthetic examples, schemas and
installation guides. No Git clone is needed. [SHA256SUMS](SHA256SUMS) records its
checksum. Complete refers to the shipped collection, not all bioinformatics.

Copy `.agents/skills/` for instructions only, with no Python or R installation.
Keep the entire extraction and install the documented dependencies to execute
scientific workflows. Begin with [START_HERE.md](START_HERE.md),
[INSTALL.md](INSTALL.md) or [TOOLKIT_INSTALL.md](TOOLKIT_INSTALL.md).

## Scientific capabilities

Executed evidence concerns synthetic or mocked checks of the implementation.
It does not certify a real study or an agent's scientific reasoning.

| Capability | Actual implementation | Scientific software | Executed evidence | Important limitations |
|---|---|---|---|---|
| Bulk RNA-seq differential expression | Count/design readiness; unpaired, paired and batch-adjusted recipes | R/Bioconductor, DESeq2, edgeR; NumPy/pandas gates | Six model fits and twelve input/design rejections in pinned R CI | Gene counts and declared units; no power guarantee, shrinkage or biological validation |
| Genome-scale metabolic modeling | SBML/FBC inspection; toy FBA, pFBA, FVA, GPR/knockout and feasibility controls | COBRApy/GLPK, libsbml | Original and domain recipes executed in Linux and Windows distribution CI | Synthetic tested model; optimized flux is a conditional prediction |
| Multi-omics integration | Specimen reconciliation and descriptive matched-feature cross-view association | NumPy/pandas | Synthetic examples and valid/invalid fixtures | Exactly two assays in cross-view baseline; no MOFA2, SNF or predictor |
| Single-cell RNA-seq pseudobulk | Raw counts summed by specimen and cell population; donor-aware readiness | NumPy/pandas | Aggregation and scientifically invalid-unit fixtures | No full differential-state fit; upstream cell QC is not executed |
| Public data metadata | Bounded GEO, SRA and Ensembl metadata client; dry-run default | Python standard-library HTTP client | Offline mocked requests and dry-run example | Scoped live GEO/SRA/Ensembl metadata verified in Phase 8; no large or controlled-access downloads |
| Enrichment and identifier mapping | One-to-one mapping audit, tested universe, Fisher ORA and BH correction | SciPy | Known-result and multiple-testing regressions | Ambiguous mappings rejected; ranked enrichment NOT_RUN; association is not activation |
| Bioinformatics file formats | Small text-record inspection and binary signature triage | Python standard library | Text/signature fixtures and FASTQ example | Signatures do not fully validate BAM/CRAM/BCF/H5AD; external parsers needed |
| `check_counts` | Structure, finite nonnegative integer values, unique IDs and declared provenance | NumPy/pandas | Valid, scientific-invalid and malformed API/CLI fixtures | Integer appearance cannot authenticate raw counts |
| `check_sample_ids` | Exact ID comparison; explicit optional in-memory ordering | pandas | API/CLI fixtures and input-immutability check | Matching labels cannot prove biological identity |
| `check_design_rank` | Numeric matrix rank and residual degrees of freedom | NumPy | API/CLI fixtures including confounding | Cannot detect unmeasured confounders or all unsuitable estimands |
| `check_replication` | Independent subject counts and scoped paired-design gates | pandas | API/CLI fixtures including pseudoreplication | Declared subjects and minimum counts do not establish power |
| `check_fba_status` | Objective, solver status, finite flux, mass-balance and bound checks | COBRApy/GLPK, NumPy | API/CLI and numerical controls in CI | Native dependencies required; numerical feasibility is not biological validity |
| `check_leakage` | Demonstrable subject overlap and partition-label checks | pandas | API/CLI overlap fixtures | Cannot detect hidden identity errors or all preprocessing leakage |
| `check_enrichment_background` | Selected/tested universe, species/release, mapping and BH declaration | Python | API/CLI background and mapping fixtures | Checks declared policy; ORA calculation is a separate workflow |

[Validator interface](docs/validators.md) Â· [Scientific evidence](docs/scientific-evidence.md)
Â· [Tests](tests/test_validators.py) Â· [Capability status](docs/phase3-status.md)

## Example research workflows

**Bulk RNA-seq differential expression.** Supply gene counts, sample/subject
metadata and a two-condition design and contrast. The [R recipe](recipes/rnaseq/run.R)
checks scale declarations, alignment, replication, rank and residual degrees of
freedom, then fits DESeq2 or edgeR quasi-likelihood models. Outputs include
effects, p-values, BH-adjusted results, filtering, normalized diagnostics,
dispersion plots and status. [Synthetic controls](recipes/rnaseq/test.R) exercise
valid designs and deliberate rejections. The [Python example](examples/bulk-rnaseq/run.py)
checks readiness only. Synthetic effects do not establish biological discoveries
or clinical utility.

**Metabolic modeling.** A real analysis requires a curated SBML/FBC model,
objective, medium, units and biological context. The [domain recipe](examples/domain-recipes/run.py)
executes SBML round-trip, FBA/pFBA/FVA, gene versus reaction knockouts and
temporary constraint changes on a synthetic model. Outputs include the model,
FVA/deletion tables and reports covering residuals, solver statuses and restoration.
[Tests](tests/test_domain_recipes.py) include infeasible/unbounded controls.
The [Phase 5 maintainer review](docs/maintainer-reviews/2026-11-24-metabolic-model-review.md) documents the two-compartment correction and scoped self-review, with AI assistance. Independent review remains incomplete.

The [Phase 6 multi-omics review](docs/maintainer-reviews/2026-11-24-multiomics-review.md)
documents validation/numerical corrections and explicit subject, partition and
normalization limits from the second AI-assisted maintainer investigation.

The [Phase 7 RNA-seq review](docs/maintainer-reviews/2026-11-24-bulk-rnaseq-review.md)
documents strict input contracts, identifier preservation and native fitting
diagnostics from the scoped AI-assisted maintainer audit.
Predicted flux does not measure cellular flux, demonstrate overexpression or
prove an intervention.

Phase 8 records four additional scoped maintainer investigations:
[pseudobulk](docs/maintainer-reviews/2026-11-24-pseudobulk-review.md),
[enrichment](docs/maintainer-reviews/2026-11-24-enrichment-review.md),
[formats](docs/maintainer-reviews/2026-11-24-file-formats-review.md) and
[public metadata](docs/maintainer-reviews/2026-11-24-public-metadata-review.md).
These correct scientific utilities and document evidence; they do not demonstrate
improved agent effectiveness or independent biological validation.

**Multi-omics integration.** Supply assay matrices, assay-sample to
subject/specimen/timepoint mappings, scales, partitions and a feature map.
[Cross-view code](src/bioskills/domain_workflows.py) audits identities and exclusions,
checks declared subject leakage, transforms RNA counts to log2(CPM+1), preserves
declared protein/metabolite log2 intensities and computes descriptive Pearson
correlations. The [example](examples/domain-recipes/run.py) exports calculations,
inputs and hashed provenance; [negative controls](tests/test_domain_recipes.py)
reject permuted metadata, leakage and incompatible scales. Correlation does not
establish regulation, causality or predictive accuracy.

The [maintainer technical walkthrough](docs/maintainer-technical-walkthrough.md)
provides commands, artifacts, reviewer questions and an uncompleted human checklist.

## Scientific validation and evidence

| Evidence category | What is established | Record and boundary |
|---|---|---|
| Structural skill validation | Metadata, links and synchronized modes pass checks | [Validator](scripts/validate_skills.py), [mode tests](tests/test_modes.py); no behavioral guarantee |
| Deterministic scientific checks | Specified positive, scientific-invalid and malformed fixtures exercise gates | [Validator tests](tests/test_validators.py), [scientific tests](tests/test_science.py); scoped assumptions only |
| Synthetic workflow execution | Included calculations and controls genuinely executed | [Domain tests](tests/test_domain_recipes.py), [expanded tests](tests/test_expanded.py); no biological validation |
| R/Bioconductor execution | Six DESeq2/edgeR fits and twelve rejection checks passed | [Pinned CI](https://github.com/AbhignanVajjala/Bioinformatics-agent-skills/actions/runs/44559842600), [hashed R evidence](references/phase3-r-execution.json) |
| Platform/distribution compatibility | Fresh extracted Python installs and examples passed on Windows and Linux | [CI run](https://github.com/AbhignanVajjala/Bioinformatics-agent-skills/actions/runs/44559842977); agent-host discovery is separate |
| AI-agent behavioral evaluation | Ten Phase 2 turns completed: provisional **0 PASS, 4 FAIL, 6 BLOCKED** | [Review](evals/reports/agent-benchmark-summary.md), [scores](evals/reports/agent-benchmark-scores.json), [access provenance](evals/reports/agent-benchmark-provenance.md). File access does not establish instruction-following; one sample per condition cannot establish effectiveness |
| Independent scientific review | **NOT_REVIEWED**; independent human methodological and biological review remains incomplete | [Evidence boundaries](docs/scientific-evidence.md); Phase 3 behavioral fixtures remain NOT_RUN |

Python test counts describe tested software conditions. They do not prove
scientific accuracy, improved AI reasoning or complete coverage. Exact counts,
skips, blockers and commands are in [implementation status](docs/implementation-status.md).

## Installation and compatibility

The collection follows the [Agent Skills format](https://agentskills.io/specification)
and preserves `.agents/skills/<skill-name>/SKILL.md`. Locations, selection syntax,
permissions and discovery depend on the agent host. [Host compatibility](docs/agent-host-compatibility.md)
separates vendor documentation from tests of this collection. Claude Code,
Cursor and Gemini CLI installation, discovery and invocation are NOT_TESTED here.
Codex-specific instructions and the historical CLI pilot remain documented.

For a consultation, ask your host to use `bulk-rnaseq-differential-expression`
to audit counts and metadata. Select it through the host's documented mechanism.
Use QUICK for bounded questions and FULL for requested reproducible execution;
both retain essential safeguards. See [installation](INSTALL.md) and the
[mode policy](docs/execution-modes.md).

The scientific toolkit runs directly from a terminal without an agent host.
Python dependencies and optional R/Bioconductor/native runtimes require explicit
installation. [Toolkit instructions](TOOLKIT_INSTALL.md) cover first use;
[development installation](docs/installation.md) covers repository tests.

## Project maturity and limitations

All skills are **EXPERIMENTAL** and not clinically validated. Declared provenance
and IDs cannot authenticate assays or people. Minimum replication does not
establish power. Rank checks do not eliminate unmeasured confounding.

Full pseudobulk differential-state modeling, MOFA2/SNF, ranked enrichment, live
public retrieval and full binary parsers remain NOT_RUN. Variant, epigenomics,
proteomics and workflow-engine skills from Milestone 3.5 are NOT_IMPLEMENTED.
macOS execution and cross-host behavioral effectiveness remain unverified.
Local Windows libsbml restrictions are reported separately from successful hosted
CI runs. See the [roadmap](docs/roadmap.md) and [scientific integrity rules](docs/scientific-integrity.md).

## Development and AI Assistance

Abhignan Vajjala initiated and maintains this project. Development has used
substantial AI assistance, including OpenAI Codex. Scientific requirements,
implementation decisions, automated code generation and review responsibilities
must remain distinguishable. Tests and CI document executed software behavior;
independent biological validation and human methodological review remain
incomplete. This attribution does not claim that the maintainer personally wrote
or independently reviewed every line or method. See [development transparency](docs/development-and-ai-assistance.md).

## Contributing, citation and licensing

Contributions should disclose material AI assistance and supply reproducible
evidence, assumptions and honest limits. Read [CONTRIBUTING.md](CONTRIBUTING.md),
the [authoring guide](docs/authoring-guide.md), [scientific integrity rules](docs/scientific-integrity.md)
and [security policy](SECURITY.md). Cite the version and exact commit using
[CITATION.cff](CITATION.cff).

The [MIT license](LICENSE) covers original project code, instructions and
synthetic fixtures. Dependencies retain their own licenses. Historical
[reference-analysis and redistribution limits](docs/reference-analysis.md) remain
documented; no third-party reference-archive bodies or assets are redistributed.
Project attribution conveys no affiliation with external software providers,
nf-core or GA4GH. [Historical publication inventory](docs/repository-tree.md) and
[development progress](docs/development-progress.md) provide further context.


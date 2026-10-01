---
id: "sudosubin/agents.nix"
name: "sudosubin/agents.nix"
url: "https://github.com/sudosubin/agents.nix"
date: "2026-10-01"
source: "GitHub Search API"
category: "github_discovery"
kind: "agent_framework"
compatibility: 67
momentum: 65
risk: 24
integration_effort: 32
expected_gain: 77
composite: 71
replacement_target: ""
related_articles: [{"title":"WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution","date":"2026-08-27","topic":"AI agents","similarity":0.338,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-27/07-wikiskill-compiling-agent-experience-into-persistent-knowledge-for-ski.md"},{"title":"Show HN: Agent Chaperone – Screen AI agent tool calls and results with Jev","date":"2026-09-21","topic":"AI dev tools","similarity":0.3,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-09-21/10-show-hn-agent-chaperone-screen-ai-agent-tool-calls-and-results-with-je.md"},{"title":"pradverma94/ai-support-agent","date":"2026-09-13","topic":"AI dev tools","similarity":0.275,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-09-13/12-pradverma94-ai-support-agent.md"}]
pros: ["Recently updated (2026-10-01)","MIT license","15 GitHub stars","GitHub Actions/CI detected"]
cons: ["No clear install command found in README"]
readme_quality: 85
has_ci: true
has_tests: true
setup_steps_count: 1
dependency_files: []
install_commands: []
risk_flags: []
status: "new"
---

# sudosubin/agents.nix

Nixpkgs overlay for AI agent skills from skills.sh and skillsdirectory.com

URL: https://github.com/sudosubin/agents.nix

## Why it matters
You saved an article on 2026-08-27 about AI agents; this candidate overlaps with "WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-10-01)
+ MIT license
+ 15 GitHub stars
+ GitHub Actions/CI detected

## Cons
- No clear install command found in README

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 1

Dependency files:
- none detected

Install commands found:
- none detected

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# agents.nix

Nix expressions for AI agent skills from [skills.sh](https://skills.sh) and [skillsdirectory.com](https://www.skillsdirectory.com).

As of September 2026, this flake provides Nix derivations for over 145,000 skills sourced from more than 21,000 GitHub repositories. Each skill is individually packaged, pinned to a specific revision, and made available through a nixpkgs overlay.

## Prerequisites

### (Optional) Enable flakes

Read about [Nix flakes](https://wiki.nixos.org/wiki/Flakes) and [set them up](https://wiki.nixos.org/wiki/Flakes#Setup).

## Overlay

Read about [Overlays](https://wiki.nixos.org/wiki/Overlays#Using_overlays).

### With flakes

Add `agents.nix` to your flake inputs:

```nix
{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    agents-nix.url = "github:sudosubin/agents.nix";
  };

  outputs = { nixpkgs, agents-nix, ... }:
    let
      pkgs = import nixpkgs {
        system = "aarch64-darwin"; # or "x86_64-linux", etc.
        overlays = [ agents-nix.overlays.default ];
      };
    in
    {
      # pkgs.agent-skills.github.<owner>.<repo>.<skill-name>
    };
}
```

### Without flakes

```nix
let
  agents-nix = import (builtins.fetchGit {
    url = "https://github.com/sudosubin/agents.nix";
    ref = "refs/heads/main";
  });

  pkgs = import <nixpkgs> {
    overlays = [ agents-nix.overlays.default ];
  };
in
  # pkgs.agent-skills.github.<owner>.<repo>.<skill-name>
```

## Usage

### Get `agent-skills`

#### Get `agent-skills` via the overlay

After applying the overlay (see [Overlay](#overlay)), skills are available under `pkgs.agent-skills`:

```nix
pkgs.agent-skills.github.<owner>.<repo>.<skill-name>
```

#### Get `agent-skills` from `agents.nix` directly

Without the overlay, you can access skills from the flake outputs:

```nix
agents-nix.agent-skills.${system}.github.<owner>.<repo>.<skill-name>
```

### Skill identifiers

Skills are organized in a four-level hierarchy: `github.<owner>.<repo>.<skill-name>`.

- `github` — the forge the repository lives on
- `owner` — repository owner, lower-cased (e.g., `vercel-labs`)
- `repo` — repository name, lower-cased (e.g., `skills`)
- `skill-name` — skill directory name (e.g., `find-skills`)

For example, a skill from the repository `vercel-labs/skills` would be accessed as:

```nix
pkgs.agent-skills.github.vercel-labs.skills.find-skills
```

> [!NOTE]
> If a skill identifier contains characters that aren't valid Nix identifiers, quote them like `pkgs.agent-skills.github."01000001-01001110"."agent-jira-skills"."jira-issues"`.

> [!IMPORTANT]
> `pkgs.skills.<owner>.<repo>.<skill-name>` still resolves and warns on evaluation. It is kept for existing configurations only.

### Example: install a skill for claude-code

```nix
# home-manager configuration
{ pkgs, ... }:

{
  programs.claude-code = {
    enable = true;
    skills = {
      find-skills = pkgs.agent-skills.github.vercel-labs.skills.find-skills;
    };
  };
}
```

### Example: install a skill for pi

```nix
# home-manager configuration
{ pkgs, ... }:

{
  home.file.".pi/agent/skills/find-skills" = {
    source = pkgs.agent-skills.github.vercel-labs.skills.find-skills;
    recursive = true;
  };
}
```

### Rename a skill

By default, `SKILL.md` is preserved unchanged. The derivation `pname` comes from the lowercased skill directory name, or the repository name for skills at the repository root.

Use `.override { name = "..."; }` to change both the derivation `pname` and the `name` field in `SKILL.md` frontmatter. Setting `name = null` restores the default package name and preserves the original file.

```nix
pkgs.agent-skills.github.vercel-labs.skills.find-skills.override { name = "my-find-skills"; }
```

## Explore

### List available skills in REPL

```console
$ nix repl

nix-repl> :lf github:sudosubin/agents.nix

nix-repl> skills = outputs.agent-skills.${builtins.currentSystem}.github

nix-repl> skills.vercel-labs.skills
{ find-skills = «derivation ...»; ... }

nix-repl> skills.vercel-labs.skills.find-skills
«derivation /nix/store/...-find-skills-4f1d38e.drv»
```

### Build a skill

```console
nix build github:sudosubin/agents.nix#agent-skills.aarch64-darwin.github.vercel-labs.skills.find-skills
```

## How it works

Three independent GitHub Actions workflows run on their own schedules and exchange data through committed JSON files in `data/`:

### Agent Skills Fetch

1. Fetches the latest skill listings from [skills.sh](https://skills.sh) and [skillsdirectory.com](https://www.skillsdirectory.com).
2. Records which of them listed each repository in `data/agent-skills/sources.json`.

### Reconcile

1. Asks GitHub for each repository's current name, and confirms the ones it no longer serves.
2. Moves a renamed repository under the name it goes by now, keeping the old one as an alias that warns when built.

### Agent Skills Update

1. Reads the committed source list (`data/agent-skills/sources.json`) to determine which repositories to process.
2. Splits the work across 16 parallel shards. For each repository, it resolves the revision to pin — the newest release, or the newest commit that touched a skill when there is no usable tag — then downloads the tarball, hashes it, and discovers all `SKILL.md` files.
3. Stores the result in `data/agent-skills/<forge>/` as one JSON file per repository, and proposes each change as its own pull request that merges once the skills build.

At evaluation time, Nix reads these JSON files and builds each skill using `fetchFromGitHub` with the pinned revision and hash. One file is read per repository, so only what you ask for is parsed.

`aarch64-darwin`, `aarch64-linux`, and `x86_64-linux` are supported. [`ci/README.md`](ci/README.md) describes the workflows in more detail.

## License

[MIT](LICENSE)


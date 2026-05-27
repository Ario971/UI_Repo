---
id: "maiduongtrinh075-ui/unity-mcp-validator"
name: "maiduongtrinh075-ui/unity-mcp-validator"
url: "https://github.com/maiduongtrinh075-ui/unity-mcp-validator"
date: "2026-05-27"
source: "GitHub Search API"
category: "github_discovery"
kind: "mcp_server"
compatibility: 88
momentum: 49
risk: 30
integration_effort: 32
expected_gain: 87
composite: 74
replacement_target: ""
related_articles: [{"title":"gHashTag/trios-mcp-rag","date":"2026-05-23","topic":"AI agents","similarity":0.268,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-05-23/53-ghashtag-trios-mcp-rag.md"},{"title":"anzy-renlab-ai/pronounce","date":"2026-05-24","topic":"AI dev tools","similarity":0.223,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-05-24/66-anzy-renlab-ai-pronounce.md"},{"title":"Show HN: I Made a Claude Skill for Spec-Driven Development (SDD)","date":"2026-05-21","topic":"AI dev tools","similarity":0.206,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-05-21/43-show-hn-i-made-a-claude-skill-for-spec-driven-development-sdd.md"}]
pros: ["Recently updated (2026-05-27)","MIT license","1 GitHub stars","README mentions tests or validation"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 100
has_ci: false
has_tests: true
setup_steps_count: 1
dependency_files: [{"name":"package.json","summary":"deps none; scripts mcp:self-test, mcp:check"}]
install_commands: ["npm install -g unity-mcp-cli"]
risk_flags: []
status: "new"
---

# maiduongtrinh075-ui/unity-mcp-validator

Claude Code skill for Unity validation routing via Unity-MCP - uses 100+ MCP tools including reflection, dynamic code execution, and runtime probing

URL: https://github.com/maiduongtrinh075-ui/unity-mcp-validator

## Why it matters
You saved an article on 2026-05-23 about AI agents; this candidate overlaps with "gHashTag/trios-mcp-rag" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-05-27)
+ MIT license
+ 1 GitHub stars
+ README mentions tests or validation

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 100/100
CI detected: no
Tests mentioned: yes
Setup steps estimate: 1

Dependency files:
- package.json: deps none; scripts mcp:self-test, mcp:check

Install commands found:
- npm install -g unity-mcp-cli

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# Unity MCP Validator

A practical validation skill for Unity projects using Unity-MCP.

This repo is for the situation where an agent must answer:

- what validation route actually applies to this Unity change
- which live Unity-MCP capabilities are really available right now
- what evidence can honestly be collected on this machine

Short Chinese command guide: [QUICKSTART_CN.md](QUICKSTART_CN.md)

## What Changed In v2.20.0

This release wraps the validator scripts as a lightweight stdio MCP server.

It adds:

- `mcp/server.mjs`, with no npm runtime dependencies
- `package.json` and the `unity-mcp-validator` executable entry
- MCP tools for quality inspection, gameplay autoplay, visual prefab gates, vibe acceptance, Qwen-VL review, bridge probing, config generation, and project scaffold checks
- self-test coverage for the MCP wrapper

Run the MCP wrapper self-test:

```powershell
node D:\Workspace\unity-mcp-validator\mcp\server.mjs --self-test
```

Example MCP server config:

```json
{
  "mcpServers": {
    "unity-mcp-validator": {
      "command": "node",
      "args": ["D:\\Workspace\\unity-mcp-validator\\mcp\\server.mjs"]
    }
  }
}
```

## What Changed In v2.18.0

This release adds an optional Ollama/Qwen-VL visual reviewer for Unity screenshots.

It adds:

- `scripts/ollama_vision_review.ps1` and `.cmd`
- executable `vl_service` config in `unity_vibe_accept.ps1`
- Qwen-VL findings, suggestions, checks, score, and verdict in JSON/HTML acceptance reports
- a `vl_visual_review` item in the top-level inspector quality scorecard

The default local model endpoint is:

```yaml
vl_service:
  enabled: true
  url: "http://192.168.0.103:11434"
  model: "huihui_ai/qwen3-vl-abliterated:8b-instruct"
  use_for_screenshot_analysis: true
  block_below_min_score: false
```

Standalone screenshot review:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\ollama_vision_review.ps1 `
  -ImagePath D:\Workspace\TowerDefense3D\Assets\Screenshots\screenshot.png
```

## Gameplay Autoplay

When `gameplay_autoplay.enabled` is true, the top-level inspector can enter PlayMode, build towers, observe enemy spawning, projectiles, economy changes, base health, console blockers, and capture a gameplay screenshot.

Standalone run:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\unity_gameplay_autoplay.ps1 `
  -Project TowerDefense3D `
  -ScenePath Assets/TowerDefense3D/TD_Island_Level_01.unity `
  -ObservationSeconds 16
```

## What Changed In v2.17.0

This release adds a top-level Unity game quality inspector for vibe-coding loops.

It adds:

- `scripts/unity_game_quality_inspector.ps1` and `.cmd`
- `scripts/unity_project_static_asset_scan.ps1` and `.cmd`
- one JSON report plus one Markdown summary per run
- bridge diagnosis, project scaffold check, Unity compile check, EditMode Test Runner check, and integrated vibe acceptance in one command
- offline YAML/file scanning for missing scripts, empty material slots, missing shaders, magenta-color risk, and oversized texture/model files
- offline scene-structure scanning for configured scene path validity, Camera, Light, Canvas/UI Toolkit hints, EventSystem, and renderer density
- explicit `pass / degraded / fail` verdicts so missing Test Runner XML or a down bridge is never mislabeled as passed
- a `qualityScorecard` with per-gate scores for project scaffold, MCP bridge, Unity compile, EditMode tests, runtime visual evidence, and presentation aesthetics

Run the inspector:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\unity_game_quality_inspector.ps1 `
  -ProjectPath D:\Workspace\TowerDefense3D `
  -Project TowerDefense3D `
  -Config D:\Workspace\TowerDefense3D\validation-config.yaml
```

Use `-Strict` when a degraded route should fail the process, such as in CI or a final acceptance pass.

The inspector is intentionally strict about evidence. A missing bridge, missing Test Runner XML, or missing current screenshot keeps the report below `max_level` even if static checks look fine.

## What Changed In v2.16.0

This release makes project readiness and presentation scoring configurable.

It adds:

- `scripts/check_unity_vibe_project.ps1` and `.cmd`
- a `presentation_gate` section in generated and example configs
- configurable presentation thresholds for score, subject center offset, subject coverage, and active renderer count

Check a project scaffold:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\check_unity_vibe_project.ps1 `
  -ProjectPath D:\Workspace\YourNewUnityProject `
  -Strict
```

## What Changed In v2.15.0

This release adds a project initializer for new Unity 3D game starts.

It adds:

- `scripts/new_unity_vibe_project.ps1` and `.cmd`
- project-level `validation-config.yaml` generation
- `Assets/Editor/VibeAcceptanceCapture.cs` for deterministic in-Unity camera captures
- `Assets/Editor/UnityMcpAutoBridgeBootstrap.cs`, a reflection-based MCP auto-bridge helper that compiles even before the MCP package is present
- `Assets/Screenshots/.gitkeep`
- project-local `VIBE_CODING_CN.md`

Initialize a new project:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\new_unity_vibe_project.ps1 `
  -ProjectPath D:\Workspace\YourNewUnityProject `
  -Project YourNewUnityProject `
  -ScenePath "Assets/Scenes/SampleScene.unity" `
  -Force
```

## What Changed In v2.14.0

This release adds stronger diagnosis and presentation-oriented reporting.

It adds:

- `QUICKSTART_CN.md` with five common commands for new projects, bootstrap, acceptance, diagnosis, and self-tests
- a `visualAestheticSummary` section in the acceptance JSON report
- screenshot heuristics for estimated subject center, subject coverage, exposure, empty-frame risk, magenta-like pixels, and active renderer count
- thumbnail display for multi-frame screenshot samples in the HTML report, with the selected best frame highlighted

## What Changed In v2.13.0

This release adds maintainability tools for long-running vibe-coding workflows.

It adds:

- `scripts/new_validation_config.ps1` and `.cmd` to generate a project-level `validation-config.yaml`
- `scripts/run_self_tests.ps1` and `.cmd` for parser checks, config-generator checks, and optional live acceptance checks

Generate a starting config for a new project:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\new_validation_config.ps1 `
  -ProjectPath D:\Workspace\UnitySimpleDemo `
  -Project UnitySimpleDemo `
  -PrefabResource "HorseArcherPrefabs/PlayerMount" `
  -RequiredSceneComponentType "HorseArcherPlayerController" `
  -OutputPath D:\Workspace\UnitySimpleDemo\validation-config.yaml
```

Run repository self-tests:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\run_self_tests.ps1
```

## What Changed In v2.12.0

This release integrates `unity-mcp-bootstrap` into the vibe acceptance entry.

It adds:

- `-ProjectPath` support on `scripts/unity_vibe_accept.ps1`
- automatic bootstrap before smoke and visual gates when a project path is provided
- automatic discovery of the sibling `unity-mcp-bootstrap` repo or installed Codex skill script
- a compact `bootstrapSummary` in the final JSON report

For normal vibe-coding loops, this is now the preferred entry:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\unity_vibe_accept.ps1 `
  -ProjectPath D:\Workspace\UnitySimpleDemo `
  -Project UnitySimpleDemo `
  -Config .\validation-config.yaml
```

## What Changed In v2.7.0

This release adds a hard visual gate for game-development work.

It now:

- requires prefab/model/material/VFX/camera work to collect runtime probes plus a current screenshot before being accepted
- treats Unity magenta/pink rendering as a blocking validation failure, even when PlayMode tests pass
- documents prefab asset probes, material/shader probes, live instance probes, and screenshot freshness checks in [references/visual-prefab-validation.md](references/visual-prefab-validation.md)
- warns that screenshots taken after test teardown, from backup scenes, or from sky-only cameras are not valid visual evidence

## What Changed In v2.8.0

This release turns the visual gate into a runnable script.

It adds:

- `scripts/unity_visual_prefab_gate.ps1`
- `scripts/unity_visual_prefab_gate.cmd`
- a `visual_prefab_gate` section in `validation-config.example.yaml`

The script probes prefab assets, material/shader health, optional runtime state, current Game view screenshot capture, and console warnings through the Unity-MCP HTTP bridge.

`-RuntimeProbeFile` is preferred over inline probe code because Windows shell quoting can strip the C# string literals used in `Transform.Find(...)`.

For game-development loops, enable `-ValidateSceneBasics` and `-AnalyzeScreenshot`. That turns the route from "screenshot exists" into a stricter gate that checks active cameras, active renderers, required scene objects or component types, magenta-like pixels, blank/sky-only screenshots, and mostly dark or blown-out frames.

## What Changed In v2.9.0

This release adds a config-driven acceptance entry for vibe coding.

It adds:

- `scripts/unity_vibe_accept.ps1`
- `scripts/unity_vibe_accept.cmd`

The new entry reads `visual_prefab_gate` from `validation-config.yaml`, runs smoke validation, carries the selected Unity instance hash into the visual gate, and emits one top-level acceptance JSON report.

## What Changed In v2.10.0

This release makes acceptance reports easier to read and less noisy.

It adds:

- an HTML report next to the JSON report
- `console_filter` rules for ignoring known Unity Editor noise such as AI Assistant network refresh errors
- blocker regexes for runtime and rendering failures such as `NullReferenceException`, shader errors, missing materials, and magenta/pink rendering

## What Changed In v2.11.0

This release makes visual capture more stable for gameplay scenes.

It adds multi-frame screenshot sampling to the visual gate. The gate can now capture several frames after PlayMode starts, analyze each one, and keep the strongest frame based on visual variance while penalizing magenta, mostly dark, and mostly bright samples.

## What Changed In v2.6.0

This release folds a real project-side acceptance-helper pattern back into the validator.

It now:

- documents when a project-specific menu helper should outrank a raw `manage_camera action=screenshot`
- treats `best candidate frame` capture as a first-class acceptance route instead of a one-off project trick
- explains how to validate a helper that arranges framing, boosts presentation state, scores multiple frames, and then promotes the best artifact
- restores the Chinese README to a clean UTF-8 version locally so the skill is readable in both languages

## What Changed In v2.5.0

This release closes two pain points that only showed up during repeated real validation runs against a live Unity project.

It now:

- documents that `/api/custom-tools` can briefly report `tool_count = 0` even when the Unity instance is alive and commands still work
- documents the confirmed `execute_code` envelope, including the required `params.action = "execute"` field
- clarifies that the current CodeDom-backed `execute_code` route prefers plain executable snippets over top-level `using` statements or full class declarations
- rewrites the Chinese README into a clean UTF-8 version

## What Changed In v2.3.2

This release was driven by real use against a local Unity project, not by idealized docs.

It now:

- probes bridge health, instances, and tool families before naming commands
- documents the working local HTTP envelope for `/api/command`
- includes a Windows PowerShell helper script for probe and command dispatch
- documents PlayMode reconnect behavior as a normal route, not an edge case
- documents real CLI pitfalls on Windows such as `gbk` emoji crashes and global-option ordering
- documents that `/api/custom-tools` can expose tools like `execute_menu_item` before the `unity-mcp` CLI exposes a matching subcommand
- documents that menu-driven editor actions can rotate the Unity plugin session and require a fresh `/api/instances` probe before retry
- replaces the old noisy tool reference with a clean practical one

## What Changed In v2.4.0

This release strengthens the paired workflow with `unity-mcp-bootstrap`.

It now:

- includes a minimal `unity_validation_smoke.ps1` script for health, instance, tool, and optional console preflight
- rewrites the Chinese README into a clean UTF-8 version
- replaces the old noisy examples file with concise real-world validation routes

## Quick Start

### 1. Install the Unity-MCP plugin into your Unity project

```bash
npm install -g unity-mcp-cli
unity-mcp-cli install-plugin ./YourUnityProject
```

### 2. Configure the local HTTP bridge

This skill expects a local HTTP route such as:

- `http://127.0.0.1:8080/health`
- `http://127.0.0.1:8080/api/instances`
- `http://127.0.0.1:8080/api/custom-tools`
- `http://127.0.0.1:8080/api/command`

### 3. Probe before validating

Use the included helper:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\unity_http_probe.ps1 -Health -Instances -Tools
```

Or use the higher-level smoke route:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\unity_validation_smoke.ps1 -IncludeTools -IncludeConsole
```

For prefab-driven visual work, use the visual gate:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\unity_vibe_accept.ps1 `
  -ProjectPath D:\Workspace\UnitySimpleDemo `
  -Project UnitySimpleDemo `
  -Config .\validation-config.yaml
```

Or run the visual gate directly:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\unity_visual_prefab_gate.ps1 `
  -Project UnitySimpleDemo `
  -ScenePath "Assets/Scenes/SampleScene.unity" `
  -EnterPlayMode `
  -PrefabResource "HorseArcherPrefabs/PlayerMount" `
  -RequiredChildPath "Visuals/HorseRoot","Visuals/HorseRoot/RiderHips/RiderTorso/RightArm/Muzzle" `
  -RuntimeProbeFile ".\examples\player-mount-runtime-probe.csx" `
  -ValidateSceneBasics `
  -RequiredSceneComponentType "HorseArcherPlayerController" `
  -AnalyzeScreenshot `
  -ScreenshotName "player-mount-visual-gate" `
  -ReportPath ".\visual-gate-report.json"
```

The command exits non-zero when it finds blockers such as missing materials, null shaders, missing child paths, missing script references, missing runtime objects or components, no active camera, no active renderers, screenshot failure, magenta-like pixels, blank/sky-only captures, or runtime probe failure.

If the tool probe returns `tool_count = 0`, do not immediately mark the bridge unusable. On this machine that can be a transient discovery gap. Re-probe once and confirm with one tiny command such as `read_console` or `manage_editor action=stop`.

Then test one tiny command:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\unity_http_probe.ps1 `
  -Instance 183fee18e951e05e `
  -CommandType manage_editor `
  -ParamsJson '{"action":"stop"}'
```

If shell quoting is awkward, the helper also accepts loose `key=value` pairs:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\unity_http_probe.ps1 `
  -Instance 183fee18e951e05e `
  -CommandType manage_editor `
  -ParamsJson action=stop
```

For `execute_code`, use the confirmed envelope:

```powershell
$body = @{
  type = 'execute_code'
  params = @{
    action = 'execute'
    code = 'return new { ok = true, frameCount = UnityEngine.Time.frameCount };'
  }
  unity_instance = '183fee18e951e05e'
} | ConvertTo-Json -Depth 8
```

And prefer plain executable snippets. Do not assume top-level `using` statements, helper methods, or full class declarations are accepted by the current CodeDom-backed route.

## Validation Philosophy

This repo deliberately avoids over-promising.

Before claiming runtime validation worked, confirm:

1. the bridge is up
2. Unity is registered under `/api/instances`
3. the installed tool families match the route you want to run
4. the evidence route you chose actually produced usable evidence

## Practical Evidence Order

Use this order:

1. hierarchy / object / console / runtime probe
2. material / shader / prefab asset probes when visual assets are involved
3. Unity-MCP screenshot through the currently installed camera route
4. project-side acceptance helper if the project exposes one
5. plain in-Unity render capture helper inside the project
6. OS-level window capture only as a last resort

For prefab-driven game work, do not accept passing tests alone. Check that the live PlayMode instance actually uses the expected prefab path, has no missing material slots, and produces a current screenshot without magenta/pink fallback rendering.

If a project exposes a menu helper such as `Tools/.../Capture Hero Shot`, do not describe the resulting evidence as a generic screenshot. Call it what it is: a project-side acceptance capture route.

On some Windows + DX12 setups, desktop capture can return the desktop or a black Unity client area. This repo treats that as a degraded route, not as a successful screenshot.

## CLI Reality Notes

The `unity-mcp` CLI is useful, but two real pitfalls were confirmed:

- `-f json` must appear before the subcommand
- `unity-mcp status` can crash on Chinese Windows terminals unless UTF-8 is forced

Use:

```powershell
$env:PYTHONIOENCODING='utf-8'
unity-mcp status
unity-mcp -f json instances
```

If `/api/custom-tools` or `unity-mcp -f json tool list` exposes a tool that the CLI command tree does not offer as a subcommand yet, switch to raw HTTP or the probe script instead of forcing the CLI path.

Also note that `tool_count = 0` is not always fatal. A live instance plus a successful tiny command is stronger evidence than a single empty tool-list response.

Do not use:

```powershell
unity-mcp instances -f json
```

## Included References

- [SKILL.md](SKILL.md)
- [SETUP.md](SETUP.md)
- [EXAMPLES.md](EXAMPLES.md)
- [references/manual-http-probe.md](references/manual-http-probe.md)
- [references/tool-reference.md](references/tool-reference.md)
- [references/visual-prefab-validation.md](references/visual-prefab-validation.md)
- [references/fallback-capture.md](references/fallback-capture.md)
- [references/in-unity-render-capture.md](references/in-unity-render-capture.md)
- [scripts/unity_http_probe.ps1](scripts/unity_http_probe.ps1)
- [scripts/unity_http_probe.cmd](scripts/unity_http_probe.cmd)
- [scripts/unity_validation_smoke.ps1](scripts/unity_validation_smoke.ps1)
- [scripts/unity_validation_smoke.cmd](scripts/unity_validation_smoke.cmd)
- [scripts/new_validation_config.ps1](scripts/new_validation_config.ps1)
- [scripts/new_unity_vibe_project.ps1](scripts/new_unity_vibe_project.ps1)
- [scripts/check_unity_vibe_project.ps1](scripts/check_unity_vibe_project.ps1)
- [scripts/run_self_tests.ps1](scripts/run_self_tests.ps1)

## Scope

This repo does not try to guarantee that every Unity project has:

- custom input tools
- UI DOM snapshot tools
- state reset helpers
- test backdoor helpers

Instead, it teaches the agent to probe what exists first, then route validation honestly.


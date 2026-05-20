# UI Desk

UI Desk is a local terminal workbench for coding-agent workflows.

## Run

```powershell
cd C:\Projects\UI
node .\src\index.js
```

Or double-click `Launch.bat`.

## Shortcuts

- `Enter`: send message
- `Ctrl+O`: open/close Knowledge tab
- `Ctrl+Tab`: switch tabs
- `Ctrl+N`: new chat tab
- `Ctrl+L`: clear current chat
- `Esc`: cancel streaming response or return focus to chat
- `Ctrl+K`: focus file search
- `Up` / `Down`: navigate file tree when file focus is active
- `Enter`: expand a folder or preview a file in the file tree
- `p`: cycle provider
- `m`: cycle model derived from the current provider
- `r`: toggle the most recent reasoning block

Knowledge shortcuts:

- `Up` / `Down`: select a Feed or Edge card
- `Enter`: open the selected card; inside detail view, close it
- `r`: mark the selected Feed article read/unread
- `a`: approve the selected Edge candidate
- `s`: save the selected Edge candidate for later
- `i`: ignore the selected Edge candidate
- `Esc`: close detail view or return to the workbench
- `u`: pull/import latest cloud Knowledge results

Knowledge Settings shortcuts:

- `Tab`: switch between Feed, Edge, and Settings
- `Up` / `Down`: select a setting row
- `Enter` / `Space`: toggle Feed topics or Edge categories
- `+` / `-`: adjust topic article caps, Edge daily card cap, or score threshold
- `Left` / `Right`: adjust the selected numeric setting

## Config

Settings are stored at:

```text
%USERPROFILE%\.ui_desk\config.json
```

The config remembers selected provider, selected model per provider, theme, and recent projects.

## Providers

- Codex CLI: uses `codex exec`
- OpenAI API: uses `OPENAI_API_KEY`
- Ollama: uses `http://127.0.0.1:11434/api/chat`
- Claude Code: uses `claude --print`

Models are filtered by provider. Ollama models do not appear under Codex, and Codex models do not appear under Ollama.

## Legacy App

`CenterUI.exe` is left untouched as the previous packaged browser app. The new source implementation lives under `src\`.

## Knowledge

Local storage:

```text
C:\Projects\UI_Desk\knowledge
```

Initialize proposal files:

```powershell
node .\scripts\knowledge-init.js
```

Approve the v1 source list:

```powershell
node .\scripts\knowledge-approve-sources.js
```

Run the daily pipeline locally:

```powershell
node .\scripts\knowledge-daily.js
```

The TUI Knowledge view opens with `Ctrl+O` and shows:

- Feed: saved article cards grouped by topic metadata
- Edge: scored improvement candidates with compatibility, momentum, risk, integration effort, and expected gain bars

Source lists are proposal-only until approved:

```text
C:\Projects\UI_Desk\knowledge\feed\source_proposals.json
C:\Projects\UI_Desk\knowledge\edge\source_proposals.json
```

After approval, save final lists as:

```text
C:\Projects\UI_Desk\knowledge\feed\sources.json
C:\Projects\UI_Desk\knowledge\edge\sources.json
```

Candidate actions are explicit and never install anything automatically:

```powershell
node .\scripts\knowledge-action.js approve <candidate-id>
node .\scripts\knowledge-action.js save <candidate-id>
node .\scripts\knowledge-action.js ignore <candidate-id>
```

`approve` adds the candidate to `active_stack.json`, `save` copies it to the watchlist, and `ignore` adds it to `ignored.json` while adjusting feedback weights.

The same actions are also available directly in the TUI from the Knowledge Edge subtab with `a`, `s`, and `i`.

The Knowledge Settings subtab can edit `sources.json` without hand-editing JSON. It updates both the local store in `C:\Projects\UI_Desk\knowledge` and the repo mirror in `C:\Projects\UI\knowledge`; commit and push after changing settings if you want GitHub Actions to use them.

Edge scoring now inspects GitHub candidates before recommending them:

- README content and install commands
- Dependency files such as `package.json`, `pyproject.toml`, `requirements.txt`, `Cargo.toml`, and `go.mod`
- GitHub Actions workflow presence
- Test/CI mentions
- License metadata and obvious setup/risk flags

The full README is saved into each candidate Markdown file for offline review.

Summaries and embeddings:

- If `OPENAI_API_KEY` is set, Feed uses `UI_DESK_SUMMARY_MODEL` or `gpt-4o-mini`.
- If `OPENAI_API_KEY` is set, Edge uses `UI_DESK_EMBEDDING_MODEL` or `text-embedding-3-small`.
- Without an API key, the pipeline falls back to local extractive summaries and a local lightweight article index.

GitHub Actions workflow scaffold:

```text
.github\workflows\knowledge-daily.yml
```

Local/cloud sync:

- The app keeps your main local Knowledge store at `C:\Projects\UI_Desk\knowledge`.
- The GitHub repo stores the cloud mirror at `C:\Projects\UI\knowledge`.
- Opening the Knowledge tab runs a safe `git pull --ff-only` when `C:\Projects\UI` is connected to a remote repo, then imports newer repo Knowledge files back into `C:\Projects\UI_Desk\knowledge`.

Useful commands:

```powershell
node .\scripts\knowledge-export.js
node .\scripts\knowledge-import.js
node .\scripts\cloud-check.js
```

Cloud setup steps:

1. Create an empty private GitHub repository in the browser.
2. In PowerShell:

```powershell
cd C:\Projects\UI
git add .
git commit -m "Initial UI Desk"
git branch -M main
git remote add origin https://github.com/<your-user>/<your-repo>.git
git push -u origin main
```

3. In GitHub, open the repository settings and add an Actions secret named `OPENAI_API_KEY`.
4. Optional: add any other API keys later as the source list grows. The built-in `GITHUB_TOKEN` is already available to Actions automatically.
5. In GitHub, open Actions -> Knowledge Daily Sync -> Run workflow once.
6. Leave the cron enabled for the daily 07:00 Europe/Berlin run.
7. Back on your laptop, opening Knowledge with `Ctrl+O` will pull/import new cloud results when the repo is connected.

Current machine note: GitHub CLI (`gh`) is not installed, so the setup above uses the browser and plain `git`.

Old short checklist:

1. Push this project to a GitHub repository.
2. Add repository secrets: `OPENAI_API_KEY` and optionally `GITHUB_TOKEN` if you want higher GitHub API limits.
3. Approve source proposals and commit `knowledge/feed/sources.json` plus `knowledge/edge/sources.json`.
4. Run the workflow manually once from GitHub Actions.
5. Leave the cron enabled for the daily 07:00 Europe/Berlin run.

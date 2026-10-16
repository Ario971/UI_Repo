---
id: "hungduong-projects/brand-studio"
name: "hungduong-projects/brand-studio"
url: "https://github.com/hungduong-projects/brand-studio"
date: "2026-10-16"
source: "GitHub Search API"
category: "github_discovery"
kind: "agent_framework"
compatibility: 84
momentum: 52
risk: 24
integration_effort: 40
expected_gain: 77
composite: 72
replacement_target: ""
related_articles: [{"title":"Show HN: Open Components – UI Components standard for people, devs and AI agents","date":"2026-10-10","topic":"AI agents","similarity":0.184,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-10-10/06-show-hn-open-components-ui-components-standard-for-people-devs-and-ai-.md"}]
pros: ["Recently updated (2026-10-16)","MIT license","2 GitHub stars","GitHub Actions/CI detected"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 3
dependency_files: [{"name":"package.json","summary":"deps @axe-core/playwright, @types/react, @types/react-dom, playwright-core, pptxgenjs, typescript; scripts dev, build, typecheck, test, e2e, a11y, check:brand, pack:ui"}]
install_commands: ["npm install","npm run dev","npm run check:brand","npm test","npm run build","npm run typecheck"]
risk_flags: []
status: "new"
---

# hungduong-projects/brand-studio

Brand Studio: React UI components, brand-design workflow, assistant plugin, and live docs.

URL: https://github.com/hungduong-projects/brand-studio

## Why it matters
You saved an article on 2026-10-10 about AI agents; this candidate overlaps with "Show HN: Open Components – UI Components standard for people, devs and AI agents" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-10-16)
+ MIT license
+ 2 GitHub stars
+ GitHub Actions/CI detected

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 3

Dependency files:
- package.json: deps @axe-core/playwright, @types/react, @types/react-dom, playwright-core, pptxgenjs, typescript; scripts dev, build, typecheck, test, e2e, a11y, check:brand, pack:ui

Install commands found:
- npm install
- npm run dev
- npm run check:brand
- npm test
- npm run build
- npm run typecheck

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# Brand Studio

Brand Studio turns business facts and visitor purpose into a durable brand contract, then applies that contract across websites and other creative artifacts.

[![Brand Studio UI documentation homepage showing components in three demo brands](assets/readme/brand-studio-ui.webp)](https://brandstudio.js.org/)

[Live docs](https://brandstudio.js.org/) · [Component catalogue](https://brandstudio.js.org/docs/) · [Examples](https://brandstudio.js.org/examples/) · [npm package](https://www.npmjs.com/package/@brand-studio/ui)

It combines a design workflow, an optional accessible React UI package and public examples in one workspace. The system preserves a brand's positioning, voice, typography, colour logic, imagery and signature devices without forcing every output into one visual template or package.

## Products

| Product | Location | Current status |
|---|---|---|
| Brand Studio UI | [packages/ui](packages/ui/README.md) | 105 typed React components for apps, AI agents, effects, story pages and product pages |
| Brand Studio plugin | [plugins/brand-studio](plugins/brand-studio/README.md) | Brand Studio skills (brand-design, take-apart, check-visual, post-video) with Codex and Claude manifests |
| Showcase | [apps/showcase](apps/showcase/) | Interactive component library and completed brand studies |
| Docs | [apps/docs](apps/docs/) | Public component docs: live previews in any demo brand, props and copyable code |
| Public examples | [examples](examples/README.md) | Curated standalone proofs, currently focused on authored motion |

Install the published [`@brand-studio/ui`](https://www.npmjs.com/package/@brand-studio/ui) package with npm, pnpm, Yarn or Bun. Browse the [component documentation](https://brandstudio.js.org/docs/).

## Run

Requires Node.js 22.12 or newer and npm.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite.

```sh
npm run check:brand
npm test
npm run build
npm run typecheck
```

## License

Source code is MIT. Third-party assets keep their own terms; see the `PROVENANCE.md` file next to each.


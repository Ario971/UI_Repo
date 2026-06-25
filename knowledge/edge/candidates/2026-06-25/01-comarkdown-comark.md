---
id: "comarkdown/comark"
name: "comarkdown/comark"
url: "https://github.com/comarkdown/comark"
date: "2026-06-25"
source: "GitHub Search API"
category: "github_discovery"
kind: "ai_dev_tool"
compatibility: 80
momentum: 94
risk: 14
integration_effort: 56
expected_gain: 69
composite: 77
replacement_target: ""
related_articles: [{"title":"Show HN: Pagecast – Publish Markdown/HTML Reports to Cloudflare Pages","date":"2026-06-18","topic":"AI dev tools","similarity":0.257,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-06-18/13-show-hn-pagecast-publish-markdown-html-reports-to-cloudflare-pages.md"},{"title":"jhwreal/wechat-article-pipeline-skill","date":"2026-05-28","topic":"AI agents","similarity":0.248,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-05-28/13-jhwreal-wechat-article-pipeline-skill.md"},{"title":"llm011/ethan-agent","date":"2026-06-20","topic":"AI dev tools","similarity":0.216,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-06-20/93-llm011-ethan-agent.md"}]
pros: ["Recently updated (2026-06-25)","MIT license","787 GitHub stars","GitHub Actions/CI detected"]
cons: ["Integration may take more than a quick install"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 4
dependency_files: [{"name":"package.json","summary":"deps @comark/ansi, @release-it/conventional-changelog, @types/node, @vitejs/plugin-vue, comark, markdown-exit, markdown-it, mitata; scripts dev, dev:playground, dev:prepare, dev:html, dev:react, dev:svelte, dev:angular, dev:ansi"}]
install_commands: ["npm install @comark/vue katex","pnpm add @comark/vue katex","npm install @comark/react katex","pnpm add @comark/react katex","npm install @comark/svelte katex","pnpm add @comark/svelte katex"]
risk_flags: []
status: "new"
---

# comarkdown/comark

A high-performance Markdown parser and renderer for Vue, React, Svelte, HTML and ANSI.

URL: https://github.com/comarkdown/comark

## Why it matters
You saved an article on 2026-06-18 about AI dev tools; this candidate overlaps with "Show HN: Pagecast – Publish Markdown/HTML Reports to Cloudflare Pages" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-06-25)
+ MIT license
+ 787 GitHub stars
+ GitHub Actions/CI detected

## Cons
- Integration may take more than a quick install

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 4

Dependency files:
- package.json: deps @comark/ansi, @release-it/conventional-changelog, @types/node, @vitejs/plugin-vue, comark, markdown-exit, markdown-it, mitata; scripts dev, dev:playground, dev:prepare, dev:html, dev:react, dev:svelte, dev:angular, dev:ansi

Install commands found:
- npm install @comark/vue katex
- pnpm add @comark/vue katex
- npm install @comark/react katex
- pnpm add @comark/react katex
- npm install @comark/svelte katex
- pnpm add @comark/svelte katex

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
<img src="https://github.com/comarkdown/comark/blob/main/assets/banner.jpg" width="100%" alt="Comark banner" />

# comark

[![npm version](https://img.shields.io/npm/v/comark?color=black)](https://npmx.dev/comark)
[![npm downloads](https://img.shields.io/npm/dm/comark?color=black)](https://npm.chart.dev/comark)
[![CI](https://img.shields.io/github/actions/workflow/status/comarkdown/comark/ci.yml?branch=main&color=black)](https://github.com/comarkdown/comark/actions/workflows/ci.yml)
[![Documentation](https://img.shields.io/badge/Documentation-black?logo=readme&logoColor=white)](https://comark.dev)
[![license](https://img.shields.io/github/license/comarkdown/comark?color=black)](https://github.com/comarkdown/comark/blob/main/LICENSE)

A high-performance markdown parser and renderer with Vue, React, Svelte, Angular, HTML and ANSI terminal.

## Features

- 🚀 Fast markdown-exit based parser
- 📦 Stream API for buffered parsing
- 🔧 Comark component syntax support
- 🔒 Auto-close unclosed markdown syntax (perfect for streaming)
- 📝 Frontmatter parsing (YAML)
- 📑 Automatic table of contents generation
- 🎯 Full TypeScript support

## Usage

### Vue

```bash
npm install @comark/vue katex
# or
pnpm add @comark/vue katex
```

```vue
<script setup lang="ts">
import { Comark } from '@comark/vue'
import math, { Math } from '@comark/vue/plugins/math'

const chatMessage = ...
</script>

<template>
  <Comark :components="{ Math }" :plugins="[math()]">{{ chatMessage }}</Comark>
</template>
```

### React

```bash
npm install @comark/react katex
# or
pnpm add @comark/react katex
```

```tsx
import { Comark } from '@comark/react'
import math, { Math } from '@comark/react/plugins/math'

function App() {
  const chatMessage = ...
  return <Comark components={{ Math }} plugins={[math()]}>{chatMessage}</Comark>
}
```

### Svelte

```bash
npm install @comark/svelte katex
# or
pnpm add @comark/svelte katex
```

```svelte
<script lang="ts">
  import { Comark } from '@comark/svelte'
  import math, { Math } from '@comark/svelte/plugins/math'

  const chatMessage = ...
</script>

<Comark markdown={chatMessage} components={{ math: Math }} plugins={[math()]} />
```

### Angular

```bash
npm install @comark/angular katex
# or
pnpm add @comark/angular katex
```

```typescript
import { Component } from '@angular/core'
import { ComarkComponent } from '@comark/angular'
import math, { Math } from '@comark/angular/plugins/math'

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [ComarkComponent],
  template: `<comark [markdown]="chatMessage" [components]="{ Math }" [plugins]="[math()]" />`,
})
export class ChatComponent {
  chatMessage = ...
}
```

### HTML (No Framework)

```bash
npm install @comark/html
# or
pnpm add @comark/html
```

```js
import { render } from '@comark/html'

const chatMessage = ...

const html = await render(chatMessage)
```


## Agent skill

Coding agents can install the Comark skill from the docs site:

```bash
npx skills add https://comark.dev
```

See [Installation](https://comark.dev/getting-started/installation) on comark.dev for details.

## License

Made with ❤️

Published under [MIT License](https://github.com/comarkdown/comark/blob/main/LICENSE).


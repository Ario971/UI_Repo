---
id: "qrdxinc/qrdx"
name: "qrdxinc/qrdx"
url: "https://github.com/qrdxinc/qrdx"
date: "2026-11-19"
source: "GitHub Search API"
category: "github_discovery"
kind: "mcp_server"
compatibility: 92
momentum: 77
risk: 40
integration_effort: 48
expected_gain: 87
composite: 77
replacement_target: ""
related_articles: [{"title":"Show HN: ZTHR – what replaces code review when AI agents write all the code","date":"2026-11-10","topic":"AI agents","similarity":0.263,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-11-10/09-show-hn-zthr-what-replaces-code-review-when-ai-agents-write-all-the-co.md"},{"title":"AIBeginnerX/oh-our-pi-desktop","date":"2026-10-20","topic":"AI dev tools","similarity":0.251,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-10-20/11-aibeginnerx-oh-our-pi-desktop.md"},{"title":"Show HN: Omnara – Open-source alternative to Claude Managed Agents","date":"2026-10-21","topic":"AI agents","similarity":0.245,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-10-21/06-show-hn-omnara-open-source-alternative-to-claude-managed-agents.md"}]
pros: ["Recently updated (2026-11-19)","AGPL-3.0 license","27 GitHub stars","GitHub Actions/CI detected"]
cons: ["README mentions credentials or API tokens","README mentions telemetry/analytics"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 3
dependency_files: [{"name":"package.json","summary":"deps @biomejs/biome, @repo/typescript-config, @types/node, husky, knip, tsup, turbo, typescript; scripts build, build:qrdx, dev, check, fix, test, typecheck, typecheck:app"}]
install_commands: ["claude mcp add --transport http qrdx https://mcp.qrdx.dev/mcp","npm install qrdx","npx @qrdx/cli generate \"https://qrdx.dev\" -o qr.svg","npx @qrdx/cli generate \"https://qrdx.dev\" -o qr.png --body circle --eye rounded --size 1024","git clone https://github.com/qrdxinc/qrdx.git && cd qrdx","docker compose up -d --build"]
risk_flags: ["README mentions credentials or API tokens","README mentions telemetry/analytics"]
status: "new"
---

# qrdxinc/qrdx

Open-source QR code platform: free static codes with no sign-up or watermark, dynamic codes with hosted pages and scan analytics, a REST API, image API, MCP server, CLI and React library. Self-hostable.

URL: https://github.com/qrdxinc/qrdx

## Why it matters
You saved an article on 2026-11-10 about AI agents; this candidate overlaps with "Show HN: ZTHR – what replaces code review when AI agents write all the code" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-11-19)
+ AGPL-3.0 license
+ 27 GitHub stars
+ GitHub Actions/CI detected

## Cons
- README mentions credentials or API tokens
- README mentions telemetry/analytics

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 3

Dependency files:
- package.json: deps @biomejs/biome, @repo/typescript-config, @types/node, husky, knip, tsup, turbo, typescript; scripts build, build:qrdx, dev, check, fix, test, typecheck, typecheck:app

Install commands found:
- claude mcp add --transport http qrdx https://mcp.qrdx.dev/mcp
- npm install qrdx
- npx @qrdx/cli generate "https://qrdx.dev" -o qr.svg
- npx @qrdx/cli generate "https://qrdx.dev" -o qr.png --body circle --eye rounded --size 1024
- git clone https://github.com/qrdxinc/qrdx.git && cd qrdx
- docker compose up -d --build

Risk flags:
- README mentions credentials or API tokens
- README mentions telemetry/analytics

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
<h1 align="center">QRdx</h1>

<p align="center">
  An open-source QR code platform. Making QR codes is free for everyone, with no sign-up, watermark or limit. Dynamic codes come with hosted pages and scan analytics. Developers get an image API, an MCP server, a REST API, a CLI and a React library. You can run it on your own server.
</p>

<p align="center">
  <a href="https://qrdx.dev/playground"><strong>Open the playground</strong></a> ·
  <a href="https://qrdx.dev/docs">Docs</a> ·
  <a href="https://qrdx.dev/community">Community</a> ·
  <a href="https://qrdx.dev/pricing">Pricing</a>
</p>

<p align="center">
  <a href="LICENSING.md"><img src="https://img.shields.io/badge/license-AGPL--3.0%20%2B%20MIT%20%2B%20commercial-blue" alt="License: AGPL-3.0-or-later app; MIT library, CLI, plugins, agent skill and registry components; commercial ee/ folders" /></a>
  <a href="https://www.npmjs.com/package/qrdx"><img src="https://img.shields.io/npm/v/qrdx?label=qrdx%20on%20npm&color=f80" alt="qrdx version on npm" /></a>
  <a href="https://github.com/qrdxinc/qrdx"><img src="https://img.shields.io/github/stars/qrdxinc/qrdx" alt="GitHub stars" /></a>
</p>

<a href="https://qrdx.dev/playground?preset=restaurantMenu#url=https://qrdx.dev/menu">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/assets/playground-dark.webp">
    <img alt="The QRdx playground: a URL in the Content tab, the built-in themes to start from, and a code in the Bistro Menu style in the preview with a scan score of 92, Great" src=".github/assets/playground-light.webp">
  </picture>
</a>

<p align="center"><sub>The playground with the Bistro Menu style. <a href="https://assets.qrdx.dev/static/videos/playground-style-export.00d36ff737.mp4">Watch a 15-second clip</a> (MP4) of a link going from a sample code to a styled, framed one.</sub></p>

## Try it

- [Playground](https://qrdx.dev/playground): design a code and download it. No account needed.
- [The menu card above](https://qrdx.dev/playground?preset=restaurantMenu#url=https://qrdx.dev/menu), ready to edit.
- [Community](https://qrdx.dev/community): frames and themes people shared, free to use.
- [Docs](https://qrdx.dev/docs) for the editor, dynamic codes, the APIs and self-hosting.

## What you can do

**Design and download, free and without an account**

- Start from one of 113 built-in themes, or build a look from 23 body patterns, 17 corner-eye shapes and 21 eye centers. Pick one of 1,032 frames, from 19 call-to-action frames to holiday, seasonal and industry designs, and edit its text right in the preview.
- Or give the code itself a shape: a circle of dots, a heart, or a silhouette traced in your browser from a PNG, JPEG or SVG you upload.
- Color the background, dots and eyes with a solid color, a linear, radial or angular gradient, a see-through color or a photo.
- Use the Art tab to blend a logo or photo into the dots (Logo QR and Image QR). They're vector art, so they export to every format. When you're signed in, AI art is there too.
- Describe the code you want in the Generate tab and an AI assistant designs it (5 free requests with an account).
- Check the scan score before you print. The playground decodes your design at 96, 160 and 320 px with simulated camera blur and tells you what to fix.
- Download PNG, JPG, WebP, BMP, ICO, SVG, PDF or EPS with no watermark. Print-ready PDF and EPS come at an exact size in mm or inches, in RGB or CMYK, with optional bleed and PDF crop marks. EPS can't carry a photo fill, so designs with one download as PDF, SVG or PNG.
- Browse the [community](https://qrdx.dev/community) for frames and themes, all shared under CC0.
- Free tools: a [bulk generator](https://qrdx.dev/tools/bulk) from CSV, a [scan checker](https://qrdx.dev/tools/scan-checker) for pictures of QR codes, a [print size calculator](https://qrdx.dev/tools/print-size) and a [QR code scanner](https://qrdx.dev/scan).

<table>
  <tr>
    <td width="50%" valign="top">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset=".github/assets/scan-check-dark.webp">
        <img alt="The Will it scan? panel: 92 out of 100, Great, with each check listed and a tip for small print" src=".github/assets/scan-check-light.webp" width="100%">
      </picture>
      <br><sub>The scan score, with a fix for each failed check.</sub>
    </td>
    <td width="50%" valign="top">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset=".github/assets/print-ready-dark.webp">
        <img alt="The print-ready download: code width in millimeters, RGB or CMYK, bleed, crop marks, and PDF, SVG or EPS" src=".github/assets/print-ready-light.webp" width="100%">
      </picture>
      <br><sub>Print-ready PDF and EPS at an exact size.</sub>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset=".github/assets/color-picker-dark.webp">
        <img alt="The color picker on the foreground: Solid, Linear, Radial, Angular and Image tabs, a two-stop linear gradient and its contrast on the background" src=".github/assets/color-picker-light.webp" width="100%">
      </picture>
      <br><sub>Solid colors, three kinds of gradient and photo fills.</sub>
    </td>
    <td width="50%" valign="top">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset=".github/assets/made-with-qrdx-dark.webp">
        <img alt="The Made with QRdx wall on the home page: framed codes, Image QR and Logo QR art, and themed codes" src=".github/assets/made-with-qrdx-light.webp" width="100%">
      </picture>
      <br><sub>Made with QRdx: real codes you can scan.</sub>
    </td>
  </tr>
</table>

**Dynamic codes and hosted pages, with a free account**

- Short links you can point somewhere else after printing, with scan analytics by country, city, device and browser.
- Hosted mobile pages: link lists, business pages, vCard Plus, menus, coupons, events, app links, forms with a response inbox, PDFs, galleries, audio and video.
- A dashboard for each workspace, with folders, tags, version history and a trash.
- Pro adds teams (owner, admin, member, billing and viewer roles), routing by device, country, language, time or scan count, A/B tests, passwords and expiry dates, custom domains and retargeting pixels. Business adds conversion tracking, webhooks and Slack or Discord alerts.

Free accounts get 10 dynamic codes and 3 hosted pages. Pro is $5 a month ($48 a year) and Business is $15 a month ($144 a year); see [pricing](https://qrdx.dev/pricing). Dynamic codes keep redirecting on every plan, even after a downgrade or a cancellation ([Never-Hostage Guarantee](https://qrdx.dev/guarantee)).

## For developers

**Image API.** A URL is the image, with no API key. Put it in a README, an `<img>` tag or an email:

```md
![QR code](https://api.qrdx.dev/v1/qr?data=https://github.com/you/repo)
```

Add `format=png` or `format=eps`, `size`, colors, patterns, a frame, a community item, or the whole design as JSON in `style`. See the [image API docs](https://qrdx.dev/docs/developers/image-api).

**MCP server.** Let an AI assistant design a code with a checked scan score, render it, look up styles and community frames, and build Wi-Fi, contact, email, SMS and location payloads. For Claude Code:

```bash
claude mcp add --transport http qrdx https://mcp.qrdx.dev/mcp
```

None of that needs an account. With a QRdx API key on the connection, `save_template` also saves a design to your workspace's themes. Cursor, VS Code and other clients: see the [MCP docs](https://qrdx.dev/docs/developers/mcp).

**REST API.** Create and edit dynamic codes (up to 100 per request on Pro and Business), read scan analytics, report conversions, subscribe to webhooks and read your saved themes under `https://api.qrdx.dev/v1`, with an API key or an OAuth 2.0 token. Every endpoint is in the [API reference](https://qrdx.dev/docs/developers/api), generated from the [OpenAPI document](https://qrdx.dev/openapi.json). Start with the [REST API docs](https://qrdx.dev/docs/developers/rest-api).

**React library.** [`packages/qrdx`](packages/qrdx) is the engine behind the playground.

```bash
npm install qrdx
```

```tsx
import { QRCodeSVG } from "qrdx";

export function Example() {
  return (
    <QRCodeSVG
      value="https://qrdx.dev"
      size={256}
      bodyPattern="circle"
      cornerEyePattern="gear"
      fgColor="#155DFC"
    />
  );
}
```


**CLI.** [`@qrdx/cli`](packages/cli) renders styled codes from the terminal or CI:

```bash
npx @qrdx/cli generate "https://qrdx.dev" -o qr.svg
npx @qrdx/cli generate "https://qrdx.dev" -o qr.png --body circle --eye rounded --size 1024
```

**More**

- [shadcn/ui components](https://qrdx.dev/docs/developers/shadcn): `npx shadcn@latest add @qrdx/qr-code` adds a QR code with PNG and SVG downloads, and `@qrdx/qr-code-scanner` adds a scanner. Older versions of the CLI take the full URL instead, such as `https://qrdx.dev/r/qr-code.json`.
- [Agent skill](skills): `generate-qr` teaches coding agents to make QR codes with the CLI.
- Plugins: the [Chrome extension](https://chromewebstore.google.com/detail/bpepiomjdoicpmbihlohodghdglkhicc) is in the Chrome Web Store. The [Figma](plugins/figma), [Raycast](plugins/raycast) and [Canva](plugins/canva) plugins install from source.

## Self-hosting

You can run the web app yourself, dynamic codes and hosted pages included, with Docker Compose (Postgres included) or with Node.js. That covers everything except the `ee/` features (workspace single sign-on, the audit log, the client portal and client reports, white-label pages with custom CSS, and conversion tracking): using those in production needs an enterprise agreement, and [Open core](#open-core) says how to get one. It needs three environment variables (`NEXT_PUBLIC_APP_URL`, `DATABASE_URL` and `BETTER_AUTH_SECRET`) and one way to sign in: a GitHub or Google OAuth app, or Resend for email sign-in codes. AI, payments, file storage, custom domains and the integrations are optional.

```bash
git clone https://github.com/qrdxinc/qrdx.git && cd qrdx
cp apps/app/.env.example .env    # set BETTER_AUTH_SECRET and a sign-in method
docker compose up -d --build
```

Read the [self-hosting guide](https://qrdx.dev/docs/self-hosting) before you run it in production. A self-hosted instance doesn't serve the docs: its docs links go to the same pages on qrdx.dev.

## Open core

Making QR codes is free for everyone, with no account, watermark or limit, and it stays free. QRdx is open core: the web app is open source under the AGPL, the library and the other developer tools are MIT, and the business features in the `ee/` folders (workspace single sign-on, the audit log, the client portal and client reports, white-label pages with custom CSS, and conversion tracking) are under the QRdx Commercial License.

QRdx earns from the paid plans on qrdx.dev (Pro and Business) and from enterprise agreements. An enterprise agreement also covers running the `ee/` features on your own server. To get one, use the [enterprise page](https://qrdx.dev/enterprise) or email [enterprise@qrdx.dev](mailto:enterprise@qrdx.dev).

## License

- The web app and everything else in this repository outside the folders below are licensed under the [GNU Affero General Public License v3.0 or later](LICENSE). If you run a modified version as a network service, you have to offer its source code to its users under the same license.
- The React library ([`packages/qrdx`](packages/qrdx), from 0.0.47), the CLI ([`packages/cli`](packages/cli), from 0.0.5), the plugins in [`plugins/`](plugins), the agent skill in [`skills/generate-qr`](skills/generate-qr) and the shadcn/ui registry components in [`packages/docs-assets/registry/qrdx`](packages/docs-assets/registry/qrdx) are MIT-licensed, each with its own `LICENSE` file. Earlier npm releases of the library and the CLI were AGPL-3.0-or-later.
- The `ee/` folders ([`apps/app/ee`](apps/app/ee), [`packages/auth/ee`](packages/auth/ee)) hold business features (workspace single sign-on, the audit log, the client portal and client reports, white-label pages with custom CSS, and conversion tracking) under the QRdx Commercial License in each folder's `LICENSE.md`. You can read, test and contribute to that code; using it in production needs a written agreement with QRdx. On a self-hosted instance these features stay off unless `QRDX_EE_LICENSE` holds a valid key, which QRdx issues with the agreement, with an expiry, and which your server checks offline.

[LICENSING.md](LICENSING.md) has the details.

The QRdx name and logo are trademarks. Read the [trademark policy](TRADEMARK.md) before you use them for a fork or a hosted service.

## Contributing

Bug reports, ideas and pull requests are welcome. [Open an issue](https://github.com/qrdxinc/qrdx/issues), or look for issues labeled `good first issue`. [CONTRIBUTING.md](CONTRIBUTING.md) covers local setup, the project layout and the checks to run. Report security issues privately, as [SECURITY.md](SECURITY.md) describes.

QRdx is a Bun and Turborepo monorepo: a Next.js app with React, TypeScript, Tailwind CSS, Drizzle on Postgres, Better Auth and the Vercel AI SDK. QR generation started from [qrcode.react](https://github.com/zpao/qrcode.react), and the playground layout was inspired by [tweakcn](https://github.com/jnsahaj/tweakcn).

If QRdx is useful to you, a star helps other people find it.


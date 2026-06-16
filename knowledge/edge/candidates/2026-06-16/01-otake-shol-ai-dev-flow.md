---
id: "otake-shol/ai-dev-flow"
name: "otake-shol/ai-dev-flow"
url: "https://github.com/otake-shol/ai-dev-flow"
date: "2026-06-16"
source: "GitHub Trending"
category: "github_discovery"
kind: "claude_skill"
compatibility: 92
momentum: 45
risk: 24
integration_effort: 40
expected_gain: 87
composite: 75
replacement_target: ""
related_articles: [{"title":"gHashTag/trios-mcp-rag","date":"2026-05-23","topic":"AI agents","similarity":0.314,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-05-23/53-ghashtag-trios-mcp-rag.md"},{"title":"xfzhu01/child-ai-tools","date":"2026-05-27","topic":"AI dev tools","similarity":0.241,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-05-27/04-xfzhu01-child-ai-tools.md"},{"title":"yashbansal-dev/OpenSeek","date":"2026-05-21","topic":"AI dev tools","similarity":0.241,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-05-21/32-yashbansal-dev-openseek.md"}]
pros: ["Recently updated (2026-06-16)","CC-BY-4.0 license","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 85
has_ci: true
has_tests: true
setup_steps_count: 3
dependency_files: [{"name":"package.json","summary":"deps textlint, textlint-rule-prh; scripts lint:delegation-package, eval:ai-review, check:quality-ratchet, scan:secrets, check:pr-size, lint:text, lint:text:fix"},{"name":"requirements.txt","summary":"deps mkdocs-material>=9.5, mkdocs-git-revision-date-localized-plugin>=1.2, mkdocs-static-i18n>=1.3"}]
install_commands: ["npm run lint:delegation-package","npm run scan:secrets","npm run eval:ai-review"]
risk_flags: []
status: "new"
---

# otake-shol/ai-dev-flow

AI前提のソフトウェア開発フローの型（MkDocs Material）

URL: https://github.com/otake-shol/ai-dev-flow

## Why it matters
You saved an article on 2026-05-23 about AI agents; this candidate overlaps with "gHashTag/trios-mcp-rag" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-06-16)
+ CC-BY-4.0 license
+ GitHub Actions/CI detected
+ README mentions tests or validation

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 3

Dependency files:
- package.json: deps textlint, textlint-rule-prh; scripts lint:delegation-package, eval:ai-review, check:quality-ratchet, scan:secrets, check:pr-size, lint:text, lint:text:fix
- requirements.txt: deps mkdocs-material>=9.5, mkdocs-git-revision-date-localized-plugin>=1.2, mkdocs-static-i18n>=1.3

Install commands found:
- npm run lint:delegation-package
- npm run scan:secrets
- npm run eval:ai-review

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# ai-dev-flow

AI Agent を前提に、自動化・AI・人間の責務を分ける開発フローの雛形。
Markdown で管理し、MkDocs Material で HTML 化してチームに展開する。

> この型が定義するのはフローの骨格まで。**個別具体の成果物定義（各成果物の中身・完了基準・テンプレートの具体値）は型本体には含めず、取り込んだチームが議論して取り決める。** → [チームで決めること](docs/team-decisions.md)

## 自分のチームで試す（クイックスタート）

ドキュメントを読むだけでなく**実際に回してみる**最短手順（10分）:

1. **取り込む** — このリポジトリの `.claude/skills/`（4スキル）と `docs/templates/delegation-package.md` を自分のプロジェクトにコピーする
2. **初日の2つだけ決める** — [不可逆領域リスト（A1）](docs/workshop-irreversible-list.md)と[データ境界（A5）](docs/team-decisions.md)。他は[採用パックの出発レンジ](docs/adoption.md#starter-pack)のままでよい
3. **1タスク流す** — `task-definition` スキルでラフな依頼を委譲パッケージに起こす → AI に委譲 → `spec-review` / `design-review` / `implementation-review` スキルでレビュー
4. **観察する** — 差し戻し回数・レビュー体感時間・「型がなければ速かった」回数を手で数える（[導入ガイド Step 3](docs/adoption.md)）

本格導入（4週間パイロット）は[導入ガイド](docs/adoption.md)、効果を反証可能に測るなら[実証プロトコル](docs/adoption.md#validation)へ。

## ドキュメントを見る

公開サイト（GitHub Pages）: <https://otake-shol.github.io/ai-dev-flow/>
main へのマージで自動デプロイされる。ローカルで確認したい場合は下記。

## ローカルプレビュー

```bash
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/mkdocs serve   # http://127.0.0.1:8000
```

## 実行キット

読むだけの雛形で終わらせないため、最小の実行キットを同梱している。

- `scripts/lint_delegation_package.py` — 委譲パッケージの必須項目・検証手段・曖昧表現を検査
- `scripts/check_pr_size.py` — PR サイズゲート
- `scripts/check_dependency_approval.py` — 依存追加時の人間承認ゲート
- `scripts/scan_secrets.py` — 最小シークレットスキャン（pre-commit + CI の初期防衛線。運用では gitleaks / Semgrep 等へ昇格）
- `scripts/eval_ai_review.py` — AI レビュー golden set の保存済み出力を採点
- `templates/starter-kit/` — パイロット計測・Tier 1 CI・AI レビュー eval を含む最小スターターキット

```bash
npm run lint:delegation-package
npm run scan:secrets
npm run eval:ai-review
```

ローカルの第一層として `.pre-commit-config.yaml` を同梱している。`pre-commit install` で
コミット前にも `scripts/scan_secrets.py` を実行できる。

## コメント機能（クローン側で任意 ON）

ドキュメント上で直接レビュー・議論したいチーム向けに、**環境変数だけで有効化できるコメント機能**を同梱している。**雛形本体（公開サイト）は既定 OFF**で、`DOCS_COMMENTS` 未設定ならビルド結果は従来どおりコメント無し。

| backend | 向き | 議論の公開範囲 |
|---------|------|--------------|
| `giscus` | 公開クローン向け（GitHub Discussions） | 公開（repo が public のときのみ閲覧可） |
| `hypothesis` | 内部限定レビュー向け（本文に直接注釈） | private group のメンバー限定 |

```bash
# 公開クローンで giscus を使う（値は giscus.app で取得）
export DOCS_COMMENTS=giscus
export DOCS_GISCUS_REPO="<org>/<repo>"
export DOCS_GISCUS_REPO_ID="..."
export DOCS_GISCUS_CATEGORY="Announcements"
export DOCS_GISCUS_CATEGORY_ID="..."
.venv/bin/mkdocs serve   # コメント欄付きでプレビュー

# 内部限定で Hypothes.is を使う（restricted=招待制 group を作成し team を招待）
export DOCS_COMMENTS=hypothesis
```

特定ページだけ無効化したいときは、そのページの front matter に `comments: false`。

> ⚠️ `giscus` のコメントは public リポジトリでは世界に公開される。社内固有・未公開の議論には `hypothesis` の private group か、private リポジトリでの別ビルドを使う。詳細・注意点は [クローン時の拡張（ローカライズガイド）](docs/team-decisions.md) を参照。

## 構成

```
docs/
├── index.md                  # フロー全体像・読む順・ゲート早見表
├── premises.md               # 前提（6つ）＋運用・人・組織への含意＋知的系譜
├── principles.md             # 原則（9つ）
├── glossary.md               # 用語集
├── overview.md               # 概要スライド（埋め込み）
├── walkthrough.md            # 通し例（1タスクが型を流れる様子）
├── phases/                   # フェーズ別ガイド（7工程: 事業接続点〜リリース運用）
├── templates/                # 空テンプレート（委譲パッケージ）
├── proposals/                # 決定ログ（提案→裁定→決定の記録 / _template.md）
├── references/               # 取り込んだ参考情報の出典メモ＋引用一覧
└── （運用ガイド）             # team-decisions / adoption / onboarding / coverage-map /
                              #   quality-gates / measurement / security / spec-as-source /
                              #   scrum-mapping / antipatterns / workshop-irreversible-list
.claude/skills/               # 実行できる雛形スキル（spec / design / implementation レビュー）
scripts/                      # 委譲パッケージ lint / Tier 1 gate / AI review eval
templates/starter-kit/         # クローン先にコピーできる最小実行キット
slides/                       # ダイジェストスライド（Marp, ソースは digest.md）
CHANGELOG.md                  # 雛形の変更履歴（クローン側の再同期用）
mkdocs.yml                    # サイト構成（MkDocs Material + i18n）
```

## ダイジェストスライド

チーム展開用のダイジェスト版スライドが `slides/` にある（Marp 形式、ソースは `digest.md`）。

**本編（前提・原則・フェーズ・運用）を更新したら、`slides/digest.md` への反映要否を確認し、必要なら同じ PR で更新して再生成する**こと。

```bash
cd slides
marp --no-stdin digest.md -o digest.pdf  --theme theme.css
marp --no-stdin digest.md -o digest.html --theme theme.css
marp --no-stdin digest.md -o digest.pptx --theme theme.css
# サイト埋め込み用にコピー（概要スライドページが参照）
cp digest.html ../docs/assets/overview-slides.html
cp digest.pdf  ../docs/assets/overview-slides.pdf
```

（要 [Marp CLI](https://github.com/marp-team/marp-cli): `brew install marp-cli`。テーマは `slides/theme.css` に同梱）

## 型をアップデートするには

1. 気になる情報を Issue 化（テンプレートあり）
2. `docs/proposals/` に提案 md を書いて PR
3. PR 上で取り込み要否を議論 → 採用なら本編へ反映してマージ
4. 採用提案の本編反映を [CHANGELOG.md](CHANGELOG.md) に追記する（クローンしたチームが差分を追える）
5. main へのマージで HTML が自動更新される

詳細: [決定ログの運用ルール](docs/proposals/index.md)。クローン側は四半期ごとに [CHANGELOG.md](CHANGELOG.md) の差分を確認する。

## ライセンスとコントリビューション

- 著作権: **© 2026 Takanori Takeuchi**。本リポジトリ配下の著作物は業務外で個人的に作成したもの。**初期著作物の権利は作成者に帰属し、マージされた貢献の著作権は各貢献者に帰属する**（いずれも CC BY 4.0 で提供）
- ライセンス: **CC BY 4.0**（[LICENSE](LICENSE)）。帰属表示付きで複製・改変・再配布自由。チーム・組織への展開を想定したライセンス選択
  - 帰属表示の例: 「AI前提のソフトウェアデリバリーフロー」© 2026 Takanori Takeuchi, [CC BY 4.0](LICENSE)（出典: <https://github.com/otake-shol/ai-dev-flow>）
- 特定の組織に依存しない**汎用的な開発フローの型**として公開している。外部からの **Pull Request は積極的には募らないが、受け付ける**（採否は作成者の裁量。大きな変更や改善アイデアは先に [Issue](https://github.com/otake-shol/ai-dev-flow/issues) で相談・フィードバックを歓迎し、採否は[決定ログ](docs/proposals/index.md)に記録する）。PR を送った時点で、その貢献を本プロジェクトと同じ **CC BY 4.0** で提供することに同意したものとみなす
- 自チーム向けに使いたい場合は**フォークしてご自由にどうぞ**（CC BY 4.0 の帰属表示付きで改変・再配布できる）


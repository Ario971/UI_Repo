---
id: "asama0101/spec-grill"
name: "asama0101/spec-grill"
url: "https://github.com/asama0101/spec-grill"
date: "2026-11-17"
source: "GitHub Trending"
category: "github_discovery"
kind: "mcp_server"
compatibility: 100
momentum: 45
risk: 29
integration_effort: 48
expected_gain: 87
composite: 75
replacement_target: ""
related_articles: [{"title":"Show HN: ZTHR – what replaces code review when AI agents write all the code","date":"2026-11-10","topic":"AI agents","similarity":0.255,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-11-10/09-show-hn-zthr-what-replaces-code-review-when-ai-agents-write-all-the-co.md"},{"title":"AIBeginnerX/oh-our-pi-desktop","date":"2026-10-20","topic":"AI dev tools","similarity":0.247,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-10-20/11-aibeginnerx-oh-our-pi-desktop.md"},{"title":"Show HN: Mantis – AI agents browse 36% faster than with Playwright MCP","date":"2026-11-06","topic":"AI agents","similarity":0.222,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-11-06/06-show-hn-mantis-ai-agents-browse-36-faster-than-with-playwright-mcp.md"}]
pros: ["Recently updated (2026-11-17)","MIT license","GitHub Actions/CI detected","README includes install commands"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 85
has_ci: true
has_tests: false
setup_steps_count: 3
dependency_files: [{"name":"pyproject.toml","summary":"python project; deps name, dynamic, requires-python, testpaths, addopts, xfail_strict, select, extend-select"}]
install_commands: ["git clone https://github.com/asama0101/spec-grill.git <任意のフォルダ>/spec-grill","claude mcp add playwright --scope user -- npx @playwright/mcp@latest --allow-unrestricted-file-access --output-dir \"$(python -c 'import tempfile; print(tempfile.gettempdir())')/playwright-mcp\"","git pull","claude mcp list","claude mcp remove playwright","claude --version"]
risk_flags: []
status: "new"
---

# asama0101/spec-grill

計画や設計を、ブラウザのフォームで答えながら詰めて、SPEC にまとめる Claude Code プラグイン

URL: https://github.com/asama0101/spec-grill

## Why it matters
You saved an article on 2026-11-10 about AI agents; this candidate overlaps with "Show HN: ZTHR – what replaces code review when AI agents write all the code" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-11-17)
+ MIT license
+ GitHub Actions/CI detected
+ README includes install commands

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: no
Setup steps estimate: 3

Dependency files:
- pyproject.toml: python project; deps name, dynamic, requires-python, testpaths, addopts, xfail_strict, select, extend-select

Install commands found:
- git clone https://github.com/asama0101/spec-grill.git <任意のフォルダ>/spec-grill
- claude mcp add playwright --scope user -- npx @playwright/mcp@latest --allow-unrestricted-file-access --output-dir "$(python -c 'import tempfile; print(tempfile.gettempdir())')/playwright-mcp"
- git pull
- claude mcp list
- claude mcp remove playwright
- claude --version

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# spec-grill

計画や設計を、ブラウザのフォームに答えながら詰めて、SPEC（仕様書）の 1 ファイルにまとめる Claude Code 用のプラグインです。Windows 11 専用です。

## 機能

Claude の質問に、ターミナルではなくブラウザのフォームで答えます。決めることがなくなるまで質問が続き、最後に承認すると SPEC ができます。

| できること | 内容 |
| --- | --- |
| フォームで答える | 候補を選ぶ、コメントを書く、あとで決める、聞き返す、のどれかで答えます |
| 推奨案を見る | 各質問に、Claude の推奨案と理由が付きます |
| 依頼文を渡す | 依頼文をテキストで渡します。参考にする資料は、本文にパスで書くと、Claude が元の場所のまま読みます（PDF・Word・PowerPoint・Excel・Markdown・テキスト） |
| 図と画面案を見る | 質問ごとのボタンで、図解や画面案を、ブラウザの別タブで見られます |
| SPEC を 1 ファイルで受け取る | 概要・流れ・受入条件・非目標・リスク・決定ログをまとめた Markdown が 1 つできます。ほかのプラグインや別のセッションに、そのまま渡せます |

## 前提条件

| 必要なもの | 内容 |
| --- | --- |
| OS | Windows 11。macOS と Linux は対象外です |
| Claude Code | [Claude Code](https://docs.claude.com/en/docs/claude-code) |
| Python | 3.12 以上。標準ライブラリだけで動くので、追加のライブラリは要りません |
| Node.js | Playwright MCP を `npx` で起動するために使います。`/spec-grill:doctor` は確認しません |
| Playwright MCP | ローカルの HTML を開き、送信を検知するために使います。このプラグインには同梱していないので、導入方法の手順 3 で登録します |
| ブラウザ | Chrome か Edge を推奨します |

## 導入方法

手順 1 から 4 を、順に行います。

### 1. マーケットプレイスを追加する

Claude Code で実行します。

```
/plugin marketplace add asama0101/spec-grill
```

GitHub を使わず、手元にコピーして入れるときは、次のようにします。

```bash
git clone https://github.com/asama0101/spec-grill.git <任意のフォルダ>/spec-grill
```

```
/plugin marketplace add <任意のフォルダ>/spec-grill
```

### 2. プラグインを入れる

```
/plugin install spec-grill@spec-grill
```

- 更新は `/plugin` の画面から行います。手元にコピーしたときは、先にそのフォルダで `git pull` します。
- 反映には Claude Code の再起動が必要です。手順 3 のあとに、まとめて 1 回行います。

### 3. Playwright MCP を登録する

Git Bash で実行します。

```bash
claude mcp add playwright --scope user -- npx @playwright/mcp@latest --allow-unrestricted-file-access --output-dir "$(python -c 'import tempfile; print(tempfile.gettempdir())')/playwright-mcp"
```

| 引数 | 役割 |
| --- | --- |
| `--allow-unrestricted-file-access` | `file://` の HTML を開くために必要です |
| `--output-dir` | Playwright MCP の記録の置き場所です。指定しないと作業フォルダに `.playwright-mcp/` ができるので、OS の一時フォルダ配下にします。上のコマンドが、一時フォルダの場所を Python で調べて埋めます |

- ブラウザを指定するときは、`--browser chrome` または `--browser msedge` を足します。
- すでに `playwright` を登録していると、上書きされません。[困ったとき](#困ったとき)の手順で登録し直してください。

登録したら、Claude Code を再起動します（手順 2 の反映も、ここで済みます）。`claude mcp list` に `playwright` が出れば成功です。

### 4. 動作環境を確認する

Claude Code の中で実行します。何も変更しません。

```
/spec-grill:doctor
```

結果は Claude が日本語で知らせます。ターミナルから直接確認するときは、手元にコピーしたリポジトリの直下で次を実行します。

```bash
python plugins/spec-grill/scripts/spec_grill.py doctor
```

確認する項目は、次の 5 つです。プラグインのバージョンは最後に出します。

| 項目 | 内容 |
| --- | --- |
| OS | Windows である |
| 実行環境 | Python 3.12 以上である |
| `claude` コマンド | PATH にある |
| Playwright MCP の登録 | `playwright` の名前で登録されていて、30 秒以内に応答する |
| `file://` の許可 | 登録に `--allow-unrestricted-file-access` が付いている |

あわせて、プラグインのバージョンを `[情報]` で表示します。GitHub（`asama0101/spec-grill`）をマーケットプレイスに登録していれば、最新版かも確認します。新しい版があっても `[NG]` にはならず、終了コードも 0 です。GitHub に接続できないときは、確認できなかったと表示するだけです。

項目ごとに `[OK]` か `[NG]` と理由を出し、対処があれば次の行に「→」で書きます。`[NG]` が 1 件でもあると、終了コード 3 で終わります。`[NG]` のあとの文言と同じ見出しを、[困ったとき](#困ったとき)で探してください。

## 使い方

### コマンド

Claude Code で使えるコマンドは、次の 2 つです。

| コマンド | 内容 |
| --- | --- |
| `/spec-grill:spec-grill [テーマ]` | フォームで質問に答えて、SPEC を作ります |
| `/spec-grill:doctor` | 動作に必要なものがそろっているか確認します。何も変更しません |

### 最初の 1 回

Claude Code で、作業フォルダを開いて、次のように頼みます。

```
/spec-grill:spec-grill API の認証方式を詰めたい
```

依頼文が足りないときは、Claude がターミナルで聞きます。そのあと、ブラウザに質問のフォームが開きます。「送信」を押すと、Claude が自動で検知して次へ進みます。「grill して」だけでは起動しません。`/spec-grill:spec-grill` を呼ぶか、「spec-grill で〜」「HTML で grilling」と書いたときだけ使われます。

### 進み方

承認するまで、次の 2 つの段階が順に進みます。

| 段階 | 内容 |
| --- | --- |
| 1. 質問ラウンド | 決めることがなくなるまで、質問のフォームを繰り返します。保留と聞き返しが残っている間は、終わりません |
| 2. 最終確認 | SPEC 案が出ます。「承認」で SPEC が保存され、Claude がそのパスを知らせます。「修正あり」を選ぶと、コメントを反映した案がまた出ます |

- 最終確認の SPEC 案は、出す前に、観点の違う 5 つのレビュアーが確かめます。
- 最終確認の画面の先頭に、「要点」と「確認してほしい点」が出ます。確認してほしい点は、あなたが質問で決めていないことです（Claude が補った仮定、レビューの指摘で直した点、保留から移した点）。なければ「確認してほしい点はありません」と出ます。
- SPEC 案の全文は、章ごとに折りたたまれています。「すべて開く」で、全部を開けます。
- 「承認」と「修正あり」の選択と「送信」は、画面の上に固定されています。長い SPEC でも、スクロールせずに押せます。
- 途中でやめるときは、ターミナルに「やめる」と入力します。SPEC は作られません。

### 依頼文と資料

- 依頼文には、何を詰めたいか、背景、分かっている制約を書きます。
- 参考にする資料があれば、パスで伝えます。Claude が、元の場所のまま読みます。コピーはしません。
- 読める資料は、PDF・Word・PowerPoint・Excel・Markdown・テキストです。PDF・Word・PowerPoint・Excel は、Claude の pdf・docx・pptx・xlsx スキルで読みます。
- PDF の図形は、ページを画像として読みます。PowerPoint と Excel は文字と図形の構造だけを読むので、図形が重要なときは PDF に書き出して渡してください。
- 存在しないパスや、フォルダのパスは読めません。そのときは、Claude が再入力を求めます。

### 質問への答え方

- 未回答の質問が残っていると、1 回目の「送信」で警告が出ます。このまま送るときは、もう一度「送信」を押します。
- 候補をクリックして選びます。候補の左の文字（`A`・`B`・`C`…）は、回答に使う記号です。
- 1 つだけ選ぶ質問は、マウスで選ぶと、次の質問へ移ります。矢印キーで動かしただけでは移りません。複数選べる質問は移りません。
- 緑の札「推奨」の候補が、Claude の推奨案です。理由は候補の下に出ます。
- 「コメント」を押すとコメント欄が開きます。候補を選んだときは、理由や条件の補足になります。候補を選ばずに書いたコメントは、それ自体が回答です。候補にない答えは、こちらに書いてください。
- 今決められないときは「あとで決める」、意味が分からないときは「聞き返す」を押します。聞き返しは次のラウンドで、Claude が説明か補足質問を返します。聞き返しが残っている間は、質問は終わりません。
- 選んだ候補を取り消して、コメントだけで答えるときは、「選択をクリア」を押します。

### 図と画面案を見る

SPEC の中身を図で見たいときや、ツール改善の画面案を見たいときは、フォームのボタンを押します。

- 質問ごとに「図で説明」と「画面案を見せて」のボタンがあります。最終確認のフォームにもあります。
- 押すと、Claude がその質問（最終確認では SPEC 案）の図や画面案を作り、ブラウザの別タブで開きます。内容はローカルに保存されるだけで、外には出ません。
- フォームは開いたままで、書きかけの入力は消えません。図は別のタブに開きます。見えないときは、ブラウザのタブを切り替えてください。見終わったら、フォームのタブに戻って答えます。
- ボタンは、押すと「依頼中…」に、図が開くと「✓ … 別タブに開きました」に変わります。開いたあとは、「ブラウザのタブを切り替えて見てください」と出ます。もう一度押すと、既存の図を開き直します（「×2」と出ます）。図のタブが開いたままのときは、新しいタブは増えず、タブを切り替えるよう案内が出ます。作り直してほしいときや、案を足してほしいときは、ターミナルで頼みます。コメント欄は、送信後に読まれます。
- 選択肢のある質問の図や画面案は、案が 1 つのタブにまとまります。ボタン（と矢印キー）で案を切り替えて見られます。案の名前は、フォームの選択肢の記号と同じで、最初に出るのは推奨案です。選択肢にない案を見たいときも、ターミナルで頼みます。
- 処理中にもう一度押すと「依頼中です」と出ます。送信したあとは押せません。
- Claude から「図を見せましょうか」と聞くこともあります。断ると、そのラウンドでは聞き直しません。
- 図と画面案の見た目は、`artifact-diagramming`（図）と `frontend-design`（画面案）の手引きが使えるときは、それに従って整えられます。`frontend-design` はプラグインです。入っていなくても動きます。既存の画面の改善案は、その画面の見た目に合わせます。

### 残るもの

承認すると、SPEC の 1 ファイルが残ります。

```
<作業フォルダ>/docs/spec-grill/specs/<日付>-<テーマ>-design.md
```

- 例: `docs/spec-grill/specs/2026-11-03-api-design-design.md`。フォルダがなければ作ります。同じテーマを同じ日に 2 回承認すると、末尾に連番（`-2`、`-3`）が付きます。既存のファイルは上書きしません。
- 図や画面案を見たときは、同じフォルダに `<日付>-<テーマ>-design.html` も残ります。通信なしで開ける 1 ファイルの HTML で、SPEC の概要の末尾の「図と画面案:」からたどれます。
- 実装計画は、別のスキル（superpowers の writing-plans など）で作ります。
- 概要の「入力」に、依頼文の要約と、渡した資料の元のパスが入ります。
- 依頼文の原文、質問と回答の履歴、入力ファイルは残りません。資料はコピーしないので、元のファイルを動かすと辿れなくなります。
- SPEC は、そのまま git の管理対象になります。機密を書いたときは、`.gitignore` に `docs/spec-grill/` を加えてください。

### 作業中のファイル

作業中のファイル（質問・回答・HTML）は、OS の一時フォルダの `spec-grill_<テーマ>_…` に置かれます。承認しても消さず、掃除は OS に任せます。

- 注意: 回答に秘密情報を書いたときは、OS が一時フォルダを掃除するまで残ります。気になるときは、該当のフォルダを自分で削除してください。
- アンインストールしても、SPEC と Playwright MCP の登録は残ります。Playwright MCP はほかのツールと共有するので、不要なときだけ `claude mcp remove playwright` を自分で実行します。

## 設定

設定ファイルはありません。

- 使うブラウザは、導入方法の手順 3 のコマンドで決まります。変えるときは、手順 3 を参照してください。

## 困ったとき

画面や `/spec-grill:doctor` に出る文言を、見出しにしています。

### [NG] OS

Windows 以外で実行しています。spec-grill は Windows 専用なので、Windows で使います。

### [NG] 実行環境: Python 3.12 以上が必要です。

原因: 動いた Python の版が 3.12 より古いです。

対処: Python 3.12 以上を入れて、`python --version` で版を確かめます。

### `python` コマンドが見つからない

原因: `python` が PATH にありません。この場合、`doctor` は動かないので、`[NG]` は出ません。

対処: `python3` が使えるなら、`python` を `python3` に読み替えます。Claude は、自動で読み替えます。どちらもなければ、Python 3.12 以上を入れます。

### [NG] claude コマンド: 見つかりません

原因: `claude` コマンドが PATH にありません。Playwright MCP の確認に使います。

対処: `claude --version` が通るターミナルで、もう一度実行します。

### [NG] Playwright MCP: 確認できません

原因: `playwright` の名前で登録されていないか、30 秒以内に応答がありません。

対処: `claude mcp list` で `playwright` を確認します。なければ、導入方法の手順 3 で登録し、Claude Code を再起動します。あるのに応答がないときは、`claude mcp get playwright` が接続できるかを確かめます。Playwright MCP の `browser_*` ツールがないと言われたときも、同じ対処です。

### [NG] file:// の許可: --allow-unrestricted-file-access が付いていません

原因: すでに `playwright` が登録されていて、`claude mcp add` が効いていません。`file://` のページも開けません。

対処: 次の順で登録し直します。

1. `claude mcp get playwright` で、いまの引数とスコープを確認します。
2. `claude mcp remove playwright --scope <スコープ>` で削除します。
3. 元の引数を残したまま、`--allow-unrestricted-file-access` と `--output-dir` を付けて登録し直します。
4. Claude Code を再起動します。

### スキルが起動しない

「spec-grill で〜」か「HTML で grilling」と書いて頼んでください。「grill して」だけでは、通常の `grilling` スキルが使われます。`/spec-grill:spec-grill` で直接呼ぶこともできます。入れた直後は、Claude Code を再起動し、`/plugin` で `spec-grill` が有効か確認します。

### 送信が検知されない

「送信」を押したあと、「送信しました」と出ているか確認してください。約 30 分待っても送信がないと、Claude が続行方法を聞きます。フォームの「Markdown をコピー」で、回答を貼る方法もあります。

### 図のボタンを押しても別タブが開かない

フォームの状態表示が「依頼中です」のままでないか確認し、ターミナルで Claude に伝えてください。Claude が図の HTML を作れなかった可能性があります。図の HTML は、作業用フォルダ（OS の一時フォルダ）の `figure-N.html` にあります。

### ファイルのパスが読めない

存在しないパスや、フォルダのパスは読めません。Claude から、再入力を求められます。

### SPEC が想定外の場所にできた

SPEC は、Claude Code を起動したフォルダの `docs/spec-grill/specs/` にできます。サブフォルダで Claude Code を起動していないか確認してください。

### 日本語のテーマ名が文字化けする

テーマ名は、ASCII の短い名前（例: `api-design`）にしてください。

## ライセンス・連絡先

[MIT](LICENSE)

`SKILL.md` の「ルール」節は、Matt Pocock 氏の [grilling スキル](https://github.com/mattpocock/skills/tree/main/skills/productivity/grilling)（MIT）を要約・翻案したものです。元のライセンス表記は [NOTICE](plugins/spec-grill/NOTICE) にあります。

不具合や要望は、[GitHub の Issues](https://github.com/asama0101/spec-grill/issues) に書いてください。


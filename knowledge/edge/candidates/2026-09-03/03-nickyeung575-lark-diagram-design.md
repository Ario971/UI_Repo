---
id: "nickyeung575/lark-diagram-design"
name: "nickyeung575/lark-diagram-design"
url: "https://github.com/nickyeung575/lark-diagram-design"
date: "2026-09-03"
source: "GitHub Search API"
category: "github_discovery"
kind: "ai_dev_tool"
compatibility: 87
momentum: 45
risk: 24
integration_effort: 32
expected_gain: 69
composite: 70
replacement_target: ""
related_articles: [{"title":"Show HN: Keen Code – an agentic-engineered coding agent","date":"2026-08-10","topic":"AI agents","similarity":0.214,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-10/06-show-hn-keen-code-an-agentic-engineered-coding-agent.md"},{"title":"WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution","date":"2026-08-27","topic":"AI agents","similarity":0.184,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-27/07-wikiskill-compiling-agent-experience-into-persistent-knowledge-for-ski.md"},{"title":"LamsonRetail/lsr-agent-platform","date":"2026-08-18","topic":"AI dev tools","similarity":0.181,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-08-18/13-lamsonretail-lsr-agent-platform.md"}]
pros: ["Recently updated (2026-09-03)","MIT license","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 1
dependency_files: []
install_commands: ["npm install -g @larksuite/cli","git clone https://github.com/nickyeung575/lark-diagram-design.git"]
risk_flags: []
status: "new"
---

# nickyeung575/lark-diagram-design

Codex skill for generating 39 native editable Feishu/Lark whiteboard diagram types

URL: https://github.com/nickyeung575/lark-diagram-design

## Why it matters
You saved an article on 2026-08-10 about AI agents; this candidate overlaps with "Show HN: Keen Code – an agentic-engineered coding agent" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-09-03)
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
- none detected

Install commands found:
- npm install -g @larksuite/cli
- git clone https://github.com/nickyeung575/lark-diagram-design.git

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# lark-diagram-design

[![Validate skill](https://github.com/nickyeung575/lark-diagram-design/actions/workflows/validate.yml/badge.svg)](https://github.com/nickyeung575/lark-diagram-design/actions/workflows/validate.yml)

把 [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) 的 39 类视觉语言，转换为飞书画板中的原生可编辑节点。

The skill turns 39 Diagram Design visual types into native, editable Feishu/Lark whiteboard nodes—shapes, text, groups, and connectors instead of flattened SVG or image output.

![Feishu-native swimlane example](docs/gallery/swimlane.jpg)

## 能做什么

- 生成流程图、架构图、甘特图、路线图、泳道图、数据图表等 39 类图表。
- 引导配置飞书应用、扫码授权及个人/公司账号切换。
- 创建新文档或写入指定画板；覆盖已有内容前要求明确确认。
- 写入后回导 `raw` 与 `preview`，验证节点数、预览及原生可编辑性。
- 批量生成并发布完整的 39 类样式库。

当前主题为石墨灰 × 靛蓝。完整类型目录见 [catalog.md](skills/lark-diagram-design/references/catalog.md)。

## 先按任务选图

| 你想表达什么 | 优先选择 |
|---|---|
| 系统由什么组成、边界在哪里 | 架构图、高层数据架构、部署图 |
| 一件事如何按条件推进 | 流程图、状态机、时序图 |
| 谁负责哪一步、如何交接 | 泳道图、多角色过程、数据流 |
| 任务何时开始、持续多久、依赖什么 | 甘特图、时间线、故事地图、依赖图 |
| 工作、用户或产品状态如何变化 | 看板、用户旅程、循环/飞轮 |
| 信息如何分层、包含或归属 | 树图、组织图、分层图、嵌套图 |
| 数值如何比较、分布或流动 | 条形图、折线图、散点图、雷达图、桑基图 |
| 为什么发生、能力如何演进 | 鱼骨图、Wardley Map、四象限 |

### 六个常用入口

| 架构图 | 流程图 | 甘特图 |
|---|---|---|
| [![Architecture](docs/gallery/architecture.jpg)](docs/gallery/architecture.jpg) | [![Flowchart](docs/gallery/flowchart.jpg)](docs/gallery/flowchart.jpg) | [![Gantt](docs/gallery/gantt.jpg)](docs/gallery/gantt.jpg) |
| 泳道图 | 用户旅程 | 依赖图 |
| [![Swimlane](docs/gallery/swimlane.jpg)](docs/gallery/swimlane.jpg) | [![Journey](docs/gallery/journey.jpg)](docs/gallery/journey.jpg) | [![Dependency](docs/gallery/dependency.jpg)](docs/gallery/dependency.jpg) |

## 39 款飞书原生示例

以下图片全部从写入后的飞书画板重新导出。它们用于选择信息结构；安装 Skill 后，实际交付仍是可逐个修改的文字、形状、分组和连接线。

<details>
<summary><strong>系统与流程（8）</strong> — 系统边界、步骤、状态与职责交接</summary>
<br>
<table>
<tr><td width="50%"><a href="docs/gallery/architecture.jpg"><img src="docs/gallery/architecture.jpg" alt="架构图"></a><br><strong>架构图</strong> · 系统组件、边界与连接</td><td width="50%"><a href="docs/gallery/it-state.jpg"><img src="docs/gallery/it-state.jpg" alt="IT 现状图"></a><br><strong>IT 现状图</strong> · 旧系统与现代化目标</td></tr>
<tr><td><a href="docs/gallery/flowchart.jpg"><img src="docs/gallery/flowchart.jpg" alt="流程图"></a><br><strong>流程图</strong> · 决策分支与处理路径</td><td><a href="docs/gallery/sequence.jpg"><img src="docs/gallery/sequence.jpg" alt="时序图"></a><br><strong>时序图</strong> · 参与者之间的按时消息</td></tr>
<tr><td><a href="docs/gallery/state.jpg"><img src="docs/gallery/state.jpg" alt="状态机"></a><br><strong>状态机</strong> · 状态、转换与守卫条件</td><td><a href="docs/gallery/er.jpg"><img src="docs/gallery/er.jpg" alt="ER 图"></a><br><strong>ER 图</strong> · 实体、字段和关系</td></tr>
<tr><td><a href="docs/gallery/timeline.jpg"><img src="docs/gallery/timeline.jpg" alt="时间线"></a><br><strong>时间线</strong> · 事件在时间轴上的位置</td><td><a href="docs/gallery/swimlane.jpg"><img src="docs/gallery/swimlane.jpg" alt="泳道图"></a><br><strong>泳道图</strong> · 跨角色流程与交接</td></tr>
</table>
</details>

<details>
<summary><strong>结构与组合（8）</strong> — 定位、层级、包含与构成</summary>
<br>
<table>
<tr><td width="50%"><a href="docs/gallery/quadrant.jpg"><img src="docs/gallery/quadrant.jpg" alt="四象限"></a><br><strong>四象限</strong> · 两轴定位与优先级</td><td width="50%"><a href="docs/gallery/nested.jpg"><img src="docs/gallery/nested.jpg" alt="嵌套图"></a><br><strong>嵌套图</strong> · 包含关系与范围层级</td></tr>
<tr><td><a href="docs/gallery/tree.jpg"><img src="docs/gallery/tree.jpg" alt="树图"></a><br><strong>树图</strong> · 父子层级</td><td><a href="docs/gallery/org-chart.jpg"><img src="docs/gallery/org-chart.jpg" alt="组织图"></a><br><strong>组织图</strong> · 汇报、所有权和升级路径</td></tr>
<tr><td><a href="docs/gallery/layers.jpg"><img src="docs/gallery/layers.jpg" alt="分层图"></a><br><strong>分层图</strong> · 抽象层或能力栈</td><td><a href="docs/gallery/venn.jpg"><img src="docs/gallery/venn.jpg" alt="韦恩图"></a><br><strong>韦恩图</strong> · 集合交集</td></tr>
<tr><td><a href="docs/gallery/pyramid.jpg"><img src="docs/gallery/pyramid.jpg" alt="金字塔或漏斗"></a><br><strong>金字塔/漏斗</strong> · 排名层级或转化递减</td><td><a href="docs/gallery/treemap.jpg"><img src="docs/gallery/treemap.jpg" alt="矩形树图"></a><br><strong>矩形树图</strong> · 面积编码的构成关系</td></tr>
</table>
</details>

<details>
<summary><strong>定量与空间（6）</strong> — 比较、趋势、分布与流量</summary>
<br>
<table>
<tr><td width="50%"><a href="docs/gallery/radar.jpg"><img src="docs/gallery/radar.jpg" alt="雷达图"></a><br><strong>雷达图</strong> · 多对象、多指标比较</td><td width="50%"><a href="docs/gallery/polar.jpg"><img src="docs/gallery/polar.jpg" alt="极坐标图"></a><br><strong>极坐标图</strong> · 周期类别与单系列数值</td></tr>
<tr><td><a href="docs/gallery/bar.jpg"><img src="docs/gallery/bar.jpg" alt="条形图"></a><br><strong>条形图</strong> · 类别之间的数量比较</td><td><a href="docs/gallery/line.jpg"><img src="docs/gallery/line.jpg" alt="折线图"></a><br><strong>折线图</strong> · 趋势、斜率或排名变化</td></tr>
<tr><td><a href="docs/gallery/scatter.jpg"><img src="docs/gallery/scatter.jpg" alt="散点图"></a><br><strong>散点图</strong> · 分布、相关性或气泡</td><td><a href="docs/gallery/sankey.jpg"><img src="docs/gallery/sankey.jpg" alt="桑基图"></a><br><strong>桑基图</strong> · 数量的分流与汇聚</td></tr>
</table>
</details>

<details>
<summary><strong>计划与体验（5）</strong> — 进度、工作状态与用户体验</summary>
<br>
<table>
<tr><td width="50%"><a href="docs/gallery/gantt.jpg"><img src="docs/gallery/gantt.jpg" alt="甘特图"></a><br><strong>甘特图</strong> · 任务、阶段和时间跨度</td><td width="50%"><a href="docs/gallery/kanban.jpg"><img src="docs/gallery/kanban.jpg" alt="看板"></a><br><strong>看板</strong> · 工作状态、WIP 与阻塞</td></tr>
<tr><td><a href="docs/gallery/journey.jpg"><img src="docs/gallery/journey.jpg" alt="用户旅程"></a><br><strong>用户旅程</strong> · 阶段、行为和体验情绪</td><td><a href="docs/gallery/story-map.jpg"><img src="docs/gallery/story-map.jpg" alt="故事地图"></a><br><strong>故事地图</strong> · 主干、版本切片与卡片</td></tr>
<tr><td><a href="docs/gallery/loop.jpg"><img src="docs/gallery/loop.jpg" alt="循环或飞轮"></a><br><strong>循环/飞轮</strong> · 自我强化闭环</td><td></td></tr>
</table>
</details>

<details>
<summary><strong>数据平台（6）</strong> — 数据栈、处理过程、分层与权限</summary>
<br>
<table>
<tr><td width="50%"><a href="docs/gallery/high-level.jpg"><img src="docs/gallery/high-level.jpg" alt="高层数据架构"></a><br><strong>高层数据架构</strong> · 端到端数据栈</td><td width="50%"><a href="docs/gallery/process.jpg"><img src="docs/gallery/process.jpg" alt="多角色过程"></a><br><strong>多角色过程</strong> · 顺序过程与数据交接</td></tr>
<tr><td><a href="docs/gallery/medallion.jpg"><img src="docs/gallery/medallion.jpg" alt="奖牌分层"></a><br><strong>奖牌分层</strong> · 数据质量层与访问策略</td><td><a href="docs/gallery/data-flow.jpg"><img src="docs/gallery/data-flow.jpg" alt="数据流"></a><br><strong>数据流</strong> · 角色范围的数据处理</td></tr>
<tr><td><a href="docs/gallery/dp-integration.jpg"><img src="docs/gallery/dp-integration.jpg" alt="数据平台集成"></a><br><strong>数据平台集成</strong> · 来源、核心和消费者拓扑</td><td><a href="docs/gallery/dp-security-matrix.jpg"><img src="docs/gallery/dp-security-matrix.jpg" alt="安全矩阵"></a><br><strong>安全矩阵</strong> · 角色或组件权限控制</td></tr>
</table>
</details>

<details>
<summary><strong>工程与模型（6）</strong> — 根因、演进、部署与代码关系</summary>
<br>
<table>
<tr><td width="50%"><a href="docs/gallery/fishbone.jpg"><img src="docs/gallery/fishbone.jpg" alt="鱼骨图"></a><br><strong>鱼骨图</strong> · 分类根因分析</td><td width="50%"><a href="docs/gallery/wardley.jpg"><img src="docs/gallery/wardley.jpg" alt="Wardley Map"></a><br><strong>Wardley Map</strong> · 价值链和能力演进</td></tr>
<tr><td><a href="docs/gallery/deployment.jpg"><img src="docs/gallery/deployment.jpg" alt="部署图"></a><br><strong>部署图</strong> · 区域、主机、制品和副本</td><td><a href="docs/gallery/dependency.jpg"><img src="docs/gallery/dependency.jpg" alt="依赖图"></a><br><strong>依赖图</strong> · 扇入、扇出和循环依赖</td></tr>
<tr><td><a href="docs/gallery/uml-class.jpg"><img src="docs/gallery/uml-class.jpg" alt="UML 类图"></a><br><strong>UML 类图</strong> · 类、成员、继承和组合</td><td><a href="docs/gallery/db-schema.jpg"><img src="docs/gallery/db-schema.jpg" alt="数据库模式图"></a><br><strong>数据库模式图</strong> · 表、约束、索引和外键</td></tr>
</table>
</details>

## 安装

要求：Codex、Python 3.10+、Node.js/npm、FFmpeg，以及 `lark-cli >= 1.0.87`。首次生成图表时，`npx` 需要联网获取固定兼容范围内的 `@larksuite/whiteboard-cli`；随后可使用本机缓存。

复杂 SVG 的原生切片化还需要一个栅格器：macOS 可直接使用系统 `sips`，Linux 安装 `librsvg2-bin`，Windows 可使用 ImageMagick。

```bash
npm install -g @larksuite/cli
```

最简单的方式是在 Codex 中说：

```text
Install the skill from https://github.com/nickyeung575/lark-diagram-design/tree/main/skills/lark-diagram-design
```

也可以手动安装：

```bash
git clone https://github.com/nickyeung575/lark-diagram-design.git
mkdir -p ~/.codex/skills
cp -R lark-diagram-design/skills/lark-diagram-design ~/.codex/skills/lark-diagram-design
```

重新开始一个 Codex 任务后即可使用。

## 使用

```text
使用 $lark-diagram-design 帮我连接飞书，并创建一张原生可编辑的项目流程图。
```

```text
把这份项目计划做成甘特图，使用公司账号，放到一个新的飞书文档里。
```

```text
参考 Diagram Design 的泳道图风格重画当前画板，保留所有节点可编辑。可以覆盖。
```

首次使用时，Skill 会检查本地依赖、飞书 profile、登录账号和所需权限。凭据由本机 `lark-cli` 管理，不写入项目文件。公司租户若禁止成员创建应用，仍需管理员创建或审批应用与权限。

## 原生交付保证

发布到飞书的最终画板只允许原生 `composite_shape`、`text_shape`、`connector`、`group` 等节点：

- `svg` 节点必须为 0；
- `image` 节点必须为 0；
- `z_index` 连续且唯一；
- 写入后必须重新导出并验收；
- 非空画板未经确认不得覆盖。

仓库内的 HTML/SVG 与截图是设计输入和视觉参考，不会作为扁平图片回写到最终画板。

## 本地验证

```bash
python3 skills/lark-diagram-design/scripts/test_package.py

python3 skills/lark-diagram-design/scripts/build_gallery.py \
  --repo-root /tmp/lark-diagram-design-test \
  --output-dir gallery

python3 skills/lark-diagram-design/scripts/validate_gallery.py \
  --repo-root /tmp/lark-diagram-design-test \
  --manifest gallery/manifest.json
```

## 许可与致谢

本项目的飞书连接、原生转换与发布代码使用 [MIT License](LICENSE)。内置的 Diagram Design 参考资产来自 [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)，按其 MIT License 分发；详情见 [第三方声明](THIRD_PARTY_NOTICES.md)。


import path from "node:path";
import { clear, color, clip, move, showCursor, stripAnsi, bar } from "./ansi.js";
import { buildVisibleTree, readPreview } from "../core/fileTree.js";
import { createTab, ensureModelForProvider } from "../core/tabs.js";
import { loadConfig, rememberProject, saveConfig } from "../core/config.js";
import { createProvider, modelList, providerIds, providerLabel } from "../providers/registry.js";
import { ensureKnowledgeLayout, knowledgeSummary } from "../knowledge/storage.js";
import { writeSourceProposals } from "../knowledge/proposals.js";
import { markArticleRead, readArticleDetail, toggleArticleRead } from "../knowledge/feedActions.js";
import { approveCandidate, ignoreCandidate, readCandidateDetail, saveCandidateForLater } from "../knowledge/actions.js";
import { pullAndImportKnowledge } from "../knowledge/gitSync.js";

export class UiDeskApp {
  constructor() {
    this.config = loadConfig();
    this.tabs = [createTab(this.config)];
    this.activeTabIndex = 0;
    this.focus = "chat";
    this.mode = "workbench";
    this.knowledgeSubtab = "feed";
    this.knowledgeCursor = { feed: 0, edge: 0 };
    this.knowledgeDetail = null;
    this.knowledgeScroll = 0;
    this.input = "";
    this.status = this.config.loadError || "Ready";
    this.streaming = false;
    this.abortController = null;
    this.needsRender = true;
    this.size = { columns: process.stdout.columns || 120, rows: process.stdout.rows || 34 };
    ensureKnowledgeLayout();
    writeSourceProposals();
  }

  get tab() {
    return this.tabs[this.activeTabIndex];
  }

  start() {
    process.stdin.setRawMode?.(true);
    process.stdin.resume();
    process.stdin.setEncoding("utf8");
    process.stdout.write("\x1b]0;UI Desk\x07");
    process.stdout.on("resize", () => {
      this.size = { columns: process.stdout.columns || 120, rows: process.stdout.rows || 34 };
      this.render();
    });
    process.stdin.on("data", (key) => this.handleKey(key));
    this.render();
  }

  stop() {
    process.stdout.write(`${color.reset}${showCursor()}\n`);
    process.stdin.setRawMode?.(false);
    process.exit(0);
  }

  handleKey(key) {
    if (key === "\x03") this.stop();
    if (key === "\x0e") return this.newTab();
    if (key === "\x0f") return this.toggleKnowledge();
    if (this.mode === "knowledge") return this.handleKnowledgeKey(key);
    if (key === "\x0c") return this.clearChat();
    if (key === "\x0b") return this.focusSearch();
    if (key === "\x1b") return this.cancelOrBlur();
    if (key === "\t" || key.includes("[27;5;9") || key.includes("[1;5I")) return this.nextTab();

    if (this.focus === "search") return this.handleSearchKey(key);
    if (this.focus === "files") return this.handleFileKey(key);
    return this.handleChatKey(key);
  }

  handleChatKey(key) {
    if (key === "\r") return this.send();
    if (key === "\x7f") {
      this.input = this.input.slice(0, -1);
      return this.render();
    }
    if (key === "\x1b[A") return this.focusFiles();
    if (key === "\x1b[B") return this.focusFiles();
    if (key === "\x1b[C") return this.cycleModel(1);
    if (key === "\x1b[D") return this.cycleProvider(1);
    if (key === "+") return this.newTab();
    if (key === "x") return this.closeTab();
    if (key === "p") return this.cycleProvider(1);
    if (key === "m") return this.cycleModel(1);
    if (key === "r") return this.toggleReasoning();
    if (key >= " " && key !== "\x7f") {
      this.input += key;
      return this.render();
    }
  }

  handleKnowledgeKey(key) {
    if (this.knowledgeDetail) {
      if (key === "\x1b" || key === "\r") {
        this.knowledgeDetail = null;
        this.knowledgeScroll = 0;
        return this.render();
      }
      if (key === "\x1b[A") {
        this.knowledgeScroll = Math.max(0, this.knowledgeScroll - 1);
        return this.render();
      }
      if (key === "\x1b[B") {
        this.knowledgeScroll += 1;
        return this.render();
      }
      return;
    }
    if (key === "\x1b") {
      this.mode = "workbench";
      return this.render();
    }
    if (key === "\t" || key.includes("[27;5;9") || key.includes("[1;5I") || key === "\x1b[C" || key === "\x1b[D") {
      this.knowledgeSubtab = this.knowledgeSubtab === "feed" ? "edge" : "feed";
      this.knowledgeDetail = null;
      this.knowledgeScroll = 0;
      return this.render();
    }
    if (key === "\x1b[A") return this.moveKnowledgeCursor(-1);
    if (key === "\x1b[B") return this.moveKnowledgeCursor(1);
    if (key === "\r") return this.openKnowledgeSelection();
    if (key === "r" && this.knowledgeSubtab === "feed") return this.toggleSelectedArticleRead();
    if (key === "a" && this.knowledgeSubtab === "edge") return this.applyEdgeAction("approve");
    if (key === "s" && this.knowledgeSubtab === "edge") return this.applyEdgeAction("save");
    if (key === "i" && this.knowledgeSubtab === "edge") return this.applyEdgeAction("ignore");
  }

  moveKnowledgeCursor(step) {
    const summary = knowledgeSummary();
    const list = this.knowledgeSubtab === "feed" ? summary.feedArticles : summary.edgeCandidates;
    const max = Math.max(0, list.length - 1);
    this.knowledgeCursor[this.knowledgeSubtab] = Math.max(0, Math.min(max, this.knowledgeCursor[this.knowledgeSubtab] + step));
    this.render();
  }

  openKnowledgeSelection() {
    const summary = knowledgeSummary();
    if (this.knowledgeSubtab === "feed") {
      const article = summary.feedArticles[this.knowledgeCursor.feed];
      if (!article) return;
      try {
        markArticleRead(article.url, true);
        this.knowledgeDetail = { type: "feed", item: readArticleDetail(article.url) };
        this.status = "Opened article";
      } catch (error) {
        this.status = error.message;
      }
    } else {
      const candidate = summary.edgeCandidates[this.knowledgeCursor.edge];
      if (!candidate) return;
      this.knowledgeDetail = { type: "edge", item: readCandidateDetail(candidate.id) };
      this.status = "Opened candidate";
    }
    this.knowledgeScroll = 0;
    this.render();
  }

  toggleSelectedArticleRead() {
    const summary = knowledgeSummary();
    const article = summary.feedArticles[this.knowledgeCursor.feed];
    if (!article) return;
    try {
      const updated = toggleArticleRead(article.url);
      this.status = updated.read ? "Marked article read" : "Marked article unread";
    } catch (error) {
      this.status = error.message;
    }
    this.render();
  }

  applyEdgeAction(action) {
    const summary = knowledgeSummary();
    const candidate = summary.edgeCandidates[this.knowledgeCursor.edge];
    if (!candidate) return;
    try {
      const handlers = {
        approve: approveCandidate,
        save: saveCandidateForLater,
        ignore: ignoreCandidate,
      };
      const updated = handlers[action](candidate.id);
      this.status = `${action}: ${updated.name}`;
    } catch (error) {
      this.status = error.message;
    }
    this.render();
  }

  handleSearchKey(key) {
    if (key === "\r") {
      this.focus = "files";
      return this.render();
    }
    if (key === "\x1b") {
      this.focus = "chat";
      return this.render();
    }
    if (key === "\x7f") {
      this.tab.fileSearch = this.tab.fileSearch.slice(0, -1);
      this.tab.fileCursor = 0;
      return this.render();
    }
    if (key >= " " && key !== "\x7f") {
      this.tab.fileSearch += key;
      this.tab.fileCursor = 0;
      return this.render();
    }
  }

  handleFileKey(key) {
    const rows = this.visibleFileRows();
    if (key === "\x1b[A") {
      this.tab.fileCursor = Math.max(0, this.tab.fileCursor - 1);
      return this.render();
    }
    if (key === "\x1b[B") {
      this.tab.fileCursor = Math.min(Math.max(0, rows.length - 1), this.tab.fileCursor + 1);
      return this.render();
    }
    if (key === "\r") {
      const row = rows[this.tab.fileCursor];
      if (!row) return;
      if (row.type === "directory") {
        if (this.tab.expanded.has(row.path)) this.tab.expanded.delete(row.path);
        else this.tab.expanded.add(row.path);
      } else {
        this.tab.selectedPath = row.path;
        this.tab.preview = readPreview(row.path);
      }
      return this.render();
    }
    if (key === "\x1b") {
      this.focus = "chat";
      return this.render();
    }
    if (key === "\x0b") return this.focusSearch();
  }

  cancelOrBlur() {
    if (this.streaming && this.abortController) {
      this.abortController.abort();
      this.status = "Cancelled streaming response";
      this.streaming = false;
      return this.render();
    }
    this.focus = "chat";
    this.render();
  }

  focusSearch() {
    this.focus = "search";
    this.render();
  }

  focusFiles() {
    this.focus = "files";
    this.render();
  }

  newTab() {
    this.tabs.push(createTab(this.config, { root: this.tab.root }));
    this.activeTabIndex = this.tabs.length - 1;
    this.input = "";
    this.status = "New chat tab";
    this.render();
  }

  closeTab() {
    if (this.tabs.length === 1) return;
    this.tabs.splice(this.activeTabIndex, 1);
    this.activeTabIndex = Math.max(0, this.activeTabIndex - 1);
    this.render();
  }

  nextTab() {
    this.activeTabIndex = (this.activeTabIndex + 1) % this.tabs.length;
    this.input = "";
    this.render();
  }

  clearChat() {
    this.tab.messages = [];
    this.tab.usage = { input: 0, output: 0, total: 0, reasoning: 0 };
    this.status = "Chat cleared";
    this.render();
  }

  cycleProvider(step) {
    const ids = providerIds();
    const index = ids.indexOf(this.tab.provider);
    this.tab.provider = ids[(index + step + ids.length) % ids.length];
    ensureModelForProvider(this.tab);
    this.config.selectedProvider = this.tab.provider;
    this.config.selectedModels[this.tab.provider] = this.tab.model;
    saveConfig(this.config);
    this.status = `Provider: ${providerLabel(this.tab.provider)}`;
    this.render();
  }

  cycleModel(step) {
    const models = modelList(this.tab.provider);
    const index = models.indexOf(this.tab.model);
    this.tab.model = models[(index + step + models.length) % models.length] || this.tab.model;
    this.config.selectedModels[this.tab.provider] = this.tab.model;
    saveConfig(this.config);
    this.status = `Model: ${this.tab.model}`;
    this.render();
  }

  toggleReasoning() {
    const target = [...this.tab.messages].reverse().find((message) => message.reasoning);
    if (target) {
      target.reasoningCollapsed = !target.reasoningCollapsed;
      this.render();
    }
  }

  toggleKnowledge() {
    this.mode = this.mode === "knowledge" ? "workbench" : "knowledge";
    this.knowledgeDetail = null;
    this.knowledgeScroll = 0;
    if (this.mode === "knowledge") {
      const sync = pullAndImportKnowledge();
      this.status = sync.message;
      return this.render();
    }
    this.status = this.mode === "knowledge" ? "Knowledge tab" : "Workbench";
    this.render();
  }

  async send() {
    const text = this.input.trim();
    if (!text || this.streaming) return;
    this.input = "";
    const tab = this.tab;
    tab.messages.push({ role: "user", content: text });
    const assistant = { role: "assistant", content: "", reasoning: "", reasoningCollapsed: false };
    tab.messages.push(assistant);
    this.streaming = true;
    this.abortController = new AbortController();
    this.status = "Streaming...";
    this.render();

    const provider = createProvider(tab.provider, {
      model: tab.model,
      cwd: tab.root,
      signal: this.abortController.signal,
    });

    try {
      for await (const event of provider.stream(tab.messages.filter((message) => message !== assistant))) {
        if (event.type === "reasoning-start") {
          assistant.reasoningCollapsed = false;
        } else if (event.type === "reasoning") {
          assistant.reasoning += event.text;
        } else if (event.type === "reasoning-end") {
          assistant.reasoningCollapsed = true;
        } else if (event.type === "text") {
          if (assistant.reasoning) assistant.reasoningCollapsed = true;
          assistant.content += event.text;
        } else if (event.type === "usage") {
          tab.usage = { ...tab.usage, ...event.usage };
        } else if (event.type === "error") {
          assistant.content += `\n[Error] ${event.text}`;
        }
        this.render();
      }
    } catch (error) {
      assistant.content += `\n[Error] ${error.message}`;
    } finally {
      this.streaming = false;
      this.abortController = null;
      this.status = "Ready";
      this.render();
    }
  }

  visibleFileRows() {
    return buildVisibleTree(this.tab.root, this.tab.expanded, this.tab.fileSearch);
  }

  render() {
    const { columns, rows } = this.size;
    const minCols = 80;
    if (columns < minCols || rows < 20) {
      process.stdout.write(`${clear()}Terminal too small. Resize to at least ${minCols}x20.${showCursor()}`);
      return;
    }

    const statusHeight = 1;
    const topHeight = 3;
    const bodyHeight = rows - statusHeight - topHeight;
    const leftWidth = Math.max(24, Math.floor(columns * 0.25));
    const rightWidth = columns - leftWidth - 1;
    const out = [clear()];

    out.push(this.renderTop(1, leftWidth, rightWidth));
    out.push(this.mode === "knowledge"
      ? this.renderKnowledgeBody(4, bodyHeight, columns)
      : this.renderBody(4, bodyHeight, leftWidth, rightWidth));
    out.push(this.renderStatus(rows, columns));
    process.stdout.write(out.join(""));
  }

  renderTop(row, leftWidth, rightWidth) {
    const tabLine = this.tabs.map((tab, index) => {
      const active = index === this.activeTabIndex;
      const label = `${active ? "[" : " "}${index + 1}:${tab.title}${active ? "]" : " "}`;
      return active ? `${color.accent}${label}${color.reset}` : `${color.gray}${label}${color.reset}`;
    }).join(" ");
    const right = ` ${tabLine}  ${color.gray}(+ Ctrl+N, Ctrl+Tab)${color.reset}`;
    return [
      move(row, 1), color.panel, clip(" UI Desk", leftWidth), color.reset, color.soft, clip(right.replace("(+ Ctrl+N, Ctrl+Tab)", "(+ Ctrl+N, x close, Ctrl+Tab)"), rightWidth + 1), color.reset,
      move(row + 1, 1), color.gray, clip(" Files / Search", leftWidth), color.reset,
      color.gray, clip(` ${providerLabel(this.tab.provider)} | ${this.tab.model}`, rightWidth + 1), color.reset,
      move(row + 2, 1), color.gray, "-".repeat(leftWidth), "+", "-".repeat(rightWidth), color.reset,
    ].join("");
  }

  renderBody(startRow, height, leftWidth, rightWidth) {
    const lines = [];
    const left = this.leftLines(height, leftWidth);
    const right = this.rightLines(height, rightWidth);
    for (let i = 0; i < height; i++) {
      lines.push(
        move(startRow + i, 1),
        left[i] || " ".repeat(leftWidth),
        color.gray,
        "|",
        color.reset,
        right[i] || " ".repeat(rightWidth),
      );
    }
    return lines.join("");
  }

  leftLines(height, width) {
    const rows = this.visibleFileRows();
    const lines = [];
    const searchLabel = this.focus === "search" ? `${color.inverse}${this.tab.fileSearch || "type search"}${color.reset}` : this.tab.fileSearch || "Ctrl+K search";
    lines.push(clip(` ${searchLabel}`, width));

    const listHeight = Math.max(4, height - 8);
    const start = Math.max(0, Math.min(this.tab.fileCursor - Math.floor(listHeight / 2), Math.max(0, rows.length - listHeight)));
    for (let i = 0; i < listHeight; i++) {
      const row = rows[start + i];
      if (!row) {
        lines.push(" ".repeat(width));
        continue;
      }
      const cursor = start + i === this.tab.fileCursor && this.focus === "files";
      const prefix = row.type === "directory" ? (row.expanded ? "v " : "> ") : "  ";
      const indent = " ".repeat(Math.min(row.depth * 2, 10));
      const name = row.depth === 0 ? path.basename(row.path) || row.path : row.name;
      const text = ` ${indent}${prefix}${name}`;
      lines.push(clip(cursor ? `${color.inverse}${text}${color.reset}` : text, width));
    }

    lines.push(clip(`${color.gray}${"-".repeat(width)}${color.reset}`, width));
    lines.push(clip(` Preview: ${path.basename(this.tab.selectedPath || "")}`, width));
    const preview = (this.tab.preview || "Select a file and press Enter.").split(/\r?\n/).slice(0, Math.max(1, height - lines.length));
    for (const line of preview) lines.push(clip(` ${color.gray}${line}${color.reset}`, width));
    return lines.slice(0, height);
  }

  rightLines(height, width) {
    const lines = [];
    const usage = this.tab.usage;
    const usageMax = Math.max(usage.total, 1);
    lines.push(clip(` Provider: ${providerLabel(this.tab.provider)}  Model: ${this.tab.model}  ${this.streaming ? "STREAMING" : "READY"}`, width));
    lines.push(clip(` Tokens: total ${usage.total || 0} input ${usage.input || 0} output ${usage.output || 0} reasoning ${usage.reasoning || 0} ${bar(Math.min(1, usage.total / Math.max(usageMax, 50000)), 12)}`, width));
    lines.push(clip(`${color.gray}${"-".repeat(width)}${color.reset}`, width));

    const inputHeight = 3;
    const chatHeight = height - inputHeight - 3;
    const chatLines = this.chatLines(width);
    const visible = chatLines.slice(Math.max(0, chatLines.length - chatHeight));
    lines.push(...visible);
    while (lines.length < height - inputHeight) lines.push(" ".repeat(width));

    const focus = this.focus === "chat" ? color.inverse : "";
    lines.push(clip(`${color.gray}${"-".repeat(width)}${color.reset}`, width));
    lines.push(clip(`${focus} > ${this.input || "Enter message..."}${color.reset}`, width));
    lines.push(clip(`${color.gray} Enter send | p provider | m model | r reasoning | Ctrl+L clear | Esc cancel${color.reset}`, width));
    return lines.slice(0, height);
  }

  chatLines(width) {
    if (!this.tab.messages.length) {
      return [
        clip(`${color.gray} Choose a provider/model on the right pane header via p/m. Ask about the selected project.${color.reset}`, width),
        clip(`${color.gray} File explorer: Up/Down focus, Enter expand/open, Ctrl+K search.${color.reset}`, width),
      ];
    }

    const lines = [];
    for (const message of this.tab.messages) {
      const label = message.role === "user" ? `${color.blue}You${color.reset}` : `${color.accent}${providerLabel(this.tab.provider)}${color.reset}`;
      lines.push(clip(` ${label}`, width));
      if (message.reasoning) {
        if (message.reasoningCollapsed) {
          lines.push(clip(` ${color.gray}> show reasoning (r)${color.reset}`, width));
        } else {
          for (const line of wrap(message.reasoning, width - 3).slice(-8)) {
            lines.push(clip(` ${color.dim}${line}${color.reset}`, width));
          }
        }
      }
      for (const line of wrap(message.content || (this.streaming ? "..." : ""), width - 3)) {
        lines.push(clip(` ${line}`, width));
      }
      lines.push(" ".repeat(width));
    }
    return lines;
  }

  renderStatus(row, columns) {
    const tab = this.tab;
    const left = ` ${providerLabel(tab.provider)} | ${tab.model} | tokens ${tab.usage.total || 0}`;
    const mid = ` | ${this.status}`;
    const right = " | Ctrl+O knowledge  Ctrl+Tab tabs  Ctrl+N new  x close  Ctrl+K files  Esc cancel ";
    return `${move(row, 1)}${color.soft}${clip(left + mid + right, columns)}${color.reset}`;
  }

  renderKnowledgeBody(startRow, height, width) {
    const lines = [];
    const summary = knowledgeSummary();
    const hint = this.knowledgeDetail
      ? "Up/Down scroll, Enter/Esc closes"
      : this.knowledgeSubtab === "feed"
        ? "Up/Down select, Enter open, r read/unread, Tab switch, Esc returns"
        : "Up/Down select, Enter open, a approve, s save, i ignore, Tab switch, Esc returns";
    lines.push(move(startRow, 1), color.soft, clip(` Knowledge  [${this.knowledgeSubtab === "feed" ? "Feed" : "feed"}] [${this.knowledgeSubtab === "edge" ? "Edge" : "edge"}]  ${hint}`, width), color.reset);
    const body = this.knowledgeDetail
      ? this.knowledgeDetailLines(width, height - 1)
      : this.knowledgeSubtab === "feed"
        ? this.feedLines(summary, width, height - 1)
        : this.edgeLines(summary, width, height - 1);
    for (let i = 1; i < height; i++) {
      lines.push(move(startRow + i, 1), body[i - 1] || " ".repeat(width));
    }
    return lines.join("");
  }

  knowledgeDetailLines(width, height) {
    const item = this.knowledgeDetail?.item;
    if (!item) return [clip(" Nothing selected.", width)];
    const lines = this.knowledgeDetail.type === "feed"
      ? this.articleDetailLines(item, width)
      : this.candidateDetailLines(item, width);
    return lines.slice(this.knowledgeScroll, this.knowledgeScroll + height);
  }

  articleDetailLines(article, width) {
    const lines = [
      clip(`${article.read ? " " : "*"} ${article.title}`, width),
      clip(`${color.gray}${article.topic} | ${article.source} | ${article.date} | ${article.type || "article"}${color.reset}`, width),
      clip(`${color.gray}${article.url || ""}${color.reset}`, width),
      clip(`${color.gray}${"-".repeat(width)}${color.reset}`, width),
      ...wrap(article.summary || "", width - 2).map((line) => clip(` ${line}`, width)),
      "",
      ...wrap(article.body || "No saved body text.", width - 2).map((line) => clip(` ${line}`, width)),
    ];
    return lines;
  }

  candidateDetailLines(candidate, width) {
    const lines = [
      clip(`${candidate.name}  [${candidate.kind}]  score ${candidate.composite}`, width),
      clip(`${color.gray}${candidate.url || ""}${color.reset}`, width),
      clip(`Compatibility ${bar(candidate.compatibility, 12)} ${candidate.compatibility}%  Momentum ${bar(candidate.momentum, 12)} ${candidate.momentum}%`, width),
      clip(`Risk          ${bar(candidate.risk, 12)} ${candidate.risk}%  Integration ${bar(candidate.integration_effort, 12)} ${candidate.integration_effort}%  Gain ${bar(candidate.expected_gain, 12)} ${candidate.expected_gain}%`, width),
      clip(`${color.gray}${"-".repeat(width)}${color.reset}`, width),
      ...wrap(candidate.why_it_matters || "", width - 2).map((line) => clip(` ${line}`, width)),
      "",
      clip(" Pros", width),
      ...(candidate.pros || []).map((item) => clip(` + ${item}`, width)),
      "",
      clip(" Cons", width),
      ...(candidate.cons || []).map((item) => clip(` - ${item}`, width)),
      "",
      clip(" Related Feed Articles", width),
      ...((candidate.related_articles || []).length ? candidate.related_articles : [{ title: "No high-similarity match yet." }]).map((item) => clip(` - ${item.date || ""} ${item.title}`, width)),
      "",
      clip(" Repository Inspection", width),
      clip(` README quality: ${candidate.readme_quality || 0}/100 | CI: ${candidate.has_ci ? "yes" : "no"} | Tests: ${candidate.has_tests ? "yes" : "no"} | Setup steps: ${candidate.setup_steps_count || 0}`, width),
      ...((candidate.dependency_files || []).length ? candidate.dependency_files : [{ name: "none", summary: "No dependency files detected." }]).map((file) => clip(` - ${file.name}: ${file.summary}`, width)),
      "",
      clip(" Install Commands", width),
      ...((candidate.install_commands || []).length ? candidate.install_commands : ["none detected"]).map((command) => clip(` - ${command}`, width)),
      "",
      clip(" Actions: a approve, s save for later, i ignore. Nothing installs automatically.", width),
    ];
    if (candidate.replacement_target) lines.splice(5, 0, clip(`Replacement candidate for: ${candidate.replacement_target}`, width));
    return lines;
  }

  feedLines(summary, width, height) {
    const lines = [
      clip(" Feed: daily article digest", width),
      clip(`${color.gray}${"-".repeat(width)}${color.reset}`, width),
      clip(` Articles saved: ${summary.feedCount} | Topics: ${summary.topicCount} | Sources: ${summary.feedPendingApproval ? "pending" : "approved"} | Last sync: ${formatDate(summary.feedLastSync)}`, width),
      "",
    ];
    if (!summary.feedArticles.length) {
      lines.push(
        clip(" No Feed articles yet.", width),
        clip(` Run: node scripts/knowledge-approve-sources.js, then node scripts/knowledge-daily.js`, width),
        clip(` Sources: ${summary.feedSourcePath}`, width),
      );
      return lines;
    }
    const visibleCards = Math.max(1, Math.floor((height - lines.length) / 4));
    const start = Math.max(0, Math.min(this.knowledgeCursor.feed - Math.floor(visibleCards / 2), Math.max(0, summary.feedArticles.length - visibleCards)));
    for (const [offset, article] of summary.feedArticles.slice(start, start + visibleCards).entries()) {
      const index = start + offset;
      const marker = article.read ? " " : "*";
      const badge = article.type || "article";
      const selected = index === this.knowledgeCursor.feed;
      const title = ` ${selected ? ">" : " "} ${marker} [${badge}] ${article.title}`;
      lines.push(clip(selected ? `${color.inverse}${title}${color.reset}` : title, width));
      lines.push(clip(`   ${color.gray}${article.topic} | ${article.source} | ${article.date}${color.reset}`, width));
      lines.push(clip(`   ${article.summary || ""}`, width));
      lines.push("");
    }
    return lines;
  }

  edgeLines(summary, width, height) {
    const lines = [
      clip(" Edge: system-improvement scout", width),
      clip(`${color.gray}${"-".repeat(width)}${color.reset}`, width),
      clip(` Candidates saved: ${summary.edgeCount} | Categories: ${summary.edgeCategoryCount} | Sources: ${summary.edgePendingApproval ? "pending" : "approved"} | Last sync: ${formatDate(summary.edgeLastSync)}`, width),
      "",
    ];
    if (!summary.edgeCandidates.length) {
      lines.push(
        clip(" Nothing significant yet.", width),
        clip(" The daily scout only shows candidates above the configured relevance threshold.", width),
        clip(` Sources: ${summary.edgeSourcePath}`, width),
      );
      return lines;
    }
    const visibleCards = Math.max(1, Math.floor((height - lines.length) / 7));
    const start = Math.max(0, Math.min(this.knowledgeCursor.edge - Math.floor(visibleCards / 2), Math.max(0, summary.edgeCandidates.length - visibleCards)));
    for (const [offset, candidate] of summary.edgeCandidates.slice(start, start + visibleCards).entries()) {
      const index = start + offset;
      const selected = index === this.knowledgeCursor.edge;
      const title = ` ${selected ? ">" : " "} ${candidate.name}  [${candidate.kind}]  score ${candidate.composite} ${candidate.status ? `(${candidate.status})` : ""}`;
      lines.push(clip(selected ? `${color.inverse}${title}${color.reset}` : title, width));
      lines.push(clip(`   compat ${bar(candidate.compatibility, 10)} ${candidate.compatibility}%  momentum ${bar(candidate.momentum, 10)} ${candidate.momentum}%  risk ${bar(candidate.risk, 10)} ${candidate.risk}%`, width));
      lines.push(clip(`   effort ${bar(candidate.integration_effort, 10)} ${candidate.integration_effort}%  gain ${bar(candidate.expected_gain, 10)} ${candidate.expected_gain}%`, width));
      lines.push(clip(`   ${candidate.why_it_matters || ""}`, width));
      if (candidate.replacement_target) lines.push(clip(`   Replacement candidate for: ${candidate.replacement_target}`, width));
      lines.push(clip(`   Actions: a approve | s save | i ignore | Enter details`, width));
      lines.push("");
    }
    return lines;
  }
}

function wrap(text, width) {
  const result = [];
  for (const raw of String(text || "").split(/\r?\n/)) {
    const words = raw.split(/\s+/).filter(Boolean);
    if (!words.length) {
      result.push("");
      continue;
    }
    let line = "";
    for (const word of words) {
      if (!line) {
        line = word;
      } else if (stripAnsi(`${line} ${word}`).length <= width) {
        line += ` ${word}`;
      } else {
        result.push(line);
        line = word;
      }
      while (stripAnsi(line).length > width) {
        result.push(line.slice(0, width));
        line = line.slice(width);
      }
    }
    if (line) result.push(line);
  }
  return result;
}

function formatDate(value) {
  if (!value) return "never";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString();
}

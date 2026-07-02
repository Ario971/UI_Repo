---
id: "samuelfmedeiros/arachne_os_crawl"
name: "Samuelfmedeiros/Arachne_Os_Crawl"
url: "https://github.com/Samuelfmedeiros/Arachne_Os_Crawl"
date: "2026-07-02"
source: "GitHub Search API"
category: "github_discovery"
kind: "mcp_server"
compatibility: 92
momentum: 45
risk: 37
integration_effort: 56
expected_gain: 87
composite: 70
replacement_target: ""
related_articles: [{"title":"Kuberwastaken/VPSmaxxing","date":"2026-06-30","topic":"AI dev tools","similarity":0.231,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-06-30/13-kuberwastaken-vpsmaxxing.md"},{"title":"AlexNthLab/nth-dao","date":"2026-06-12","topic":"AI dev tools","similarity":0.231,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-06-12/97-alexnthlab-nth-dao.md"},{"title":"llm011/ethan-agent","date":"2026-06-20","topic":"AI dev tools","similarity":0.225,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-06-20/93-llm011-ethan-agent.md"}]
pros: ["Recently updated (2026-07-02)","MIT license","GitHub Actions/CI detected","README includes install commands"]
cons: ["Integration may take more than a quick install","README mentions telemetry/analytics"]
readme_quality: 85
has_ci: true
has_tests: false
setup_steps_count: 2
dependency_files: [{"name":"pyproject.toml","summary":"python project; deps name, version, description, readme, license, authors, keywords, classifiers"}]
install_commands: ["git clone https://github.com/Samuelfmedeiros/arachne.git","pip install -e \".[dev]\"","docker compose up --build"]
risk_flags: ["README mentions telemetry/analytics"]
status: "new"
---

# Samuelfmedeiros/Arachne_Os_Crawl

Plataforma de extração inteligente + RAG + Chatbot

URL: https://github.com/Samuelfmedeiros/Arachne_Os_Crawl

## Why it matters
You saved an article on 2026-06-30 about AI dev tools; this candidate overlaps with "Kuberwastaken/VPSmaxxing" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-07-02)
+ MIT license
+ GitHub Actions/CI detected
+ README includes install commands

## Cons
- Integration may take more than a quick install
- README mentions telemetry/analytics

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: no
Setup steps estimate: 2

Dependency files:
- pyproject.toml: python project; deps name, version, description, readme, license, authors, keywords, classifiers

Install commands found:
- git clone https://github.com/Samuelfmedeiros/arachne.git
- pip install -e ".[dev]"
- docker compose up --build

Risk flags:
- README mentions telemetry/analytics

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# 🕷️ Arachne — Open Source Knowledge Operating System

**Extraia. Conecte. Analise. Converse.** Um sistema unificado que transforma código, documentos, sites, PDFs, imagens e áudio em um grafo de conhecimento consultável com RAG, bots e APIs.

> ⚡ Um único `POST /knowledge-graph/scan-enhanced` entrega **gráfico interativo + relatório markdown + JSON** — feito pra agentes de IA e times de produto.

---

## 🧠 Por que Arachne?

A maioria das ferramentas de AI coding assistant faz uma coisa bem (ex.: Graphify faz grafos de código). Arachne unifica **tudo**:

| Recurso | Graphify | Arachne |
|---|---|---|
| Knowledge Graph (Tree-sitter + Leiden + God Nodes) | ✅ | ✅ |
| Extração multi-modal (PDF, imagens, áudio, sites) | ⚠️ parcial | ✅ **44 formatos** |
| RAG + busca semântica (FTS5 + vetorial + híbrida) | ❌ | ✅ |
| Chatbot próprio (widget JS embutível + analytics) | ❌ | ✅ |
| Telegram + WhatsApp Bot | ❌ | ✅ |
| Conectores nativos (GitHub, Notion, Obsidian, YouTube) | ❌ | ✅ |
| MCP Server (integra com Claude Code, Hermes, OpenCode) | ✅ | ✅ |
| Paywall + planos (Stripe + PIX) | ❌ | ✅ |
| Pipeline visual no-code | ❌ | ✅ |
| 206+ endpoints REST | ❌ | ✅ |
| PT-BR + i18n | ❌ | ✅ |
| **152K LOC · 689 rotas · 143 testes** | 3.7K ⭐ | 💪 |

Arachne não é um skill de assistente — é um **sistema operacional de conhecimento** que roda sozinho ou acoplado ao seu agente de IA favorito.

---

## ✨ Funcionalidades Principais

### 🔗 Knowledge Graph (full code intelligence)
```bash
# Um comando gera: gráfico interativo + relatório + JSON
POST /knowledge-graph/scan-enhanced
{
  "paths": ["src/"],
  "generate_report": true,
  "generate_graph": true
}
```
- Parser Tree-sitter (Python, JS, Go, Java, mais)
- Detecção de comunidades (Leiden, igraph)
- God Nodes (PageRank + Betweenness + Degree centrality)
- Análise de dependências, ciclos, camadas
- Watcher incremental (git hooks, watchdog)

### 🌐 Extração Inteligente
- **4 níveis de fetch progressivo:** Basic HTTP → Stealth → Headless → Camoufox
- **13 crawlers especializados:** E-commerce, Blog, Agenda, Fórum, Vídeo
- **44 formatos de documento:** PDF, DOCX, XLSX, imagens (OCR), e-mail, EPUB
- **Pool de browsers reutilizáveis** via Playwright

### 🧠 RAG — Retrieval-Augmented Generation
- 6 estratégias de chunking (fixed, sliding, sentence, paragraph, semantic, structure_aware)
- Busca híbrida: FTS5 + embeddings vetoriais (sqlite-vec) + RRF
- SSMStateMemory: F3 RAG sem chunking via Mamba/TatuEngine
- Knowledge Bases com ingestão multi-fonte

### 🤖 Bots & Conectores
- **Telegram Bot** — responde com dados do grafo + KB
- **WhatsApp Bot** — Meta Cloud API, paywall, link codes
- **Chatbot Widget JS** — embute em qualquer site com analytics
- **14 conectores:** GitHub, Notion, Obsidian, YouTube, WhatsApp, e-commerce e mais

### 🔌 MCP Server
Integração nativa com qualquer agente de IA:
- `arachne_search(query, kb_id)` — busca semântica
- `arachne_scrape(url)` — extrai e estrutura
- `arachne_graph(paths)` — scan + god nodes + comunidades

### 💰 Monetização Integrada
- Stripe checkout + Customer Portal + webhooks
- Planos: Free → Pro → Premium
- Paywall por requisição no WhatsApp Bot e Chatbot

### 🌍 i18n + LGPD
- PT-BR e EN (locale files, middleware Accept-Language)
- Conformidade LGPD, PIX, CPF/CNPJ

---

## 🚀 Início Rápido

```bash
# Clone
git clone https://github.com/Samuelfmedeiros/arachne.git
cd arachne

# Ambiente virtual
python -m venv .venv && source .venv/bin/activate

# Instalar
pip install -e ".[dev]"

# Iniciar
uvicorn app.main:app --reload

# Scan + graph + report em um comando
curl -X POST http://localhost:8000/knowledge-graph/scan-enhanced \
  -H "Content-Type: application/json" \
  -d '{"paths": ["./app"], "generate_report": true, "generate_graph": true}'

# Abrir relatório interativo
open http://localhost:8000/knowledge-graph/report
```

### Docker
```bash
docker compose up --build
```

---

## 📊 Stack

| Camada | Tecnologia |
|---|---|
| **Framework** | FastAPI + SQLModel |
| **Frontend** | Jinja2 + Alpine.js + Chart.js + HTMX + vis.js |
| **Database** | SQLite (FTS5, sqlite-vec) |
| **Graph** | NetworkX + igraph + leidenalg |
| **Parsing** | Tree-sitter (Python, JS, Go, Java) |
| **Embeddings** | sentence-transformers |
| **Crawling** | Crawl4AI, Trafilatura, Playwright, Camoufox |
| **Documentos** | Unstructured-IO (44 formatos) |
| **Bots** | Telegram Bot API, Meta Cloud API |
| **Pagamentos** | Stripe |
| **MCP** | MCP SSE Server |

---

## 📁 Estrutura

```
app/
├── main.py              # FastAPI app + health check
├── knowledge_graph/     # Code intelligence: Tree-sitter, Leiden, God Nodes, watch
├── knowledge_os/        # Product: KBs, templates, wizard, sharing
├── rag/                 # Chunkers, embeddings, vector store, SSMStateMemory
├── chatbot/             # Engines, widget, analytics
├── whatsapp/            # WhatsApp Bot (Meta Cloud API)
├── telegram/            # Telegram Bot
├── scraper/             # Fetch 4 níveis, crawlers, pipeline
├── search/              # DuckDuckGo, Brave, FTS5
├── connectors/          # 14 conectores nativos
├── mcp/                 # MCP server (tools for agents)
├── stripe/              # Checkout, portal, webhook
├── api/                 # 206+ endpoints REST
├── templates/           # 30+ Jinja2 templates
└── static/              # CSS, JS, assets
```

---

## 📝 Licença & Status

**Autor:** Samuel Medeiros  
**Licença:** MIT  
**Status:** Em produção ativa · 689 rotas · 152K LOC · 143+ testes

---

> Feito no Brasil 🇧🇷 — porque inteligência de conhecimento também fala português.


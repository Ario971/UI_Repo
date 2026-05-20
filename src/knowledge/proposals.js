import path from "node:path";
import { EDGE_ROOT, FEED_ROOT, writeJson } from "./storage.js";

export const feedSourceProposals = {
  status: "pending_approval",
  topics: {
    "AI agents": [
      { name: "OpenAI Blog", type: "official_blog", url: "https://openai.com/news/", access: "rss_or_html", reason: "Primary source for OpenAI agent/model releases." },
      { name: "Anthropic News", type: "official_blog", url: "https://www.anthropic.com/news", access: "rss_or_html", reason: "Primary source for Claude and agent capability updates." },
      { name: "Hacker News Top + Show HN", type: "api", url: "https://github.com/HackerNews/API", access: "official_firebase_api", reason: "High-signal launches and developer discussion." },
      { name: "arXiv cs.AI/cs.CL/cs.LG", type: "paper_api", url: "https://info.arxiv.org/help/api/index.html", access: "api", reason: "Research papers on agents, retrieval, planning, and LLM systems." },
      { name: "Hugging Face Blog", type: "official_blog", url: "https://huggingface.co/blog", access: "rss_or_html", reason: "Applied model and tooling writeups." },
      { name: "GitHub Trending", type: "web_or_api_search", url: "https://github.com/trending", access: "html_or_github_search_api", reason: "Fast discovery of new open-source agent tools." },
    ],
    "AI dev tools": [
      { name: "Cursor Blog", type: "official_blog", url: "https://cursor.com/blog", access: "rss_or_html", reason: "IDE/agent workflow updates." },
      { name: "Continue Blog", type: "official_blog", url: "https://blog.continue.dev/", access: "rss_or_html", reason: "Open-source coding assistant ecosystem." },
      { name: "GitHub Search API", type: "api", url: "https://docs.github.com/en/rest/search/search", access: "api", reason: "Targeted repo discovery for CLIs and extensions." },
      { name: "Hacker News Show HN", type: "api", url: "https://github.com/HackerNews/API", access: "official_firebase_api", reason: "New dev-tool launches." },
    ],
    "Local LLMs": [
      { name: "Ollama Blog", type: "official_blog", url: "https://ollama.com/blog", access: "rss_or_html", reason: "Local model and runtime releases." },
      { name: "Hugging Face Trending Models", type: "platform", url: "https://huggingface.co/models?sort=trending", access: "api_or_html", reason: "New and trending local/open models." },
      { name: "r/LocalLLaMA", type: "reddit_rss", url: "https://www.reddit.com/r/LocalLLaMA/.rss", access: "rss", reason: "Community signal for quantizations, benchmarks, and releases." },
      { name: "llama.cpp releases", type: "github_releases", url: "https://github.com/ggerganov/llama.cpp/releases", access: "github_api", reason: "Core local inference stack updates." },
    ],
  },
};

export const edgeSourceProposals = {
  status: "pending_approval",
  categories: {
    github_discovery: [
      { name: "GitHub Trending", url: "https://github.com/trending", access: "html_or_search_api", topics: ["agents", "llm", "mcp", "ai-tools"] },
      { name: "GitHub Search API", url: "https://docs.github.com/en/rest/search/search", access: "api", topics: ["claude-skill", "codex-cli", "mcp-server", "agent-framework"] },
      { name: "GH Archive", url: "https://www.gharchive.org/", access: "bigquery_or_archives", topics: ["star_growth", "repo_activity"] },
    ],
    community_signal: [
      { name: "Hacker News top/show", url: "https://github.com/HackerNews/API", access: "official_firebase_api", topics: ["show_hn", "devtools", "agents"] },
      { name: "r/LocalLLaMA", url: "https://www.reddit.com/r/LocalLLaMA/.rss", access: "rss", topics: ["ollama", "quantization", "local_models"] },
      { name: "r/ClaudeAI", url: "https://www.reddit.com/r/ClaudeAI/.rss", access: "rss", topics: ["claude_code", "skills"] },
      { name: "r/MachineLearning", url: "https://www.reddit.com/r/MachineLearning/.rss", access: "rss", topics: ["papers", "techniques"] },
    ],
    official_ai_sources: [
      { name: "OpenAI News", url: "https://openai.com/news/", access: "rss_or_html", topics: ["models", "tools", "agents"] },
      { name: "Anthropic News", url: "https://www.anthropic.com/news", access: "rss_or_html", topics: ["claude", "skills", "mcp"] },
      { name: "Model Context Protocol", url: "https://modelcontextprotocol.io/", access: "docs_html", topics: ["mcp"] },
      { name: "Ollama Library", url: "https://ollama.com/library", access: "html", topics: ["local_models"] },
    ],
    research_and_models: [
      { name: "arXiv cs.AI", url: "https://export.arxiv.org/api/query?search_query=cat:cs.AI", access: "api", topics: ["agents", "planning"] },
      { name: "arXiv cs.CL", url: "https://export.arxiv.org/api/query?search_query=cat:cs.CL", access: "api", topics: ["language_models"] },
      { name: "Hugging Face Models", url: "https://huggingface.co/models?sort=trending", access: "api_or_html", topics: ["models", "spaces"] },
    ],
    awesome_lists: [
      { name: "awesome-mcp", url: "https://github.com/topics/awesome-mcp", access: "github_search", topics: ["mcp"] },
      { name: "awesome-llm-agents", url: "https://github.com/topics/llm-agents", access: "github_search", topics: ["agent_frameworks"] },
      { name: "awesome-claude-code", url: "https://github.com/search?q=awesome+claude+code&type=repositories", access: "github_search", topics: ["claude_skills"] },
    ],
  },
};

export function writeSourceProposals() {
  writeJson(path.join(FEED_ROOT, "source_proposals.json"), feedSourceProposals);
  writeJson(path.join(EDGE_ROOT, "source_proposals.json"), edgeSourceProposals);
}

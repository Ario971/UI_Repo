import { stripHtml } from "./text.js";

const USER_AGENT = "UI-Desk-Knowledge/0.1 (+local personal research assistant)";

export async function fetchText(url, { timeoutMs = 12000, headers = {} } = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "user-agent": USER_AGENT,
        "accept": "application/json, application/atom+xml, application/rss+xml, text/html;q=0.8, */*;q=0.5",
        ...headers,
      },
    });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    return await response.text();
  } finally {
    clearTimeout(timeout);
  }
}

export async function fetchJson(url, options = {}) {
  const text = await fetchText(url, options);
  return JSON.parse(text);
}

export function parseFeedXml(xml, sourceName) {
  const entries = blocks(xml, "item").concat(blocks(xml, "entry"));
  return entries.map((entry) => ({
    title: tag(entry, "title"),
    url: tag(entry, "link") || linkHref(entry),
    date: tag(entry, "pubDate") || tag(entry, "updated") || tag(entry, "published"),
    source: sourceName,
    summary: stripHtml(tag(entry, "description") || tag(entry, "summary") || tag(entry, "content")),
  })).filter((item) => item.title && item.url);
}

export function extractReadableText(html) {
  const title = stripHtml((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || "");
  const body = stripHtml(html);
  return { title, body };
}

function blocks(xml, name) {
  const re = new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)<\\/${name}>`, "gi");
  return [...String(xml || "").matchAll(re)].map((match) => match[1]);
}

function tag(xml, name) {
  const match = String(xml || "").match(new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)<\\/${name}>`, "i"));
  return stripHtml(match?.[1] || "");
}

function linkHref(xml) {
  const match = String(xml || "").match(/<link\b[^>]*href=["']([^"']+)["']/i);
  return match?.[1] || "";
}

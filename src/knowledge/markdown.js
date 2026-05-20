import fs from "node:fs";
import path from "node:path";

export function markdownWithFrontmatter(frontmatter, body) {
  const yaml = Object.entries(frontmatter)
    .map(([key, value]) => `${key}: ${yamlValue(value)}`)
    .join("\n");
  return `---\n${yaml}\n---\n\n${body || ""}\n`;
}

export function writeMarkdown(filePath, frontmatter, body) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, markdownWithFrontmatter(frontmatter, body), "utf8");
}

export function readMarkdown(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { frontmatter: {}, body: raw };
  return { frontmatter: parseFrontmatter(match[1]), body: match[2].trim() };
}

function yamlValue(value) {
  if (typeof value === "boolean" || typeof value === "number") return String(value);
  if (Array.isArray(value) || (value && typeof value === "object")) return JSON.stringify(value);
  return JSON.stringify(String(value ?? ""));
}

function parseFrontmatter(text) {
  const data = {};
  for (const line of text.split(/\r?\n/)) {
    const match = line.match(/^([^:]+):\s*(.*)$/);
    if (!match) continue;
    const key = match[1].trim();
    const value = match[2].trim();
    data[key] = parseValue(value);
  }
  return data;
}

function parseValue(value) {
  if (value === "true") return true;
  if (value === "false") return false;
  if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);
  if (value.startsWith("[") || value.startsWith("{")) {
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

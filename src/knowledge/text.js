export function slugify(text) {
  return String(text || "item")
    .toLowerCase()
    .replace(/https?:\/\//g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70) || "item";
}

export function stripHtml(html) {
  return String(html || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, number) => String.fromCodePoint(parseInt(number, 10)))
    .replace(/\s+/g, " ")
    .trim();
}

export function excerpt(text, max = 420) {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 3).trim()}...`;
}

export function tokenize(text) {
  const stop = new Set(["the", "and", "for", "with", "from", "that", "this", "you", "are", "was", "have", "has", "into", "your", "about", "will", "can", "new", "using"]);
  return String(text || "")
    .toLowerCase()
    .split(/[^a-z0-9.]+/)
    .filter((word) => word.length > 2 && !stop.has(word));
}

export function keywordScore(text, keywords) {
  const haystack = String(text || "").toLowerCase();
  return keywords.reduce((score, keyword) => haystack.includes(keyword.toLowerCase()) ? score + 1 : score, 0);
}

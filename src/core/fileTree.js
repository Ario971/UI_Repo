import fs from "node:fs";
import path from "node:path";

const SKIP = new Set([".git", "node_modules", ".next", "dist", "build", ".cache"]);

export function buildVisibleTree(root, expanded, filter = "") {
  const rows = [];
  const query = filter.trim().toLowerCase();
  walk(path.resolve(root), 0, rows, expanded, query);
  return rows;
}

function walk(target, depth, rows, expanded, query) {
  let stat;
  try {
    stat = fs.statSync(target);
  } catch {
    return false;
  }

  const name = depth === 0 ? target : path.basename(target);
  const type = stat.isDirectory() ? "directory" : "file";
  const selfMatch = !query || name.toLowerCase().includes(query);
  let childMatched = false;
  const row = { path: target, name, depth, type, expanded: expanded.has(target), matched: selfMatch };

  if (type === "directory") {
    let children = [];
    try {
      children = fs.readdirSync(target, { withFileTypes: true })
        .filter((entry) => !SKIP.has(entry.name))
        .sort((a, b) => {
          if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1;
          return a.name.localeCompare(b.name);
        });
    } catch {
      children = [];
    }

    const childRows = [];
    if (expanded.has(target) || query || depth === 0) {
      for (const child of children) {
        const childPath = path.join(target, child.name);
        if (walk(childPath, depth + 1, childRows, expanded, query)) childMatched = true;
      }
    }
    if (selfMatch || childMatched || depth === 0) {
      rows.push(row, ...childRows);
      return true;
    }
    return false;
  }

  if (selfMatch) {
    rows.push(row);
    return true;
  }
  return false;
}

export function readPreview(filePath, maxBytes = 6000) {
  try {
    const stat = fs.statSync(filePath);
    if (!stat.isFile()) return "";
    if (stat.size > maxBytes) return `[Preview limited: ${stat.size} bytes]\n\n${fs.readFileSync(filePath, "utf8").slice(0, maxBytes)}`;
    return fs.readFileSync(filePath, "utf8");
  } catch (error) {
    return `Could not preview file: ${error.message}`;
  }
}

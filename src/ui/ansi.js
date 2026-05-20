export const ESC = "\x1b[";

export const color = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  inverse: "\x1b[7m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  gray: "\x1b[90m",
  bg: "\x1b[48;5;235m",
  panel: "\x1b[48;5;236m",
  soft: "\x1b[48;5;237m",
  accent: "\x1b[38;5;114m",
};

export function clear() {
  return `${ESC}?25l${ESC}2J${ESC}H`;
}

export function move(row, col) {
  return `${ESC}${row};${col}H`;
}

export function showCursor() {
  return `${ESC}?25h`;
}

export function stripAnsi(value) {
  return String(value).replace(/\x1b\[[0-9;?]*[A-Za-z]/g, "");
}

export function clip(value, width) {
  const clean = stripAnsi(value);
  if (clean.length <= width) return value + " ".repeat(width - clean.length);
  return clean.slice(0, Math.max(0, width - 3)) + "...";
}

export function pad(value, width) {
  const clean = stripAnsi(value);
  return clean.length >= width ? value : value + " ".repeat(width - clean.length);
}

export function bar(value, width = 10) {
  const normalized = value > 1 ? value / 100 : value;
  const filled = Math.max(0, Math.min(width, Math.round(normalized * width)));
  return `${color.accent}${"#".repeat(filled)}${color.gray}${"-".repeat(width - filled)}${color.reset}`;
}

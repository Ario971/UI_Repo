export class BaseProvider {
  constructor({ model, cwd, signal } = {}) {
    this.model = model;
    this.cwd = cwd || process.cwd();
    this.signal = signal;
  }

  async *stream(_messages) {
    yield { type: "error", text: "Provider is not implemented." };
  }
}

export function buildTranscript(messages) {
  return messages
    .slice(-24)
    .map((message) => `${message.role === "user" ? "User" : "Assistant"}: ${message.content}`)
    .join("\n\n");
}

export function splitReasoningDelta(buffer, delta) {
  let text = delta;
  const events = [];

  while (text.length) {
    if (!buffer.inReasoning) {
      const start = text.indexOf("<think>");
      if (start === -1) {
        events.push({ type: "text", text });
        text = "";
      } else {
        if (start > 0) events.push({ type: "text", text: text.slice(0, start) });
        buffer.inReasoning = true;
        events.push({ type: "reasoning-start" });
        text = text.slice(start + "<think>".length);
      }
    } else {
      const end = text.indexOf("</think>");
      if (end === -1) {
        events.push({ type: "reasoning", text });
        text = "";
      } else {
        if (end > 0) events.push({ type: "reasoning", text: text.slice(0, end) });
        buffer.inReasoning = false;
        events.push({ type: "reasoning-end" });
        text = text.slice(end + "</think>".length);
      }
    }
  }

  return events;
}

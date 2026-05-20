import http from "node:http";
import { BaseProvider, splitReasoningDelta } from "./base.js";

export class OllamaProvider extends BaseProvider {
  async *stream(messages) {
    const payload = JSON.stringify({
      model: this.model,
      messages: messages.map((message) => ({ role: message.role, content: message.content })),
      stream: true,
      options: { temperature: 0.2 },
    });

    const response = await requestOllama(payload, this.signal);
    const reasoningState = { inReasoning: false };
    let buffer = "";

    for await (const chunk of response) {
      buffer += chunk.toString("utf8");
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";
      for (const line of lines) {
        if (!line.trim()) continue;
        const event = JSON.parse(line);
        const delta = event.message?.content || "";
        if (delta) {
          for (const parsed of splitReasoningDelta(reasoningState, delta)) yield parsed;
        }
        if (event.done) {
          const input = event.prompt_eval_count || 0;
          const output = event.eval_count || 0;
          yield { type: "usage", usage: { input, output, total: input + output, reasoning: 0 } };
        }
      }
    }
  }
}

function requestOllama(payload, signal) {
  return new Promise((resolve, reject) => {
    const req = http.request({
      hostname: "127.0.0.1",
      port: 11434,
      path: "/api/chat",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(payload),
      },
    }, (res) => {
      if ((res.statusCode || 0) < 200 || (res.statusCode || 0) >= 300) {
        let body = "";
        res.on("data", (chunk) => { body += chunk.toString("utf8"); });
        res.on("end", () => reject(new Error(`Ollama API ${res.statusCode}: ${body.slice(0, 500)}`)));
        return;
      }
      resolve(res);
    });
    req.on("error", reject);
    signal?.addEventListener("abort", () => {
      req.destroy(new Error("Request cancelled."));
    });
    req.write(payload);
    req.end();
  });
}

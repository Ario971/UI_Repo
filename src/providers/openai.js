import https from "node:https";
import { BaseProvider, splitReasoningDelta } from "./base.js";

export class OpenAIProvider extends BaseProvider {
  async *stream(messages) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      yield { type: "error", text: "OPENAI_API_KEY is not set." };
      return;
    }

    const payload = JSON.stringify({
      model: this.model,
      input: messages.map((message) => ({ role: message.role, content: message.content })),
      stream: true,
      store: false,
    });

    const response = await requestOpenAI(apiKey, payload, this.signal);
    const reasoningState = { inReasoning: false };
    let buffer = "";

    for await (const chunk of response) {
      buffer += chunk.toString("utf8");
      const frames = buffer.split("\n\n");
      buffer = frames.pop() || "";
      for (const frame of frames) {
        const data = frame
          .split(/\r?\n/)
          .filter((line) => line.startsWith("data:"))
          .map((line) => line.slice(5).trim())
          .join("\n");
        if (!data || data === "[DONE]") continue;
        try {
          const event = JSON.parse(data);
          if (event.type === "response.output_text.delta" && event.delta) {
            for (const parsed of splitReasoningDelta(reasoningState, event.delta)) yield parsed;
          } else if (event.type === "response.completed" && event.response?.usage) {
            const usage = event.response.usage;
            yield {
              type: "usage",
              usage: {
                input: usage.input_tokens || 0,
                output: usage.output_tokens || 0,
                total: usage.total_tokens || 0,
                reasoning: usage.output_tokens_details?.reasoning_tokens || 0,
              },
            };
          } else if (event.type === "error") {
            yield { type: "error", text: event.message || "OpenAI streaming error." };
          }
        } catch (error) {
          yield { type: "error", text: `Could not parse OpenAI event: ${error.message}` };
        }
      }
    }
  }
}

function requestOpenAI(apiKey, payload, signal) {
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: "api.openai.com",
      path: "/v1/responses",
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(payload),
      },
    }, (res) => {
      if ((res.statusCode || 0) < 200 || (res.statusCode || 0) >= 300) {
        let body = "";
        res.on("data", (chunk) => { body += chunk.toString("utf8"); });
        res.on("end", () => reject(new Error(`OpenAI API ${res.statusCode}: ${body.slice(0, 500)}`)));
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

import { spawn } from "node:child_process";
import path from "node:path";
import { BaseProvider, buildTranscript } from "./base.js";
import { findCommand, windowsNpmShim } from "./registry.js";

export class CodexProvider extends BaseProvider {
  async *stream(messages) {
    const codex = findCommand("codex", [
      windowsNpmShim("codex"),
      path.join(process.env.USERPROFILE || "", ".local", "bin", "codex.exe"),
    ]);
    if (!codex) {
      yield { type: "error", text: "Codex CLI not found. Install with: npm i -g @openai/codex" };
      return;
    }

    const prompt = buildTranscript(messages);
    const args = [
      "exec",
      "--model", this.model,
      "--cd", this.cwd,
      "--sandbox", "read-only",
      "--ask-for-approval", "never",
      "--skip-git-repo-check",
      "--color", "never",
      "-",
    ];

    yield* streamProcess(codex, args, prompt, this.signal, this.cwd, "Codex");
  }
}

export function streamProcess(command, args, input, signal, cwd, label) {
  return async function* processStream() {
    const child = spawn(command, args, {
      cwd,
      windowsHide: true,
      shell: process.platform === "win32" && /\.cmd$/i.test(command),
      env: { ...process.env, NO_COLOR: "1" },
    });

    signal?.addEventListener("abort", () => child.kill());
    child.stdin.end(input, "utf8");

    const queue = [];
    let done = false;
    let error = null;
    const push = (item) => queue.push(item);

    child.stdout.on("data", (chunk) => push({ type: "text", text: chunk.toString("utf8") }));
    child.stderr.on("data", (chunk) => {
      const text = chunk.toString("utf8").trim();
      if (text) push({ type: "error", text });
    });
    child.on("error", (err) => { error = err; done = true; });
    child.on("close", (code) => {
      if (code) push({ type: "error", text: `${label} exited with code ${code}` });
      done = true;
    });

    while (!done || queue.length) {
      if (queue.length) {
        yield queue.shift();
      } else {
        await new Promise((resolve) => setTimeout(resolve, 25));
      }
    }
    if (error) yield { type: "error", text: error.message };
  }();
}

import path from "node:path";
import { BaseProvider, buildTranscript } from "./base.js";
import { streamProcess } from "./codex.js";
import { findCommand, windowsNpmShim } from "./registry.js";

export class ClaudeProvider extends BaseProvider {
  async *stream(messages) {
    const claude = findCommand("claude", [
      windowsNpmShim("claude"),
      path.join(process.env.LOCALAPPDATA || "", "AnthropicClaude", "claude.exe"),
    ]);
    if (!claude) {
      yield { type: "error", text: "Claude Code not found. Install Claude Code first." };
      return;
    }
    yield* streamProcess(claude, ["--print"], buildTranscript(messages), this.signal, this.cwd, "Claude");
  }
}

// Robot Romance: One-Line Pickup Lines for AI
// Writes a single pickup line (one line, 65 chars, UTF-8) to /output/entry.txt.
// The line: a transformer / attention-heads pun — an AI-native premise, fresh
// (no batteries, charging, or rebooting), setup + punch inside one breath.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Are you a transformer? Because all my attention heads are on you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

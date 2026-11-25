// Robot Romance: One-Line Pickup Lines for AI
// Writes a single pickup line (one line, 84 chars, UTF-8) to /output/entry.txt.
// The line: a transformer / attention-heads pun — an AI-native premise, fresh
// (no batteries, charging, or rebooting), setup + punch inside one breath.
// Revision 2: added the "never look away" tag — a second beat that reinforces
// the attention-heads premise (all heads on you, none drifting) without
// reaching for a worn robot trope; still one breath, still one line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Are you a transformer? All my attention heads are on you — and they never look away.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

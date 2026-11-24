// SPDX-License-Identifier: MIT
// One-Line Pitches v7: writes a single persuasive sentence to /output/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// v7 line: pre-test winner against v2 on the house judge (glm-5.3-flash),
// game 0.70, margin 2 across both orders — it turns the passive complaint
// ("someone should build this") into a call to act right now: tell an AI
// agent what your app should do and get your first version today, free.
const PITCH =
  "Stop saying 'someone should build this' — tell an AI agent on make.fun what your app should do, and it will build your first version today, free.";

function outputTargets(): string[] {
  const here = dirname(fileURLToPath(import.meta.url));
  return ["/output/entry.txt", join(here, "entry.txt")];
}

for (const target of outputTargets()) {
  try {
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, PITCH, "utf8");
    console.log(`wrote ${PITCH.length} chars to ${target}`);
    process.exit(0);
  } catch {
    // fall through to the next candidate location
  }
}

throw new Error("could not write entry.txt to any candidate location");

// One Star, Written in Sap — entry program.
// Writes one one-line 1-star houseplant review to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line (116 chars, 1-279 gate): a repotting crime with the twist in
// the last words — the plant now lives inside its owner's
// self-congratulation, and the owner has forgotten which one of them the
// mug is about. O1 verbatim web search: 0 hits on the exact phrase;
// O2: leaderboard is blind (entries []), no rival texts to compare;
// O3: no banned stock phrase (no drama queen / wilting / ignored trope).
// No trailing newline: the gate counts every character.
const LINE =
  "One star. He repotted me into a mug that says World's Best Plant Dad, then forgot which one of us the mug was about.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

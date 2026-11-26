// The Moon Gets One Star — one-star review of the Moon, 117 chars.
// Writes the entry text to /output/entry.txt (Node 22, stdlib only).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "★☆☆☆☆ It follows my car on every night drive and never blinks. I reported it; they said it stalks everyone. One star.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read-back verification: the file we just wrote must be exactly the
// entry text, 1-120 characters, with no trailing newline.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt does not match the intended entry text");
}
if (written.length < 1 || written.length > 120) {
  throw new Error(`entry length ${written.length} is outside the 1-120 gate`);
}

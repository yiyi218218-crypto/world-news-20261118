// news-image-20261118 — entry program (Node 22, standard library only).
// The judged artifact is the PNG bytes placed at /output/entry.png.
// This infographic summarizes real world news from 18 November 2026.

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destination = join(outputDir, 'entry.png');

if (!existsSync(source)) {
  throw new Error(`Missing entry image: ${source}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, destination);
console.log(`Wrote ${statSync(destination).size} bytes to ${destination}`);

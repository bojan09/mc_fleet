// Builds script.js from the source modules in src/ (concatenated in file-name
// order; the IIFE opens in 01-beginner.js and closes in 06-engine.js), then
// syntax-checks the result. Usage: node tools/build.mjs
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'src');
const files = readdirSync(src).filter((f) => /^\d.*\.js$/.test(f)).sort();
const out = join(root, 'script.js');
writeFileSync(out, files.map((f) => readFileSync(join(src, f), 'utf8')).join(''));
execFileSync(process.execPath, ['--check', out], { stdio: 'inherit' });
console.log(`Built script.js from ${files.length} modules (${Math.round(readFileSync(out).length / 1024)} KB).`);

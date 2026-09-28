#!/usr/bin/env node
// Minimal AI failure analyzer: summarizes downloaded CI artifacts.
// Always exits 0 so the analysis job stays green.
import fs from 'node:fs';
import path from 'node:path';

const dir = process.argv[2] || './artifacts';

function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

console.log('=== AI Failure Analysis ===');
if (!fs.existsSync(dir)) {
  console.log(`No artifacts directory at ${dir}; nothing to analyze.`);
  process.exit(0);
}
const files = walk(dir);
console.log(`Found ${files.length} artifact file(s) under ${dir}:`);
for (const f of files.slice(0, 50)) console.log(' -', f);
if (process.env.OPENAI_API_KEY) {
  console.log('OPENAI_API_KEY present; full LLM triage can be wired in here.');
} else {
  console.log('No OPENAI_API_KEY set; skipping LLM triage.');
}
console.log('=== Analysis complete ===');
process.exit(0);

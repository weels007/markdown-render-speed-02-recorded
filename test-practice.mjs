import { readFileSync } from 'node:fs';
import { parse } from './parse.js';

const ROOT = 'D:/weels/Make-the-AI-judge-happy/.makefun/kit/markdown-render-speed-02-kit/practice';
const cases = JSON.parse(readFileSync(`${ROOT}/input/cases.json`, 'utf8'));
const expected = JSON.parse(readFileSync(`${ROOT}/reference/expected.json`, 'utf8'));

const t0 = performance.now();
let passed = 0;
let failed = 0;
for (let i = 0; i < cases.length; i++) {
  const actual = parse(cases[i].markdown);
  const want = expected.cases[i].html;
  if (actual === want) {
    passed++;
  } else {
    failed++;
  }
}
const ms = performance.now() - t0;
console.log(`${passed} passed, ${failed} failed, ${ms.toFixed(1)}ms`);
process.exit(failed === 0 ? 0 : 1);

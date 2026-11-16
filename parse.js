// Drop-in for marked 18.1.3 with default options (GFM on, async off).
// vendor/marked/marked.esm.js is marked's npm ESM build byte for byte (MIT,
// see vendor/marked/LICENSE and vendor/marked/NOTICE).
import { marked } from './vendor/marked/marked.esm.js';

/** Returns the HTML marked renders for `markdown`, with marked's defaults. */
export function parse(markdown) {
  return marked.parse(markdown);
}

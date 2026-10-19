import assert from 'node:assert/strict';
import fs from 'node:fs';
import { validateCatalog, filterResources, safeLink, normalize } from '../docs/catalog/model.mjs';

const root = new URL('../', import.meta.url);
const read = file => fs.readFileSync(new URL(file, root), 'utf8');
const data = validateCatalog(JSON.parse(read('docs/catalog/data.json')));
assert.equal(data.resources.length, 56);
assert.equal(data.categories.length, 9);
assert.equal(filterResources(data).length, 56);
assert.equal(filterResources(data, 'Figma').length, 1);
assert.equal(filterResources(data, 'Figma', 'mcp').length, 1);
assert.equal(filterResources(data, '', 'mcp').length, 10);
assert.equal(filterResources(data, 'zzzz-no-match').length, 0);
assert.equal(filterResources(data, 'OpenAI Docs').length, 1);
assert.equal(filterResources(data, '    FIGMA  ').length, 1);
assert.equal(filterResources(data, 'Ｆｉｇｍａ').length, 1);
assert.equal(normalize('  DB '), 'db');
assert(filterResources(data, '디자인').length > 0);
assert.equal(safeLink('javascript:alert(1)'), null);
assert.equal(safeLink('https://user:secret@example.com/'), null);
assert.equal(safeLink('../guides/../../secret.md'), null);
assert.equal(safeLink('../guides/cases/docs-mcp-review.md', 'en'),
  'https://github.com/yunsell/ai-agent-skills-korean/blob/main/guides/cases/docs-mcp-review.en.md');
assert.throws(() => validateCatalog({ schema: 1, categories: [], resources: [] }));
assert.throws(() => validateCatalog({ ...data, resources: [{ ...data.resources[0], url: 'javascript:bad' }] }));
assert.throws(() => validateCatalog({ ...data, resources: [{ ...data.resources[0], en: {} }] }));
for (const file of ['index.html', 'en.html']) {
  const html = read('docs/catalog/' + file);
  assert(html.includes('56') && html.includes('aria-live="polite"') && html.includes('role="alert"'));
  assert(!read('docs/catalog/style.css').includes('https://'), 'No external font/image requests');
  for (const category of data.categories) assert(html.includes(`value="${category.id}"`));
  for (const match of html.matchAll(/(?:href|src)="(\.\/[^"?#]+)"/g)) {
    assert(fs.existsSync(new URL('docs/catalog/' + match[1], root)), 'Missing reader asset: ' + match[1]);
  }
}
const evidence = JSON.parse(read('docs/evidence/catalog-design/checks.json'));
assert.equal(evidence.checks.length, 13);
assert.deepEqual(evidence.checks.filter(check => check.name === 'responsive').map(check => check.width), [320, 390, 768, 1280]);
assert(evidence.checks.filter(check => check.name === 'responsive').every(check => check.scrollWidth === check.width));
for (const screenshot of evidence.screenshots) assert(fs.existsSync(new URL('docs/evidence/catalog-design/' + screenshot, root)));
console.log('PASS: catalog filters, bilingual search, normalization, data validation, safe links, and fallback markup.');

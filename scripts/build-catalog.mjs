import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const categories = [
  ['skills', 'Skills', 'Skills'], ['mcp', 'MCP', 'MCP'], ['tools', 'CLI·탐색', 'CLI & discovery'],
  ['plugins', 'Plugins', 'Plugins'], ['validation', '검증·평가', 'Validation'],
  ['harnesses', 'Harnesses', 'Harnesses'], ['frameworks', 'Frameworks', 'Frameworks'],
  ['agents', 'Agents', 'Agents'], ['learning', '학습', 'Learning'],
].map(([id, ko, en]) => ({ id, ko, en }));
const parsed = {};
for (const language of ['ko', 'en']) {
  const text = fs.readFileSync(path.join(root, 'catalog/README' + (language === 'en' ? '.en' : '') + '.md'), 'utf8');
  parsed[language] = categories.flatMap(category => {
    const section = text.split(`<a id="${category.id}"></a>`)[1]?.split(/<a id=/)[0];
    assert(section, 'Missing category: ' + category.id);
    const expression = /^- \*\*\[([^\]]+)\]\(([^)]+)\) · (.+)\*\*\n\n  (?:제공|Offers): (.+)\n\n  (?:활용|Use it for): (.+)$/gm;
    const entries = [...section.matchAll(expression)].map(([, name, url, use, offer, example]) => ({
      id: category.id + '-' + createHash('sha256').update(url).digest('hex').slice(0, 10),
      category: category.id, name, url, use, offer, example,
    }));
    assert(entries.length, 'Empty category: ' + category.id + '/' + language);
    return entries;
  });
}
assert.equal(parsed.ko.length, parsed.en.length, 'Catalog language count mismatch');
const resources = parsed.ko.map((ko, index) => {
  const en = parsed.en[index];
  for (const key of ['id', 'category', 'url']) assert.equal(ko[key], en[key], 'Catalog mismatch: ' + key);
  return { id: ko.id, category: ko.category, url: ko.url,
    ko: { name: ko.name, use: ko.use, offer: ko.offer, example: ko.example },
    en: { name: en.name, use: en.use, offer: en.offer, example: en.example } };
});
assert.equal(new Set(resources.map(r => r.id)).size, resources.length, 'Duplicate resource');
const output = JSON.stringify({ schema: 1, source: 'catalog/README.md + catalog/README.en.md',
  reviewScope: 'Baseline docs review 2026-10-12; selected additions 2026-10-19. Not all resources execution-tested.',
  categories, resources }, null, 2) + '\n';
const file = path.join(root, 'docs/catalog/data.json');
const exists = fs.existsSync(file);
const old = exists ? fs.readFileSync(file, 'utf8') : '';
if (process.argv.includes('--check')) {
  assert.equal(old, output, 'Catalog data stale: regenerate with --patch');
  console.log('PASS: ' + resources.length + ' bilingual resources match the source catalog.');
} else if (process.argv.includes('--patch') && old !== output) {
  process.stdout.write('*** Begin Patch\n*** ' + (exists ? 'Update' : 'Add') + ' File: ' + file + '\n'
    + (exists ? '@@\n' + old.trimEnd().split('\n').map(l => '-' + l).join('\n') + '\n' : '')
    + output.trimEnd().split('\n').map(l => '+' + l).join('\n') + '\n*** End Patch\n');
} else console.log('Use --check or --patch.');

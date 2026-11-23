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
  reviewScope: 'Baseline docs review 2026-10-12; selected release notes reviewed 2026-11-23. Not all resources execution-tested.',
  categories, resources }, null, 2) + '\n';
const file = path.join(root, 'docs/catalog/data.json');
const exists = fs.existsSync(file);
const old = exists ? fs.readFileSync(file, 'utf8') : '';
const changes = [{ file, exists, before: old, after: output }];
const start = '<!-- catalog-tables:start -->';
const end = '<!-- catalog-tables:end -->';
const tableBlock = /<!-- catalog-tables:start -->\n[\s\S]*?<!-- catalog-tables:end -->/g;
const cell = text => text.replaceAll('|', '&#124;');
for (const language of ['ko', 'en']) {
  const english = language === 'en';
  const readme = path.join(root, english ? 'README.en.md' : 'README.md');
  const source = fs.readFileSync(readme, 'utf8');
  const blocks = [...source.matchAll(tableBlock)];
  assert.equal(blocks.length, 1, readme + ': expected one generated catalog section');
  const tables = categories.map(category => {
    const entries = resources.filter(resource => resource.category === category.id);
    const rows = entries.map(resource => {
      const { name, offer } = resource[language];
      return `| [${cell(name)}](${resource.url}) | ${cell(offer)} |`;
    });
    return [
      `<a id="${category.id}"></a>`,
      '',
      `### ${category[language]} · ${entries.length}`,
      '',
      english ? '| Resource | What it does |' : '| 자료 | 주요 기능 |',
      '| --- | --- |',
      ...rows,
    ].join('\n');
  });
  const summary = english ? `All ${resources.length} resources by category` : `전체 ${resources.length}개 자료를 분류별로 보기`;
  const after = [start, '<details>', `<summary>${summary}</summary>`, '', tables.join('\n\n'),
    '', '</details>', end].join('\n');
  changes.push({ file: readme, exists: true, before: blocks[0][0], after });
}

const stale = changes.filter(change => change.before.trimEnd() !== change.after.trimEnd());
if (process.argv.includes('--check')) {
  assert.equal(stale.length, 0, 'Catalog output stale: regenerate with --patch (' + stale.map(change => path.relative(root, change.file)).join(', ') + ')');
  console.log('PASS: ' + resources.length + ' bilingual resources match the search data and README tables.');
} else if (process.argv.includes('--patch') && stale.length) {
  const patches = stale.map(({ file, exists, before, after }) => [
    '*** ' + (exists ? 'Update' : 'Add') + ' File: ' + file,
    ...(exists ? ['@@', ...before.trimEnd().split('\n').map(line => '-' + line)] : []),
    ...after.trimEnd().split('\n').map(line => '+' + line),
  ].join('\n'));
  process.stdout.write(['*** Begin Patch', ...patches, '*** End Patch', ''].join('\n'));
} else console.log('Use --check or --patch.');

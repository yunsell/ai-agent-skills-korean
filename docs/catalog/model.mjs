export const normalize = value => String(value).normalize('NFKC').toLocaleLowerCase().trim();

export function validateCatalog(data) {
  if (!data || data.schema !== 1 || !Array.isArray(data.categories) || !data.categories.length
    || !Array.isArray(data.resources) || !data.resources.length) throw new Error('Invalid catalog');
  const categories = new Set(data.categories.map(c => c.id));
  if (categories.size !== data.categories.length) throw new Error('Duplicate category');
  for (const category of data.categories) {
    if (!['id', 'ko', 'en'].every(k => typeof category[k] === 'string' && category[k])) throw new Error('Invalid category');
  }
  const ids = new Set();
  for (const resource of data.resources) {
    if (typeof resource.id !== 'string' || ids.has(resource.id) || !categories.has(resource.category)
      || typeof resource.url !== 'string' || !safeLink(resource.url)) throw new Error('Invalid resource');
    ids.add(resource.id);
    for (const language of ['ko', 'en']) {
      if (!resource[language] || !['name', 'use', 'offer', 'example'].every(k =>
        typeof resource[language][k] === 'string' && resource[language][k].trim())) throw new Error('Invalid translation');
    }
  }
  return data;
}

export function filterResources(data, query = '', category = '') {
  const tokens = normalize(query).split(/\s+/).filter(Boolean);
  return data.resources.filter(resource => (!category || resource.category === category)
    && tokens.every(token => normalize(Object.values(resource.ko).join(' ') + ' '
      + Object.values(resource.en).join(' ')).includes(token)));
}

// Only public HTTPS sources or explicit repository-relative Markdown links.
export function safeLink(value, language = 'ko') {
  try {
    if (/^https:\/\//.test(value)) {
      const url = new URL(value);
      return url.username || url.password ? null : url.href;
    }
    if (!/^\.\.\/guides\/[\w./-]+\.md(?:#[\w-]+)?$/.test(value) || value.includes('/../', 3)) return null;
    const file = value.slice(3).replace(/\.en\.md$/, '.md');
    return 'https://github.com/yunsell/ai-agent-skills-korean/blob/main/'
      + (language === 'en' ? file.replace(/\.md(?=#|$)/, '.en.md') : file);
  } catch { return null; }
}

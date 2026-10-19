import { validateCatalog, filterResources, safeLink } from './model.mjs';

const english = document.documentElement.lang === 'en';
const language = english ? 'en' : 'ko';
const text = english ? {
  loading: 'Loading the catalog…', results: n => `${n} ${n === 1 ? 'resource' : 'resources'}`, all: 'All categories',
  empty: 'No matching resources. Try a shorter name or reset the filters.',
  error: 'The catalog could not load. Your filters are kept. Try again or open the GitHub catalog.',
  example: 'When to use it', use: 'Use case', retrying: 'Trying again…',
} : {
  loading: '자료를 불러오는 중입니다…', results: n => `${n}개 자료`, all: '전체 분류',
  empty: '조건에 맞는 자료가 없습니다. 이름을 줄여 검색하거나 조건을 초기화하세요.',
  error: '자료를 불러오지 못했습니다. 검색 조건은 유지했습니다. 다시 시도하거나 GitHub 목록을 여세요.',
  example: '이런 때 활용하세요', use: '용도', retrying: '다시 불러오는 중입니다…',
};
const form = document.querySelector('#search-form');
const query = document.querySelector('#query');
const category = document.querySelector('#category');
const reset = document.querySelector('#reset');
const status = document.querySelector('#status');
const results = document.querySelector('#results');
const message = document.querySelector('#message');
const retry = document.querySelector('#retry');
const errorPanel = document.querySelector('#error');
const switchLanguage = document.querySelector('#language');
let data;
let loading = false;
const initial = new URLSearchParams(location.search);
query.value = (initial.get('q') || '').slice(0, 200);
let initialCategory = initial.get('category') || '';
category.value = Array.from(category.options).some(option => option.value === initialCategory) ? initialCategory : '';

function keepFilters() {
  const params = new URLSearchParams();
  if (query.value.trim()) params.set('q', query.value.trim());
  if (category.value) params.set('category', category.value);
  const search = params.size ? '?' + params.toString() : '';
  try { history.replaceState(null, '', location.pathname + search); } catch { /* Sandboxed previews may deny URL changes. */ }
  switchLanguage.href = (english ? './index.html' : './en.html') + search;
}

function rich(parent, source) {
  const expression = /\[([^\]]+)\]\(([^)]+)\)|`([^`]+)`/g;
  let end = 0;
  for (const match of source.matchAll(expression)) {
    parent.append(document.createTextNode(source.slice(end, match.index)));
    if (match[3]) {
      const code = document.createElement('code'); code.textContent = match[3]; parent.append(code);
    } else {
      const href = safeLink(match[2], language);
      const element = document.createElement(href ? 'a' : 'span');
      element.textContent = match[1]; if (href) element.href = href; parent.append(element);
    }
    end = match.index + match[0].length;
  }
  parent.append(document.createTextNode(source.slice(end)));
}

function render() {
  keepFilters();
  if (!data) return;
  const filtered = filterResources(data, query.value, category.value);
  status.textContent = text.results(filtered.length);
  message.textContent = filtered.length ? '' : text.empty;
  message.hidden = !!filtered.length;
  results.replaceChildren();
  const fragment = document.createDocumentFragment();
  filtered.forEach((resource, index) => {
    const item = document.createElement('li');
    const meta = document.createElement('p'); meta.className = 'meta';
    meta.textContent = `${String(index + 1).padStart(2, '0')} / ${data.categories.find(c => c.id === resource.category)[language]}`;
    const title = document.createElement('h3');
    const link = document.createElement('a'); link.textContent = resource[language].name;
    link.href = safeLink(resource.url); title.append(link);
    const use = document.createElement('p'); use.className = 'use';
    use.textContent = `${text.use} · ${resource[language].use}`;
    const description = document.createElement('p'); rich(description, resource[language].offer);
    const details = document.createElement('details');
    const summary = document.createElement('summary'); summary.textContent = text.example;
    const example = document.createElement('p'); rich(example, resource[language].example);
    details.append(summary, example);
    item.append(meta, title, use, description, details); fragment.append(item);
  });
  results.append(fragment);
}

async function load() {
  if (loading) return;
  const fromRetry = document.activeElement === retry;
  loading = true; retry.disabled = true;
  status.textContent = data ? text.retrying : text.loading;
  results.setAttribute('aria-busy', 'true'); errorPanel.hidden = true;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch('./data.json', { signal: controller.signal });
    if (!response.ok) throw new Error('Catalog unavailable');
    data = validateCatalog(await response.json());
    category.replaceChildren(new Option(text.all, ''));
    for (const entry of data.categories) category.add(new Option(entry[language], entry.id));
    category.value = data.categories.some(c => c.id === initialCategory) ? initialCategory : '';
    initialCategory = category.value;
    render();
    if (fromRetry) query.focus();
  } catch {
    status.textContent = ''; errorPanel.hidden = false;
    document.querySelector('#error-message').textContent = text.error;
    if (fromRetry) retry.focus();
  } finally {
    clearTimeout(timeout); loading = false; retry.disabled = false;
    results.setAttribute('aria-busy', 'false');
  }
}
form.addEventListener('submit', event => { event.preventDefault(); render(); });
query.addEventListener('input', render);
category.addEventListener('change', () => { initialCategory = category.value; render(); });
reset.addEventListener('click', () => { query.value = ''; category.value = ''; initialCategory = ''; render(); query.focus(); });
retry.addEventListener('click', load);
keepFilters(); load();

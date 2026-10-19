import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (file) => fs.readFileSync(path.resolve(root, file), "utf8");
const ignored = new Set([".git", "node_modules"]);
const walk = (directory) => fs.readdirSync(directory, { withFileTypes: true })
  .flatMap((entry) => {
    if (ignored.has(entry.name)) return [];
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : target.endsWith(".md") ? [target] : [];
  });
const withoutCode = (text) => text.replace(/^```[^\n]*\n[\s\S]*?^```[ \t]*$/gm, "");
const links = (text) => {
  const clean = withoutCode(text);
  return [
    ...[...clean.matchAll(/!?\[[^\]]*\]\(([^)\n]+)\)/g)]
      .map((match) => match[1].trim().replace(/^<|>$/g, "")),
    ...[...clean.matchAll(/\b(?:href|src|srcset)="([^"]+)"/g)].map((match) => match[1]),
  ];
};
const anchors = (text) => {
  const found = [...text.matchAll(/<a id="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(found).size, found.length, "Duplicate explicit anchor");
  const seen = new Map();
  for (const match of withoutCode(text).matchAll(/^#{1,6} (.+)$/gm)) {
    const slug = match[1].toLowerCase().replace(/<[^>]*>/g, "")
      .replace(/[^\p{L}\p{N}_\-\s]/gu, "").replace(/\s/g, "-");
    const count = seen.get(slug) || 0;
    found.push(slug + (count ? "-" + count : ""));
    seen.set(slug, count + 1);
  }
  return new Set(found);
};
const markdown = walk(root);
for (const file of markdown) {
  const text = fs.readFileSync(file, "utf8");
  const label = path.relative(root, file);
  anchors(text);
  for (const image of text.matchAll(/<img\b[^>]*>/g)) {
    assert(/\balt="[^"]+"/.test(image[0]), label + ": image needs meaningful alt text");
  }
  assert.equal((text.match(/^```/gm) || []).length % 2, 0, label + ": unbalanced fences");
  assert.equal((text.match(/<details>/g) || []).length,
    (text.match(/<\/details>/g) || []).length, label + ": unbalanced details");
  for (const line of withoutCode(text).split("\n").filter((line) => line.startsWith("|"))) {
    assert(line.split("|").length - 2 <= 4, label + ": table wider than four columns");
  }
  for (const link of links(text)) {
    if (link.startsWith("https://yunsell.github.io/ai-agent-skills-korean/")) {
      const url = new URL(link);
      const local = decodeURIComponent(url.pathname.slice("/ai-agent-skills-korean/".length)) || "index.html";
      const target = path.resolve(root, "docs", local);
      assert(target.startsWith(path.join(root, "docs") + path.sep), label + ": invalid Pages link " + link);
      assert(fs.existsSync(target), label + ": missing Pages asset " + link);
    }
    if (/^(https?:|mailto:)/.test(link)) continue;
    const [destination, fragment] = link.split("#");
    const target = destination ? path.resolve(path.dirname(file), decodeURIComponent(destination)) : file;
    assert(target.startsWith(root + path.sep), label + ": link outside repository " + link);
    assert(fs.existsSync(target), label + ": missing target " + link);
    if (fragment && target.endsWith(".md")) {
      assert(anchors(fs.readFileSync(target, "utf8")).has(decodeURIComponent(fragment)),
        label + ": missing anchor " + link);
    }
  }
}

const paired = [
  ["README.md", "README.en.md"],
  ["catalog/README.md", "catalog/README.en.md"],
  ["newsletter/README.md", "newsletter/README.en.md"],
  ["guides/first-stack.md", "guides/first-stack.en.md"],
  ["guides/web-validation.md", "guides/web-validation.en.md"],
  ["guides/quick-starts.md", "guides/quick-starts.en.md"],
  ["guides/cases/002-browser-evidence.md", "guides/cases/002-browser-evidence.en.md"],
  ["guides/cases/docs-mcp-review.md", "guides/cases/docs-mcp-review.en.md"],
  ["guides/mcp-recovery.md", "guides/mcp-recovery.en.md"],
  ["guides/design-workflows.md", "guides/design-workflows.en.md"],
];
const manifest = JSON.parse(read("newsletter/issues.json"));
assert(manifest.issues.length > 0, "Empty newsletter manifest");
assert.equal(new Set(manifest.issues.map((issue) => issue.id)).size,
  manifest.issues.length, "Duplicate issue ID");
const latest = manifest.issues.find((issue) => issue.id === manifest.latest);
assert(latest, "Latest issue missing");
assert.equal(latest.date, [...manifest.issues.map((issue) => issue.date)].sort().at(-1),
  "Latest issue is not the newest date");
for (const issue of manifest.issues) {
  assert.match(issue.id, /^\d{3,}$/);
  assert.match(issue.date, /^\d{4}-\d{2}-\d{2}$/);
  assert(issue.topics.length > 0, "Issue needs at least one topic");
  assert.equal(new Set(issue.topics).size, issue.topics.length, "Duplicate topic");
  assert(issue.topics.every((topic) => ["skills", "mcp", "harness"].includes(topic)), "Unknown topic");
  if (issue.cover) {
    assert.equal(issue.cover.labels.length, 3, "Cover needs exactly three topic labels");
    assert(issue.cover.labels.every((label) => /^[A-Z][A-Z /-]{1,12}$/.test(label)), "Invalid cover label");
  }
  assert.equal(issue.summary?.ko?.length, issue.summary?.en?.length,
    "Language summary count mismatch: " + issue.id);
  paired.push(["newsletter/" + issue.files.ko, "newsletter/" + issue.files.en]);
  for (const language of ["ko", "en"]) {
    const summary = issue.summary?.[language];
    assert(Array.isArray(summary) && summary.length >= 2 && summary.length <= 3,
      "Issue needs 2–3 RSS summary lines: " + issue.id + "/" + language);
    assert(summary.every(line => typeof line === "string" && line.trim() === line
      && line.length > 0 && line.length <= 280), "Invalid RSS summary: " + issue.id);
    assert.equal(path.basename(issue.files[language]), issue.files[language], "Invalid issue filename");
    const file = "newsletter/" + issue.files[language];
    const text = read(file);
    assert(text.startsWith("# " + issue.id + " · " + issue.title[language]), file + ": wrong title");
    assert(text.includes(issue.date), file + ": missing date");
    const home = read(language === "ko" ? "README.md" : "README.en.md");
    if (issue.id === manifest.latest) {
      assert(home.includes("newsletter/" + issue.files[language]), "Home latest link mismatch");
      assert(home.includes(issue.title[language]), "Home latest title mismatch");
      assert(home.includes(issue.date), "Home latest date mismatch");
    }
    assert(read(language === "ko" ? "newsletter/README.md" : "newsletter/README.en.md")
      .includes(issue.files[language]), "Issue missing from archive");
  }
}
const normalized = (file) => [...new Set(links(read(file)).map((link) => {
  if (/^https?:/.test(link)) {
    if (link.startsWith("https://yunsell.github.io/ai-agent-skills-korean/labs/search.html?lang=")) {
      return link.replace(/\?lang=(ko|en)$/, "?lang=language");
    }
    return link;
  }
  const [destination, fragment] = link.split("#");
  return path.relative(root, destination ? path.resolve(root, path.dirname(file), destination)
    : path.resolve(root, file)).replace(/\.en\.md$/, ".md")
    + (fragment ? "#" + fragment.replace(/^(korean|english)$/, "language") : "");
}))].sort();
for (const [ko, en] of paired) {
  assert.deepEqual(normalized(ko), normalized(en), "Language link mismatch: " + ko);
  const code = (file) => [...read(file).matchAll(/```bash\n([\s\S]*?)```/g)].map((match) => match[1].trim());
  assert.deepEqual(code(ko), code(en), "Language command mismatch: " + ko);
}
for (const suffix of ["", ".en"]) {
  const guide = "guides/quick-starts" + suffix + ".md";
  const catalog = "catalog/README" + suffix + ".md";
  const comparison = read(catalog).split('<a id="field-cards"></a>')[1]?.split('<a id="recent"></a>')[0];
  assert(comparison && !/^\|/m.test(comparison), catalog + ": comparison must not use wide tables");
  assert.equal((comparison.match(/<details>/g) || []).length, 9, catalog + ": preserve nine comparison entries");
  assert(!read(guide).includes("<details>"), guide + ": keep quick-start instructions visible");
  for (const [old, current] of [["frontend", "frontend"], ["db", "database"],
    ["process", "process"], ["ops", "operations"], ["agent", "agent"]]) {
    assert(anchors(read(catalog)).has("starter-" + old), "Legacy catalog anchor missing: " + old);
    assert(links(read(catalog)).includes("../" + guide + "#" + current),
      catalog + ": missing direct quick-start link " + current);
  }
}
for (const home of ["README.md", "README.en.md"]) {
  for (const anchor of ["starter-packs", "field-cards", "recent", "skills", "mcp",
    "tools", "plugins", "validation", "frameworks", "agents", "learning", "contributing"]) {
    assert(anchors(read(home)).has(anchor), "Legacy README anchor missing: " + anchor);
  }
}
const docsCase = JSON.parse(read("docs/evidence/docs-mcp-review/calls.json"));
assert.equal(docsCase.calls.length, 4, "Docs MCP case needs four actual call records");
assert.deepEqual(docsCase.calls.map(call => call.tool),
  ["search_openai_docs", "fetch_openai_doc", "search_openai_docs", "fetch_openai_doc"]);
for (const call of docsCase.calls) {
  assert(!call.isError && call.requestedAtUtc && call.input, "Invalid MCP call record");
  if (call.tool === "search_openai_docs") {
    assert.equal(call.result.returnedHits, call.result.returnedUrls.length);
    assert(call.result.returnedUrls.every(url => /^https:\/\/(developers\.openai\.com|learn\.chatgpt\.com|platform\.openai\.com)\//.test(url)));
  } else assert(call.result.returnedHeading && call.result.returnedCharacters > 0);
}
const artwork = fs.readdirSync(path.join(root, "assets/brief")).filter((file) => file.endsWith(".svg"));
for (const file of artwork) {
  const source = read("assets/brief/" + file);
  assert(source.includes('role="img"') && source.includes("viewBox="), file + ": inaccessible SVG");
  assert(source.includes("<title ") && source.includes("<desc "), file + ": missing SVG descriptions");
  assert(!/<script|<foreignObject|<image|javascript:|@font-face|@import/i.test(source), file + ": unsafe SVG");
}
console.log("PASS: " + markdown.length + " Markdown files, " + paired.length
  + " bilingual pairs, " + manifest.issues.length + " issue(s), " + artwork.length
  + " SVGs; links, image paths, alt text, anchors, tables, commands, and latest issue.");

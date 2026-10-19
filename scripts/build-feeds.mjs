import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(fs.readFileSync(path.join(root, "newsletter/issues.json"), "utf8"));
const repo = "https://github.com/yunsell/ai-agent-skills-korean/blob/main/";
const site = "https://yunsell.github.io/ai-agent-skills-korean/";
const escape = value => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const issues = [...manifest.issues].sort((a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id));
const patches = [];

for (const language of ["ko", "en"]) {
  const english = language === "en";
  const file = "docs/feed" + (english ? ".en" : "") + ".xml";
  const self = site + path.basename(file);
  const link = repo + (english ? "README.en.md" : "README.md");
  const description = english ? "AI agent tools: changes, practical decisions, and exercises."
    : "AI 에이전트 도구의 변화, 적용 판단과 실습을 읽습니다.";
  const items = issues.map(issue => {
    const url = repo + "newsletter/" + encodeURIComponent(issue.files[language]);
    const date = new Date(issue.date + "T00:00:00+09:00").toUTCString();
    return "    <item>\n      <title>" + escape(issue.id + " · " + issue.title[language])
      + "</title>\n      <link>" + escape(url) + "</link>\n      <guid isPermaLink=\"true\">" + escape(url)
      + "</guid>\n      <pubDate>" + date + "</pubDate>\n      <description>"
      + escape(issue.topics.join(" · ") + " — " + (english ? "Read the full issue on GitHub." : "GitHub에서 전체 내용을 읽으세요."))
      + "</description>\n    </item>";
  }).join("\n");
  const source = '<?xml version="1.0" encoding="UTF-8"?>\n'
    + '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n  <channel>\n'
    + "    <title>Agent Stack Brief · " + (english ? "English" : "한국어") + "</title>\n"
    + "    <link>" + escape(link) + "</link>\n    <description>" + escape(description) + "</description>\n"
    + "    <language>" + (english ? "en" : "ko") + "</language>\n"
    + '    <atom:link href="' + escape(self) + '" rel="self" type="application/rss+xml"/>\n'
    + items + "\n  </channel>\n</rss>\n";
  const absolute = path.join(root, file);
  const exists = fs.existsSync(absolute);
  const old = exists ? fs.readFileSync(absolute, "utf8") : "";
  if (process.argv.includes("--check")) {
    if (old !== source) throw new Error("Feed missing or stale: " + file + ". Regenerate with --patch.");
  } else if (old !== source) {
    patches.push((exists ? "*** Update File: " : "*** Add File: ") + absolute
      + (exists ? "\n@@\n" + old.trimEnd().split("\n").map(line => "-" + line).join("\n") : "")
      + "\n" + source.trimEnd().split("\n").map(line => "+" + line).join("\n"));
  }
}
if (process.argv.includes("--check")) console.log("PASS: two RSS feeds match the issue manifest.");
else if (process.argv.includes("--patch")) {
  if (patches.length) process.stdout.write("*** Begin Patch\n" + patches.join("\n") + "\n*** End Patch\n");
} else console.log("Use --check to validate RSS feeds or --patch to print an apply_patch patch.");

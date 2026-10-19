# Real design case · Mobile discovery in this catalog

[Agent Stack Brief](../../README.en.md) · [한국어](catalog-design.md) · **English** · [Choose a design workflow](../design-workflows.en.md)

**Outcome first:** We preserved this repository’s 56 real resources, replaced GitHub’s four-column resource tables with vertical lists, and built a bilingual search reader. This improves the catalog you use here, not a fictional store or a mockup.

[한국어 검색 페이지](https://yunsell.github.io/ai-agent-skills-korean/catalog/index.html) · [English reader](https://yunsell.github.io/ai-agent-skills-korean/catalog/en.html) · [Full GitHub catalog](../../catalog/README.en.md)

## Task and decisions

- **Input:** Nine categories, 56 resources, original URLs, purposes, capabilities, and examples from both catalogs. The baseline commit is `59a094e268ff618601a6cd6b8fee500a66ab610a`.
- **Problem:** Mobile readers had to compare names, purposes, capabilities, and examples horizontally. At a 390 CSS px viewport, the old GitHub Skills table showed 325px of a 496px-wide content area.
- **Design:** Keep every resource visible in GitHub’s vertical list. A separate reader combines name/task search with a category filter, presents source links first, and expands capabilities and examples on demand.
- **Implementation:** HTML/CSS/JavaScript guided by adapt, onboard, and frontend-design, followed by browser checks. This is not an execution of Figma, shadcn, or Chrome MCP. The reader requires no installation and adds no account connection or analytics.

## Actual screens

The old GitHub table and new reader are **different surfaces**. These images document the problem and implementation, not a controlled user-outcome experiment.

![Before: the Skills resource table overflows a narrow GitHub viewport](../../docs/evidence/catalog-design/before.png)

![After: vertical mobile discovery with Figma search and the MCP category selected](../../docs/evidence/catalog-design/reader-mobile.png)

[Desktop full list](../../docs/evidence/catalog-design/reader-desktop.png) · [Keyboard focus](../../docs/evidence/catalog-design/keyboard.png) · [Loading failure](../../docs/evidence/catalog-design/error.png)

## Expected and observed outcomes

- **Preservation:** Both languages must retain nine categories and 56 resources. Names, source URLs, purposes, capabilities, and examples were compared against the previous commit and preserved. Search data is now generated from Markdown with an agreement check.
- **Discovery:** Searching `Figma` with category `MCP` actually returned one `Figma MCP` entry. The empty state and reset back to 56 resources also worked.
- **Continuity:** Language switching and reload retained the query and category in the URL. The English result displayed `1 resource`.
- **Keyboard:** Tab traversed search, category, reset, source link, and disclosure; Space opened the disclosure. Visible focus was checked.
- **Recovery:** The local preview deliberately returned HTTP 503 for the first data request. Error, retry, and GitHub fallback appeared. Retry restored one result while preserving filters. This does not claim reproduction of a production outage.
- **Widths:** Chrome checks at 320, 390, 768, and 1280 CSS px loaded all 56 resources. Document scroll width equaled viewport width at each size.

**Record:** [13 browser observations](../../docs/evidence/catalog-design/checks.json) = nine functional paths plus four viewport widths. These are manually organized observations from local Chrome on 2026-10-19, not a raw trace. Physical phones, assistive technologies, user interviews, search time, and conversion rates were not measured.

## Reproduce the work

Clone the repository and use Node.js 22 or later. No external package installation or MCP registration is needed.

```bash
node scripts/build-catalog.mjs --check
node scripts/test-catalog.mjs
node scripts/preview-catalog.mjs
```

Open `/catalog/index.html` at the local address printed by the server. Check `Figma` + `MCP`, no results, reset, language switching, and keyboard navigation. After a fresh server start, open `/fault/catalog/index.html?q=Figma&category=mcp`: only the first data request fails so you can test retry. This route is local QA only and is not deployed to Pages. Stop with Ctrl+C.

If your next task needs a design source, see [Figma connection vs. component implementation vs. browser verification](../design-workflows.en.md). New to MCP connection itself? Start with [client-specific first steps](../client-first-steps.en.md).

# Executed case · review a setup guide through MCP

[Agent Stack Brief](../../README.en.md) · [한국어](docs-mcp-review.md) · **English** · [Recovery guide](../mcp-recovery.en.md)

**Result:** two searches and two page fetches actually ran through OpenAI Docs MCP. Configuration format, two timeout types, and the documentation server's scope informed this repository's [recovery guide](../mcp-recovery.en.md). This is a **documentation-retrieval MCP workflow**, separate from the browser UI recording.

## Task and execution scope

- **Task:** review the search exercise's MCP setup guidance and write a diagnostic sequence for readers whose connection fails.
- **Environment/date:** Codex desktop session · connected OpenAI Docs MCP · 2026-10-19 KST. The responses did not expose a server build version.
- **Input:** public official docs and this repository's guide. No account details, API keys, or private code were sent.
- **Boundary:** MCP performed documentation search/retrieval only. No new server installation, user configuration change, API call, or Chrome DevTools MCP execution.

## Steps and actual results

1. **Configuration search** · `search_openai_docs`
   - Expected: a relevant official page.
   - Actual: selected MCP configuration among 5 hits; API tool docs and changelogs also appeared.
2. **Configuration page fetch** · `fetch_openai_doc`
   - Expected: configuration format and failure stages.
   - Actual: confirmed TOML and distinct startup/tool timeouts.
3. **Docs MCP setup search** · `search_openai_docs`
   - Expected: the server guide.
   - Actual: none of the 3 hits was the exact guide; followed its link in the previously fetched official page.
4. **Docs MCP page fetch** · `fetch_openai_doc`
   - Expected: server scope and reproduction path.
   - Actual: confirmed read-only search/page retrieval and setup guidance.

The [request/result index JSON](../../docs/evidence/docs-mcp-review/calls.json) records actual inputs, timestamps, and returned URLs. It is an **edited execution index**, not raw server logs.

## What did it produce?

1. **Avoid format confusion:** Codex uses `[mcp_servers.<name>]` in `config.toml`. We retained the warning not to paste generic JSON there.
2. **Separate failure stages:** `startup_timeout_sec` controls server startup; `tool_timeout_sec` controls tool execution. Official defaults are 10s and 60s. Rather than prescribe longer waits, the guide separates [startup failure](../mcp-recovery.en.md#browser-start) from [call failure](../mcp-recovery.en.md#call-failure).
3. **Separate retrieval from execution:** Docs MCP retrieves documentation; it does not call the OpenAI API on your behalf. Server registration is also distinct from task completion.

[Official MCP configuration](https://learn.chatgpt.com/docs/extend/mcp) · [Official Docs MCP guide](https://developers.openai.com/learn/docs-mcp)

**Repository before/after:** connection-failure guidance previously centered on an external troubleshooting link. It now has four symptom paths with checks, expected states, next actions, and a help-request template. The established outcome is this review deliverable, not a percentage of working time saved.

## Reproduce the workflow

Do not re-register an existing connection. These official commands are for readers adding a new server; **they were not executed as part of this case**. For other clients, choose the appropriate setup in the official guide.

```bash
codex mcp add openaiDeveloperDocs --url https://developers.openai.com/mcp
codex mcp list
```

Send this request to your connected agent:

```text
Use OpenAI Docs MCP to verify Codex MCP configuration format and the
difference between server startup and tool execution timeouts.
Search, then fetch the relevant official page. Separate facts, sources, and unknowns.
Compare against this repository's guide and propose edits without changing user settings.
If search results are irrelevant, follow related links in official pages.
Explicitly label commands you did not execute.
```

**Done means:** a sourced review, edit proposals, and actual call records. Use the [recovery guide](../mcp-recovery.en.md#search-no-match) if retrieval fails.

## Limits and lesson

Search returned irrelevant results too. Fetching the official page rather than treating the first hit as the answer mattered. This establishes documentation review only, not installation success rates, productivity gains, time saved, or production incident resolution. Results can change as upstream docs and search ranking change.

[Browser UI case](002-browser-evidence.en.md) · [Search exercise](../web-validation.en.md) · [Catalog](../../catalog/README.en.md)

# Client first steps · complete one documentation lookup

[Agent Stack Brief](../README.en.md) · [한국어](client-first-steps.md) · **English** · [Find a tool](../catalog/README.en.md)

**Goal:** retrieve a public document and get one sourced answer. Choosing a tool and successfully connecting it are different steps. This example uses only the read-only OpenAI Docs MCP.

[Codex](#codex) · [Claude Code](#claude-code) · [Cursor](#cursor)

This guide assumes your chosen client is installed. If its command cannot be found, check installation and runtime environment rather than repeatedly registering a server.

**Skip registration if already connected.** These commands/JSON are configuration instructions, not actions executed on readers' machines. Do not overwrite entries or paste another client's format. Check administrator policy in managed environments.

<a id="codex"></a>

## 1. Codex

1. Check MCP registration/settings on the host you use. The default file is `~/.codex/config.toml`, using TOML rather than JSON.
2. Add a server only when a new connection is needed. Registration changes user configuration.

```bash
codex mcp add openaiDeveloperDocs --url https://developers.openai.com/mcp
codex mcp list
```

3. Check connected tools in your client, then run the shared request below. A name in the list alone is not completion.

**Stuck?** [Missing server](mcp-recovery.en.md#server-missing) → [startup failure](mcp-recovery.en.md#browser-start). [Official setup](https://developers.openai.com/learn/docs-mcp)

<a id="claude-code"></a>

## 2. Claude Code

1. Check existing registrations from your project folder; add only if not duplicated. `--scope local` is private to you for that project, distinct from a team-shared `.mcp.json`.

```bash
claude mcp add --transport http --scope local openaiDeveloperDocs https://developers.openai.com/mcp
claude mcp list
```

2. Use `/mcp` inside Claude Code to check connection, then run the shared request.
3. For team sharing, review project scope and approval separately. Do not commit personal settings or secrets.

**Stuck?** [Registration/startup](mcp-recovery.en.md#server-missing) or [call failure](mcp-recovery.en.md#call-failure). [Official Claude Code MCP docs](https://code.claude.com/docs/en/mcp)

<a id="cursor"></a>

## 3. Cursor

1. Choose project `.cursor/mcp.json` or personal `~/.cursor/mcp.json` scope. This is a **project configuration example**.
2. Merge just the server entry if a config already exists; do not replace the whole file.

```json
{
  "mcpServers": {
    "openaiDeveloperDocs": {
      "url": "https://developers.openai.com/mcp"
    }
  }
}
```

3. Check activation and available tools in Cursor's MCP settings, then send the shared request to the agent. Restart according to upstream guidance when needed. Menu labels can vary by version.

**Stuck?** [Missing server](mcp-recovery.en.md#server-missing) or [search results](mcp-recovery.en.md#search-no-match). [Official Cursor MCP docs](https://cursor.com/docs/mcp)

## Run this one request after connecting

```text
Use OpenAI Docs MCP to search Codex MCP configuration and fetch the relevant page.
Briefly explain the difference between server registration and a successful call, with a source URL.
Separate material you could not retrieve and commands you did not run. Do not change files or account settings.
```

**First success:** actual retrieval + a short answer + the primary URL. Reading setup commands or seeing a registered name is not sufficient.

**Next task:** [Executed MCP review](cases/docs-mcp-review.en.md) · [Design workflow case](cases/catalog-design.en.md) · [Choose a design tool](design-workflows.en.md)

**Review scope · 2026-10-19:** checked official guidance using OpenAI Docs. Unlike the existing Docs MCP retrieval case, new installations/registrations across all three clients were not execution-tested. Other services can require additional authentication, permissions, or cost.

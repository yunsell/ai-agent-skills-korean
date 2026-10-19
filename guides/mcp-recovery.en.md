# When MCP fails · start with the symptom

[Agent Stack Brief](../README.en.md) · [한국어](mcp-recovery.md) · **English** · [Search exercise](web-validation.en.md)

**Sequence:** registration → server startup → tool call → result check. Pick the failing stage. Being listed, being connected, and completing the task are different states.

Unsure where settings belong? Choose your client in [first steps](client-first-steps.en.md).

- [Server missing from the list](#server-missing)
- [Server or browser will not start](#browser-start)
- [Connected, but calls fail](#call-failure)
- [Search results are irrelevant](#search-no-match)

**Stop first:** repeated installs, replacing entire configs, deleting whole caches, or weakening security restrictions. A timed-out write may already have executed: inspect current state before retrying.

<a id="server-missing"></a>

## 1. Server missing from the list

**Check:** are the client and configuration format correct? Codex uses TOML; other clients can use different JSON keys. Distinguish plugin-provided servers from manually registered servers.

Read-only registration check in Codex:

```bash
codex mcp list
```

**Expected:** the intended server name appears. If absent, compare [client setup](web-validation.en.md); do not duplicate existing entries. After a config change, follow your client's restart/reconnect procedure. Ask the administrator about managed settings.

**Next:** if listed, check [startup](#browser-start). A listing alone is not success.

<a id="browser-start"></a>

## 2. Server or browser will not start

**Check:** find the first error in the client's server logs. For local STDIO servers, verify that the terminal and client use the same Node/npm environment.

```bash
node --version
npm --version
```

For Chrome tools, also check Chrome installation and whether it can launch. Use the exercise's separate session rather than forcibly closing a regular profile. A remote HTTP server may not need the Node checks.

**Expected:** a connected server and a loaded tool list. Codex's `startup_timeout_sec` controls startup; `tool_timeout_sec` controls calls. Check executable paths and errors before increasing timeouts.

**Next:** compare your environment and error with [official Chrome troubleshooting](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/troubleshooting.md) or the relevant server's guidance. Do not apply permission or sandbox bypasses without approval, even if a troubleshooting page suggests them.

<a id="call-failure"></a>

## 3. Connected, but calls fail

**Check:** does the tool exist, and are required inputs correct? Distinguish authentication errors, missing tools, and timeouts; retain the last error. Remove tokens, cookies, and personal data before sharing logs.

**Expected:** one allowed read request for public material succeeds and returns content. If the tool cannot be selected, check host activation, allowlists, or organization policy. Authenticate only through the service's official flow.

**Next:** safely retry only a read. For writes such as saving, sending, or deploying, inspect server-side state before repeating the call. Use the report template below if unresolved.

<a id="search-no-match"></a>

## 4. Search results are irrelevant

**Check:** a successful search does not mean the answer was found. Narrow the query with product names and configuration keys; check the document title and target product.

**Expected:** retrieve an official page that directly answers the question. If absent from search, follow links inside a related official page. The [executed Docs MCP case](cases/docs-mcp-review.en.md) used this path.

**Next:** report the attempted path and mark unresolved facts unverified. Reading a command in documentation is not executing it.

## Copy this when requesting help

```text
Environment, client, version:
Server name/version (not exposed if unknown):
Failure stage: registration / startup / call / result
Last request and error (secrets removed):
Expected / actual result:
Checks already performed:
External changes: confirmed / unverified
```

**Review scope · 2026-10-19:** diagnostic guidance based on [official MCP configuration](https://learn.chatgpt.com/docs/extend/mcp) and Chrome docs. The irrelevant-search path was observed in the executed case; other failures were not all reproduced.

[Executed MCP workflow](cases/docs-mcp-review.en.md) · [Back to the exercise](web-validation.en.md)

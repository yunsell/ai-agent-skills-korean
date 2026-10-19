# Validate a search flow and retain the results

[Agent Stack Brief](../README.en.md) · [한국어](web-validation.md) · **English** · [Issue 002](../newsletter/2026-10-19.en.md#mcp)

**You get:** pass/fail records and screen evidence for a search flow. Start with an example that has fixed expected results.

**See the result first:** [Executed case — four passing checks, filmstrip, and event excerpts](cases/002-browser-evidence.en.md). It was recorded through Chrome DevTools UI, not MCP.

## 1. Open the example first

[Open the search practice page →](https://yunsell.github.io/ai-agent-skills-korean/labs/search.html?lang=en)

No login is required. Searches run within the page. Expect 3 initial results, 2 for `agent`, 0 for `zzzz`, and 3 after reset. [Example source](../docs/labs/search.html)

## 2. Choose an execution path

| Path | Preparation and first action |
| --- | --- |
| No-install UI check | Open the example in Chrome and run the four steps manually. Follow the [case's collection method](cases/002-browser-evidence.en.md) for Performance recording. No MCP required. |
| Connect an agent through MCP | Configure your client below, then use the request in step 3. Verify connection and actual results separately. |

If you already use a browser tool, check those interactions first. To explore the diagnostics from issue 002, use **Chrome DevTools MCP 1.11.0**. You need Node.js LTS, npm, Chrome, and an MCP-capable agent. [Official setup](https://github.com/ChromeDevTools/chrome-devtools-mcp#getting-started) · [Client configuration](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/client-configurations.md)

### Codex · register with the CLI

If this name is already registered, inspect its configuration first. These commands register a new server.

```bash
codex mcp add chrome-devtools -- npx -y chrome-devtools-mcp@1.11.0 --isolated --no-usage-statistics --no-performance-crux
codex mcp list
```

Codex uses `~/.codex/config.toml` for MCP settings, shared across desktop, CLI, and IDE. A listing confirms registration, not a passing exercise. [Official Codex MCP documentation](https://developers.openai.com/codex/mcp)

### Claude Code · Cursor · VS Code and others

Choose your client in the [official client configurations](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/client-configurations.md). File locations and server keys can differ; do not paste this JSON directly into Codex configuration.

<details>
<summary>JSON example for clients accepting mcpServers</summary>

Add the server entry rather than replacing your entire configuration.

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["-y", "chrome-devtools-mcp@1.11.0", "--isolated", "--no-usage-statistics", "--no-performance-crux"]
    }
  }
}
```

</details>

The version is pinned for this exercise and uses a separate browser session. The two collection flags disable usage statistics and CrUX lookups. [Configuration source](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/configuration.md)

## 3. Copy this request

```text
Open https://yunsell.github.io/ai-agent-skills-korean/labs/search.html?lang=en and validate search.
1. Check that the initial result count is 3.
2. Search agent and check for 2 results; search zzzz and check for 0 results and helpful text.
3. Press Reset and check that the input is empty and 3 results return.
Record expected and actual outcomes, pass/fail, and screen evidence locations for each step.
Include the tool and version. Mark any step you could not execute as unverified.
```

If the connection fails, start with [official troubleshooting](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/troubleshooting.md). If setup needs additional file changes or account connections, check the reason first.

## 4. Record results in this format

This is an **expected-outcome template**. Fill actual outcomes after execution.

| Step | Expected | Actual | Verdict |
| --- | --- | --- | --- |
| First screen | 3 results | Record after running | Unverified |
| Search agent | 2 results | Record after running | Unverified |
| Search zzzz | 0 results and helpful text | Record after running | Unverified |
| Reset | Empty input and 3 results | Record after running | Unverified |

**Evidence:** tool/version / execution date / screen files or attachments / failed and unverified steps.

The exercise is complete when all four outcomes match and evidence can be reopened. It does not establish overall website quality.

<details>
<summary>Explore further · recordings and performance diagnostics</summary>

After checking behavior, record the same flow and collect a performance trace with cache conditions noted. Check the [tool reference](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/tool-reference.md) for tools available in your setup. Set performance thresholds for your project. Record diagnostics separately from the behavior checks above.

</details>

[Tool comparison](../catalog/README.en.md#field-cards) · [Back to this issue](../newsletter/2026-10-19.en.md)

**Review scope · 2026-10-19:** the four search steps in both languages and English Enter-key submission were checked in Chrome 155.0.8059.82 on macOS. A separate case publishes a Performance UI recording of the Korean page. MCP and Codex configuration are based on primary documentation; this exercise has not yet been executed through Chrome DevTools MCP.

# Your first agent stack

[Agent Stack Brief](../README.en.md) · [한국어](first-stack.md) · **English** · [Catalog](../catalog/README.en.md)

Reading the news does not require installing every tool. Start with **one task → minimum setup → small validation**. This is editorial guidance, not a record of executed tests.

## 1. Separate the roles

| Role | Question it answers | First action |
| --- | --- | --- |
| Skill | What procedure and standards should guide the task? | Choose only the instructions needed for one recurring job |
| MCP·CLI | What tools and data can it access? | Begin with the read tools you need |
| Harness | How are execution, files, context, and approvals handled? | Check whether your current setup is enough before expanding |

These are this repository's navigation categories. A plugin is an installable package that can combine skills and MCP; it is not synonymous with a harness. [Official Skills & Plugins guide](https://learn.chatgpt.com/docs/skills-and-plugins) · [Example harness implementation](https://github.com/langchain-ai/deepagents)

## 2. Choose one outcome

- Interface quality: [frontend quick start](../catalog/README.en.md#starter-packs)
- Database changes: [database quick start](../catalog/README.en.md#starter-packs). Use isolation, not a production database
- Issue investigation: [the first issue's read-only experiment](../newsletter/2026-10-14.en.md#experiment)

Check installation sources, authentication, and access in the [comparison cards](../catalog/README.en.md#field-cards). Verify host compatibility and avoid conflicts with existing instructions and hooks.

## 3. Write down three things before execution

1. **Inputs:** which repositories, files, and services may be read?
2. **Approval boundaries:** which file changes, messages, spending, or deployment actions need approval?
3. **Completion evidence:** which tests, logs, or artifacts will demonstrate completion?

A prohibition in a prompt is not an access control. Inspect the actual tools and credential scope.

## 4. Expand after a small trial

Start with reading and planning; review before making changes. On errors, inspect current state and the last request's outcome before retrying. If you run a test, record environment, versions, checks, and limitations.

**Checklist:** only needed instructions · minimum permissions · isolated trial · completion evidence.

[Back to briefings](../newsletter/README.en.md) · [Suggest or correct a resource](../CONTRIBUTING.md#english)

# Resource Catalog

[Agent Stack Brief](../README.en.md) · [한국어](README.md) · **English**

A curated collection of skills, MCP servers, plugins, frameworks, and learning resources for working with AI agents.

Core documentation reviewed **2026-10-12**; selected releases updated **2026-10-19**. [Latest briefing](../newsletter/2026-10-19.en.md).

## What are you working on?

Open one group for a starting point. If you know a name, use Ctrl+F / ⌘F. Project names link to upstream sources.

<a id="task-code"></a>
<details>
<summary><strong>01 · Build and test</strong> — interfaces, browsers, and code quality</summary>

**Start with:** [Frontend quick start](../guides/quick-starts.en.md#frontend).

[Find design review, Figma, or component workflows](../guides/design-workflows.en.md)

- UI implementation: [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills)
- Browser interaction: [Playwright MCP](https://github.com/microsoft/playwright-mcp); performance diagnosis: [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp)
- Planning and tests: [Superpowers](https://github.com/obra/superpowers)
- Prompt/model regression: [Promptfoo](https://github.com/promptfoo/promptfoo)

[Try the search validation exercise](../guides/web-validation.en.md)

</details>

<a id="task-work"></a>
<details>
<summary><strong>02 · Work with documents</strong> — design, source files, and office tasks</summary>

**Start with:** [Anthropic Skills](https://github.com/anthropics/skills) for document and design workflows.

- Convert PDF and Office files: [MarkItDown](https://github.com/microsoft/markitdown)
- Gmail, Drive, and Calendar: [Google Workspace CLI](https://github.com/googleworkspace/cli) — under development; not an officially supported Google product

</details>

<a id="task-ops"></a>
<details>
<summary><strong>03 · Operate and manage data</strong> — databases, GitHub, errors, and skill review</summary>

**Start with:** [Database quick start](../guides/quick-starts.en.md#database) or [Error investigation](../guides/quick-starts.en.md#operations).

- Database guidance: [Supabase Agent Skills](https://github.com/supabase/agent-skills)
- Issues and PRs: [GitHub MCP Server](https://github.com/github/github-mcp-server)
- Production errors: [Sentry for AI](https://github.com/getsentry/sentry-for-ai)
- Review third-party skills: [Cisco Skill Scanner](https://github.com/cisco-ai-defense/skill-scanner)

</details>

<a id="task-build"></a>
<details>
<summary><strong>04 · Build an agent</strong> — application frameworks, evaluation, and execution</summary>

**Start with:** [Agent development quick start](../guides/quick-starts.en.md#agent) for an ADK app and evaluation workflow.

- Agent applications: [OpenAI Agents SDK](https://github.com/openai/openai-agents-python)
- ADK development and evaluation: [Google Agents CLI](https://github.com/google/agents-cli)
- Execution, files, context, and approvals: [Deep Agents](https://github.com/langchain-ai/deepagents)

[Understand Skills, MCP, and Harness](../guides/first-stack.en.md)

</details>

**Already know what you need?** [Quick starts](#starter-packs) · [Setup and access](#field-cards) · [Updates and alternatives](#recent)

<details>
<summary>Jump to a resource category</summary>

[Skills](#skills) · [MCP](#mcp) · [CLI](#tools) · [Plugins](#plugins) · [Validation](#validation) · [Harnesses](#harnesses) · [Frameworks](#frameworks) · [Agents](#agents) · [Learning](#learning)

</details>

<a id="starter-packs"></a>

## Task-based quick starts

Each link opens the instructions directly.

| Task | Instructions |
| --- | --- |
| <a id="starter-frontend"></a>01 · Frontend quality check | [Open guide →](../guides/quick-starts.en.md#frontend) |
| <a id="starter-db"></a>02 · Safer database change | [Open guide →](../guides/quick-starts.en.md#database) |
| <a id="starter-process"></a>03 · Plan through test | [Open guide →](../guides/quick-starts.en.md#process) |
| <a id="starter-ops"></a>04 · Production incident investigation | [Open guide →](../guides/quick-starts.en.md#operations) |
| <a id="starter-agent"></a>05 · Agent development and evaluation | [Open guide →](../guides/quick-starts.en.md#agent) |

<a id="field-cards"></a>

## Practical comparison · choose, then expand

These nine resources' setup, compatibility, and permissions were docs-reviewed on **2026-10-12**. **Docs reviewed ≠ execution tested.** This pass changes presentation, not their review dates.

[Code and browsers](#compare-code) · [Databases and operations](#compare-data) · [Docs and agent workflows](#compare-workflows)

Each item shows prerequisites, credentials, access, and risk vertically—no wide comparison table. For setup problems, use the [symptom-based recovery guide](../guides/mcp-recovery.en.md).

<a id="compare-code"></a>

### Code and browsers

<details>
<summary>Vercel Agent Skills · React/Next.js review</summary>

[Upstream setup](https://github.com/vercel-labs/agent-skills)

- **Preparation:** Agent Skills-compatible host · npx skills
- **Authentication:** No install credentials
- **Access:** Project code and UI
- **Risk:** Medium

</details>

<details>
<summary>Playwright CLI · Browser validation</summary>

[Upstream setup](https://github.com/microsoft/playwright-cli)

- **Preparation:** Node.js 18+ · shell-capable agent · npm
- **Authentication:** No tool credentials; review authenticated profiles and sensitive forms separately
- **Access:** Browser input, sessions, screenshots
- **Risk:** Medium

</details>

<details>
<summary>Superpowers · Planning and tests</summary>

[Upstream setup](https://github.com/obra/superpowers)

- **Preparation:** Check Installation per agent; install for each environment
- **Authentication:** No separate service login
- **Access:** Files, commands, Git, tests
- **Risk:** Medium

</details>

<a id="compare-data"></a>

### Databases and operations

<details>
<summary>Supabase Agent Skills · Supabase/PostgreSQL</summary>

[Upstream setup](https://github.com/supabase/agent-skills)

- **Preparation:** Agent Skills-compatible host · npx skills
- **Authentication:** No install credentials; service credentials required for live remote DB work
- **Access:** Code, schema, DB tasks
- **Risk:** High

</details>

<details>
<summary>Prisma Skills · Prisma schema/migrations</summary>

[Upstream setup](https://github.com/prisma/skills)

- **Preparation:** Agent Skills-compatible host; match skills to the installed ORM version
- **Authentication:** No install credentials; service credentials required for live remote DB work
- **Access:** Schema and migrations
- **Risk:** High

</details>

<details>
<summary>Sentry for AI · Production error investigation</summary>

[Upstream setup](https://github.com/getsentry/sentry-for-ai)

- **Preparation:** Codex/Claude Code/Cursor/Grok distributions; some tasks need GitHub CLI
- **Authentication:** Sentry login
- **Access:** Errors, logs, traces, code
- **Risk:** High

</details>

<a id="compare-workflows"></a>

### Docs and agent workflows

<details>
<summary>Context7 · Version-specific documentation</summary>

[Upstream setup](https://github.com/upstash/context7)

- **Preparation:** Node.js 18+ for ctx7 · npx ctx7 setup; other hosts: manual MCP guidance
- **Authentication:** OAuth/API key
- **Access:** Remote docs and agent config
- **Risk:** Low

</details>

<details>
<summary>Google Agents CLI · ADK app development/evaluation</summary>

[Upstream setup](https://github.com/google/agents-cli)

- **Preparation:** Python 3.11+ · uv · Node.js
- **Authentication:** Distinguish local model credentials from cloud deployment credentials
- **Access:** Local evaluation and cloud deployment
- **Risk:** High

</details>

<details>
<summary>GitHub MCP Server · Repository, issue, and PR access</summary>

[Upstream setup](https://github.com/github/github-mcp-server)

- **Preparation:** Remote/local MCP host; local container setup requires Docker
- **Authentication:** OAuth/PAT
- **Access:** Repos, issues, PRs, Actions; start with the needed repo and read tools only
- **Risk:** Medium–High

</details>

**Risk legend:** Low = reading/docs · Medium = possible file, browser, or API changes · High = possible production-data, DB, deployment, or cost impact. This describes access scope, not project quality. Review credentials and granted permissions separately.

<a id="recent"></a>

**Design/docs additions reviewed · 2026-10-19:** checked primary guidance for Figma MCP, shadcn MCP, and OpenAI Docs MCP. Docs MCP retrieval was executed separately; Figma/shadcn remain docs-reviewed. The [design workflow guide](../guides/design-workflows.en.md) connects these paths with the existing Impeccable resource.

## Review records and latest news

The [2026-10-12 review](../docs/updates/2026-10-12.md#english) records the previous verification. Find dated news and commentary in the [newsletter archive](../newsletter/README.en.md), and the latest briefing on the [home page](../README.en.md). This catalog is for task-based discovery and installation guidance.

### Which alternative fits my task?

Choose by **execution environment and task**, not a universal "best tool" ranking.

| Task | Start with | Selection criteria |
| --- | --- | --- |
| Browser checks from a coding agent | [Playwright CLI](https://github.com/microsoft/playwright-cli) / [agent-browser](https://github.com/vercel-labs/agent-browser) | Shell access, CLI+Skill workflows, and recorded results |
| Browser interaction from an MCP host | [Playwright MCP](https://github.com/microsoft/playwright-mcp) | MCP tool calls better fit your host |
| ADK agent development, evals, deployment | [Google Agents CLI](https://github.com/google/agents-cli) | A Google ADK/Cloud-centered lifecycle |
| Prompt, model, and RAG regression comparison | [Promptfoo](https://github.com/promptfoo/promptfoo) | Reuse eval cases and compare results in CI |
| Security review before adopting external skills | [Cisco Skill Scanner](https://github.com/cisco-ai-defense/skill-scanner) | Scan files before install; passing is not a safety guarantee |
| Web performance, console, and network diagnosis | [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Need DevTools traces and network evidence beyond interaction checks |
| HTML-based video creation | [HyperFrames](https://github.com/heygen-com/hyperframes) / [Remotion Skills](https://github.com/remotion-dev/skills) | HyperFrames for HTML/CSS assets; Remotion for React compositions |
| Long tool output and session context | [Context Mode](https://github.com/mksglu/context-mode) | Advanced setup: test hooks, local storage, and routing conflicts in a trial project |

### Practical patterns to watch

| Pattern | Why it helps | Resources |
| --- | --- | --- |
| **CLI + Skill** | Let the CLI execute concise commands while a skill supplies the workflow and decision criteria | [Playwright CLI](https://github.com/microsoft/playwright-cli), [agent-browser](https://github.com/vercel-labs/agent-browser) |
| **Skill + MCP plugin** | Package domain guidance with tools that operate the service, reducing missing configuration | [Cloudflare Skills](https://github.com/cloudflare/skills), [Azure Skills Plugin](https://github.com/microsoft/azure-skills), [Sentry for AI](https://github.com/getsentry/sentry-for-ai) |
| **Evaluate before deploy** | Compare changes with datasets and metrics, then analyze failure modes before deployment | [Google Agents CLI](https://github.com/google/agents-cli) |
| **Production observe-and-repair loop** | Carry logs, traces, and issue context into code changes | [Sentry for AI](https://github.com/getsentry/sentry-for-ai), [Google Agents CLI](https://github.com/google/agents-cli) |
| **Version-specific documentation** | Supply the agent with docs and examples for the library version actually in use | [Context7](https://github.com/upstash/context7) |

According to [OpenAI's official skills guide](https://developers.openai.com/plugins/build/skills), a skill packages instructions, resources, and optional scripts and can be distributed in a plugin. Connections such as MCP handle live data, authentication, and service actions.

<a id="skills"></a>

## Skills

Add reusable workflows and domain knowledge to your agent.

| Resource | Use case | What it offers | Example use |
| --- | --- | --- | --- |
| [OpenAI Skills](https://github.com/openai/skills) | General tasks | A catalog of skills for coding, documents, and other tasks | Start with a skill for a recurring coding or document task |
| [Anthropic Skills](https://github.com/anthropics/skills) | Documents & design | Skill implementations for document and design workflows | Study document workflows or frontend design skills |
| [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills) | Frontend | React, Next.js, and web interface best practices | Use as a performance and UI checklist during React reviews |
| [Supabase Agent Skills](https://github.com/supabase/agent-skills) | Database | Skills for Supabase and PostgreSQL development | Guide database work in an app built with Supabase |
| [Remotion Skills](https://github.com/remotion-dev/skills) | Video | Compose and render videos with React | Create an explainer or product demo with React components |
| [Matt Pocock Skills](https://github.com/mattpocock/skills) | Planning & development | Requirements, PRDs, task breakdown, TDD, debugging, and code review | Clarify requirements with grill-me, then connect testing and review workflows |
| [NVIDIA Skills](https://github.com/nvidia/skills) | GPU & AI | Specialized workflows for CUDA, simulation, and AI | Find domain guidance for GPU or simulation work |
| [Awesome Copilot](https://github.com/github/awesome-copilot) | Copilot collection | Discover skills, instructions, and agent configurations | Find examples to adapt for your team's Copilot setup |
| [Impeccable](https://github.com/pbakaus/impeccable) | UI & UX design | Skills and tools for design critique, accessibility checks, typography, layout, and motion | Improve hierarchy, spacing, and polish in an existing interface |
| [Addy Osmani Agent Skills](https://github.com/addyosmani/agent-skills) | Engineering quality | Guidance for requirements, TDD, code review, and web performance across the development lifecycle | Turn team testing and review standards into repeatable workflows |
| [Context Engineering Skills](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering) | Context engineering | Patterns for context compression and degradation, memory, tool design, and agent evaluation | Investigate information loss and context costs in long tasks |
| [Prisma Skills](https://github.com/prisma/skills) | ORM & database | Guidance for Prisma CLI, Client, schemas, migrations, and version upgrades | Prepare database changes or upgrades in a Prisma project |
| [Neon Agent Skills](https://github.com/neondatabase/agent-skills) | Postgres & cloud | Neon and Postgres documentation plus branching and migration-testing workflows | Validate schema changes on an isolated database branch |
| [Google Agents CLI](https://github.com/google/agents-cli) | Agent development & operations | Skills for Google ADK project creation, evaluation datasets and metrics, deployment, CI/CD, logs, and traces | Build an agent for Google Cloud, compare evaluation results, then deploy it |
| [Cloudflare Skills](https://github.com/cloudflare/skills) | Edge & serverless | Practical guidance for Workers, Agents SDK, Durable Objects, Wrangler, web performance, and Cloudflare One | Build a stateful agent or Worker and review its deployment configuration |

<a id="mcp"></a>

## MCP

Connect agents to external services and data.

| Resource | Use case | What it offers | Example use |
| --- | --- | --- | --- |
| [GitHub MCP Server](https://github.com/github/github-mcp-server) | Development | Connect repositories, issues, PRs, and Actions | Read an issue and draft a PR for the related change |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | Browser | Navigate and interact with web pages | Fill a web form and inspect the resulting page |
| [Google MCP](https://github.com/google/mcp) | Cloud | Connect Google Cloud services | Connect a workflow to Cloud data and services |
| [Perplexity MCP](https://github.com/perplexityai/modelcontextprotocol) | Search & research | Connect web search and source-based research | Gather web sources for a technical investigation |
| [Context7](https://github.com/upstash/context7) | Library documentation | Retrieve library- and version-specific docs and examples through MCP or CLI + Skills | Check API usage against the version used by your project |
| [OpenAI Docs MCP](https://developers.openai.com/learn/docs-mcp) | Official docs | Read-only documentation search and page retrieval | Check setup/API guidance against its source. [Executed workflow](../guides/cases/docs-mcp-review.en.md) |
| [Figma MCP](https://developers.figma.com/docs/figma-mcp-server/) | Design connection | Design context; some configurations also allow canvas changes | Map designs/tokens to code; check file access and write scope |
| [shadcn MCP](https://ui.shadcn.com/docs/mcp) | UI components | Browse, search, and install registry components | Find compatible components and review installation diffs |
| [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Web performance & debugging | Chrome performance traces, network requests, console, screenshots, and browser interaction | Investigate slow pages and failed requests; review browser data access and default usage statistics |
| [Context Mode](https://github.com/mksglu/context-mode) | Advanced context management | Tool-output execution, indexing and search, local session storage, and host-specific routing hooks | Trial long tasks with large output; check host-specific hook support and storage policy |

**Find more servers:** [Official MCP Registry](https://registry.modelcontextprotocol.io/) · [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers). For educational implementations, see [MCP Reference Servers](https://github.com/modelcontextprotocol/servers).

Additional Chrome DevTools MCP docs review: **2026-10-19**. [1.11.0](https://github.com/ChromeDevTools/chrome-devtools-mcp/releases/tag/chrome-devtools-mcp-v1.11.0) adds FFmpeg-free recordings, a cache-bypass option, and inline failing audits with DOM nodes. Review diagnostic evidence in a non-sensitive test browser. Not execution-tested.

<a id="tools"></a>

## Discovery & CLI Tools

Find skills and connect tools to your agent workflow.

| Resource | Use case | What it offers | Example use |
| --- | --- | --- | --- |
| [Skills CLI / find-skills](https://github.com/vercel-labs/skills) | Skill discovery & management | A CLI for discovering, installing, and updating skills, with a find-skills discovery skill | Find a skill by describing the task you want to perform |
| [agent-browser](https://github.com/vercel-labs/agent-browser) | Browser CLI | Browser automation CLI with snapshots, element references, and a usage skill | Connect browser tasks through a CLI workflow |
| [Playwright CLI](https://github.com/microsoft/playwright-cli) | Browser verification | A CLI and skill for persistent sessions, clicks, input, screenshots, network inspection, tracing, and code recording | Reproduce an interface in a browser and save evidence after an agent implements it |
| [Google Workspace CLI](https://github.com/googleworkspace/cli) | Office workflows | CLI for Gmail, Drive, Calendar, Sheets, and other APIs, JSON output, and workflow skills | Automate email, calendar, and document tasks. Under development; not officially supported by Google |
| [HyperFrames](https://github.com/heygen-com/hyperframes) | HTML video creation | CLI and skills for rendering HTML, CSS, and media into MP4 | Create product demos and explainers from HTML assets; local rendering needs Node.js 22+ and FFmpeg |
| [MarkItDown](https://github.com/microsoft/markitdown) | Document input & conversion | Python library, CLI, and MCP package for converting PDF, Office, and other files to Markdown | Prepare text for search, summarization, or RAG; extracts structure/content rather than preserving visual fidelity |
| [skills.sh](https://skills.sh/) | Skill directory | Skill discovery with All Time, Trending, and Hot listings | Discover new candidates and current interest signals |

<a id="plugins"></a>

## Plugins

Install bundled skills and workflows.

| Resource | Use case | What it offers | Example use |
| --- | --- | --- | --- |
| [Superpowers](https://github.com/obra/superpowers) | Development workflow | A skills-based methodology for planning, TDD, debugging, and verification | Structure feature work from design through tests and review |
| [Azure Skills Plugin](https://github.com/microsoft/azure-skills) | Azure development & operations | Azure deployment, validation, diagnostics, cost, and security guidance bundled with Azure and Foundry MCP configuration | Inspect Azure resources, prepare and deploy an app, or analyze incidents and cost |
| [Sentry for AI](https://github.com/getsentry/sentry-for-ai) | Observability & production debugging | Skills for Sentry setup, error, trace, and log analysis, issue repair, alerts, and OpenTelemetry configuration | Assess the impact of a production error and fix code using its runtime context |
| [OpenAI Developers Plugin](https://developers.openai.com/learn/developers-codex-plugin) | OpenAI API development | Platform connection, API key setup, and Agents SDK guidance; capabilities differ by environment | Build OpenAI API apps or diagnose errors; check official installation and compatibility documentation |
| [Momentic Agent Skills](https://github.com/momentic-ai/skills) | Web & mobile E2E | Skills for authoring, running, classifying, and repairing tests, bundled with browser and mobile MCP servers | Create and repair regression tests on a real browser or device after a feature change |

Plugin packaging and installation vary by agent. Check the project's instructions for your environment.

<a id="validation"></a>

## Validation & Evaluation

Review safety before connecting more tools, and compare results before and after changes.

| Resource | Use case | What it offers | Example use |
| --- | --- | --- | --- |
| [Cisco Skill Scanner](https://github.com/cisco-ai-defense/skill-scanner) | Skill security review | Static, behavioral, and optional LLM analysis of skills and scripts, plus CI integration | Review suspicious behavior before installing or distributing third-party skills |
| [Promptfoo](https://github.com/promptfoo/promptfoo) | Evals, regression, red teaming | Config-driven prompt, agent, and RAG evaluation, model comparison, security tests, and CI integration | Compare accuracy and failure cases across model or prompt changes |

Scanner requires CPython 3.11–3.14. Users of 2.2.0 should review the [2.2.1 security fix](https://github.com/cisco-ai-defense/skill-scanner/releases/tag/2.2.1) and [2.2.2 follow-up](https://github.com/cisco-ai-defense/skill-scanner/releases/tag/2.2.2). **Additional docs review, 2026-10-19:** [2.3.0](https://github.com/cisco-ai-defense/skill-scanner/releases/tag/2.3.0) reports unscanned symlinks and load failures and changes taxonomy codes; review CI filters and exit codes too. Distinguish default static analysis from external-service analysis, and check what code/files may be sent before enabling LLM, VirusTotal, or other external analyzers. Promptfoo may also require credentials, transmit data, and incur costs depending on the model and target. Run security tests only against systems you own or are authorized to test.

<a id="harnesses"></a>

## Harnesses

Execution scaffolding that combines an agent loop with files, tools, memory, and approvals. Not a synonym for every agent framework.

| Resource | Use case | What it offers | Example use |
| --- | --- | --- | --- |
| [Deep Agents](https://github.com/langchain-ai/deepagents) | Agent harness | Filesystem, context management, subagents, skills/tools, and approval workflows | Start a multi-step agent workflow; enforce tool and sandbox boundaries separately |

Added from documentation on **2026-10-14**. Review the path-permission fix in [0.7.25](https://github.com/langchain-ai/deepagents/releases/tag/deepagents%3D%3D0.7.25) and the [official overview](https://docs.langchain.com/oss/python/deepagents/overview). Not execution-tested by this catalog.

**Additional docs review, 2026-10-19:** [0.7.26](https://github.com/langchain-ai/deepagents/releases/tag/deepagents%3D%3D0.7.26) and [0.7.27](https://github.com/langchain-ai/deepagents/releases/tag/deepagents%3D%3D0.7.27) improve async-subagent wait/status observability; [0.7.28](https://github.com/langchain-ai/deepagents/releases/tag/deepagents%3D%3D0.7.28) fixes ContextHubBackend glob path handling. Pin versions and regression-test approval waits and subdirectory results.

<a id="frameworks"></a>

## Frameworks & Libraries

Build agent applications and automation systems.

| Resource | Use case | What it offers | Example use |
| --- | --- | --- | --- |
| [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) | Agent orchestration | Compose tool calls and agent handoffs | Start with a small app that calls tools |
| [LangGraph](https://github.com/langchain-ai/langgraph) | State & control flow | Build stateful agent execution flows | Model a multi-step workflow with branches and state |
| [Microsoft Agent Framework](https://github.com/microsoft/agent-framework) | Python & .NET | Build agent systems in the Microsoft ecosystem | Integrate agent workflows into Python or .NET services |
| [Google ADK](https://github.com/google/adk-python) | Development & evaluation | Agent development kit from Google | Build an agent app around Google tooling |
| [PydanticAI](https://github.com/pydantic/pydantic-ai) | Types & structured output | Build agent applications with Python types | Return structured data for a typed backend |
| [smolagents](https://github.com/huggingface/smolagents) | Lightweight experiments | Implement and experiment with agents in a small codebase | Read a small example and experiment with tool execution |
| [CrewAI](https://github.com/crewAIInc/crewAI) | Role-based collaboration | Coordinate agents with different roles | Split work into research, analysis, and writing roles |
| [browser-use](https://github.com/browser-use/browser-use) | Web automation | A library for implementing browser tasks with agents | Implement browser automation inside a Python app |

<a id="agents"></a>

## Agents

Choose an existing tool for coding or research.

| Resource | Use case | What it offers | Example use |
| --- | --- | --- | --- |
| [OpenAI Codex](https://github.com/openai/codex) | Coding | Repository-based coding and verification | Implement a repository change and verify the result |
| [OpenHands](https://github.com/OpenHands/OpenHands) | Development automation | Run and extend software development agents | Extend development automation into a dedicated system |
| [Aider](https://github.com/Aider-AI/aider) | Terminal & Git | Edit code through a terminal conversation | Review conversational code edits in a Git repository |
| [Cline](https://github.com/cline/cline) | Coding | Coding and tool execution with approval controls | Inspect code changes and command execution step by step |
| [Continue](https://github.com/continuedev/continue) | Development workflows | Customize AI workflows for your development environment | Adapt AI workflows to an existing development setup |
| [MagenticLite (formerly Magentic-UI)](https://github.com/microsoft/magentic-ui) | Experimental browser & file agent | Browser/local file tasks, human approval and intervention, VM sandbox | Research human-in-the-loop automation; review limitations before production use |
| [GPT Researcher](https://github.com/assafelovic/gpt-researcher) | Research & reports | Research multiple sources and produce reports | Draft a research report from multiple web sources |

**Archived:** [Roo Code](https://github.com/RooCodeInc/Roo-Code) was archived when checked on 2026-10-12. Retained for reference to existing setups; for new adoption, compare current support in [Cline](https://github.com/cline/cline) and [Continue](https://github.com/continuedev/continue).

<a id="learning"></a>

## Learning

Explore implementation principles and specifications.

| Resource | Use case | What it offers | Example use |
| --- | --- | --- | --- |
| [Agent Zero to Hero](https://github.com/KeWang0622/agent-zero-to-hero) | Hands-on course | Build an agent harness without a framework | Learn by implementing tool calls and execution loops |

**Specification:** [Agent Skills](https://agentskills.io/specification) — the structure and format of a skill.

### Useful workflow patterns

| Pattern | Use it for |
| --- | --- |
| Repository instructions | Record project commands, conventions, and completion criteria in `AGENTS.md` or your agent's instruction file. |
| Reusable skills | Package recurring task procedures into a skill. |
| Tool connections | Connect external data and services through MCP or a CLI. |
| Verification loops | Include tests, logs, and diff review in the workflow. |

<a id="contributing"></a>

## Contributing

Suggest a useful resource or correct an entry through an [Issue](https://github.com/yunsell/ai-agent-skills-korean/issues) or Pull Request. See the [contribution guide](../CONTRIBUTING.md#english).

We select for a clear use case, an identifiable source, and useful documentation. This is not a ranking. Korean and English editions use the same categories and resources; link checks run monthly through GitHub Actions.

---

[Browse the earlier visual map](https://yunsell.github.io/ai-agent-skills-korean/) · Korean visual companion using the previous category layout.

Baseline review: **2026-10-12 (Korea time)**, covering existing resource status/activity and nine core setup guides. Later checks are dated in their own sections. Apart from the separately linked Docs MCP case, entries are docs-reviewed; examples, risk labels, and alternatives are editorial judgments. This is not a full execution audit, benchmark, or security certification. The visual map was outside this update's scope.

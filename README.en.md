# AI Agent Resources

[한국어](README.md) · **English**

A curated collection of skills, MCP servers, plugins, frameworks, and learning resources for working with AI agents.

[5-minute starter packs](#starter-packs) · [Field cards](#field-cards) · [Recent update](#recent) · [Skills](#skills) · [MCP](#mcp) · [Discovery & CLI](#tools) · [Plugins](#plugins) · [Frameworks](#frameworks) · [Agents](#agents) · [Learning](#learning) · [Contributing](#contributing)

## Find by task

| I want to… | Start here |
| --- | --- |
| Improve frontend quality | [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills) |
| Find document and design skills | [Anthropic Skills](https://github.com/anthropics/skills) |
| Find skills for database work | [Supabase Agent Skills](https://github.com/supabase/agent-skills) |
| Connect GitHub issues and PRs | [GitHub MCP Server](https://github.com/github/github-mcp-server) |
| Let an agent interact with a browser | [Playwright MCP](https://github.com/microsoft/playwright-mcp) |
| Adopt planning and testing workflows | [Superpowers](https://github.com/obra/superpowers) |
| Build an agent application | [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) |
| Evaluate and deploy an agent | [Google Agents CLI](https://github.com/google/agents-cli) |
| Investigate production errors with an agent | [Sentry for AI](https://github.com/getsentry/sentry-for-ai) |

> Know the name? Use `Ctrl+F` / `⌘F` to search this page. Every project name links to its source repository; consult it for installation and compatibility.

<a id="starter-packs"></a>

## 5-minute starter packs

If comparing tools one by one feels slow, start with a combination built around your goal. **Five minutes** is an approximate time to begin installation and send the first request; it does not include authentication, project setup, or completing the actual task. Review the source repository and files to be installed before running a command.

<details>
<summary><strong>01 · Frontend quality check</strong> — implementation guidance + current docs + real-browser verification</summary>

**Stack:** [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills) · [Context7](https://github.com/upstash/context7) · [Playwright CLI](https://github.com/microsoft/playwright-cli)

**Get started**

```bash
npx skills add vercel-labs/agent-skills
npx ctx7 setup
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

**First request**

> Review this React/Next.js interface against performance and UI guidance, then make the necessary changes. Use Context7 for documentation matching the versions in this project, verify the critical user flow with Playwright CLI, and preserve evidence for both successful and failing checks.

**Done when:** change summary, checks run, critical-flow result, and screenshots or a reproducible failure record.

</details>

<details>
<summary><strong>02 · Safer database change</strong> — schema analysis + migration + version-specific docs</summary>

**Stack:** choose [Supabase Agent Skills](https://github.com/supabase/agent-skills) or [Prisma Skills](https://github.com/prisma/skills) for your stack · [Context7](https://github.com/upstash/context7)

**Get started**

```bash
# Choose one of these for the stack you use.
npx skills add supabase/agent-skills
npx skills add prisma/skills

npx ctx7 setup
```

**First request**

> Inspect the current schema and its application usage first. Write a change plan and rollback procedure, warn me before any command that could lose data, and validate the migration against a development or isolated database before summarizing the result.

**Done when:** impact assessment, migration and rollback steps, validation result, and a production-readiness checklist.

</details>

<details>
<summary><strong>03 · Plan through test</strong> — requirements + task breakdown + TDD + completion checks</summary>

**Stack:** [Superpowers](https://github.com/obra/superpowers)

**Get started:** Superpowers uses a different install path for each agent. Choose your environment—Codex, Claude Code, Cursor, Copilot CLI, or another supported agent—from the source repository's **Quickstart**.

**First request**

> Do not implement this feature immediately. Clarify the requirements and constraints, break the work into small tasks, write a failing test first, and then implement it. Finish by reviewing the test results and diff against the completion criteria.

**Done when:** agreed requirements, task plan, red-to-green test record, final diff, and verification result.

</details>

<details>
<summary><strong>04 · Production incident investigation</strong> — impact + root cause + verified fix</summary>

**Stack:** [Sentry for AI](https://github.com/getsentry/sentry-for-ai)

**Get started**

```bash
npx @sentry/ai install
```

The installer guides you to the plugin for your agent. Accessing production data requires Sentry authentication.

**First request**

> Rank the major errors from the last 24 hours by user impact. Analyze the highest-impact error using its events, traces, and relevant code, then test a proposed fix. Do not resolve the issue or deploy anything without approval.

**Done when:** error evidence, impact, root-cause hypothesis, code and test results, and pre-deployment checks.

</details>

<details>
<summary><strong>05 · Agent development and evaluation</strong> — scaffold + eval dataset + failure analysis + deployment readiness</summary>

**Stack:** [Google Agents CLI](https://github.com/google/agents-cli)

**Get started**

```bash
uvx google-agents-cli setup

# To install only the skills without the CLI
npx skills add google/agents-cli
```

**First request**

> Build a small ADK agent that runs locally. Create an evaluation dataset with happy-path, edge, and failure cases, run the evaluation, and summarize failure clusters and the before-and-after difference. Do not deploy it to the cloud yet.

**Done when:** runnable agent, evaluation cases and metrics, failure analysis, and evidence for a deployment decision.

</details>

<a id="field-cards"></a>

## Practical field cards

These cards compare the starter-pack resources using one set of criteria. **Docs checked** means we reviewed the source installation, compatibility, and usage documentation; it does not mean this repository guarantees results in a live account or project.

| Resource | Supported environments | Setup | Authentication | Primary access | Risk | Checked |
| --- | --- | --- | --- | --- | --- | --- |
| [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills) | Codex, Claude Code, Cursor, Copilot, and other Agent Skills hosts | Easy · `npx skills` | Not for install | Project guidance, code and UI changes | Medium | Docs · 2026-09-10 |
| [Context7](https://github.com/upstash/context7) | Codex, Claude Code, Cursor, VS Code, Copilot, and others | Easy · `npx ctx7 setup` | OAuth or API key | Remote documentation and agent config | Low | Docs · 2026-09-10 |
| [Playwright CLI](https://github.com/microsoft/playwright-cli) | Coding agents that can use a CLI | Easy · npm | Not required¹ | Browser, page input, sessions, screenshots | Medium | Docs · 2026-09-10 |
| [Supabase Agent Skills](https://github.com/supabase/agent-skills) | Agent Skills-compatible hosts | Easy · `npx skills` | Not for install² | Project code, schema and database guidance | High | Docs · 2026-09-10 |
| [Prisma Skills](https://github.com/prisma/skills) | Agent Skills-compatible hosts | Easy · `npx skills` | Not for install² | Prisma schema, migrations and DB commands | High | Docs · 2026-09-10 |
| [Superpowers](https://github.com/obra/superpowers) | Codex, Claude Code, Cursor, Copilot CLI, OpenCode, and others | Moderate · agent-specific plugin | Not required | Project files, commands, Git and test workflows | Medium | Docs · 2026-09-10 |
| [Sentry for AI](https://github.com/getsentry/sentry-for-ai) | Codex, Claude Code, Cursor, Grok | Moderate · agent-specific plugin | Required for production queries | Errors, logs, traces and project code | High | Docs · 2026-09-10 |
| [Google Agents CLI](https://github.com/google/agents-cli) | Codex, Claude Code, Antigravity, and other coding agents | Moderate · Python/uv/Node | AI Studio or Google Cloud to run | Local code and evals, cloud deployment and logs | High | Docs · 2026-09-10 |
| [GitHub MCP Server](https://github.com/github/github-mcp-server) | Hosts supporting remote or local MCP | Moderate · host-specific setup | OAuth or PAT | Repositories, issues, PRs, and Actions³ | Medium–High | Docs · 2026-09-10 |

¹ Risk increases when a task uses an authenticated browser profile or sensitive form.<br>
² The corresponding service credentials are required for live remote database work.<br>
³ GitHub MCP supports read-only mode and tool allowlists. Start with only the repository and read tools the task needs.

**Risk legend:** Low = primarily reading or documentation retrieval · Medium = may change files, browser state, or external APIs · High = may affect production data, databases, cloud deployments, or cost. Risk describes the possible scope after connection, not project quality.

<a id="recent"></a>

## Recently reviewed · 2026-09-09

On [skills.sh Trending and Hot](https://skills.sh/trending), we observed activity around **Google Agents CLI, Cloudflare Skills, Azure Skills, Momentic, and Playwright CLI**. We then checked each source repository for its actual scope and installation documentation. Rankings change continuously; popularity is not a quality assessment.

This update adds six resources with clear practical scope: **Google Agents CLI** (development, evaluation, deployment), **Cloudflare Skills** (Workers and Agents SDK), **Azure Skills Plugin** (deployment, diagnostics, cost), **Sentry for AI** (observability and production debugging), **Momentic Agent Skills** (web and mobile E2E), and **Playwright CLI** (browser verification).

### Practical patterns to watch

| Pattern | Why it helps | Resources |
| --- | --- | --- |
| **CLI + Skill** | Let the CLI execute concise commands while a skill supplies the workflow and decision criteria | [Playwright CLI](https://github.com/microsoft/playwright-cli), [agent-browser](https://github.com/vercel-labs/agent-browser) |
| **Skill + MCP plugin** | Package domain guidance with tools that operate the service, reducing missing configuration | [Cloudflare Skills](https://github.com/cloudflare/skills), [Azure Skills Plugin](https://github.com/microsoft/azure-skills), [Sentry for AI](https://github.com/getsentry/sentry-for-ai) |
| **Evaluate before deploy** | Compare changes with datasets and metrics, then analyze failure modes before deployment | [Google Agents CLI](https://github.com/google/agents-cli) |
| **Production observe-and-repair loop** | Carry logs, traces, and issue context into code changes | [Sentry for AI](https://github.com/getsentry/sentry-for-ai), [Google Agents CLI](https://github.com/google/agents-cli) |
| **Version-specific documentation** | Supply the agent with docs and examples for the library version actually in use | [Context7](https://github.com/upstash/context7) |

According to [OpenAI's official skills guide](https://learn.chatgpt.com/docs/build-skills), a skill packages instructions, resources, and optional scripts; reusable skills and connectors can be distributed together as a plugin.

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
| [Matt Pocock Skills](https://github.com/mattpocock/skills) | Planning & development | Requirements, PRDs, and task breakdown | Clarify requirements with grill-me, then break down the work |
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

**Find more servers:** [Official MCP Registry](https://registry.modelcontextprotocol.io/) · [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers). For educational implementations, see [MCP Reference Servers](https://github.com/modelcontextprotocol/servers).

<a id="tools"></a>

## Discovery & CLI Tools

Find skills and connect tools to your agent workflow.

| Resource | Use case | What it offers | Example use |
| --- | --- | --- | --- |
| [Skills CLI / find-skills](https://github.com/vercel-labs/skills) | Skill discovery & management | A CLI for discovering, installing, and updating skills, with a find-skills discovery skill | Find a skill by describing the task you want to perform |
| [agent-browser](https://github.com/vercel-labs/agent-browser) | Browser CLI | Browser automation CLI with snapshots, element references, and a usage skill | Connect browser tasks through a CLI workflow |
| [Playwright CLI](https://github.com/microsoft/playwright-cli) | Browser verification | A CLI and skill for persistent sessions, clicks, input, screenshots, network inspection, tracing, and code recording | Reproduce an interface in a browser and save evidence after an agent implements it |
| [skills.sh](https://skills.sh/) | Skill directory | Skill discovery with All Time, Trending, and Hot listings | Discover new candidates and current interest signals |

<a id="plugins"></a>

## Plugins

Install bundled skills and workflows.

| Resource | Use case | What it offers | Example use |
| --- | --- | --- | --- |
| [Superpowers](https://github.com/obra/superpowers) | Development workflow | A skills-based methodology for planning, TDD, debugging, and verification | Structure feature work from design through tests and review |
| [Azure Skills Plugin](https://github.com/microsoft/azure-skills) | Azure development & operations | Azure deployment, validation, diagnostics, cost, and security guidance bundled with Azure and Foundry MCP configuration | Inspect Azure resources, prepare and deploy an app, or analyze incidents and cost |
| [Sentry for AI](https://github.com/getsentry/sentry-for-ai) | Observability & production debugging | Skills for Sentry setup, error, trace, and log analysis, issue repair, alerts, and OpenTelemetry configuration | Assess the impact of a production error and fix code using its runtime context |
| [Momentic Agent Skills](https://github.com/momentic-ai/skills) | Web & mobile E2E | Skills for authoring, running, classifying, and repairing tests, bundled with browser and mobile MCP servers | Create and repair regression tests on a real browser or device after a feature change |

Plugin packaging and installation vary by agent. Check the project's instructions for your environment.

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
| [Roo Code](https://github.com/RooCodeInc/Roo-Code) | IDE | Coding workflows with role-based modes | Organize work using planning and implementation modes |
| [Continue](https://github.com/continuedev/continue) | Development workflows | Customize AI workflows for your development environment | Adapt AI workflows to an existing development setup |
| [Magentic-UI](https://github.com/microsoft/magentic-ui) | Human-in-the-loop research | Research into collaborative web agents | Explore web tasks shared between humans and agents |
| [GPT Researcher](https://github.com/assafelovic/gpt-researcher) | Research & reports | Research multiple sources and produce reports | Draft a research report from multiple web sources |

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

Suggest a useful resource or correct an entry through an [Issue](https://github.com/yunsell/ai-agent-skills-korean/issues) or Pull Request. See the [contribution guide](CONTRIBUTING.md#english).

We select for a clear use case, an identifiable source, and useful documentation. This is not a ranking. Korean and English editions use the same categories and resources; link checks run monthly through GitHub Actions.

---

[Browse the earlier visual map](https://yunsell.github.io/ai-agent-skills-korean/) · Korean visual companion using the previous category layout.

Latest research update: 2026-09-10. Starter-pack commands and field cards were checked against source documentation. Example uses and risk labels are editorial judgments, not execution tests or security certifications. Other existing entries were not comprehensively re-audited.

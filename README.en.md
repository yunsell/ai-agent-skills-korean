# AI Agent Resources

[한국어](README.md) · **English**

A curated collection of skills, MCP servers, plugins, frameworks, and learning resources for working with AI agents.

Review date: **2026-10-03** · Installation and permissions are checked against documentation, not execution tests.

**Start here:** [Quick starts](#starter-packs) · [Practical comparison](#field-cards) · [Updates & alternatives](#recent) · [Contributing](#contributing)

**Browse:** [Skills](#skills) · [MCP](#mcp) · [CLI](#tools) · [Plugins](#plugins) · [Validation](#validation) · [Frameworks](#frameworks) · [Agents](#agents) · [Learning](#learning)

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
| Connect Gmail, Drive, and Calendar workflows | [Google Workspace CLI](https://github.com/googleworkspace/cli) · under development, not an officially supported product |
| Review a skill for security risks before installing | [Cisco Skill Scanner](https://github.com/cisco-ai-defense/skill-scanner) |
| Compare results before and after prompt or model changes | [Promptfoo](https://github.com/promptfoo/promptfoo) |

> Know the name? Use `Ctrl+F` / `⌘F` to search this page. Every project name links to its source repository; consult it for installation and compatibility.

<a id="starter-packs"></a>

## Task-based quick starts

If comparing tools one by one feels slow, start with a combination built around your goal. Setup time depends on your environment and authentication. Review the source repository and files before running commands, and select only the skills you need. The `npx` commands require Node.js/npm.

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

Run **only one** of the following.

Supabase:

```bash
npx skills add supabase/agent-skills
```

Prisma:

```bash
npx skills add prisma/skills
```

To add documentation lookup:

```bash
npx ctx7 setup
```

Check the installed Prisma version first. The source currently defaults new ORM projects to Prisma 8, but explicitly says that fixing connections in existing 6/7 projects does not require an upgrade. Select guidance from the [version-specific skills](https://github.com/prisma/skills#available-skills).

**First request**

> Inspect the current schema and its application usage first. Write a change plan and rollback procedure, warn me before any command that could lose data, and validate the migration against a development or isolated database before summarizing the result.

**Done when:** impact assessment, migration and rollback steps, validation result, and a production-readiness checklist.

</details>

<details>
<summary><strong>03 · Plan through test</strong> — requirements + task breakdown + TDD + completion checks</summary>

**Stack:** [Superpowers](https://github.com/obra/superpowers)

**Get started:** Superpowers uses a different install path for each agent. Choose your environment in the source repository's [Installation](https://github.com/obra/superpowers#installation) section. Install it separately for each agent you use.

**First request**

> Do not implement this feature immediately. Clarify the requirements and constraints, break the work into small tasks, write a failing test first, and then implement it. Finish by reviewing the test results and diff against the completion criteria.

**Done when:** agreed requirements, task plan, red-to-green test record, final diff, and verification result.

</details>

<details>
<summary><strong>04 · Production incident investigation</strong> — impact + root cause + verified fix</summary>

**Stack:** [Sentry for AI](https://github.com/getsentry/sentry-for-ai)

**Get started:** This is the skill **source repository**, not a directly installable plugin. Follow the distribution instructions for [Codex](https://github.com/getsentry/plugin-codex), [Claude Code](https://github.com/getsentry/plugin-claude), [Cursor](https://github.com/getsentry/plugin-cursor), or [Grok](https://github.com/getsentry/plugin-grok). Production queries require Sentry authentication, and some workflows also require the GitHub CLI.

**First request**

> Rank the major errors from the last 24 hours by user impact. Analyze the highest-impact error using its events, traces, and relevant code, then test a proposed fix. Do not resolve the issue or deploy anything without approval.

**Done when:** error evidence, impact, root-cause hypothesis, code and test results, and pre-deployment checks.

</details>

<details>
<summary><strong>05 · Agent development and evaluation</strong> — scaffold + eval dataset + failure analysis + deployment readiness</summary>

**Stack:** [Google Agents CLI](https://github.com/google/agents-cli)

**Get started:** requires Python 3.11+, uv, and Node.js.

```bash
uvx google-agents-cli setup
```

To add **only the skills** without the CLI, use this instead:

```bash
npx skills add google/agents-cli
```

This is not a coding agent itself: it helps your existing agent build, evaluate, and deploy ADK applications.

**First request**

> Build a small ADK agent that runs locally. Create an evaluation dataset with happy-path, edge, and failure cases, run the evaluation, and summarize failure clusters and the before-and-after difference. Do not deploy it to the cloud yet.

**Done when:** runnable agent, evaluation cases and metrics, failure analysis, and evidence for a deployment decision.

</details>

<a id="field-cards"></a>

## Practical comparison cards

Installation, compatibility, and permissions for these nine resources were checked on **2026-10-03**. **Docs checked ≠ execution tested.** Validate results separately in your account and project.

On small screens, scroll tables horizontally. Supported environments are in the expandable section below.

| Resource | Setup & authentication | Access scope | Task risk |
| --- | --- | --- | --- |
| [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills) | `npx skills` · no install credentials | Project code and UI | Medium |
| [Context7](https://github.com/upstash/context7) | `npx ctx7 setup` · OAuth/API key | Remote docs and agent config | Low |
| [Playwright CLI](https://github.com/microsoft/playwright-cli) | npm · no tool credentials¹ | Browser input, sessions, screenshots | Medium |
| [Supabase Agent Skills](https://github.com/supabase/agent-skills) | `npx skills` · no install credentials² | Code, schema, DB tasks | High |
| [Prisma Skills](https://github.com/prisma/skills) | `npx skills` · no install credentials² | Schema and migrations | High |
| [Superpowers](https://github.com/obra/superpowers) | Agent-specific plugin · no separate service login | Files, commands, Git, tests | Medium |
| [Sentry for AI](https://github.com/getsentry/sentry-for-ai) | Agent-specific distribution · Sentry login | Errors, logs, traces, code | High |
| [Google Agents CLI](https://github.com/google/agents-cli) | uv · model/cloud credentials to run | Local evals and cloud deployment | High |
| [GitHub MCP Server](https://github.com/github/github-mcp-server) | Host-specific setup · OAuth/PAT | Repos, issues, PRs, Actions³ | Medium–High |

<details>
<summary>Supported environments and prerequisites</summary>

| Resource | Environment & preparation |
| --- | --- |
| Vercel / Supabase / Prisma Skills | Agent Skills-compatible hosts. Match Prisma skills to your installed ORM version |
| Context7 | Node.js 18+ for `ctx7`. Other hosts: consult the source's manual MCP setup |
| Playwright CLI | Node.js 18+ and a coding agent that can execute CLI commands |
| Superpowers | Check Installation for each agent; install separately across environments |
| Sentry for AI | Distributions for Codex, Claude Code, Cursor, Grok. Some workflows need GitHub CLI |
| Google Agents CLI | Python 3.11+, uv, Node.js. Distinguish model credentials from cloud deployment credentials |
| GitHub MCP Server | Remote/local MCP hosts. Local container setup requires Docker |

</details>

¹ Risk increases when a task uses an authenticated browser profile or sensitive form.<br>
² The corresponding service credentials are required for live remote database work.<br>
³ GitHub MCP supports read-only mode and tool allowlists. Start with only the repository and read tools the task needs.

**Risk legend:** Low = primarily reading or documentation retrieval · Medium = may change files, browser state, or external APIs · High = may affect production data, databases, cloud deployments, or cost. Risk describes the possible scope after connection, not project quality.

<a id="recent"></a>

## Updates & alternatives · 2026-10-03

We checked archival status and recent activity for existing GitHub resources, then reviewed source documentation for the quick starts and new candidates. Newly listed does **not** mean newly released. [skills.sh Trending](https://skills.sh/trending) is a reference for 24-hour interest; popularity or recent commits alone do not establish quality.

This update adds **Google Workspace CLI** (office workflows), **Cisco Skill Scanner** (pre-install security review), and **Promptfoo** (evaluation and regression checks). It corrects Sentry installation and Prisma version guidance, moves Roo Code to an archived note, and updates Magentic-UI's description to its successor, **MagenticLite**.

### Which alternative fits my task?

Choose by **execution environment and task**, not a universal "best tool" ranking.

| Task | Start with | Selection criteria |
| --- | --- | --- |
| Browser checks from a coding agent | [Playwright CLI](https://github.com/microsoft/playwright-cli) / [agent-browser](https://github.com/vercel-labs/agent-browser) | Shell access, CLI+Skill workflows, and recorded results |
| Browser interaction from an MCP host | [Playwright MCP](https://github.com/microsoft/playwright-mcp) | MCP tool calls better fit your host |
| ADK agent development, evals, deployment | [Google Agents CLI](https://github.com/google/agents-cli) | A Google ADK/Cloud-centered lifecycle |
| Prompt, model, and RAG regression comparison | [Promptfoo](https://github.com/promptfoo/promptfoo) | Reuse eval cases and compare results in CI |
| Security review before adopting external skills | [Cisco Skill Scanner](https://github.com/cisco-ai-defense/skill-scanner) | Scan files before install; passing is not a safety guarantee |

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

**Find more servers:** [Official MCP Registry](https://registry.modelcontextprotocol.io/) · [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers). For educational implementations, see [MCP Reference Servers](https://github.com/modelcontextprotocol/servers).

<a id="tools"></a>

## Discovery & CLI Tools

Find skills and connect tools to your agent workflow.

| Resource | Use case | What it offers | Example use |
| --- | --- | --- | --- |
| [Skills CLI / find-skills](https://github.com/vercel-labs/skills) | Skill discovery & management | A CLI for discovering, installing, and updating skills, with a find-skills discovery skill | Find a skill by describing the task you want to perform |
| [agent-browser](https://github.com/vercel-labs/agent-browser) | Browser CLI | Browser automation CLI with snapshots, element references, and a usage skill | Connect browser tasks through a CLI workflow |
| [Playwright CLI](https://github.com/microsoft/playwright-cli) | Browser verification | A CLI and skill for persistent sessions, clicks, input, screenshots, network inspection, tracing, and code recording | Reproduce an interface in a browser and save evidence after an agent implements it |
| [Google Workspace CLI](https://github.com/googleworkspace/cli) | Office workflows | CLI for Gmail, Drive, Calendar, Sheets, and other APIs, JSON output, and workflow skills | Automate email, calendar, and document tasks. Under development; not officially supported by Google |
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

<a id="validation"></a>

## Validation & Evaluation

Review safety before connecting more tools, and compare results before and after changes.

| Resource | Use case | What it offers | Example use |
| --- | --- | --- | --- |
| [Cisco Skill Scanner](https://github.com/cisco-ai-defense/skill-scanner) | Skill security review | Static, behavioral, and optional LLM analysis of skills and scripts, plus CI integration | Review suspicious behavior before installing or distributing third-party skills |
| [Promptfoo](https://github.com/promptfoo/promptfoo) | Evals, regression, red teaming | Config-driven prompt, agent, and RAG evaluation, model comparison, security tests, and CI integration | Compare accuracy and failure cases across model or prompt changes |

Scanner requires CPython 3.11–3.14. Distinguish default static analysis from external-service analysis, and check what code/files may be sent before enabling LLM, VirusTotal, or other external analyzers. Promptfoo may also require credentials, transmit data, and incur costs depending on the model and target. Run security tests only against systems you own or are authorized to test.

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

**Archived:** [Roo Code](https://github.com/RooCodeInc/Roo-Code) was archived when checked on 2026-10-03. Retained for reference to existing setups; for new adoption, compare current support in [Cline](https://github.com/cline/cline) and [Continue](https://github.com/continuedev/continue).

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

Last checked: **2026-10-03 (Korea time)**. Repository status and activity were queried for all GitHub links; installation and permissions documentation was reviewed for the nine quick-start resources and new additions. This was not a feature-by-feature audit of every project. Examples, risk labels, and alternative selection are editorial judgments, not execution tests, benchmarks, or security certifications. The visual map was outside this update's scope.

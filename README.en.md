# AI Agent Resources

[한국어](README.md) · **English**

A curated collection of skills, MCP servers, plugins, frameworks, and learning resources for working with AI agents.

[Skills](#skills) · [MCP](#mcp) · [Plugins](#plugins) · [Frameworks](#frameworks) · [Agents](#agents) · [Learning](#learning) · [Contributing](#contributing)

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

> Know the name? Use `Ctrl+F` / `⌘F` to search this page. Every project name links to its source repository; consult it for installation and compatibility.

<a id="skills"></a>

## Skills

Add reusable workflows and domain knowledge to your agent.

| Resource | Use case | What it offers |
| --- | --- | --- |
| [OpenAI Skills](https://github.com/openai/skills) | General tasks | A catalog of skills for coding, documents, and other tasks |
| [Anthropic Skills](https://github.com/anthropics/skills) | Documents & design | Skill implementations for document and design workflows |
| [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills) | Frontend | React, Next.js, and web interface best practices |
| [Supabase Agent Skills](https://github.com/supabase/agent-skills) | Database | Skills for Supabase and PostgreSQL development |
| [Remotion Skills](https://github.com/remotion-dev/skills) | Video | Compose and render videos with React |
| [Matt Pocock Skills](https://github.com/mattpocock/skills) | Planning & development | Requirements, PRDs, and task breakdown |
| [NVIDIA Skills](https://github.com/nvidia/skills) | GPU & AI | Specialized workflows for CUDA, simulation, and AI |
| [Awesome Copilot](https://github.com/github/awesome-copilot) | Copilot collection | Discover skills, instructions, and agent configurations |

<a id="mcp"></a>

## MCP

Connect agents to external services and data.

| Resource | Use case | What it offers |
| --- | --- | --- |
| [GitHub MCP Server](https://github.com/github/github-mcp-server) | Development | Connect repositories, issues, PRs, and Actions |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | Browser | Navigate and interact with web pages |
| [Google MCP](https://github.com/google/mcp) | Cloud | Connect Google Cloud services |
| [Perplexity MCP](https://github.com/perplexityai/modelcontextprotocol) | Search & research | Connect web search and source-based research |

**Find more servers:** [Official MCP Registry](https://registry.modelcontextprotocol.io/) · [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers). For educational implementations, see [MCP Reference Servers](https://github.com/modelcontextprotocol/servers).

<a id="plugins"></a>

## Plugins

Install bundled skills and workflows.

| Resource | Use case | What it offers |
| --- | --- | --- |
| [Superpowers](https://github.com/obra/superpowers) | Development workflow | A skills-based methodology for planning, TDD, debugging, and verification |

Plugin packaging and installation vary by agent. Check the project's instructions for your environment.

<a id="frameworks"></a>

## Frameworks & Libraries

Build agent applications and automation systems.

| Resource | Use case | What it offers |
| --- | --- | --- |
| [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) | Agent orchestration | Compose tool calls and agent handoffs |
| [LangGraph](https://github.com/langchain-ai/langgraph) | State & control flow | Build stateful agent execution flows |
| [Microsoft Agent Framework](https://github.com/microsoft/agent-framework) | Python & .NET | Build agent systems in the Microsoft ecosystem |
| [Google ADK](https://github.com/google/adk-python) | Development & evaluation | Agent development kit from Google |
| [PydanticAI](https://github.com/pydantic/pydantic-ai) | Types & structured output | Build agent applications with Python types |
| [smolagents](https://github.com/huggingface/smolagents) | Lightweight experiments | Implement and experiment with agents in a small codebase |
| [CrewAI](https://github.com/crewAIInc/crewAI) | Role-based collaboration | Coordinate agents with different roles |
| [browser-use](https://github.com/browser-use/browser-use) | Web automation | A library for implementing browser tasks with agents |

<a id="agents"></a>

## Agents

Choose an existing tool for coding or research.

| Resource | Use case | What it offers |
| --- | --- | --- |
| [OpenAI Codex](https://github.com/openai/codex) | Coding | Repository-based coding and verification |
| [OpenHands](https://github.com/OpenHands/OpenHands) | Development automation | Run and extend software development agents |
| [Aider](https://github.com/Aider-AI/aider) | Terminal & Git | Edit code through a terminal conversation |
| [Cline](https://github.com/cline/cline) | Coding | Coding and tool execution with approval controls |
| [Roo Code](https://github.com/RooCodeInc/Roo-Code) | IDE | Coding workflows with role-based modes |
| [Continue](https://github.com/continuedev/continue) | Development workflows | Customize AI workflows for your development environment |
| [Magentic-UI](https://github.com/microsoft/magentic-ui) | Human-in-the-loop research | Research into collaborative web agents |
| [GPT Researcher](https://github.com/assafelovic/gpt-researcher) | Research & reports | Research multiple sources and produce reports |

<a id="learning"></a>

## Learning

Explore implementation principles and specifications.

| Resource | Use case | What it offers |
| --- | --- | --- |
| [Agent Zero to Hero](https://github.com/KeWang0622/agent-zero-to-hero) | Hands-on course | Build an agent harness without a framework |

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

Catalog reorganized: 2026-09-07. This date does not imply a fresh review of every upstream project.


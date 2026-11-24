# Agent Stack Brief

AI 에이전트에 쓰는 스킬, MCP 서버, 하네스와 실무 도구를 모았습니다.

[English](README.en.md) · [최신 소식](#latest) · [자료 모음](#resources)

<a id="latest"></a><a id="recent"></a>

## 최신 소식

**2026-11-23 · 004호** · [같은 스킬을 복원하고 변경 명세를 검토하는 법](newsletter/2026-11-23.md)

- [Skills CLI 1.9.0](newsletter/2026-11-23.md#skills) · 같은 커밋에서 스킬 복원
- [MCP Skills 베타](newsletter/2026-11-23.md#mcp) · 원격 스킬 파일 검증
- [OpenSpec 2.1.1](newsletter/2026-11-23.md#harness) · 스킬 오프라인 설치

<a id="resources"></a>

## 자료 모음

[Skills](#skills) · [MCP](#mcp) · [CLI](#tools) · [Plugins](#plugins) · [검증·평가](#validation) · [Harnesses](#harnesses) · [Frameworks](#frameworks) · [Agents](#agents) · [학습](#learning)

<!-- catalog-tables:start -->

<a id="skills"></a>

### Skills · 15

| 자료 | 용도 |
| --- | --- |
| [OpenAI Skills](https://github.com/openai/skills) | 범용 업무 |
| [Anthropic Skills](https://github.com/anthropics/skills) | 문서 · 디자인 |
| [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills) | 프런트엔드 |
| [Supabase Agent Skills](https://github.com/supabase/agent-skills) | 데이터베이스 |
| [Remotion Skills](https://github.com/remotion-dev/skills) | 영상 제작 |
| [Matt Pocock Skills](https://github.com/mattpocock/skills) | 기획 · 개발 |
| [NVIDIA Skills](https://github.com/nvidia/skills) | GPU · AI |
| [Awesome Copilot](https://github.com/github/awesome-copilot) | Copilot 자료 모음 |
| [Impeccable](https://github.com/pbakaus/impeccable) | UI · UX 디자인 |
| [Addy Osmani Agent Skills](https://github.com/addyosmani/agent-skills) | 개발 품질 |
| [Context Engineering Skills](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering) | 컨텍스트 설계 |
| [Prisma Skills](https://github.com/prisma/skills) | ORM · DB 개발 |
| [Neon Agent Skills](https://github.com/neondatabase/agent-skills) | Postgres · 클라우드 |
| [Google Agents CLI](https://github.com/google/agents-cli) | 에이전트 개발 · 운영 |
| [Cloudflare Skills](https://github.com/cloudflare/skills) | 엣지 · 서버리스 |

<a id="mcp"></a>

### MCP · 11

| 자료 | 용도 |
| --- | --- |
| [GitHub MCP Server](https://github.com/github/github-mcp-server) | 개발 협업 |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | 브라우저 |
| [Google MCP](https://github.com/google/mcp) | 클라우드 |
| [Perplexity MCP](https://github.com/perplexityai/modelcontextprotocol) | 검색 · 조사 |
| [Context7](https://github.com/upstash/context7) | 라이브러리 문서 |
| [OpenAI Docs MCP](https://developers.openai.com/learn/docs-mcp) | 공식 문서 조회 |
| [Figma MCP](https://developers.figma.com/docs/figma-mcp-server/) | 디자인 연결 |
| [shadcn MCP](https://ui.shadcn.com/docs/mcp) | UI 컴포넌트 |
| [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 웹 성능 · 디버깅 |
| [Fetch MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch) | 공개 웹 문서 조회 |
| [Context Mode](https://github.com/mksglu/context-mode) | 고급 컨텍스트 관리 |

<a id="tools"></a>

### CLI·탐색 · 8

| 자료 | 용도 |
| --- | --- |
| [Skills CLI / find-skills](https://github.com/vercel-labs/skills) | 스킬 검색 · 관리 |
| [OpenSpec](https://github.com/Fission-AI/OpenSpec) | 명세 기반 개발 |
| [agent-browser](https://github.com/vercel-labs/agent-browser) | 브라우저 CLI |
| [Playwright CLI](https://github.com/microsoft/playwright-cli) | 브라우저 검증 |
| [Google Workspace CLI](https://github.com/googleworkspace/cli) | 업무 서비스 |
| [HyperFrames](https://github.com/heygen-com/hyperframes) | HTML 영상 제작 |
| [MarkItDown](https://github.com/microsoft/markitdown) | 문서 입력 · 변환 |
| [skills.sh](https://skills.sh/) | 스킬 디렉터리 |

<a id="plugins"></a>

### Plugins · 5

| 자료 | 용도 |
| --- | --- |
| [Superpowers](https://github.com/obra/superpowers) | 개발 워크플로 |
| [Azure Skills Plugin](https://github.com/microsoft/azure-skills) | Azure 개발 · 운영 |
| [Sentry for AI](https://github.com/getsentry/sentry-for-ai) | 관측 · 운영 디버깅 |
| [OpenAI Developers Plugin](https://developers.openai.com/learn/developers-codex-plugin) | OpenAI API 개발 |
| [Momentic Agent Skills](https://github.com/momentic-ai/skills) | 웹 · 모바일 E2E |

<a id="validation"></a>

### 검증·평가 · 2

| 자료 | 용도 |
| --- | --- |
| [Cisco Skill Scanner](https://github.com/cisco-ai-defense/skill-scanner) | 스킬 보안 검토 |
| [Promptfoo](https://github.com/promptfoo/promptfoo) | 평가 · 회귀 · 레드팀 |

<a id="harnesses"></a>

### Harnesses · 1

| 자료 | 용도 |
| --- | --- |
| [Deep Agents](https://github.com/langchain-ai/deepagents) | 에이전트 하네스 |

<a id="frameworks"></a>

### Frameworks · 8

| 자료 | 용도 |
| --- | --- |
| [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) | 에이전트 구성 |
| [LangGraph](https://github.com/langchain-ai/langgraph) | 상태 · 실행 흐름 |
| [Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/) | Python · .NET |
| [Google ADK](https://github.com/google/adk-python) | 개발 · 평가 |
| [PydanticAI](https://github.com/pydantic/pydantic-ai) | 타입 · 구조화 출력 |
| [smolagents](https://github.com/huggingface/smolagents) | 가벼운 실험 |
| [CrewAI](https://github.com/crewAIInc/crewAI) | 역할별 협업 |
| [browser-use](https://github.com/browser-use/browser-use) | 웹 자동화 |

<a id="agents"></a>

### Agents · 7

| 자료 | 용도 |
| --- | --- |
| [OpenAI Codex](https://github.com/openai/codex) | 코딩 |
| [OpenHands](https://github.com/OpenHands/OpenHands) | 개발 자동화 |
| [Aider](https://github.com/Aider-AI/aider) | 터미널 · Git |
| [Cline](https://github.com/cline/cline) | 코딩 |
| [Continue](https://github.com/continuedev/continue) | 개발 워크플로 |
| [MagenticLite (구 Magentic-UI)](https://github.com/microsoft/magentic-ui) | 실험적 웹 · 파일 에이전트 |
| [GPT Researcher](https://github.com/assafelovic/gpt-researcher) | 조사 · 보고서 |

<a id="learning"></a>

### 학습 · 2

| 자료 | 용도 |
| --- | --- |
| [Agent Zero to Hero](https://github.com/KeWang0622/agent-zero-to-hero) | 실습 과정 |
| [MCP Skills 확장](https://github.com/modelcontextprotocol/ext-skills) | 베타 규격 |

<!-- catalog-tables:end -->

## 실무 가이드

- <a id="starter-packs"></a>[목적별 빠른 시작](guides/quick-starts.md) · [Skills·MCP·Harness의 차이](guides/first-stack.md)
- [환경별 MCP 연결](guides/client-first-steps.md) · [연결 문제 해결](guides/mcp-recovery.md)
- [디자인 작업](guides/design-workflows.md) · [화면 검증](guides/web-validation.md)
- [상세 카탈로그](catalog/README.md) · <a id="field-cards"></a>[설치·권한 비교](catalog/README.md#field-cards) · [자료 검색](https://yunsell.github.io/ai-agent-skills-korean/catalog/index.html)

<a id="contributing"></a>

[지난호](newsletter/README.md) · [한국어 RSS](https://yunsell.github.io/ai-agent-skills-korean/feed.xml) · [English RSS](https://yunsell.github.io/ai-agent-skills-korean/feed.en.xml) · [자료 제안·정정](https://github.com/yunsell/ai-agent-skills-korean/issues) · [기여 안내](CONTRIBUTING.md#korean)

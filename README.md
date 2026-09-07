# AI Agent Resources

**한국어** · [English](README.en.md)

AI 에이전트를 사용할 때 유용한 스킬, MCP 서버, 플러그인, 개발 도구와 학습 자료를 모았습니다.

[Skills](#skills) · [MCP](#mcp) · [Plugins](#plugins) · [Frameworks](#frameworks) · [Agents](#agents) · [학습 자료](#learning) · [기여하기](#contributing)

## 하고 싶은 일로 찾기

| 하고 싶은 일 | 바로가기 |
| --- | --- |
| 웹 개발 품질을 높이고 싶다 | [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills) |
| 문서·디자인 스킬을 찾고 싶다 | [Anthropic Skills](https://github.com/anthropics/skills) |
| DB 작업을 돕는 스킬이 필요하다 | [Supabase Agent Skills](https://github.com/supabase/agent-skills) |
| GitHub 이슈·PR을 연결하고 싶다 | [GitHub MCP Server](https://github.com/github/github-mcp-server) |
| 에이전트로 브라우저를 조작하고 싶다 | [Playwright MCP](https://github.com/microsoft/playwright-mcp) |
| 계획·테스트·검증 흐름을 도입하고 싶다 | [Superpowers](https://github.com/obra/superpowers) |
| 에이전트 앱을 직접 만들고 싶다 | [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) |

> 이름을 알고 있다면 `Ctrl+F` / `⌘F`로 페이지를 검색하세요. 모든 프로젝트 이름은 원본 저장소로 연결되며, 설치법과 지원 환경은 해당 저장소에서 확인할 수 있습니다.

<a id="skills"></a>

## Skills

반복 작업의 절차와 전문 지식을 에이전트에 추가합니다.

| 자료 | 용도 | 무엇을 제공하나요? |
| --- | --- | --- |
| [OpenAI Skills](https://github.com/openai/skills) | 범용 업무 | 코딩·문서 등 업무별 스킬을 찾는 카탈로그 |
| [Anthropic Skills](https://github.com/anthropics/skills) | 문서·디자인 | 문서 작성과 디자인 등 스킬의 구현 예시 |
| [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills) | 프런트엔드 | React·Next.js 성능과 웹 인터페이스 점검 |
| [Supabase Agent Skills](https://github.com/supabase/agent-skills) | 데이터베이스 | Supabase·PostgreSQL 관련 개발 작업 |
| [Remotion Skills](https://github.com/remotion-dev/skills) | 영상 제작 | React 기반 영상 구성과 렌더링 |
| [Matt Pocock Skills](https://github.com/mattpocock/skills) | 기획·개발 | 요구사항 정리, PRD, 작업 분해 |
| [NVIDIA Skills](https://github.com/nvidia/skills) | GPU·AI | CUDA, 시뮬레이션 등 전문 기술 작업 |
| [Awesome Copilot](https://github.com/github/awesome-copilot) | Copilot 자료 모음 | 스킬·지침·에이전트 설정 예시 탐색 |

<a id="mcp"></a>

## MCP

에이전트를 외부 서비스와 데이터에 연결합니다.

| 자료 | 용도 | 무엇을 제공하나요? |
| --- | --- | --- |
| [GitHub MCP Server](https://github.com/github/github-mcp-server) | 개발 협업 | 저장소·이슈·PR·Actions 연결 |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | 브라우저 | 실제 웹페이지 탐색과 브라우저 조작 |
| [Google MCP](https://github.com/google/mcp) | 클라우드 | Google Cloud 서비스 연결 |
| [Perplexity MCP](https://github.com/perplexityai/modelcontextprotocol) | 검색·조사 | 웹 검색과 출처 기반 조사 연결 |

**서버 더 찾기:** [공식 MCP Registry](https://registry.modelcontextprotocol.io/) · [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers). 프로토콜 구현을 배우려면 [MCP Reference Servers](https://github.com/modelcontextprotocol/servers)를 참고하세요.

<a id="plugins"></a>

## Plugins

여러 스킬과 작업 흐름을 묶어서 도입합니다.

| 자료 | 용도 | 무엇을 제공하나요? |
| --- | --- | --- |
| [Superpowers](https://github.com/obra/superpowers) | 개발 워크플로 | 계획·TDD·디버깅·검증을 묶은 스킬 기반 개발 방법론 |

플러그인 형식과 설치 방식은 에이전트마다 다릅니다. 프로젝트의 환경별 설치 안내를 확인하세요.

<a id="frameworks"></a>

## Frameworks & Libraries

에이전트 앱과 자동화 시스템을 직접 만들 때 사용합니다.

| 자료 | 용도 | 무엇을 제공하나요? |
| --- | --- | --- |
| [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) | 에이전트 구성 | 도구 호출과 핸드오프를 코드로 구성 |
| [LangGraph](https://github.com/langchain-ai/langgraph) | 상태·실행 흐름 | 분기와 상태가 있는 에이전트 실행 설계 |
| [Microsoft Agent Framework](https://github.com/microsoft/agent-framework) | Python·.NET | Microsoft 생태계의 에이전트 시스템 개발 |
| [Google ADK](https://github.com/google/adk-python) | 개발·평가 | Google 생태계의 에이전트 개발 키트 |
| [PydanticAI](https://github.com/pydantic/pydantic-ai) | 타입·구조화 출력 | Python 타입 중심의 에이전트 앱 개발 |
| [smolagents](https://github.com/huggingface/smolagents) | 가벼운 실험 | 작은 코드로 에이전트 구현과 실험 |
| [CrewAI](https://github.com/crewAIInc/crewAI) | 역할별 협업 | 역할이 다른 에이전트의 협업 구성 |
| [browser-use](https://github.com/browser-use/browser-use) | 웹 자동화 | 에이전트의 브라우저 작업을 구현하는 라이브러리 |

<a id="agents"></a>

## Agents

기존 도구를 골라 코드 작업이나 조사를 시작합니다.

| 자료 | 용도 | 무엇을 제공하나요? |
| --- | --- | --- |
| [OpenAI Codex](https://github.com/openai/codex) | 코딩 | 저장소 기반 코드 작업과 검증 |
| [OpenHands](https://github.com/OpenHands/OpenHands) | 개발 자동화 | 개발 에이전트 실행과 확장 |
| [Aider](https://github.com/Aider-AI/aider) | 터미널·Git | 터미널에서 대화하며 코드 수정 |
| [Cline](https://github.com/cline/cline) | 코딩 | 승인 기반 코드 수정과 도구 실행 |
| [Roo Code](https://github.com/RooCodeInc/Roo-Code) | IDE | 역할별 모드를 활용한 코딩 작업 |
| [Continue](https://github.com/continuedev/continue) | 개발 워크플로 | 개발 환경에 맞춘 AI 작업 흐름 구성 |
| [Magentic-UI](https://github.com/microsoft/magentic-ui) | 사람 참여형 연구 | 사용자와 협력하는 웹 에이전트 연구 |
| [GPT Researcher](https://github.com/assafelovic/gpt-researcher) | 조사·보고서 | 여러 출처를 조사해 보고서 작성 |

<a id="learning"></a>

## 학습 자료

구현 원리와 규격을 이해할 때 참고합니다.

| 자료 | 용도 | 무엇을 제공하나요? |
| --- | --- | --- |
| [Agent Zero to Hero](https://github.com/KeWang0622/agent-zero-to-hero) | 실습 과정 | 프레임워크 없이 에이전트 하네스 구현 |

**규격 문서:** [Agent Skills](https://agentskills.io/specification) — 스킬의 구조와 작성 형식.

### 함께 알아두면 좋은 활용 방식

| 방식 | 활용할 때 |
| --- | --- |
| 저장소 지침 | `AGENTS.md` 등 사용하는 에이전트의 지침 파일에 프로젝트 명령·규칙·완료 조건 기록 |
| 재사용 스킬 | 반복 업무의 절차를 스킬로 묶어 사용 |
| 도구 연결 | MCP나 CLI로 외부 데이터·서비스 연결 |
| 검증 루프 | 작업 흐름에 테스트·로그·변경 내용 확인 포함 |

<a id="contributing"></a>

## 기여하기

유용한 자료 추가와 설명 수정을 [Issue](https://github.com/yunsell/ai-agent-skills-korean/issues) 또는 Pull Request로 제안해 주세요. 자세한 기준은 [기여 가이드](CONTRIBUTING.md#korean)에 있습니다.

분명한 용도, 확인 가능한 원본, 활용 문서를 기준으로 선별하며 순위표로 운영하지 않습니다. 한국어와 영어판은 같은 분류·자료를 유지하고, GitHub Actions로 매월 링크를 점검합니다.

---

[기존 시각화 지도 보기](https://yunsell.github.io/ai-agent-skills-korean/) · 이전 분류를 사용하는 한국어 보조 페이지입니다.

목록 구조 개편: 2026-09-07. 개편일은 모든 프로젝트의 최신 상태를 재검증한 날짜를 뜻하지 않습니다.

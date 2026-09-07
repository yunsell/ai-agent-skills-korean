# AI Agent Resources

**한국어** · [English](README.en.md)

AI 에이전트를 사용할 때 유용한 스킬, MCP 서버, 플러그인, 개발 도구와 학습 자료를 모았습니다.

[Skills](#skills) · [MCP](#mcp) · [탐색·CLI](#tools) · [Plugins](#plugins) · [Frameworks](#frameworks) · [Agents](#agents) · [학습 자료](#learning) · [기여하기](#contributing)

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

<a id="recent"></a>

## 최근 확인한 자료 · 2026-09-07

[skills.sh Trending (24h)](https://skills.sh/trending)에서 **find-skills, agent-browser, Matt Pocock 스킬, Prisma, Neon 스킬**을 확인하고 원본 저장소를 검토해 추가하거나 설명을 갱신했습니다. 순위는 수시로 변하며 인기도가 품질 평가를 뜻하지는 않습니다.

함께 선별한 자료는 **Impeccable**(디자인), **Addy Osmani Agent Skills**(개발 절차), **Context Engineering Skills**(컨텍스트 관리), **Context7**(문서 조회)입니다. 이들은 활용 범위를 넓히기 위한 추가 자료로, 최근 순위 상승을 확인했다는 의미는 아닙니다. 원본 링크와 활용 예시는 아래 표에서 확인할 수 있습니다.

<a id="skills"></a>

## Skills

반복 작업의 절차와 전문 지식을 에이전트에 추가합니다.

| 자료 | 용도 | 무엇을 제공하나요? | 이런 때 활용하세요 |
| --- | --- | --- | --- |
| [OpenAI Skills](https://github.com/openai/skills) | 범용 업무 | 코딩·문서 등 업무별 스킬을 찾는 카탈로그 | 반복하는 코드·문서 작업에 맞는 스킬부터 선택 |
| [Anthropic Skills](https://github.com/anthropics/skills) | 문서·디자인 | 문서 작성과 디자인 등 스킬의 구현 예시 | 문서 생성 절차나 프런트엔드 디자인 스킬을 참고 |
| [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills) | 프런트엔드 | React·Next.js 성능과 웹 인터페이스 점검 | React 코드 리뷰에서 성능·UI 점검 기준으로 사용 |
| [Supabase Agent Skills](https://github.com/supabase/agent-skills) | 데이터베이스 | Supabase·PostgreSQL 관련 개발 작업 | Supabase를 사용하는 앱의 DB 작업 지침으로 활용 |
| [Remotion Skills](https://github.com/remotion-dev/skills) | 영상 제작 | React 기반 영상 구성과 렌더링 | React 컴포넌트로 설명 영상이나 제품 데모 제작 |
| [Matt Pocock Skills](https://github.com/mattpocock/skills) | 기획·개발 | 요구사항 정리, PRD, 작업 분해 | grill-me로 요구사항을 구체화하고 작업을 나누기 |
| [NVIDIA Skills](https://github.com/nvidia/skills) | GPU·AI | CUDA, 시뮬레이션 등 전문 기술 작업 | GPU·시뮬레이션 작업에 맞는 전문 지침 찾기 |
| [Awesome Copilot](https://github.com/github/awesome-copilot) | Copilot 자료 모음 | 스킬·지침·에이전트 설정 예시 탐색 | 팀의 Copilot 설정에 참고할 지침·스킬 찾기 |
| [Impeccable](https://github.com/pbakaus/impeccable) | UI·UX 디자인 | 디자인 비평, 접근성 점검, 타이포그래피·레이아웃·모션 개선을 위한 스킬과 도구 | 만든 화면의 위계·간격·완성도를 개선할 때 |
| [Addy Osmani Agent Skills](https://github.com/addyosmani/agent-skills) | 개발 품질 | 요구사항, TDD, 코드 리뷰, 웹 성능 점검을 개발 단계별로 안내 | 팀의 테스트·리뷰 기준을 반복 가능한 절차로 만들 때 |
| [Context Engineering Skills](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering) | 컨텍스트 설계 | 컨텍스트 압축·품질 저하, 메모리, 도구 설계, 에이전트 평가 패턴 | 긴 작업에서 정보 누락·컨텍스트 비용을 분석할 때 |
| [Prisma Skills](https://github.com/prisma/skills) | ORM·DB 개발 | Prisma CLI, Client, 스키마·마이그레이션과 버전 전환 지침 | Prisma 프로젝트의 DB 변경이나 업그레이드를 준비할 때 |
| [Neon Agent Skills](https://github.com/neondatabase/agent-skills) | Postgres·클라우드 | Neon·Postgres 문서와 브랜치 기반 개발·마이그레이션 테스트 지침 | 분리된 DB 브랜치에서 스키마 변경을 검증할 때 |

<a id="mcp"></a>

## MCP

에이전트를 외부 서비스와 데이터에 연결합니다.

| 자료 | 용도 | 무엇을 제공하나요? | 이런 때 활용하세요 |
| --- | --- | --- | --- |
| [GitHub MCP Server](https://github.com/github/github-mcp-server) | 개발 협업 | 저장소·이슈·PR·Actions 연결 | 이슈를 읽고 관련 변경의 PR 초안 작성 |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | 브라우저 | 실제 웹페이지 탐색과 브라우저 조작 | 웹페이지 폼 입력 후 결과 화면 확인 |
| [Google MCP](https://github.com/google/mcp) | 클라우드 | Google Cloud 서비스 연결 | Cloud 데이터와 서비스를 사용하는 작업 연결 |
| [Perplexity MCP](https://github.com/perplexityai/modelcontextprotocol) | 검색·조사 | 웹 검색과 출처 기반 조사 연결 | 기술 조사에 필요한 웹 근거 모으기 |
| [Context7](https://github.com/upstash/context7) | 라이브러리 문서 | 라이브러리별·버전별 문서와 코드 예시 조회. MCP 또는 CLI+Skills 방식 제공 | 사용 중인 버전에 맞는 API 사용법을 확인할 때 |

**서버 더 찾기:** [공식 MCP Registry](https://registry.modelcontextprotocol.io/) · [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers). 프로토콜 구현을 배우려면 [MCP Reference Servers](https://github.com/modelcontextprotocol/servers)를 참고하세요.

<a id="tools"></a>

## 탐색·CLI 도구

스킬을 찾고 에이전트 작업에 필요한 도구를 연결합니다.

| 자료 | 용도 | 무엇을 제공하나요? | 이런 때 활용하세요 |
| --- | --- | --- | --- |
| [Skills CLI / find-skills](https://github.com/vercel-labs/skills) | 스킬 검색·관리 | 스킬 검색·설치·업데이트를 위한 CLI와 find-skills 탐색 스킬 | 원하는 작업을 설명하고 사용할 스킬을 찾을 때 |
| [agent-browser](https://github.com/vercel-labs/agent-browser) | 브라우저 CLI | 페이지 스냅샷·요소 참조 기반 브라우저 조작 CLI와 사용 스킬 | MCP 외에 CLI 방식으로 웹 작업을 연결하고 싶을 때 |
| [skills.sh](https://skills.sh/) | 스킬 디렉터리 | 스킬 검색과 All Time·Trending·Hot 목록 제공 | 새 스킬 후보와 현재 관심 흐름을 찾아볼 때 |

<a id="plugins"></a>

## Plugins

여러 스킬과 작업 흐름을 묶어서 도입합니다.

| 자료 | 용도 | 무엇을 제공하나요? | 이런 때 활용하세요 |
| --- | --- | --- | --- |
| [Superpowers](https://github.com/obra/superpowers) | 개발 워크플로 | 계획·TDD·디버깅·검증을 묶은 스킬 기반 개발 방법론 | 새 기능의 설계부터 테스트·리뷰까지 절차화 |

플러그인 형식과 설치 방식은 에이전트마다 다릅니다. 프로젝트의 환경별 설치 안내를 확인하세요.

<a id="frameworks"></a>

## Frameworks & Libraries

에이전트 앱과 자동화 시스템을 직접 만들 때 사용합니다.

| 자료 | 용도 | 무엇을 제공하나요? | 이런 때 활용하세요 |
| --- | --- | --- | --- |
| [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) | 에이전트 구성 | 도구 호출과 핸드오프를 코드로 구성 | 도구를 호출하는 작은 에이전트 앱부터 시작 |
| [LangGraph](https://github.com/langchain-ai/langgraph) | 상태·실행 흐름 | 분기와 상태가 있는 에이전트 실행 설계 | 분기와 상태를 가진 여러 단계 작업 구성 |
| [Microsoft Agent Framework](https://github.com/microsoft/agent-framework) | Python·.NET | Microsoft 생태계의 에이전트 시스템 개발 | Python·.NET 서비스에 에이전트 흐름 통합 |
| [Google ADK](https://github.com/google/adk-python) | 개발·평가 | Google 생태계의 에이전트 개발 키트 | Google 도구를 활용하는 에이전트 앱 개발 |
| [PydanticAI](https://github.com/pydantic/pydantic-ai) | 타입·구조화 출력 | Python 타입 중심의 에이전트 앱 개발 | 응답을 백엔드에서 다룰 구조화 데이터로 받기 |
| [smolagents](https://github.com/huggingface/smolagents) | 가벼운 실험 | 작은 코드로 에이전트 구현과 실험 | 작은 예제를 읽고 도구 실행 흐름 실험 |
| [CrewAI](https://github.com/crewAIInc/crewAI) | 역할별 협업 | 역할이 다른 에이전트의 협업 구성 | 조사·분석·작성 역할을 나눈 작업 구성 |
| [browser-use](https://github.com/browser-use/browser-use) | 웹 자동화 | 에이전트의 브라우저 작업을 구현하는 라이브러리 | Python 앱 안에 웹 탐색 자동화 구현 |

<a id="agents"></a>

## Agents

기존 도구를 골라 코드 작업이나 조사를 시작합니다.

| 자료 | 용도 | 무엇을 제공하나요? | 이런 때 활용하세요 |
| --- | --- | --- | --- |
| [OpenAI Codex](https://github.com/openai/codex) | 코딩 | 저장소 기반 코드 작업과 검증 | 저장소의 수정 요청을 구현하고 결과 확인 |
| [OpenHands](https://github.com/OpenHands/OpenHands) | 개발 자동화 | 개발 에이전트 실행과 확장 | 개발 자동화를 별도 시스템으로 확장 |
| [Aider](https://github.com/Aider-AI/aider) | 터미널·Git | 터미널에서 대화하며 코드 수정 | Git 저장소에서 대화하며 수정 사항 검토 |
| [Cline](https://github.com/cline/cline) | 코딩 | 승인 기반 코드 수정과 도구 실행 | 코드 변경과 명령 실행을 단계별로 확인 |
| [Roo Code](https://github.com/RooCodeInc/Roo-Code) | IDE | 역할별 모드를 활용한 코딩 작업 | 계획·구현 등 역할별 모드로 작업 구분 |
| [Continue](https://github.com/continuedev/continue) | 개발 워크플로 | 개발 환경에 맞춘 AI 작업 흐름 구성 | 기존 개발 환경에 AI 작업 흐름 맞추기 |
| [Magentic-UI](https://github.com/microsoft/magentic-ui) | 사람 참여형 연구 | 사용자와 협력하는 웹 에이전트 연구 | 사람과 에이전트가 함께 수행하는 웹 작업 연구 |
| [GPT Researcher](https://github.com/assafelovic/gpt-researcher) | 조사·보고서 | 여러 출처를 조사해 보고서 작성 | 여러 웹 출처를 묶어 조사 보고서 초안 작성 |

<a id="learning"></a>

## 학습 자료

구현 원리와 규격을 이해할 때 참고합니다.

| 자료 | 용도 | 무엇을 제공하나요? | 이런 때 활용하세요 |
| --- | --- | --- | --- |
| [Agent Zero to Hero](https://github.com/KeWang0622/agent-zero-to-hero) | 실습 과정 | 프레임워크 없이 에이전트 하네스 구현 | 도구 호출·실행 루프를 직접 구현하며 학습 |

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

최근 조사·추가: 2026-09-07. 신규 항목과 위에 소개한 Matt Pocock 항목은 원본 저장소를 확인했습니다. 활용 예시는 편집자의 제안으로 실행 검증 결과가 아니며, 나머지 기존 항목을 전면 재검증한 것은 아닙니다.

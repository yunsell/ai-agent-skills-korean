<a id="agent-stack-brief"></a>
<h1>
  <picture>
    <source media="(max-width: 600px) and (prefers-color-scheme: dark)" srcset="assets/brief/masthead-mobile-dark.svg">
    <source media="(max-width: 600px)" srcset="assets/brief/masthead-mobile-light.svg">
    <source media="(prefers-color-scheme: dark)" srcset="assets/brief/masthead-dark.svg">
    <img src="assets/brief/masthead-light.svg" alt="Agent Stack Brief" width="1200">
  </picture>
</h1>

[English](README.en.md#agent-stack-brief) · [최신호](#latest)

<a id="resources"></a>

## 작업별 도구 한눈에 보기

| 작업 | 도구와 용도 |
| --- | --- |
| 웹 테스트 | **Playwright MCP** · 화면 동작 검사<br>**Chrome DevTools MCP** · 성능 진단 |
| Figma | **Figma MCP** · 디자인과 컴포넌트 읽기 |
| DB 변경 | **Supabase Agent Skills** · 스키마와 마이그레이션 검토 |
| 문서 변환 | **MarkItDown** · PDF와 Office 파일을 Markdown으로 변환 |
| 변경 계획 | **OpenSpec** · 구현 전 요구사항과 완료 조건 정리 |
| 에이전트 | **Deep Agents** · 파일, 도구, 서브에이전트와 승인 흐름 구성 |

<!-- catalog-tables:start -->
<details>
<summary>전체 59개 자료를 분류별로 보기</summary>

<a id="skills"></a>

### Skills · 15

| 자료 | 주요 기능 |
| --- | --- |
| [OpenAI Skills](https://github.com/openai/skills) | 코딩 · 문서 등 업무별 스킬을 찾는 카탈로그 |
| [Anthropic Skills](https://github.com/anthropics/skills) | 문서 작성과 디자인 등 스킬의 구현 예시 |
| [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills) | React · Next.js 성능과 웹 인터페이스 점검 |
| [Supabase Agent Skills](https://github.com/supabase/agent-skills) | Supabase · PostgreSQL 관련 개발 작업 |
| [Remotion Skills](https://github.com/remotion-dev/skills) | React 기반 영상 구성과 렌더링 |
| [Matt Pocock Skills](https://github.com/mattpocock/skills) | 요구사항 정리, PRD, 작업 분해, TDD · 디버깅 · 코드 리뷰 |
| [NVIDIA Skills](https://github.com/nvidia/skills) | CUDA, 시뮬레이션 등 전문 기술 작업 |
| [Awesome Copilot](https://github.com/github/awesome-copilot) | 스킬 · 지침 · 에이전트 설정 예시 탐색 |
| [Impeccable](https://github.com/pbakaus/impeccable) | 디자인 비평, 접근성 점검, 타이포그래피 · 레이아웃 · 모션 개선을 위한 스킬과 도구 |
| [Addy Osmani Agent Skills](https://github.com/addyosmani/agent-skills) | 요구사항, TDD, 코드 리뷰, 웹 성능 점검을 개발 단계별로 안내 |
| [Context Engineering Skills](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering) | 컨텍스트 압축 · 품질 저하, 메모리, 도구 설계, 에이전트 평가 패턴 |
| [Prisma Skills](https://github.com/prisma/skills) | Prisma CLI, Client, 스키마 · 마이그레이션과 버전 전환 지침 |
| [Neon Agent Skills](https://github.com/neondatabase/agent-skills) | Neon · Postgres 문서와 브랜치 기반 개발 · 마이그레이션 테스트 지침 |
| [Google Agents CLI](https://github.com/google/agents-cli) | Google ADK 프로젝트 생성, 평가 데이터셋 · 지표, 배포, CI/CD, 로그 · 트레이스 관측 스킬 |
| [Cloudflare Skills](https://github.com/cloudflare/skills) | Workers, Agents SDK, Durable Objects, Wrangler, 웹 성능과 Cloudflare One 실무 지침 |

<a id="mcp"></a>

### MCP · 11

| 자료 | 주요 기능 |
| --- | --- |
| [GitHub MCP Server](https://github.com/github/github-mcp-server) | 저장소 · 이슈 · PR · Actions 연결 |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | 실제 웹페이지 탐색과 브라우저 조작 |
| [Google MCP](https://github.com/google/mcp) | Google Cloud 서비스 연결 |
| [Perplexity MCP](https://github.com/perplexityai/modelcontextprotocol) | 웹 검색과 출처 기반 조사 연결 |
| [Context7](https://github.com/upstash/context7) | 라이브러리별 · 버전별 문서와 코드 예시 조회. MCP 또는 CLI+Skills 방식 제공 |
| [OpenAI Docs MCP](https://developers.openai.com/learn/docs-mcp) | 읽기 전용 OpenAI 문서 검색과 본문 조회 |
| [Figma MCP](https://developers.figma.com/docs/figma-mcp-server/) | Figma 디자인 문맥 제공. 구성에 따라 캔버스 변경도 가능 |
| [shadcn MCP](https://ui.shadcn.com/docs/mcp) | 레지스트리 컴포넌트 탐색 · 검색 · 설치 |
| [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Chrome 성능 트레이스, 네트워크 요청, 콘솔 · 스크린샷 조회와 브라우저 조작 |
| [Fetch MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch) | 지정한 URL을 Markdown으로 조회. 패키지 2026.11.4에서 선택적 호스트 허용 목록 추가 |
| [Context Mode](https://github.com/mksglu/context-mode) | 도구 출력의 실행 · 인덱싱 · 검색, 로컬 세션 저장, 환경별 라우팅 훅 |

<a id="tools"></a>

### CLI·탐색 · 8

| 자료 | 주요 기능 |
| --- | --- |
| [Skills CLI / find-skills](https://github.com/vercel-labs/skills) | 스킬 검색 · 설치 · 업데이트를 위한 CLI와 find-skills 탐색 스킬 |
| [OpenSpec](https://github.com/Fission-AI/OpenSpec) | 변경 제안 · 명세 · 구현 작업 관리. 2.1.1은 CLI 패키지에 포함된 스킬 설치 |
| [agent-browser](https://github.com/vercel-labs/agent-browser) | 페이지 스냅샷 · 요소 참조 기반 브라우저 조작 CLI와 사용 스킬 |
| [Playwright CLI](https://github.com/microsoft/playwright-cli) | 세션을 유지하며 클릭 · 입력 · 스크린샷 · 네트워크 · 트레이스 · 코드 기록을 실행하는 CLI와 스킬 |
| [Google Workspace CLI](https://github.com/googleworkspace/cli) | Gmail · Drive · Calendar · Sheets 등 API의 CLI, JSON 출력, 업무 스킬 |
| [HyperFrames](https://github.com/heygen-com/hyperframes) | HTML · CSS · 미디어를 MP4로 렌더링하는 CLI와 제작 스킬 |
| [MarkItDown](https://github.com/microsoft/markitdown) | PDF · Office 등 파일을 Markdown으로 변환하는 Python 라이브러리 · CLI와 MCP 패키지 |
| [skills.sh](https://skills.sh/) | 스킬 검색과 All Time · Trending · Hot 목록 제공 |

<a id="plugins"></a>

### Plugins · 5

| 자료 | 주요 기능 |
| --- | --- |
| [Superpowers](https://github.com/obra/superpowers) | 계획 · TDD · 디버깅 · 검증을 묶은 스킬 기반 개발 방법론 |
| [Azure Skills Plugin](https://github.com/microsoft/azure-skills) | Azure 배포 · 검증 · 진단 · 비용 · 보안 지침과 Azure · Foundry MCP 구성을 함께 제공 |
| [Sentry for AI](https://github.com/getsentry/sentry-for-ai) | Sentry 설치, 오류 · 트레이스 · 로그 분석, 이슈 수정, 알림과 OpenTelemetry 구성 스킬 |
| [OpenAI Developers Plugin](https://developers.openai.com/learn/developers-codex-plugin) | Platform 연결, API 키 설정 지원, Agents SDK 개발 안내. 환경별 제공 기능은 다름 |
| [Momentic Agent Skills](https://github.com/momentic-ai/skills) | 테스트 작성 · 실행 · 실패 분류 · 수리 스킬과 브라우저 · 모바일 MCP 서버 구성 |

<a id="validation"></a>

### 검증·평가 · 2

| 자료 | 주요 기능 |
| --- | --- |
| [Cisco Skill Scanner](https://github.com/cisco-ai-defense/skill-scanner) | 스킬 · 스크립트의 정적 · 행동 · 선택적 LLM 분석과 CI 연동 |
| [Promptfoo](https://github.com/promptfoo/promptfoo) | 설정 기반 프롬프트 · 에이전트 · RAG 평가, 모델 비교, 보안 테스트와 CI 연동 |

<a id="harnesses"></a>

### Harnesses · 1

| 자료 | 주요 기능 |
| --- | --- |
| [Deep Agents](https://github.com/langchain-ai/deepagents) | 파일시스템, 컨텍스트 관리, 서브에이전트, 스킬 · 도구와 승인 흐름을 묶은 실행 구성 |

<a id="frameworks"></a>

### Frameworks · 8

| 자료 | 주요 기능 |
| --- | --- |
| [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) | 도구 호출과 핸드오프를 코드로 구성 |
| [LangGraph](https://github.com/langchain-ai/langgraph) | 분기와 상태가 있는 에이전트 실행 설계 |
| [Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/) | Microsoft 생태계의 에이전트 시스템 개발 |
| [Google ADK](https://github.com/google/adk-python) | Google 생태계의 에이전트 개발 키트 |
| [PydanticAI](https://github.com/pydantic/pydantic-ai) | Python 타입 중심의 에이전트 앱 개발 |
| [smolagents](https://github.com/huggingface/smolagents) | 작은 코드로 에이전트 구현과 실험 |
| [CrewAI](https://github.com/crewAIInc/crewAI) | 역할이 다른 에이전트의 협업 구성 |
| [browser-use](https://github.com/browser-use/browser-use) | 에이전트의 브라우저 작업을 구현하는 라이브러리 |

<a id="agents"></a>

### Agents · 7

| 자료 | 주요 기능 |
| --- | --- |
| [OpenAI Codex](https://github.com/openai/codex) | 저장소 기반 코드 작업과 검증 |
| [OpenHands](https://github.com/OpenHands/OpenHands) | 개발 에이전트 실행과 확장 |
| [Aider](https://github.com/Aider-AI/aider) | 터미널에서 대화하며 코드 수정 |
| [Cline](https://github.com/cline/cline) | 승인 기반 코드 수정과 도구 실행 |
| [Continue](https://github.com/continuedev/continue) | 개발 환경에 맞춘 AI 작업 흐름 구성 |
| [MagenticLite (구 Magentic-UI)](https://github.com/microsoft/magentic-ui) | 브라우저 · 로컬 파일 작업, 사용자 승인 · 개입, VM 샌드박스 |
| [GPT Researcher](https://github.com/assafelovic/gpt-researcher) | 여러 출처를 조사해 보고서 작성 |

<a id="learning"></a>

### 학습 · 2

| 자료 | 주요 기능 |
| --- | --- |
| [Agent Zero to Hero](https://github.com/KeWang0622/agent-zero-to-hero) | 프레임워크 없이 에이전트 하네스 구현 |
| [MCP Skills 확장](https://github.com/modelcontextprotocol/ext-skills) | MCP Resources를 통한 스킬 탐색 · 조회와 파일별 해시 검증 규격 |

</details>
<!-- catalog-tables:end -->

[카탈로그 검색](https://yunsell.github.io/ai-agent-skills-korean/catalog/index.html) · [환경별 첫 MCP 연결](guides/client-first-steps.md)

---

<a id="latest"></a><a id="recent"></a>

## 최신호

004호 · 2026-11-23 · 원본 문서 확인

### [같은 스킬을 복원하고 변경 명세를 검토하는 법](newsletter/2026-11-23.md)

- [Skills CLI 1.9.0](newsletter/2026-11-23.md#skills) · 설치 커밋으로 스킬 복원
- [MCP Skills 베타](newsletter/2026-11-23.md#mcp) · 원격 스킬 파일 검증
- [OpenSpec 2.1.1](newsletter/2026-11-23.md#harness) · 오프라인 스킬 설치

[스킬 복원 실습](newsletter/2026-11-23.md#experiment) · [English edition](newsletter/2026-11-23.en.md)

## 카탈로그와 실무 안내

- [GitHub 전체 카탈로그](catalog/README.md)
- [Skills·MCP·Harness의 차이](guides/first-stack.md)
- [MCP 연결 문제 해결](guides/mcp-recovery.md)

<details>
<summary>실무 가이드 펼치기</summary>

- <a id="starter-packs"></a>[목적별 빠른 시작](guides/quick-starts.md) · [DB 작업](guides/quick-starts.md#database)
- <a id="field-cards"></a>[설치·인증·권한 비교](catalog/README.md#field-cards)
- [디자인 작업 가이드](guides/design-workflows.md)
- [화면 검증 실습](guides/web-validation.md)
- [카탈로그 개편 사례](guides/cases/catalog-design.md)

</details>

## 다음 호 다시 만나기

부정기 발행합니다. [한국어 RSS](https://yunsell.github.io/ai-agent-skills-korean/feed.xml)를 피드 리더에 추가하거나 [지난호](newsletter/README.md)를 저장해 두세요. [English RSS](https://yunsell.github.io/ai-agent-skills-korean/feed.en.xml)

<a id="contributing"></a>

제안·정정은 [Issue](https://github.com/yunsell/ai-agent-skills-korean/issues)로 보내 주세요. [편집·기여 기준](CONTRIBUTING.md#korean)

<details>
<summary>편집 기준과 확인 범위</summary>

변화·의미·다음 행동을 원본 출처와 함께 설명합니다. 사실과 의견, 문서 확인과 직접 실행을 구분하고 확인한 범위에 날짜를 붙입니다. 한·영판을 함께 관리하며, 이메일 발송은 제공하지 않습니다.

[지난 점검 기록](docs/updates/2026-10-12.md#korean) · [이전 분류의 시각화 지도](https://yunsell.github.io/ai-agent-skills-korean/)

</details>

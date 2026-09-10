# AI Agent Resources

**한국어** · [English](README.en.md)

AI 에이전트를 사용할 때 유용한 스킬, MCP 서버, 플러그인, 개발 도구와 학습 자료를 모았습니다.

[5분 스타터팩](#starter-packs) · [실무 검증 카드](#field-cards) · [최근 업데이트](#recent) · [Skills](#skills) · [MCP](#mcp) · [탐색·CLI](#tools) · [Plugins](#plugins) · [Frameworks](#frameworks) · [Agents](#agents) · [학습 자료](#learning) · [기여하기](#contributing)

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
| 만든 에이전트를 평가하고 배포하고 싶다 | [Google Agents CLI](https://github.com/google/agents-cli) |
| 운영 오류를 에이전트와 함께 분석하고 싶다 | [Sentry for AI](https://github.com/getsentry/sentry-for-ai) |

> 이름을 알고 있다면 `Ctrl+F` / `⌘F`로 페이지를 검색하세요. 모든 프로젝트 이름은 원본 저장소로 연결되며, 설치법과 지원 환경은 해당 저장소에서 확인할 수 있습니다.

<a id="starter-packs"></a>

## 5분 스타터팩

도구를 하나씩 비교하기 어렵다면 목적에 맞는 조합부터 시작하세요. 여기서 **5분**은 설치와 첫 요청을 시작하는 데 필요한 대략적인 시간이며, 로그인·프로젝트 설정·실제 작업 완료 시간은 포함하지 않습니다. 명령을 실행하기 전에 원본 저장소와 설치될 파일을 확인하세요.

<details>
<summary><strong>01 · 프런트엔드 품질 점검</strong> — 구현 기준 + 최신 문서 + 실제 브라우저 검증</summary>

**구성:** [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills) · [Context7](https://github.com/upstash/context7) · [Playwright CLI](https://github.com/microsoft/playwright-cli)

**시작하기**

```bash
npx skills add vercel-labs/agent-skills
npx ctx7 setup
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

**첫 요청**

> 현재 React/Next.js 화면을 성능과 UI 기준으로 검토하고 필요한 부분을 수정해 주세요. 사용 중인 버전의 문서는 Context7으로 확인하고, 핵심 사용자 흐름은 Playwright CLI로 검증한 뒤 성공·실패 증거를 남겨 주세요.

**완료 기준:** 변경 요약, 실행한 검사, 핵심 흐름 결과, 스크린샷 또는 재현 가능한 실패 기록.

</details>

<details>
<summary><strong>02 · 안전한 데이터베이스 변경</strong> — 스키마 분석 + 마이그레이션 + 버전별 문서</summary>

**구성:** 사용하는 스택에 따라 [Supabase Agent Skills](https://github.com/supabase/agent-skills) 또는 [Prisma Skills](https://github.com/prisma/skills) · [Context7](https://github.com/upstash/context7)

**시작하기**

```bash
# 둘 중 사용하는 스택 하나를 선택하세요.
npx skills add supabase/agent-skills
npx skills add prisma/skills

npx ctx7 setup
```

**첫 요청**

> 현재 스키마와 애플리케이션 사용 코드를 먼저 분석해 주세요. 변경 계획과 롤백 방법을 작성하고, 데이터 손실 가능성이 있는 명령은 실행 전에 알려 주세요. 개발용 또는 격리된 DB에서 마이그레이션을 검증한 뒤 결과를 정리해 주세요.

**완료 기준:** 영향 범위, 마이그레이션과 롤백 절차, 검증 결과, 운영 적용 전 확인 항목.

</details>

<details>
<summary><strong>03 · 계획부터 테스트까지</strong> — 요구사항 정리 + 작업 분해 + TDD + 완료 검증</summary>

**구성:** [Superpowers](https://github.com/obra/superpowers)

**시작하기:** Superpowers는 에이전트마다 설치 방식이 다릅니다. 원본 저장소의 **Quickstart**에서 Codex, Claude Code, Cursor, Copilot CLI 등 현재 환경을 선택해 설치하세요.

**첫 요청**

> 이 기능을 바로 구현하지 말고 요구사항과 제약을 먼저 확인해 주세요. 작은 작업으로 분해하고 실패하는 테스트부터 작성한 뒤 구현해 주세요. 마지막에는 테스트 결과와 변경 diff를 검토해 완료 조건을 확인해 주세요.

**완료 기준:** 합의된 요구사항, 작업 계획, 실패→통과 테스트 기록, 최종 diff와 검증 결과.

</details>

<details>
<summary><strong>04 · 운영 오류 조사</strong> — 영향도 파악 + 원인 분석 + 수정 검증</summary>

**구성:** [Sentry for AI](https://github.com/getsentry/sentry-for-ai)

**시작하기**

```bash
npx @sentry/ai install
```

설치기가 현재 에이전트에 맞는 플러그인을 안내합니다. 운영 데이터를 조회하려면 Sentry 로그인이 필요합니다.

**첫 요청**

> 최근 24시간의 주요 오류를 사용자 영향도 순으로 정리해 주세요. 가장 영향이 큰 오류의 이벤트·트레이스·관련 코드를 근거로 원인을 분석하고 수정안을 테스트해 주세요. 이슈 종료나 배포는 승인 없이 실행하지 마세요.

**완료 기준:** 오류 근거, 영향 범위, 원인 가설, 코드 변경과 테스트 결과, 배포 전 확인 사항.

</details>

<details>
<summary><strong>05 · 에이전트 개발과 평가</strong> — 생성 + 평가 데이터셋 + 실패 분석 + 배포 준비</summary>

**구성:** [Google Agents CLI](https://github.com/google/agents-cli)

**시작하기**

```bash
uvx google-agents-cli setup

# CLI 없이 스킬만 설치하려면
npx skills add google/agents-cli
```

**첫 요청**

> 로컬에서 실행할 작은 ADK 에이전트를 만들어 주세요. 정상·경계·실패 사례가 포함된 평가 데이터셋을 만들고 평가를 실행한 뒤, 실패 유형과 개선 전후 차이를 정리해 주세요. 아직 클라우드에는 배포하지 마세요.

**완료 기준:** 실행 가능한 에이전트, 평가 사례와 지표, 실패 유형 분석, 배포 여부를 판단할 근거.

</details>

<a id="field-cards"></a>

## 실무 검증 카드

스타터팩에 사용한 핵심 자료를 같은 기준으로 비교했습니다. **문서 확인**은 원본의 설치·지원 범위·사용법을 검토했다는 뜻이며, 이 저장소가 실제 계정과 프로젝트에서 실행 결과를 보증한다는 뜻은 아닙니다.

| 자료 | 지원 환경 | 시작 난이도 | 로그인 | 주요 접근 범위 | 위험도 | 확인 |
| --- | --- | --- | --- | --- | --- | --- |
| [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills) | Codex, Claude Code, Cursor, Copilot 등 Agent Skills 호환 환경 | 쉬움 · `npx skills` | 설치 시 불필요 | 프로젝트 지침, 코드·UI 수정 | 중간 | 문서 · 2026-09-10 |
| [Context7](https://github.com/upstash/context7) | Codex, Claude Code, Cursor, VS Code, Copilot 등 | 쉬움 · `npx ctx7 setup` | OAuth 또는 API 키 | 외부 문서 조회, 에이전트 설정 파일 | 낮음 | 문서 · 2026-09-10 |
| [Playwright CLI](https://github.com/microsoft/playwright-cli) | CLI를 사용할 수 있는 코딩 에이전트 | 쉬움 · npm | 불필요¹ | 브라우저, 페이지 입력, 세션·스크린샷 | 중간 | 문서 · 2026-09-10 |
| [Supabase Agent Skills](https://github.com/supabase/agent-skills) | Agent Skills 호환 환경 | 쉬움 · `npx skills` | 설치 시 불필요² | 프로젝트 코드, 스키마·DB 작업 지침 | 높음 | 문서 · 2026-09-10 |
| [Prisma Skills](https://github.com/prisma/skills) | Agent Skills 호환 환경 | 쉬움 · `npx skills` | 설치 시 불필요² | Prisma 스키마, 마이그레이션·DB 명령 | 높음 | 문서 · 2026-09-10 |
| [Superpowers](https://github.com/obra/superpowers) | Codex, Claude Code, Cursor, Copilot CLI, OpenCode 등 | 보통 · 환경별 플러그인 | 불필요 | 프로젝트 파일, 명령, Git·테스트 흐름 | 중간 | 문서 · 2026-09-10 |
| [Sentry for AI](https://github.com/getsentry/sentry-for-ai) | Codex, Claude Code, Cursor, Grok | 보통 · 환경별 플러그인 | 운영 조회 시 필요 | 오류·로그·트레이스, 프로젝트 코드 | 높음 | 문서 · 2026-09-10 |
| [Google Agents CLI](https://github.com/google/agents-cli) | Codex, Claude Code, Antigravity 및 기타 코딩 에이전트 | 보통 · Python/uv/Node | 실행 시 AI Studio 또는 Google Cloud | 로컬 코드·평가, 클라우드 배포·로그 | 높음 | 문서 · 2026-09-10 |
| [GitHub MCP Server](https://github.com/github/github-mcp-server) | Remote/Local MCP를 지원하는 호스트 | 보통 · 호스트별 설정 | OAuth 또는 PAT | 저장소·이슈·PR·Actions³ | 중간–높음 | 문서 · 2026-09-10 |

¹ 로그인된 브라우저 프로필이나 민감한 폼을 다루면 위험도가 높아집니다.<br>
² 실제 원격 DB 작업에는 해당 서비스 인증이 필요합니다.<br>
³ GitHub MCP는 읽기 전용 모드와 도구 allowlist를 지원합니다. 처음에는 필요한 저장소와 읽기 도구만 허용하는 구성을 권장합니다.

**위험도 기준:** 낮음 = 주로 읽기·문서 조회 · 중간 = 파일, 브라우저 또는 외부 API 변경 가능 · 높음 = 운영 데이터, DB, 클라우드 배포 또는 비용에 영향 가능. 위험도는 프로젝트 자체의 품질 평가가 아니라, 연결했을 때 가능한 작업 범위를 나타냅니다.

<a id="recent"></a>

## 최근 확인한 자료 · 2026-09-09

[skills.sh Trending·Hot](https://skills.sh/trending)에서 **Google Agents CLI, Cloudflare Skills, Azure Skills, Momentic, Playwright CLI**의 움직임을 확인했습니다. 실제 업무 범위와 설치 문서는 각 원본 저장소에서 다시 검토했습니다. 순위는 계속 바뀌며 인기도가 품질 평가를 뜻하지는 않습니다.

이번 갱신에서는 실무 적용성이 분명한 **Google Agents CLI**(개발·평가·배포), **Cloudflare Skills**(Workers·Agents SDK), **Azure Skills Plugin**(배포·진단·비용), **Sentry for AI**(관측·운영 디버깅), **Momentic Agent Skills**(웹·모바일 E2E), **Playwright CLI**(브라우저 검증)를 추가했습니다.

### 실무에서 주목할 흐름

| 흐름 | 왜 유용한가 | 관련 자료 |
| --- | --- | --- |
| **CLI + Skill** | 명령 실행은 CLI에 맡기고 스킬은 절차와 판단 기준을 제공해 반복 자동화를 단순하게 구성 | [Playwright CLI](https://github.com/microsoft/playwright-cli), [agent-browser](https://github.com/vercel-labs/agent-browser) |
| **Skill + MCP 플러그인** | 업무 지침과 실제 서비스 조작 도구를 한 묶음으로 설치해 설정 누락을 줄임 | [Cloudflare Skills](https://github.com/cloudflare/skills), [Azure Skills Plugin](https://github.com/microsoft/azure-skills), [Sentry for AI](https://github.com/getsentry/sentry-for-ai) |
| **평가 후 배포** | 데이터셋과 평가 지표로 변경 전후를 비교하고 실패 유형을 분석한 뒤 배포 | [Google Agents CLI](https://github.com/google/agents-cli) |
| **운영 관측과 복구** | 로그·트레이스·오류 문맥을 읽고 코드 수정까지 이어지는 운영 루프 구성 | [Sentry for AI](https://github.com/getsentry/sentry-for-ai), [Google Agents CLI](https://github.com/google/agents-cli) |
| **버전별 문서 주입** | 학습 데이터 대신 현재 라이브러리 버전의 문서와 예제를 작업 문맥에 공급 | [Context7](https://github.com/upstash/context7) |

[OpenAI 공식 스킬 안내](https://learn.chatgpt.com/docs/build-skills)에 따르면 스킬은 지침·자료·선택적 스크립트를 묶는 작성 단위이고, 여러 사람에게 스킬과 커넥터를 배포할 때는 플러그인으로 패키징할 수 있습니다.

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
| [Google Agents CLI](https://github.com/google/agents-cli) | 에이전트 개발·운영 | Google ADK 프로젝트 생성, 평가 데이터셋·지표, 배포, CI/CD, 로그·트레이스 관측 스킬 | Google Cloud용 에이전트를 만들고 평가 결과를 비교한 뒤 배포할 때 |
| [Cloudflare Skills](https://github.com/cloudflare/skills) | 엣지·서버리스 | Workers, Agents SDK, Durable Objects, Wrangler, 웹 성능과 Cloudflare One 실무 지침 | 상태가 있는 에이전트나 Worker를 만들고 배포 설정까지 검토할 때 |

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
| [Playwright CLI](https://github.com/microsoft/playwright-cli) | 브라우저 검증 | 세션을 유지하며 클릭·입력·스크린샷·네트워크·트레이스·코드 기록을 실행하는 CLI와 스킬 | 에이전트가 구현한 화면을 브라우저에서 재현하고 증거를 남길 때 |
| [skills.sh](https://skills.sh/) | 스킬 디렉터리 | 스킬 검색과 All Time·Trending·Hot 목록 제공 | 새 스킬 후보와 현재 관심 흐름을 찾아볼 때 |

<a id="plugins"></a>

## Plugins

여러 스킬과 작업 흐름을 묶어서 도입합니다.

| 자료 | 용도 | 무엇을 제공하나요? | 이런 때 활용하세요 |
| --- | --- | --- | --- |
| [Superpowers](https://github.com/obra/superpowers) | 개발 워크플로 | 계획·TDD·디버깅·검증을 묶은 스킬 기반 개발 방법론 | 새 기능의 설계부터 테스트·리뷰까지 절차화 |
| [Azure Skills Plugin](https://github.com/microsoft/azure-skills) | Azure 개발·운영 | Azure 배포·검증·진단·비용·보안 지침과 Azure·Foundry MCP 구성을 함께 제공 | Azure 리소스를 조회하고 앱을 준비·배포하거나 장애와 비용을 분석할 때 |
| [Sentry for AI](https://github.com/getsentry/sentry-for-ai) | 관측·운영 디버깅 | Sentry 설치, 오류·트레이스·로그 분석, 이슈 수정, 알림과 OpenTelemetry 구성 스킬 | 운영 오류의 영향을 파악하고 원인 문맥을 바탕으로 코드까지 수정할 때 |
| [Momentic Agent Skills](https://github.com/momentic-ai/skills) | 웹·모바일 E2E | 테스트 작성·실행·실패 분류·수리 스킬과 브라우저·모바일 MCP 서버 구성 | 기능 변경 뒤 실제 브라우저나 기기에서 회귀 테스트를 만들고 고칠 때 |

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

최근 조사·추가: 2026-09-10. 스타터팩의 설치 명령과 검증 카드는 원본 저장소 문서를 기준으로 확인했습니다. 활용 예시와 위험도는 편집자의 판단이며 실행 검증이나 보안 인증 결과가 아닙니다. 나머지 기존 항목을 전면 재검증한 것은 아닙니다.

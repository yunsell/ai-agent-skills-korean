# 리소스 카탈로그

[Agent Stack Brief](../README.md) · **한국어** · [English](README.en.md)

AI 에이전트를 사용할 때 유용한 스킬, MCP 서버, 플러그인, 개발 도구와 학습 자료를 모았습니다.

기본 자료 문서 확인 **2026-10-12** · 일부 릴리스 갱신 **2026-10-19**. [관련 브리핑](../newsletter/2026-10-19.md)

## 지금 어떤 작업을 하나요?

하나를 펼치면 추천 시작점이 나옵니다. 이름을 알고 있다면 Ctrl+F / ⌘F로 검색하세요. 프로젝트 이름은 원본 자료로 연결됩니다.

<a id="task-code"></a>
<details>
<summary><strong>01 · 개발·검증</strong> — 화면 구현, 브라우저, 코드 품질</summary>

**추천 시작점:** [프런트엔드 빠른 시작](../guides/quick-starts.md#frontend).

[디자인 검토·Figma·컴포넌트 작업으로 찾기](../guides/design-workflows.md)

- 화면 구현: [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills)
- 브라우저 동작 검사: [Playwright MCP](https://github.com/microsoft/playwright-mcp), 성능 진단: [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp)
- 계획·테스트 절차: [Superpowers](https://github.com/obra/superpowers)
- 프롬프트·모델 변경 전후 비교: [Promptfoo](https://github.com/promptfoo/promptfoo)

[검색 검증 실습으로 시작하기](../guides/web-validation.md)

</details>

<a id="task-work"></a>
<details>
<summary><strong>02 · 업무·자료</strong> — 문서, 디자인, 파일 변환, 업무 서비스</summary>

**추천 시작점:** [Anthropic Skills](https://github.com/anthropics/skills)에서 문서·디자인 작업 절차를 찾으세요.

- PDF·Office 파일 변환: [MarkItDown](https://github.com/microsoft/markitdown)
- Gmail·Drive·Calendar: [Google Workspace CLI](https://github.com/googleworkspace/cli) — 개발 중이며 Google 공식 지원 제품은 아님

</details>

<a id="task-ops"></a>
<details>
<summary><strong>03 · 운영·데이터</strong> — DB, GitHub, 오류 조사, 스킬 점검</summary>

**추천 시작점:** [DB 빠른 시작](../guides/quick-starts.md#database) 또는 [운영 오류 조사](../guides/quick-starts.md#operations).

- DB 작업 지침: [Supabase Agent Skills](https://github.com/supabase/agent-skills)
- 이슈·PR 연결: [GitHub MCP Server](https://github.com/github/github-mcp-server)
- 운영 오류 분석: [Sentry for AI](https://github.com/getsentry/sentry-for-ai)
- 외부 스킬 검토: [Cisco Skill Scanner](https://github.com/cisco-ai-defense/skill-scanner)

</details>

<a id="task-build"></a>
<details>
<summary><strong>04 · 에이전트 구축</strong> — 앱 개발, 평가, 실행 흐름</summary>

**추천 시작점:** [에이전트 개발 빠른 시작](../guides/quick-starts.md#agent)에서 ADK 앱과 평가 흐름을 준비하세요.

- 에이전트 앱 개발: [OpenAI Agents SDK](https://github.com/openai/openai-agents-python)
- ADK 개발·평가: [Google Agents CLI](https://github.com/google/agents-cli)
- 실행·파일·문맥·승인 흐름: [Deep Agents](https://github.com/langchain-ai/deepagents)

[Skills·MCP·Harness 역할 이해하기](../guides/first-stack.md)

</details>

**이미 필요한 것을 안다면:** [빠른 시작](#starter-packs) · [설치·접근 범위](#field-cards) · [업데이트·대안](#recent)

<details>
<summary>자료 분류로 바로 가기</summary>

[Skills](#skills) · [MCP](#mcp) · [CLI](#tools) · [Plugins](#plugins) · [검증·평가](#validation) · [Harnesses](#harnesses) · [Frameworks](#frameworks) · [Agents](#agents) · [학습](#learning)

</details>

<a id="starter-packs"></a>

## 목적별 빠른 시작

각 링크를 누르면 해당 안내가 바로 펼쳐진 문서로 이동합니다.

| 작업 | 안내 |
| --- | --- |
| <a id="starter-frontend"></a>01 · 프런트엔드 품질 점검 | [바로 시작 →](../guides/quick-starts.md#frontend) |
| <a id="starter-db"></a>02 · 안전한 데이터베이스 변경 | [바로 시작 →](../guides/quick-starts.md#database) |
| <a id="starter-process"></a>03 · 계획부터 테스트까지 | [바로 시작 →](../guides/quick-starts.md#process) |
| <a id="starter-ops"></a>04 · 운영 오류 조사 | [바로 시작 →](../guides/quick-starts.md#operations) |
| <a id="starter-agent"></a>05 · 에이전트 개발과 평가 | [바로 시작 →](../guides/quick-starts.md#agent) |

<a id="field-cards"></a>

## 실무 비교 · 작업을 고르고 하나만 펼치세요

아래 9개 자료의 설치·지원·권한 문서 확인일은 **2026-10-12**입니다. **문서 확인 ≠ 실행 검증**입니다. 이번 변경은 표시 방식 개선이며 기존 확인일은 갱신하지 않았습니다.

[화면·코드](#compare-code) · [DB·운영](#compare-data) · [문서·에이전트](#compare-workflows)

각 항목의 준비·인증·접근 범위·위험도를 세로로 읽을 수 있습니다. 설치가 막혔다면 [증상별 복구 안내](../guides/mcp-recovery.md)를 보세요.

<a id="compare-code"></a>

### 화면·코드

<details>
<summary>Vercel Agent Skills · React·Next.js 점검</summary>

[원본 설치 안내](https://github.com/vercel-labs/agent-skills)

- **준비:** Agent Skills 호환 환경 · npx skills
- **인증:** 설치 인증 없음
- **접근 범위:** 프로젝트 코드·UI
- **작업 위험도:** 중간

</details>

<details>
<summary>Playwright CLI · 브라우저 검증</summary>

[원본 설치 안내](https://github.com/microsoft/playwright-cli)

- **준비:** Node.js 18+ · 셸 실행이 가능한 에이전트 · npm
- **인증:** 도구 인증 없음. 로그인된 프로필·민감한 폼은 별도 검토
- **접근 범위:** 브라우저 입력·세션·스크린샷
- **작업 위험도:** 중간

</details>

<details>
<summary>Superpowers · 계획·테스트 절차</summary>

[원본 설치 안내](https://github.com/obra/superpowers)

- **준비:** 에이전트별 Installation 확인 · 환경별 설치
- **인증:** 별도 서비스 인증 없음
- **접근 범위:** 파일·명령·Git·테스트
- **작업 위험도:** 중간

</details>

<a id="compare-data"></a>

### DB·운영

<details>
<summary>Supabase Agent Skills · Supabase·PostgreSQL</summary>

[원본 설치 안내](https://github.com/supabase/agent-skills)

- **준비:** Agent Skills 호환 환경 · npx skills
- **인증:** 설치 인증 없음. 실제 원격 DB 작업은 서비스 인증 필요
- **접근 범위:** 코드·스키마·DB 작업
- **작업 위험도:** 높음

</details>

<details>
<summary>Prisma Skills · Prisma 스키마·마이그레이션</summary>

[원본 설치 안내](https://github.com/prisma/skills)

- **준비:** Agent Skills 호환 환경 · 설치된 ORM 버전에 맞는 스킬 선택
- **인증:** 설치 인증 없음. 실제 원격 DB 작업은 서비스 인증 필요
- **접근 범위:** 스키마·마이그레이션
- **작업 위험도:** 높음

</details>

<details>
<summary>Sentry for AI · 운영 오류 조사</summary>

[원본 설치 안내](https://github.com/getsentry/sentry-for-ai)

- **준비:** Codex·Claude Code·Cursor·Grok용 배포본 · 일부 작업은 GitHub CLI 필요
- **인증:** Sentry 인증
- **접근 범위:** 오류·로그·트레이스·코드
- **작업 위험도:** 높음

</details>

<a id="compare-workflows"></a>

### 문서·에이전트

<details>
<summary>Context7 · 버전별 문서 조회</summary>

[원본 설치 안내](https://github.com/upstash/context7)

- **준비:** ctx7는 Node.js 18+ · npx ctx7 setup · 기타 호스트는 수동 MCP 안내 확인
- **인증:** OAuth/API 키
- **접근 범위:** 외부 문서·에이전트 설정
- **작업 위험도:** 낮음

</details>

<details>
<summary>Google Agents CLI · ADK 앱 개발·평가</summary>

[원본 설치 안내](https://github.com/google/agents-cli)

- **준비:** Python 3.11+ · uv · Node.js
- **인증:** 로컬 모델 실행과 클라우드 배포 인증 구분
- **접근 범위:** 로컬 평가·클라우드 배포
- **작업 위험도:** 높음

</details>

<details>
<summary>GitHub MCP Server · 저장소·이슈·PR 연결</summary>

[원본 설치 안내](https://github.com/github/github-mcp-server)

- **준비:** Remote/Local MCP 호스트 · 로컬 컨테이너 방식은 Docker 필요
- **인증:** OAuth/PAT
- **접근 범위:** 저장소·이슈·PR·Actions. 처음에는 필요한 저장소·읽기 도구만 허용
- **작업 위험도:** 중간–높음

</details>

**위험도 기준:** 낮음 = 읽기·문서 조회 · 중간 = 파일·브라우저·외부 API 변경 가능 · 높음 = 운영 데이터·DB·배포·비용 영향 가능. 프로젝트 품질 점수가 아니라 접근 범위입니다. 인증 정보와 실제 허용 권한은 별도로 검토하세요.

<a id="recent"></a>

**디자인·문서 연결 추가 확인 · 2026-10-19:** Figma MCP·shadcn MCP·OpenAI Docs MCP의 원본 안내를 확인했습니다. Docs MCP는 별도 사례에서 실제 조회했고, Figma·shadcn은 문서 확인입니다. 기존 Impeccable과 함께 [디자인 작업 가이드](../guides/design-workflows.md)로 연결했습니다.

## 점검 기록과 최신 소식

[2026-10-12 점검 기록](../docs/updates/2026-10-12.md#korean)은 이전 확인의 근거입니다. 날짜가 있는 뉴스·해설은 [뉴스레터 아카이브](../newsletter/README.md)에서, 가장 최근 브리핑은 [홈](../README.md)에서 읽으세요. 이 목록은 용도별 도구 탐색과 설치 안내를 위한 카탈로그입니다.

### 어떤 대안이 내 작업에 맞나요?

보편적으로 더 좋은 도구보다는 **현재 실행 환경과 필요한 작업**을 기준으로 선택하세요.

| 필요한 작업 | 먼저 볼 자료 | 선택 기준 |
| --- | --- | --- |
| 코딩 에이전트의 브라우저 점검 | [Playwright CLI](https://github.com/microsoft/playwright-cli) / [agent-browser](https://github.com/vercel-labs/agent-browser) | 셸 실행 가능. CLI+Skill 방식과 결과 기록이 필요한 경우 |
| MCP 호스트에서 브라우저 조작 | [Playwright MCP](https://github.com/microsoft/playwright-mcp) | MCP 도구 호출이 작업 환경에 더 잘 맞는 경우 |
| ADK 에이전트 개발·평가·배포 | [Google Agents CLI](https://github.com/google/agents-cli) | Google ADK·Cloud 중심의 개발 생명주기 |
| 프롬프트·모델·RAG 회귀 비교 | [Promptfoo](https://github.com/promptfoo/promptfoo) | 평가 사례를 재사용하며 CI에서 결과를 비교 |
| 외부 스킬 도입 전 보안 검토 | [Cisco Skill Scanner](https://github.com/cisco-ai-defense/skill-scanner) | 설치 전에 파일 검사. 통과해도 안전 보장은 아님 |
| 웹 성능·콘솔·네트워크 원인 진단 | [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 동작 재현을 넘어 DevTools 트레이스와 네트워크 근거가 필요할 때 |
| HTML 기반 영상 제작 | [HyperFrames](https://github.com/heygen-com/hyperframes) / [Remotion Skills](https://github.com/remotion-dev/skills) | HTML·CSS 자산 중심이면 HyperFrames, React 컴포넌트 중심이면 Remotion |
| 긴 도구 출력·세션 문맥 관리 | [Context Mode](https://github.com/mksglu/context-mode) | 고급 설정. 훅·로컬 저장·기존 도구 라우팅과의 충돌을 시험 프로젝트에서 확인 |

### 실무에서 주목할 흐름

| 흐름 | 왜 유용한가 | 관련 자료 |
| --- | --- | --- |
| **CLI + Skill** | 명령 실행은 CLI에 맡기고 스킬은 절차와 판단 기준을 제공해 반복 자동화를 단순하게 구성 | [Playwright CLI](https://github.com/microsoft/playwright-cli), [agent-browser](https://github.com/vercel-labs/agent-browser) |
| **Skill + MCP 플러그인** | 업무 지침과 실제 서비스 조작 도구를 한 묶음으로 설치해 설정 누락을 줄임 | [Cloudflare Skills](https://github.com/cloudflare/skills), [Azure Skills Plugin](https://github.com/microsoft/azure-skills), [Sentry for AI](https://github.com/getsentry/sentry-for-ai) |
| **평가 후 배포** | 데이터셋과 평가 지표로 변경 전후를 비교하고 실패 유형을 분석한 뒤 배포 | [Google Agents CLI](https://github.com/google/agents-cli) |
| **운영 관측과 복구** | 로그·트레이스·오류 문맥을 읽고 코드 수정까지 이어지는 운영 루프 구성 | [Sentry for AI](https://github.com/getsentry/sentry-for-ai), [Google Agents CLI](https://github.com/google/agents-cli) |
| **버전별 문서 주입** | 학습 데이터 대신 현재 라이브러리 버전의 문서와 예제를 작업 문맥에 공급 | [Context7](https://github.com/upstash/context7) |

[OpenAI 공식 스킬 안내](https://developers.openai.com/plugins/build/skills)에 따르면 스킬은 지침·자료·선택적 스크립트를 묶는 작성 단위이며, 플러그인에 포함해 배포할 수 있습니다. 실시간 데이터 조회·인증·서비스 작업은 MCP 같은 연결 도구가 담당합니다.

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
| [Matt Pocock Skills](https://github.com/mattpocock/skills) | 기획·개발 | 요구사항 정리, PRD, 작업 분해, TDD·디버깅·코드 리뷰 | grill-me로 요구사항을 구체화하고 테스트·리뷰 흐름 연결 |
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
| [OpenAI Docs MCP](https://developers.openai.com/learn/docs-mcp) | 공식 문서 조회 | 읽기 전용 OpenAI 문서 검색과 본문 조회 | 설정·API 설명을 원문과 대조할 때. [실제 업무 사례](../guides/cases/docs-mcp-review.md) |
| [Figma MCP](https://developers.figma.com/docs/figma-mcp-server/) | 디자인 연결 | Figma 디자인 문맥 제공. 구성에 따라 캔버스 변경도 가능 | 디자인·토큰을 코드와 대응할 때. 파일 권한·쓰기 범위 확인 |
| [shadcn MCP](https://ui.shadcn.com/docs/mcp) | UI 컴포넌트 | 레지스트리 컴포넌트 탐색·검색·설치 | 호환 컴포넌트를 찾고 설치 diff를 검토할 때 |
| [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 웹 성능·디버깅 | Chrome 성능 트레이스, 네트워크 요청, 콘솔·스크린샷 조회와 브라우저 조작 | 느린 화면·실패 요청의 원인을 분석할 때. 브라우저 데이터 노출·기본 통계 수집 확인 |
| [Context Mode](https://github.com/mksglu/context-mode) | 고급 컨텍스트 관리 | 도구 출력의 실행·인덱싱·검색, 로컬 세션 저장, 환경별 라우팅 훅 | 출력이 큰 장기 작업을 시험할 때. 훅 지원·저장 정책은 환경별 확인 |

**서버 더 찾기:** [공식 MCP Registry](https://registry.modelcontextprotocol.io/) · [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers). 프로토콜 구현을 배우려면 [MCP Reference Servers](https://github.com/modelcontextprotocol/servers)를 참고하세요.

Chrome DevTools MCP 추가 문서 확인: **2026-10-19**. [1.11.0](https://github.com/ChromeDevTools/chrome-devtools-mcp/releases/tag/chrome-devtools-mcp-v1.11.0)은 FFmpeg 없는 화면 녹화, 캐시 무시 옵션과 실패 감사 항목·DOM 노드의 직접 반환을 추가했습니다. 비민감 시험 브라우저에서 진단 자료를 검토하세요. 실행 검증은 하지 않았습니다.

<a id="tools"></a>

## 탐색·CLI 도구

스킬을 찾고 에이전트 작업에 필요한 도구를 연결합니다.

| 자료 | 용도 | 무엇을 제공하나요? | 이런 때 활용하세요 |
| --- | --- | --- | --- |
| [Skills CLI / find-skills](https://github.com/vercel-labs/skills) | 스킬 검색·관리 | 스킬 검색·설치·업데이트를 위한 CLI와 find-skills 탐색 스킬 | 원하는 작업을 설명하고 사용할 스킬을 찾을 때 |
| [agent-browser](https://github.com/vercel-labs/agent-browser) | 브라우저 CLI | 페이지 스냅샷·요소 참조 기반 브라우저 조작 CLI와 사용 스킬 | MCP 외에 CLI 방식으로 웹 작업을 연결하고 싶을 때 |
| [Playwright CLI](https://github.com/microsoft/playwright-cli) | 브라우저 검증 | 세션을 유지하며 클릭·입력·스크린샷·네트워크·트레이스·코드 기록을 실행하는 CLI와 스킬 | 에이전트가 구현한 화면을 브라우저에서 재현하고 증거를 남길 때 |
| [Google Workspace CLI](https://github.com/googleworkspace/cli) | 업무 서비스 | Gmail·Drive·Calendar·Sheets 등 API의 CLI, JSON 출력, 업무 스킬 | 메일·일정·문서 업무를 자동화할 때. 개발 중이며 Google 공식 지원 제품은 아님 |
| [HyperFrames](https://github.com/heygen-com/hyperframes) | HTML 영상 제작 | HTML·CSS·미디어를 MP4로 렌더링하는 CLI와 제작 스킬 | HTML 자산으로 제품 데모·설명 영상 제작. 로컬 렌더링에는 Node.js 22+·FFmpeg 필요 |
| [MarkItDown](https://github.com/microsoft/markitdown) | 문서 입력·변환 | PDF·Office 등 파일을 Markdown으로 변환하는 Python 라이브러리·CLI와 MCP 패키지 | 검색·요약·RAG용 텍스트 준비. 시각적 원본 복원이 아닌 문서 구조·내용 추출 |
| [skills.sh](https://skills.sh/) | 스킬 디렉터리 | 스킬 검색과 All Time·Trending·Hot 목록 제공 | 새 스킬 후보와 현재 관심 흐름을 찾아볼 때 |

<a id="plugins"></a>

## Plugins

여러 스킬과 작업 흐름을 묶어서 도입합니다.

| 자료 | 용도 | 무엇을 제공하나요? | 이런 때 활용하세요 |
| --- | --- | --- | --- |
| [Superpowers](https://github.com/obra/superpowers) | 개발 워크플로 | 계획·TDD·디버깅·검증을 묶은 스킬 기반 개발 방법론 | 새 기능의 설계부터 테스트·리뷰까지 절차화 |
| [Azure Skills Plugin](https://github.com/microsoft/azure-skills) | Azure 개발·운영 | Azure 배포·검증·진단·비용·보안 지침과 Azure·Foundry MCP 구성을 함께 제공 | Azure 리소스를 조회하고 앱을 준비·배포하거나 장애와 비용을 분석할 때 |
| [Sentry for AI](https://github.com/getsentry/sentry-for-ai) | 관측·운영 디버깅 | Sentry 설치, 오류·트레이스·로그 분석, 이슈 수정, 알림과 OpenTelemetry 구성 스킬 | 운영 오류의 영향을 파악하고 원인 문맥을 바탕으로 코드까지 수정할 때 |
| [OpenAI Developers Plugin](https://developers.openai.com/learn/developers-codex-plugin) | OpenAI API 개발 | Platform 연결, API 키 설정 지원, Agents SDK 개발 안내. 환경별 제공 기능은 다름 | OpenAI API 앱을 만들거나 오류를 조사할 때. 공식 문서에서 설치·지원 범위 확인 |
| [Momentic Agent Skills](https://github.com/momentic-ai/skills) | 웹·모바일 E2E | 테스트 작성·실행·실패 분류·수리 스킬과 브라우저·모바일 MCP 서버 구성 | 기능 변경 뒤 실제 브라우저나 기기에서 회귀 테스트를 만들고 고칠 때 |

플러그인 형식과 설치 방식은 에이전트마다 다릅니다. 프로젝트의 환경별 설치 안내를 확인하세요.

<a id="validation"></a>

## 검증·평가

도구를 더 연결하기 전에 안전성을 검토하고, 변경 전후의 결과를 비교합니다.

| 자료 | 용도 | 무엇을 제공하나요? | 이런 때 활용하세요 |
| --- | --- | --- | --- |
| [Cisco Skill Scanner](https://github.com/cisco-ai-defense/skill-scanner) | 스킬 보안 검토 | 스킬·스크립트의 정적·행동·선택적 LLM 분석과 CI 연동 | 외부 스킬을 설치하거나 팀에 배포하기 전 의심 동작 검토 |
| [Promptfoo](https://github.com/promptfoo/promptfoo) | 평가·회귀·레드팀 | 설정 기반 프롬프트·에이전트·RAG 평가, 모델 비교, 보안 테스트와 CI 연동 | 모델·프롬프트 변경 전후의 정확도와 실패 사례 비교 |

Scanner는 CPython 3.11–3.14가 필요합니다. 2.2.0 사용자는 [2.2.1 보안 수정](https://github.com/cisco-ai-defense/skill-scanner/releases/tag/2.2.1)과 [2.2.2 후속 수정](https://github.com/cisco-ai-defense/skill-scanner/releases/tag/2.2.2)을 확인하세요. **2026-10-19 추가 문서 확인:** [2.3.0](https://github.com/cisco-ai-defense/skill-scanner/releases/tag/2.3.0)은 미검사 링크·로드 실패를 보고하고 분류 코드를 변경하므로, CI 필터·종료 코드도 함께 검토하세요. 기본 정적 분석과 외부 서비스 분석을 구분하고, LLM·VirusTotal 등 외부 분석을 켜기 전에 코드·파일의 전송 범위를 확인하세요. Promptfoo도 선택한 모델·대상에 따라 인증, 데이터 전송과 비용이 발생합니다. 보안 테스트는 소유하거나 허가받은 대상에만 수행하세요.

<a id="harnesses"></a>

## Harnesses

모델의 작업 루프에 파일·도구·메모리·승인 흐름을 묶는 실행 골격입니다. 프레임워크 전체와 같은 뜻으로 쓰지 않습니다.

| 자료 | 용도 | 무엇을 제공하나요? | 이런 때 활용하세요 |
| --- | --- | --- | --- |
| [Deep Agents](https://github.com/langchain-ai/deepagents) | 에이전트 하네스 | 파일시스템, 컨텍스트 관리, 서브에이전트, 스킬·도구와 승인 흐름을 묶은 실행 구성 | 여러 단계 작업의 실행 골격이 필요할 때. 도구·샌드박스 경계는 별도로 설계 |

추가 문서 확인: **2026-10-14**. [0.7.25 릴리스](https://github.com/langchain-ai/deepagents/releases/tag/deepagents%3D%3D0.7.25)의 경로 권한 수정과 [공식 개요](https://docs.langchain.com/oss/python/deepagents/overview)를 확인하세요. 이 카탈로그에서 실행 검증하지 않았습니다.

**2026-10-19 추가 문서 확인:** [0.7.26](https://github.com/langchain-ai/deepagents/releases/tag/deepagents%3D%3D0.7.26)·[0.7.27](https://github.com/langchain-ai/deepagents/releases/tag/deepagents%3D%3D0.7.27)은 비동기 서브에이전트의 대기·진행 상태 관측을, [0.7.28](https://github.com/langchain-ai/deepagents/releases/tag/deepagents%3D%3D0.7.28)은 ContextHubBackend의 glob 경로 처리를 개선했습니다. 버전을 고정하고 승인 대기·하위 경로 결과를 회귀 검사하세요.

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
| [Continue](https://github.com/continuedev/continue) | 개발 워크플로 | 개발 환경에 맞춘 AI 작업 흐름 구성 | 기존 개발 환경에 AI 작업 흐름 맞추기 |
| [MagenticLite (구 Magentic-UI)](https://github.com/microsoft/magentic-ui) | 실험적 웹·파일 에이전트 | 브라우저·로컬 파일 작업, 사용자 승인·개입, VM 샌드박스 | 사람 참여형 자동화를 연구할 때. 운영 도입 전 제한 사항 검토 |
| [GPT Researcher](https://github.com/assafelovic/gpt-researcher) | 조사·보고서 | 여러 출처를 조사해 보고서 작성 | 여러 웹 출처를 묶어 조사 보고서 초안 작성 |

**보관 상태:** [Roo Code](https://github.com/RooCodeInc/Roo-Code)는 2026-10-12 확인 시 archived 상태입니다. 기존 설정 참고용으로 남기며, 신규 도입은 [Cline](https://github.com/cline/cline)·[Continue](https://github.com/continuedev/continue) 등의 현재 지원 범위를 비교하세요.

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

유용한 자료 추가와 설명 수정을 [Issue](https://github.com/yunsell/ai-agent-skills-korean/issues) 또는 Pull Request로 제안해 주세요. 자세한 기준은 [기여 가이드](../CONTRIBUTING.md#korean)에 있습니다.

분명한 용도, 확인 가능한 원본, 활용 문서를 기준으로 선별하며 순위표로 운영하지 않습니다. 한국어와 영어판은 같은 분류·자료를 유지하고, GitHub Actions로 매월 링크를 점검합니다.

---

[이전 분류의 시각화 지도 보기](https://yunsell.github.io/ai-agent-skills-korean/) · 이전 분류를 사용하는 한국어 보조 페이지입니다.

기본 점검: **2026-10-12 (한국 시간)**. 기존 자료의 상태·활동과 핵심 9개 자료의 설치 안내를 확인한 기록입니다. 이후 추가 확인은 해당 절의 날짜를 보세요. 별도 연결한 Docs MCP 사례 외의 목록은 문서 확인이며, 활용 예시·위험도·대안 선택은 편집 판단입니다. 전체 기능 실행 테스트·벤치마크·보안 인증이 아닙니다. 시각화 지도는 이번 갱신 범위에 포함되지 않습니다.

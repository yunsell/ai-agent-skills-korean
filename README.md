# AI 에이전트 스킬·MCP·프레임워크 가이드

> Claude Code와 Codex 사용자, 에이전트 개발 입문자, 교육자를 위한 한국어 큐레이션
>
> 마지막 확인: **2026-09-07** · 링크와 프로젝트 상태는 시간이 지나면 달라질 수 있습니다.

AI 에이전트를 더 잘 쓰고 만들기 위해 필요한 자료를 목적별로 정리했습니다. 처음이라면 아래의 **3분 선택 가이드**부터 시작하세요. 모든 항목을 설치할 필요는 없습니다.

## 3분 선택 가이드

| 하고 싶은 일 | 먼저 볼 것 | 추천 시작점 |
| --- | --- | --- |
| Codex·Claude Code의 작업 품질 높이기 | Agent Skills | [OpenAI Skills](https://github.com/openai/skills), [Anthropic Skills](https://github.com/anthropics/skills) |
| GitHub·브라우저·DB 연결하기 | MCP·커넥터 | [공식 MCP Registry](https://registry.modelcontextprotocol.io/), [GitHub MCP Server](https://github.com/github/github-mcp-server) |
| 직접 에이전트 앱 만들기 | Agent Framework | [OpenAI Agents SDK](https://github.com/openai/openai-agents-python), [LangGraph](https://github.com/langchain-ai/langgraph) |
| 설치해 바로 코딩 맡기기 | 완성형 Coding Agent | [Codex](https://github.com/openai/codex), [OpenHands](https://github.com/OpenHands/OpenHands), [Aider](https://github.com/Aider-AI/aider) |
| 에이전트 원리 학습하기 | 교육용 프로젝트 | [Agent Zero to Hero](https://github.com/KeWang0622/agent-zero-to-hero) |

### 가장 작은 추천 조합

1. 계획·디버깅·검증 스킬을 각각 하나만 고릅니다.
2. 외부 서비스가 꼭 필요할 때만 MCP나 커넥터를 추가합니다.
3. `SKILL.md`와 포함된 스크립트를 읽고, 샘플 프로젝트에서 먼저 시험합니다.
4. 결과는 에이전트의 설명보다 테스트·로그·diff·스크린샷으로 확인합니다.

## 핵심 개념

| 구분 | 쉬운 설명 | 대표 예시 |
| --- | --- | --- |
| Agent Skill | 에이전트가 특정 일을 반복해서 잘하도록 가르치는 업무 매뉴얼 | 디버깅, 코드 리뷰, 문서 생성 |
| MCP | 에이전트와 외부 도구·데이터를 연결하는 공개 규격 | GitHub MCP, Playwright MCP |
| Plugin | 스킬·커넥터·MCP 설정 등을 설치 가능한 묶음으로 배포하는 단위 | Codex·Claude Code 플러그인 |
| Agent Framework | 도구 호출, 상태, 분기, 반복, 추적을 코드로 구현하는 개발 도구 | OpenAI Agents SDK, LangGraph |
| 완성형 Agent | 설치해 바로 사용하는 코딩·조사 에이전트 | Codex, OpenHands, Aider |

> **Skill은 일하는 방법을 알려주고, MCP는 일할 도구를 연결합니다. Plugin은 이를 설치하기 쉽게 묶습니다.**

Agent Skills는 `SKILL.md`를 중심으로 구성되는 공개 형식입니다. 정확한 필드와 제약은 [Agent Skills 명세](https://agentskills.io/specification)를 기준으로 확인하세요.

## 먼저 살펴볼 공식 자료

| 프로젝트 | 구분 | 무엇을 얻을 수 있나 | 난이도 |
| --- | --- | --- | --- |
| [OpenAI Skills](https://github.com/openai/skills) | OpenAI 공식 | Codex용 공식·큐레이션 스킬과 설치 예시 | 초급 |
| [Anthropic Skills](https://github.com/anthropics/skills) | Anthropic 공식 | 문서·디자인·개발 작업용 스킬 예제와 구조 | 초급 |
| [Agent Skills 명세](https://agentskills.io/specification) | 공개 표준 | `SKILL.md` 구조와 호환성 기준 | 초급 |
| [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills) | Vercel 공식 | React·Next.js 성능, 웹 디자인, 배포 워크플로 | 초급 |
| [Supabase Agent Skills](https://github.com/supabase/agent-skills) | Supabase 공식 | Supabase와 PostgreSQL 개발 모범 사례 | 중급 |
| [NVIDIA Skills](https://github.com/nvidia/skills) | NVIDIA 공식 | CUDA, 로보틱스, 시뮬레이션, RAG 워크플로 | 고급 |
| [Remotion Skills](https://github.com/remotion-dev/skills) | Remotion 공식 | React 기반 영상 제작 지침 | 중급 |
| [GitHub Awesome Copilot](https://github.com/github/awesome-copilot) | GitHub 커뮤니티 큐레이션 | Copilot 지침, Agent, Skill, 설정 예시 | 초급 |

## 목적별 추천 스킬 모음

### 소프트웨어 개발 절차

| 프로젝트 | 강점 | 추천 상황 | 주의할 점 |
| --- | --- | --- | --- |
| [Superpowers](https://github.com/obra/superpowers) | 기획, 계획, TDD, 디버깅, 검증을 하나의 방법론으로 연결 | 개발 전 과정을 일정하게 만들 때 | 전체 워크플로가 강하게 개입하므로 기존 팀 절차와 먼저 비교 |
| [Matt Pocock Skills](https://github.com/mattpocock/skills) | 요구사항 인터뷰, PRD, 이슈 분해, 인수인계 | 모호한 아이디어를 개발 작업으로 바꿀 때 | 설치 후 프로젝트별 초기 설정 필요 |
| [OpenAI Skills](https://github.com/openai/skills) | CI 수정, PR 코멘트 반영, 보안·문서 작업 | Codex에서 검증된 단일 작업을 추가할 때 | 카탈로그는 계속 변경되므로 저장소에서 현재 이름 확인 |

특히 효과가 큰 절차는 다음과 같습니다.

- **요구사항 정리:** 구현 전에 목표, 제외 범위, 완료 조건을 명시합니다.
- **체계적 디버깅:** 재현 → 증거 수집 → 가설 → 최소 수정 → 회귀 테스트 순서를 지킵니다.
- **TDD:** 실패 테스트 → 최소 구현 → 리팩터링을 반복합니다.
- **완료 전 검증:** 실제 명령의 종료 코드와 결과를 확인한 뒤 완료로 판단합니다.
- **코드 리뷰:** 계획과 diff를 비교하고, 리뷰 의견도 무조건 수용하지 말고 재검증합니다.

### 웹 프론트엔드

| 프로젝트 | 추천 용도 |
| --- | --- |
| [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills) | React·Next.js 성능, 컴포넌트 구성, 웹 인터페이스 품질 점검 |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | 브라우저 탐색과 UI 자동화 |
| [OpenAI Playwright Skill](https://github.com/openai/skills/tree/main/skills/.curated/playwright) | Codex에서 브라우저 기반 검증 절차를 재사용 |

UI 작업은 “코드를 작성했다”보다 “브라우저에서 핵심 흐름이 동작하고, 콘솔 오류가 없으며, 주요 화면 크기에서 레이아웃이 유지된다”를 완료 조건으로 삼는 편이 안전합니다.

### 데이터·미디어·도메인 특화

| 프로젝트 | 추천 용도 |
| --- | --- |
| [Supabase Agent Skills](https://github.com/supabase/agent-skills) | Supabase Auth, RLS, 마이그레이션, PostgreSQL 성능 |
| [NVIDIA Skills](https://github.com/nvidia/skills) | CUDA-X, Physical AI, 로보틱스, 시뮬레이션, RAG |
| [Remotion Skills](https://github.com/remotion-dev/skills) | React로 영상 구성과 렌더링 |

## Codex에서 스킬 시작하기

Codex의 공식 안내에 따르면 스킬은 저장소의 `.agents/skills`, 사용자 범위의 `~/.agents/skills`, 관리자·시스템 위치에서 발견됩니다. 스킬은 명시적으로 `$스킬이름`을 언급하거나, 요청이 스킬 설명과 맞을 때 자동으로 선택될 수 있습니다.

Codex 입력창에서 공식 큐레이션 스킬 설치 도우미를 호출하는 예시:

```text
$skill-installer gh-fix-ci
$skill-installer gh-address-comments
$skill-installer playwright
$skill-installer security-best-practices
```

`$skill-installer`는 터미널 명령이 아니라 **Codex 대화 입력창에서 호출하는 스킬**입니다. 설치 후 바로 보이지 않으면 Codex를 다시 시작하세요. 공식 안내는 [Build skills](https://learn.chatgpt.com/docs/build-skills)에서 확인할 수 있습니다.

여러 에이전트를 지원하는 `skills` CLI를 사용하는 저장소도 있습니다. 각 저장소의 최신 설치 안내를 먼저 확인하세요.

```bash
# Vercel 스킬
npx skills@latest add vercel-labs/agent-skills

# Supabase 스킬
npx skills@latest add supabase/agent-skills

# NVIDIA 스킬
npx skills@latest add nvidia/skills

# Matt Pocock 스킬
npx skills@latest add mattpocock/skills
```

> 서로 다른 설치 방식을 중복 사용하면 같은 이름의 스킬이 여러 개 나타날 수 있습니다. 한 저장소에는 한 가지 설치 방식만 선택하세요.

## MCP와 외부 도구 연결

### 어디서 찾을까

- [공식 MCP Registry](https://registry.modelcontextprotocol.io/): 공개된 MCP 서버를 찾는 기본 경로
- [MCP Reference Servers](https://github.com/modelcontextprotocol/servers): 프로토콜 학습용 기준 구현
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers): 폭넓은 커뮤니티 목록

Reference Servers 저장소는 소수의 교육용 기준 구현을 제공합니다. 운영 환경에 바로 쓰기 위한 목록이 아니며, 실제 서버 탐색은 공식 Registry를 우선하세요.

### 추천 연결

| 프로젝트 | 연결 대상 | 추천 시연 |
| --- | --- | --- |
| [GitHub MCP Server](https://github.com/github/github-mcp-server) | 저장소, 이슈, PR, Actions | 이슈 분석 → 수정 → PR 설명 작성 |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | 웹 브라우저 | 탐색 → 폼 입력 → 화면·동작 검증 |
| [Google MCP](https://github.com/google/mcp) | Google Cloud 서비스 | BigQuery·Cloud SQL 등과 에이전트 연결 |
| [Perplexity MCP](https://github.com/perplexityai/modelcontextprotocol) | 검색·조사 | 최신 자료 검색과 출처 기반 요약 |

### 연결 전 체크리스트

- 공식 배포자와 저장소를 확인합니다.
- 읽기 전용 또는 최소 권한으로 시작합니다.
- 토큰과 API 키를 저장소에 커밋하지 않습니다.
- 삭제, 결제, 배포, 외부 메시지 전송은 별도 승인을 둡니다.
- MCP 서버가 실행할 수 있는 명령과 접근 가능한 디렉터리를 확인합니다.

## Agent Framework

| 프로젝트 | 특징 | 추천 용도 |
| --- | --- | --- |
| [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) | 도구, 핸드오프, 가드레일, 세션, 추적 | 가벼운 Python 멀티 에이전트 앱 |
| [LangGraph](https://github.com/langchain-ai/langgraph) | 상태, 분기, 지속 실행, 복구 가능한 워크플로 | 복잡하고 장기 실행되는 업무 흐름 |
| [Microsoft Agent Framework](https://github.com/microsoft/agent-framework) | Python·.NET, 멀티 에이전트 오케스트레이션 | Microsoft·Azure 중심 시스템 |
| [Google ADK](https://github.com/google/adk-python) | 코드 중심 개발, 평가, 배포 | Google 생태계 기반 앱 |
| [PydanticAI](https://github.com/pydantic/pydantic-ai) | 타입 안전성과 구조화된 출력 | Python 백엔드 서비스 |
| [smolagents](https://github.com/huggingface/smolagents) | 작은 코드로 구성하는 에이전트 | 교육과 빠른 실험 |
| [CrewAI](https://github.com/crewAIInc/crewAI) | 역할 기반 협업과 워크플로 | 조사자·분석가·작성자 분업 |

선택 기준은 “에이전트 수”보다 **상태 보존, 실패 복구, 관찰 가능성, 배포 환경**입니다. 간단한 도구 호출 한두 개라면 프레임워크 없이 시작하는 편이 더 쉽습니다.

## 설치해 사용하는 코딩·업무 Agent

| 프로젝트 | 형태 | 잘 맞는 상황 |
| --- | --- | --- |
| [OpenAI Codex](https://github.com/openai/codex) | 터미널·IDE·데스크톱 | 저장소 안에서 코드 수정과 검증 |
| [OpenHands](https://github.com/OpenHands/OpenHands) | 오픈소스 개발 플랫폼 | 코드 작업 자동화와 확장 |
| [Aider](https://github.com/Aider-AI/aider) | 터미널 페어 프로그래밍 | Git 중심의 대화형 수정 |
| [Cline](https://github.com/cline/cline) | IDE 확장·CLI·SDK | 승인 기반 코드·명령 실행 |
| [Roo Code](https://github.com/RooCodeInc/Roo-Code) | IDE 에이전트 | 역할별 모드와 작업 분할 |
| [Continue](https://github.com/continuedev/continue) | 오픈소스 코딩 에이전트 | IDE·CI 워크플로 확장 |
| [Magentic-UI](https://github.com/microsoft/magentic-ui) | 실험적 브라우저·파일 에이전트 | 사람 참여형 웹·파일 작업 연구 |

## 조사·브라우저 에이전트

| 프로젝트 | 특징 | 추천 용도 |
| --- | --- | --- |
| [GPT Researcher](https://github.com/assafelovic/gpt-researcher) | 여러 출처를 조사해 보고서 생성 | 산업·기술 동향 조사 |
| [browser-use](https://github.com/browser-use/browser-use) | 브라우저를 에이전트가 조작하도록 지원 | 웹 작업 자동화 실험 |
| [Agent Zero to Hero](https://github.com/KeWang0622/agent-zero-to-hero) | 프레임워크 없이 에이전트 하네스를 구현하는 교육 과정 | LLM 호출·도구·루프 원리 학습 |

웹 자동화는 대상 사이트의 이용약관, 개인정보, 로봇 정책, 계정 보안 요구사항을 반드시 확인하세요.

## 프로젝트 전용 스킬 만들기

범용 스킬보다 팀에 즉시 효과가 큰 것은 프로젝트의 실제 명령과 완료 조건을 담은 작은 스킬입니다.

| 스킬 예시 | 포함할 내용 |
| --- | --- |
| `project-onboarding` | 프로젝트 구조, 주요 모듈, 실행 방법, 용어 |
| `test-and-verify` | 필수 테스트 명령, 검증 순서, 실패 처리 |
| `definition-of-done` | 완료 조건, 테스트, 스크린샷, 리뷰 기준 |
| `api-change-checklist` | 문서, 타입, 테스트, 하위 호환성 검사 |
| `database-migration` | 생성, 롤백, 데이터 검증 절차 |
| `release-checklist` | 버전, changelog, 빌드, 배포, 모니터링 |
| `incident-runbook` | 장애 재현, 로그 수집, 원인 분석, 복구 |

### 규칙을 어디에 둘까

- 모든 작업에 항상 적용할 규칙: `AGENTS.md` 또는 `CLAUDE.md`
- 특정 상황에서만 실행할 절차: `SKILL.md`
- 외부 시스템과 연결하는 기능: MCP·커넥터·CLI
- 반드시 동일하게 실행해야 하는 반복 처리: 스킬의 `scripts/`

## 보안 체크리스트

- [ ] 배포자, 라이선스, 최근 변경 이력을 확인했다.
- [ ] `SKILL.md`, `scripts/`, 설치 스크립트를 직접 읽었다.
- [ ] API 키·토큰·개인정보가 문서와 Git 기록에 없다.
- [ ] 외부 도구는 최소 권한으로 연결했다.
- [ ] 결제·삭제·배포·외부 메시지에는 사람의 승인이 있다.
- [ ] 실제 고객 데이터 대신 샘플 또는 비식별 데이터를 쓴다.
- [ ] 프롬프트 인젝션과 악성 저장소 콘텐츠를 신뢰하지 않는다.
- [ ] 테스트·로그·diff·스크린샷으로 결과를 검증한다.

## 유지관리 원칙

이 목록은 인기 순위가 아니라 **학습·실습 가치, 공식성, 설명 가능성**을 기준으로 선별합니다.

- 날짜·별 수처럼 빨리 낡는 수치는 넣지 않습니다.
- “공식”은 해당 회사·프로젝트 조직이 직접 관리하는 경우에만 표시합니다.
- 저장소가 보관(archived)되거나 후속 프로젝트가 생기면 설명을 갱신합니다.
- 새 항목은 기존 항목과 다른 학습 가치가 있을 때 추가합니다.
- 링크와 설명은 분기마다 점검하는 것을 권장합니다.

오류, 오래된 링크, 추가 제안은 Issue 또는 Pull Request로 알려주세요. 기여 방법은 [CONTRIBUTING.md](CONTRIBUTING.md)를 참고하세요.

## 참고한 핵심 출처

- [OpenAI 공식 Build skills 문서](https://learn.chatgpt.com/docs/build-skills)
- [Agent Skills 명세](https://agentskills.io/specification)
- [공식 MCP Registry](https://registry.modelcontextprotocol.io/)
- [MCP Reference Servers 안내](https://github.com/modelcontextprotocol/servers)
- 각 프로젝트의 공식 GitHub README

---

이 저장소는 각 프로젝트를 직접 배포하지 않습니다. 이름과 상표는 각 소유자에게 있으며, 설치·사용 전 원본 저장소의 최신 문서와 라이선스를 확인하세요.

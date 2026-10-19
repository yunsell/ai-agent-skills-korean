# 목적별 빠른 시작

[Agent Stack Brief](../README.md) · **한국어** · [English](quick-starts.en.md) · [카탈로그](../catalog/README.md)

작업 하나를 골라 시작하세요. 아래 설치 안내의 문서 확인일은 **2026-10-12**이며, 소요 시간은 환경과 로그인에 따라 달라집니다. 실행 전에 원본을 확인하세요. npx 예시에는 Node.js/npm이 필요합니다.

[01 · 프런트엔드 품질 점검](#frontend) · [02 · 안전한 데이터베이스 변경](#database) · [03 · 계획부터 테스트까지](#process) · [04 · 운영 오류 조사](#operations) · [05 · 에이전트 개발과 평가](#agent)

<a id="frontend"></a>

## 01 · 프런트엔드 품질 점검

구현 기준 + 최신 문서 + 실제 브라우저 검증

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

<a id="database"></a>

## 02 · 안전한 데이터베이스 변경

스키마 분석 + 마이그레이션 + 버전별 문서

**구성:** 사용하는 스택에 따라 [Supabase Agent Skills](https://github.com/supabase/agent-skills) 또는 [Prisma Skills](https://github.com/prisma/skills) · [Context7](https://github.com/upstash/context7)

**시작하기**

아래 **둘 중 하나만** 실행하세요.

Supabase:

```bash
npx skills add supabase/agent-skills
```

Prisma:

```bash
npx skills add prisma/skills
```

문서 조회를 추가하려면:

```bash
npx ctx7 setup
```

Prisma는 프로젝트에 설치된 버전을 먼저 확인하세요. 현재 원본은 새 ORM 프로젝트에 Prisma 8을 기본으로 안내하지만, 기존 6/7 프로젝트의 연결 문제를 해결하려고 업그레이드할 필요는 없다고 명시합니다. [버전별 스킬 안내](https://github.com/prisma/skills#available-skills)를 따라 선택하세요.

**첫 요청**

> 현재 스키마와 애플리케이션 사용 코드를 먼저 분석해 주세요. 변경 계획과 롤백 방법을 작성하고, 데이터 손실 가능성이 있는 명령은 실행 전에 알려 주세요. 개발용 또는 격리된 DB에서 마이그레이션을 검증한 뒤 결과를 정리해 주세요.

**완료 기준:** 영향 범위, 마이그레이션과 롤백 절차, 검증 결과, 운영 적용 전 확인 항목.

<a id="process"></a>

## 03 · 계획부터 테스트까지

요구사항 정리 + 작업 분해 + TDD + 완료 검증

**구성:** [Superpowers](https://github.com/obra/superpowers)

**시작하기:** Superpowers는 에이전트마다 설치 방식이 다릅니다. 원본 저장소의 [Installation](https://github.com/obra/superpowers#installation)에서 현재 환경을 선택해 설치하세요. 여러 에이전트를 사용하면 각각 설치해야 합니다.

**첫 요청**

> 이 기능을 바로 구현하지 말고 요구사항과 제약을 먼저 확인해 주세요. 작은 작업으로 분해하고 실패하는 테스트부터 작성한 뒤 구현해 주세요. 마지막에는 테스트 결과와 변경 diff를 검토해 완료 조건을 확인해 주세요.

**완료 기준:** 합의된 요구사항, 작업 계획, 실패→통과 테스트 기록, 최종 diff와 검증 결과.

<a id="operations"></a>

## 04 · 운영 오류 조사

영향도 파악 + 원인 분석 + 수정 검증

**구성:** [Sentry for AI](https://github.com/getsentry/sentry-for-ai)

**시작하기:** 이 저장소는 스킬의 **소스 저장소**입니다. 직접 설치하는 대신 [Codex](https://github.com/getsentry/plugin-codex), [Claude Code](https://github.com/getsentry/plugin-claude), [Cursor](https://github.com/getsentry/plugin-cursor), [Grok](https://github.com/getsentry/plugin-grok) 중 현재 환경의 배포 저장소에서 설치 안내를 확인하세요. 운영 데이터를 조회하려면 Sentry 인증이 필요하며, 일부 작업에는 GitHub CLI가 필요합니다.

**첫 요청**

> 최근 24시간의 주요 오류를 사용자 영향도 순으로 정리해 주세요. 가장 영향이 큰 오류의 이벤트·트레이스·관련 코드를 근거로 원인을 분석하고 수정안을 테스트해 주세요. 이슈 종료나 배포는 승인 없이 실행하지 마세요.

**완료 기준:** 오류 근거, 영향 범위, 원인 가설, 코드 변경과 테스트 결과, 배포 전 확인 사항.

<a id="agent"></a>

## 05 · 에이전트 개발과 평가

생성 + 평가 데이터셋 + 실패 분석 + 배포 준비

**구성:** [Google Agents CLI](https://github.com/google/agents-cli)

**시작하기:** Python 3.11+, uv, Node.js가 필요합니다.

```bash
uvx google-agents-cli setup
```

CLI 설치 없이 **스킬만** 추가하려면 위 명령 대신:

```bash
npx skills add google/agents-cli
```

이 도구는 코딩 에이전트 자체가 아니라, 기존 에이전트가 ADK 앱을 개발·평가·배포하도록 돕는 CLI입니다.

**첫 요청**

> 로컬에서 실행할 작은 ADK 에이전트를 만들어 주세요. 정상·경계·실패 사례가 포함된 평가 데이터셋을 만들고 평가를 실행한 뒤, 실패 유형과 개선 전후 차이를 정리해 주세요. 아직 클라우드에는 배포하지 마세요.

**완료 기준:** 실행 가능한 에이전트, 평가 사례와 지표, 실패 유형 분석, 배포 여부를 판단할 근거.

[카탈로그로 돌아가기](../catalog/README.md)

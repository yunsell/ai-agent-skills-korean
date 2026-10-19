# 첫 스택 가이드

[Agent Stack Brief](../README.md) · **한국어** · [English](first-stack.en.md) · [카탈로그](../catalog/README.md)

뉴스를 읽고 모든 도구를 한 번에 설치할 필요는 없습니다. **작업 하나 → 최소 구성 → 작은 검증** 순서로 시작하세요. 이 가이드는 실행 결과가 아닌 편집 지침입니다.

설정부터 시작하려면 [환경별 첫 단계](client-first-steps.md), 이름·용도로 찾으려면 [카탈로그 검색](https://yunsell.github.io/ai-agent-skills-korean/catalog/index.html)을 사용하세요.

## 1. 역할부터 나누세요

| 역할 | 답하는 질문 | 먼저 할 일 |
| --- | --- | --- |
| Skill | 어떤 절차와 기준으로 작업할까? | 반복 작업 하나에 필요한 지침만 선택 |
| MCP·CLI | 어떤 도구·데이터에 접근할까? | 필요한 읽기 도구부터 연결 |
| Harness | 실행·파일·문맥·승인을 어떻게 다룰까? | 현재 환경으로 충분한지 확인한 뒤 확장 |

이 구분은 이 저장소의 탐색 기준입니다. 플러그인은 스킬과 MCP 등을 묶어 설치하는 형태이며, 하네스와 같은 뜻은 아닙니다. [공식 Skills·Plugins 설명](https://learn.chatgpt.com/docs/skills-and-plugins) · [하네스 구현 예시](https://github.com/langchain-ai/deepagents)

## 2. 원하는 결과 하나를 고르세요

- 화면 품질 점검: [프런트엔드 빠른 시작](quick-starts.md#frontend) · [검색 검증 실습](web-validation.md)
- DB 변경 준비: [DB 빠른 시작](quick-starts.md#database). 운영 DB 대신 격리 환경 사용
- 이슈 원인 조사: [창간호의 읽기 전용 실험](../newsletter/2026-10-14.md#experiment)
- 디자인 검토·구현: [디자인 작업별 가이드](design-workflows.md)
- 다른 작업: [네 가지 작업으로 찾기](../catalog/README.md)

각 조합의 설치 원본·인증·접근 범위는 [실무 비교 카드](../catalog/README.md#field-cards)에 있습니다. 호스트 지원 여부를 확인하고 기존 지침·훅과 겹치지 않게 추가하세요.

## 3. 실행 전에 세 가지를 적으세요

1. **입력:** 읽어도 되는 저장소·파일·서비스는 무엇인가요?
2. **승인 경계:** 파일 변경, 외부 메시지, 비용·배포 중 무엇에 승인이 필요한가요?
3. **완료 증거:** 어떤 테스트·로그·결과물로 끝났다고 판단하나요?

프롬프트에 금지 문구를 적는 것과 실제 권한을 제한하는 것은 다릅니다. 사용할 수 있는 도구·인증 범위를 직접 확인하세요.

## 4. 작은 시험 후 넓히세요

첫 요청은 읽기·계획까지만 수행하고, 변경 작업은 검토 후 진행하세요. 오류가 나면 무조건 재시도하지 말고 현재 상태와 마지막 요청 결과를 확인하세요. 실제로 실행했다면 환경·버전·수행한 검사와 한계를 함께 남기세요.

**체크리스트:** 필요한 지침만 선택했는가 · 최소 권한인가 · 격리된 시험인가 · 완료 증거가 있는가.

[실제 MCP 문서 검수 사례](cases/docs-mcp-review.md) · [실패 단계별 복구 안내](mcp-recovery.md)

[뉴스레터로 돌아가기](../newsletter/README.md) · [자료 제안·정정](../CONTRIBUTING.md#korean)

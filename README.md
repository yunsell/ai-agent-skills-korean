<a id="agent-stack-brief"></a>
<h1>
  <picture>
    <source media="(max-width: 600px) and (prefers-color-scheme: dark)" srcset="assets/brief/masthead-mobile-dark.svg">
    <source media="(max-width: 600px)" srcset="assets/brief/masthead-mobile-light.svg">
    <source media="(prefers-color-scheme: dark)" srcset="assets/brief/masthead-dark.svg">
    <img src="assets/brief/masthead-light.svg" alt="Agent Stack Brief" width="1200">
  </picture>
</h1>

**한국어** · [English](README.en.md)

AI 에이전트 도구의 변화와, 내 작업에 적용하는 방법을 읽습니다.

[최신호](#latest) · [도구 찾기](catalog/README.md) · [처음 시작하기](guides/first-stack.md) · [지난호](newsletter/README.md)

---

<a id="latest"></a><a id="recent"></a> **BRIEF 003** · 2026-11-11 · 원본 문서 확인

## 에이전트가 읽는 범위와 멈추는 이유

스킬 검사 결과 비교 · Fetch MCP 호스트 제한 · Deep Agents 모델 거부 처리

- **스킬을 검사한다면:** [Skill Scanner 2.3.2](newsletter/2026-11-11.md#skills)에서 정적 탐지와 LLM 판정의 차이를 확인하세요.
- **공개 문서를 자동으로 읽는다면:** [Fetch MCP 2026.11.4](newsletter/2026-11-11.md#mcp)에서 필요한 호스트만 허용하는 방법을 살펴보세요.
- **서브에이전트를 운영한다면:** [Deep Agents 0.7.33–0.7.35](newsletter/2026-11-11.md#harness)에서 모델 거부가 완료로 기록되지 않는지 확인하세요.

**[이번 호 전체 읽기 →](newsletter/2026-11-11.md)** · [English edition](newsletter/2026-11-11.en.md)

### 오늘 해볼 것 하나

[Fetch MCP 허용·거부 실습 →](newsletter/2026-11-11.md#experiment) 테스트용 연결이 있다면 공개 URL 두 개로 허용 목록이 적용되는지 확인하세요.

[57개 자료 검색해 보기](https://yunsell.github.io/ai-agent-skills-korean/catalog/index.html) · [실제 카탈로그 디자인 사례](guides/cases/catalog-design.md)

화면 검증을 해보고 싶다면 [검색 실습과 UI 실행 근거](guides/web-validation.md)를 보세요.

## 내 작업에 맞는 시작점

| 필요한 것 | 바로가기 |
| --- | --- |
| 쓸 만한 도구 고르기 | [네 가지 작업으로 찾는 카탈로그](catalog/README.md) |
| 내 환경에서 처음 연결하기 | [Codex·Claude Code·Cursor 첫 단계](guides/client-first-steps.md) · [역할 설명](guides/first-stack.md) |
| 설치·인증·접근 범위 비교 | [실무 비교](catalog/README.md#field-cards) · [빠른 시작](guides/quick-starts.md) |
| 디자인 검토·Figma·컴포넌트 구현 | [디자인 작업 가이드](guides/design-workflows.md) |

실행이 막혔다면 [등록·시작·호출·검색 결과별 복구 안내](guides/mcp-recovery.md)를 보세요.

<details>
<summary>분류별 전체 목록</summary>

| 분류 | 바로가기 |
| --- | --- |
| <a id="starter-packs"></a>빠른 시작 | [목적별 조합](guides/quick-starts.md) |
| <a id="field-cards"></a>실무 비교 | [설치·인증·권한](catalog/README.md#field-cards) |
| <a id="skills"></a>Skills | [재사용할 절차와 전문 지식](catalog/README.md#skills) |
| <a id="mcp"></a>MCP | [외부 도구·데이터 연결](catalog/README.md#mcp) |
| <a id="tools"></a>CLI | [탐색·실행 도구](catalog/README.md#tools) |
| <a id="plugins"></a>Plugins | [설치 가능한 작업 묶음](catalog/README.md#plugins) |
| <a id="validation"></a>검증·평가 | [보안 검토와 회귀 비교](catalog/README.md#validation) |
| <a id="harnesses"></a>Harnesses | [에이전트 실행 골격](catalog/README.md#harnesses) |
| <a id="frameworks"></a>Frameworks | [에이전트 앱 개발](catalog/README.md#frameworks) |
| <a id="agents"></a>Agents | [기존 작업 도구](catalog/README.md#agents) |
| <a id="learning"></a>학습 | [실습 과정과 규격](catalog/README.md#learning) |

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

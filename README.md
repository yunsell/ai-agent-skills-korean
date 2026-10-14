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

Skills · MCP · Harness — 무엇이 바뀌었고, 내 작업에는 무엇이 달라질까요?

실무자를 위한 에이전트 도구 브리핑과 리소스 카탈로그. 새 소식을 읽고, 필요한 도구를 찾고, 작은 실험으로 확인합니다.

[최신호](#latest) · [지난호](newsletter/README.md) · [전체 카탈로그](catalog/README.md) · [기여하기](CONTRIBUTING.md#korean)

---

<a id="latest"></a><a id="recent"></a> **FIELD NOTES / 001** · 2026-10-14 · 창간호

## 도구를 더 붙이기 전에, 실행 경계부터

새 기능보다 먼저 챙길 세 가지: **재시도, 경로 권한, 스킬 도입 전 검사**. 최근 릴리스를 오늘 다시 확인해 창간호로 묶었습니다.

**[창간호 전체 읽기 →](newsletter/2026-10-14.md)** · [English edition](newsletter/2026-10-14.en.md)

<a href="newsletter/2026-10-14.md">
<picture>
  <source media="(max-width: 600px) and (prefers-color-scheme: dark)" srcset="assets/brief/issue-001-mobile-dark.svg">
  <source media="(max-width: 600px)" srcset="assets/brief/issue-001-mobile-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="assets/brief/issue-001-dark.svg">
  <img src="assets/brief/issue-001-light.svg" alt="재시도·경로·신뢰를 다루는 001호 표지" width="1200">
</picture>
</a>

**01 / MCP·CLI — 응답이 없다고 다시 실행해도 될까요?**<br>
agent-browser 0.39.1의 중복 실행 방지 수정과 결과 확인 원칙. [소식 읽기 →](newsletter/2026-10-14.md#browser)

**02 / HARNESS — 승인한 경로와 실제 경로가 다를 때**<br>
Deep Agents 0.7.25의 심볼릭 링크 경로 검사 수정. [소식 읽기 →](newsletter/2026-10-14.md#harness)

**03 / SKILLS — 검사 도구도 업데이트 대상입니다**<br>
Skill Scanner 2.2.1·2.2.2의 수정사항과 확인할 범위. [소식 읽기 →](newsletter/2026-10-14.md#skills)

> 편집 노트: 인기 순위보다 실제 작업에 생기는 변화에 집중합니다. 이번 호는 **원본 문서 확인**이며 직접 실행 테스트는 아닙니다.

## 읽은 다음, 내 작업으로

| 지금 필요한 것 | 바로가기 |
| --- | --- |
| 도구를 찾고 싶다 | [용도별 전체 카탈로그](catalog/README.md) |
| 처음 조합해 보고 싶다 | [첫 스택 가이드](guides/first-stack.md) · [기존 빠른 시작 5개](catalog/README.md#starter-packs) |
| 설치·인증·권한을 비교하고 싶다 | [실무 비교 카드](catalog/README.md#field-cards) |

카탈로그의 기존 자료·설치 예시는 유지했습니다. 뉴스의 확인일과 카탈로그의 확인일은 별개입니다.

<details>
<summary>분류별 카탈로그 · 이전 README 바로가기</summary>

기존 README의 분류 링크를 찾으셨나요? 아래에서 같은 항목으로 이동할 수 있습니다.

| 분류 | 카탈로그 |
| --- | --- |
| <a id="starter-packs"></a>빠른 시작 | [목적별 조합](catalog/README.md#starter-packs) |
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

## 이 브리프의 약속

- **변화 → 의미 → 다음 행동** 순서로 설명합니다. 발표일과 확인일을 구분합니다.
- 사실·편집 의견, 문서 확인·직접 실행·미확인을 구분합니다. 원본 출처를 연결합니다.
- 발행호는 날짜별 기록으로 남기고, 카탈로그는 현재 쓰임을 찾는 자료집으로 관리합니다.
- 한국어·영문판의 소식·출처·자료 목록을 함께 유지합니다.

GitHub에서 읽는 뉴스레터입니다. 현재 이메일 발송이나 자동 발행은 제공하지 않습니다.

<a id="contributing"></a>

소식 제보·정정은 [Issue](https://github.com/yunsell/ai-agent-skills-korean/issues) 또는 PR로 보내 주세요. [편집·기여 기준](CONTRIBUTING.md#korean)을 확인할 수 있습니다.

[지난 점검 기록](docs/updates/2026-10-12.md#korean) · [이전 분류의 시각화 지도](https://yunsell.github.io/ai-agent-skills-korean/)

# Contributing to Agent Stack Brief

[한국어](#korean) · [English](#english)

<a id="korean"></a>

## 한국어

뉴스 제보, 도구 추천, 오류 정정을 환영합니다. 이 저장소는 **뉴스레터 + 리소스 카탈로그**입니다.

### 어디를 수정하나요?

| 내용 | 위치 |
| --- | --- |
| 최신호 소개 | `README.md` · `README.en.md` |
| 발행호와 아카이브 | `newsletter/` · `newsletter/issues.json` |
| 상시 도구 목록·비교 카드 | `catalog/README.md` · `catalog/README.en.md` |
| 빠른 시작·실습·실행 사례 | `guides/quick-starts*.md` · `guides/web-validation*.md` · `guides/cases/` |
| 개편 이전 점검 근거 | `docs/updates/` — 기존 기록 보존 |

### 뉴스레터 편집 기준

1. 원본 릴리스·저장소·공식 문서를 확인하고 **발표일·확인일·시간대**를 남깁니다.
2. **사실 → 의미(편집 의견) → 영향 대상 → 다음 행동**을 구분합니다. 인기 신호는 확인 날짜와 출처를 쓰고, 순위·설치 수를 고정하지 않습니다.
3. 확인 수준은 **문서 확인 / 직접 실행 / 미확인** 중 실제 범위를 기록합니다. 실행했다면 환경·버전·방법·결과·한계를 포함합니다. 보안 공지를 요약한 것과 취약점 재현을 구분합니다.
4. 한국어·영문 발행호의 소식·원본 URL·확인 수준을 맞춥니다. [발행 템플릿](newsletter/TEMPLATE.md)을 참고하세요.
5. 발행 시 양쪽 홈·아카이브·`issues.json`을 함께 갱신합니다. 발행 기록의 최신호가 README와 일치해야 합니다.
6. 이전 호는 날짜별 기록입니다. 오류 정정은 해당 호에 날짜·이유를 남기고 양쪽 언어에 반영합니다. 새로운 소식은 새 호에 씁니다.
7. 정기 자동 발행·이메일 발송이 설정되어 있다고 가정하지 않습니다. 기존 자료를 새로 출시된 자료처럼 소개하지 않습니다.
8. 최신호의 독자별 적용 판단·시작 링크·확인할 결과를 먼저 제공합니다. 실습에는 고정 입력, 기대 결과, 실제 결과 양식을 포함합니다. 발행한 글의 편집 개선도 날짜와 이유를 남깁니다.
9. `issues.json`의 `summary.ko`·`summary.en`에 각각 2–3줄의 구체적인 소식 요약을 씁니다. 도구·버전·변화·판단을 넣고 본문 링크로만 대체하지 마세요. `node scripts/build-feeds.mjs --patch`의 변경을 적용하고 `--check`로 한·영 RSS를 확인하세요. 피드는 `docs/`에서 Pages로 배포됩니다.
10. 실행 사례는 기대·실제 결과와 재현 조건을 함께 씁니다. UI 실행과 MCP 실행을 구분하고, 점수만으로 개선 효과를 주장하지 마세요. 공유하는 영상·trace의 민감 정보를 검토하고, 원본 전체 대신 발췌했다면 범위와 한계를 명시합니다.

### 카탈로그 추가 기준

1. 원본 링크, 대표 분류, 구체적 용도, 기존 자료와 다른 점을 제시합니다.
2. 한 행에 하나의 자료를 대표 역할에 배치하고, 제공 기능과 활용 예시를 따로 씁니다. 교육 과정·모음집·하네스·프레임워크를 구분합니다.
3. 두 언어를 함께 수정합니다. 지원 환경·공식 여부·설치 안내는 원본에서 확인합니다.
4. 보관·이전·지원 종료 상태를 발견하면 후속 자료나 현재 상태를 설명합니다. 최근 커밋만으로 품질을 단정하지 않습니다.
5. 비교 카드에는 확인일·확인 수준을 표시합니다. 위험도는 품질 점수가 아니라 가능한 접근 범위입니다.
6. 빠른 시작의 명령은 원본과 일치해야 합니다. 첫 요청에는 승인 경계와 완료 증거를 포함합니다. 추천 링크는 접힌 메뉴가 아닌 `guides/quick-starts*.md`의 해당 절로 직접 연결합니다.
7. 신규 자료를 추가했다는 이유로 기존 자료의 확인일을 일괄 갱신하지 않습니다.

PR 전에 `node scripts/check-content.mjs`, `node scripts/build-brand.mjs --check`, `node scripts/build-feeds.mjs --check`를 실행하세요. GitHub Actions는 구조·원본 링크·Pages 파일 존재를 점검합니다. 배포 후 실제 Pages URL도 확인하세요. 기존 시각화 지도는 이전 분류의 보조 자료이며 현재 목록의 기준은 카탈로그 두 언어판입니다.

<a id="english"></a>

## English

News tips, resource suggestions, and corrections are welcome. This repository combines a **newsletter and a resource catalog**.

### Where does a change belong?

| Content | Location |
| --- | --- |
| Latest issue preview | `README.md` · `README.en.md` |
| Issues and archive | `newsletter/` · `newsletter/issues.json` |
| Evergreen resources and comparison cards | `catalog/README.md` · `catalog/README.en.md` |
| Quick starts, exercises, and execution cases | `guides/quick-starts*.md` · `guides/web-validation*.md` · `guides/cases/` |
| Pre-redesign review evidence | `docs/updates/` — preserve existing records |

### Editorial guidelines

1. Check primary releases, repositories, or official documentation. Record **announcement date, review date, and timezone**.
2. Separate **fact → significance (commentary) → affected users → next action**. Date and source popularity signals without fixing rankings or installation counts.
3. Record the actual level: **Docs reviewed / Executed / Unverified**. Executed checks need environment, version, method, result, and limitations. Summarizing a security notice is not reproducing a vulnerability.
4. Align stories, primary URLs, and review levels in both editions. See the [issue template](newsletter/TEMPLATE.md).
5. Publish issue files together with both home previews, both archives, and `issues.json`. The manifest's latest issue must match the READMEs.
6. Preserve dated issues. Record corrections with date and reason in both languages; write new developments in new issues.
7. Do not assume automatic publication or email delivery is configured. Newly listed is not newly released.
8. Lead with audience-specific decisions, starting links, and outcomes to check. Exercises need fixed inputs, expected results, and an actual-outcome template. Date and explain editorial improvements to published issues too.
9. Write 2–3 concrete story summaries in each of `summary.ko` and `summary.en` in `issues.json`. Include tools, versions, changes, and decisions rather than only linking the article. Apply the output of `node scripts/build-feeds.mjs --patch` and validate both RSS feeds with `--check`. Feeds deploy from `docs/` through Pages.
10. Execution cases need expected and actual outcomes plus reproducible conditions. Distinguish UI from MCP execution; scores alone do not establish improvement. Review recordings and traces for sensitive content. State the scope and limitations when publishing excerpts rather than full originals.

### Catalog guidelines

1. Include the source, primary category, concrete use case, and distinction from existing entries.
2. Use one resource per row and one primary category. Describe capabilities and example use separately. Distinguish courses, collections, harnesses, and frameworks.
3. Update both languages. Verify support, official status, and installation guidance upstream.
4. Document archived, moved, or discontinued projects and possible successors. Recent commits alone are not a quality assessment.
5. Record review date and level in comparison cards. Risk describes access scope, not project quality.
6. Keep quick-start commands aligned with sources. Include approval boundaries and completion evidence in example requests. Link recommendations directly to the relevant section in `guides/quick-starts*.md`, not a closed disclosure.
7. Adding a resource does not advance unrelated review dates.

Before submitting, run `node scripts/check-content.mjs`, `node scripts/build-brand.mjs --check`, and `node scripts/build-feeds.mjs --check`. GitHub Actions checks structure, upstream links, and Pages file existence. Check live Pages URLs after deployment too. The legacy visual map uses earlier categories; the two catalogs are the current resource reference.

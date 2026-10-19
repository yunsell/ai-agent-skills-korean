# Brief template · 발행 템플릿

이 파일은 작성 참고용이며 발행호가 아닙니다. 한국어·영문 본문을 별도 파일로 작성하고 `issues.json`에 함께 등록하세요. / This is a drafting reference, not a published issue. Write separate Korean and English files, then register both in `issues.json`.

## 필수 항목 / Required fields

- 호수·제목·발행일·확인일·시간대 / Issue ID, title, publication/review dates, timezone
- 주제 태그와 확인 수준 / Topics and review level
- 핵심 소식 1–3개: 발표일 → 사실·원본 → 편집 의견 → 영향 대상·적용 판단 → 시작 링크 → 확인할 결과 / 1–3 stories: announcement date → fact/source → commentary → audience/decision → starting link → outcome to check
- 선택: 살펴볼 레포 1개, 작은 실험 1개 / Optional: one repository and one small experiment
- 정정 이력, 아카이브·카탈로그·언어 전환 / Corrections, archive/catalog links, language switch
- 구체적인 도구·작업 부제, 첫 화면의 독자별 소식 선택, 매호 실습의 기대 결과와 기록 양식 / Concrete tool/task subtitle, audience-based story selection, expected outcomes and a result template for the issue's exercise

## 확인 수준 / Review levels

| 표시 / Label | 의미 / Meaning |
| --- | --- |
| 문서 확인 / Docs reviewed | 원본만 확인; 실행 결과 아님 / Primary source reviewed, not executed |
| 직접 실행 / Executed | 환경·버전·방법·결과·한계 기록 필수 / Environment, version, method, result, limitations required |
| 미확인 / Unverified | 확인되지 않은 범위 명시; 사실로 단정하지 않음 / State the unknowns; do not present them as established facts |

## 발행 전 / Before publishing

1. 확인일을 실제 조사 범위에 맞추고, 인기 신호와 편집자 선정을 구분합니다. / Match dates to actual review scope; separate popularity signals from editorial selection.
2. 두 언어의 소식·원본 URL·확인 수준·승인 경계를 맞춥니다. / Align stories, source URLs, review levels, and approval boundaries.
3. 발행호 본문, 양쪽 아카이브, `issues.json`, 양쪽 홈의 최신호를 함께 갱신합니다. / Update issue files, both archives, the manifest, and both home-page previews.
4. `node scripts/check-content.mjs`와 링크 점검을 통과시킵니다. / Pass content validation and link checks.
5. 도구를 카탈로그에 추가한다면 두 언어를 함께 수정하되, 실제 재확인하지 않은 기존 자료의 날짜는 바꾸지 않습니다. / Update both catalogs for new tools without advancing unrelated review dates.
6. 표지를 사용한다면 발행 기록에 세 개의 짧은 `cover.labels`를 기록하고 [디자인 가이드](../assets/brief/README.md)에 따라 변형을 생성합니다. 본문 제목·날짜·출처는 이미지 밖에 유지합니다. / For a cover, add three short `cover.labels` to the manifest and follow the [visual guide](../assets/brief/README.md). Keep titles, dates, and sources outside images.
7. `node scripts/build-feeds.mjs --patch`로 한·영 RSS 변경을 생성해 적용하고 `node scripts/build-feeds.mjs --check`로 확인합니다. `docs/feed*.xml` 변경은 Pages 배포를 실행합니다. / Generate and apply both RSS feeds with `node scripts/build-feeds.mjs --patch`; validate with `node scripts/build-feeds.mjs --check`. Changes to `docs/feed*.xml` trigger Pages deployment.

# 실행 사례 · MCP로 설정 가이드 검수하기

[Agent Stack Brief](../../README.md) · **한국어** · [English](docs-mcp-review.en.md) · [실패 복구 안내](../mcp-recovery.md)

**결과:** OpenAI Docs MCP로 검색 2회·본문 조회 2회를 실제 수행했습니다. 설정 형식, 두 종류의 timeout, 문서 서버의 권한 범위를 확인해 이 저장소의 [복구 안내](../mcp-recovery.md)에 반영했습니다. 브라우저 UI 기록과 다른 **문서 조회 MCP 업무 사례**입니다.

## 작업과 실행 범위

- **작업:** 검색 실습의 MCP 설정 안내를 검수하고, 연결 실패 시 독자가 확인할 순서를 작성하기.
- **환경·날짜:** Codex 데스크톱 세션 · 연결된 OpenAI Docs MCP · 2026-10-19 KST. 응답에 서버 빌드 버전은 노출되지 않았습니다.
- **입력:** 공개 공식 문서와 이 저장소의 가이드. 계정 정보·API 키·비공개 코드는 전송하지 않았습니다.
- **경계:** 문서 검색·조회만 MCP로 실행했습니다. 새 서버 설치, 사용자 설정 변경, API 호출, Chrome DevTools MCP 실행은 하지 않았습니다.

## 실행한 순서와 실제 결과

1. **설정 검색** · `search_openai_docs`
   - 기대: 관련 공식 페이지 찾기.
   - 실제: 5개 결과 중 MCP 설정 페이지 선택. API 도구·변경 이력도 섞여 있었습니다.
2. **설정 본문 조회** · `fetch_openai_doc`
   - 기대: 설정 형식과 실패 단계 구분.
   - 실제: TOML 형식, 시작 timeout과 도구 timeout의 차이를 확인했습니다.
3. **Docs MCP 설정 검색** · `search_openai_docs`
   - 기대: 서버 안내 찾기.
   - 실제: 반환 3개에 정확한 안내가 없어, 앞서 조회한 공식 본문의 Docs MCP 링크를 사용했습니다.
4. **Docs MCP 본문 조회** · `fetch_openai_doc`
   - 기대: 서버 범위와 재현 경로 확인.
   - 실제: 읽기 전용 검색·본문 조회와 연결 안내를 확인했습니다.

[요청·응답 요약 JSON](../../docs/evidence/docs-mcp-review/calls.json)에는 실제 요청값·시각·반환 URL을 담았습니다. 서버 원본 로그가 아닌 **편집한 실행 색인**입니다.

## 어떤 결과물로 이어졌나요?

1. **형식을 혼동하지 않도록:** Codex는 `config.toml`의 `[mcp_servers.<name>]` 형식입니다. 기존 JSON 예시를 그대로 붙이지 말라는 경계를 유지했습니다.
2. **실패 단계를 나누도록:** `startup_timeout_sec`는 서버 시작, `tool_timeout_sec`는 도구 호출 대기입니다. 공식 기본값은 각각 10초·60초지만, 값을 무조건 늘리는 해결책 대신 [시작 실패](../mcp-recovery.md#browser-start)와 [호출 실패](../mcp-recovery.md#call-failure)를 나눴습니다.
3. **조회와 작업 실행을 구분하도록:** Docs MCP는 문서 조회용이며 OpenAI API를 대신 호출하지 않습니다. 서버 등록 성공도 업무 성공과 구분했습니다.

[공식 MCP 설정 문서](https://learn.chatgpt.com/docs/extend/mcp) · [공식 Docs MCP 안내](https://developers.openai.com/learn/docs-mcp)

**저장소의 변경 전후:** 이전 실습의 연결 실패 안내는 외부 문제 해결 링크 중심이었습니다. 이후에는 네 증상별 확인·기대 상태·다음 행동과 도움 요청 양식이 생겼습니다. 측정한 성과는 이 검수 결과물이며, 업무 시간 절감률은 아닙니다.

## 같은 업무를 재현하려면

이미 연결되어 있다면 재등록하지 마세요. 새로 연결하는 독자를 위한 공식 명령은 아래와 같습니다. **이 명령 자체를 이번 사례에서 실행한 것은 아닙니다.** 다른 클라이언트는 공식 안내에서 해당 환경을 선택하세요.

```bash
codex mcp add openaiDeveloperDocs --url https://developers.openai.com/mcp
codex mcp list
```

연결된 에이전트에 다음 요청을 전달하세요.

```text
OpenAI Docs MCP를 사용해 Codex의 MCP 설정 형식과
서버 시작 timeout, 도구 호출 timeout의 차이를 확인해 주세요.
검색한 뒤 관련 공식 본문을 조회하고, 확인한 사실·출처·미확인을 나눠 주세요.
이 저장소 가이드와 대조해 수정할 부분을 제안하되 사용자 설정은 변경하지 마세요.
검색 결과가 엉뚱하면 공식 본문에서 관련 링크를 찾고, 실행하지 않은 명령은 명시하세요.
```

**완료 기준:** 출처가 있는 검수 결과와 수정 제안, 실제 호출 기록. 실패했다면 [복구 안내](../mcp-recovery.md#search-no-match)를 사용하세요.

## 한계와 배운 점

검색은 관련 없는 결과도 돌려줬습니다. 첫 결과를 그대로 답으로 쓰지 않고 공식 본문을 조회한 과정이 중요했습니다. 결과는 문서 검수에 한정되며, 설치 성공률·생산성 향상·시간 절감이나 운영 장애 해결 효과를 측정하지 않았습니다. 이후 원본 문서와 검색 순위가 바뀌면 결과도 달라질 수 있습니다.

[브라우저 UI 실행 사례](002-browser-evidence.md) · [검색 실습](../web-validation.md) · [카탈로그](../../catalog/README.md)

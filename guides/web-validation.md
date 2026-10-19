# 검색 화면을 검증하고 결과 남기기

[Agent Stack Brief](../README.md) · **한국어** · [English](web-validation.en.md) · [002호](../newsletter/2026-10-19.md#mcp)

**얻는 것:** 검색 동작의 통과·실패 기록과 화면 근거. 검색 결과가 정해진 예제로 시작합니다.

**먼저 결과 보기:** [직접 실행 사례 — 네 단계 통과·화면 영상·이벤트 발췌](cases/002-browser-evidence.md). Chrome DevTools UI로 기록했으며, MCP를 실행한 사례는 아닙니다.

## 1. 예제를 먼저 열어 보세요

[검색 검증 예제 열기 →](https://yunsell.github.io/ai-agent-skills-korean/labs/search.html?lang=ko)

로그인이 필요 없고 검색은 페이지 안에서 처리됩니다. 처음에는 3개, `agent`를 검색하면 2개, `zzzz`를 검색하면 0개, 초기화하면 3개가 나와야 합니다. [예제 소스](../docs/labs/search.html)

## 2. 실행 경로를 고르세요

처음 MCP를 연결한다면 [Codex·Claude Code·Cursor별 첫 단계](client-first-steps.md)에서 공개 문서 조회 한 번부터 성공해 보세요. 아래 설정은 브라우저 실습용입니다.

| 경로 | 준비와 첫 행동 |
| --- | --- |
| 설치 없이 UI로 확인 | Chrome에서 예제를 열고 네 단계를 직접 실행합니다. Performance 기록은 [실행 사례의 수집 방법](cases/002-browser-evidence.md)을 따르세요. MCP는 필요 없습니다. |
| 에이전트에 MCP 연결 | 아래에서 환경에 맞게 설정한 뒤 3번 요청을 사용합니다. 연결 성공과 실제 실행 결과는 따로 확인하세요. |

이미 쓰는 브라우저 도구가 있다면 위 동작부터 확인하세요. 002호의 진단 기능을 살펴보려면 **Chrome DevTools MCP 1.11.0**을 사용합니다. Node.js LTS·npm·Chrome과 MCP를 지원하는 에이전트가 필요합니다. [공식 시작 안내](https://github.com/ChromeDevTools/chrome-devtools-mcp#getting-started) · [환경별 설정](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/client-configurations.md)

### Codex · CLI로 등록하기

이미 같은 이름으로 등록했다면 먼저 설정을 확인하세요. 아래는 새 서버를 등록할 때의 명령입니다.

```bash
codex mcp add chrome-devtools -- npx -y chrome-devtools-mcp@1.11.0 --isolated --no-usage-statistics --no-performance-crux
codex mcp list
```

Codex의 MCP 설정은 `~/.codex/config.toml`을 사용하며 같은 호스트의 데스크톱·CLI·IDE에서 공유합니다. `mcp list`는 등록 확인이지 실습 통과를 뜻하지 않습니다. [공식 Codex MCP 안내](https://learn.chatgpt.com/docs/extend/mcp)

### Claude Code · Cursor · VS Code 등

[환경별 공식 설정](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/client-configurations.md)에서 사용하는 클라이언트 항목을 고르세요. 설정 파일 위치와 서버 키가 다를 수 있으므로 아래 JSON을 Codex 설정 파일 등에 그대로 붙이지 마세요.

<details>
<summary>mcpServers 형식을 받는 클라이언트용 JSON 예시</summary>

기존 설정 전체를 덮어쓰지 말고 해당 서버 항목을 추가하세요.

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["-y", "chrome-devtools-mcp@1.11.0", "--isolated", "--no-usage-statistics", "--no-performance-crux"]
    }
  }
}
```

</details>

실습 버전을 고정하고 별도 브라우저 세션을 사용합니다. 두 수집 옵션은 사용 통계와 CrUX 조회를 끕니다. [설정 원본](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/configuration.md)

## 3. 이 요청을 복사하세요

```text
https://yunsell.github.io/ai-agent-skills-korean/labs/search.html?lang=ko 를 열고 검색 기능을 검증해 주세요.
1. 처음 결과가 3개인지 확인하세요.
2. agent를 검색해 2개인지, zzzz를 검색해 0개와 안내 문구가 나오는지 확인하세요.
3. 초기화를 눌러 입력이 비고 결과가 3개로 돌아오는지 확인하세요.
각 단계의 기대·실제 결과와 통과/실패를 표로 남기고 화면 근거의 위치를 적어 주세요.
사용한 도구와 버전도 적어 주세요. 실행하지 못한 단계는 미확인으로 표시하세요.
```

도구 연결이 실패하면 [증상별 복구 안내](mcp-recovery.md)에서 등록·시작·호출 단계를 구분하세요. [공식 문제 해결 안내](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/troubleshooting.md)도 함께 대조합니다. 파일 수정·계정 연결·권한 변경이 필요하다면 그 이유부터 확인하세요.

## 4. 결과를 이 형식으로 남기세요

아래는 **기대 결과 양식**입니다. 실제 결과 칸은 실행 후 채웁니다.

| 단계 | 기대 결과 | 실제 결과 | 판정 |
| --- | --- | --- | --- |
| 첫 화면 | 3개 결과 | 실행 후 기록 | 미확인 |
| agent 검색 | 2개 결과 | 실행 후 기록 | 미확인 |
| zzzz 검색 | 0개·안내 문구 | 실행 후 기록 | 미확인 |
| 초기화 | 빈 입력·3개 결과 | 실행 후 기록 | 미확인 |

**근거:** 사용 도구·버전 / 실행 날짜 / 화면 파일 또는 첨부 / 실패·미확인 항목.

네 단계 모두 기대 결과와 일치하고 근거를 다시 열 수 있으면 이 실습을 완료한 것입니다. 이 결과가 전체 웹사이트 품질을 보장하지는 않습니다.

<details>
<summary>더 살펴보기 · 녹화와 성능 진단</summary>

동작 검증 후 같은 흐름을 녹화하고, 캐시 조건을 기록해 성능 trace를 수집해 보세요. 관련 도구가 실제로 제공되는지는 [도구 목록](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/tool-reference.md)에서 확인하세요. 성능 수치의 합격 기준은 프로젝트별로 정해야 합니다. 녹화·진단 결과는 위의 동작 검사와 별도로 기록하세요.

</details>

[도구 비교](../catalog/README.md#field-cards) · [이번 호로 돌아가기](../newsletter/2026-10-19.md)

브라우저 외의 읽기 업무부터 시작하려면 [Docs MCP로 가이드 검수한 실제 사례](cases/docs-mcp-review.md)를 보세요.

**확인 범위 · 2026-10-19:** macOS의 Chrome 155.0.8059.82에서 예제의 한·영 검색 네 단계와 영문 Enter 검색을 직접 확인했습니다. 별도 사례에는 한국어 화면의 Performance UI 기록을 공개했습니다. MCP·Codex 설정은 원본 문서 기준이며, 이 실습을 Chrome DevTools MCP로 실행한 결과는 아직 없습니다.

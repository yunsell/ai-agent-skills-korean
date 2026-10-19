# 환경별 첫 단계 · 문서 조회 한 번 성공하기

[Agent Stack Brief](../README.md) · **한국어** · [English](client-first-steps.en.md) · [도구 찾기](../catalog/README.md)

**목표:** 공개 문서를 조회하고 출처가 있는 답 하나를 받습니다. 설치할 도구를 고르는 단계와 연결 성공을 구분하세요. 여기서는 읽기 전용 OpenAI Docs MCP 하나만 예로 사용합니다.

[Codex](#codex) · [Claude Code](#claude-code) · [Cursor](#cursor)

이 안내는 해당 클라이언트가 이미 설치된 독자를 대상으로 합니다. 명령 자체를 찾을 수 없다면 서버를 반복 등록하지 말고 클라이언트 설치·실행 환경부터 확인하세요.

**이미 연결돼 있다면 등록을 건너뛰세요.** 아래 명령·JSON은 설정을 변경하는 안내이며 이번 작업에서 독자 기기에 실행하지 않았습니다. 기존 항목을 덮어쓰거나 다른 클라이언트 형식으로 붙이지 마세요. 조직 관리 환경은 관리자 정책을 먼저 확인합니다.

<a id="codex"></a>

## 1. Codex

1. 사용하는 호스트의 MCP 설정·등록 목록을 확인합니다. 기본 파일은 `~/.codex/config.toml`이며 JSON이 아닌 TOML입니다.
2. 새 연결이 필요할 때만 아래 명령으로 등록합니다. 등록 명령은 사용자 설정을 변경합니다.

```bash
codex mcp add openaiDeveloperDocs --url https://developers.openai.com/mcp
codex mcp list
```

3. 사용하는 클라이언트에서 연결·도구 목록을 확인하고 아래 공통 요청을 실행하세요. 목록에 이름이 있는 것만으로 완료하지 않습니다.

**막혔다면:** [서버 없음](mcp-recovery.md#server-missing) → [시작 실패](mcp-recovery.md#browser-start). [공식 설정 안내](https://developers.openai.com/learn/docs-mcp)

<a id="claude-code"></a>

## 2. Claude Code

1. 프로젝트 폴더에서 등록 목록을 확인하고, 중복 연결이 없다면 추가합니다. `--scope local`은 이 프로젝트에서 나만 쓰는 설정이며 팀 공유용 `.mcp.json`과 구분합니다.

```bash
claude mcp add --transport http --scope local openaiDeveloperDocs https://developers.openai.com/mcp
claude mcp list
```

2. Claude Code 안에서 `/mcp`로 연결 상태를 확인하고 아래 공통 요청을 실행하세요.
3. 팀과 공유하려면 별도의 project 범위 안내와 승인을 검토하세요. 개인 설정·비밀 정보를 그대로 커밋하지 않습니다.

**막혔다면:** [등록·시작 확인](mcp-recovery.md#server-missing) 또는 [호출 실패](mcp-recovery.md#call-failure). [공식 Claude Code MCP 문서](https://code.claude.com/docs/en/mcp)

<a id="cursor"></a>

## 3. Cursor

1. 프로젝트의 `.cursor/mcp.json`과 개인용 `~/.cursor/mcp.json` 중 실제 사용할 범위를 고르세요. 여기서는 **프로젝트 설정 예시**입니다.
2. 기존 설정이 있다면 서버 항목만 합칩니다. 파일 전체를 바꾸지 마세요.

```json
{
  "mcpServers": {
    "openaiDeveloperDocs": {
      "url": "https://developers.openai.com/mcp"
    }
  }
}
```

3. Cursor의 MCP 설정에서 활성 상태·도구 목록을 확인하고 에이전트에 아래 공통 요청을 전달하세요. 필요하면 공식 안내에 따라 재시작합니다. 메뉴명은 버전에 따라 다를 수 있습니다.

**막혔다면:** [서버 없음](mcp-recovery.md#server-missing) 또는 [검색 결과 문제](mcp-recovery.md#search-no-match). [공식 Cursor MCP 문서](https://cursor.com/docs/mcp)

## 연결 후 이 요청 하나를 실행하세요

```text
OpenAI Docs MCP로 Codex의 MCP 설정 문서를 검색하고 관련 본문을 조회해 주세요.
서버 등록과 실제 호출 성공의 차이를 짧게 설명하고 출처 URL을 남겨 주세요.
조회하지 못한 내용과 실행하지 않은 명령은 구분하세요. 파일·계정 설정은 변경하지 마세요.
```

**첫 성공:** 실제 조회 결과 + 질문에 대한 짧은 답 + 원본 URL. 설정 명령을 읽거나 서버가 목록에 나오는 것만으로는 성공이 아닙니다.

**다음 작업:** [실제 MCP 검수 사례](cases/docs-mcp-review.md) · [디자인 업무 사례](cases/catalog-design.md) · [디자인 도구 선택](design-workflows.md)

**확인 범위 · 2026-10-19:** OpenAI Docs 스킬로 공식 안내를 대조했습니다. 기존 Docs MCP 조회 사례와 달리, 위 세 환경의 새 설치·등록을 모두 실행 검증한 것은 아닙니다. 다른 서비스에는 별도 인증·권한·비용이 필요할 수 있습니다.

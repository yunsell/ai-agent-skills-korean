# 실행 사례 002 · 검색은 통과했는데, 성능 지표도 믿어도 될까요?

[Agent Stack Brief](../../README.md) · **한국어** · [English](002-browser-evidence.en.md) · [직접 따라 하기](../web-validation.md)

**결과:** 검색 네 단계는 모두 통과했습니다. 성능 기록에서는 **CLS 0이어도 화면은 움직였고, LCP 후보는 예제 소스에 없는 이미지**였습니다. 완료 보고에는 점수와 함께 측정 대상을 남겨야 합니다.

**직접 실행 · 2026-10-19:** 브라우저 조작 도구로 예제를 실행하고 Chrome DevTools의 **Performance UI**에서 기록했습니다. Chrome DevTools MCP 실행 결과는 아닙니다.

## 무엇을 확인했나요?

[배포된 검색 예제](https://yunsell.github.io/ai-agent-skills-korean/labs/search.html?lang=ko)에서 첫 화면 → `agent` 검색 → `zzzz` 검색 → 초기화를 실행했습니다. 이 사례는 뉴스레터의 고정 예제를 사용한 실습이며, 운영 서비스의 성능 실험은 아닙니다.

| 조건 | 기록 |
| --- | --- |
| 환경 | macOS · Chrome 155.0.8059.82 · 일반 프로필, 확장프로그램 활성 |
| 화면 | 1021 × 874 CSS px · 데스크톱 모드 |
| 수집 | Performance Record · Screenshots 활성 · 새로고침 후 검색 세 단계 |
| 캐시·제한 | Disable cache 활성 · CPU·네트워크 throttling 없음 |
| 실행 시각 | 2026-10-19 10:49 KST · 단일 실행 |
| 예제 버전 | [d70e87d](https://github.com/yunsell/ai-agent-skills-korean/blob/d70e87d4e7590273a8cd2f412b1114cef18dc11b/docs/labs/search.html) |

## 실제 결과

| 단계 | 기대 | 실제 | 판정 |
| --- | --- | --- | --- |
| 첫 화면 | 3개 | 3개 | 통과 |
| agent 검색 | 2개 | 2개 | 통과 |
| zzzz 검색 | 0개·안내 문구 | 0개·안내 문구 | 통과 |
| 초기화 | 빈 입력·3개 | 빈 입력·3개 | 통과 |

[실행 화면 영상 보기 →](https://yunsell.github.io/ai-agent-skills-korean/evidence/002/search-filmstrip.mp4) · [지표 이벤트 발췌 JSON](../../docs/evidence/002/metric-events.json)

영상은 Performance trace에 들어 있는 **306개 화면 프레임**을 원래 시간 간격으로 이어 만든 약 21.4초의 filmstrip 미리보기입니다. MCP의 screencast 출력과 구분합니다. 원본 기록 전체에는 대기 시간도 포함되어 있으므로 영상 길이를 작업 속도로 해석하지 마세요.

<details>
<summary>agent 검색 뒤 실제 화면 보기</summary>

![agent 검색 결과가 2개인 실제 브라우저 화면](../../docs/evidence/002/search-results.png)

</details>

## 숫자보다 더 유용했던 두 가지 발견

**1. CLS 0은 ‘아무것도 움직이지 않았다’는 뜻이 아니었습니다.**

DevTools는 CLS를 **0**으로 표시했습니다. 하지만 trace에는 검색·초기화 직후의 `LayoutShift`가 **3건** 있었고 모두 `had_recent_input: true`였습니다. 결과 목록이 짧아지거나 길어지면서 아래 안내 영역이 움직였습니다. 사용자 입력 직후의 예상 가능한 이동은 CLS 계산에서 제외될 수 있습니다. [CLS 원리](https://web.dev/articles/cls)

**적용할 점:** 레이아웃 안정성을 검토할 때는 점수와 실제 화면 이동을 함께 확인하세요.

**2. LCP 0.33초의 대상이 실제 본문인지 확인할 필요가 있었습니다.**

DevTools의 표시 값은 **LCP 0.33초 · INP 40ms · CLS 0**이었습니다. 발췌한 마지막 LCP 후보는 navigation 시작 후 **331.724ms**의 `IMG`였지만, 예제 소스와 수집 뒤 DOM에는 `img`가 없었습니다. 수집 환경의 일시적 삽입 요소 등이 영향을 줬을 가능성이 있으나, 정확한 원인은 확정하지 못했습니다.

세 번의 클릭 상호작용에서 가장 긴 EventTiming duration은 **39.733ms**였습니다. 이 기록은 이 실행의 관측값이며, 실제 사용자 전체의 INP나 서비스 성능을 대표하지 않습니다.

**적용할 점:** ‘빠르다’고 결론내리기 전에 LCP 요소를 확인하고, 다른 프로필·조건에서 재측정하세요. 이 사례로 성능 개선 효과를 주장하지 않습니다.

## 같은 방식으로 결과를 남기려면

1. [실습 가이드](../web-validation.md)의 고정 입력과 기대 결과로 동작부터 확인합니다.
2. Chrome DevTools → Performance에서 캐시·CPU·네트워크 조건을 적고, Screenshots를 켜고 Record를 누릅니다. 새로고침과 검색을 실행한 뒤 Stop을 누릅니다. [기록 방법](https://developer.chrome.com/docs/devtools/performance/reference)
3. 새 navigation의 지표와 실제 요소를 확인하고, trace를 저장합니다. [저장 안내](https://developer.chrome.com/docs/devtools/performance/save-trace)

저장한 trace에서 같은 종류의 이벤트를 추출하려면 Node.js로 아래 명령을 실행합니다. 스크립트는 브라우저에 연결하지 않고 파일을 읽습니다.

```bash
node scripts/extract-trace-evidence.mjs /path/to/Trace.json.gz
```

발췌 JSON은 관련 navigation·LCP·상호작용·layout shift 이벤트만 담으며, DevTools에 다시 불러올 수 있는 전체 trace가 아닙니다. 확장프로그램의 코드 등이 섞인 원본 전체는 공개하지 않았습니다. 원본 압축 파일의 SHA-256은 발췌 JSON에 기록했습니다.

추출은 익명화가 아닙니다. 다른 페이지를 섞지 않은 기록을 사용하고, 공개 전 JSON과 모든 화면 프레임을 검토하세요. 영상도 만들려면 `--video /path/to/output.mp4`를 추가하며, 이 선택 기능에는 FFmpeg가 필요합니다.

**이 사례가 확인한 것:** 검색 네 단계와 기록 해석상의 두 가지 주의점. **확인하지 않은 것:** MCP의 녹화·Lighthouse 기능 실행, 다른 기기·네트워크 성능, 원인별 개선 전후 효과.

[002호로 돌아가기](../../newsletter/2026-10-19.md#mcp) · [실습 가이드](../web-validation.md)

const projects = [
  { category: "agent", name: "OpenAI Codex", description: "터미널·IDE·데스크톱에서 저장소의 코드 수정과 검증을 함께 수행하는 코딩 에이전트.", url: "https://github.com/openai/codex" },
  { category: "agent", name: "OpenHands", description: "개발 작업 자동화를 확장하고 운영할 수 있는 오픈소스 개발 에이전트 플랫폼.", url: "https://github.com/OpenHands/OpenHands" },
  { category: "agent", name: "Aider", description: "Git 흐름을 중심으로 터미널에서 대화하며 코드를 수정하는 AI 페어 프로그래머.", url: "https://github.com/Aider-AI/aider" },
  { category: "agent", name: "Cline", description: "코드와 명령 실행을 승인 기반으로 제어할 수 있는 IDE·CLI·SDK형 코딩 에이전트.", url: "https://github.com/cline/cline" },
  { category: "agent", name: "Roo Code", description: "역할별 모드와 작업 분할을 지원하는 IDE 중심 오픈소스 코딩 에이전트.", url: "https://github.com/RooCodeInc/Roo-Code" },
  { category: "agent", name: "Continue", description: "IDE와 CI에서 팀의 개발 워크플로에 맞춰 구성하는 오픈소스 AI 코드 플랫폼.", url: "https://github.com/continuedev/continue" },
  { category: "agent", name: "Magentic-UI", description: "브라우저와 로컬 파일을 다루는 사람 참여형 에이전트 연구를 위한 인터페이스.", url: "https://github.com/microsoft/magentic-ui" },
  { category: "agent", name: "GPT Researcher", description: "여러 출처를 탐색하고 근거가 있는 조사 보고서를 만드는 자율 조사 에이전트.", url: "https://github.com/assafelovic/gpt-researcher" },
  { category: "agent", name: "browser-use", description: "AI 에이전트가 실제 웹 브라우저를 이해하고 조작하도록 돕는 자동화 도구.", url: "https://github.com/browser-use/browser-use" },
  { category: "agent", name: "Agent Zero to Hero", description: "프레임워크 없이 LLM 호출, 도구, 루프를 직접 구현하며 원리를 배우는 교육 과정.", url: "https://github.com/KeWang0622/agent-zero-to-hero" },
  { category: "skill", name: "OpenAI Skills", description: "Codex 작업을 확장하는 공식 스킬 카탈로그. 단일 업무 절차를 골라 구조를 익히기 좋습니다.", url: "https://github.com/openai/skills" },
  { category: "skill", name: "Anthropic Skills", description: "문서·디자인·개발 스킬의 구조와 패턴을 살펴볼 수 있는 공식 예시 모음.", url: "https://github.com/anthropics/skills" },
  { category: "skill", name: "Vercel Agent Skills", description: "React와 Next.js 성능, 웹 인터페이스 품질을 점검하는 전문 스킬 키트.", url: "https://github.com/vercel-labs/agent-skills" },
  { category: "skill", name: "Matt Pocock Skills", description: "요구사항 인터뷰부터 PRD, 이슈 분해와 인수인계까지 제품 개발 흐름을 돕는 스킬.", url: "https://github.com/mattpocock/skills" },
  { category: "skill", name: "Supabase Agent Skills", description: "Auth, RLS, 마이그레이션과 PostgreSQL 성능 작업을 위한 Supabase 전문 스킬.", url: "https://github.com/supabase/agent-skills" },
  { category: "skill", name: "Remotion Skills", description: "React 기반 영상의 구성, 애니메이션, 렌더링 작업을 안내하는 실무 스킬.", url: "https://github.com/remotion-dev/skills" },
  { category: "skill", name: "NVIDIA Skills", description: "CUDA-X, Physical AI, 로보틱스, 시뮬레이션, RAG를 다루는 고급 기술 스킬.", url: "https://github.com/nvidia/skills" },
  { category: "skill", name: "Awesome Copilot", description: "GitHub Copilot용 지침, 에이전트, 스킬과 설정 예시를 한곳에서 찾는 모음집.", url: "https://github.com/github/awesome-copilot" },
  { category: "mcp", name: "Official MCP Registry", description: "운영에 사용할 MCP 서버를 공식 메타데이터와 함께 탐색하는 첫 번째 출발점.", url: "https://registry.modelcontextprotocol.io/" },
  { category: "mcp", name: "MCP Reference Servers", description: "MCP 프로토콜의 구조와 구현 방식을 배우기 위한 공식 교육용 기준 서버.", url: "https://github.com/modelcontextprotocol/servers" },
  { category: "mcp", name: "Awesome MCP Servers", description: "공식 Registry 밖의 더 넓은 MCP 서버 생태계를 분야별로 둘러보는 커뮤니티 목록.", url: "https://github.com/punkpeye/awesome-mcp-servers" },
  { category: "mcp", name: "GitHub MCP Server", description: "저장소, 이슈, Pull Request, Actions를 AI 도구와 연결하는 GitHub 공식 서버.", url: "https://github.com/github/github-mcp-server" },
  { category: "mcp", name: "Playwright MCP", description: "접근성 트리를 바탕으로 실제 웹 브라우저를 탐색하고 조작하는 Microsoft MCP 서버.", url: "https://github.com/microsoft/playwright-mcp" },
  { category: "mcp", name: "Google MCP", description: "BigQuery를 비롯한 Google Cloud 서비스와 에이전트를 연결하는 공식 MCP 도구.", url: "https://github.com/google/mcp" },
  { category: "mcp", name: "Perplexity MCP", description: "최신 웹 검색과 출처 기반 조사를 에이전트 워크플로에 연결하는 MCP 서버.", url: "https://github.com/perplexityai/modelcontextprotocol" },
  { category: "framework", name: "OpenAI Agents SDK", description: "도구, 핸드오프, 가드레일, 세션과 추적을 가볍고 직접적으로 구성하는 Python SDK.", url: "https://github.com/openai/openai-agents-python" },
  { category: "framework", name: "LangGraph", description: "상태 그래프, 분기, 재시도, 중단 후 재개가 중요한 장기 실행 에이전트 프레임워크.", url: "https://github.com/langchain-ai/langgraph" },
  { category: "framework", name: "Microsoft Agent Framework", description: "Python과 .NET으로 기업 환경의 멀티 에이전트 시스템을 구성하는 프레임워크.", url: "https://github.com/microsoft/agent-framework" },
  { category: "framework", name: "Google ADK", description: "코드 중심으로 에이전트를 개발하고 평가·배포하는 Google의 Agent Development Kit.", url: "https://github.com/google/adk-python" },
  { category: "framework", name: "PydanticAI", description: "Python 백엔드의 타입 안전성과 구조화된 출력을 중심에 둔 에이전트 프레임워크.", url: "https://github.com/pydantic/pydantic-ai" },
  { category: "framework", name: "smolagents", description: "작고 읽기 쉬운 코드로 에이전트의 원리를 배우고 빠르게 실험하는 프레임워크.", url: "https://github.com/huggingface/smolagents" },
  { category: "framework", name: "CrewAI", description: "조사자·분석가·작성자처럼 역할을 나눈 에이전트 협업 흐름을 구성하는 프레임워크.", url: "https://github.com/crewAIInc/crewAI" },
  { category: "plugin", name: "Superpowers", description: "기획, 계획, TDD, 디버깅, 검증을 하나의 개발 방법론으로 묶어 설치하는 에이전트 플러그인.", url: "https://github.com/obra/superpowers" }
];

const labels = { agent: "AGENT", skill: "SKILL", mcp: "MCP", framework: "FRAMEWORK", plugin: "PLUGIN" };
const order = ["agent", "skill", "mcp", "framework", "plugin"];
const map = document.querySelector("#map");
const filters = [...document.querySelectorAll(".filter")];
const empty = document.querySelector("#detail-empty");
const content = document.querySelector("#detail-content");
const detailIndex = document.querySelector("#detail-index");
const detailCategory = document.querySelector("#detail-category");
const detailName = document.querySelector("#detail-name");
const detailDescription = document.querySelector("#detail-description");
const detailLink = document.querySelector("#detail-link");

function renderMap() {
  let index = 0;
  order.forEach((category) => {
    const territory = document.createElement("div");
    territory.className = "territory";
    territory.dataset.category = category;
    territory.setAttribute("aria-label", `${labels[category]} 영역`);

    projects.filter((item) => item.category === category).forEach((project) => {
      index += 1;
      const itemIndex = index;
      const tile = document.createElement("button");
      tile.className = "tile";
      tile.type = "button";
      tile.dataset.category = category;
      tile.style.setProperty("--order", index);
      tile.setAttribute("aria-label", `${project.name}, ${labels[category]} — 상세 정보 보기`);
      tile.innerHTML = `<span class="tile-index">${labels[category]} · ${String(index).padStart(2, "0")}</span><span class="tile-name"></span>`;
      tile.querySelector(".tile-name").textContent = project.name;
      tile.addEventListener("click", () => selectProject(project, tile, itemIndex));
      territory.append(tile);
    });
    map.append(territory);
  });
}

function selectProject(project, tile, index) {
  document.querySelectorAll(".tile").forEach((item) => item.classList.toggle("is-selected", item === tile));
  detailIndex.textContent = String(index).padStart(2, "0");
  detailCategory.textContent = labels[project.category];
  detailName.textContent = project.name;
  detailDescription.textContent = project.description;
  detailLink.href = project.url;
  detailLink.setAttribute("aria-label", `${project.name} 원본 프로젝트를 새 탭에서 열기`);
  empty.hidden = true;
  content.hidden = false;

  if (window.matchMedia("(max-width: 980px)").matches) {
    document.querySelector(".inspector").scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function applyFilter(filter) {
  filters.forEach((button) => {
    const active = button.dataset.filter === filter;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  document.querySelectorAll(".tile").forEach((tile) => {
    tile.classList.toggle("is-dimmed", filter !== "all" && tile.dataset.category !== filter);
  });

  const target = filter === "all" ? null : document.querySelector(`.territory[data-category="${filter}"] .tile`);
  target?.focus({ preventScroll: true });
}

filters.forEach((button) => button.addEventListener("click", () => applyFilter(button.dataset.filter)));
renderMap();

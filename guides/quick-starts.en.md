# Task-based quick starts

[Agent Stack Brief](../README.en.md) · [한국어](quick-starts.md) · **English** · [Catalog](../catalog/README.en.md)

Choose one task. These instructions were reviewed on **2026-10-12**; setup times depend on your environment and sign-in. Check upstream before running commands. The examples use Node.js/npm where npx is shown.

[01 · Frontend quality check](#frontend) · [02 · Safer database change](#database) · [03 · Plan through test](#process) · [04 · Production incident investigation](#operations) · [05 · Agent development and evaluation](#agent)

<a id="frontend"></a>

## 01 · Frontend quality check

implementation guidance + current docs + real-browser verification

**Stack:** [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills) · [Context7](https://github.com/upstash/context7) · [Playwright CLI](https://github.com/microsoft/playwright-cli)

**Get started**

```bash
npx skills add vercel-labs/agent-skills
npx ctx7 setup
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

**First request**

> Review this React/Next.js interface against performance and UI guidance, then make the necessary changes. Use Context7 for documentation matching the versions in this project, verify the critical user flow with Playwright CLI, and preserve evidence for both successful and failing checks.

**Done when:** change summary, checks run, critical-flow result, and screenshots or a reproducible failure record.

<a id="database"></a>

## 02 · Safer database change

schema analysis + migration + version-specific docs

**Stack:** choose [Supabase Agent Skills](https://github.com/supabase/agent-skills) or [Prisma Skills](https://github.com/prisma/skills) for your stack · [Context7](https://github.com/upstash/context7)

**Get started**

Run **only one** of the following.

Supabase:

```bash
npx skills add supabase/agent-skills
```

Prisma:

```bash
npx skills add prisma/skills
```

To add documentation lookup:

```bash
npx ctx7 setup
```

Check the installed Prisma version first. The source currently defaults new ORM projects to Prisma 8, but explicitly says that fixing connections in existing 6/7 projects does not require an upgrade. Select guidance from the [version-specific skills](https://github.com/prisma/skills#available-skills).

**First request**

> Inspect the current schema and its application usage first. Write a change plan and rollback procedure, warn me before any command that could lose data, and validate the migration against a development or isolated database before summarizing the result.

**Done when:** impact assessment, migration and rollback steps, validation result, and a production-readiness checklist.

<a id="process"></a>

## 03 · Plan through test

requirements + task breakdown + TDD + completion checks

**Stack:** [Superpowers](https://github.com/obra/superpowers)

**Get started:** Superpowers uses a different install path for each agent. Choose your environment in the source repository's [Installation](https://github.com/obra/superpowers#installation) section. Install it separately for each agent you use.

**First request**

> Do not implement this feature immediately. Clarify the requirements and constraints, break the work into small tasks, write a failing test first, and then implement it. Finish by reviewing the test results and diff against the completion criteria.

**Done when:** agreed requirements, task plan, red-to-green test record, final diff, and verification result.

<a id="operations"></a>

## 04 · Production incident investigation

impact + root cause + verified fix

**Stack:** [Sentry for AI](https://github.com/getsentry/sentry-for-ai)

**Get started:** This is the skill **source repository**, not a directly installable plugin. Follow the distribution instructions for [Codex](https://github.com/getsentry/plugin-codex), [Claude Code](https://github.com/getsentry/plugin-claude), [Cursor](https://github.com/getsentry/plugin-cursor), or [Grok](https://github.com/getsentry/plugin-grok). Production queries require Sentry authentication, and some workflows also require the GitHub CLI.

**First request**

> Rank the major errors from the last 24 hours by user impact. Analyze the highest-impact error using its events, traces, and relevant code, then test a proposed fix. Do not resolve the issue or deploy anything without approval.

**Done when:** error evidence, impact, root-cause hypothesis, code and test results, and pre-deployment checks.

<a id="agent"></a>

## 05 · Agent development and evaluation

scaffold + eval dataset + failure analysis + deployment readiness

**Stack:** [Google Agents CLI](https://github.com/google/agents-cli)

**Get started:** requires Python 3.11+, uv, and Node.js.

```bash
uvx google-agents-cli setup
```

To add **only the skills** without the CLI, use this instead:

```bash
npx skills add google/agents-cli
```

This is not a coding agent itself: it helps your existing agent build, evaluate, and deploy ADK applications.

**First request**

> Build a small ADK agent that runs locally. Create an evaluation dataset with happy-path, edge, and failure cases, run the evaluation, and summarize failure clusters and the before-and-after difference. Do not deploy it to the cloud yet.

**Done when:** runnable agent, evaluation cases and metrics, failure analysis, and evidence for a deployment decision.

[Back to the catalog](../catalog/README.en.md)

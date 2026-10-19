# Design workflows · what should you connect first?

[Agent Stack Brief](../README.en.md) · [한국어](design-workflows.md) · **English** · [Catalog](../catalog/README.en.md)

Design judgment, design-source access, and component search are different tasks. Choose **one outcome**; you do not need all three tools.

**See the result first:** [Executed redesign of this catalog](cases/catalog-design.en.md) · [First connection in your client](client-first-steps.en.md)

[Review a design](#review) · [Implement from Figma](#figma) · [Find components](#components)

<a id="review"></a>

## 1. An existing screen feels bland or hard to use

**Resource:** [Impeccable](https://github.com/pbakaus/impeccable), already listed; this adds a practical entry path.

Agent guidance/tools for design review, refinement, and finishing—not a Figma connection server. Follow upstream setup; review hook execution and trust approval separately. Command syntax can vary by version.

**First request**

> Confirm audience and primary action, then prioritize three hierarchy, spacing, or typography problems. Preserve brand and functionality. Improve one agreed screen and retain mobile and keyboard evidence.

**Done means:** problem → change → evidence, not just “looks better.”

<a id="figma"></a>

## 2. Implement a Figma design in existing code

**Resource:** [Official Figma MCP guide](https://developers.figma.com/docs/figma-mcp-server/).

Connect design context to your agent. Remote/desktop features and access differ; check [client setup](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/). Account and file access are required. Some configurations can write to the canvas: distinguish reads from changes.

**First request**

> Read one authorized Figma frame and map it to existing components/tokens first. Mark missing states/assets unknown. Do not change the source file. Implement only approved code scope and report differences.

**Done means:** frame source, reused tokens/components, states, and differences. Viewing access does not imply write access.

<a id="components"></a>

## 3. Find and implement a UI component

**Resource:** [Official shadcn MCP guide](https://ui.shadcn.com/docs/mcp).

Browse, search, and install registry components. It does not replace design judgment. Review stack compatibility, registry configuration, and installation diffs. Do not share private credentials.

**First request**

> Find two compatible form components; show dependencies and file changes first. Wait for approval before installing. Adapt the selection to existing tokens; verify empty, error, and keyboard-focus states.

**Done means:** rationale, installation diff, and normal/error/keyboard results. Adding a component does not establish accessibility compliance.

## Retain the same evidence

Record screen/audience → brand/functionality to preserve → change scope → normal/empty/error states → small-screen/keyboard results. Check whether the primary action became clearer before adding effects.

**Review scope · 2026-10-19:** primary docs reviewed for all three resources. Not a new installation, Figma/shadcn MCP execution case, or quality ranking.

[Frontend quick start](quick-starts.en.md#frontend) · [Browser exercise](web-validation.en.md) · [MCP recovery](mcp-recovery.en.md)

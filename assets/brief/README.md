# Agent Stack Brief · visual identity

GitHub-native editorial artwork. The prose, dates, navigation, and story titles remain selectable text; artwork is supplemental.

## Direction

Paper, ink, and vermilion. A Newsreader serif wordmark, thin publication rules, offset stack symbol, and issue-number plates. No raster backgrounds, external font requests, tracking, scripts, animation, or remote image services.

| Role | Light | Dark |
| --- | --- | --- |
| Paper | `#f5f0e7` | `#172b26` |
| Ink | `#233b32` | `#f0e9da` |
| Accent | `#ad402d` | `#f0a184` |
| Rule | `#b7b8a7` | `#607367` |

## Assets and accessibility

- `masthead-*`: shared wordmark, with independent mobile composition.
- `issue-ID-*`: a cover for each issue with `cover.labels` in the issue manifest. Labels are editorial cues, not test results or ratings.
- Each illustration has desktop/mobile and light/dark variants. A standard `picture` selects the appropriate one; the fallback is the desktop light image.
- SVGs have a viewBox, title, and description. Embeds must have meaningful alt text. Do not move source citations or essential instructions into an image.
- Both languages share the same artwork, using universal topic labels. Their native-language titles and explanation remain in Markdown.

## Rebuilding

No package install or network access is needed:

1. Change palette/layout in `scripts/build-brand.mjs`, or an issue's three short `cover.labels` in `newsletter/issues.json`.
2. Run `node scripts/build-brand.mjs --patch` to print a reviewable patch. Apply it with the project's patch tool.
3. Run `node scripts/build-brand.mjs --check` and `node scripts/check-content.mjs`.
4. Preview both languages at mobile/desktop widths and light/dark themes. Keep the issue, title, and latest-issue link readable without the artwork.

## Typeface credits

Wordmark and numerals are outlines derived from **Newsreader**, Copyright 2020 The Newsreader Project Authors. The font is distributed under SIL OFL 1.1; the full license is preserved in [OFL-Newsreader.txt](OFL-Newsreader.txt).

The input font URL and SHA-256 are recorded in `type-outlines.json`. Only the fixed outline data is used at build time; no font is downloaded by readers. The original Newsreader font is available from [Google Fonts](https://github.com/google/fonts/tree/main/ofl/newsreader).

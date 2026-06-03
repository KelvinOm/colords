# WDS — Widget Design System

A monorepo (pnpm workspaces) for a design system: a library of accessible React widgets with a token-based theming engine that generates full light/dark themes from a single seed color.

📖 **Live Storybook:** https://kelvinom.github.io/colords

## Packages

| Package | Purpose |
| --- | --- |
| `packages/widgets` | 38+ accessible React components (Button, Select, Modal, Calendar, …) built on [react-aria-components](https://react-spectrum.adobe.com/react-aria/). |
| `packages/theming` | Theming engine — design tokens, color system, and `ThemeProvider`/`useTheme` for generating themes from a seed color. |
| `packages/headless` | Headless behavior primitives (Popover, Tooltip) built on [floating-ui](https://floating-ui.com/). |
| `packages/utils` | Shared utility functions. |
| `packages/storybook` | Component docs & playground; deployed to GitHub Pages on every push to `main`. |

## Getting Started

```bash
pnpm install     # install dependencies
pnpm storybook   # run Storybook locally
pnpm build       # build all packages
pnpm test        # run tests
pnpm lint        # lint all packages
```

Requires Node ≥ 22.14 and pnpm ≥ 10.7.

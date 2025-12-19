# longhollow-web

Next.js 13 app using the `pages` router, plus Storybook and Jest.

## Requirements

- Node.js 20 (see `package.json` engine)
- Yarn (classic)

## Quick start

```bash
yarn
yarn dev
```

Open `http://localhost:3000`.

## Common scripts

```bash
yarn dev          # Start the Next.js dev server
yarn build        # Production build
yarn start        # Run the production server
yarn lint         # ESLint
yarn format       # Prettier (writes files)
yarn test         # Jest in watch mode
```

## Storybook

```bash
yarn storybook
```

Storybook runs on `http://localhost:6006`.

## Project layout

- `pages` Routes and top-level screens (pages router)
- `components` App-specific UI components
- `ui-kit` Reusable, generic UI components
- `providers` App providers (state, GraphQL, etc.)
- `hooks` Custom React hooks
- `lib` Shared library code
- `config` Theme and app configuration
- `public` Static assets
- `__tests__` High-level smoke tests

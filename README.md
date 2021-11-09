# Christ Fellowship Web App
[![Package Version](https://img.shields.io/github/package-json/v/christfellowshipchurch/web-app-v2.svg)](https://github.com/christfellowshipchurch/web-app-v2)

## Live Site
[![Netlify Status](https://api.netlify.com/api/v1/badges/59817745-3a48-4020-9028-1630e394dc04/deploy-status)](https://app.netlify.com/sites/upbeat-pasteur-01cde4/deploys)

## About
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Creating Components

```bash
yarn new-component [FOLDER_NAME] [COMPONENT_NAME]
# yarn new-component components ComponentName
# yarn new-component ui-kit ComponentName
```

## Directory Structure

- `__tests__` — Top-level smoke test for rendering the `<App>`.
- `components` — App components that are more specific than `ui-kit` components.
- `config` — Configuration files for things like the theme, metadata, etc.
- `hooks` — Custom Hooks for wrapping `useQuery`, `useMutation`, etc.
- `lib` — Library code.
- `pages` — The directory structure that dictates the routes and main screens.
- `providers` — Components that provide data (state or GraphQL) to components.
- `public` — Public assets.
- `scripts` — Handy scripts.
- `ui-kit` — Abstracted ui-kit components and library.
- `utils` — Utility functions.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

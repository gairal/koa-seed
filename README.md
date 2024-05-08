# koa-seed &middot; [![CI Status](https://github.com/gairal/koa-seed/workflows/CI/badge.svg)](https://github.com/gairal/koa-seed/actions)

> A Koa Seed [TypeScript](https://www.typescriptlang.org/),
> [Vitest](https://vitest.dev), [Prettier](https://prettier.io/), [eslint](https://eslint.org/) and ❤️

### Table of Contents

- [File structure](#file-structure)
- [Quick Start](#quick-start)
- [Commands](#commands)

### File structure

```markup
koa-seed/
 ├──dist/                            * generated library
 │
 ├──src/                             * source TypeScript Files
 │   ├──app/
 │   │
 │   └──index.ts                     * our lib entry point
 │
 └──*.*                              * configuration files
```

### Quick Start

```bash
# clone the repo
git clone git@github.com:gairal/koa-seed.git

# change directory to the repo
cd koa-seed

# install the dependencies
pnpm i

# start the TypeScript watcher
pnpm start
```

### Commands

- `pnpm build`: Production build generated into ./dist
- `pnpm clean`: Deletes build dir ./dist
- `pnpm dev`: launches a TypeScript watcher
- `pnpm lint`: lints the whole sources and tests with eslint
- `pnpm test`: runs Vitest
- `pnpm start`: runs the project in production mode

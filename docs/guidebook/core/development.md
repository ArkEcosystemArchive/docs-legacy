---
title: "Development"
---

# Development

[[toc]]

## Introduction

Getting started with the development of Ark Core is much easier compared to the initial release known as `ark-node`. Everything from the development to the publication of the core is managed by [Lerna](https://github.com/lerna/lerna).

## Getting started with Lerna

Before you can get started with working on Ark Core you need to setup lerna as previously mentioned.

```bash
yarn global add lerna
git clone https://github.com/ArkEcosystem/ark-core
cd ark-core
lerna bootstrap
```

Just follow those steps and you are ready to get started. Happy Hacking!

## Database

Ark Core stores all the blockchain data in a database. You could read more about it, in the [database section](https://docs.ark.io/guidebook/core/database.html#introduction).

For development, you could use our ready-to-use [Docker Compose](https://docs.docker.com/compose/) configurations, following the instructions at [Docker section](https://docs.ark.io/guidebook/core/docker.html).

## Starting a node

If you want to start a node which consists of a relay and forger you can use any of the following commands (inside `packages/core`).

- `yarn start` => `~/.ark`
- `yarn start:mainnet` => `packages/core/lib/config/networks/mainnet`
- `yarn start:devnet` => `packages/core/lib/config/networks/devnet`
- `yarn start:testnet` => `packages/core/lib/config/networks/testnet`

## Starting a relay

If you want to start a relay you can use any of the following commands (inside `packages/core`).

- `yarn relay` => `~/.ark`
- `yarn relay:mainnet` => `packages/core/lib/config/networks/mainnet`
- `yarn relay:devnet` => `packages/core/lib/config/networks/devnet`
- `yarn relay:testnet` => `packages/core/lib/config/networks/testnet`

## Starting a forger

If you want to start a forger you can use any of the following commands (inside `packages/core`).

- `yarn forger` => `~/.ark`
- `yarn forger:mainnet` => `packages/core/lib/config/networks/mainnet`
- `yarn forger:devnet` => `packages/core/lib/config/networks/devnet`
- `yarn forger:testnet` => `packages/core/lib/config/networks/testnet`

## Creating a snapshot

If you want to create a snapshot you can use any of the following commands.

- `yarn snapshot` => `~/.ark`
- `yarn snapshot:mainnet` => `packages/core/lib/config/networks/mainnet`
- `yarn snapshot:devnet` => `packages/core/lib/config/networks/devnet`
- `yarn snapshot:testnet` => `packages/core/lib/config/networks/testnet`

## Debugging

It is possible to run a variation of these commands that enables the [Node debugger](https://nodejs.org/api/debugger.html):

- `yarn debug:start`
- `yarn debug:relay`
- `yarn debug:forger`
- `yarn debug:snapshot`

A good introduction about how to use the debugger is the [guide to debugging of Node.js](https://nodejs.org/en/docs/guides/debugging-getting-started/).

## Tests

Every package that is developed should provide tests to guarantee it provides the expected behaviour.

Our tool of choice for tests is [Jest](https://facebook.github.io/jest/) by Facebook which provides us with the ability to add custom matchers, snapshot testing and parallelizes our test runs.

All packages have a `yarn run test` command which you should run before sending a PR or pushing to GitHub to make sure all tests are passing.
You could use `yarn run test:watch` to listen to changes on the files and run the tests automatically.

Additionally, we provide a variant (`yarn run test:debug`) that enables the [Node debugger](https://nodejs.org/api/debugger.html).

## Linting

In order to make everyone life easier to work with the code and guarantee a certain style guide we use [ESLint](https://eslint.org) in combination with [StandardJS](https://standardjs.com).

You can find them on GitHub here:
 - [ESLint](https://github.com/eslint/eslint)
 - [StandardJS](https://standardjs.com)

Before sending any PRs or pushing to GitHub please make sure to run `npm run lint` to apply the rules enforced by [StandardJS](https://standardjs.com).

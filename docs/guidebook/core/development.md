---
title: "Development"
---

# Development

[[toc]]

## Introduction

Ark Core is now written in [TypeScript](https://github.com/microsoft/typescript), and it has been using [Lerna](https://github.com/lerna/lerna) to manage the development and publication of its packages.

These tools make it easy for us to set up the development environment, everything is handled by scripts provided in the Core's `package.json` file.

## Getting started

Firstly, you should have [git](https://git-scm.com) installed.

With git installed, the first step is to clone the repository so we can have access to some important files locally:

```git
git clone https://github.com/arkecosystem/core
cd core
```

For example, the `.nvmrc` file located at `core/.nvmrc` will tell us which version of node we should use for development.

If you don't have NodeJS and npm installed, the simplest way to manage both is through following instructions on [how to set up nvm for your platform](https://github.com/creationix/nvm).

Note that the command to install the appropriate version of NodeJS and npm through nvm is:

```bash
nvm install [version in .nvmrc file]
```

Otherwise, you may choose to install a version of NodeJS LTS that has the same major version (10.x or 11.x or 12.x) as the `.nvmrc` file shows.

The next important required dependency is a global installation of yarn through npm:

```bash
npm i -g yarn
```

[Yarn](https://yarnpkg.com) is the package manager used by Ark Core; it replaces npm from here on out.

With yarn installed globally, we can proceed to set up the Ark Core repository.

Before we install all the JavaScript and TypeScript packages, we need to make sure we are on the develop branch.

If the output of `git branch` doesn't show 'develop' as the current branch, but shows 'master' in green (current branch), you need to run the following:

```git
git fetch https://github.com/arkecosystem/core develop:develop
git checkout develop
```

This will ensure that your local files reflect those of the Core's development branch.

Finally, we can set up the entire repository with one command:

```bash
yarn setup
```

If you wish to run tests from this point, follow the instructions in the [docker](./docker.html) guide (use case #1). Then, you may run tests on the whole repository with `yarn test`.

Just follow those steps and you are ready to get started. Happy Hacking!

## Database

Ark Core stores all the blockchain data in a database. You could read more about it, in the [database section](/guidebook/core/development.html#database).

For development, you could use our ready-to-use [Docker Compose](https://docs.docker.com/compose/) configurations, following the instructions at [Docker section](/guidebook/core/docker.html).

## Starting a node

If you want to start a node which consists of a `relay` and `forger` you can use any of the following commands (inside `packages/core`).

- `yarn start:mainnet` => `packages/core/bin/config/networks/mainnet`
- `yarn start:devnet` => `packages/core/bin/config/networks/devnet`
- `yarn start:testnet` => `packages/core/bin/config/networks/testnet`

## Starting a relay

If you want to start a `relay`, you can use any of the following commands (inside `packages/core`).

- `yarn relay:mainnet` => `packages/core/bin/config/networks/mainnet`
- `yarn relay:devnet` => `packages/core/bin/config/networks/devnet`
- `yarn relay:testnet` => `packages/core/bin/config/networks/testnet`

## Starting a forger

If you want to start a `forger`, you can use any of the following commands (inside `packages/core`).

- `yarn forger:mainnet` => `packages/core/bin/config/networks/mainnet`
- `yarn forger:devnet` => `packages/core/bin/config/networks/devnet`
- `yarn forger:testnet` => `packages/core/bin/config/networks/testnet`

## Debugging

It is possible to run a variation of these commands that enables the [Node debugger](https://nodejs.org/api/debugger.html):

- `yarn debug:start`
- `yarn debug:relay`
- `yarn debug:forger`

A good introduction about how to use the debugger is the [guide to debugging of Node.js](https://nodejs.org/en/docs/guides/debugging-getting-started/).

## Tests

Every package that is developed should provide tests to guarantee it gives the expected behavior.

Our tool of choice for tests is [Jest](https://facebook.github.io/jest/) by Facebook which provides us with the ability to add custom matchers, snapshot testing and parallelizes our test runs.

All packages have a `yarn test` command which you should run before sending a PR or pushing to GitHub to make sure all tests are passing.
You could use `yarn test:watch` to listen to changes on the files and run the tests automatically.

Additionally, we provide a variant (`yarn test:debug`) that enables the [Node debugger](https://nodejs.org/api/debugger.html).

## Linting

In order to make everyone life easier to work with the code and guarantee a certain style guide we use [Prettier](https://github.com/prettier/prettier) in combination with [TSLint](https://palantir.github.io/tslint/).

Before sending any PRs or pushing to GitHub, please make sure to run `yarn format` to enforce the rules described in `tslint.json` and `.prettierrc.json`.

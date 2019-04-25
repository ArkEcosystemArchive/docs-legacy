# How to get started with development

## Intro / general stuff

### Code structure

Basically \_\_tests\_\_, packages

### Management via Yarn & Lerna

ARK Core uses [yarn](https://yarnpkg.com/lang/en/) and specifically [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) through [lerna](https://lerna.js.org/) to manage the git repository, dependencies and publishing of all packages that are developed and maintained.

#### Yarn

Yarn is a fast, reliable, and secure dependency manager that is developed by Facebook as an alternative to [npm](https://www.npmjs.com/) which is the default package manager that comes with node.js.

It offers faster installations because it parallelizes its operations and provides a lockfile that is consistent across different machines to ensure installations work the same everywhere. The biggest selling point is a feature called `workspaces` about which we will talk in the next section.

#### Lerna

Lerna is a tool that was built to manage repositories that contain multiple packages in a single location, also known as `mono-repositories`. In combination with Yarn and its `workspaces` feature it allows us to easily maintain many packages in a single location and quickly install of their dependencies.

> Workspaces are a new way to setup your package architecture that’s available by default starting from Yarn 1.0. It allows you to setup multiple packages in such a way that you only need to run yarn install once to install all of them in a single pass.

Lerna exposes a few commands which you will find yourself use quite often to install dependencies and build packages. We expose those as npm scripts which are called through yarn.

#### Important Commands

##### `yarn setup`

This command will install development dependencies like `lerna` and `typescript`. Once it is done with that it will continue to link local packages together and install remaining dependencies for all packages in the `packages` and `plugins` directories and finally build those via `tsc`, the TypeScript compiler.

##### `yarn setup:clean`

This command will perform the same tasks `yarn setup` but before doing so it will remove the `node_modules` directory from all packages.

##### `yarn bootstrap`

This command will link local packages together and install remaining package dependencies. It is executed by `yarn setup` but doesn't build packages which means that if your package is written in TypeScript it won't be build after the installation of all dependencies.

##### `yarn clean`

This command will remove the `node_modules` directory from all packages. It is executed by `yarn setup` so you should never need to execute this yourself unless you have issues that are caused by a corrupted `node_modules` directory. If that is the case we recommend to run `yarn setup:clean`.

##### `yarn build`

This command will build all packages in the `packages` and `plugins` directories via `tsc`, the TypeScript compiler.

### TypeScript

general stuff, links to typeScript docs, ts build

## Modular architecture

### Packages / plugins philosophy

\+ how packages can "call" each other through core-container

### How app starts up initializing plugins

Concrete example (code) to understand how plugins are setup

## Going inside main packages

Explaining main logic in each package.

### API

### Blockchain

### Database

### Forger

### P2P

### Crypto

## Github / CircleCI / Codecov

Overview of github /circle / codecov workflows.

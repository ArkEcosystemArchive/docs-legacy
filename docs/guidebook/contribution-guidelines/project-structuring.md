---
title: "Project Structuring"
---

# Project Structuring

[[toc]]

## Introduction

While the following guidelines are not an absolute requirement or need to be enforced by tools, it is a recommendation based on what we have been trying to do in our projects lately.

## How to approach `JavaScript` projects

### Dependencies

Make sure that all dependencies you use are maintainted and receive new releases on a regular basis. Also try to use https://www.npmjs.com/package/npm-check-updates every now and then to check for outdated dependencies in your package.

### Directory Structure

* `lib/` is intended for code that can run as-is with `require()`.
* `src/` is intended for code that needs to be build with webpack before it can be used.
* `build/` is for webpack scripts needed to build your project.
* `dist/` is for compiled modules that can be used with other systems.
* `bin/` is for any executable scripts, or compiled binaries used with, or built from your module.
* `__tests__/` is for all of your tests with [jest](https://github.com/facebook/jest).

#### lib

If you are developing a module only for server-side use with node.js all files should be placed in the `lib` directory.

#### src

If you are developing a module for server-side and/or browser use all files should be placed in the `src` directory.

#### build

If you are building a module that needs to run both in the browser and on a server you should use [webpack](https://github.com/webpack/webpack) and place the build scripts inside the `build` directory.

#### dist

If your module is to be built for use with other platforms through webpack, the output should be placed in the `dist` directory.

#### bin

The `bin` folder is for any system modules your package will use or generate.

* The compiled `node_gyp` output for your module's binary code.
* Pre-compiled platform binaries.
* [package.json/bin](https://docs.npmjs.com/files/package.json#bin) scripts for your module.

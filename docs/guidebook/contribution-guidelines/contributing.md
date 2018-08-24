---
title: "Contributing"
---

# Contributing

[[toc]]

## Introduction

While the following guidelines are not an absolute requirement or need to be enforced by tools, it is a recommendation based on what we have been trying to do in our projects lately.

## Minimum Requirements

**All additions and pull requests need to meet at least the following conditions:**

1. If adding a new feature, the feature was previously discussed with the team.
2. Everything you added, modified or removed is covered by tests and has sufficient coverage.
3. All your code is following the code style guidelines specified in the project.

## Dos and Don'ts

- **Do** commit features, refactors and additions to your branch. **If you do commit them, rebase your repository to remove them before sending your pull request.**

- **Don't** commit console.logs, debugging and alike to your branch. They are only of value during local development and differ for each developer.

- **Do** send pull requests that have an issue attached to them and use `Resolves [link-to-issue]` to indicate the relationship of your pull request to it.

- **Don't** send pull requests that are missing an issue. First open an issue, then send a pull request.

- **Do** send pull requests that come from `feat/*` or `bug/*` branches.

- **Don't** send pull requests that come from master or branches that have non-descriptive names.

- **Do** send pull requests that add new features that were previously discussed.

- **Don't** send pull requests that add new features without any previous discussion about the usefulness, implementation or implications of adding it.

- **Do** send pull requests that improve code readability.

- **Don't** send pull requests that improve code readability to your own liking. _Following the standards that are specified in the project._

- **Do** send pull requests that improve stability.

- **Don't** send pull requests that improve stability by replacing dependencies which could result in breaking changes without previous discussion.

- **Do** send pull requests that improve test coverage.

- **Don't** send pull requests that improve test coverage by refactoring major internal parts which could result in breaking changes without previous discussion.

## Issues & Pull Requests

When you think your contribution is ready and you would like to submit a pull-request, remember to first open an issue and then send a pull-request that mentions the issue by making use of https://help.github.com/articles/closing-issues-using-keywords/.

When your pull-request gets merged the issue will be automatically closed and a connection be made between those two which makes it easier to figure out which issues and pull-requests are related to each other.

## Things we DO NOT accept as additions to any applications or packages

The ARK Team distances itself from anything that is related to payouts by delegates or voter calculations.

If the feature you would like to add contains anything that adds functionality to calculate or process payouts to voters in way, consider forking or creating an extension if you really need that functionality or think people will greatly benefit from it.

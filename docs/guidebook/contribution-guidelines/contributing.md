---
title: "Contributing"
---

# Contributing

## Introduction

While the following guidelines are not an absolute requirement, writing your code by these standards will ensure greater compatibility with the Ark Ecosystem and increases the likelihood your pull request will be accepted.

## Minimum Requirements

**All additions and pull requests need to meet at least the following conditions:**

1. If adding a new feature, the feature was previously discussed with the team.
2. Everything you added, modified or removed is covered by tests and has sufficient coverage.
3. All your code is following the code style guidelines specified in the project.

## Dos and Don'ts

- **Do** commit features, refactors and additions to your branch. **If you do commit them, rebase your repository to remove them before sending your pull request.**

- **Don't** commit console.logs, debugging or related functions to your branch. They are only of value during local development and differ for each developer.

- **Do** send pull requests that have an issue attached to them. In the body of your request, use `Resolves [link-to-issue]` to indicate the issue you're resolving with your request.

- **Don't** send pull requests without an issue. First open an issue, then send a pull request.

- **Do** send pull requests that come from `feat/*` or `bug/*` branches.

- **Don't** send pull requests that come from master or branches that have non-descriptive names. Switch to a more descriptive branch before committing.

- **Do** send pull requests that add new features that were previously discussed.

- **Don't** send pull requests that add new features without any previous discussion about the usefulness, implementation or implications of adding it.

- **Do** send pull requests that improve code readability.

- **Don't** send pull requests that improve code readability to your own liking. _Following the standards that are specified in the project. Should you have questions, refer to the [contribution guides](/guidebook/guides/)._

- **Do** send pull requests that improve stability.

- **Don't** send pull requests that improve stability by replacing dependencies. Without discussion, this can lead to breaking changes.

- **Do** send pull requests that improve test coverage.

- **Don't** send pull requests that improve test coverage by refactoring major internal parts. If your branch contains significant changes, ensure that all tests pass before submitting your pull request, even tests not directly related to your package.

## Issues & Pull Requests

When you think your contribution is ready and you would like to submit a pull-request, remember to first open an issue and then send a pull-request that mentions the issue by making use of https://help.github.com/articles/closing-issues-using-keywords/.

When your pull-request gets merged the issue will be automatically closed and a connection be made between those two which makes it easier to figure out which issues and pull-requests are related to each other.

## Things we DO NOT accept as additions to any applications or packages

The ARK Team distances itself from anything that is related to payouts by delegates or voter calculations.

If the feature you would like to add contains anything that adds functionality to calculate or process payouts to voters in this way, consider creating an extension using plugins or our SDKs to implement it yourself.

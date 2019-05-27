---
title: "Git Commit Guidelines"
---

# Git Commit Guidelines

[[toc]]

## Introduction

These guidelines are based on [Angular's commit convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) and should be followed as closely as possible, or your pull-request is subject to rejection.

#### TL;DR:

Messages must be matched by the following regex:

```js
/^(revert: )?(feat|fix|polish|docs|style|refactor|perf|test|workflow|ci|chore|types|release)(\(.+\))?: .{1,50}/;
```

#### Examples

Appears under "Features" header, `crypto` subheader:

```
feat(crypto): add transfer deserializer
```

Appears under "Bug Fixes" header, `crypto` subheader, with a link to issue #28:

```
fix(crypto): handle long vendor fields in transfer deserializer

close #28
```

Appears under "Performance Improvements" header, and under "Breaking Changes" with the breaking change explanation:

```
perf(crypto): improve bip38 by using native-secp256k1

BREAKING CHANGE: The 'foo' option has been removed.
```

The following commit and commit `7d1bbd2` do not appear in the changelog if they are under the same release. If not, the revert commit appears under the "Reverts" header.

```
revert: refactor(core-p2p): remove peer.nethash property

This reverts commit 7d1bbd2.
```

### Full Message Format

A commit message consists of a **header**, **body** and **footer**. The header has a **type**, **scope** and **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

### Revert

If the commit reverts a previous commit, it should begin with `revert:`, followed by the header of the reverted commit. In the body, it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type

If the prefix is `feat`, `fix` or `perf`, it will appear in the changelog. However, if there is any [BREAKING CHANGE](#footer), the commit will always appear in the changelog.

Other prefixes are up to your discretion. Suggested prefixes are `docs`, `chore`, `style`, `refactor`, and `test` for non-changelog related tasks.

### Scope

The scope could be anything specifying the place of the commit change. For example `core`, `profile`, `crypto`, `database` etc...

### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

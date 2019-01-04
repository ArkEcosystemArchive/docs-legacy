---
title: "Repository Management"
---

# Repository Management

While the following guidelines are not an absolute requirement, writing your code by these standards will ensure greater compatibility with the Ark Ecosystem and increases the likelihood your pull request will be accepted.

## Structure

Repositories across an organisation should have a consistent basic structure to make it easy to find everything across different repositories.

**At a bare minimum a repository should contain the following:**

1. **README.md** - Should contain at least a description, installation instructions and a contact address for security issues.
2. **LICENSE** - Should contain the software license of the project, commonly the MIT License for open-source projects.
3. **.editorconfig** - Should contain a configuration that is enforced by everyones editor if an appropriate plugin is installed.
4. **.gitignore** - Should contain a list of files and directories that should not be commited with `git push`.
5. **.travis.yml** - Should contain a configuration for TravisCI to run tests.

## Development

When a new repository is created for a project, the first thing you should do is create a `develop` branch and set it as default. This will indicate to developers that this project is not stable yet. This branch should be used until the initial implementation is done, and merged to `master` without squashing. `master` should then be set as the default branch.

Once the initial implementation is done and merged, only squash merging should be enabled and all future PRs should be squashed with meaningful commit messages.

## Squashing Pull-Requests

**When working on any project all pull-requests must be squashed.**

The goal of doing so first and foremost is to keep PRs small and focused on a single issue. If you think to yourself `all my hard work and organized commits are going to be lost` then your PR is most likely out of scope and trying to solve more then one issue at a time which means you should split it up into multiple PRs that are meaningful even after being squashed.

Another benefit of squashing is to have a clean & flat git history which allows to easily blame changes without having to go through 100 commits to finally reach what you were looking for.

**We only care about the net effect of the pull-requests, i.e. "feat: wallet integration". We don't care about the 30 commits of "bugfix, added, removed, refactored". We want a clear and concise history without any noise.**

## How to organize GitHub Issues & Pull Requests

**Status**
- ![#000000](https://placehold.it/15/#000000/000000?text=+) `Status: Abandoned`
- ![#000000](https://placehold.it/15/#000000/000000?text=+) `Status: Won't Fix`
- ![#007700](https://placehold.it/15/#007700/000000?text=+) `Status: Resolved`
- ![#043a96](https://placehold.it/15/#043a96/000000?text=+) `Status: Accepted`
- ![#043a96](https://placehold.it/15/#043a96/000000?text=+) `Status: Available`
- ![#d2dae1](https://placehold.it/15/#d2dae1/000000?text=+) `Status: In Progress`
- ![#d2dae1](https://placehold.it/15/#d2dae1/000000?text=+) `Status: On Hold`
- ![#b60205](https://placehold.it/15/#b60205/000000?text=+) `Status: Blocked`
- ![#e11d21](https://placehold.it/15/#e11d21/000000?text=+) `Status: Cannot Reproduce`
- ![#e11d21](https://placehold.it/15/#e11d21/000000?text=+) `Status: Do Not Merge`
- ![#e11d21](https://placehold.it/15/#e11d21/000000?text=+) `Status: Reverted`
- ![#ffdd44](https://placehold.it/15/#ffdd44/000000?text=+) `Status: Help Wanted`
- ![#ffdd44](https://placehold.it/15/#ffdd44/000000?text=+) `Status: Needs Feedback`
- ![#ffdd44](https://placehold.it/15/#ffdd44/000000?text=+) `Status: Needs Investigation`
- ![#ffdd44](https://placehold.it/15/#ffdd44/000000?text=+) `Status: Needs Review`
- ![#ffdd44](https://placehold.it/15/#ffdd44/000000?text=+) `Status: Needs Testcase`
- ![#ffdd44](https://placehold.it/15/#ffdd44/000000?text=+) `Status: Needs Changes`
- ![#ffdd44](https://placehold.it/15/#ffdd44/000000?text=+) `Status: Needs Discussion`

**Bounty**
- ![#e11d21](https://placehold.it/15/#e11d21/000000?text=+) `Bounty: Tier 0`
- ![#ffdd44](https://placehold.it/15/#ffdd44/000000?text=+) `Bounty: Tier 1`
- ![#ffdd44](https://placehold.it/15/#ffdd44/000000?text=+) `Bounty: Tier 2`
- ![#ff9900](https://placehold.it/15/#ff9900/000000?text=+) `Bounty: Tier 3`
- ![#ff9900](https://placehold.it/15/#ff9900/000000?text=+) `Bounty: Tier 4`
- ![#007700](https://placehold.it/15/#007700/000000?text=+) `Bounty: Tier 5`
- ![#007700](https://placehold.it/15/#007700/000000?text=+) `Bounty: Tier 6`

**Severity**
- ![#b60205](https://placehold.it/15/#b60205/000000?text=+) `Severity: Blocker`
- ![#ff9900](https://placehold.it/15/#ff9900/000000?text=+) `Severity: High`
- ![#ffdd44](https://placehold.it/15/#ffdd44/000000?text=+) `Severity: Medium`
- ![#007700](https://placehold.it/15/#007700/000000?text=+) `Severity: Low`

**Platform**
- ![#dddddd](https://placehold.it/15/#dddddd/000000?text=+) `Platform: Windows`
- ![#dddddd](https://placehold.it/15/#dddddd/000000?text=+) `Platform: Linux`
- ![#dddddd](https://placehold.it/15/#dddddd/000000?text=+) `Platform: macOS`

**Type**
- ![#1144ff](https://placehold.it/15/#1144ff/000000?text=+) `Type: Feature`
- ![#1144ff](https://placehold.it/15/#1144ff/000000?text=+) `Type: Release`
- ![#44bbff](https://placehold.it/15/#44bbff/000000?text=+) `Type: Maintenance`
- ![#44bbff](https://placehold.it/15/#44bbff/000000?text=+) `Type: Performance`
- ![#44bbff](https://placehold.it/15/#44bbff/000000?text=+) `Type: Refactor`
- ![#c7def8](https://placehold.it/15/#c7def8/000000?text=+) `Type: Duplicate`
- ![#c7def8](https://placehold.it/15/#c7def8/000000?text=+) `Type: Expected Behavior`
- ![#b60205](https://placehold.it/15/#b60205/000000?text=+) `Type: Breaking Change`
- ![#e11d21](https://placehold.it/15/#e11d21/000000?text=+) `Type: Bug`
- ![#e11d21](https://placehold.it/15/#e11d21/000000?text=+) `Type: Regression`
- ![#b60205](https://placehold.it/15/#b60205/000000?text=+) `Type: Security`
- ![#fef2c0](https://placehold.it/15/#fef2c0/000000?text=+) `Type: Discussion`
- ![#fef2c0](https://placehold.it/15/#fef2c0/000000?text=+) `Type: Documentation`
- ![#fef2c0](https://placehold.it/15/#fef2c0/000000?text=+) `Type: Information`
- ![#fef2c0](https://placehold.it/15/#fef2c0/000000?text=+) `Type: Question`
- ![#ffdd44](https://placehold.it/15/#ffdd44/000000?text=+) `Type: Standards`

**Difficulty**
- ![#e11d21](https://placehold.it/15/#e11d21/000000?text=+) `Difficulty: Challenging`
- ![#ff9900](https://placehold.it/15/#ff9900/000000?text=+) `Difficulty: Advanced`
- ![#ffdd44](https://placehold.it/15/#ffdd44/000000?text=+) `Difficulty: Intermediate`
- ![#007700](https://placehold.it/15/#007700/000000?text=+) `Difficulty: Beginner`

**Priority**
- ![#b60205](https://placehold.it/15/#b60205/000000?text=+) `Priority: Critical`
- ![#ff9900](https://placehold.it/15/#ff9900/000000?text=+) `Priority: High`
- ![#ffdd44](https://placehold.it/15/#ffdd44/000000?text=+) `Priority: Medium`
- ![#007700](https://placehold.it/15/#007700/000000?text=+) `Priority: Low`

**Test**
- ![#007700](https://placehold.it/15/#007700/000000?text=+) `Test: General`
- ![#007700](https://placehold.it/15/#007700/000000?text=+) `Test: Functional`
- ![#007700](https://placehold.it/15/#007700/000000?text=+) `Test: Integration`
- ![#007700](https://placehold.it/15/#007700/000000?text=+) `Test: Unit`

**Environment**
- ![#f9d0c4](https://placehold.it/15/#f9d0c4/000000?text=+) `Environment: Development`
- ![#f9d0c4](https://placehold.it/15/#f9d0c4/000000?text=+) `Environment: Production`
- ![#f9d0c4](https://placehold.it/15/#f9d0c4/000000?text=+) `Environment: Test`
- ![#f9d0c4](https://placehold.it/15/#f9d0c4/000000?text=+) `Environment: Continuous Integration`

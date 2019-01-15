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

## How to label and organise GitHub Issues & Pull Requests

**Bounty**


- ![#e11d21](https://placehold.it/15/e11d21/000000?text=+) `Tier 0`
    - Custom reward at the discretion of the team, for large projects or changes.

- ![#ff9900](https://placehold.it/15/ff9900/000000?text=+) `Tier 1`
    - Awarded for big features, important fixes or great improvements. This is valued at 100 USD.

- ![#ff9900](https://placehold.it/15/ff9900/000000?text=+) `Tier 2`
    - Awarded for performance, minor features or large documentation changes. This is valued at 50 USD.

- ![#ffdd44](https://placehold.it/15/ffdd44/000000?text=+) `Tier 3`
    - Awarded for code refactoring, moderate docs changes or full translations. This is valued at 25 USD.

- ![#ffdd44](https://placehold.it/15/ffdd44/000000?text=+) `Tier 4`
    - Awarded for adding test coverage or resolving small bugs. This is valued at 10 USD.

- ![#007700](https://placehold.it/15/007700/000000?text=+) `Tier 5`
    - Awarded for small documentation updates or minor code refactoring. This is valued a 5 USD.

- ![#007700](https://placehold.it/15/007700/000000?text=+) `Tier 6`
    - Awarded for typos, text corrections, dependency updates, etc. This is valued a 1 USD.

**Complexity**


- ![#e11d21](https://placehold.it/15/e11d21/000000?text=+) `Undetermined`
    - Needs specialized, in-depth review.

- ![#ff9900](https://placehold.it/15/ff9900/000000?text=+) `High`
    - More than 256 lines changed.

- ![#ffdd44](https://placehold.it/15/ffdd44/000000?text=+) `Medium`
    - Less than 256 lines changed.

- ![#007700](https://placehold.it/15/007700/000000?text=+) `Low`
    - Less than 64 lines changed.

**Difficulty**


- ![#e11d21](https://placehold.it/15/e11d21/000000?text=+) `Challenging`
    - The issue requires extensive understanding of the code base.

- ![#ff9900](https://placehold.it/15/ff9900/000000?text=+) `Advanced`
    - The issue requires advanced understanding of the code base.

- ![#ffdd44](https://placehold.it/15/ffdd44/000000?text=+) `Intermediate`
    - The issue requires basic understanding of the code base.

- ![#007700](https://placehold.it/15/007700/000000?text=+) `Beginner`
    - The issue doesn't require any specific knowledge about the code base.

**Environment**


- ![#f9d0c4](https://placehold.it/15/f9d0c4/000000?text=+) `Development`
    - The issue or pull request affects the development environment.

- ![#f9d0c4](https://placehold.it/15/f9d0c4/000000?text=+) `Production`
    - The issue or pull request affects the production environment.

- ![#f9d0c4](https://placehold.it/15/f9d0c4/000000?text=+) `Test`
    - The issue or pull request affects the test environment.

- ![#f9d0c4](https://placehold.it/15/f9d0c4/000000?text=+) `Continuous Integration`
    - The issue or pull request affects the continuous integration environment.

**Platform**


- ![#dddddd](https://placehold.it/15/dddddd/000000?text=+) `Windows`
    - The issue or pull request affects users on Windows.

- ![#dddddd](https://placehold.it/15/dddddd/000000?text=+) `Linux`
    - The issue or pull request affects users on Linux.

- ![#dddddd](https://placehold.it/15/dddddd/000000?text=+) `Android`
    - The issue or pull request affects users on Android.

- ![#dddddd](https://placehold.it/15/dddddd/000000?text=+) `macOS`
    - The issue or pull request affects users on macOS.

- ![#dddddd](https://placehold.it/15/dddddd/000000?text=+) `iOS`
    - The issue or pull request affects users on iOS.

**Priority**


- ![#b60205](https://placehold.it/15/b60205/000000?text=+) `Critical`
    - The issue or pull request will affect all users.

- ![#ff9900](https://placehold.it/15/ff9900/000000?text=+) `High`
    - The issue or pull request will affect most users.

- ![#ffdd44](https://placehold.it/15/ffdd44/000000?text=+) `Medium`
    - The issue or pull request will affect roughly half of users.

- ![#007700](https://placehold.it/15/007700/000000?text=+) `Low`
    - The issue or pull request will not affect most users.

**Severity**


- ![#b60205](https://placehold.it/15/b60205/000000?text=+) `Critical`
    - The issue is blocking an upcoming release.

- ![#ff9900](https://placehold.it/15/ff9900/000000?text=+) `High`
    - The issue causes data loss, crashes or hangs processes, makes the system unresponsive, etc.

- ![#ffdd44](https://placehold.it/15/ffdd44/000000?text=+) `Medium`
    - The issue reports incorrect functionality, a confusing user experience, etc.

- ![#007700](https://placehold.it/15/007700/000000?text=+) `Low`
    - The issue reports cosmetic items such as formatting, spelling, colors, etc.

**Status**


- ![#000000](https://placehold.it/15/000000/000000?text=+) `Abandoned`
    - The pull request could not be merged because it did not get any updates in a timely fashion.

- ![#000000](https://placehold.it/15/000000/000000?text=+) `Won't Fix`
    - The issue is legitimate, but it is not something the team is currently able or willing to work on.

- ![#007700](https://placehold.it/15/007700/000000?text=+) `Resolved`
    - The issue has been resolved.

- ![#007700](https://placehold.it/15/007700/000000?text=+) `Owner Approved`
    - The pull request has been approved by a code owner.

- ![#007700](https://placehold.it/15/007700/000000?text=+) `Member Approved`
    - The pull request has been approved by a member.

- ![#007700](https://placehold.it/15/007700/000000?text=+) `Collaborator Approved`
    - The pull request has been approved by a collaborator.

- ![#007700](https://placehold.it/15/007700/000000?text=+) `Contributor Approved`
    - The pull request has been approved by a contributor.

- ![#043a96](https://placehold.it/15/043a96/000000?text=+) `Accepted`
    - The proposed solution has been accepted.

- ![#d2dae1](https://placehold.it/15/d2dae1/000000?text=+) `Available`
    - The issue is not assigned to anyone and available to be worked on.

- ![#d2dae1](https://placehold.it/15/d2dae1/000000?text=+) `In Progress`
    - The issue or pull request is being worked on.

- ![#d2dae1](https://placehold.it/15/d2dae1/000000?text=+) `On Hold`
    - The issue or pull request is not being worked on for the time being.

- ![#d2dae1](https://placehold.it/15/d2dae1/000000?text=+) `Stale`
    - The pull request is in need of updates but there has not been a sufficient response.

- ![#b60205](https://placehold.it/15/b60205/000000?text=+) `Blocked`
    - The pull request is blocked from being merged for the time being.

- ![#ff9900](https://placehold.it/15/ff9900/000000?text=+) `Cannot Reproduce`
    - The issue cannot be reproduced by a developer of the team.

- ![#e11d21](https://placehold.it/15/e11d21/000000?text=+) `Reverted`
    - The pull request was reverted after an initial merge.

- ![#e11d21](https://placehold.it/15/e11d21/000000?text=+) `Has Merge Conflicts`
    - The pull request cannot be merged because it has a merge conflict.

- ![#e11d21](https://placehold.it/15/e11d21/000000?text=+) `Tests Failing`
    - The Circle CI build failed when running for this pull request.

- ![#ffdd44](https://placehold.it/15/ffdd44/000000?text=+) `Needs Information`
    - The issue needs more information before it can be verified and resolved.

- ![#ffdd44](https://placehold.it/15/ffdd44/000000?text=+) `Needs Investigation`
    - The issue needs more investigation before it can be verified and resolved.

- ![#ffdd44](https://placehold.it/15/ffdd44/000000?text=+) `Needs Review`
    - The issue or pull request needs a review by a developer of the team.

- ![#ffdd44](https://placehold.it/15/ffdd44/000000?text=+) `Needs Testcase`
    - The issue or pull request relates to a feature that needs test coverage.

- ![#ffdd44](https://placehold.it/15/ffdd44/000000?text=+) `Needs Changes`
    - The pull request needs additional changes before it can be merged.

- ![#ffdd44](https://placehold.it/15/ffdd44/000000?text=+) `Needs Discussion`
    - The issue or pull request needs more discussion before it can be closed or merged.

- ![#ffdd44](https://placehold.it/15/ffdd44/000000?text=+) `Needs Documentation`
    - The pull request needs additional documentation before it can be merged.

**Test**


- ![#7936a5](https://placehold.it/15/7936a5/000000?text=+) `General`
    - The issue or pull request is related to the test config, platform or setup.

- ![#7936a5](https://placehold.it/15/7936a5/000000?text=+) `Functional`
    - The issue or pull request is related to functional tests such as end-to-end or browser testing.

- ![#7936a5](https://placehold.it/15/7936a5/000000?text=+) `Integration`
    - The issue or pull request is related to integration tests between internal or external elements.

- ![#7936a5](https://placehold.it/15/7936a5/000000?text=+) `Unit`
    - The issue or pull request is related to unit tests for testing individual elements.

**Type**


- ![#1144ff](https://placehold.it/15/1144ff/000000?text=+) `Feature`
    - The issue is a request for new functionality.

- ![#1144ff](https://placehold.it/15/1144ff/000000?text=+) `Release`
    - The issue or pull request is related to an upcoming release.

- ![#44bbff](https://placehold.it/15/44bbff/000000?text=+) `Maintenance`
    - The pull request updates dependencies or configuration files.

- ![#44bbff](https://placehold.it/15/44bbff/000000?text=+) `Performance`
    - The issue or pull request relates to performance.

- ![#44bbff](https://placehold.it/15/44bbff/000000?text=+) `Refactor`
    - The pull request improves or enhances an existing implementation.

- ![#c7def8](https://placehold.it/15/c7def8/000000?text=+) `Duplicate`
    - The issue or pull request is a duplicate of another feature request or bug report.

- ![#c7def8](https://placehold.it/15/c7def8/000000?text=+) `Expected Behaviour`
    - The issue is a bug report but the behaviour is intended.

- ![#b60205](https://placehold.it/15/b60205/000000?text=+) `Breaking Change`
    - The issue or pull request documents or introduces a breaking change.

- ![#e11d21](https://placehold.it/15/e11d21/000000?text=+) `Bug`
    - The issue relates to broken or incorrect behaviour.

- ![#e11d21](https://placehold.it/15/e11d21/000000?text=+) `Bugfix`
    - The pull request fixes an incorrect functionality or behaviour.

- ![#e11d21](https://placehold.it/15/e11d21/000000?text=+) `Regression`
    - The issue is a bug that relates to functionality known to work in previous releases.

- ![#b60205](https://placehold.it/15/b60205/000000?text=+) `Security`
    - The issue documents functionality that could expose private data or cause harm otherwise.

- ![#fef2c0](https://placehold.it/15/fef2c0/000000?text=+) `Discussion`
    - The issue is a discussion about a generic topic.

- ![#fef2c0](https://placehold.it/15/fef2c0/000000?text=+) `Documentation`
    - The issue or pull request relates to documentation.

- ![#fef2c0](https://placehold.it/15/fef2c0/000000?text=+) `Information`
    - The issue contains information for users by a develop of the team.

- ![#fef2c0](https://placehold.it/15/fef2c0/000000?text=+) `Question`
    - The issue is more of a question than a request for new features or a report of broken features.

- ![#ffdd44](https://placehold.it/15/ffdd44/000000?text=+) `Task`
    - The issue is a request to setup third-party integrations or any general non-code related tasks.

- ![#ffdd44](https://placehold.it/15/ffdd44/000000?text=+) `Good First Contribution`
    - The issue appears to have a simple solution.

- ![#ffdd44](https://placehold.it/15/ffdd44/000000?text=+) `Standards`
    - The issue reports problems with the compliance of contribution guidelines or code standards.

- ![#ffdd44](https://placehold.it/15/ffdd44/000000?text=+) `Weekly Digest`
    - The issue is a weekly report of the latest activities.

## Assigning Bounty Tiers after merging a Pull Request

After a developer merges a PR it is *required* to assign one of the 7 bounty labels. Those labels will be used by the ArkEcosystem Bot to calculate bounty rewards and inform the contributors about those.

**Tier 1 - $100**

Tier 1 pull requests cover large code changes that usually bring new functionality and have a higher impact on the codebase.

Examples of this include a new API endpoint, resolving structural issues that cause circular dependencies, or adding a new bigger features to our codebase (an example would be settings page to the explorer, adding new identicons package to the desktop wallet or a new small non-essential plugin in the Core).

**Tier 2 - $50**

This tier covers medium features and improvements to the codebase that bring in new functionality, have a big impact on the performance of the product or biggest optimizations and refactors of the code.

An example would be optimizing some parts of the Core for improved performance of a specific function, implementing a medium, non-critical new feature in the desktop wallet or writing large documentation files that require understanding of the ARK code.

**Tier 3 - $25**

These pull requests cover smaller refactors or optimizations of the code or small non-essential features.

An example of this would be reducing complexity or improving performance of existing code, improving the readability of the code or writing new documentation files, full translations of the projects aka desktop wallet or mobile wallet.

**Tier 4 - $10**

Normal small tier pull requests that fix small bugs or add a new test.

Examples of this include adding more test coverage for existing functionality or resolving small bugs that usually get reported by users.

**Tier 5 - $5**

Small documentation updates or improvements that don’t have much code or smaller refactors of the code.

**Tier 6 - $1**

The lowest tier is for items that don’t usually have much to do with the code, but rather, are considered cosmetics.

An example would be a typo, language corrections, grammar corrections, dependency update, link updates or broken links.

**Tier 0 - Custom**

If you want to work on much bigger changes or custom projects that you don’t think fit any of the above tiers contact us at bounty@ark.io.

Some examples of what a custom tier 0 could cover — developing new modules for core that bring in new functionalities (PoW module instead of DPoS), different voting systems, proxy voting, implementing AIPs …

Some issues will also have labels with custom (usually higher) values that you can take on. Labels on those issues will have a defined monetary value, so if you see these available you can request to take point on resolving them. Upon completion and review you will receive payment in ARK.

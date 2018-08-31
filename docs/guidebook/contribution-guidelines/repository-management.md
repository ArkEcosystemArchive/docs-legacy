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

**Platform:** `#bfd4f2`
- ![#bfd4f2](https://placehold.it/15/bfd4f2/000000?text=+) `angular`
- ![#bfd4f2](https://placehold.it/15/bfd4f2/000000?text=+) `bash`
- ![#bfd4f2](https://placehold.it/15/bfd4f2/000000?text=+) `browser`
- ![#bfd4f2](https://placehold.it/15/bfd4f2/000000?text=+) `ionic`
- ![#bfd4f2](https://placehold.it/15/bfd4f2/000000?text=+) `nodejs`
- ![#bfd4f2](https://placehold.it/15/bfd4f2/000000?text=+) `vue`

**Problems:** `#ee3f46`
- ![#ee3f46](https://placehold.it/15/ee3f46/000000?text=+) `bug`
- ![#ee3f46](https://placehold.it/15/ee3f46/000000?text=+) `security`

**Experience:** `#ffc274`
- ![#ffc274](https://placehold.it/15/ffc274/000000?text=+) `ux`
- ![#ffc274](https://placehold.it/15/ffc274/000000?text=+) `ui`

**Environment:** `#fad8c7`
- ![#fad8c7](https://placehold.it/15/fad8c7/000000?text=+) `development`
- ![#fad8c7](https://placehold.it/15/fad8c7/000000?text=+) `production`
- ![#fad8c7](https://placehold.it/15/fad8c7/000000?text=+) `test`

**Feedback:** `#cc317c`
- ![#cc317c](https://placehold.it/15/cc317c/000000?text=+) `discussion`
- ![#cc317c](https://placehold.it/15/cc317c/000000?text=+) `question`

**Improvements:** `#5ebeff`
- ![#5ebeff](https://placehold.it/15/5ebeff/000000?text=+) `enhancement`
- ![#5ebeff](https://placehold.it/15/5ebeff/000000?text=+) `optimization`
- ![#5ebeff](https://placehold.it/15/5ebeff/000000?text=+) `refactor`

**Additions:** `#91ca55`
- ![#91ca55](https://placehold.it/15/91ca55/000000?text=+) `feature`

**Pending:** `#fbca04`
- ![#fbca04](https://placehold.it/15/fbca04/000000?text=+) `backlog`
- ![#fbca04](https://placehold.it/15/fbca04/000000?text=+) `in progress`

**Inactive:** `#d2dae1`
- ![#d2dae1](https://placehold.it/15/d2dae1/000000?text=+) `duplicate`
- ![#d2dae1](https://placehold.it/15/d2dae1/000000?text=+) `invalid`
- ![#d2dae1](https://placehold.it/15/d2dae1/000000?text=+) `wontfix`
- ![#d2dae1](https://placehold.it/15/d2dae1/000000?text=+) `on hold`

**Miscellaneous:** `#fef2c0`
- ![#fef2c0](https://placehold.it/15/fef2c0/000000?text=+) `chore`

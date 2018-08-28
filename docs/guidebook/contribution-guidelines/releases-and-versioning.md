---
title: "Releases & Versioning"
---

# Releases & Versioning

While the following guidelines are not an absolute requirement, writing your code by these standards will ensure greater compatibility with the Ark Ecosystem and increases the likelihood your pull request will be accepted.

## Commits

**Good commits are one of the most important parts of a project.** Commits that do not clearly show intent or don't follow a standard makes it harder for developers and contributors to construct changelogs or track a project's history.

A common standard used for commits is <https://conventionalcommits.org/>. Its spec goes hand in hand with Semantic Versioning and makes compiling changelogs a breeze because all commits are labeled with things like `feat`, `bug` or `refactor`.

## Semantic Versioning

> In the world of software management there exists a dreaded place called “dependency hell.” The bigger your system grows and the more packages you integrate into your software, the more likely you are to find yourself, one day, in this pit of despair.

This paragraph is from the introduction section of <https://semver.org/>, a spec that aims to make devleopment easier by providing a standardised approach to versioning.

Good software should be properly versioned to avoid any breaking changes for your users. This is mission critical if you provide software that can cost people large amounts of money by introducing a breaking change and not tagging a new major release.

_Let's take a look at what Semantic Versioning recommends to do for versioning your software to make breaking changes clear:_

- MAJOR version when you make incompatible API changes
- MINOR version when you add functionality in a backwards-compatible manner
- PATCH version when you make backwards-compatible bug fixes.

Following this pattern of `MAJOR.MINOR.PATCH` you would have versions like `1.3.6`. 

Now, you might think if you are going to introduce a breaking change you should just tag `1.4.0` so people can stick with `1.3.*` if they don't want to be affected by this change.

However, when you make changes that alter the behaviour of your project, that version is no longer compatible with any of the previous `1.*` versions. It doesn't matter if you are on version `1.0.7` and introduce a breaking change; you still should tag version `2.0.0` as any previous `1.*` versions are now incompatible.

In general, we recommend doing as much as you can to preserve backwards compatibility if at all possible. If a change you're making would break backwards compatibility, please reach out to a developer first so that we can explore all possible approaches.

## Keep a Changelog

### What is a changelog?

> A changelog is a file which contains a curated, chronologically ordered list of notable changes for each version of a project.

### Why keep a changelog?

> To make it easier for users and contributors to see precisely what notable changes have been made between each release (or version) of the project.

### Who needs a changelog?

> People do. Whether consumers or developers, the end users of software are human beings who care about what's in the software. When the software changes, people want to know why and how.

Those paragraphs are from the introduction section of <https://keepachangelog.com/en/1.0.0/>, a spec that aims to provide a standardised approach to maintaining a changelog.

Keeping a changelog is as important as versioning your software. You can do a good job at versioning your software, but if you don't document the changes that caused the increase of your version number they are as meaningless to your users as a bad approach to versioning.

**Keep a Changelog** provides a standardised approach to managing a changelog which in turn makes it easier for new developers to get into the project if they come from an environment where **Keep a Changelog** is already a standard.

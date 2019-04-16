---
title: "Releases & Versioning"
---

# Releases & Versioning

While the following guidelines are not an absolute requirement or need to be enforced by tools, it is a recommendation based on what we have been trying to do in our projects lately.

## Commits

**Good commits are one of the most critical parts of a project.** Commits that do not clearly show intent or don't follow a standard make compiling changelogs and going back in history harder for both developers and contributors.

A common standard used for commits is https://conventionalcommits.org/. Its spec goes hand in hand with Semantic Versioning and makes compiling changelogs a breeze because all commits are labeled with things like `feat`, `bug` or `refactor`.

## Semantic Versioning

> In the world of software management there exists a dreaded place called “dependency hell.” The bigger your system grows and the more packages you integrate into your software, the more likely you are to find yourself, one day, in this pit of despair.

This paragraph is from the introduction section of https://semver.org/. A spec that aims to make the life of software developers, and their projects' users, easier by providing a standardized approach to versioning.

Good software needs to be correctly versioned to avoid any breaking changes for your users. This is mission critical if you provide software that can cost people large amounts of money by introducing a breaking change and not tagging a new major release.

*Let's take a look at what Semantic Versioning recommends to do for versioning your software to make breaking changes clear*

- MAJOR version when you make incompatible API changes
- MINOR version when you add functionality in a backward-compatible manner
- PATCH version when you make backward-compatible bug fixes.

Following this pattern of `MAJOR.MINOR.PATCH` you would have versions like `1.3.6`. Now you might think if you are going to introduce a breaking change you should just tag `1.4.0` so people can stick with `1.3.*` if they don't want to be affected by this change.

However, as you made a change that changes the behavior of your project, it is no longer compatible with any of the previous `1.*` versions. It doesn't matter if you are on version `1.0.7`. You still should tag version `2.0.0` as any previous `1.*` versions are incompatible.

## Keep a Changelog

### What Is a Changelog?

> A changelog is a file which contains a curated, chronologically ordered list of notable changes for each version of a project.

### Why Keep a Changelog?

> To make it easier for users and contributors to see what notable changes have been made between each release (or version) of the project.

### Who Needs a Changelog?

> People do. Whether consumers or developers, the end users of software are human beings, who care about what's in the software. When the software changes, people want to know why and how.

Those paragraphs are from the introduction section of https://keepachangelog.com/en/1.0.0/. A spec that provides a standardized approach to maintaining a changelog, making the life of software developers and that of the ones that use their projects easier
Keeping a changelog is as important as versioning your software. You can do an excellent job at versioning your software, but if you do not document the changes that caused the increase of your version number they are as meaningless to your users as a lousy approach to versioning.

**Keep a Changelog** provides you with a standardized approach to managing a changelog which in turn makes it easier for new developers to get into the project if they come from an environment where **Keep a Changelog** is already a standard.

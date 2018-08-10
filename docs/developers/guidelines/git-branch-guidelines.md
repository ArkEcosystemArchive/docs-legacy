---
title: "Git Branch Guidelines"
---

# Git Branch Guidelines

[[toc]]

## Introduction

These guidelines outline what things should be kept in mind while developing new projects and how to structure the branches to guarantee a streamlined workflow.

## Applications (deployable)

### master

The `master` branch should be looked at as the `stable` branch. This branch should only contain code that passes all tests and has been previously tested on the `develop` branch by multiple developers.

### develop

The `develop` branch should be looked at as the `beta` branch. This branch should periodically be merged into `master` after thorough testing. **All pull-requests must be send to this branch.**

### staging

The `staging` branch should be looked at as the `testing` branch. This branch is a mirror of the `develop` branch and should periodically be rebased from `develop`. This branch can be modified to test changes without polluting the `develop` branch.

### versioned (x.x.x)

The versioned branches will need to be created when a new major release is tagged. If `master` currently is on version `1.9.9` a `1.x` branch should be created as `2.0.0` will introduce breaking changes.

## Packages (non-deployable)

### master

The `master` branch should be looked at as the `stable` branch. This branch should only contain code that passes all tests and has been previously tested on the `develop` branch by multiple developers.

### develop

The `develop` branch should be looked at as the `beta` branch. This branch should periodically be merged into `master` after thorough testing. **All pull-requests must be send to this branch.**

### versioned (x.x.x)

The versioned branches will need to be created when a new major release is tagged. If `master` currently is on version `1.9.9` a `1.x` branch should be created as `2.0.0` will introduce breaking changes.

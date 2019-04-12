---
title: "Git Branch Guidelines"
---

# Git Branch Guidelines

[[toc]]

## Introduction

These guidelines outline what things should be kept in mind while developing new projects and how to structure the branches to guarantee a streamlined workflow.

## Applications & Packages (Deployable / Non-Deployable)

### Master

The `master` branch should be looked at as the `stable` branch. This branch should only contain code that passes all tests and has been previously tested on the `develop` branch by multiple developers.

### Develop

The `develop` branch should be looked at as the `beta` branch. It is periodically merged into `master` after thorough testing. **All pull-requests must be sent to this branch.**

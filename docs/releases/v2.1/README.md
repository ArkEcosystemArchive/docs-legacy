# Summary

Ark `v2.1` is a minor update, backward compatible with `v2.0.X`. This update introduces a complete rewrite to [TypeScript](https://www.typescriptlang.org/), which allows for static type-checking along with the latest ECMAScript features. TypeScript is also a much stricter language than JavaScript and lets us spot mistakes that could otherwise go unnoticed. It is more convenient to use and allows for quicker error debugging. For core developers, very little has changed as the syntax is almost the same as JavaScript (Typescript is a superset of JavaScript).

TypeScript makes perfect sense for growing projects that need to scale and have a variety of contributing developers. With this update, we lay the foundation for more technical changes.

We recommend staying on the latest version of Ark; however, this upgrade does not break any APIs, thus `v2.0` nodes are still able to join the network. Development on `v2.0` has ceased in favor of the newer Typescript version.

* **Upgrade time**: low - upgrading to `v2.1` does not break any APIs and can be performed incrementally in the network.
* **Complexity**: low - the internal blockchain representation is not altered.
* **Risk**: low - `v2.1` is backward compatible with `v2.0`; thus a downgrade is possible at any moment.

## Breaking Changes

Plugins relying on the core-APIs may need to be refactored to TypeScript, and cannot rely on the same modules anymore. The [changelog](/releases/v2.1/changelog.md) contains all changes and references to each commit.

## Upgrading

There is a significant difference between upgrading a network from [v1.X](/releases/v2.1/migrating_1.0_2.1.md), or [v2.0.X](/releases/v2.1/migrating_2.0_2.1.md).
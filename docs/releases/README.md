# Releases

Here you will find overviews of each minor release of ARK Core, and corresponding documentation on the changes, migrations and upgrade, and descriptions on design decisions and further improvements.

ARK adheres to standard versioning that using the Semver model:

- **MAJOR**: 2.0.0 was the initial non-backwards compatible release on the Mainnet.
- **MINOR**: 2.x.0 will add new functionality and cover bigger changes and new features that introduce higher end impacts (2.1.0, 2.2.0, …).
- **PATCH**: 2.0.x will be backwards-compatible bug fixes, minor improvements and small additional features (2.0.1, 2.0.11, …).

### Changelog

The official changelog of ARK Core is hosted in the [core repository](https://github.com/ARKEcosystem/core/blob/master/CHANGELOG.md).

## Channels

Core is released in 2 different channels via `npm` to have different versions for `devnet` and `mainnet` during development.

### next

This channel targets the next minor or major release and is used for `devnet` releases which means it receives regular updates as development goes on.

### latest

This channel targets the stable version of core and receives updates when bug fixes or security patches are needed. Outside of those cases there will usually only be updates once development on a current version of the `next` channel has been completed.

## Notes

During the development of 2.2.0 there were the channels `alpha`, `beta` and `rc` as a lot of testing had to be done before going public with the switch from using a git repository to providing a CLI. From 2.3.0 onwards the `next` channel will serve as a combination of all of the aforementioned.

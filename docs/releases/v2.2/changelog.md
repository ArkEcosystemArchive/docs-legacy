# Changelog

::: tip
The official changelog of `v2.2` is hosted in the [core repository](https://github.com/ArkEcosystem/core/blob/develop/CHANGELOG.md#changelog).
:::

### Added

-   Implement a CLI with @oclif to replace commander ([#2100])
-   Add sorting to voters endpoint ([#2103])
-   Validate GET replies from other peers ([#2102])
-   Pass query to findAllByVote method ([#2142])
-   Fetch list of peers from at least a few others ([#2152])

### Fixed

-   Pass the base flags for programmatic calls in `core-tester-cli` ([#2108])
-   Reduce complexity and fix wrong offset handling in `core-elasticsearch` ([#2108])
-   Stuck at not ready to accept new block ([#2139])
-   Properly sort BigNumber values ([#2144])

### Changed

-   Replaced lodash.sortBy/orderBy with faster implementations ([#2106])
-   Improve fork handling in updatePeersOnMissingBlocks ([#2125])
-   Throw an error if the peers or plugins file are missing ([#2135])
-   Improve selection of peer for downloading blocks ([#2137])
-   Merge core-snapshot-cli commands into core ([#2149])

### Removed

-   Remove unnecessary ping call in `core-p2p` ([#2123])
-   Remove broken getRandomDownloadBlocksPeer ([#2121])

[#2100]: https://github.com/ArkEcosystem/core/pull/2100
[#2102]: https://github.com/ArkEcosystem/core/pull/2102
[#2103]: https://github.com/ArkEcosystem/core/pull/2103
[#2106]: https://github.com/ArkEcosystem/core/pull/2106
[#2108]: https://github.com/ArkEcosystem/core/pull/2108
[#2119]: https://github.com/ArkEcosystem/core/pull/2119
[#2121]: https://github.com/ArkEcosystem/core/pull/2121
[#2123]: https://github.com/ArkEcosystem/core/pull/2123
[#2125]: https://github.com/ArkEcosystem/core/pull/2125
[#2135]: https://github.com/ArkEcosystem/core/pull/2135
[#2137]: https://github.com/ArkEcosystem/core/pull/2137
[#2139]: https://github.com/ArkEcosystem/core/pull/2139
[#2142]: https://github.com/ArkEcosystem/core/pull/2142
[#2144]: https://github.com/ArkEcosystem/core/pull/2144
[#2149]: https://github.com/ArkEcosystem/core/pull/2149
[#2152]: https://github.com/ArkEcosystem/core/pull/2152

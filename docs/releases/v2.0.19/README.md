# Summary

ARK `v2.0.X` is a major update, entirely deprecating existing APIs and fully redesigning the internal structure of ARK Node.

::: warning

Note that `v2.0` is currently not the latest node version.

:::

- **Upgrade time**: medium/high - upgrading to `v2.0` breaks APIs and cannot be performed incrementally in the network.
- **Complexity**: medium - the internal blockchain representation is altered and thus state corruption is possible.
- **Risk**: medium - `v2.0` is not backward compatible with `v1.0`; thus a downgrade is not possible.

[[toc]]

## New Features

### Dynamic Fees 

Most noticeable for end users is the addition of dynamic fees enabling delegates set their own fees for different transaction types. Users have the option to modify and pay fees they are comfortable with for sending transactions.

### Plugin System 

ARK is the first blockchain protocol released that allows you to quickly develop customized modules or plugins, to leverage the power of blockchain. The majority of ARK’s processes have been decoupled, modularized and developed as plugins. Only a few lines of code are required to add or remove new plugins to the system. Our goal of developing the ‘WordPress of blockchains’ has been realized. You can now develop your plugins and easily include them into your blockchain.

### Increased TPS (Transactions per Second) and TPB (Transactions per Block)

Transactions that can be included in a single block are increased from 50 to 150. The total increase in TPS is threefold from 6.25 to 18.75. This is not a TPS limit and can be easily raised in the future. Currently, this level of throughput is more than adequate. For BridgeChains, this value is completely customizable.

### New API 

A much more powerful API provides additional endpoints, is much more stable and follows the latest API standards, giving developers more options to get necessary information and interact with ARK’s blockchain.

### Webhook Support 

Webhooks allow applications to provide other applications with real-time information. A Webhook delivers data immediately as it happens as opposed to a typical API where polling must occur very frequently and inefficiently to get real-time data.

### Improved transaction pool management 

A newly developed transaction pool (transactions are kept in this pool before inclusion in the blockchain) is leveraging the power of memory and SQLite, providing superior stability, reliability and a foundation for future optimizations.

### Improved Verification Systems 

The legacy code has multiple drawbacks with how blocks and transactions are verified and included in the blockchain. The new Core verifies database integrity at the start of each node process, checking its validity and continuing with much-improved efficiency and handling. These actions also bring additional security to ARK, and we all know how important that is for blockchain projects.

### Speedier Rebuilds & Synchronizations 

Starting your node from block 0 with the new system is much faster. Previously, rebuilding from 0 to the current block height (~ 6,450,000 blocks) required around 50 hours. ARK Core v2 can do it in approximately 12 hours (depends on the server specifications and overall network state). As a result, synchronizing becomes much faster when stopping and starting the node process, or when rebuilding from a snapshot.

### Improved Snapshot CLI

The old code was very dependent on the ARK team for snapshots when building or rebuilding a node. An all new local snapshot system has been developed allowing node operators to use their copies of the database when needed. When starting a new node or rebuilding a node due to errors, local copies will allow for fast and safe synchronization and will reduce dependence on the ARK team. This development brings broader decentralization to the ARK ecosystem and is a much safer and faster way for nodes to recover in case of emergencies.

## Breaking Changes

- **External APIs**: all software relying on the `v1` APIs should upgrade as soon as possible.
- **Snapshots**: Existing backups of the ARK Blockchain cannot be directly imported by `v2`.
- **Database Schema**: `v2` alters the blockchain representation; thus scripts directly querying the SQL backend will no longer work.

## Libraries

All SDKs have been updated to reflect the change to `v2`. The structure of each SDK has been standardized, by splitting the cryptography and API client into separate libraries.

| Language | Client                                                         | Crypto                                                         |
| -------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| Java     | [java-client](https://github.com/ARKEcosystem/java-client)     | [java-crypto](https://github.com/ARKEcosystem/java-crypto)     |
| .NET     | [dotnet-client](https://github.com/ARKEcosystem/dotnet-client) | [dotnet-crypto](https://github.com/ARKEcosystem/dotnet-crypto) |
| PHP      | [php-client](https://github.com/ARKEcosystem/php-client)       | [php-crypto](https://github.com/ARKEcosystem/php-crypto)       |
| Python   | [python-client](https://github.com/ARKEcosystem/python-client) | [python-crypto](https://github.com/ARKEcosystem/python-client) |
| Golang   | [go-client](https://github.com/ARKEcosystem/go-client)         | [go-crypto](https://github.com/ARKEcosystem/go-crypto)         |
| CPP      | [cpp-client](https://github.com/ARKEcosystem/cpp-client)       | [crypto-client](https://github.com/ARKEcosystem/cpp-crypto)    |
| Ruby     | [ruby-client](https://github.com/ARKEcosystem/ruby-client)     | [ruby-crypto](https://github.com/ARKEcosystem/ruby-crypto)     |
| Swift    | [swift-client](https://github.com/ARKEcosystem/swift-client)   | [swift-crypto](https://github.com/ARKEcosystem/swift-crypto)   |
| Rust     | [rust-client](https://github.com/ARKEcosystem/rust-client)     | [rust-crypto](https://github.com/ARKEcosystem/rust-crypto)     |
| Elixir   | [elixir-client](https://github.com/ARKEcosystem/elixir-client) | [elixir-crypto](https://github.com/ARKEcosystem/elixir-crypto) |

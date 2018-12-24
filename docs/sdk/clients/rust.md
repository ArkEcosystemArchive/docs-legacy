---
title: "Rust"
---

# Rust

[[toc]]

## Rust Installation

Rust can be installed by following [this guide](https://www.rust-lang.org/install.html)

## Installation

Add the following to your Cargo.toml:

```rust
[dependencies]
arkecosystem-client = {git = "https://github.com/ArkEcosystem/rust-client", branch = "master" }
```

## Development setup

If you want to contribute to the code of this package execute the following commands

1) Fork the [package](https://github.com/ArkEcosystem/rust-client)

2) Clone your forked repository

```bash
$ git clone https://github.com/<githubusername>/rust-client
```

3) Next, move into the fresh cloned directory

```bash
$ cd rust-client
```

4) Install the dependencies

```bash
$ cargo build
```

5) Dependencies are now installed, you can now run the tests to see if everything is running like it should
```bash
$ cargo test
```

## Usage

### Initialization

```rust
extern crate arkecosystem_client;

use arkecosystem_client::connection::Connection;
// For V2
use arkecosystem_client::api::two::Two;

fn main() {
    // For v2
    let v2 = Connection::<Two>::new("http://my.ark.node:port/api/");
    // Parameters are passed as a Vec of string tuples (key, value).
    let params = Vec::<(String, String)>::new();
    // ...
}

```

### Blocks V2

```rust
// ...
let blocks = v2.blocks.all(&params);
println!("{:?}", blocks);

... > Ok(Response { meta: Some(Meta {
... > ...
... > })})
```

### Delegates V2

```rust
// ...
let delegates = v2.delegates.all(&params);
println!("{:?}", delegates);

... > Ok(Response { meta: Some(Meta {
... > ...
... > })})
```

### Node - V2

```rust
// ...
let node = v2.node.status().unwrap();
println!("{:?}", node);

... > Response { meta
... > ...
... > }
```

### Peers - V2

```rust
// ...
let peers = v2.peers.all(&params);
println!("{:?}", peers);

... > Ok(Response { meta: Some(Meta {
... > ...
... > })})
```

### Transactions - V2

```rust
// ...
let transactions = v2.transactions.all(&params).unwrap();
println!("{:?}", transactions);

... > Ok(Response { meta: Some(Meta {
... > ...
... > })})
```

### Votes - V2

```rust
// ...
let votes = v2.votes.all(&params).unwrap();
println!("{:?}", votes);

... > Ok(Response { meta: Some(Meta {
... > ...
... > })})
```

### Wallets - V2

```rust
// ...
let wallets = v2.wallets.all(&params).unwrap();
println!("{:?}", wallets);

... > Ok(Response { meta: Some(Meta {
... > ...
... > })})
```

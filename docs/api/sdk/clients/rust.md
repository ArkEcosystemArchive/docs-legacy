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

## Usage

### Initialization

```rust
extern crate arkecosystem_client;

// Both V1 & V2
use arkecosystem_client::connection::Connection;
// For V1
use arkecosystem_client::api::one::One;
// For V2
use arkecosystem_client::api::two::Two;

fn main() {
    // For v1
    let v1 = Connection::<One>::new("http://my.ark.node:port/api/");
    // For v2
    let v2 = Connection::<Two>::new("http://my.ark.node:port/api/");
    // Parameters are passed as a Vec of string tuples (key, value).
    let params = Vec::<(String, String)>::new();
    // ...
}

```

### Accounts - V1

```rust
// ...
let balance = v1.accounts.balance("AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv".to_owned());
println!("{:?}", balance);

... > Ok(Object({
... > ...
... > }))
```


### Blocks V1 and V2

```rust
// ...
let blocks = v1.blocks.all(vec![("", "")]);
println!("{:?}", blocks);

... > Ok(Object({
... > ...
... > }))
```

```rust
// ...
let blocks = v2.blocks.all(&params);
println!("{:?}", blocks);

... > Ok(Response { meta: Some(Meta {
... > ...
... > })})
```

### Delegates V1 and V2

```rust
// ...
let delegates = v1.delegates.all(vec![("", "")]);
println!("{:?}", delegates);

... > Ok(Object({
... > ...
... > }))
```

```rust
// ...
let blocks = v2.delegates.all(&params);
println!("{:?}", blocks);

... > Ok(Response { meta: Some(Meta {
... > ...
... > })})
```

### Loader - V1

```rust
// ...
let loader = v1.loader.status();
println!("{:?}", loader);

... > Ok(Object({
... > ...
... > }))
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

### Peers - V1 and V2

```rust
// ...
let peers = v1.peers.all(vec![("", "")]);
println!("{:?}", peers);

... > Ok(Object({
... > ...
... > }))
```

```rust
// ...
let peers = v2.peers.all(&params);
println!("{:?}", peers);

... > Ok(Response { meta: Some(Meta {
... > ...
... > })})
```

### Signatures - V1 

```rust
// ...
let signatures = v1.signatures.fee();
println!("{:?}", signatures);

... > Ok(Object({
... > ...
... > }))
```

### Transactions - V1 and V2

```rust
// ...
let transactions = v1.transactions.all(vec![("", "")]);
println!("{:?}", transactions);

... > Ok(Object({
... > ...
... > }))
```

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
println!("{:?}", votes);

... > Ok(Response { meta: Some(Meta {
... > ...
... > })})
```

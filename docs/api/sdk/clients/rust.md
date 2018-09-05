---
title: "Rust"
---

# Rust

[[toc]]

## Installation

Add the following to your `Cargo.toml`:
```ini
[dependencies]
arkecosystem-client = {git = "https://github.com/ArkEcosystem/rust-client", branch = "master" }
```

## Basics

### Example for V1
```rust
use arkecosystem_client::api::One;
use arkecosystem_client::Connection;

let v1 = Connection::<One>::new("http://my.ark.node:port/api/");
let balance = v1.accounts.balance("DQ7VAW7u171hwDW75R1BqfHbA9yiKRCBSh");
println!("{:?}", balance);
```

### Example for V2

```rust
use arkecosystem_client::api::Two;
use arkecosystem_client::Connection;

let v2 = Connection::<Two>::new("http://my.ark.node:port/api/");

// Parameters are passed as a Vec of string tuples (key, value).
let params = Vec::<(String, String)>::new();
let delegates = v2.delegates.all(&params);
println!("{:?}", delegates);
```

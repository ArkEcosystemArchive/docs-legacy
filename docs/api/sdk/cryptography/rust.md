---
title: "Rust"
---

# Rust

[[toc]]

## Installation

Add the following to your `Cargo.toml`:
```ini
[dependencies]
arkecosystem-crypto = {git = "https://github.com/ArkEcosystem/rust-crypto", branch = "develop" }
```

## Transactions

### Sign

```rust
extern crate arkecosystem_crypto;
use arkecosystem_crypto::transactions::builder;

let transaction = builder::build_transfer(
    "this is a top secret passphrase",
    None,
    "DGihocTkwDygiFvmg6aG8jThYTic47GzU9",
    10_000_000,
    "This is a transaction from Rust",
).unwrap();

println!("Verified: {:?}", transaction.verify());
println!("{:?}", transaction.to_json().unwrap());
```

### Serialize (AIP11)

```rust
use arkecosystem_crypto::transactions;

println!("{:?}", transactions::serialize(&transaction));
```

### Deserialize (AIP11)

```rust
use arkecosystem_crypto::transactions;

let transaction = transactions::deserialize(&serialized_transaction);

println!("{:?}", transaction.id);
```

## Message

### Sign

```rust
use arkecosystem_crypto::utils::Message;

let message = Message::sign("Hello World", "this is a top secret passphrase");

println!("{:?}", message);
```

### Verify

```rust
use arkecosystem_crypto::utils::Message;

let message = Message::new(
    "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192",
    "304402200fb4adddd1f1d652b544ea6ab62828a0a65b712ed447e2538db0caebfa68929e02205ecb2e1c63b29879c2ecf1255db506d671c8b3fa6017f67cfd1bf07e6edd1cc8",
    "Hello World"
);

println!("Valid: {:?}", message.verify());
```

## Identities

### Address

#### Get an address from a passphrase
```rust
use arkecosystem_crypto::identities::address;
address::from_passphrase("this is a top secret passphrase", None);
```

#### Get an address from a public key struct
```rust
use arkecosystem_crypto::identities::{address, public_key};
let public_key = public_key::from_hex("034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192").unwrap();
address::from_public_key(&public_key, None);
```

#### Get an address from a private key struct
```rust
use arkecosystem_crypto::identities::{address, private_key};
let private_key = private_key::from_hex("d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712").unwrap();
address::from_private_key(&private_key, None);
```

#### Validate an address
```rust
use arkecosystem_crypto::identities::address;
address::validate("D61mfSggzbvQgTUe6JhYKH2doHaqJ3Dyib", None);
```

### Private Key

#### Get a private key struct from a passphrase
```rust
use arkecosystem_crypto::identities::private_key;
private_key::from_passphrase("this is a top secret passphrase").unwrap();
```

#### Get a private key struct from hex
```rust
use arkecosystem_crypto::identities::private_key;
private_key::from_hex("d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712").unwrap();
```

### Public Key

#### Get a public key struct from a passphrase
```rust
use arkecosystem_crypto::identities::public_key;
public_key::from_passphrase("this is a top secret passphrase").unwrap();
```

#### Get a public key struct from hex
```rust
use arkecosystem_crypto::identities::public_key;
public_key::from_hex("034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192").unwrap();
```

### WIF

#### Get a WIF from a passphrase
```rust
use arkecosystem_crypto::identities::wif;
wif::from_passphrase("this is a top secret passphrase").unwrap();
```

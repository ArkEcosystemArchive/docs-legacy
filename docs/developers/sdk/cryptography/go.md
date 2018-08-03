---
title: "Go"
---

# Go

[[toc]]

## Installation

```bash
go get github.com/ArkEcosystem/go-crypto/crypto
```

### Include

```go
package main

import (
    ark_crypto "github.com/ArkEcosystem/go-crypto/crypto"
    "github.com/davecgh/go-spew/spew"
)
```

## Transactions

### Sign

```go
transaction := ark_crypto.BuildTransfer("address", uint64(amount), "Hello World", "top secret", "second top secret")

spew.Dump(transaction)
```

### Serialize (AIP11)

```go
transaction := ark_crypto.DeserializeTransaction("serialized_transaction")

serialized := ark_crypto.SerializeTransaction(transaction)

spew.Dump(serialized)
```

### Deserialize (AIP11)

```go
transaction := ark_crypto.DeserializeTransaction("serialized_transaction")

spew.Dump(transaction)
```

## Message

### Sign

```go
message, _ := ark_crypto.SignMessage("Hello World", "top secret")

spew.Dump(message)
```

### Verify

```go
message, _ := ark_crypto.SignMessage("Hello World", "top secret")

spew.Dump(message.Verify())
```

## Identities

### Address

#### Get an address from a passphrase
```go
address, _ := ark_crypto.AddressFromPassphrase('passphrase')

spew.Dump(address)
```

#### Get an address from a public key
```go
publicKey, _ := ark_crypto.PublicKeyFromPassphrase('passphrase')

spew.Dump(publicKey.ToAddress())
```

#### Get an address from a private key
```go
privateKey, _ := ark_crypto.PrivateKeyFromPassphrase('passphrase')

spew.Dump(privateKey.ToAddress())
```

#### Validate an address
```go
spew.Dump(ValidateAddress(fixture.Data.Address))
```

### Private Key

#### Get a private key from a passphrase
```go
privateKey, _ := ark_crypto.PrivateKeyFromPassphrase('passphrase')

spew.Dump(privateKey)
```

#### Get a private key instance object from hex
```go
privateKey, _ := ark_crypto.PrivateKeyFromHex('private_key_as_hex')

spew.Dump(privateKey)
```

### Public Key

#### Get a public key from a passphrase
```go
publicKey, _ := ark_crypto.PublicKeyFromPassphrase('passphrase')

spew.Dump(publicKey)
```

#### Get a public key instance object from hex
```go
publicKey, _ := ark_crypto.PublicKeyFromHex('public_key_as_hex')

spew.Dump(publicKey)
```

### WIF

#### Get a WIF from a passphrase
```go
privateKey, _ := ark_crypto.PrivateKeyFromPassphrase('passphrase')

spew.Dump(privateKey.ToWif())
```

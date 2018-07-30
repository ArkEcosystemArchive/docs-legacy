---
title: "Go"
---

# Go

[[toc]]

## Installation

```bash
go get github.com/ArkEcosystem/go-crypto/crypto
```

## Creating a Transaction

```go
package main

import (
    ark_crypto "github.com/ArkEcosystem/go-crypto/crypto"
    "github.com/davecgh/go-spew/spew"
)

func main() {
    transaction := ark_crypto.BuildTransfer("address", uint64(amount), "Hello World", "top secret", "second top secret")

    spew.Dump(transaction)
}
```

## Serializing a Transaction (AIP11)

```go
package main

import (
    ark_crypto "github.com/ArkEcosystem/go-crypto/crypto"
    "github.com/davecgh/go-spew/spew"
)

func main() {
    transaction := ark_crypto.DeserializeTransaction("serialized_transaction")

    serialized := ark_crypto.SerializeTransaction(transaction)

    spew.Dump(serialized)
}
```

## Deserializing a Transaction (AIP11)

```go
package main

import (
    ark_crypto "github.com/ArkEcosystem/go-crypto/crypto"
    "github.com/davecgh/go-spew/spew"
)

func main() {
    transaction := ark_crypto.DeserializeTransaction("serialized_transaction")

    spew.Dump(transaction)
}
```

## Signing a Message

```go
package main

import (
    ark_crypto "github.com/ArkEcosystem/go-crypto/crypto"
    "github.com/davecgh/go-spew/spew"
)

func main() {
    message, _ := ark_crypto.SignMessage("Hello World", "top secret")

    spew.Dump(message)
}
```

## Verifying a Message

```go
package main

import (
    ark_crypto "github.com/ArkEcosystem/go-crypto/crypto"
    "github.com/davecgh/go-spew/spew"
)

func main() {
    message, _ := ark_crypto.SignMessage("Hello World", "top secret")

    spew.Dump(message.Verify())
}
```

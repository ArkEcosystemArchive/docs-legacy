---
title: "Go"
---

# Go

[[toc]]

## Installation

```bash
go get github.com/ArkEcosystem/go-crypto/crypto
```

## Transactions

### Sign

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

### Serialize (AIP11)

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

### Deserialize (AIP11)

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

## Message

### Sign

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

### Verify

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

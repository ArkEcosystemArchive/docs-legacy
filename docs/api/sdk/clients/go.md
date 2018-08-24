---
title: "Go"
---

# Go

[[toc]]

## Installation

```bash
// If you are using the v1 API
go get github.com/ArkEcosystem/go-client/client/one

// If you are using the v2 API
go get github.com/ArkEcosystem/go-client/client/two
```

## Basics

```go
import (
    "context"
  "github.com/ArkEcosystem/go-client/client/one"
)

query := &one.BlocksQuery{Limit: 1}
responseStruct, response, err := client.Blocks.List(context.Background(), query)

spew.Dump(len(responseStruct.Blocks))
```

---
title: "Go"
---

# Go

[[toc]]

## Go Installation

Go can be installed by following [this guide](https://golang.org/doc/install)

## Installation

The package can be installed by using the following commands in your terminal :

If you are using the v2 API
```
go get github.com/ArkEcosystem/go-client/client/two
```

## Usage

### Initialization

```go
package main

import (
	"context"
	// For V2
	"github.com/ArkEcosystem/go-client/client/two"
	"github.com/davecgh/go-spew/spew"
	"net/url"
)

func main() {
    // For V2
    client := two.NewClient(nil)

    // You can specify the URL of your choice otherwise a default one is provided
    url, _ := url.Parse("http://my.node.ip:port/api/")
    client.BaseURL = url
    // And then start to work with it
    // ...
}
```

### Blocks V2

```go
func main() {
	// ...
	query := &two.Pagination{Limit: 10}
	responseStruct, _, _ := client.Blocks.List(context.Background(), query)

	spew.Dump(responseStruct)
}

... > (*two.Blocks)(0xc0001e0000)({
... >  Meta: (two.Meta) {
... > ...
... > }})
```

### Delegates V2

```go
func main() {
	// ...
	query := &two.Pagination{Limit: 10}
	responseStruct, _, _ := client.Delegates.List(context.Background(), query)

	spew.Dump(responseStruct)
}

... > (*two.Delegates)(0xc0001c6000)({
... >  Meta: (two.Meta) {
... > ...
... > }})
```

### Node - V2

```go
func main() {
	// ...
	query := &two.Pagination{Limit: 10}
	responseStruct, _, _ := client.Node.Status(context.Background())

	spew.Dump(responseStruct)
}

... > (*two.GetNodeStatus)(0xc0001ba000)({
... >  Meta: (two.NodeStatus) {
... > ...
... > }})
```

### Peers - V2

```go
func main() {
	// ...
	query := &two.Pagination{Limit: 10}
	responseStruct, _, _ := client.Peers.List(context.Background(), query)

	spew.Dump(responseStruct)
}

... > (*two.Peers)(0xc0001ce000)({
... >  Meta: (two.Meta) {
... > ...
... > }})
```

### Transactions - V2

```go
func main() {
	// ...
	query := &two.Pagination{Limit: 10}
	responseStruct, _, _ := client.Transactions.List(context.Background(), query)

	spew.Dump(responseStruct)
}

... > (*two.Transactions)(0xc00010c680)({
... >  Meta: (two.Meta) {
... > ...
... > }})
```

### Votes - V2

```go
func main() {
    // ...
	query := &two.Pagination{Limit: 10}
	responseStruct, _, _ := client.Votes.List(context.Background(), query)

	spew.Dump(responseStruct)
}

... > (*two.Transactions)(0xc0000ee300)({
... >  Meta: (two.Meta) {
... > ...
... > }})
```

### Wallets - V2

```go
func main() {
    // ...
	query := &two.Pagination{Limit: 10}
	responseStruct, _, _ := client.Wallets.List(context.Background(), query)

	spew.Dump(responseStruct)
}

... > (*two.Wallets)(0xc0000ee380)({
... >  Meta: (two.Meta) {
... > ...
... > }})
```

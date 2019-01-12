---
title: "Go"
---

# Go

[[toc]]

## Go Installation

Go can be installed by following [this guide](https://golang.org/doc/install)

## Installation

The package can be installed by using the following commands in your terminal :

```
go get github.com/ArkEcosystem/go-client/client
```

## Development setup

If you want to contribute to the code of this package execute the following commands

1) Fork the [package](https://github.com/ArkEcosystem/go-client)

2) Clone your forked repository

```bash
$ git clone https://github.com/<githubusername>/go-client
```

3) Next, move into the fresh cloned directory

```bash
$ cd go-client
```

4) Install the dependencies

```bash
# -t will also fetch dependencies related to tests
$ go get -t ./...
```

5) Dependencies are now installed, you can now run the tests to see if everything is running like it should
```bash
$ go test ./...
```

## Usage

### Initialization

```go
package main

import (
	"context"
	arkClient "github.com/ArkEcosystem/go-client/client"
	"github.com/davecgh/go-spew/spew"
	"net/url"
)

func main() {
    // For V2
    client := arkClient.NewClient(nil)

    // You can specify the URL of your choice otherwise a default one is provided
    url, _ := url.Parse("http://my.node.ip:port/api/")
    client.BaseURL = url
    // And then start to work with it
    // ...
}
```

### Blocks

```go
func main() {
	// ...
	query := &arkClient.Pagination{Limit: 10}
	responseStruct, _, _ := client.Blocks.List(context.Background(), query)

	spew.Dump(responseStruct)
}

... > (*two.Blocks)(0xc0001e0000)({
... >  Meta: (two.Meta) {
... > ...
... > }})
```

### Delegates

```go
func main() {
	// ...
	query := &arkClient.Pagination{Limit: 10}
	responseStruct, _, _ := client.Delegates.List(context.Background(), query)

	spew.Dump(responseStruct)
}

... > (*two.Delegates)(0xc0001c6000)({
... >  Meta: (two.Meta) {
... > ...
... > }})
```

### Node

```go
func main() {
	// ...
	query := &arkClient.Pagination{Limit: 10}
	responseStruct, _, _ := client.Node.Status(context.Background())

	spew.Dump(responseStruct)
}

... > (*two.GetNodeStatus)(0xc0001ba000)({
... >  Meta: (two.NodeStatus) {
... > ...
... > }})
```

### Peers

```go
func main() {
	// ...
	query := &arkClient.Pagination{Limit: 10}
	responseStruct, _, _ := client.Peers.List(context.Background(), query)

	spew.Dump(responseStruct)
}

... > (*two.Peers)(0xc0001ce000)({
... >  Meta: (two.Meta) {
... > ...
... > }})
```

### Transactions

```go
func main() {
	// ...
	query := &arkClient.Pagination{Limit: 10}
	responseStruct, _, _ := client.Transactions.List(context.Background(), query)

	spew.Dump(responseStruct)
}

... > (*two.Transactions)(0xc00010c680)({
... >  Meta: (two.Meta) {
... > ...
... > }})
```

### Votes

```go
func main() {
    // ...
	query := &arkClient.Pagination{Limit: 10}
	responseStruct, _, _ := client.Votes.List(context.Background(), query)

	spew.Dump(responseStruct)
}

... > (*two.Transactions)(0xc0000ee300)({
... >  Meta: (two.Meta) {
... > ...
... > }})
```

### Wallets

```go
func main() {
    // ...
	query := &arkClient.Pagination{Limit: 10}
	responseStruct, _, _ := client.Wallets.List(context.Background(), query)

	spew.Dump(responseStruct)
}

... > (*two.Wallets)(0xc0000ee380)({
... >  Meta: (two.Meta) {
... > ...
... > }})
```

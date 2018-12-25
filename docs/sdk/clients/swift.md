---
title: "Swift"
---

# Swift

[[toc]]

## Requirements

* iOS 8.0+ / macOS 10.10+
* Xcode 9.0+
* Swift 4.0+

## Installation

### CocoaPods

[CocoaPods](https://cocoapods.org) is a dependency manager for Swift (and Objective-C) Cocoa Projects.
You can use it to integrate the Ark Swift Client in your project, by adding it to your `Podfile` as follows:

```
pod 'SwiftClient', :git => 'https://github.com/ArkEcosystem/swift-client.git', :tag => '1.0.0'
```

Afterwards, install it by running `pod install`.
You are then able to use it in your project by using `import SwiftClient`.

## Development setup

If you want to contribute to the code of this package execute the following commands

1) Fork the [package](https://github.com/ArkEcosystem/swift-client)

2) Clone your forked repository

```bash
$ git clone https://github.com/<githubusername>/swift-client
```

3) Next, move into the fresh cloned directory

```bash
$ cd swift-client/Client
```

4) Install the dependencies

For this you will first need to install [Carthage](https://github.com/Carthage/Carthage), which can be done easily with Homebrew: `brew install carthage`

```bash
$ carthage update
```

You will also need to install [Swiftlint](https://github.com/realm/SwiftLint) as an additional step, as that is used to lint our code.
The easiest way to install this is by using Homebrew: `brew install swiftlint`.

5) Dependencies are now installed, you can now run the tests to see if everything is running like it should by opening the `Client.xcodeproj` in Xcode.

## Usage

The Swift Client is meant to be used for creating request to an API endpoint.
For cryptography related functionality, such as generating addresses or creating transactions, please see the [Swift Crypto](https://github.com/ArkEcosystem/swift-crypto) repository.

### Connection

Before making a request, you should create a `Connection`.
A `Connection` expects a `host`, which is an url on which the API can be reached,
An example `Connection` that connects to a node, would be created as follows:

```swift
let conn = Connection(host: "http://0.0.0.0:4003/api") // Mind the '/api' after the url, no trailing '/'!
```

When making requests to an `Accounts` endpoint, the connection would be used to create the `http://0.0.0.0:4003/api/accounts` url.

### ConnectionManager

There is also a `ConnectionManager` available that you can use to keep track of multiple created `Connection`s.
If you would like to have a `mainnet` and `devnet` connection, you can add them both to the manager in the following way:

```swift
// Create the connections you want to be able to use
let mainConn = Connection(host: "mainnetHost:4003/api")
let devConn = Connection(host: "devnetHost:4003/api")

// Create a ConnectionManager instance
let manager = ConnectionManager()

// Add the connections to the manager
manager.connect(to: mainConn, withName: "main")
manager.connect(to: devConn, withName: "dev")

// You can now retrieve the connection you want and use it for API requests
let conn = try manager.connection("main")
```

### Making an API Request

#### Initializing

```swift
// Don't forget to import SwiftClient in your file

// Create connection
let conn = Connection(host: "host:4003/api")

// Use connection to access an endpoint, e.g. Blocks
let blocks = Blocks(connection: conn)
```

#### Using an endpoint

The below examples show how you can perform a request.

##### Blocks

```swift
let blocks = Blocks(connection: conn)

// Perform an API call, note that requests are async and returned in a closure
blocks.all { (response) in
    // Do something with the response
    // Note that response is of type [String: Any]
}

// Getting the transactions of a specific block can for example be done as follows:
blocks.transactions(ofBlock: "297551546576616827") { (response) in
    print(response)
}
```

##### Delegates

```swift
let delegates = Delegates(connection: conn)

delegates.all { (response) in
    print(response)
}
```

##### Node

```swift
let node = Node(connection: conn)

node.configuration { (response) in
    print(response)
}
```

##### Peers

```swift
let peers = Peers(connection: conn)

peers.all { (response) in
    print(response)
}
```

##### Transactions

```swift
let transactions = Transactions(connection: conn)

transactions.all { (response) in
    print(response)
}
```

##### Votes

```swift
let votes = Votes(connection: conn)

votes.all { (response) in
    print(response)
}
```

##### Wallets

```swift
let wallets = Wallets(connection: conn)
        
wallets.all { (response) in
    print(response)
}
```

#### Additional information

By default, the requests are performed with [Alamofire](https://github.com/Alamofire/Alamofire) and the response is given to the callback function as `[String: Any]`.
The functions that are responsible for this can be found in `Utils.swift`.
You can easily override this default functionality by defining your own `handleApiGet` and `handleApiPost` functions and passing them to the endpoint object (e.g. `Blocks`.
An example of how this is done can be found by looking at the tests, e.g. those of [Blocks](https://github.com/ArkEcosystem/swift-client/blob/master/Client/ClientTests/Api/Endpoints/BlocksTest.swift), as a mocked api handler is used for them.

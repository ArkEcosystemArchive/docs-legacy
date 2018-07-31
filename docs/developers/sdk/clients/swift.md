---
title: "Swift"
---

# Swift

::: warning
This package is still under development. This page will get more content as it evolves more. In the meantime you can view its source on [Github](https://github.com/ArkEcosystem/swift-client/).
:::

[[toc]]

## Requirements

* iOS 8.0+ / macOS 10.10+
* Xcode 9.0+
* Swift 4.0+

## Installation

### Carthage

[Carthage](https://github.com/Carthage/Carthage) is a simple dependency manager that provide you with a binary framework.
If you are using Carthage, you can integrate the Ark Swift Client in your project by specifying it in your `Cartfile`:

```
	github "ArkEcosystem/swift-client" ~> 0.1.0
``` 

Afterwards, run `Carthage update` to build the framework.
You can then drag the generated `.framework` file into your project.

### CocoaPods

[CocoaPods](https://cocoapods.org) is a dependency manager for Swift (and Objective-C) Cocoa Projects.
You can use it to integrate the Ark Swift Client in your project, by adding it to your `Podfile` as follows:

```
	pod 'SwiftClient', :git => 'https://github.com/ArkEcosystem/swift-client.git', :tag => '0.1.0'
```

Afterwards, install it by running `pod install`.
You are then able to use it in your project by using `import SwiftClient`.

### Build from source

TODO

## Usage

The Swift Client is meant to be used for creating request to an API endpoint.
For cryptography related functionality, such as generating addresses or creating transactions, please see the [Swift Crypto](https://github.com/ArkEcosystem/swift-crypto) repository.

### Connection

Before making a request, you should create a `Connection`.
A `Connection` expects a `host`, which is an url on which the API can be reached, and a network `version`, which specifies whether we are using v1 or v2.
An example `Connection` that connects to a v2 API of a node, would be created as follows:

```swift
	let conn = Connection(host: "http://0.0.0.0:4003/api", version: 2) // Mind the '/api' after the url
```

When making requests to an `Accounts` endpoint, the connection would be used to create the `http://0.0.0.0:4003/api/accounts` url.

### ConnectionManager

There is also a `ConnectionManager` available that you can use to keep track of multiple created `Connection`s.
If you would like to have a `mainnet` and `devnet` connection, you can add them both to the manager in the following way:

```swift
	// Create the connections you want to be able to use
	let mainConn = Connection(host: "mainnetHost:4003/api", version: 2)
    let devConn = Connection(host: "devnetHost:4003/api", version: 2)

    // Create a ConnectionManager instance
    let manager = ConnectionManager()

    // Add the connections to the manager
    manager.connect(to: mainConn, withName: "main")
	manager.connect(to: devConn, withName: "dev")

	// You can now retrieve the connection you want and use it for API requests
	let conn = try manager.connection("main")
```

### Making an API Request

* TODO
	* example of creating an api request (connection + endpoint + performing request + example response)
	* requests are async, and are returned in a closure
	* note that you can override the get / post handling with your own functions, if wanted. Specify the required parameters for that.

```swift
	let blocks = Two.Blocks(connection: connection)
```

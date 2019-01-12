---
title: "Swift"
---

# Swift

[[toc]]

## Requirements

* iOS 10.0+ / macOS 10.11+
* Xcode 9.0+
* Swift 4.0+

## Installation

### CocoaPods

[CocoaPods](https://cocoapods.org) is a dependency manager for Swift (and Objective-C) Cocoa Projects.
You can use it to integrate the Ark Swift Crypto in your project, by adding it to your `Podfile` as follows:

```
pod 'SwiftCrypto', :git => 'https://github.com/ArkEcosystem/swift-crypto.git', :tag => '0.1.0'
```

Afterwards, install it by running `pod install`.
You are then able to use it in your project by using `import SwiftCrypto`.

## Development setup

If you want to contribute to the code of this package execute the following commands

1) Fork the [package](https://github.com/ArkEcosystem/swift-crypto)

2) Clone your forked repository

```bash
$ git clone https://github.com/<githubusername>/swift-crypto
```

3) Next, move into the fresh cloned directory

```bash
$ cd swift-crypto/Crypto
```

4) Install the dependencies

```bash
$ pod install
```

Installing the dependency (BitcointKit) of this SDK will require a lot of time. So after running `pod install` it might take up to 10 minutes to install the BitcoinKit dependency.
This is due to the crypto dependencies it relies on, like secp256k, that are compiled from scratch during the install.
Don't be alarmed when it looks like the installation got stuck, it's just the underlying dependencies taking their time.

You will also need to install [Swiftlint](https://github.com/realm/SwiftLint) as an additional step, as that is used to lint our code.
The easiest way to install this is by using Homebrew: `brew install swiftlint`.

5) Dependencies are now installed, you can now run the tests to see if everything is running like it should by opening the `Crypto.xcworkspace` in Xcode.

## Transactions

### Sign

```swift
// Creating a transaction automatically signs it with the provides passphrase(s)
let transfer = ArkBuilder.buildTransfer("secret passphrase",
                                                secondPassphrase: nil,
                                                to: "DBk4cPYpqp7EBcvkstVDpyX7RQJNHxpMg8",
                                                amount: 10000000,
                                                vendorField: "this is a tx from Swift")
print(transfer.verify())
```

### Serialize (AIP11)

```swift
let serialized = ArkSerializer.serialize(transaction: transaction)

print(serialized)
```

### Deserialize (AIP11)

```swift
let deserialized = ArkDeserializer.deserialize(serialized: serialized)

print(deserialized)
```

## Message

### Sign

```swift
let message = ArkMessage.sign(message: "Hello World", passphrase: "this is a top secret passphrase")

print(message?.publicKey)
print(message?.signature)
print(message?.message)
```

### Verify

```swift
// Create a message by providing the required info, or sign one with the method shown above
let message = ArkMessage(publicKey: "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192",
                         signature: "304402200fb4adddd1f1d652b544ea6ab62828a0a65b712ed447e2538db0caebfa68929e02205ecb2e1c63b29879c2ecf1255db506d671c8b3fa6017f67cfd1bf07e6edd1cc8",
                         message: "Hello World")

print(message.verify())
```

## Identities

### Address

#### Get an address from a passphrase
```swift
let address = ArkAddress.from(passphrase: "this is a top secret passphrase")

print(address)
```

#### Get an address from a public key
```swift
let address = ArkAddress.from(publicKey: "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192")

print(address)
```

#### Get an address from a private key
```swift
let address = ArkAddress.from(privateKey: ArkPrivateKey.from(hex: "d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712"))

print(address)
```

#### Validate an address
```swift
print(ArkAddress.validate(address: "D61mfSggzbvQgTUe6JhYKH2doHaqJ3Dyib"))
```

### Private Key

#### Get a private key from a passphrase
```swift
let privateKey = ArkPrivateKey.from(passphrase: "this is a top secret passphrase")

print(privateKey.raw.hex)
```

#### Get a private key instance object from hex
```swift
let privateKey = ArkPrivateKey.from(hex: "d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712")

print(privateKey.raw.hex)
```

### Public Key

#### Get a public key from a passphrase
```swift
let publicKey = ArkPublicKey.from(passphrase: "this is a top secret passphrase")

print(publicKey.raw.hex)
```

#### Get a public key instance object from hex
```swift
let publicKey = ArkPublicKey.from(hex: "d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712")

print(publicKey.raw.hex)
```

### WIF

#### Get a WIF from a passphrase
```swift
let wif = WIF.from(passphrase: "this is a top secret passphrase")

print(wif)
```

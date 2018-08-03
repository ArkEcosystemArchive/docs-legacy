---
title: ".NET"
---

# .NET

[[toc]]

## Installation

### Package Manager

```bash
Install-Package ArkEcosystem.Crypto -Version 0.1.0
```

### .NET CLI

```bash
dotnet add package ArkEcosystem.Crypto --version 0.1.0
```

### Paket CLI

```bash
paket add ArkEcosystem.Crypto --version 0.1.0
```

## Transactions

### Sign

```csharp
using ArkEcosystem.Crypto;

var transaction = Crypto.Builder.Transfer.Create(
  "AXoXnFi4z1Z6aFvjEYkDVCtBGW2PaRiM25",
  133380000000,
  "This is a transaction from .NET",
  "This is a top secret passphrase"
);

Console.WriteLine(transaction.Verify());
```

### Serialize (AIP11)

```csharp
using ArkEcosystem.Crypto;

var transaction = new Serializer(transactionObject).Serialize();

Console.WriteLine(transaction);
```

### Deserialize (AIP11)

```csharp
using ArkEcosystem.Crypto;

var transaction = new Deserializer(serializedTransaction).Deserialize();

Console.WriteLine(transaction.Id);
```

## Message

### Sign

```csharp
using ArkEcosystem.Crypto;

var message = Message.Sign("Hello World", "passphrase");

Console.WriteLine(message.publicKey);
Console.WriteLine(message.signature);
Console.WriteLine(message.message);
```

### Verify

```csharp
using ArkEcosystem.Crypto;

var message = Message.Sign("Hello World", "passphrase");

Console.WriteLine(message.Verify());
```

## Identities

### Address

#### Get an address from a passphrase
```csharp
using ArkEcosystem.Crypto;

Identities.Address.FromPassphrase('this is a top secret passphrase');
```

#### Get an address from a public key
```csharp
using ArkEcosystem.Crypto;

Identities.Address.FromPublicKey('034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192');
```

#### Get an address from a private key
```csharp
using ArkEcosystem.Crypto;

Identities.Address.FromPrivateKey('d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712');
```

#### Validate an address
```csharp
using ArkEcosystem.Crypto;

Identities.Address.Validate('D61mfSggzbvQgTUe6JhYKH2doHaqJ3Dyib');
```

### Private Key

#### Get a private key from a passphrase
```csharp
using ArkEcosystem.Crypto;

Identities.PrivateKey.FromPassphrase('this is a top secret passphrase');
```

#### Get a private key instance object from hex
```csharp
using ArkEcosystem.Crypto;

Identities.PrivateKey.FromHex('d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712');
```

### Public Key

#### Get a public key from a passphrase
```csharp
using ArkEcosystem.Crypto;

Identities.PublicKey.FromPassphrase('this is a top secret passphrase');
```

#### Get a public key instance object from hex
```csharp
using ArkEcosystem.Crypto;

Identities.PublicKey.FromHex('034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192');
```

### WIF

#### Get a WIF from a passphrase
```csharp
using ArkEcosystem.Crypto;

Identities.WIF.FromPassphrase('this is a top secret passphrase')
```

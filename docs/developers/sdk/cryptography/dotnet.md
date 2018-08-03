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

Identities.Address.FromPassphrase('passphrase');
```

#### Get an address from a public key
```csharp
using ArkEcosystem.Crypto;

Identities.Address.FromPublicKey(publicKey);
```

#### Get an address from a private key
```csharp
using ArkEcosystem.Crypto;

Identities.Address.FromPrivateKey(privateKey);
```

#### Validate an address
```csharp
using ArkEcosystem.Crypto;

Identities.Address.Validate('address');
```

### Private Key

#### Get a private key from a passphrase
```csharp
using ArkEcosystem.Crypto;

Identities.PrivateKey.FromPassphrase('passphrase');
```

#### Get a private key instance object from hex
```csharp
using ArkEcosystem.Crypto;

Identities.PrivateKey.FromHex('private_key_as_hex');
```

### Public Key

#### Get a public key from a passphrase
```csharp
using ArkEcosystem.Crypto;

Identities.PublicKey.FromPassphrase('passphrase');
```

#### Get a public key instance object from hex
```csharp
using ArkEcosystem.Crypto;

Identities.PublicKey.FromHex('public_key_as_hex');
```

### WIF

#### Get a WIF from a passphrase
```csharp
using ArkEcosystem.Crypto;

Identities.WIF.FromPassphrase('passphrase')
```

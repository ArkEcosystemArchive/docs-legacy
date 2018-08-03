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

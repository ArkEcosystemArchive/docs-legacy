---
title: ".NET"
---

# .NET

[[toc]]

## Installation

### Package Manager

```bash
Install-Package ArkEcosystem.Client -Version 0.2.1
```

### .NET CLI

```bash
dotnet add package ArkEcosystem.Client --version 0.2.1
```

### Paket CLI

```bash
paket add ArkEcosystem.Client --version 0.2.1
```

## Usage

## Connections

```csharp
using ArkEcosystem.Client;

ConnectionManager.Connect(new Connection<Two>("http://my-main.ark.node:port/api/"))
ConnectionManager.Connect(new Connection<Two>("http://my-backup.ark.node:port/api/", "backup"))

var response = null;

try {
    response = ConnectionManager.Connection("main").Api.Accounts.Balance("DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN");
} catch (Exception e) {
    response = ConnectionManager.Connection("backup").Api.Accounts.Balance("DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN");
}

if ((bool) response["success"]) {
    Console.WriteLine(response["balance"]);
} else {
    Console.WriteLine("Both the main and backup node did not respond.");
}
```

### Initialization

```csharp
using ArkEcosystem.Client;
// For V2
using ArkEcosystem.Client.API.Two;

static void Main(string[] args)
{
    // For V2
    var connection = new Connection<Two>("http://my.node.ip:port/api/");
    ...
}
```

### Blocks V2

```csharp
// ...
var response = connection.Api.Blocks.All();
Console.WriteLine(response);

... > ArkEcosystem.Client.API.Two.Response`1[System.Collections.Generic.List`1[ArkEcosystem.Client.API.Two.Models.Block]]
```

### Delegates V2

```csharp
// ...
var response = connection.Api.Delegates.All();
Console.WriteLine(response);

... > ArkEcosystem.Client.API.Two.Response`1[System.Collections.Generic.List`1[ArkEcosystem.Client.API.Two.Models.Delegates]]
```

### Node - V2

```csharp
// ...
var response = connection.Api.Node.Configuration();
Console.WriteLine(response);

... > ArkEcosystem.Client.API.Two.Response`1[ArkEcosystem.Client.API.Two.Models.NodeConfiguration]
```

### Peers - V2

```csharp
// ...
var response = connection.Api.Peers.All();
Console.WriteLine(response);

... > ArkEcosystem.Client.API.Two.Response`1[System.Collections.Generic.List`1[ArkEcosystem.Client.API.Two.Models.Peer]]
```

### Transactions - V2

```csharp
// ...
var response = connection.Api.Transactions.All();
Console.WriteLine(response);

... > ArkEcosystem.Client.API.Two.Response`1[System.Collections.Generic.List`1[ArkEcosystem.Client.API.Two.Models.Transaction]]
```

### Votes - V2

```csharp
// ...
var response = connection.Api.Votes.All();
Console.WriteLine(response);

... > ArkEcosystem.Client.API.Two.Response`1[System.Collections.Generic.List`1[ArkEcosystem.Client.API.Two.Models.Transaction]]
```

### Wallets - V2

```csharp
// ...
var response = connection.Api.Wallets.All();
Console.WriteLine(response);

... > ArkEcosystem.Client.API.Two.Response`1[System.Collections.Generic.List`1[ArkEcosystem.Client.API.Two.Models.Wallet]]
```

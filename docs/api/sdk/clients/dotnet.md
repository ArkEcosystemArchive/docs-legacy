---
title: ".NET"
---

# .NET

[[toc]]

## Installation

### Package Manager

```bash
Install-Package ArkEcosystem.Client -Version 0.1.0
```

### .NET CLI

```bash
dotnet add package ArkEcosystem.Client --version 0.1.0
```

### Paket CLI

```bash
paket add ArkEcosystem.Client --version 0.1.0
```

## Usage

## Connections

```csharp
using ArkEcosystem.Client;

ConnectionManager.Connect(new Connection<One>("http://my-main.ark.node:port/api/"))
ConnectionManager.Connect(new Connection<One>("http://my-backup.ark.node:port/api/", "backup"))

var response = null;

try {
    response = ConnectionManager.Connection("main").Api.Accounts.Balance("DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN");
} catch (Exception e) {
    response = ConnectionManager.Connection("backup").Api.Accounts.Balance("DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN");
}

if ((bool) response["success"]) {
    Console.WriteLine(response["balance"]);
} else {
    Console.WriteLine("Both the main and backup node did not repsond.");
}
```

### Initialization

```csharp
using ArkEcosystem.Client;
// For V1
using ArkEcosystem.Client.API.One;
// For V2
using ArkEcosystem.Client.API.Two;

static void Main(string[] args)
{
    // For V1
    var connection = new Connection<One>("http://my.node.ip:port/api/");
    // For V2
    var connection = new Connection<Two>("http://my.node.ip:port/api/");
    ...
}
```

### Accounts - V1

```csharp
// ...
var response = connection.Api.Accounts.Balance("AKATy581uXWrbm8B4DTQh4R9RbqaWRiKRY");
Console.WriteLine(response);

... > {
... > "success": true,
... > ...
... > }
```

### Blocks V1 and V2

```csharp
// ...
var response = connection.Api.Blocks.All();
Console.WriteLine(response);

... > {
... > "success": true,
... > ...
... > }
```

```csharp
// ...
var response = connection.Api.Blocks.All();
Console.WriteLine(response);

... > ArkEcosystem.Client.API.Two.Response`1[System.Collections.Generic.List`1[ArkEcosystem.Client.API.Two.Models.Block]]
```

### Delegates V1 and V2

```csharp
// ...
var response = connection.Api.Delegates.All();
Console.WriteLine(response);

... > {
... > "success": true,
... > ...
... > }
```

```csharp
// ...
var response = connection.Api.Delegates.All();
Console.WriteLine(response);

... > ArkEcosystem.Client.API.Two.Response`1[System.Collections.Generic.List`1[ArkEcosystem.Client.API.Two.Models.Delegates]]
```

### Loader - V1

```csharp
// ...
var response = connection.Api.Loader.Status();
Console.WriteLine(response);

... > {
... > "success": true,
... > ...
... > }
```

### Node - V2

```csharp
// ...
var response = connection.Api.Node.Configuration();
Console.WriteLine(response);

... > ArkEcosystem.Client.API.Two.Response`1[ArkEcosystem.Client.API.Two.Models.NodeConfiguration]
```

### Peers - V1 and V2

```csharp
// ...
var response = connection.Api.Peers.All();
Console.WriteLine(response);

... > {
... > "success": true,
... > ...
... > }
```

```csharp
// ...
var response = connection.Api.Peers.All();
Console.WriteLine(response);

... > ArkEcosystem.Client.API.Two.Response`1[System.Collections.Generic.List`1[ArkEcosystem.Client.API.Two.Models.Peer]]
```

### Signatures - V1 

```csharp
// ...
var response = connection.Api.Signatures.Fee();
Console.WriteLine(response);

... > {
... > "success": true,
... > ...
... > }
```

### Transactions - V1 and V2

```csharp
// ...
var response = connection.Api.Transactions.All();
Console.WriteLine(response);

... > {
... > "success": true,
... > ...
... > }
```

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

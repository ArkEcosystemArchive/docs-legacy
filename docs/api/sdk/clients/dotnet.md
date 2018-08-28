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

## Basics

```csharp
using ArkEcosystem.Client;

// Available connctions are Connection<One> and Connection<Two>
var connection = new Connection<One>("https://127.0.0.1:4003/api/");

var response = connection.Api.Accounts.Balance("DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN");

if ((bool) response["success"]) {
    Console.WriteLine(response["balance"]);
}
```

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

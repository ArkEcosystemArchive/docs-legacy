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

// Available connctions are Connections<One> and Connections<Two>
var connection = new Connections<One>("https://127.0.0.1:4003/api/");

var response = connection.Api.Accounts.Balance("DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN");

if ((bool) response["success"]) {
    Console.WriteLine(response["balance"]);
}
```

## Connections

```csharp
using ArkEcosystem.Client;

ConnectionManager.Connect(new Connections<One>("http://my-main.ark.node:port/api/"))
ConnectionManager.Connect(new Connections<One>("http://my-backup.ark.node:port/api/", "backup"))

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

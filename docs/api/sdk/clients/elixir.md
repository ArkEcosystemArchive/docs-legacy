---
title: "Elixir"
---

# Elixir

[[toc]]

## Elixir Installation

Elixir can be installed by following [this guide](https://elixir-lang.org/install.html)

## Installation

The package can be installed by adding `arkecosystem_client` to your list of dependencies in `mix.exs`:

```elixir
def deps do
  {:arkecosystem_client, "~> 0.1.0"}
end
```

Once installed, you should run the following command to install the dependencies :
```bash
$ mix deps.get
```

## Usage

### Initializing the Client

First step is to initialize the Client

```elixir
iex > client = ArkEcosystem.Client.new(%{
... >             host: "http://128.199.60.136:4001/api",
... >             nethash: "578e820911f24e039733b45e4882b73e301f813a0d2c31330dafda84534ffa23",
... >             version: "1.1.1"
... > })
```

### Accounts

```elixir
iex> ArkEcosystem.Client.API.One.Accounts.account(client, "DQCZQzibtABoggT9ygSzFNQ3A7PJyxttPP")
... > {:ok,
... > ...
... > }
```

[More details](https://github.com/ArkEcosystem/elixir-client/blob/master/lib/arkecosystem/client/api/one/accounts.ex#L13)

### Blocks

```elixir
iex> ArkEcosystem.Client.API.One.Blocks.block(client, "887102556000070987")
... > {:ok,
... > ...
... > }
```

[More details](https://github.com/ArkEcosystem/elixir-client/blob/master/lib/arkecosystem/client/api/one/blocks.ex#L13)

### Delegates

```elixir
iex> ArkEcosystem.Client.API.One.Delegates.count(client)
... > {:ok,
... > ...
... > }
```

[More details](https://github.com/ArkEcosystem/elixir-client/blob/master/lib/arkecosystem/client/api/one/delegates.ex#L13)

### Loader

```elixir
iex> ArkEcosystem.Client.API.One.Loader.autoconfigure(client)
... > {:ok,
... > ...
... > }
```

[More details](https://github.com/ArkEcosystem/elixir-client/blob/master/lib/arkecosystem/client/api/one/loader.ex#L13)

### Peers

```elixir
iex> ArkEcosystem.Client.API.One.Peers.peer(client, "167.114.29.35", 4002)
... > {:ok,
... > ...
... > }
```

[More details](https://github.com/ArkEcosystem/elixir-client/blob/master/lib/arkecosystem/client/api/one/peers.ex#L13)

### Signatures

```elixir
iex> ArkEcosystem.Client.API.One.Signatures.fee(client)
... > {:ok, 500000000}
```

[More details](https://github.com/ArkEcosystem/elixir-client/blob/master/lib/arkecosystem/client/api/one/signatures.ex#L13)

### Transactions

```elixir
iex> ArkEcosystem.Client.API.One.Transactions.transaction(client, "4a5f96b24091b747fb7fd34952ef465d9b8ec5f73d1b234405bf2718d2a87d56")
... > {:ok,
... > ...
... > }
```

[More details](https://github.com/ArkEcosystem/elixir-client/blob/master/lib/arkecosystem/client/api/one/transactions.ex#L13)

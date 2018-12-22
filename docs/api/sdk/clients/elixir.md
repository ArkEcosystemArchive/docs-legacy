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

## Development setup

If you want to contribute to the code of this package execute the following commands

1) Fork the [package](https://github.com/ArkEcosystem/elixir-client)

2) Clone your forked repository

```bash
$ git clone https://github.com/<githubusername>/elixir-client
```

3) Next, move into the fresh cloned directory

```bash
$ cd elixir-client
```

4) Install the dependencies

```bash
$ mix deps.get
```

5) Dependencies are now installed, you can now run the tests to see if everything is running like it should
```bash
$ mix test
```

## Usage

### Initializing the Client

First step is to initialize the Client, the nethash and version values might be different :

```elixir
iex > client = ArkEcosystem.Client.new(%{
... >             host: "http://my.node.ip:myport/api",
... >             nethash: "578e820911f24e039733b45e4882b73e301f813a0d2c31330dafda84534ffa23",
... >             version: "1.1.1"
... > })
```

### Accounts - V1

```elixir
iex> ArkEcosystem.Client.API.One.Accounts.account(client, "DQCZQzibtABoggT9ygSzFNQ3A7PJyxttPP")
... > {:ok,
... > ...
... > }
```

[More details](https://github.com/ArkEcosystem/elixir-client/blob/master/lib/arkecosystem/client/api/one/accounts.ex#L13)

### Blocks V1 and V2

```elixir
iex> ArkEcosystem.Client.API.One.Blocks.block(client, "887102556000070987")
... > {:ok,
... > ...
... > }
```

[More details](https://github.com/ArkEcosystem/elixir-client/blob/master/lib/arkecosystem/client/api/one/blocks.ex#L13)

```elixir
iex> ArkEcosystem.Client.API.Two.Blocks.list(client)
... > {:ok,
... > ...
... > }
```

[More details](https://github.com/ArkEcosystem/elixir-client/blob/master/lib/arkecosystem/client/api/two/blocks.ex#L9)

### Delegates V1 and V2

```elixir
iex> ArkEcosystem.Client.API.One.Delegates.count(client)
... > {:ok,
... > ...
... > }
```

[More details](https://github.com/ArkEcosystem/elixir-client/blob/master/lib/arkecosystem/client/api/one/delegates.ex#L13)

```elixir
iex> ArkEcosystem.Client.API.Two.Delegates.list(client)
... > {:ok,
... > ...
... > }
```

[More details](https://github.com/ArkEcosystem/elixir-client/blob/master/lib/arkecosystem/client/api/two/delegates.ex#L8)

### Loader - V1

```elixir
iex> ArkEcosystem.Client.API.One.Loader.autoconfigure(client)
... > {:ok,
... > ...
... > }
```

[More details](https://github.com/ArkEcosystem/elixir-client/blob/master/lib/arkecosystem/client/api/one/loader.ex#L13)

### Node - V2

```elixir
iex> ArkEcosystem.Client.API.Two.Node.status(client)
... > {:ok,
... > ...
... > }
```

[More details](https://github.com/ArkEcosystem/elixir-client/blob/master/lib/arkecosystem/client/api/two/node.ex#L8)

### Peers - V1 and V2

```elixir
iex> ArkEcosystem.Client.API.One.Peers.peer(client, "167.114.29.35", 4002)
... > {:ok,
... > ...
... > }
```

[More details](https://github.com/ArkEcosystem/elixir-client/blob/master/lib/arkecosystem/client/api/one/peers.ex#L13)

```elixir
iex> ArkEcosystem.Client.API.Two.Peers.list(client)
... > {:ok,
... > ...
... > }
```

[More details](https://github.com/ArkEcosystem/elixir-client/blob/master/lib/arkecosystem/client/api/two/peers.ex#L8)

### Signatures - V1

```elixir
iex> ArkEcosystem.Client.API.One.Signatures.fee(client)
... > {:ok, 500000000}
```

[More details](https://github.com/ArkEcosystem/elixir-client/blob/master/lib/arkecosystem/client/api/one/signatures.ex#L13)

### Transactions - V1 and V2

```elixir
iex> ArkEcosystem.Client.API.One.Transactions.transaction(client, "4a5f96b24091b747fb7fd34952ef465d9b8ec5f73d1b234405bf2718d2a87d56")
... > {:ok,
... > ...
... > }
```

[More details](https://github.com/ArkEcosystem/elixir-client/blob/master/lib/arkecosystem/client/api/one/transactions.ex#L13)

```elixir
iex> ArkEcosystem.Client.API.Two.Transactions.list(client)
... > {:ok,
... > ...
... > }
```

[More details](https://github.com/ArkEcosystem/elixir-client/blob/master/lib/arkecosystem/client/api/two/transactions.ex#L8)

### Votes - V2

```elixir
iex> ArkEcosystem.Client.API.Two.Votes.list(client)
... > {:ok,
... > ...
... > }
```

[More details](https://github.com/ArkEcosystem/elixir-client/blob/master/lib/arkecosystem/client/api/two/votes.ex#L8)

### Wallets - V2

```elixir
iex> ArkEcosystem.Client.API.Two.Wallets.list(client)
... > {:ok,
... > ...
... > }
```

[More details](https://github.com/ArkEcosystem/elixir-client/blob/master/lib/arkecosystem/client/api/two/wallets.ex#L8)

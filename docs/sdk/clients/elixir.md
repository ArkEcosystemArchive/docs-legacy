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

### Blocks V2

```elixir
iex> ArkEcosystem.Client.API.Two.Blocks.list(client)
... > {:ok,
... > ...
... > }
```

[More details](https://github.com/ArkEcosystem/elixir-client/blob/master/lib/arkecosystem/client/api/two/blocks.ex#L9)

### Delegates V2

```elixir
iex> ArkEcosystem.Client.API.Two.Delegates.list(client)
... > {:ok,
... > ...
... > }
```

[More details](https://github.com/ArkEcosystem/elixir-client/blob/master/lib/arkecosystem/client/api/two/delegates.ex#L8)

### Node - V2

```elixir
iex> ArkEcosystem.Client.API.Two.Node.status(client)
... > {:ok,
... > ...
... > }
```

[More details](https://github.com/ArkEcosystem/elixir-client/blob/master/lib/arkecosystem/client/api/two/node.ex#L8)

### Peers - V2

```elixir
iex> ArkEcosystem.Client.API.Two.Peers.list(client)
... > {:ok,
... > ...
... > }
```

[More details](https://github.com/ArkEcosystem/elixir-client/blob/master/lib/arkecosystem/client/api/two/peers.ex#L8)

### Transactions - V2

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

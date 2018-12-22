---
title: "Elixir"
---

The code represents minimal example of `client` and `crypto` libraries usage for the specified programming language. Example functionality consists of:
- importing/loading the needed dependencies/libraries
- initialisation of the client and connecting to an ark-node(peer)
- retrieve a specific block via API
- create transaction payload
- post transaction payload to an ark-node(peer)
- handle response data from API

Please refer to the code comments or check more detailed documentation for specific SDK in the left menu.

# Install dependencies

The packages can be installed by adding them to your list of dependencies in mix.exs : 
```elixir

  defp deps do
    [
      {:arkecosystem_client, "~> 0.1.0"},
      {:arkecosystem_crypto, "~> 0.1.1"}
    ]
  end
```

Then run ``` $ mix deps.get ``` and ``` $ mix deps.compile ```to install them

# Elixir SDK Demo

```elixir
defmodule ElixirTest do

  alias ArkEcosystem.Crypto.Transactions.Transaction
  alias ArkEcosystem.Crypto.Transactions.Builder

  @client ArkEcosystem.Client.new(%{
          host: "https://dexplorer.ark.io:8443/api/v2",
          nethash: "6e84d08bd299ed97c212c886c98a57e36545c8f5d645ca7eeae63a8bd62d8988",
          version: "2.0.0"
  })

  def main do
    #Find a block with height 939627
    IO.inspect ArkEcosystem.Client.API.Two.Block.show(@client, '939627')

    transaction = Builder.build_transfer(
      "D5rHMAmTXVbG7HVF3NvTN3ghpWGEii5mH2",
      100000,
      "This is a transaction from Elixir",
      "my super secret seedpass"
    )

    # adding transaction to payload, payload is an array of transactions
    transaction = transaction |> Transaction.to_params

    # posting transactions to the connected node as specified in the connection above
    ArkEcosystem.Client.API.Two.Transaction.create(@client, [transaction])
  end
end
```

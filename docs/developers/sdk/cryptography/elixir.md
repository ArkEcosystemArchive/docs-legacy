---
title: "Elixir"
---

# Elixir

[[toc]]

## Installation

The package can be installed by adding `arkecosystem_crypto` to your list of dependencies in `mix.exs`:

```elixir
def deps do
  [{:arkecosystem_crypto, "~> 0.1.0"}]
end
```

## Transactions

### Sign

```elixir
alias ArkEcosystem.Crypto.Transactions.Transaction
alias ArkEcosystem.Crypto.Transactions.Builder

transaction = Builder.build_transfer(
    "AXoXnFi4z1Z6aFvjEYkDVCtBGW2PaRiM25",
    133_380_000_000,
    "This is a transaction from Elixir",
    "this is a top secret passphrase"
)

IO.puts Transaction.verify(transaction)
```

### Serialize (AIP11)

```elixir
alias ArkEcosystem.Crypto.Transactions.Serializer

serialized = Serializer.serialize(transaction, %{underscore: true})

IO.puts serialized
```

### Deserialize (AIP11)

```elixir
alias ArkEcosystem.Crypto.Transactions.Deserializer

transaction = Deserializer.deserialize(serialized_transaction)

IO.puts transaction[:id]
```

## Message

### Sign

```elixir
alias ArkEcosystem.Crypto.Utils.Message

message = Message.sign("Hello World", "passphrase")

IO.puts message[:publicKey]
IO.puts message[:signature]
IO.puts message[:message]
```

### Verify

```elixir
alias ArkEcosystem.Crypto.Utils.Message

message = Message.sign("Hello World", "passphrase")

IO.puts Message.verify(message)
```

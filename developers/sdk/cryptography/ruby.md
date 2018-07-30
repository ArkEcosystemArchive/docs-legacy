---
title: "Ruby"
---

# Ruby

[[toc]]

## Installation

Add this line to your application's Gemfile and then execute `bundle`

```bash
gem 'arkecosystem-crypto'
```

## Creating a Transaction

```ruby
require 'arkecosystem/crypto'

transaction = ArkEcosystem::Crypto::Builder::Transfer.new()
  .set_recipient_id('DGihocTkwDygiFvmg6aG8jThYTic47GzU9')
  .set_amount(1 * 10 ** 8)
  .set_vendor_field('This is a transaction from Ruby')
  .sign('This is a top secret passphrase')

puts transaction.verify
puts transaction.to_params

```

## Serializing a Transaction (AIP11)

```ruby
require 'arkecosystem/crypto'

serializer = ArkEcosystem::Crypto::Serializer.new(transaction)

puts serializer.serialize
```

## Deserializing a Transaction (AIP11)

```ruby
require 'arkecosystem/crypto'

deserializer = ArkEcosystem::Crypto::Deserializer.new(serialized_transaction)

puts deserialiser.deserialize
```

## Signing a Message

```ruby
require 'arkecosystem/crypto'

message = ArkEcosystem::Crypto::Message.sign('Hello World', 'passphrase')

puts message.to_params
```

## Verifying a Message

```ruby
require 'arkecosystem/crypto'

message = ArkEcosystem::Crypto::Message.new(
  publickey: '02e012f0a7cac12a74bdc17d844cbc9f637177b470019c32a53cef94c7a56e2ea9',
  signature: '304402202e00853a2438249fbaa030151b47e25bc1668dfed6eb7bc159fb347e50e7a87e0220472dcef61c89904fd05e2069cedf89ccbf644fe8d741a0b78aa3933056ca0802',
  message: 'Hello World'
)

puts message.verify
```

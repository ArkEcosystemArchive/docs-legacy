---
title: "Ruby"
---

# Ruby

[[toc]]

### Installation

Add this line to your application's Gemfile and then execute `bundle`

```bash
gem 'arkecosystem-crypto'
```

Or install it from the command line

```bash
$ gem install arkecosystem-crypto
```

## Transactions

### Sign

```ruby
require 'arkecosystem/crypto'

transaction = ArkEcosystem::Crypto::Transactions::Builder::Transfer.new()
  .set_recipient_id('DGihocTkwDygiFvmg6aG8jThYTic47GzU9')
  .set_amount(1 * 10 ** 8)
  .set_vendor_field('This is a transaction from Ruby')
  .sign('This is a top secret passphrase')

puts transaction.verify
puts transaction.to_params

```

### Serialize (AIP11)

```ruby
require 'arkecosystem/crypto'

serializer = ArkEcosystem::Crypto::Serializer.new(transaction)

puts serializer.serialize
```

### Deserialize (AIP11)

```ruby
require 'arkecosystem/crypto'

deserializer = ArkEcosystem::Crypto::Deserializer.new(serialized_transaction)

puts deserialiser.deserialize
```

## Message

### Sign

```ruby
require 'arkecosystem/crypto'

message = ArkEcosystem::Crypto::Message.sign('Hello World', 'this is a top secret passphrase')

puts message.to_params
```

### Verify

```ruby
require 'arkecosystem/crypto'

message = ArkEcosystem::Crypto::Message.new(
  publickey: '02e012f0a7cac12a74bdc17d844cbc9f637177b470019c32a53cef94c7a56e2ea9',
  signature: '304402202e00853a2438249fbaa030151b47e25bc1668dfed6eb7bc159fb347e50e7a87e0220472dcef61c89904fd05e2069cedf89ccbf644fe8d741a0b78aa3933056ca0802',
  message: 'Hello World'
)

puts message.verify
```

## Identities

### Address

#### Get an address from a passphrase
```ruby
ArkEcosystem::Crypto::Identities::Address.from_passphrase('this is a top secret passphrase')
```

#### Get an address from a public key
```ruby
ArkEcosystem::Crypto::Identities::Address.from_public_key('034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192')
```

#### Get an address from a private key
```ruby
ArkEcosystem::Crypto::Identities::Address.from_private_key('d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712')
```

#### Validate an address
```ruby
ArkEcosystem::Crypto::Identities::Address.validate('this is a top secret passphrase')
```

### Private Key

#### Get a private key from a passphrase
```ruby
ArkEcosystem::Crypto::Identities::PrivateKey.from_passphrase('this is a top secret passphrase')
```

#### Get a private key instance object from hex
```ruby
ArkEcosystem::Crypto::Identities::PrivateKey.from_hex('d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712')
```

### Public Key

#### Get a public key from a passphrase
```ruby
ArkEcosystem::Crypto::Identities::PublicKey.from_passphrase('this is a top secret passphrase')
```

#### Get a public key instance object from hex
```ruby
ArkEcosystem::Crypto::Identities::PublicKey.from_hex('034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192')
```

### WIF

#### Get a WIF from a passphrase
```ruby
ArkEcosystem::Crypto::Identities::WIF.from_passphrase('this is a top secret passphrase')
```

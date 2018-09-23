---
title: "PHP"
---

# PHP

[[toc]]

## Installation

Require this package, with [Composer](https://getcomposer.org/), in the root directory of your project.

```bash
composer require arkecosystem/crypto
```

## Transactions

### Sign

```php
use ArkEcosystem\Crypto\Transactions\Builder\Transfer;

$transaction = Transfer::new()
    ->recipient('DGihocTkwDygiFvmg6aG8jThYTic47GzU9')
    ->amount(1 * 10 ** 8)
    ->vendorField('This is a transaction from PHP')
    ->sign('This is a top secret passphrase');

echo("Verified: ".$transaction->verify());
echo("JSON: ".$transaction->toJSON());
```

### Serialize (AIP11)

```php
use ArkEcosystem\Crypto\Transactions\Serializer;

$buffer = Serializer::new($transaction)->serialize();

echo($buffer->getHex());
```

### Deserialize (AIP11)

```php
use ArkEcosystem\Crypto\Transactions\Deserializer;

$transaction = Deserializzer::new($serializedTransaction)->deserialize();

echo($transaction->id);
```

## Message

### Sign

```php
use ArkEcosystem\Crypto\Utils\Message;

$message = Message::sign('Hello World', 'this is a top secret passphrase');

echo($message);
```

### Verify

```php
use ArkEcosystem\Crypto\Utils\Message;

$message = Message::new([
    'publickey' => '02e012f0a7cac12a74bdc17d844cbc9f637177b470019c32a53cef94c7a56e2ea9',
    'signature' => '304402202e00853a2438249fbaa030151b47e25bc1668dfed6eb7bc159fb347e50e7a87e0220472dcef61c89904fd05e2069cedf89ccbf644fe8d741a0b78aa3933056ca0802',
    'message' => 'Hello World'
]);

echo($message->verify() ? 'Valid' : 'Invalid');
```

## Identities

### Address

#### Get an address from a passphrase
```php
ArkEcosystem\Crypto\Identities\Address::fromPassphrase('this is a top secret passphrase');
```

#### Get an address from a public key
```php
ArkEcosystem\Crypto\Identities\Address::fromPublicKey('034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192');
```

#### Get an address from a private key
```php
ArkEcosystem\Crypto\Identities\Address::fromPrivateKey('d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712');
```

#### Validate an address
```php
ArkEcosystem\Crypto\Identities\Address::validate('D61mfSggzbvQgTUe6JhYKH2doHaqJ3Dyib');
```

### Private Key

#### Get a private key from a passphrase
```php
ArkEcosystem\Crypto\Identities\PrivateKey::fromPassphrase('this is a top secret passphrase');
```

#### Get a private key instance object from hex
```php
ArkEcosystem\Crypto\Identities\PrivateKey::fromHex('d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712');
```

#### Get a private key from a WIF
```php
ArkEcosystem\Crypto\Identities\PrivateKey::fromWif('SGq4xLgZKCGxs7bjmwnBrWcT4C1ADFEermj846KC97FSv1WFD1dA');
```

### Public Key

#### Get a public key from a passphrase
```php
ArkEcosystem\Crypto\Identities\PublicKey::fromPassphrase('this is a top secret passphrase');
```

#### Get a public key instance object from hex
```php
ArkEcosystem\Crypto\Identities\PublicKey::fromHex('034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192');
```

#### Validate a public key
```php
ArkEcosystem\Crypto\Identities\PublicKey::validate('034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192');
```

### WIF

#### Get a WIF from a passphrase
```php
ArkEcosystem\Crypto\Identities\WIF::fromPassphrase('this is a top secret passphrase');
```

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

## Creating a Transaction

```php
<?php

require_once('vendor/autoload.php');

use ArkEcosystem\Crypto\Transactions\Builder\Transfer;

$transaction = Transfer::new()
    ->recipient('recipient-address')
    ->amount(1 * 10 ** 8)
    ->vendorField('This is a transaction from PHP')
    ->sign('This is a top secret passphrase');

echo("Verified: ".$transaction->verify());
echo("JSON: ".$transaction->toJSON());
```

## Serializing a Transaction (AIP11)

```php
<?php

require_once('vendor/autoload.php');

use ArkEcosystem\Crypto\Transactions\Serializer;

$buffer = Serializer::new($transaction)->serialize();

echo($buffer->getHex());
```

## Deserializing a Transaction (AIP11)

```php
<?php

require_once('vendor/autoload.php');

use ArkEcosystem\Crypto\Transactions\Deserializer;

$transaction = Deserializzer::new($serializedTransaction)->deserialize();

echo($transaction->id);
```

## Signing a Message

```php
<?php

require_once('vendor/autoload.php');

use ArkEcosystem\Crypto\Utils\Message;

$message = Message::sign('Hello World', 'passphrase');

echo($message);
```

## Verifying a Message

```php
<?php

require_once('vendor/autoload.php');

use ArkEcosystem\Crypto\Utils\Message;

$message = Message::new([
    'publickey' => '02e012f0a7cac12a74bdc17d844cbc9f637177b470019c32a53cef94c7a56e2ea9',
    'signature' => '304402202e00853a2438249fbaa030151b47e25bc1668dfed6eb7bc159fb347e50e7a87e0220472dcef61c89904fd05e2069cedf89ccbf644fe8d741a0b78aa3933056ca0802',
    'message' => 'Hello World'
]);

echo($message->verify() ? 'Valid' : 'Invalid');
```

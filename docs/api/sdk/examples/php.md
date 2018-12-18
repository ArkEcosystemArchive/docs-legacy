---
title: "PHP"
---

# PHP SDK Demo

```php
<?php

require 'vendor/autoload.php';

use ArkEcosystem\Crypto\Transactions\Builder\Transfer;
use ArkEcosystem\Client\Connection;

// Instantiate a client
$connection = new Connection([
    'host' => 'http://node-ip:port/api', // NO TRAILING SLASH!
    'version' => 2
]);

// find block with height 545774
$response = $connection->blocks()->show('545774');
var_dump($response['data']);

// creating a transaction with the arkecosystem-java-crypto builder
$transfer = Transfer::new()
    ->recipient('AJDkvwkwxW4N9bTYqJUijmEtY3rKwniCZQ')
    ->amount(1)
    ->vendorField('This is a transaction from PHP')
    ->sign('secret passphrase');

// adding transaction to payload, payload is an array of transactions
$transactions = [$transfer->toArray()];

// posting transactions to the connected node as specified in the connection above
$response = $connection->transactions()->create($transactions);

var_dump($response['data']);
var_dump($response['data']['accept']);
var_dump($response['data']['broadcast']);
```

---
title: "PHP"
---

The code represents minimal example of `client` and `crypto` libraries usage for the specified programming language. Example functionality consists of:
- importing/loading the needed dependencies/libraries
- initialisation of the client and connecting to an ark-node(peer)
- retrieve a specific block via API
- create transaction payload
- post transaction payload to an ark-node(peer)
- handle response data from API

Please refer to the code comments or check more detailed documentation for specific SDK in the left menu.

# PHP SDK Demo

```php
<?php

require 'vendor/autoload.php';

use ArkEcosystem\Crypto\Transactions\Builder\Transfer;
use ArkEcosystem\Client\Connection;

// Instantiate a client
$connection = new Connection([
    'host' => 'http://node-ip:port/api/', // TRAILING SLASH!
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

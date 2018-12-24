---
title: "PHP"
---

# PHP

[[toc]]

## Installation

Require this package, with [Composer](https://getcomposer.org/), in the root directory of your project.

```bash
composer require arkecosystem/client
```

## Basics

```php
<?php

require_once('vendor/autoload.php');

use ArkEcosystem\Client\Connection;

$connection = new Connection([
    'host' => 'http://my.ark.node:port/api/', // TRAILING SLASH!
]);

$response = $connection->wallets()->show('DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN');

if ($response['data']) {
    echo($response['data']);
}
```

## Connections

```php
<?php

require_once('vendor/autoload.php');

use ArkEcosystem\Client\Connection;
use ArkEcosystem\Client\ConnectionManager;

$manager = new ConnectionManager();

$manager->connect([
    'host' => 'http://my-main.ark.node:port/api/', // TRAILING SLASH!
], 'main');

$manager->connect([
    'host' => 'http://my-backup.ark.node:port/api/', // TRAILING SLASH!
], 'backup');

$response = [];

try {
    $response = $manager->connection('main')->wallets()->show('DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN');
} catch (Exception $e) {
    $response = $manager->connection('backup')->wallets()->show('DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN');
}

if ($response['data']) {
    echo($response['data']);
} else {
    echo('Both the main and backup node did not repsond.');
}
```

---
title: "PHP"
---

# PHP

[[toc]]

## Installation

Require this package, with [Composer](https://getcomposer.org/), in the root directory of your project.

```bash
composer require arkecosystem/client php-http/guzzle6-adapter
```

## Basics

```php
<?php

require_once('vendor/autoload.php');

use ArkEcosystem\Client\Connection;

$connection = new Connection([
    'host' => 'http://my.ark.node:port/api', // NO TRAILING SLASH!
    'version' => 1
]);

$response = $connection->accounts()->balance('DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN');

if ($response['success']) {
    echo($response['balance']);
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
    'host' => 'http://my-main.ark.node:port/api', // NO TRAILING SLASH!
    'version' => 1
], 'main');

$manager->connect([
    'host' => 'http://my-backup.ark.node:port/api', // NO TRAILING SLASH!
    'version' => 1
], 'backup');

$response = [];

try {
    $response = $manager->connection('main')->accounts()->balance('DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN');
} catch (Exception $e) {
    $response = $manager->connection('backup')->accounts()->balance('DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN');
}

if ($response['success']) {
    echo($response['balance']);
} else {
    echo('Both the main and backup node did not repsond.');
}
```

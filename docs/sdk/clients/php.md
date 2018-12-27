---
title: "PHP"
---

# PHP

[[toc]]

## PHP Installation

Documentation can be found [here](http://php.net/manual/fr/install.php).

Others solutions like [LAMP](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-ubuntu-18-04), [WAMP](http://www.wampserver.com/) or [MAMP](https://www.mamp.info/en/) are available

## Installation

```bash
$ composer require arkecosystem/client
```

## Development setup

If you want to contribute to the code of this package execute the following commands

1) Fork the [package](https://github.com/ArkEcosystem/php-client)

2) Clone your forked repository

```bash
$ git clone https://github.com/<githubusername>/php-client
```

3) Next, move into the fresh cloned directory

```bash
$ cd php-client
```

4) Install the dependencies with composer

```bash
$ composer install
```

5) Dependencies are now installed, you can now run the tests to see if everything is running like it should

```bash
$ phpunit tests/
...
```

## Usage

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

## Initialiation

```php
<?php

require_once('vendor/autoload.php');

use ArkEcosystem\Client\Connection;

$connection = new Connection([
    'host' => 'http://my.ark.node:port/api/', // TRAILING SLASH!
]);
...
```

### Blocks

```php
<?php
...
$response = $connection->blocks()->all(['limit' => 10]);

if ($response['data']) {
    echo($response['data']);
}

>> ['meta': ['count': 10, ... ]]
```

### Delegates

```php
...
$response = $connection->delegates()->all(['limit' => 10]);

if ($response['data']) {
    echo($response['data']);
}

>> ['meta': ['count': 10, ... ]]
```

### Node

```php
...
$response = $connection->node()-status();

if ($response['data']) {
    echo($response['data']);
}

>> ['data': ['syncing': False, 'blocks': -22, 'height': 820355, 'id': '2134055295567604949']]
```

### Peers

```php
...
$response = $connection->peers()->all(['limit' => 10]);

if ($response['data']) {
    echo($response['data']);
}

>> ['meta': ['count': 10, ... ]]
```

### Transactions

```php
...
$response = $connection->transactions()->all(['limit' => 10]);

if ($response['data']) {
    echo($response['data']);
}

>> ['meta': ['count': 10, ... ]]
```

### Votes

```php
...
$response = $connection->votes()->all(['limit' => 10]);

if ($response['data']) {
    echo($response['data']);
}

>> ['meta': ['count': 10, ... ]]
```

### Wallets

```php
...
$response = $connection->wallets()->all(['limit' => 10]);

if ($response['data']) {
    echo($response['data']);
}

>> ['meta': ['count': 10, ... ]]
```

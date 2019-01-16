---
title: "Symfony"
---

# Symfony

[[toc]]

## Installation

Require this package, with [Composer](https://getcomposer.org/), in the root directory of your project.

```bash
composer require arkecosystem/bundle php-http/guzzle6-adapter
```

Go to `config/packages/ark.yml` and fill out your configuration similar to this.

```php
<?php

return [
    Symfony\Bundle\FrameworkBundle\FrameworkBundle::class => ['all' => true],
    // ...
    ArkEcosystem\ArkBundle\ArkBundle::class => ['all' => true],
];
```

## Configuration

Go to `config/packages/ark.yml` and fill out your configuration similar to this.

```yaml
ark:
  protocol: 'http'
  ip: 'your-node-ip'
  port: 4001
  nethash: '6e84d08bd299ed97c212c886c98a57e36545c8f5d645ca7eeae63a8bd62d8988'
  version: '1.0.1'
  networkAddress: 0x17 // or 0x1E for devnet
```

## Usage

```php
<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class CoolStuffController extends Controller
{
    /**
     * @Route("/cool/stuff", name="cool_stuff")
     */
    public function index()
    {
        $peers = $this->container->get('ark.client')->api('Peer')->peers();

        return new Response($peers['peers']);
    }
}
```

## Documentation

There are other classes in this package that are not documented here. This is because the package is a Laravel wrapper of [the Ark php-client package](https://github.com/ArkEcosystem/php-client).

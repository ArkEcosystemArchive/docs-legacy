---
title: "Laravel"
---

# Laravel

[[toc]]

## Installation

Require this package, with [Composer](https://getcomposer.org/), in the root directory of your project.

```bash
composer require arkecosystem/laravel
```

## Configuration

Ark Laravel requires connection configuration. To get started, you'll need to publish all vendor assets:

```bash
php artisan vendor:publish --provider="ArkEcosystem\Ark\ArkServiceProvider"
```

This will create a `config/ark.php` file in your app that you can modify to set your configuration. Also, make sure you check for changes to the original config file in this package between releases.

#### Default Connection Name

This option `default` is where you may specify which of the connections below you wish to use as your default connection for all work. Of course, you may use many connections at once using the manager class. The default value for this setting is `main`.

#### Ark Connections

This option `connections` is where each of the connections is set up for your application. Example configuration has been included, but you may add as many connections as you would like.

## Usage

#### ArkManager

This is the class of most interest. It is bound to the ioc container as `ark` and can be accessed using the `Facades\Ark` facade. This class implements the ManagerInterface by extending AbstractManager. The interface and abstract class are both part of [Graham Campbell's](https://github.com/GrahamCampbell) [Laravel Manager](https://github.com/GrahamCampbell/Laravel-Manager) package, so you may want to go and check out the docs for how to use the manager class over at that repository. Note that the connection class returned will always be an instance of `Ark\Ark`.

#### Facades\Ark

This facade will dynamically pass static method calls to the `ark` object in the ioc container which by default is the `ArkManager` class.

#### ArkServiceProvider

_This class contains no public methods of interest, it should be added to the providers array in `config/app.php` as it sets up ioc bindings._

### Examples

Here you can see an example of just how simple this package is to use. Out of the box, the default adapter is `main`. After you enter your authentication details in the config file, it will just work:

```php
// You can alias this in config/app.php.
use ArkEcosystem\Ark\Facades\Ark;

Ark::api('Wallets')->wallets();
// We're done here - how easy was that, it just works!
```

The Ark manager will behave like it is an `ArkEcosystem\Ark\Client`. If you want to call specific connections, you can do that with the connection method:

```php
use ArkEcosystem\Ark\Facades\Ark;

// Writing this…
Ark::connection('main')->api('Wallets')->all();

// …is identical to writing this
Ark::api('Wallets')->all();

// and is also identical to writing this.
Ark::connection()->api('Wallets')->all();

// This is because the main connection is configured to be the default.
Ark::getDefaultConnection(); // This will return main.

// We can change the default connection.
Ark::setDefaultConnection('alternative'); // The default is now alternative.
```

If you prefer to use dependency injection over facades like me, then you can inject the manager:

```php
use ArkEcosystem\Ark\ArkManager;

class Foo
{
    protected $ark;

    public function __construct(ArkManager $ark)
    {
        $this->ark = $ark;
    }

    public function bar($params)
    {
        $this->ark->api('Wallets')->all();
    }
}

App::make('Foo')->bar($params);
```

## Documentation

There are other classes in this package that are not documented here. This is because the package is a Laravel wrapper of [the Ark php-client package](https://github.com/ArkEcosystem/php-client).

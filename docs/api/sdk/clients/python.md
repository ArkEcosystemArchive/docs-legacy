---
title: "Python"
---

# Python

[[toc]]

## Python installation

Python can be downloaded [here](https://www.python.org/downloads/).

For further informations on how to install Python on your operating system : 

[Windows guide](https://docs.python.org/3/using/windows.html)

[Unix guide](https://docs.python.org/3/using/unix.html)

[OSx guide](https://docs.python.org/3/using/mac.html)


## Installation

```bash
$ pip install arkecosystem-client
```

## Usage

### Accounts - V1

```python
from client import ArkClient

client = ArkClient('http://127.0.0.1:4002/api', api_version='v1')

print(client.accounts.balance(address='AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv'))

>> {'success': True, 'balance': '2039101835000000', 'unconfirmedBalance': '2039101835000000'}
```

### Blocks - V1 and V2

```python
from client import ArkClient

client = ArkClient('http://127.0.0.1:4002/api', api_version='v1')

print(client.blocks.all(limit=10))

>> {'success': True, 'blocks': [...]}
```

```python
from client import ArkClient

client = ArkClient('https://127.0.0.1:4003/api')

print(client.blocks.all(page=5, limit=10))

>> {'meta': {'count': 10, ... }}
```

### Delegates - V1 and V2

```python
from client import ArkClient

client = ArkClient('http://127.0.0.1:4002/api', api_version='v1')

print(client.delegates.all(limit=51))

>> {'success': True, 'delegates': []}
```

```python
from client import ArkClient

client = ArkClient('https://127.0.0.1:4003/api')

print(client.delegates.all(page=5, limit=20))

>> {'meta': {'count': 20, ... }}
```

### Loader - V1

```python
from client import ArkClient

client = ArkClient('http://127.0.0.1:4002/api', api_version='v1')

print(client.loader.sync_status())

>> {'success': True, 'syncing': False, 'blocks': -8, 'height': 6485835, 'id': '16405273597815729306'}
```

### Node - V2

```python
from client import ArkClient

client = ArkClient('https://127.0.0.1:4003/api')

print(client.node.syncing())

>> {'data': {'syncing': False, 'blocks': -22, 'height': 820355, 'id': '2134055295567604949'}}
```

### Peers - V1 and V2

```python
from client import ArkClient

client = ArkClient('http://127.0.0.1:4002/api', api_version='v1')

print(client.peers.all(limit=10))

>> {'success': True, 'peers': []}
```

```python
from client import ArkClient

client = ArkClient('https://127.0.0.1:4003/api')

print(client.peers.all())

>> {'meta': {'count': 5, ...}}
```

### Signatures - V1

```python
from client import ArkClient

client = ArkClient('http://127.0.0.1:4002/api', api_version='v1')

print(client.signatures.fee())

>> {'success': True, 'fee': 500000000}
```

### Transactions - V1 and V2

```python
from client import ArkClient

client = ArkClient('http://127.0.0.1:4002/api', api_version='v1')

print(client.transactions.all(limit=10))

>> {'success': True, 'transactions': []}
```

```python
from client import ArkClient

client = ArkClient('https://127.0.0.1:4003/api')

print(client.transactions.all(limit=5))

>> {'meta': {'count': 5, ...}}
```

### Votes - V2

```python
from client import ArkClient

client = ArkClient('https://127.0.0.1:4003/api')

print(client.votes.all(limit=5))

>> {'meta': {'count': 5, ...}}
```

### Wallets - V2

```python
from client import ArkClient

client = ArkClient('https://127.0.0.1:4003/api')

print(client.wallets.all(limit=5))

>> {'meta': {'count': 5, ...}}
```

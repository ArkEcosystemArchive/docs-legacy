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

### Blocks - V2

```python
from client import ArkClient

client = ArkClient('http://127.0.0.1:4003/api')

print(client.blocks.all(page=5, limit=10))

>> {'meta': {'count': 10, ... }}
```

### Delegates - V2

```python
from client import ArkClient

client = ArkClient('http://127.0.0.1:4003/api')

print(client.delegates.all(page=5, limit=20))

>> {'meta': {'count': 20, ... }}
```

### Node - V2

```python
from client import ArkClient

client = ArkClient('http://127.0.0.1:4003/api')

print(client.node.syncing())

>> {'data': {'syncing': False, 'blocks': -22, 'height': 820355, 'id': '2134055295567604949'}}
```

### Peers - V2

```python
from client import ArkClient

client = ArkClient('http://127.0.0.1:4003/api')

print(client.peers.all())

>> {'meta': {'count': 5, ...}}
```

### Transactions - V2

```python
from client import ArkClient

client = ArkClient('http://127.0.0.1:4003/api')

print(client.transactions.all(limit=5))

>> {'meta': {'count': 5, ...}}
```

### Votes - V2

```python
from client import ArkClient

client = ArkClient('http://127.0.0.1:4003/api')

print(client.votes.all(limit=5))

>> {'meta': {'count': 5, ...}}
```

### Wallets - V2

```python
from client import ArkClient

client = ArkClient('http://127.0.0.1:4003/api')

print(client.wallets.all(limit=5))

>> {'meta': {'count': 5, ...}}
```

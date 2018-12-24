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

## Development setup

If you want to contribute to the code of this package execute the following commands

1) Fork the [package](https://github.com/ArkEcosystem/python-client)

2) Clone your forked repository

```bash
$ git clone https://github.com/<githubusername>/python-client
```

3) Next, move into the fresh cloned directory

```bash
$ cd python-client
```

4) The next step would be to create something like a [virtual environment](https://virtualenv.pypa.io/en/latest/)
and install the dependencies of this package inside it

5) Once the previous point done, you can proceed to install the dependencies, these are listed inside the setup.py file

```bash
$ pip install requests backoff flake8 flake8-import-order flake8-print flake8-quotes pytest pytest-responses pytest-mock pytest-cov
```

6) Dependencies are now installed, you can now run the tests to see if everything is running like it should

```bash
$ pytest
...
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

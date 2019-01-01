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

## Import Client

```python
from client import ArkClient
client = ArkClient('http://127.0.0.1:4003/api')
```

## API V2.0 Endpoint Usage Examples

### Blocks

#### List all blocks
```python
print(client.blocks.all(page=5, limit=10))
>> {'meta': {'count': 10, ... }}
```

#### Retrieve a block
```python
print(client.blocks.get(block_id="11023286547481793189"))
>> {'data': {'id': '11023286547481793189' ... }}
```

#### List all transactions of a block
```python
print(client.blocks.transactions(block_id=1596548201794970158, limit=10))
>> {'meta': {'count': 4, ... }}
```

#### Search all blocks
```python
print(client.blocks.search({'generatorPublicKey': '0232b96d57ac27f9a99242bc886e433baa89f596d435153c9dae47222c0d1cecc3'}))
>> {'meta': {'count': 100, ... }}
```

### Delegates

#### List all delegates
```python
print(client.delegates.all(page=5, limit=20))
>> {'meta': {'count': 20, ... }}
```

#### Retrieve a delegate
```python
print(client.delegates.get(delegate_id="goose"))
>> {'data': {'username': 'goose', ... }}
```

### Search delegates - UNDOCUMENTED V2.0 API - CHECK TO SEE HOW IT WORKS
```python
print(client.delegates.search(page=5, limit=20))
>> {'meta': {'count': 20, ... }}
```

#### List all blocks fo a delegate
```python
print(client.delegates.blocks(delegate_id="goose"))
>> {'meta': {'count': 100, ... }}
```

#### List all voters of a delegate
```python
print(client.delegates.voters(delegate_id="goose"))
>> {'meta': {'count': 100, ... }}
```

#### List voter balances for a delegate - UNDOCUMENTED V2.0 API
```python
print(client.delegates.voter_balances(delegate_id="goose"))
>> {'data': {'AZpoKsoqHAMWBNqeEf3WNfRCenxLR51pBt': 998386, ... }}
```










### Node

#### Retrieve the configuration
```python
print(client.node.syncing())
>> {'data': {'syncing': False, 'blocks': -22, 'height': 820355, 'id': '2134055295567604949'}}
```

#### Retrieve the status

#### Retrieve the syncing status

### Peers

#### List all peers
```python
print(client.peers.all())
>> {'meta': {'count': 5, ...}}
```

#### Retrieve a peer

### Transactions

#### Create a transaction
```python
print(client.transactions.all(limit=5))
>> {'meta': {'count': 5, ...}}
```

#### Retrieve a transaction

#### List all transactions

#### List all unconfirmed transactions

### Votes

#### List all votes

```python
print(client.votes.all(limit=5))
>> {'meta': {'count': 5, ...}}
```

#### Retrieve a vote

### Wallets

#### Retrieve a wallet
```python
print(client.wallets.all(limit=5))
>> {'meta': {'count': 5, ...}}
```

#### List all transactions of a wallet

#### List all received transactions of a wallet

#### List all sent transactions of a wallet

#### List all votes of a wallet

#### List all top wallets

#### Search all wallets

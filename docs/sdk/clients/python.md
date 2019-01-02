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

### Initialization

```python
from client import ArkClient
client = ArkClient('http://127.0.0.1:4003/api')
```

## API v2.0 Endpoints

### Blocks
#### List all blocks
```python
print(client.blocks.all(page=5, limit=10))
>> {'meta': {'count': 10, ... }}
```

#### Retrieve a block
```python
print(client.blocks.get(block_id='1102328654748179318'))
>> {'data': {'id': '11023286547481793189' ... }}
```

#### List all transactions of a block
```python
print(client.blocks.transactions(block_id='1596548201794970158', limit=10))
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

#### Search delegates - UNDOCUMENTED V2.0 API - CHECK TO SEE HOW IT WORKS
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
print(client.node.configuration())
>> {'data': {'nethash': '6e84d08bd299ed97c212c886c98a57e36545c8f5d645ca7eeae63a8bd62d8988', ... }}
```

#### Retrieve the status
```python
print(client.node.status())
>> {'data': {'synced': True, 'now': 6897158, 'blocksCount': -1}}
```

#### Retrieve the syncing status
```python
print(client.node.syncing())
>> {'data': {'syncing': False, 'blocks': -1, 'height': 6897160, 'id': '12905037940821862953'}}
```

### Peers
#### List all peers
```python
print(client.peers.all())
>> {'meta': {'count': 100, ...}}
```

#### Retrieve a peer
```python
print(client.peers.get(ip='51.255.105.52'))
>> {'data': {'ip': '51.255.105.52', ...}}
```

### Transactions

#### Create a transaction - GET EXAMPLE ON DEVNET
```python
print(client.transactions.create([signed_transaction]))
>> {'meta': {'count': 5, ...}}
```

#### Retrieve a transaction
```python
print(client.transactions.get(transaction_id='e5f5de5716bffb2fa924d26fcfebaff58c8bfd50d8eac1487b0e981113b482fc'))
>> {'meta': {'count': 5, ...}}
```

#### List all transactions
```python
print(client.transactions.all(limit=5))
>> {'meta': {'count': 5, ...}}
```

#### List all unconfirmed transactions
```python
print(client.transactions.all_unconfirmed(limit=5))
>> {'meta': {'count': 5, ...}}
```

#### Get unconfirmed transaction - UNDOCUMENTED API - GET EXAMPLE ON DEVNET
```python
print(client.transactions.get_unconfirmed(transactions_id=''))
>> {'meta': {'count': 5, ...}}
```

#### Search transactions - UNDOCUMENTED API
```python
print(client.transactions.search({'senderId':'AQEA7wbPq9obWr2yEXRksanArn6Jyz4UPN'},limit=5))
>> {'meta': {'count': 1, ...}}
```

#### List transaction types - UNDOCUMENTED API
```python
print(client.transactions.types())
>> {'meta': {'count': 5, ...}}
```

#### List transaction fees - UNDOCUMENTED API
```python
print(client.transactions.fees())
>> {'meta': {'count': 5, ...}}
```

### Votes
#### List all votes
```python
print(client.votes.all(limit=5))
>> {'meta': {'count': 5, ...}}
```

#### Retrieve a vote
```python
print(client.votes.get(vote_id='49a6bdffef623e83087a6fff3f4e7dd6929a6df9abf9f7d0b08a36fcba9512f7'))
>> {'data': {'id': '49a6bdffef623e83087a6fff3f4e7dd6929a6df9abf9f7d0b08a36fcba9512f7', ...}}
```

### Wallets
#### Retrieve all wallets
```python
print(client.wallets.all(limit=10))
>> {'meta': {'count': 10, ...}}
```

#### Retrieve a wallet
```python
print(client.wallets.get(wallet_id='AQEA7wbPq9obWr2yEXRksanArn6Jyz4UPN'))
>> {'data': {'address': 'AQEA7wbPq9obWr2yEXRksanArn6Jyz4UPN', ...}}
```

#### List all transactions of a wallet
```python
print(client.wallets.transactions(wallet_id='AQEA7wbPq9obWr2yEXRksanArn6Jyz4UPN'))
>> {'meta': {'count': 100, ...}}
```

#### List all received transactions of a wallet
```python
print(client.wallets.transactions_received(wallet_id='AQEA7wbPq9obWr2yEXRksanArn6Jyz4UPN'))
>> {'meta': {'count': 100, ...}}
```

#### List all sent transactions of a wallet
```python
print(client.wallets.transactions_sent(wallet_id='AQEA7wbPq9obWr2yEXRksanArn6Jyz4UPN'))
>> {'meta': {'count': 3, ...}}
```

#### List all votes of a wallet
```python
print(client.wallets.votes(wallet_id='AQEA7wbPq9obWr2yEXRksanArn6Jyz4UPN'))
>> {'meta': {'count': 3, ...}}
```

#### List all top wallets
```python
print(client.wallets.top(limit=10))
>> {'meta': {'count': 10, ...}}
```

#### Search all wallets
```python
print(client.wallets.search({'publicKey':'03a3cd9d5095147d7820b39fd697bd6c6831b1d474125e97d38f2f131eede5fa19'},limit=5))
>> {'meta': {'count': 1, ...}}
```

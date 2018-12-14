---
title: "Python"
---

# Python

[[toc]]

## Python Installation

Python can be downloaded [here](https://www.python.org/downloads/).
For further informations on how to install Python on your operating system :

[Windows guide](https://docs.python.org/3/using/windows.html)
[Unix guide](https://docs.python.org/3/using/unix.html)
[OSx guide](https://docs.python.org/3/using/mac.html)

## Installation

```bash
$ pip install arkecosystem-crypto
```

## Development setup

If you want to contribute to the code of this package yadi yada

1) Fork the [package](https://github.com/ArkEcosystem/python-crypto)

2) Clone your forked repository

```bash
$ git clone https://github.com/<githubusername>/python-crypto
```

3) Next, move into the fresh cloned directory

```bash
$ cd python-crypto
```

4) The next step would be to create something like a [virtual environment](https://virtualenv.pypa.io/en/latest/)
and install the dependencies of this package inside it

5) Once the previous point done, you can proceed to install the dependencies, these are listed inside the setup.py file

```bash
$ pip install flake8 flake8-import-order flake8-print flake8-quotes pytest pytest-cov
```

6) Dependencies are now installed, you can now run the tests to see if everything is running like it should

```bash
$ pytest
...
```
## Transactions

### Sign

```python
from crypto.transactions.builder.transfer import Transfer

tx = Transfer(recipientId='D5rHMAmTXVbG7HVF3NvTN3ghpWGEii5mH2', amount=1000)
tx.sign('shed flock autumn there ghost slight danger story topic sustain orange slender')
```

### Serialize (AIP11)

```python
from crypto.transactions.serializer import Serializer

serialized_transaction = Serializer(transaction_data).serialize()
```

### Deserialize (AIP11)

```python
from crypto.transactions.deserializer import Deserializer

transaction_data = Deserializer(serialized_data).deserialize()
```

## Message

### Sign

```python
from crypto.utils.message import Message

message = Message.sign('Hello World', 'this is a top secret passphrase')
```

### Verify

```python
from crypto.utils.message import Message

message = Message(
    message='Hello World',
    signature='304402202e00853a2438249fbaa030151b47e25bc1668dfed6eb7bc159fb347e50e7a87e0220472dcef61c89904fd05e2069cedf89ccbf644fe8d741a0b78aa3933056ca0802',
    public_key='02e012f0a7cac12a74bdc17d844cbc9f637177b470019c32a53cef94c7a56e2ea9'
)
message.verify() is True
```

## Identities

### Address

#### Get an address from a passphrase
```python
from crypto.identity.address import address_from_passphrase

address = address_from_passphrase('this is a top secret passphrase')
```

#### Get an address from a public key
```python
from crypto.identity.address import address_from_public_key

address = address_from_public_key('034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192')
```

#### Get an address from a private key
```python
from crypto.identity.address import address_from_private_key

address = address_from_private_key('d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712')
```

#### Validate an address
```python
from crypto.identity.address import validate_address

is_valid = validate_address('DGihocTkwDygiFvmg6aG8jThYTic47GzU9')
```

### Private Key

#### Get a private key from a passphrase
```python
from crypto.identity.private_key import PrivateKey

private_key = PrivateKey.from_passphrase('this is a top secret passphrase').to_hex()
```

#### Get a private key instance object from hex
```python
from crypto.identity.private_key import PrivateKey

private_key = PrivateKey.from_hex('d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712')
```

### Public Key

#### Get a public key from a passphrase
```python
from crypto.identity.public_key import PublicKey

public_key = PublicKey.from_passphrase('this is a top secret passphrase')
```

#### Get a public key instance object from hex
```python
from crypto.identity.public_key import PublicKey

public_key = PublicKey.from_hex('034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192')
```

### WIF

#### Get a WIF from a passphrase
```python
from crypto.identity.wif import wif_from_passphrase

wif = wif_from_passphrase('this is a top secret passphrase')
```

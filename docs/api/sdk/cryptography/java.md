---
title: "Java"
---

# Java

[[toc]]

## Installation

### Gradle

```bash
compile group: 'org.arkecosystem.crypto', name: 'crypto', version: '0.1.0'
```

### Maven

```xml
<dependency>
    <groupId>org.arkecosystem.crypto</groupId>
    <artifactId>crypto</artifactId>
    <version>0.1.0</version>
    <scope>test</scope>
</dependency>
```

## Transactions

### Sign

```groovy
import org.arkecosystem.crypto.transactions.builder.Transfer

def transfer = new Transfer()
    .recipient('AXoXnFi4z1Z6aFvjEYkDVCtBGW2PaRiM25')
    .amount(133380000000)
    .vendorField('This is a transaction from PHP')
    .sign('this is a top secret passphrase')

System.out.println(transfer.getTransaction().verify())
```

### Serialize (AIP11)

```groovy
import org.arkecosystem.crypto.transactions.Serializer
import org.arkecosystem.crypto.transactions.Transaction

def transaction = new Transaction()
transaction.type = 0
transaction.amount = 200000000
...

new Serializer().serialize(transaction)
```

### Deserialize (AIP11)

```groovy
import org.arkecosystem.crypto.transactions.Deserializer

new Deserializer().deserialize("serialized-hex")
```

## Message

### Sign

```groovy
import org.arkecosystem.crypto.utils.Message

Message.sign("Hello World", "this is a top secret passphrase")
```

### Verify

```groovy
import org.arkecosystem.crypto.utils.Message

def message = Message.sign("Hello World", "this is a top secret passphrase")

System.out.println(message.verify())
```

## Identities

### Address

#### Get an address from a passphrase
```groovy
import org.arkecosystem.crypto.identities.*

Address.fromPassphrase("this is a top secret passphrase")
```

#### Get an address from a public key
```groovy
import org.arkecosystem.crypto.identities.*

Address.fromPublicKey("034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192")
```

#### Get an address from a private key
```groovy
import org.arkecosystem.crypto.identities.*

Address.fromPrivateKey(privateKey)
```

#### Validate an address
```groovy
import org.arkecosystem.crypto.identities.*

Address.validate("D61mfSggzbvQgTUe6JhYKH2doHaqJ3Dyib")
```

### Private Key

#### Get a private key from a passphrase
```groovy
import org.arkecosystem.crypto.identities.*

PrivateKey.fromPassphrase("this is a top secret passphrase").getPrivateKeyAsHex()
```

#### Get a private key instance object from hex
```groovy
import org.arkecosystem.crypto.identities.*

PrivateKey.fromHex("d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712").getPrivateKeyAsHex()
```

### Public Key

#### Get a public key from a passphrase
```groovy
import org.arkecosystem.crypto.identities.*

PublicKey.fromPassphrase("this is a top secret passphrase")
```

### WIF

#### Get a WIF from a passphrase
```groovy
import org.arkecosystem.crypto.identities.*

WIF.fromPassphrase("this is a top secret passphrase")
```

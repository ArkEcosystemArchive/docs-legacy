---
title: "Java"
---

# Java

[[toc]]

## Installation

### Gradle

```bash
compile group: 'org.arkecosystem.crypto', name: 'crypto', version: '0.1.2'
```

### Maven

```xml
<dependency>
  <groupId>org.arkecosystem</groupId>
  <artifactId>crypto</artifactId>
  <version>0.1.2</version>
</dependency>
```

## Transactions

### Sign

```java
import org.arkecosystem.crypto.transactions.Transaction;
import org.arkecosystem.crypto.transactions.builder.Transfer;

Transaction transfer = new Transfer()
    .recipient('AXoXnFi4z1Z6aFvjEYkDVCtBGW2PaRiM25')
    .amount(133380000000)
    .vendorField("This is a transaction from Java")
    .sign('this is a top secret passphrase')
    .transaction;

System.out.println(transfer.verify())
```

### Serialize (AIP11)

```java
import org.arkecosystem.crypto.transactions.Serializer;
import org.arkecosystem.crypto.transactions.Transaction;
import org.arkecosystem.crypto.transactions.builder.Transfer;

Transaction transfer = new Transfer()
    .recipient('AXoXnFi4z1Z6aFvjEYkDVCtBGW2PaRiM25')
    .amount(133380000000)
    .vendorField("This is a transaction from Java")
    .sign('this is a top secret passphrase')
    .transaction;
...

byte[] bytes = new Serializer().serialize(transaction);
String serializedHex = Arrays.toString(bytes);
```

### Deserialize (AIP11)

```java
import org.arkecosystem.crypto.transactions.Deserializer;

Transaction transaction = new Deserializer().deserialize("serialized-hex");
```

## Message

### Sign

```java
import org.arkecosystem.crypto.utils.Message;

Message message = Message.sign("Hello World", "this is a top secret passphrase");
```

### Verify

```java
import org.arkecosystem.crypto.utils.Message;

Message message = Message.sign("Hello World", "this is a top secret passphrase");

System.out.println(message.verify());
```

## Identities

### Address

#### Get an address from a passphrase
```java
import org.arkecosystem.crypto.identities.Address;

Address.fromPassphrase("this is a top secret passphrase");
```

#### Get an address from a public key
```java
import org.arkecosystem.crypto.identities.Address;

Address.fromPublicKey("034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192");
```

#### Get an address from a private key
```java
import org.arkecosystem.crypto.identities.Address;

Address.fromPrivateKey(privateKey);
```

#### Validate an address
```java
import org.arkecosystem.crypto.identities.Address;

Address.validate("D61mfSggzbvQgTUe6JhYKH2doHaqJ3Dyib");
```

### Private Key

#### Get a private key from a passphrase
```java
import org.arkecosystem.crypto.identities.PrivateKey;

PrivateKey.fromPassphrase("this is a top secret passphrase").getPrivateKeyAsHex();
```

#### Get a private key instance object from hex
```java
import org.arkecosystem.crypto.identities.PrivateKey;

PrivateKey.fromHex("d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712").getPrivateKeyAsHex();
```

### Public Key

#### Get a public key from a passphrase
```java
import org.arkecosystem.crypto.identities.PublicKey;

PublicKey.fromPassphrase("this is a top secret passphrase");
```

### WIF

#### Get a WIF from a passphrase
```java
import org.arkecosystem.crypto.identities.WIF;

WIF.fromPassphrase("this is a top secret passphrase");
```

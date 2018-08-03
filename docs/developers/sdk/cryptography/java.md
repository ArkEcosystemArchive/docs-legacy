---
title: "Java"
---

# Java

::: warning
This project is still under development. This page will get more content as the project evolves. In the meantime you can view its source on [Github](https://github.com/ArkEcosystem/java-crypto/).
:::

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

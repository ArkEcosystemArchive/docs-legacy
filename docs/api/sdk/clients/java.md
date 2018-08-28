---
title: "Java"
---

# Java

::: warning
This project is still under development. This page will get more content as the project evolves. In the meantime you can view its source on [Github](https://github.com/ArkEcosystem/java-client/).
:::

[[toc]]

## Installation

### Gradle

```bash
compile group: 'org.arkecosystem.client', name: 'client', version: '0.1.0'
```

### Maven

```xml
<dependency>
    <groupId>org.arkecosystem.client</groupId>
    <artifactId>client</artifactId>
    <version>0.1.0</version>
    <scope>test</scope>
</dependency>
```

## Basics

```java
import org.arkecosystem.client.Connection

Connection connection = new Connection([
    host: 'http://my.ark.node:port/api/',
    version: 1
])

def response = connection.api('transactions').get('dummy')
```

## Connections

```java
import org.arkecosystem.client.ConnectionManager

def manager = new ConnectionManager()

manager.connect([
    host: 'http://my-main.ark.node:port/api/',
    version: 1
], 'main')

manager.connect([
    host: 'http://my-backup.ark.node:port/api/',
    version: 1
], 'backup')
```

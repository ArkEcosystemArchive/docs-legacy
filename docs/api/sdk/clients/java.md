---
title: "Java"
---

# Java

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

## Usage

## Connections

```java
import com.google.gson.internal.LinkedTreeMap;
import org.arkecosystem.client.Connection;
import org.arkecosystem.client.ConnectionManager;

import java.util.HashMap;
import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        HashMap<String, Object> map = new HashMap<>();
        // For V1
        map.put("host", "my.node.v1.ip");
        map.put("version", 1);
        // For V2
        map.put("host", "my.node.v2.ip");
        map.put("version", 2);

        ConnectionManager manager = new ConnectionManager();
        manager.connect(map);
        ...
        manager.disconnect();
    }
}
```

### Initialization

```java
import com.google.gson.internal.LinkedTreeMap;
import org.arkecosystem.client.Connection;
// For V1
import org.arkecosystem.client.api.one.One;
// For V2
import org.arkecosystem.client.api.two.Two;

import java.util.HashMap;
import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        // V1
        HashMap<String, Object> map = new HashMap<>();
        map.put("host", "http://my.node.v1.ip:port/api/");
        map.put("version", 1);
        Connection<One> connection = new Connection(map);
        // V2
        HashMap<String, Object> map = new HashMap<>();
        map.put("host", "http://my.node.v2.ip:port/api/");
        map.put("version", 2);
        Connection<Two> connection = new Connection(map);
        ...
    }
}
```

### Accounts - V1

```java
// ...
LinkedTreeMap<String, Object> actual = connection.api().accounts.all();
System.out.println(actual);

... > {accounts= [{
... > ...
... > ]}}
```

### Blocks V1 and V2

```java
// ...
LinkedTreeMap<String, Object> actual = connection.api().blocks.all();
System.out.println(actual);

... > {blocks= [{
... > ...
... > ]}}
```

```java
// ...
LinkedTreeMap<String, Object> actual = connection.api().blocks.all();
System.out.println(actual);

... > {blocks= [{
... > ...
... > ]}}
```

### Delegates V1 and V2

```java
// ...
LinkedTreeMap<String, Object> actual = connection.api().delegates.all();
System.out.println(actual);

... > {delegates= [{
... > ...
... > ]}}
```

```java
// ...
LinkedTreeMap<String, Object> actual = connection.api().delegates.all();
System.out.println(actual);

... > {delegates= [{
... > ...
... > ]}}
```

### Loader - V1

```java
// ...
LinkedTreeMap<String, Object> actual = connection.api().loader.status();
System.out.println(actual);

... > {loaded=..., success=true}
```

### Node - V2

```java
// ...
LinkedTreeMap<String, Object> actual = connection.api().node.status();
System.out.println(actual);

... > {statusCode=...}
```

### Peers - V1 and V2

```java
// ...
LinkedTreeMap<String, Object> actual = connection.api().peers.all();
System.out.println(actual);

... > {peers= [{
... > ...
... > ]}}
```

```java
// ...
LinkedTreeMap<String, Object> actual = connection.api().peers.all();
System.out.println(actual);

... > {peers= [{
... > ...
... > ]}}
```

### Signatures - V1 

```java
// ...
LinkedTreeMap<String, Object> actual = connection.api().signatures.fee();
System.out.println(actual);

... > {fee=5.0E8, success=true}
```

### Transactions - V1 and V2

```java
// ...
LinkedTreeMap<String, Object> actual = connection.api().transactions.all();
System.out.println(actual);

... > {transactions= [{
... > ...
... > ]}}
```

```java
// ...
LinkedTreeMap<String, Object> actual = connection.api().transactions.all();
System.out.println(actual);

... > {transactions= [{
... > ...
... > ]}}
```

### Votes - V2

```java
// ...
LinkedTreeMap<String, Object> actual = connection.api().votes.all();
System.out.println(actual);

... > {votes= [{
... > ...
... > ]}}
```

### Wallets - V2

```java
// ...
LinkedTreeMap<String, Object> actual = connection.api().wallets.all();
System.out.println(actual);

... > {wallets= [{
... > ...
... > ]}}
```

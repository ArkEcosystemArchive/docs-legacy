---
title: "Java"
---

# Java

[[toc]]

## Installation

### Gradle

```bash
compile group: 'org.arkecosystem.client', name: 'client', version: '0.1.2'
```

### Maven

```xml
<dependency>
  <groupId>org.arkecosystem</groupId>
  <artifactId>client</artifactId>
  <version>0.1.2</version>
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
        // For V2
        map.put("host", "my.node.v2.ip");
        map.put("API-Version", 2);

        ConnectionManager manager = new ConnectionManager();
        Connection<Two> connection = manager.connect(map);
        ...
        manager.disconnect();
    }
}
```

### Initialization

```java
import com.google.gson.internal.LinkedTreeMap;
import org.arkecosystem.client.Connection;
// For V2
import org.arkecosystem.client.api.two.Two;

import java.util.HashMap;
import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        // V2
        HashMap<String, Object> map = new HashMap<>();
        map.put("host", "http://my.node.v2.ip:port/api/");
        map.put("API-Version", 2);
        Connection<Two> connection = new Connection(map);
        ...
    }
}
```

### Blocks V2

```java
// ...
LinkedTreeMap<String, Object> actual = connection.api().blocks.all();
System.out.println(actual);

... > {blocks= [{
... > ...
... > ]}}
```

### Delegates V2

```java
// ...
LinkedTreeMap<String, Object> actual = connection.api().delegates.all();
System.out.println(actual);

... > {delegates= [{
... > ...
... > ]}}
```

### Node - V2

```java
// ...
LinkedTreeMap<String, Object> actual = connection.api().node.status();
System.out.println(actual);

... > {statusCode=...}
```

### Peers - V2

```java
// ...
LinkedTreeMap<String, Object> actual = connection.api().peers.all();
System.out.println(actual);

... > {peers= [{
... > ...
... > ]}}
```

### Transactions - V2

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

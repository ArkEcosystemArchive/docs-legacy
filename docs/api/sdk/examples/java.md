---
title: "Java"
---

# Java SDK Demo

```java
import com.google.gson.internal.LinkedTreeMap;
import org.arkecosystem.client.Connection;
import org.arkecosystem.client.api.two.Two;
import org.arkecosystem.crypto.configuration.Network;
import org.arkecosystem.crypto.networks.Devnet;
import org.arkecosystem.crypto.networks.Mainnet;
import org.arkecosystem.crypto.transactions.Transaction;
import org.arkecosystem.crypto.transactions.builder.Transfer;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;

public class ArkClientDemo {

   public static Transaction CreateTransferTransaction(int amount, String recipientAddress, String passphrase1) {
       Transaction actual = new Transfer()
               .recipient(recipientAddress)
               .amount(amount)
               .vendorField("This is a transaction from Java")
               .sign(passphrase1)
               .transaction;

       return actual;
   }

   public static void main(String[] args) throws IOException {
       HashMap<String, Object> map = new HashMap<>();
       map.put("host", "http://node-ip:port/api/");
       map.put("API-Version", 2);

       Connection<Two> connection = new Connection(map);

       // testing blocks endpoint // find block with height 545774
       LinkedTreeMap<String, Object> actual = connection.api().blocks.show("545774");
       System.out.println(actual);

       // creating a transaction with the arkecosytem-java-crypto builder
       Transaction transfer1 = CreateTransferTransaction(1, "AJDkvwkwxW4N9bTYqJUijmEtY3rKwniCZQ", "secret passphrase");
       System.out.println(transfer1.toJson());

       // adding transaction to payload, payload is an array of transactions
       ArrayList<String> payload = new ArrayList();
       payload.add(transfer1.toJson());

       // posting transactions to the connected node as specified in the connection above
       LinkedTreeMap<String, Object> postResponse = connection.api().transactions.create(payload);

       System.out.println(postResponse);
   }
}
```

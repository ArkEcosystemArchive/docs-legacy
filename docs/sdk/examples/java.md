---
title: "Java"
---

The code represents minimal example of `client` and `crypto` libraries usage for the specified programming language. Example functionality consists of:
- importing/loading the needed dependencies/libraries
- initialisation of the client and connecting to an ark-node(peer)
- retrieve a specific block via API
- create transaction payload
- post transaction payload to an ark-node(peer)
- handle response data from API

Please refer to the code comments or check more detailed documentation for specific SDK in the left menu.

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

public class Main {

    public static Transaction CreateTransferTransaction(int amount, String recipientAddress, String passphrase1) {
        return new Transfer()
                .recipient(recipientAddress)
                .amount(amount)
                .vendorField("This is a transaction from Java")
                .sign(passphrase1)
                .transaction;
    }

    public static void  ParseResponse(LinkedTreeMap<String, Object> postResponse) {
        // simple parsing from response object
        LinkedTreeMap<String, Object> responseData = (LinkedTreeMap<String, Object>) postResponse.get("data");
        LinkedTreeMap<String, Object> responseErrors = (LinkedTreeMap<String, Object>) postResponse.get("errors");

        ArrayList<String> accept = (ArrayList<String>) responseData.get("accept");
        ArrayList<String> broadcast = (ArrayList<String>) responseData.get("broadcast");
        ArrayList<String> invalid = (ArrayList<String>) responseData.get("invalid");
        ArrayList<String> excess = (ArrayList<String>) responseData.get("excess");

        System.out.println("Accepted: " + accept);
        System.out.println("Broadcasted: " + broadcast);
        System.out.println("Invalid: " + invalid);
        System.out.println("Excess: " + excess);
        System.out.println("Errors: " + responseErrors);
    }

    public static boolean CheckIfTrue(String transactionId, String key, LinkedTreeMap<String, Object> postResponse) {
        return  ((ArrayList<String>)((LinkedTreeMap<String, Object>) postResponse.get("data")).get(key)).contains(transactionId);
    }

    public static void main(String[] args) throws IOException {
        // setting the network, defaults to Mainnet
        // Network.set(new Mainnet());

        HashMap<String, Object> map = new HashMap<>();
        map.put("host", "http://node-ip:port/api/");
        map.put("API-Version", 2);

        Connection<Two> connection = new Connection(map);

        // testing blocks endpoint // find block with height 545774
        LinkedTreeMap<String, Object> actual = connection.api().blocks.show("545774");
        System.out.println(actual);

        // creating a transaction with the arkecosystem-java-crypto builder
        Transaction transfer1 = CreateTransferTransaction(1, "AJDkvwkwxW4N9bTYqJUijmEtY3rKwniCZQ", "secret passphrase");
        System.out.println(transfer1.toJson());

        // adding transaction to payload, payload is an array of transactions
        ArrayList<String> payload = new ArrayList();
        payload.add(transfer1.toJson());

        // posting transactions to the connected node as specified in the connection above
        LinkedTreeMap<String, Object> postResponse = connection.api().transactions.create(payload);
        System.out.println("Raw response: " + postResponse);

        // calling ParseResponse
        ParseResponse(postResponse);

        // checking if transfer1 was accepted and broadcasted
        System.out.println("Accepted status: " + CheckIfTrue(transfer1.id,"accept", postResponse));
        System.out.println("Broadcast status: " + CheckIfTrue(transfer1.id,"broadcast", postResponse));
    }
}
```

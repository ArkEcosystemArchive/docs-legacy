---
title: "Python"
---

The code represents minimal example of `client` and `crypto` libraries usage for the specified programming language. Example functionality consists of:
- importing/loading the needed dependencies/libraries
- initialisation of the client and connecting to an ark-node(peer)
- retrieve a specific block via API
- create transaction payload
- post transaction payload to an ark-node(peer)
- handle response data from API

Please refer to the code comments or check more detailed documentation for specific SDK in the left menu.

# Python SDK Demo

```python
from ark.client import ArkClient
from crypto.transactions.builder.transfer import Transfer

# Instantiate the client
client = ArkClient('https://dexplorer.ark.io:8443/api/', api_version='v2')

# find block with height 545774
response = client.blocks.get('545774')

# Creating a transaction with the Arkecosystem-Python-Crypto builder
tx = Transfer(recipientId='D5rHMAmTXVbG7HVF3NvTN3ghpWGEii5mH2', amount=10000000,
              vendorField="This is a transaction from Python")

tx.sign('my super secret seedpass')

# adding transaction to payload, payload is an array of transactions
transaction_dict = tx.to_dict()


if __name__ == '__main__':
    # posting transactions to the connected node as specifid in the connection above
    client.transactions.create([transaction_dict])
```

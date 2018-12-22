---
title: "Python"
---

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

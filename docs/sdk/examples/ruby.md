---
title: "Ruby"
---

The code represents minimal example of `client` and `crypto` libraries usage for the specified programming language. Example functionality consists of:
- importing/loading the needed dependencies/libraries
- initialisation of the client and connecting to an ark-node(peer)
- retrieve a specific block via API
- create transaction payload
- post transaction payload to an ark-node(peer)
- handle response data from API

Please refer to the code comments or check more detailed documentation for specific SDK in the left menu.

# Ruby SDK Demo

```ruby
require 'arkecosystem/client'
require 'arkecosystem/crypto'

connection = ArkEcosystem::Client::Connection.new(host: "http://my.ark.node:4003/api/", version: 2)

transaction = ArkEcosystem::Crypto::Transactions::Builder::Transfer.new()
                  .set_recipient_id('DBk4cPYpqp7EBcvkstVDpyX7RQJNHxpMg8')
                  .set_amount(100000)
                  .set_vendor_field('Hello from Ruby !')
                  .sign('mysupersecretppassphrase')

puts transaction.verify

response = connection.transactions.create({transactions: [transaction.to_params]})

puts response.body
```

---
title: "Ruby"
---

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

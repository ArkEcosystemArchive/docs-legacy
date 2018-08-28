---
title: "Ruby"
---

# Ruby

[[toc]]

## Installation

Add this line to your application's Gemfile and then execute `bundle`

```bash
gem 'arkecosystem-client'
```

## Basics

```ruby
require 'arkecosystem/client'

connection = ArkEcosystem::Client::Connection.new({
  host: "http://my.ark.node:port/api/",
  version: 1
})

response = connection.accounts.balance('DQ7VAW7u171hwDW75R1BqfHbA9yiKRCBSh').body

if response["success"]
  puts response["balance"]
end
```

## Connections

```ruby
require 'arkecosystem/client'

manager = ArkEcosystem::Client::ConnectionManager.new()

manager.connect(ArkEcosystem::Client::Connection.new({
  host: "http://my.ark.node:port/api/",
  version: 1
}), 'main')

manager.connect(ArkEcosystem::Client::Connection.new({
  host: "http://my.ark.node:port/api/",
  version: 1
}), 'backup')

begin
  response = manager.connection('main').accounts.balance('DQ7VAW7u171hwDW75R1BqfHbA9yiKRCBSh').body
rescue Exception => e
  response = manager.connection('backup').accounts.balance('DQ7VAW7u171hwDW75R1BqfHbA9yiKRCBSh').body
end

if response["success"]
  puts response["balance"]
else
  puts 'Both the main and backup node did not repsond.'
end
```

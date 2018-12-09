---
title: "Ruby"
---

# Ruby

[[toc]]

## Ruby Installation

Ruby can be downloaded [here](https://www.ruby-lang.org/en/downloads/).

For further informations on how to install Ruby on your operating system : 

Windows : [RubyInstaller](https://rubyinstaller.org/)

Unix & Linux: [rbenv](https://github.com/rbenv/rbenv) and [rvm](http://rvm.io/)


## Installation

Add this line to your application's Gemfile and then execute `bundle`

```bash
gem 'arkecosystem-client'
```

## Usage


## Basic
```ruby
require 'arkecosystem/client'

// V2
connection = ArkEcosystem::Client::Connection.new(host: 'http://my.ark.node:port/api/', version: 2)
... 

```

## Connections

```ruby
require 'arkecosystem/client'

manager = ArkEcosystem::Client::ConnectionManager.new()

manager.connect(ArkEcosystem::Client::Connection.new({
  host: "http://my.ark.node:port/api/",
  version: 2
}), 'main')

manager.connect(ArkEcosystem::Client::Connection.new({
  host: "http://my.ark.node:port/api/",
  version: 2
}), 'backup')

begin
  response = manager.connection('main').accounts.balance('DQ7VAW7u171hwDW75R1BqfHbA9yiKRCBSh').body
rescue Exception => e
  response = manager.connection('backup').accounts.balance('DQ7VAW7u171hwDW75R1BqfHbA9yiKRCBSh').body
end

if response["success"]
  puts response["balance"]
else
  puts 'Both the main and backup node did not respond.'
end
```

### Blocks V2

```ruby
// ...
response = connection.blocks.all().body

puts response

... > {"meta"=>{"count"=>100,
... > ...
... > }}
```

### Delegates V2

```ruby
// ...
response = connection.delegates.all().body

puts response

... > {"meta"=>{"count"=>100,
... > ...
... > }}
```

### Node - V2

```ruby
// ...
response = connection.node.status().body

puts response

... > {"data"=>{
... > ...
... > }}
```

### Peers - V2

```ruby
// ...
response = connection.peers.all().body

puts response

... > {"meta"=>{"count"=>
... > ...
... > }}
```

### Transactions - V2

```ruby
// ...
response = connection.transactions.all().body

puts response

... > {"meta"=>{"count"=>100,
... > ...
... > }}
```

### Votes - V2

```ruby
// ...
response = connection.votes.all().body

puts response

... > {"meta"=>{"count"=>100,
... > ...
... > }}
```

### Wallets - V2

```ruby
// ...
response = connection.wallets.all().body

puts response

... > {"meta"=>{"count"=>100,
... > ...
... > }}
```

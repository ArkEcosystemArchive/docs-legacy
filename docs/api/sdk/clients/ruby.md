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

Or install it from the command line

```bash
$ gem install arkecosystem-client
```

## Usage


## Basic
```ruby
require 'arkecosystem/client'

// V1
connection = ArkEcosystem::Client::Connection.new(host: 'http://my.ark.node:port/api/', version: 1)
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
  puts 'Both the main and backup node did not respond.'
end
```

### Accounts - V1

```ruby
// ...
response = connection.accounts.balance('AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv').body

if response['success']
  puts response['balance']
end

... > 2039101835000000
```

### Blocks V1 and V2

```ruby
// ...
response = connection.blocks.all().body

if response['success']
  puts response
end

... > {"success"=>true, "blocks"=>[{
... > ...
... > }]}
```

```ruby
// ...
response = connection.blocks.all().body

puts response

... > {"meta"=>{"count"=>100,
... > ...
... > }}
```

### Delegates V1 and V2

```ruby
// ...
response = connection.delegates.all().body

if response['success']
  puts response
end

... > {"success"=>true, "delegates"=>[{
... > ...
... > }]}
```

```ruby
// ...
response = connection.delegates.all().body

puts response

... > {"meta"=>{"count"=>100,
... > ...
... > }}
```

### Loader - V1

```ruby
// ...
response = connection.loader.status().body

if response['success']
  puts response
end

... > {"success"=>true, ...
... > ...
... > }
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

### Peers - V1 and V2

```ruby
// ...
response = connection.peers.all().body

if response['success']
  puts response
end

... > {"success"=>true, "peers"=>[{
... > ...
... > }]}
```

```ruby
// ...
response = connection.peers.all().body

puts response

... > {"meta"=>{"count"=>
... > ...
... > }}
```

### Signatures - V1 

```ruby
// ...
response = connection.signatures.fee().body

if response['success']
  puts response
end

... > {"success"=>true, "fee"=>500000000}
```

### Transactions - V1 and V2

```ruby
// ...
response = connection.transactions.all().body

if response['success']
  puts response
end

... > {"success"=>true, "transactions"=>[{
... > ...
... > }]}
```

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

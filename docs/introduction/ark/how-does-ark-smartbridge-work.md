---
title: "How Does Ark Smartbridge Work?"
---

# How Does Ark Smartbridge Work?

[[toc]]

By now many people want to know the technical details of Ark’s SmartBridge but broken down into a less technical and everyday example. That’s what this article will focus on. This article will also assume for examples that most blockchains are already SmartBridge compatible.

SmartBridge is the ability to connect and communicate between blockchains. By connecting blockchains, we can solve the great question of the last few years in the altcoin community. Which coin will replace bitcoin? The answer… none of them, and all of them.

With Ark’s SmartBridge Technology every coin becomes even more powerful, every app produced on any blockchain has the potential to reach a greater audience and even bitcoin can gain the functionality of every altcoin through a simple blockchain token called ARK.

Ark’s SmartBridge communicates between the blockchains using a special data section called Vendor Fields and special Encoded Listener nodes that comb through this data for tasks that it can perform.

![ACES](./assets/how-does-ark-smartbridge-work/9b0fa65-aces-ark-to-eth.png)

### What does that mean?
In order for Ark to become the medium/intermediary between chains, each chain needs a small snippet of code implemented. It is very easy to insert and not harmful to any blockchain, current or otherwise. Once this tiny code is inserted into the core code of any blockchain, that’s it. Now, that blockchain is connected to Ark. We make it painless and extremely simple to implement, and will provide very easy to follow instructions with 24/7 support via slack chat.

Ok, so what does that REALLY mean?

It’s quite simple. If you want to trigger an event on a blockchain via a different blockchain, you check if that chain is SmartBridge compatible. If it is, then you can issue a SmartBridge transaction to any compatible blockchain via the ark wallet and the possibilities are endless.

![ACES](./assets/how-does-ark-smartbridge-work/ba51bff-aces-marketplace-contract-form.png)

**Example 1:** If you wanted to trigger an ETH smart contract but hold ark, you could just send the instructions through ark SmartBridge, right in the wallet to trigger the event. The code embedded in the ETH chain is always listening for an ark SmartBridge transaction and will collect this info and trigger the function to issue a contract.

**Example 2:** You want to issue a record entry in Factom, but you only hold ARK. So you would go to your Ark wallet, enter the correct info and instructions for the FCT chain via the SmartBridge tab. Then send it. That’s it, now the FCT chain receives the info and acts appropriately.

**Example 3:** I want to send 10 ARK to my ETH wallet. This would require an encoded listener with a back-end ability to exchange currencies. (ie: Shapeshift, Changelly, or Coinbase) Once I send my 10 ARK to my ETH wallet, the encoded listener sees this TX (transaction) as an exchange function and acts accordingly. The encoded listener automatically picks up that this TX needs a conversion, so it acts as a relay node picking up the TX, converting it, and rebroadcasting the TX on its way to the ETH wallet. The encoded listener collects a small fee for processing the TX.

(Example 3 would require Shapeshift to be its own encoded listener so that it is always looking for the next SmartBridge TX. Just like Ark, Encoded listener nodes set their own transaction fees. Which can be adjusted by the node operator but not Ark.)

### Encoded listeners
The Encoded listener node is a hub for listening to SmartBridge transactions. This transaction hub can be setup and run by anyone, Shapeshift, Changelly or even Coinbase. Anyone that wants to act as a medium to help the network can. And in exchange for providing this service they will be collecting transaction fees for passing data or exchanging currencies via SmartBridge.

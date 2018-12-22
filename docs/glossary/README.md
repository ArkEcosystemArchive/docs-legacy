---
title: "Glossary"
---

# Glossary

Our glossary contains key terminology that is utilized in documentation and in the broader Ark Ecosystem. If you have any problems or requests please [open an issue](https://github.com/ArkEcosystem/docs).

### Account
An account is a pair of private and public keys in which value is stored. In Blockchain networks, accounts can refer to many things. They are however mainly referred to as the basis for user, wallet or contract identity. An account is more like a record which the network participants maintain to track the network state.

On the Ark Blockchain, the account is used to keep track of sent and received transactions (transfers, votes, multisignatures, second signatures, delegate registration and eventually many more). The account owner can issue an outgoing transaction with the use of his secret phrase or receive funds by having another user send a transaction from their account to the receiver's account address.

In the Bitcoin network, by contrast, the account is an evolving collection of keys which represent unspent coins that can be used for outgoing transfers.

## Block
A block is a collection of transactions. It is also the incremental unit of the Blockchain. That means the chain's progression is only recorded once every block.

Blocks hold quite a lot of metadata on the Ark Blockchain, like:

- Height
- Timestamp
- Transactions
- Forger
- Total transfer amount
- Total fee amount

These are a few examples of important information which blocks are required to hold for the network's stability.

## Delegate
A delegate is any account, or account owner, who has registered as one on the Blockchain with the use of a delegate registration transaction.

Once an account is recorded as an eligible delegate in the Blockchain, it may be the recipient of vote transactions (pledges) by other accounts.

For Ark, the top 51 delegates are responsible of forging blocks and maintaining consensus over the transaction history of the Blockchain. If a delegate is inactive for a given 51 block round, it temporarily loses its ability to forge a block and is replaced by another delegate.

Delegated block production is an advantage for a Blockchain. It allows for a seamless processing of blocks because the delegates are incentivized, through monetary reward, to maintain their voters' pledges by acting appropriately.

## Peer
When dealing on the Ark network, peers are users who contribute by providing node instances which help with stability.

By running the software node developed by the Ark Core team on their local or remote machines, users make the network stronger and more available.

## Node
A node is a functional participant in the distributed network. It is the term used to describe the software instance, tied to the user's IP address, which is responsible for performing automatic and configurable operations on behalf of a peer.

The node has clearly defined responsibilities regarding the network. This may be unique to itself or a smaller group of peers, but nodes are typically copies of the upstream GitHub repository. 

For example, custom plugins can be included in the node's software, Ark Core for the Ecosystem, which would extract transactions with a specifically matching SmartBridge data field and re-package them into a new transaction to be distributed to the network on the node's behalf, alongside the original transaction on the sender's behalf.

In Ark, a node can also be a forger. If the delegate account associated with the forger node is voted into power, the node is responsible of forging the next block once every 51 block round.

The network is alive and usable as long as there are peers running enough nodes for the consensus to maintain validity and while the network is readily available to the public - in the case of a public Blockchain.

## Signature
A signature is a cryptographic one-way hashing function which allows a lightweight and secure way to determine the authenticity and integrity of a message. In the case of blockchain networks, messages mainly refer to transactions and their payloads (SmartBridge for Ark) or blocks.

Signatures are necessary to prove that a block or transaction was forged or created by the owner of the secret passphrase linked to the publicly facing identity of the user.

## MultiSignature
To provide added security and utility, certain blockchain networks enable the creation of multisignature accounts, which operate much like traditional user accounts, although they are technically owned by multiple users.

A multisignature is useful to determine a list of public keys, owned by normal users, by which a transaction outgoing from the multisignature wallet must be signed. for it to be included into a block by the forging nodes. A minimum number of users must sign the outgoing transactions from a multisignature wallet.

## Transaction
The transaction is undoubtedly the most common type of transfer which occurs on the Ark blockchain. It is a very simple value exchange from one address to another and cannot be refuted.

For a transaction to be valid in a blockchain, it must first be signed by the owner of the issuing account, then it must be propagated through the network of peers until it reaches the transaction pool of one or many delegates. When a delegate node forges a block, it may decide to include the newly created transaction in the list of transactions which will be valid once the block is finally forged and shared with other peers.

A transaction is increasingly valid the more blocks are forged, as sometimes errors can happen in the distributed network due to consensus complications.

It is recommended to let several blocks be forged before taking any action related to the transaction.

## Dark Address
A Dark address behaves like a normal Ark address, but it is only available on the Development Network of Ark and holds the DARK currency.

## Reward
Once very 8 seconds, when a block is forged, the fees for every transaction and a steady bonus is awarded to the forging delegate.

The block reward is important to provide an economic incentive for delegates to remain in the top 51.

## Fee
On the Ark blockchain and similar Bridgechains, fees are charged based on the type of transaction sent. A flat fee can be charged for every transfer of ARK from one address to another or when performing transactions such as: delegate registrations, second signature registrations, multisignature registrations, etc.

With Ark Core, a new dynamic fee structure is implemented. The new structure allows for delegates, who are responsible for forging blocks from transactions, to set their own fees on a transaction type basis. This means that your transaction can cost more or less in fees for it to be included into a block and then the blockchain.

The standard rate for a simple transfer of ARK from one address to another is 0.1 ARK, for example. You can view the current value of 1 ARK on [the Ark Explorer](https://explorer.ark.io).

## Height
It is useful to have some way to track the progression of a blockchain. Considering the linear nature of a blockchain's progression, it is important to have some way of identifying when specific blocks, or transactions within blocks, as well as events occur on the blockchain.

The height of the blockchain refers to a specific point in its history and is calculated by adding up every single block since the genesis block.

Future height can be estimated based on block times which are governed by the network-specific consensus algorithm.

## Forged block
A forged block is a collection of transactions which were verified and bundled into a block by a delegate. There is a total of 51 blocks per round, each being forged by a unique delegate within that round. Once every 8 seconds, a new forged block is appended to the Blockchain, further confirming the validity of the preceding block.

Forging can only be performed by one top delegate at a time, otherwise there would most likely be many diverging chains due to the lack of coordination. 

## Block missed
Sometimes, a delegate can have problems with their responsibility to forge a block when their time comes to do so.

When a delegate doesn't forge and broadcast a block within the time slot allocated, their productivity decreases. Delegates with lower productivity typically lose voters when they begin missing many blocks.

## Approval
This is a value derived from the amount of votes, counted in ARK, a delegate has to their name and the total amount of ARK used for voting on the Blockchain.

Delegates with more votes than others will also show a higher approval rating, often shown in percentage.

## Vote
In a Proof of Stake Blockchain like Ark, the nodes responsible for forging blocks are the 51 registered delegates who have the most votes. A given address can only vote for a single registered delegate and the weight of a vote is proportional to the amount of ARK held by the voter.

## Voter
Every Ark address with a sufficient balance can become a voter by sending a vote.

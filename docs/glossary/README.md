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

For Ark, the top 51 delegates are responsible of forging blocks and maintaining consensus over the transaction history of the Blockchain. If a deleagte is inactive for a given 51 block round, it temporarily loses its ability to forge a block and is replaced by another delegate.

Delegated block production is an advantage for a Blockchain. It allows for a seamless processing of blocks because the delegates are incentivized, through monetary reward, to maintain their voters' pledges by acting appropriately.
## Loader
A loader syncs the peer with the network history.

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
A signature is a cryptographic way to prove the provenance of a message or transaction.

## MultiSignature
A multisignature is a cryptographic way to prove that a message or transaction comes from a minimum number of possible accounts.

## Transaction
The signed transfer of value from one account to another

## Transport
A Transport happens to data as it flows through the network from peer to peer.

## Dark Address
A Dark address is on the Development Network of Ark and holds the DARK currency.

## Reward
A reward is attributed to the block creator for its validation efforts.

## Fee
A fee is taken from the transaction and added to the reward.

## Height
The height is the block number or specific location in the blockchain.

## Forged
A forged block is created by a delegate.

## Block missed
A block missed wasn't forged by the approved delegate on time.

## Approval
This is a value derived from the amount of votes, counted in ARK, a delegate has to their name and the total amount of ARK used for voting on the Blockchain.

Delegates with more votes than others will also show a higher approval rating, often shown in percentage.

## Vote
A vote is a weighing of the voting power towards a delegate

## Voter
A voter holds the power to elect a delegate with his account.

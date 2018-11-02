# Data Models

These are the data models you will encounter throughout Ark Core and their representation in data as returned in the `core-api`. 

Keep in mind that this data structure is kept consistent as much as possible for the sake of backwards and forwards compatibility. As such, these data hierarchies are not necessarily the same as the object's internal representation. 

This is something to keep in mind when accessing these models through the Event API, for example, as the correct way to access information might be different than following the structure listed here. 

Where possible, these discrepancies are noted below. The `transformers` directories in the `core-api` module help to paint a more complete picture; they can be found in their respective [v1](https://github.com/ArkEcosystem/core/tree/develop/packages/core-api/lib/versions/1/transformers) and [v2](https://github.com/ArkEcosystem/core/tree/develop/packages/core-api/lib/versions/2/transformers) repositories.

## Block

Blocks are the core unit of any given blockchain. In ARK, blocks contain a group of transactions and are signed by a delegate to validate their authenticity.

- **id**
- **version** t*he version of ARK active on the network when the block was forged*
- **height** *the height of the block*
- **previous** *the ID of the previous block in the chain*
- **forged**:
    - **reward** *total reward for mining block*
    - **fee** total *fee paid by users for this block*
    - **total** *total reward + total fee*
- **payload** fields holding metadata on the block's transactions:
    - **hash** *The SHA256 hash of the block's content*
    - **length** *the length of the payload hash in bytes*
- **generator** *the delegate who generated the block*:
    - *username*
    - *address*
    - *publicKey*
- **signature** *the signature of the delegate who forged the block*
- **confirmations** *the amount of times the network has declared this block as valid*
- **transactions** *the amount of transactions in the block*
- **timestamp**

## Transaction

Transactions are the heart of any blockchain, cryptocurrency or otherwise. They represent a transfer of value from one network participant to another. In ARK, transactions can be of one of multiple types, specified in [AIP11](https://github.com/ArkEcosystem/AIPs/blob/master/AIPS/aip-11.md), which can affect the content and data structure of each transaction's payload.

- **id**
- **blockId** *the ID of the block in which this transaction is included*
- **type** *the AIP11 type of the transaction*
- **amount** *the transaction value in arktoshis*
- **fee** *the fee paid to include the transaction in its block*
- **sender** *the address of the transaction sender*
- **recipient** *the address of the transaction recipient*
- **signature** *the signature of the sending party*
- **signSignature** *if secondSignature is enabled, the second signature is stored here*
- **signatures** *an array of the transaction's signatures, used in multisignature transactions to validate more than two signatures*
- **vendorField** an optional text field written by the sender and associated with the transaction*
- **asset** *the type-specific transaction payload*
- **confirmations** *the amount of times this transaction's block has been confirmed*
- **timestamp**

## Wallet

Wallets are individual accounts on the ARK ledger. Each wallet has a balance that grows and shrinks as the wallet sends and receives transactions on the network. Additionally, each wallet can cast exactly one vote for one delegate to forge on their behalf.

Note in particular that private keys and passphrases are not included on this model, as they are never stored in memory at any point during the operation of Ark Core nodes.

- **address** *the wallet's address, derived from private key*
- **publicKey** *the wallet's public key, derived from private key*
- **secondPublicKey** *if the wallet has enabled a second key, that second key is stored here*
- **vote** *the delegate username of this wallet's vote recipient*
- **createdAt** *the timestamp of this wallet's creation*

## Delegate

Though delegates are treated as their own data type in the ARK Public API, in their implementation delegates are nothing more than wallets whose owners have registered a delegate username. 

They share all fields in common with the Wallet data structure, with a few extra fields:

- **username** *the delegate username of this wallet*
- **voteBalance** *the sum of balances of all wallets voting for the delegate*
- **producedBlocks** *the total number of blocks produced by the delegate*
- **missedBlocks** *the total number of blocks missed by the delegate*

## Peer

Peers are nodes in the Ark network that work together to relay transactions and form consent. Each node keeps a list of current peers, regularly pruning and updating the list as new peers join and leave the network.

- **ip** *the IP address of the peer*
- **port** *the port on which the peer has enabled its P2P connection*
- **version** *the network version this peer is operating on*
- **height** *the total height of the blockchain as reported by the peer*
- **status** *the operational status of the peer*
- **os** *the operating system running on the peer*
- **latency** *the average delay between contacting the peer and receiving a response*
**
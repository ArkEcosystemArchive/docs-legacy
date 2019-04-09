# Inside a Transaction Lifecycle: From Client to Blockchain

All valid ARK transactions begin as user-submitted data and end as immutable history on the ARK blockchain. This column outlines a transaction's journey from client to blockchain in general terms. While the implementation specifics will depend on the platform used to submit the transaction, ARK's extensive SDK coverage ensures that developers experience a unified development workflow across languages and platforms.

## Serialize

All transactions are serialized on client applications prior to submission to ARK Core nodes. Every Crypto SDK includes functionality for serializing transactions from raw data into the binary transaction format supported across the ARK blockchain topology. Look for a `builder` module within your chosen SDK that contains methods to chain data onto the transaction type of your choice.

Every `builder` module will have a method similar to the JavaScript SDK's `getStruct`, which will return a formatted transaction for submission to the ARK blockchain. Use this object, or an array of such objects, to invoke the `transactions.store()` method in your Client SDK.

No node will accept a transaction without a valid signature from a private key. Make sure you invoke the SDK builder's `sign` method on your transaction object using the sender's private key.

## Submit to ARK Core Node

End users most commonly submit transactions to ARK Core nodes using Client SDK's `transactions/store` function. This function will send a POST request with transaction data to the ARK Core node specified as the connection URL parameter when creating a Client instance.

## Receive and Validate at Node

Transactions are received at the POST `transactions` endpoint of the Public API corresponding to your version of ARK (we assume v2 in this chapter).

Before interacting with ARK Core internals in any way, all requests are first validated by the API endpoint schema. Each endpoint schema defines the structure that requests to that endpoint should conform to. All Client SDKs create API requests to conform to this standard, so following the SDK guidelines will typically result in your transaction passing validation.

Notably, no blockchain-level validation occurs at this earliest stage in the transaction lifecycle. Request validation ensures that your POST request can be understood by the network, not that the data it contains represents a valid transaction. This task falls to the next class to handle transaction requests: the TransactionGuard.

## Add to Transaction Guard

Assuming validation is successful, the posted transactions are processed by the request handler, which passes the data to the TransactionGuard for validation.

All transactions submitted to the guard are returned in one of four arrays:

- accept
- broadcast
- excess
- invalid

Internally, the guard processes transactions in its `validate` method by separating:

- transactions already in the pool
- transactions from blocked senders
- transactions from the future
- transactions with low fees for broadcast/pool inclusion
- transactions that fail to conform to their transaction type

At this point, ARK Core has a list of incoming transactions to add to the transaction pool. The guard now checks the pool to see whether it is at capacity. If so, the guard compares the incoming transactions against the pooled transactions and removes the transactions with the lowest fees.

## Add to Transaction Pool

The transaction pool is an in-memory data store that holds transactions before forging. All transactions are saved in this pool alongside the following metadata:

- the insertion sequence, or when the transaction was added relative to the others in the pool
- the pingCount, or the count of how many times this ARK Core node has received this transaction from its peers

Before a transaction is added to the pool, a "pool charge" is made against the sending account. This transaction is not applied in full until the transaction is included in a block, and is reverted should the transaction drop out of the pool for any reason. The point of the "pool charge" is to preemptively apply the transaction's effects to the account in question so that another transaction can not spend that value. This minimizes the possibility of a double spend, as the transaction pool will reject transactions that spend the same value twice.

All nodes broadcast the transactions they receive to their peers through the P2P API. Thus, as your transaction awaits forging, it will be joined in the pool by other uncommitted transactions from across the network.

When deciding on which transactions to include in the block, the transaction pool considers two factors: fee value and pool insertion time. The pool prefers transactions with higher fees and decides between transactions with similar fees by comparing their insertion sequence numbers. These considerations may be configured as described in [dynamic fees](/tutorials/node/dynamic-fees.html).

## Enter the Forging Sequence

Transactions move out of the pool once a forging Delegate is ready and eligible to forge it. At the moment of forging, transactions in the forger's pool are grouped into a potential block and passed to the delegate's `forge` method for inclusion in a block.

Inside the `forge` method, all transaction values, fees, and IDs within the block are added together. The values and fees are used to calculate block metadata, while the hashed IDs are concatenated and used as the block's `payloadHash` property.

With this information in hand, the block data and sorted transactions are passed to the crypto library's `Block.create` method alongside the forging delegate's keys.

## Create the Block

The `Block.create` method uses the following algorithm to create a new block:

1. Derive the delegate's public key from the function's `keys` parameter.
2. Create a payload hash by serializing the block data into a binary-encoded format.
3. Create a SHA256 hash by using the payload hash as input.
4. Sign the SHA256 hash with the delegate's private key.
5. Create a block ID using the hashed block data.
6. Cast the data into a Block model using the new transaction and block ID.
7. Return the casted Block object.

Here, the cryptographic functions used by ARK to generate hashes are identical to those used by Bitcoin. These functions are battle-tested by years of use and analysis in Bitcoin. Resources to learn more about the block creation process can be found in [Bitcoin educational materials](https://github.com/bitcoinbook/bitcoinbook) as well as relevant ARK documentation on serialization.

## Fire Block and Transaction Creation Events

With the forged block successfully returned to the forger library, the only remaining responsibility is to let the network know about the new block.

The forged block is relayed to peers through the P2P API and the Event Emitter API broadcasts `n+1` events for each block of `n` transactions: one for each transaction and one for the block itself.

Depending on the webhooks registered on a given node, this is also the point at which the forger node will inform all relevant webhook subscribers about the creation of a new block with new transactions.

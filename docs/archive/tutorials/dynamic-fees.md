# V2.0 Dynamic Fees

This tutorial outlines how to configure a Delegate Node to accept dynamic fees. We'll describe differences between the various dynamic fee configuration settings and explore how they can be used to run an efficient and economic node.

## Why Dynamic Fees

Although it might seem that a Delegate Node obtains the highest profit by increasing his/her fee; doing so might decrease the total amount of fees collected, as the transaction volume of the ARK network decreases. Dynamic fees ensure users and delegates find a natural middle ground, as Delegate Nodes compete with each other over transactions.

Dynamic fees were introduced initially in [Bitcoin](https://en.bitcoin.it/wiki/Miner_fees), where it is a vital part of its mining economy.

## Find Your Config Directory

First things first, you need to find your config directory. If you installed ARK Core using the `core-commander`, you can typically find this folder at `~/.config/ark-core/{network}/`.

The file we'll access from this folder is `plugins.js`. If you see it, you're in the right place.

## Edit Your Dynamic Fee Constants

Your node needs to signal to the network that it accepts dynamic fees. For this, open up your `plugins.js` file:

```bash
nano ~/.config/ark-core/{network}/plugins.js
```

There are two separate settings here worth configuring: the `dynamicFees` constants, which is found under the `@arkecosystem/core-transaction-pool` key, and the dynamic fees themselves.

You can use dynamic fee constants to alter how the dynamic fee formula is applied in your ARK Core node. The `dynamicFees` config key in your `@arkecosystem/core-transaction-pool` section should look like this:

##### file: ~/.config/ark-core/{network}/plugins.js

```js
{
    // packages...
    "@arkecosystem/core-transaction-pool": {
        dynamicFees: {
            enabled: true,
            minFeePool: 1000,
            minFeeBroadcast: 1000,
            addonBytes: {
              transfer: 100,
                secondSignature: 250,
                delegateRegistration: 400000,
                vote: 100,
                multiSignature: 500,
                ipfs: 250,
                timelockTransfer: 500,
                multiPayment: 500,
                delegateResignation: 400000,
            },
        },
    },
    // packages...
}
```

Notice the first three keys in the `dynamicFees` object: `enable`, `minFeePool` and `minFeeBroadcast`.

The `dynamic` keys in `fees` tells us whether or not dynamic fees should be enabled. The default configuration, as shown above, **enables** dynamic fees. If we were to change `enabled` to false, the node would instead disable dynamic fees.

The `minFeePool` value represents the minimum fee in Satoshi per byte a transaction should have to be included in the configured node's transaction pool. Similarly, `minFeeBroadcast` represents the minimum fee in Satoshi per byte a transaction should have to be broadcasted to peers for possible inclusion elsewhere in the network. Differentiating between these two values can allow forgers to filter out low-fee transactions from their nodes without rejecting them from the system altogether.

Below `minFeeBroadcast` you'll find the `addonBytes` object, which sets byte values to be added onto specific transaction types when calculating fees. The minimum fee calculation adds this addonBytes value to each transaction's length in bytes before multiplying by the node's satoshi-per-byte value:

```js
const calculatedFee =
  (addonBytesValue + transactionSizeInBytes) * satoshiPerByte;
```

## Changing the Transaction Pool Size

It is also possible to alter the economic tradeoff of dynamic fees by changing the maximum size of your transaction pool. The behavior specified in the `CORE_MAX_TRANSACTIONS_IN_POOL` environment variable takes effect once the pool hits the specified number of transactions.

Once that happens, your node checks the fee of each incoming transaction and only includes them in its pool of forgeable transactions if the incoming fee is higher than the smallest fee currently in the pool and evicts the smallest fee transaction from the pool to obey the cap defined by `CORE_MAX_TRANSACTIONS_IN_POOL`.

Note that, as fee transactions are only executed upon block creation, removing a transaction from the pool in this manner does not result in a charge to the "losing" transaction.

By default, the max transaction pool size is set to 100000. To change this value, edit your `.env` file:

##### file: ~/.config/ark-core/{network}/.env

```
CORE_MAX_TRANSACTIONS_IN_POOL=100000
```

## Restart Your Node

With a node restart, your dynamic fees should be working as intended. Feel free to test this using the utilities in `core-tester-cli` following the process in the [tester cli](/tutorials/developer/tester-cli-transaction.html) recipe.

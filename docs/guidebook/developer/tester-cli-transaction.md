# How to Send Transactions using the ARK Core Tester CLI

## Prerequisites

Ensure you have a working copy of the most recent [GitHub repo for ARK Core](https://github.com/arkecosystem/core). If you're using ARK Core Commander, it will be installed at `~/ark-core`.

The commands shown in the next examples are all run in the `~/ark-core/packages/core-tester-cli/` folder.

## Basics

The executable to use for sending transactions is located at `./bin/tester`. You can add it to PATH by running `PATH=$PATH:$(pwd)/bin`. If you choose to omit this last step, please use `./bin/tester` instead of `tester` for the following examples.

Only five options are currently available for the `tester` command, which enables us to send transactions of a specified type with relevant parameters:

- `transfer`: send multiple transactions
- `second-signature`: create wallets with two signatures
- `delegate-registration`: create multiple delegates
- `vote`: create multiple votes for a delegate
- `multi-signature`: create multiple multisig wallets

To view which parameters each transaction type requires and offers, use `tester [type] help`.

Some parameters are common to all transaction types:

```bash
  -n, --number <number>            number of wallets (default: 10)
  -a, --amount <number>            initial wallet token amount (default: 200000000)
  --transfer-fee <number>          transfer fee (default: 10000000)
  --base-url <value>               base api url
  --api-port <number>              base api port (default: 4003)
  --p2p-port <number>              base p2p port (default: 4002)
  -p, --passphrase <value>         passphrase of initial wallet
  -s, --second-passphrase <value>  second passphrase of initial wallet
  --skip-validation                skip transaction validations
  -c, --copy                       copy the transactions to the clipboard
```

:::tip
`--base-url` is the node IP to which you'll be broadcasting (replace that with your own node’s IP, localhost or any other relay node's IP).

`--passphrase` is the secret for the wallet you wish to send transactions from.
:::

The basic premise is the following:

 1. Fill in a command with the passphrase to a wallet with enough DARK
 2. A transfer will be issued to a randomly generated address
 3. After a moment the type-specific transaction will be issued to other randomly generated addresses

Accounts randomly generated are available in the `./test-wallets` file.

## Transfer

For the command

```bash
tester transfer \
--number 1 \
--base-url http://localhost \
--passphrase "your 12-word passphrase"
```

the output should be similar to

```bash
[INFO]: Sending 1 transfer transactions
[INFO]: Sender starting balance: 999779173791
[INFO]: 0 ==> c0a4e698c78ce947c07356c19eafb9365db3d80b0ae8ecc7362cd5fbc6dc308c, D97JHmrxQ4Q4SzKRKq89pGDwJ4JaokPcmk (fee: 10000000)
[INFO]: Sender expected ending balance: 999569173791
[INFO]: Waiting 20 seconds to apply transfer transactions
[INFO]: All transactions have been received and forged for run 1!
[INFO]: Waiting 20 seconds to apply transfer transactions
[INFO]: All transactions have been received and forged for run 2!
[INFO]: Testing VendorField value is set correctly
[INFO]: 0 ==> d5c8494a7963955af620abd50cdc60690f843d259874a925e3cc3786a1639c36, D97JHmrxQ4Q4SzKRKq89pGDwJ4JaokPcmk (fee: 10000000)
[INFO]: Waiting 20 seconds to apply transactions
[INFO]: Testing empty VendorField value
[INFO]: 0 ==> fcb6ac6b3b220b23dbaf64753864c4561ac3c8857c184ec793ec8d064728f8d8, D97JHmrxQ4Q4SzKRKq89pGDwJ4JaokPcmk (fee: 10000000)
[INFO]: Waiting 20 seconds to apply transactions
[ERROR]: Transaction 'fcb6ac6b3b220b23dbaf64753864c4561ac3c8857c184ec793ec8d064728f8d8' should not have vendorField value 'Transaction 1'
```

(Give or take a few ERROR messages).

In my case, three transfers were made: one from my original wallet, and two to the randomly picked recipient (sending to itself).

[More details](https://dexplorer.ark.io/wallets/D97JHmrxQ4Q4SzKRKq89pGDwJ4JaokPcmk).

## Delegate Registration

Very similar to a standard transfer transaction

```bash
tester delegate-registration \
--number 1 \
--base-url http://localhost \
--passphrase "your 12-word passphrase"
```

For the output of

```bash
[INFO]: Sending 1 transfer transactions
[INFO]: Sender starting balance: 4800000000
[INFO]: 0 ==> d647f7d6dfeed9b54c40e8717bd940c2da5805f34231168507a3810ed1c27844, DEPu5PezAvSZ5DhMHTNjBFq7n5KfaLSQVE (fee: 10000000)
[INFO]: Sender expected ending balance: 2290000000
[INFO]: Waiting 20 seconds to apply transfer transactions
[INFO]: All transactions have been received and forged for run 1!
[INFO]: Sending 1 delegate registration transactions
[INFO]: Starting delegate count: 119
[INFO]: 0 ==> 146b2afc76fbb08e7e9074444b1ee1d790ef3eef1ce091be2eed4541bbe39a1f, DEPu5PezAvSZ5DhMHTNjBFq7n5KfaLSQVE (fee: 2500000000, username: hobogoblin)
[INFO]: Expected end delegate count: 120
[INFO]: Waiting 20 seconds to apply delegate transactions
[INFO]: All transactions have been sent! Total delegates: 120
```

Which sent a transaction to a random address which registered itself as a delegate subsequently.

The new delegate's credentials are saved in `./test-wallets`.

You can view the delegate this transaction registered on the [dexplorer.ark.io](https://dexplorer.ark.io/wallets/DEPu5PezAvSZ5DhMHTNjBFq7n5KfaLSQVE).

## Vote

Again, the format is almost identical.

```bash
tester vote \
--number 1 \
--base-url http://localhost \
--passphrase "your 12 word passphrase" \
--delegate 029451086ced18d6b23a412c54ace68a3f967a5c522e4a0981f4529968099b58f6
```

An errorless yield looks like

```bash
[INFO]: Sending 1 transfer transactions
[INFO]: Sender starting balance: 2080000000
[INFO]: 0 ==> 88a6b701a6026bd9cf82e8596e8073aa16d8edbfaf0e7951e9b0a15f3d074d26, DRBiMija3y75HnVnzUHAA9krXaA8DJS7mJ (fee: 10000000)
[INFO]: Sender expected ending balance: 1870000000
[INFO]: Waiting 20 seconds to apply transfer transactions
[INFO]: All transactions have been received and forged for run 1!
[INFO]: Sending 1 vote transactions
[INFO]: 0 ==> 48b423b8afd31b7e0bfaa92d2c5430f6e892463679fcc6cf33a5783fd16258f0, DRBiMija3y75HnVnzUHAA9krXaA8DJS7mJ (fee: 100000000)
[INFO]: Expected end voters: 1
[INFO]: Waiting 20 seconds to apply vote transactions
[INFO]: All transactions have been sent! Total voters: 1
```

Again, this will first send a transfer to a random address and save it to the `./test-wallets` file; then that address will issue a vote for the delegate with the specified public key.

Here's [a link to the specific voting transaction in question](https://dexplorer.ark.io/transaction/48b423b8afd31b7e0bfaa92d2c5430f6e892463679fcc6cf33a5783fd16258f0), on the dexplorer.

## Second Signature Registration

The command issued for this transaction was

```bash
tester second-signature \
--number 1 \
--base-url http://localhost \
--passphrase "your 12-word passphrase"
```

And the associated output:

```bash
[INFO]: Sending 1 transfer transactions
[INFO]: Sender starting balance: 1870000000
[INFO]: 0 ==> cde612dbae244c912e9f39a926d5ff38644570b4813f7e9ef05d5f4a7eccaf7d, DHS2SvNtdzyvcPccQKV8h17azuREW8pUHB (fee: 10000000)
[INFO]: Sender expected ending balance: 1360000000
[INFO]: Waiting 20 seconds to apply transfer transactions
[INFO]: All transactions have been received and forged for run 1!
[INFO]: Sending 1 second signature transactions
[INFO]: 0 ==> 2a33f40bede44156a64b4b23be7aa6a03472aef938821e4c1c203343f795cfef, DHS2SvNtdzyvcPccQKV8h17azuREW8pUHB (fee: 500000000)
[INFO]: Waiting 20 seconds to apply second-signature transactions
```

[For your convenience](https://dexplorer.ark.io/wallets/DHS2SvNtdzyvcPccQKV8h17azuREW8pUHB), a link to the new address which has a second signature registration transaction.

## Multisignature Registration

Example CLI input

```bash
tester multi-signature \
--number 1 \
--base-url http://localhost \
--passphrase "your 12-word passphrase"
```

Finally, we receive as a response.

```bash
[INFO]: Sending 1 transfer transactions
[INFO]: Sender starting balance: 999099173791
[INFO]: 0 ==> d606365f5467f125e16dd2206eda769b97c6529ffb810bbacb0df2f0b9b7b146, DGdddVsyBmKz7SyzMsZBm1MHepkqZ3JjKy (fee: 10000000)
[INFO]: Sender expected ending balance: 996889173791
[INFO]: Waiting 20 seconds to apply transfer transactions
[INFO]: All transactions have been received and forged for run 1!
[INFO]: 0 ==> 76c6f9406d1306bb482d9229bcc523f9c1c5c6388a59565ce3b19e0e1f26e9df, DGdddVsyBmKz7SyzMsZBm1MHepkqZ3JjKy (fee: 2000000000)
[INFO]: Waiting 20 seconds to apply multi-signature transactions
[INFO]: Sending transactions with signatures
[INFO]: 0 ==> 169ae1ec30b70da7312a5c26a20b224298426517ab531fedbac251f0ee0c66a7, DGdddVsyBmKz7SyzMsZBm1MHepkqZ3JjKy (fee: 10000000)
[INFO]: Waiting 20 seconds to apply transactions
[INFO]: Sending transactions with 2 (min) of 3 signatures
[INFO]: 0 ==> 941a5b54b2e0086d972b9c9fbbb7b35b4f09ffff215350db7c7d936106e71592, DGdddVsyBmKz7SyzMsZBm1MHepkqZ3JjKy (fee: 10000000)
[INFO]: Waiting 20 seconds to apply transactions
[INFO]: Sending transactions with 1 (below min) of 3 signatures
[INFO]: 0 ==> d8a40f5edd8fd99a07f118dea28de22ea8968bb89d98c8a3f8e3ce4d48b40643, DGdddVsyBmKz7SyzMsZBm1MHepkqZ3JjKy (fee: 10000000)
[INFO]: Waiting 20 seconds to apply transactions
[INFO]: Sending transactions without signatures
[INFO]: 0 ==> 2388f921ac0963cb643c887fc7d8b8a73920a1aa687d0d9609ae0c32cdc4f990, DGdddVsyBmKz7SyzMsZBm1MHepkqZ3JjKy (fee: 10000000)
[INFO]: Waiting 20 seconds to apply transactions
[INFO]: Sending transactions with empty signatures
[INFO]: 0 ==> aba47169f53adb0a4f5976e57ea81548df88483a777eb530a5b3ba647270458c, DGdddVsyBmKz7SyzMsZBm1MHepkqZ3JjKy (fee: 10000000)
[INFO]: Waiting 20 seconds to apply transactions
[INFO]: Sending transactions to re-register multi-signature
[INFO]: 0 ==> 249ee328c0520d45f1a43df9e9ef759e48b74878692a198bb8c25899cd640308, DGdddVsyBmKz7SyzMsZBm1MHepkqZ3JjKy (fee: 2000000000)
[INFO]: Waiting 20 seconds to apply transactions
```

From which we can easily track the flow by looking at [the created address' transactions](https://dexplorer.ark.io/wallets/DGdddVsyBmKz7SyzMsZBm1MHepkqZ3JjKy).

## Dynamic Fees

For all transactions, you can set `--transfer-fee <number || number-number>` to provide a dynamic value or range of random values to choose from for the initial transfer fee(s).

Additionally, types other than transfer have the extra `--<type>-fee <number || number-number>` parameter to specify a similar fee catered to that transaction type.

## Other Transaction Types

The simple demo

```bash
tester transfer \
--number 2 \
--base-url http://localhost \
--passphrase "your 12 word passphrase" \
--transfer-fee 30000-100000 \
--recipient D9mwARuRihGV8hNyEFvrsTttBKnrmewfHM
```

will produce output showing two transactions with different fees

```bash
0 ==> 9ac41285c42573913e4a78a81b251e8c1d99515b4864db038a78ae58ccdd354b, D9mwARuRihGV8hNyEFvrsTttBKnrmewfHM (fee: 38056)
1 ==> 663867b8452388002b3e47118ca67d94e17ba9f82399c057b910c6358c371a43, D9mwARuRihGV8hNyEFvrsTttBKnrmewfHM (fee: 39493)
```

the 0th transaction can be viewed on the [dexplorer.ark.io](https://dexplorer.ark.io/transaction/9ac41285c42573913e4a78a81b251e8c1d99515b4864db038a78ae58ccdd354b).

As with the transfer transaction type, other types also follow the same model. When specifying a dynamic fee or range of fees for a given transaction to the tester-cli, the transaction will only be accepted if a delegate has set a minimum fee for its type equal to or lower than the specified value/range.

The syntax and output follow the same model as the transfer transaction, with the added type-specific parameter.

Here is an example

```bash
tester delegate-registration \
--number 1 \
--base-url http://localhost \
--passphrase "your 12 word passphrase" \
--delegate-fee 100000000
```

For the output

```bash
[INFO]: Sending 1 transfer transactions
[INFO]: Sender starting balance: 1001689173791
[INFO]: 0 ==> b2b2aaf2997455fdadf3cad34ea991fd714b841b50bba6789174408e4a473d92, D7qKmPXo21PvwVKjbEQ85N7vPqods6anXD (fee: 10000000)
[INFO]: Sender expected ending balance: 999179173791
[INFO]: Waiting 20 seconds to apply transfer transactions
[INFO]: All transactions have been received and forged for run 1!
[INFO]: Sending 1 delegate registration transactions
[INFO]: Starting delegate count: 120
[INFO]: 0 ==> c59491e6f908716d00f7d9ab2751a4193a00e0dbdd96b9a105fc5dc0c5370d31, D7qKmPXo21PvwVKjbEQ85N7vPqods6anXD (fee: 100000000, username: cleopatra)
[INFO]: Expected end delegate count: 121
[INFO]: Waiting 20 seconds to apply delegate transactions
[INFO]: All transactions have been sent! Total delegates: 120
[ERROR]: Delegate count incorrect. '120' but should be '121'
```

Now, despite the error, the newly registered delegate can still be found [here](https://dexplorer.ark.io/wallets/D7qKmPXo21PvwVKjbEQ85N7vPqods6anXD); with a registration fee of 100 000 000 arktoshi (1 ARK only). This is due to the blockchain having to spin more than 2.5 blocks, or 20 seconds, before reaching this low delegate dynamic fee threshold, while the ARK Core Tester CLI only waits a strict 20 seconds before determining whether the transaction was successful or not.

## Conclusion

You should now be able to properly manage your test transactions with the help of the tester cli utility! If you have any questions or signals to present, please do so either on [Slack](https://arkecosystem.slack.com) with a message or [GitHub](https://github.com/ARKEcosystem/docs) with an issue.
---
title: Sending Transactions with the Core Tester CLI
---

# How to Send Transactions using the Ark Core Tester CLI

## Prerequisites
Ensure you have a working copy of the most recent [GitHub repo for Ark Core](https://github.com/arkecosystem/core). If you're using Ark Core Commander, it will be installed at `~/ark-core`.

The commands shown in the next examples are all run in the `~/ark-core/packages/core-tester-cli/` folder.

### Basics
The executable to use for sending transactions is located at `./bin/tester`. You can add it to PATH by running `PATH=$PATH:$(pwd)/bin`. If you choose to omit this last step, please use `./bin/tester` instead of `tester` for the following examples.

Only 5 possibilities are currently available for the `tester` command, which enables us to send transactions of a specified type with relevant parameters:

 - **`transfer`**: send multiple transactions
 - **`second-signature`**: create wallets with second signature
 - **`delegate-registration`**: create multiple delegates
 - **`vote`**: create multiple votes for a delegate
 - **`multi-signature`**: create multiple multisig wallets

To view which parameters each transaction type requires and offers, use `tester [type] help`

Some parameters are common to all transaction types:

```sh
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
--base-url is node IP being broadcasted to (replace that with your Node’s IP, or localhost) and --passphrase is the secret for wallet you wish to send transactions from.
:::

### Transfer

For the command

```sh
tester transfer \
--number 1 \
--base-url http://localhost \
--passphrase "your 12 word passphrase"
```
the output should be similar to

```sh
[1540760827746] INFO (ark-tester-cli/12780 on machine_name): Sending 1 transfer transactions
[1540760827882] INFO (ark-tester-cli/12780 on machine_name): Sender starting balance: 1007610000000
[1540760827907] INFO (ark-tester-cli/12780 on machine_name): 0 ==> ebe2e24f458ca6313545b409b7abad09d2e3fb9d117767d49e464ef5682f78a7, DFCsS8KVMrzq9Jcp5woM8FHfP41qFP37Xw (fee: 10000000)
[1540760827907] INFO (ark-tester-cli/12780 on machine_name): Sender expected ending balance: 1007599998000
[1540760830284] INFO (ark-tester-cli/12780 on machine_name): Waiting 20 seconds to apply transfer transactions
[1540760850440] ERROR (ark-tester-cli/12780 on machine_name): Sender balance incorrect: '1007610000000' but should be '1007599998000'
[1540760850789] ERROR (ark-tester-cli/12780 on machine_name): Incorrect destination balance for DFCsS8KVMrzq9Jcp5woM8FHfP41qFP37Xw. Should be '2000' but is '0'
[1540760850789] ERROR (ark-tester-cli/12780 on machine_name): Test failed on run 1
[1540760850789] INFO (ark-tester-cli/12780 on machine_name): Testing VendorField value is set correctly
[1540760850792] INFO (ark-tester-cli/12780 on machine_name): 0 ==> b642d49ef151cc36d29d9c9bebb3bb5ce1dc5788ffcb0f2fae40d01cdd88139a, DFCsS8KVMrzq9Jcp5woM8FHfP41qFP37Xw (fee: 10000000)
[1540760850824] INFO (ark-tester-cli/12780 on machine_name): Waiting 20 seconds to apply transactions
[1540760870854] ERROR (ark-tester-cli/12780 on machine_name): Transaction 'b642d49ef151cc36d29d9c9bebb3bb5ce1dc5788ffcb0f2fae40d01cdd88139a' should be on the blockchain
```
(Give or take a few ERROR messages, depending on the up-to-datedness of your node and whether you're forging or not).

In my case, the first attempted transfer was actually successful and the one produced by the retry doesn't show up on the [dexplorer.ark.io](https://dexplorer.ark.io/transaction/ebe2e24f458ca6313545b409b7abad09d2e3fb9d117767d49e464ef5682f78a7).

### Delegate Registration

Very similar to a standard transfer transaction

```sh
tester delegate-registration \
--number 1 \
--base-url http://localhost \
--passphrase "your 12 word passphrase"

For the output of

```sh
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
Which actually sent a transaction to a random address which registered itself as a delegate subsequently.

The new delegate's credentials are saved in `./test-wallets`.

You can view the delegate this transaction registered on the [dexplorer.ark.io](https://dexplorer.ark.io/wallets/DEPu5PezAvSZ5DhMHTNjBFq7n5KfaLSQVE).

### Vote

Again, the format is almost identical

```sh
tester vote \
--number 1 \
--base-url http://localhost \
--passphrase "your 12 word passphrase" \
--delegate 029451086ced18d6b23a412c54ace68a3f967a5c522e4a0981f4529968099b58f6
```

An errorless yield looks like

```sh
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

### Second Signature Registration

The command issued for this transaction was

```sh
tester second-signature \
--number 1 \
--base-url http://localhost \
--passphrase "your 12 word passphrase"
```

And the associated output

```sh
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

### Multisignature Registration

Example CLI input

```sh
tester multi-signature \
--number 1 \
--base-url http://localhost \
--passphrase "your 12 word passphrase"
```

Finally, we receive as a response

```sh
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

From which we can easily track the flow by looking at [the created address' transactions](https://dexplorer.ark.io/wallets/DGdddVsyBmKz7SyzMsZBm1MHepkqZ3JjKy)

## Dynamic Fees

For all transactions, you can set `--transfer-fee <number || number-number>` to provide a dynamic value or range of random values to choose from for the fee(s).

Additionally, types other than transfer have the extra `--<type>-fee <number>` parameter to specify a strict fee catered to that transaction type.

### Transfer

The simple demo

```sh
tester transfer \
--number 2 \
--base-url http://localhost \
--passphrase "your 12 word passphrase" \
--transfer-fee 30000-100000 \
--recipient D9mwARuRihGV8hNyEFvrsTttBKnrmewfHM
```
will produce output showing 2 transactions with different fees

```sh
0 ==> 9ac41285c42573913e4a78a81b251e8c1d99515b4864db038a78ae58ccdd354b, D9mwARuRihGV8hNyEFvrsTttBKnrmewfHM (fee: 38056)
1 ==> 663867b8452388002b3e47118ca67d94e17ba9f82399c057b910c6358c371a43, D9mwARuRihGV8hNyEFvrsTttBKnrmewfHM (fee: 39493)
```

the 0th transaction can be viewed on the [dexplorer.ark.io](https://dexplorer.ark.io/transaction/9ac41285c42573913e4a78a81b251e8c1d99515b4864db038a78ae58ccdd354b)

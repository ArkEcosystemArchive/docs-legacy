---
title: Sending Transactions with the Core Tester CLI
---

# How to Send Transactions using the Ark Core Tester CLI

## Prerequisites
Ensure you have a working copy of the most recent [GitHub repo for Ark Core](https://github.com/arkecosystem/core). If you're using Ark Core Commander, it will be installed at `~/ark-core`.

The commands shown in the next examples are all run in the `~/ark-core/packages/core-tester-cli/` folder.

### Basics
The binary to use for sending transactions is located at `./bin/tester`. You can create add it to PATH and make calling it cleaner by running `PATH=$PATH:$(pwd)/bin`. If you choose to omit this last step, please use `./bin/tester` instead of `tester` for the following examples.

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
(Give or take a few ERROR messages, depending on the up-to-datedness of your node).

In my case, the first attempted transfer was actually successful and the one produced by the retry doesn't show up on the [dexplorer.ark.io](https://dexplorer.ark.io/transaction/ebe2e24f458ca6313545b409b7abad09d2e3fb9d117767d49e464ef5682f78a7).

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

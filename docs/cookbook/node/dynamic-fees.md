# Setup Dynamic Fees

This recipe outlines how to setup a delegate to accept dynamic fees. The process is fairly straightforward — accepting dynamic fees involves nothing more than changing some text values — but we'll point out any potential pitfalls along the way. 

## Find Your Config Directory

First things first, you need to find your config directory. If you installed Ark Core using Commander, you can typically find this folder at `~/.ark/config/`.

The two files we'll access from this folder are `delegates.json` and `network.json`. If you see those two, you're in the right place.

## Edit Your Delegate Config

Assuming your config is located at the default location, you can open your `delegates.json` file at the terminal with the command:
```bash
nano ~/.ark/config/delegates.json
```
From there, you'll see a JSON file; look for the `dynamicFees` key. There are two values within it that you'll want to modify:

- `feeMultiplier` is the amount of arktoshis that you want to charge per byte of the transaction payload. Higher numbers will result in higher fee calculations, particularly for transactions with large vendor fields.
- `minAcceptableFee` is the lowest arktoshi amount that you node will accept for a given transaction. Transactions that don't meet this criterion will not be forged by your node, but by a later delegate with a lower minimum fee.

Together, the `feeMultiplier` and `minAcceptableFee` properties can help you control the size and quantity of transactions that your node processes in a given round.

## Edit Your Network Config

Although your delegate-specific settings are now set, your node still needs to signal to the network that it accepts dynamic fees. For this, open up your `network.json` file:
```bash
nano ~/.ark/config/network.json
```
Here, you'll want to change your settings to accept dynamic fees, but there's a small catch.

It may be tempting to edit the first instance of `fees` that you see in your `network.json` file, but be cautious! In the standard `network.json` configuration, the first `fees` key you encounter is actually part of a `constants` array. You typically want to leave this value alone, as constants are often shared network-wide and give your node some fallback values to work from in case of error.

Instead, the configuration you want to edit is near the bottom of your `network.json` file. It has two keys, `height` and `fees`, which look like this:  
```json
{
    "height": 10,
    "fees": {
        "dynamic" : true
    }
}
```
The `dynamic` keys in `fees` tells us whether or not dynamic fees should be enabled, and the `height` key tells the node at which network height the policy should take effect. The default configuration, as shown above, **enables** dynamic fees from height 10 onwards. If we were to change `dynamic` to false, the node would instead **disable** dynamic fees from height 10 onwards.

## Restart Your Node

With a node restart, your dynamic fees should be working as intended. Feel free to test this using the utilities in `core-tester-cli` following the process in the [tester cli](https://docs.ark.io/cookbook/developer/tester-cli-transaction.html) recipe.
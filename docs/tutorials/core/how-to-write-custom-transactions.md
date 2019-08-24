---
title: "How to Write Your Own Custom Transactions"
---

# How to Write Your Own Custom Transactions

[[toc]]

## The Story - Allowing Users to Register "Business Wallets"

We'll go through the process of writing custom transactions with a concrete example.

We will allow people to register "business wallets": an extension of "normal" wallets. These business wallets will have additional information: name of the business, and website.

You can compare this to the delegate registration transaction adding a *username* property to a wallet: here we will add *business name* and *website* properties.

## A Refresher on Plugins

We will use plugins for our custom transaction. Remember, plugins are a way to write your own logic and plug it to the core code.

You will be able for example to access blockchain and wallets data, as well as extending the core code. In our case, registering our custom transaction.

You can read ["How to write a core plugin"](/tutorials/core/plugins/how-to-write-a-core-plugin.html) to understand the basic process of writing a plugin.

## Let's start! Our plugin skeleton

We need two main classes to implement our custom transaction:

- `BusinessRegistrationTransaction` class to define what the transaction properties are (remember we will allow to register a *business name* and *website* with this transaction), and also provide ser-deserialization for these new properties.

- `BusinessRegistrationTransactionHandler` class to define how will this transaction be applied (adding *business name* and *website* properties to the wallet), and some related logic.

- `BusinessRegistrationBuilder` class which will build our transaction after we insert name, website and passphrase. 

Here is how our plugin will look like (`src` folder):

```sh
.
├── builders
│   ├── BusinessRegistrationBuilder.ts
│   └── index.ts
├── handlers
│   ├── BusinessRegistrationTransactionHandler.ts
│   └── index.ts
├── transactions
│   ├── BusinessRegistrationTransaction.ts
│   └── index.ts
├── defaults.ts
├── errors.ts
├── index.ts
├── interfaces.ts
└── plugin.ts
```

You notice a few more files than the two classes we talked about:

- `defaults.ts` contains the default options for our plugin (will be an empty object)
- `errors.ts` are some errors we will use in our transaction classes
- `interfaces.ts` contains the definition of the data in our transaction (*business name* and *website*) to be used in our code
- `plugin.ts` is the entry point of our plugin, this is where we will initialize and register our custom transaction to the core

In the next sections, we will look take a detailed look at each file.

## What Will Our Transaction Look Like?

We will allow to specify a *business name* and a *website* in our custom transaction. Here is what our custom transaction will look like:

```json
{
    "id": "ec137bc0a992ad9fdcb904797595fe9f6a1fd283fe929def5cddbed64e5f44ec",
    "signature": "304402204b514cb059c5352f3481c1715e061366c32f0d373805d38e89dd018ec94f126b02205a12e0d737ff30f0639c14f566960714b7ddb5b9247e259ef2f93a5b66c73da7",
    "nonce": 0,
    "type": 100,
    "fee": 500000000,
    "senderPublicKey": "03f39ee110e9f11eafc390b1aeea3a0d406b7aa63aa352d5be855850f1102ab6ec",
    "amount": 0,
    "recipientId": null,
    "asset": {
        "businessRegistration": {
            "name": "google",
            "website": "www.google.com"
        }
    }
}
```

A few things to notice:

- `type` with value 100: for custom transactions we have to define a type above 99 - so we choose 100
- `fee` of 5 ARK (or whatever your coin is): we decide that this is the fee we want for our transaction
- `asset` is the property where we can define additional fields: here we have our *businessRegistration* object containing our two properties *name* and *website*
- `nonce` is a sequential number of senders wallet transactions

We use `interfaces.ts` to define clearly our *businessRegistration* object (we will refer to it in the code):

```ts
export interface IBusinessRegistrationAsset {
    name: string;
    website: string;
}
```

## The BusinessRegistrationTransaction Class

The `BusinessRegistrationTransaction` class will:
- define the transaction *schema* which is how the transaction is supposed to look
- implement ser-deserialize methods

Here it is (with methods implementation skipped):

```ts
import { Transactions } from "@arkecosystem/crypto";
import ByteBuffer from "bytebuffer";
import { IBusinessRegistrationAsset } from "../interfaces";

const { schemas } = Transactions;

const BUSINESS_REGISTRATION_TYPE = 100;

export class BusinessRegistrationTransaction extends Transactions.Transaction {
    public static typeGroup = 1;
    public static type = BUSINESS_REGISTRATION_TYPE;
    public static key: string = "businessRegistration";
    protected static defaultStaticFee: Utils.BigNumber = Utils.BigNumber.make("500000000");

    public static getSchema(): Transactions.schemas.TransactionSchema {}

    public serialize():  ByteBuffer {}

    public deserialize(buf:  ByteBuffer):  void {}
}
```

Notice three static properties we have to set:
- `typeGroup` is a number of transaction group (we will assigned it to core group with number 1)
- `type` is a number of a transaction (in our case number 100)
- `key` by which core looks for static fees
- `defaultStaticFee` is amount user will have to pay for this transaction
### getSchema

*getSchema* will return an [AJV](https://ajv.js.org/) validation object, extending the base transaction schema (defined in core *crypto* package). This is where we ensure that the transaction will have the desired properties.

Here is the implementation:

```ts
public static getSchema(): Transactions.schemas.TransactionSchema {
    return schemas.extend(schemas.transactionBaseSchema, {
        $id: "businessRegistration",
        required: ["asset"],
        properties: {
            type: { transactionType: BUSINESS_REGISTRATION_TYPE },
            amount: { bignumber: { minimum: 0, maximum: 0 } },
            asset: {
                type: "object",
                required: ["businessRegistration"],
                properties: {
                    businessRegistration: {
                        type: "object",
                        required: ["name", "website"],
                        properties: {
                            name: {
                                type: "string",
                                minLength: 3,
                                maxLength: 20,
                            },
                            website: {
                                type: "string",
                                minLength: 3,
                                maxLength: 20,
                            },
                        },
                    },
                },
            },
        },
    });
}
```

You can see we defined the asset property to have our *businessRegistration* object with *name* and *website* properties. Also we forced the amount to be zero, and the type to be our custom type 100.

Notice we didn't set up any validation rule for the fee (that we decided to be 5 ARK). This will be done in another file, we will see it in the next sections.

To understand how the validation engine works, I recommend you to check out the [AJV website](https://ajv.js.org/). We have set up some custom keywords that can be useful, like *address*, *publicKey*, *bignumber*, *base58*: you can check them all in `packages/crypto/src/validation/schemas.ts`.


### serialize <!-- markdown-title-case: skip-line -->

The *serialize* method will take the data from the transaction class, and serialize it to a single "buffer" of bytes.

Let's have a look at it:

```ts
public serialize(): ByteBuffer {
    const { data } = this;
    const businessRegistration = data.asset.businessRegistration as IBusinessRegistrationAsset;

    const nameBytes = Buffer.from(businessRegistration.name, "utf8");
    const websiteBytes = Buffer.from(businessRegistration.website, "utf8");

    const buffer = new ByteBuffer(nameBytes.length + websiteBytes.length + 2, true);

    buffer.writeUint8(nameBytes.length);
    buffer.append(nameBytes, "hex");

    buffer.writeUint8(websiteBytes.length);
    buffer.append(websiteBytes, "hex");

    return buffer;
}
```

We use *ByteBuffer* to write our bytes, and serialize our two properties by first writing the length of the property, then writing the actual property data.

Notice that we serialize only our custom properties, the rest will be done by the core code.

### deserialize <!-- markdown-title-case: skip-line -->

The *deserialize* method does the opposite transformation: from bytes to setting the class `asset` property to our *businessRegistration* object.

```ts
public deserialize(buf: ByteBuffer): void {
    const { data } = this;
    const businessRegistration = {} as IBusinessRegistrationAsset;

    const nameLength = buf.readUint8();
    businessRegistration.name = buf.readString(nameLength);

    const websiteLength = buf.readUint8();
    businessRegistration.website = buf.readString(websiteLength);

    data.asset = {
        businessRegistration
    };
}
```

We use the same *ByteBuffer* to read the bytes and set our `asset` property to the corresponding *businessRegistration* object.

### About ser / deserializing

Serialize / deserialize is used extensively in Core code for storage, transfer and validation.

This is why it is important for you to write ser / deserialize methods for your custom transactions. To make sure you implemented correctly these methods, you have to test that your transaction object, when serialized and deserialized, gives back the same transaction object (you can see examples in core crypto unit tests).

We use `ByteBuffer` as it allows easily to convert an object to a series of bytes, and doing the reverse operation reading from bytes. You can read about it in [ByteBuffer github](https://github.com/protobufjs/bytebuffer.js#readme) and see how existing Core transactions use it for examples.

## The BusinessRegistrationTransactionHandler Class

The `BusinessRegistrationTransactionHandler` class handles:

- *apply* logic: applying the transaction to the current state of the blockchain (for example for a transfer transaction this would reduce the wallet balance of sender by transfer amount + fees, and increase balance of receiver by the amount)
- *revert* logic: reverting the transaction
- *throwIfCannotBeApplied* check: validation method to determine if transaction can be applied (for example does sender have sufficient funds for a transfer)
- *canEnterTransactionPool* check: validation method to determine if the transaction can enter the transaction pool (to prevent for example to have multiple transactions from the same sender in the pool)
- *bootstrap* method to initialize data related to our custom transaction on startup (in our case updating wallets from existing *BusinessRegistration* transactions)
- *getConstructor* method needs to return the *BusinessRegistrationTransaction* class
- *emitEvents* is a method which will be called after applying the transaction, it allows you to emit events which can be then picked up by another plugin for example
- *dependencies* defines Array of transaction types which have to be loaded before this type
- *walletAttributes* defines Array of wallet properties which this handler access or apply
- *isActivated* apply logic for when this transaction type is allowed

Here is how the class looks (without method implementation):

```ts
import { Database, TransactionPool, State, EventEmitter } from "@arkecosystem/core-interfaces";
import { Handlers, } from "@arkecosystem/core-transactions";
import { BusinessRegistrationTransaction } from "../transactions";
import { Transactions, Interfaces } from "@arkecosystem/crypto";
import { BusinessRegistrationAssetError, WalletIsAlreadyABusiness } from "../errors";

export class BusinessRegistrationTransactionHandler extends Handlers.TransactionHandler {
    public getConstructor(): Transactions.TransactionConstructor {}

    public dependencies(): ReadonlyArray<any> {}
    
    public walletAttributes(): ReadonlyArray<string> {}

    public async isActivated(): Promise<boolean> {}

    public async bootstrap(connection: Database.IConnection, walletManager: State.IWalletManager): Promise<void> {}

    public async throwIfCannotBeApplied(
        transaction: Interfaces.ITransaction,
        wallet: State.IWallet,
        databaseWalletManager: State.IWalletManager,
    ): Promise<boolean> {}
    
    public emitEvents(transaction: Interfaces.ITransaction, emitter: EventEmitter.EventEmitter): Promise<void> {}

    public async canEnterTransactionPool(
        data: Interfaces.ITransactionData,
        pool: TransactionPool.IConnection,
        processor: TransactionPool.IProcessor,
    ): Promise<boolean> {}

    public async applyToSender(transaction: Interfaces.ITransaction, walletManager: State.IWalletManager): Promise<void> {}

    public async revertForSender(transaction: Interfaces.ITransaction, walletManager: State.IWalletManager): Promise<void> {}

    public async applyToRecipient(transaction: Interfaces.ITransaction, walletManager: State.IWalletManager): Promise<void> {}

    public async revertForRecipient(transaction: Interfaces.ITransaction, walletManager: State.IWalletManager): Promise<void> {}

}
```

Let's go through each method.

### getConstructor

*getConstructor* just returns the *BusinessRegistrationTransaction* we imported in our file.

```ts
public getConstructor(): Transactions.TransactionConstructor {
    return BusinessRegistrationTransaction;
}
```

### dependencies

*dependencies* in this case returns an empty array because we are not dependent on any other transaction type

```ts
  public dependencies(): ReadonlyArray<any> {
      return [];
  }
```

### walletAttributes

*walletAttributes* this transaction will access and add `business` property

```ts
  public walletAttributes(): ReadonlyArray<string> {
      return ["business"];
  }
```

### bootstrap <!-- markdown-title-case: skip-line -->

*bootstrap* initializes the wallets from existing *BusinessRegistration* transactions.

```ts
public async bootstrap(connection: Database.IConnection, walletManager: State.IWalletManager): Promise<void> {
     const transactions = await connection.transactionsRepository.getAssetsByType(this.getConstructor().type);

        for (const transaction of transactions) {
          const wallet = walletManager.findByPublicKey(transaction.senderPublicKey);
          wallet.setAttribute<IBusinessRegistrationAsset>("business", transaction.asset.businessRegistration);
          walletManager.reindex(wallet);
        }
}
```

### throwIfCannotBeApplied

*throwIfCannotBeApplied* checks that the wallet initiating the transaction is not already registered as business: we can register a business only once.

```ts
public async throwIfCannotBeApplied(
    transaction: Interfaces.ITransaction,
    wallet: State.IWallet,
    databaseWalletManager: State.IWalletManager,
): Promise<void> {
    const { data }: Interfaces.ITransaction = transaction;

    const { name, website }: { name: string; website: string } = data.asset.businessRegistration;
    if (!name || !website) {
        throw new BusinessRegistrationAssetError();
    }

    if (wallet.hasAttribute("business")) {
        throw new WalletIsAlreadyABusiness();
    }

    super.throwIfCannotBeApplied(transaction, wallet, databaseWalletManager);
}
```

Note that we also check the name and website not to be null or empty, but this should be already avoided with the schema we defined before (*BusinessRegistrationTransaction* class).

### emitEvents

*emitEvents* uses the *EventEmitter* and transaction data to emit the custom event `business.registered` with the transaction data.

```ts
public emitEvents(transaction: Interfaces.ITransaction, emitter: EventEmitter.EventEmitter): void {
    emitter.emit("business.registered", transaction.data);
}
```

### canEnterTransactionPool

*canEnterTransactionPool* performs a few checks to ensure that:

- sender does not have already a *BusinessRegistration* transaction in the pool
- there is not another *BusinessRegistration* transaction for the same business name in the pool

```ts
public async canEnterTransactionPool(
    data: Interfaces.ITransactionData,
    pool: TransactionPool.IConnection,
    processor: TransactionPool.IProcessor,
): Promise<boolean> {
    if (this.typeFromSenderAlreadyInPool(data, pool, processor)) {
        return false;
    }

    const { name }: { name: string } = data.asset.businessRegistration;
    const businessRegistrationsSameNameInPayload = processor
        .getTransactions()
        .filter(tx => tx.type === this.getConstructor().type && tx.asset.businessRegistration.name === name);

    if (businessRegistrationsSameNameInPayload.length > 1) {
        processor.pushError(
            data,
            "ERR_CONFLICT",
            `Multiple business registrations for "${name}" in transaction payload`,
        );
        return false;
    }

    const businessRegistrationsInPool: Interfaces.ITransactionData[] = Array.from(
       await pool.getTransactionsByType(this.getConstructor().type),
    ).map((memTx: Interfaces.ITransaction) => memTx.data);

    const containsBusinessRegistrationForSameNameInPool: boolean = businessRegistrationsInPool.some(
        transaction => transaction.asset.businessRegistration.name === name,
    );
    if (containsBusinessRegistrationForSameNameInPool) {
        processor.pushError(data, "ERR_PENDING", `Business registration for "${name}" already in the pool`);
        return false;
    }

    return true;
}
```

### applyToSender

*applyToSender* sets the wallet business data from the transaction.

```ts
public async applyToSender(transaction: Interfaces.ITransaction, walletManager: State.IWalletManager): Promise<void> {
   await super.applyToSender(transaction, walletManager);
   const sender: State.IWallet = walletManager.findByPublicKey(transaction.data.senderPublicKey);
   sender.setAttribute<IBusinessRegistrationAsset>("business", transaction.data.asset.businessRegistration);
   walletManager.reindex(sender);
}
```

### revertForSender

*revertForSender* unsets the wallet business data.

```ts
public async revertForSender(transaction: Interfaces.ITransaction, walletManager: State.IWalletManager): Promise<void> {
    await super.revertForSender(transaction, walletManager);
    const sender: State.IWallet = walletManager.findByPublicKey(transaction.data.senderPublicKey);
    sender.forgetAttribute("business");
    walletManager.reindex(sender);
}
```

### applyToRecipient / revertForRecipient

These methods don't do anything because there is no recipient for this kind of transaction.

```ts
public async applyToRecipient(transaction: Interfaces.ITransaction, walletManager: State.IWalletManager): Promise<void> {
    return;
}

public async revertForRecipient(transaction: Interfaces.ITransaction, walletManager: State.IWalletManager): Promise<void> {
    return;
}
```

## Plugin Setup

Now all is left is some code for registering our plugin! This is done in `plugin.ts`.

```ts
import { Container, Logger } from "@arkecosystem/core-interfaces";
import { Handlers } from "@arkecosystem/core-transactions";
import { defaults } from "./defaults";
import { BusinessRegistrationTransactionHandler } from "./handlers";

export const plugin: Container.IPluginDescriptor = {
  pkg: require("../package.json"),
  defaults,
  alias: "my-custom-transaction",
  async register(container: Container.IContainer, options) {
    container.resolvePlugin<Logger.ILogger>("logger").info("Registering custom transaction");
    Handlers.Registry.registerCustomTransactionHandler(BusinessRegistrationTransactionHandler);
  },
  async deregister(container: Container.IContainer, options) {
    container.resolvePlugin<Logger.ILogger>("logger").info("Deregistering custom transaction");
  }
};
```

We use `Handlers.Registry` from *@arkecosystem/core-transactions* to register and deregister our custom transaction handler.

## Configuration

To use our plugin there is one last configuration step.
Updating the *plugins.js* which contains all the plugins parameters for our network.

### plugins.js

**First**, let's add our plugin to `plugins.js`. You can simply add after all core plugins this line:

```js
"custom-transactions": {},
```

Here *custom-transactions* is the alias we have chosen (plugin definition in `index.ts`). No parameter is needed so we leave the parameters as en empty object.

**Second**, there is a change we need to make in *core-transaction-pool* plugin:

```js
"@arkecosystem/core-transaction-pool": {
    enabled: true,
    maxTransactionsPerSender: process.env.CORE_TRANSACTION_POOL_MAX_PER_SENDER || 300,
    allowedSenders: [],
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
            businessRegistration: 500 // dynamic fees configuration for our transaction
        },
    },
},
```

This is related to dynamic fees calculation, we need to provide the fee per additional byte for our transaction.

## BusinessBuilder to create our transactions

An additional step is to create what we call a *builder* for our custom transaction type.

We have those *builders* for every transaction in Core, they are helpers to create transactions: we use them extensively in tests.

Have a look at the `crypto/src/transactions/builder` folder where you will see how it is implemented for each transaction type.

Based on this, we can create a `builder` directory inside our plugin, and implement our BusinessBuilder:

```ts
import { Interfaces, Transactions, Utils } from "@arkecosystem/crypto";

export class BusinessRegistrationBuilder extends Transactions.TransactionBuilder<BusinessRegistrationBuilder> {
    constructor() {
        super();
        this.data.type = 100;
        this.data.typeGroup = 1;
        this.data.version = 2;
        this.data.fee = Utils.BigNumber.make("5000000000");
        this.data.amount = Utils.BigNumber.ZERO;
        this.data.asset = { businessRegistration: {} };
    }

    public businessAsset(name: string, website: string): BusinessRegistrationBuilder {
        this.data.asset.businessRegistration = {
            name,
            website,
        };

        return this;
    }

    public getStruct(): Interfaces.ITransactionData {
        const struct: Interfaces.ITransactionData = super.getStruct();
        struct.amount = this.data.amount;
        struct.asset = this.data.asset;
        return struct;
    }

    protected instance(): BusinessRegistrationBuilder {
        return this;
    }
}
```

Pretty straightforward as you can see:

- We initialize the transaction type, fee, amount and asset in the constructor

- We implement a specific method `businessAsset` in order to set the asset property of our transaction

- We implement the `getStruct` method, using the inherited method and adding the properties we want to have in the struct object

Now we could use this builder to create our transactions:

```ts
const builder = new BusinessBuilder();
const businessTx = builder
    .nonce("1")
    .businessAsset("google", "www.google.com")
    .sign("passphrase")
    .getStruct();
```


## Testing

All core testing happens in the root `__tests__` directory.

Basically there are 4 main folders in the `__tests__` directory: `e2e`, `functional`, `integration`, `unit`. Each corresponds to a type of tests.

Say you want to write unit tests for your plugin. 
You have two options then:

### Writing them in `core/__tests__` directory

Create a directory inside the `unit` subfolder with your plugin name, and write your tests inside. You will run them with `yarn test unit/<yourPluginName>`.

### Including them inside your plugin directory

Create a subfolder `__tests__` inside your custom-transaction.
Then you have to include some framework for tasting you code, ark core uses jest, you can read more about it in the following link: [https://jestjs.io/](https://jestjs.io/)


## Wrapping It Up

We managed to implement a custom *BusinessRegistration* transaction, adding some information to the sender wallet (his business name and website). So if we launch a node with our custom plugin, we will be able to accept *BusinessRegistration* transactions.

You may start to see what would be nice to have now:

- A way to generate these transactions (transaction builder) so that a mobile client for example could create and send transactions
- Some API / user interface to be able to see the wallets with business registered

This is out of scope for this tutorial, but don't hesitate to go further and build up on this!

::: tip Note
This tutorial is compatible with the `develop` branch.
:::

## References

GitHub repository for this custom plugin: [https://github.com/KovacZan/custom-transaction](https://github.com/KovacZan/custom-transaction)

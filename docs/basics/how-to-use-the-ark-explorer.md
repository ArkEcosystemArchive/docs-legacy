---
title: "How To Use The ARK Explorer?"
---

# How To Use The ARK Explorer?

[[toc]]

# What is a block explorer?

If a Blockchain is a highway of transactional records, from the very first to the most current, a block explorer is your Hollywood tour bus; a guide to every aspect of that highway as you travel through it.  Most people when they use the block explorer are only doing so to confirm a transaction they have sent or are receiving, this however only taps into a tiny fraction of the power contained within the explorer.
Block explorers can give anyone access to all the information contained within that blockchain.  You can search every block ever created, see every transaction an address has conducted as well as a snapshot of the status of that network in totality.
Every Blockchain has a block explorer and ARK is no different; however, we pride ourselves on making all our interfaces intuitive and easy to read for users at any level, from novice to advanced and our block explorer is an example of that committment.
Let’s begin our journey into the ARK explorer, first looking at mobile functionality followed by the slightly more robust desktop experience.

![MOBILE BLOCK EXPL Overview](./assets/how-to-use-the-ark-explorer/MobileBlockExplorerOverview.png)

When you first arrive at [explorer.ark.io](https://explorer.ark.io) you will find the following information immediately available.
If you are using the desktop version of the ARK block explorer, you will see a price graph on the home page.  This interactive graph allows you to see ARK price in relation to your chosen national currency over periods of day, week, month, quarter and year views.

![LATEST TRANSACTION Overview](./assets/how-to-use-the-ark-explorer/LatestTransactionOverview.png)

### Latest Transactions:

This will be a list of the most recent transactions that have been broadcast to the network.  Inside each transaction you will be able to find out the following information
-    **ID:** This will show the unique identification (ID) number for this transaction.  This can be used to prove to another party that this transaction was sent from an address to another address and approved by the network.  If you click on this ID, you will be able to see how many confirmations it has received and most importantly what Block it was included in.  By being writing into a block it proves that the network has accepted it as a valid transaction and is forever written in to the ARK blockchain.
-    **Timestamp:** This indicates the exact time that the transaction was broadcasted and accepted by the network.
-    **Sender:** This field shows the ARK wallet address that initiated the transaction, i.e. who is sending the transaction.
-    **Recipient:** Here we see the wallet address who the sender (above) wished to send this transaction to, i.e. who is receiving the transaction.
-    **Smart bridge:** This field indicates the ARK SmartBridge that was used in the transaction.  SmartBridges are the groundbreaking innovation that drives the ARK Ecosystem; allowing for disparate blockchains to interact with each other.  Think of each blockchain like an island with no communication between them. If you work on Ethereum Island but your business partner only works on Bitcoin island you can't trade or work together.  ARK SmartBridges are like an airstrip, cargo barge, cellphone towers and internet all rolled into one.  You can do business with any of the other islands from any other island, instantaneously and nearly friction free.  A more detailed explanation of Smart bridges can be found in our section [**What are bridge chains and how to use them**](https://docs.ark.io/basics/how-does-ark-smartbridge-work.html)
-    **Amount:** This will indicate the amount of ARK that was send from the Sender to the Recipient
-    **Fee:** This indicates the fee paid to send the transaction.  A list of current fees on the ARK network can be found in [**Fees for Transactions**](https://docs.ark.io/basics/understanding-transactions-and-block-propagation.html#fees-for-transactions)

![LATEST BLOCK Overview](./assets/how-to-use-the-ark-explorer/LatestBlockOverview.png)
### Latest Blocks:
-    **ID:** This will the show unique identification (ID) for the Block that was forged.    If you want to learn more about blockchain refer to our section on [**What is The Blockchain?**](https://docs.ark.io/blockchain/what-is-the-blockchain.html) and [**When Do You Need A Blockchain?**](https://docs.ark.io/blockchain/when-do-you-need-a-blockchain.html)
-    **Height:** This section will show how far from the initial (genesis) block, the blockchain has progressed.  For example, if you are looking at a block with the height listed as 1000, this will indicate that this specific block is the 999th since the first (genesis) block.
-    **Timestamp:** This indicates the date and time the block was forged and written onto the ARK blockchain.
-    **Transactions:** Here you will see how many transactions were included in this block.
-    **Generated By:** Refers to which delegate forged this specific block. For more information on DPOS/delegates refer to our section on [**What is DPOS and how it relates to other consensus mechanisms**](https://docs.ark.io/basics/what-is-delegated-proof-of-stake.html)
-    **Amount:** Indicates the total amount of ARK for all transactions inside the block
-    **Fee:** Shows the total fees associated with all transactions within the block.

![NETWORK INFORMATIION Overview](./assets/how-to-use-the-ark-explorer/NetworkInformation.png)

### Network Information:
Across the top of the page you will also see a list of information about the current state of the network you are viewing.
-    **Height:**  This is current live view of how many blocks have been created since the first (genesis) block when the ARK blockchain was created.
-    **ARK/Fiat:** This indicates the current price of ARK in your chosen national currency. This will often be auto set to the national currency of wherever you are connecting to the internet from.  For mobile users, in the upper right-hand corner you can, by clicking the currency icon, change this setting to the national currency of your choice.
-    **Supply:** This area shows the total supply of ARK currently exists.  Depending on the coin, total supply can mean the total amount of coins that will ever exist, however in ARK's case this number goes up over time with a set number of coins created every year.  For more information on DPOS/delegates refer to our section on [**What is DPOS and how it relates to other consensus mechanisms**](https://docs.ark.io/basics/what-is-delegated-proof-of-stake.html)

-    **Network:** This will indicate whether you are viewing the mainnet or testnet. Mainnet is where transactions are conducted and settled in real time. In contrast the testnet is used by developers to test functionality before introducing features or other applications onto the mainnet.  For the average user this is of no consequence and your experience will always be on the mainnet.
-    **Market Cap:** This refers to the market capitalization of ARK, the total value of all the ARK that exist by multiplying the Total Supply by the current price of your chosen national currency.

![DROPDOWN Overview](./assets/how-to-use-the-ark-explorer/DROPDOWN.png)

### Top Menu Bar
**ARK ICON:** This will take you back to the ARK explorer home page

**Drop Down Menu:** This contains the following Information
-    **Home:** This will take you back to the explorer home page
-    **Top Wallets:** This will show you the wallets, descending from high to low, that hold the most ARK.  From there you will be able to see their numerical ranking (in relation to total balance), wallet address, balance and the percentage of total supply they control.  Currently the ARK development team holds the largest percentage of ARK, which is used to pay for projects and developers to improve network functionality and other projects that bring value to the ARK community.

     ![Top Wallets](./assets/how-to-use-the-ark-explorer/TOPWALLETS.png)
-    **Delegate Monitor:** This shows the current list of delegates and their votes on the network.  ARK is run by its community who vote for delegates.  Delegates, among other things, vote on their behalf in community related matters and most importantly forge (verify) blocks.  The top 51 delegates perform these functions for the network and rely on community support to maintain their position within the network.  For more information on DPOS/delegates refer to our section on [**What is DPOS and how it relates to other consensus mechanisms**](https://docs.ark.io/basics/what-is-delegated-proof-of-stake.html)

     ![Delegate Monitor Overview](./assets/how-to-use-the-ark-explorer/DELEGATEMONITOROVERVIEW.png)

The delegate monitor shows two tabs, **"Active"** and **"Standby"**.
Active will list the current top 51 active delegates, an overview of blocks recently forged, blocks missed, delegates who are not forging and those delegates waiting to forge the next blocks.

![Delegate Overview](./assets/how-to-use-the-ark-explorer/DELEGATEOVERVIEW.png)

If you click on a delegate’s username you will be taken to delegates wallet address page and see the following information.
-    **Balance:** Total amount of ARK in delegates wallet.
-    **Transactions:** green  arrows indicate number of transactions INTO the delegates wallet, while red arrows indicate transactions OUT of the delegates wallet.
-    **Uptime:** Indicates the percentage of time the delegates node has been connected to the network. When delegate nodes are not online they are not forging (verifying) new blocks, thus this can be an important aspect for ARK community members to consider when voting.
-    **Rank/Status:** This shows what the delegates ranking is in terms of votes.  For example, if you see the number six this means that delegate has the sixth highest number of votes for all delegates in the network.
-    **Approval:** This field will show the percentage of the total network votes they control.  If this shows 5% then that means that 5% of all votes in the network are pledged to them.
-    **Forged:** Indicates how many total ARK they have been rewarded through forging (verifying) blocks.
-    **Blocks:** Shows the total number of blocks this delegate has forged on the network
-    **Votes:** Who this wallet has cast their delegate vote towards .
-    **Voters:** How many total voters this delegate has pledged to them.

![Header Overview](./assets/how-to-use-the-ark-explorer/HEADERoverview.png)

The last three menu option are as follows

**Search Bar:**

Here you can input any ARK wallet address, transaction or block ID to find detailed information about them.  For example, most users will use this to check the status of a transaction that they sent or are to receive.   If you were sending someone a transaction of 5 ARK, once you send the payment a transaction ID will be generated, and you will be able to forward that information to the recipient as both a validation of payment and a digital tracking ID as to its disposition in the network.

**Currency Pairing:**

The currency symbol can be changed to reflect the live price of ARK to your national currency of choice.

**Day/Night Mode:**

This is merely an aesthetic choice depending on the user and how they prefer the interface to look.
it is important to note that there are few minor differences between the desktop and mobile versions of the explorer, although most of the experience is the same.  The most marked difference is a price graph on the home page of the block explorer.  This interactive graph allows you to see ARK price in relation to your chosen national currency  over day, week, month, quarter and year views.  The other two functionality differences are in the network information bare near the top of the page.

With this information you can now take advantage of the full breadth of functionality contained within the ARK explorer.  While this may seem like a simple tool, this is a window into why cryptocurrencies are so powerful.  Block explorers help individuals like yourself to see that the blockchain is a permanent record of transactions so that trust can be placed in a trustless system.

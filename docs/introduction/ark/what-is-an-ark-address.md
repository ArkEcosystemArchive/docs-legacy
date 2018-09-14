---
title: "What Is An ARK Address?"
---

# What Is An ARK Address?

[[toc]]

## Foreword

**Cryptography behind blockchain technology**

Public-key or asymmetric cryptography, is an encryption scheme that uses a public key and a private key. The public key is used to encrypt and the private key is used to decrypt.

A blockchain account is defined by its address that is derived from a public key. It allows everyone to verify that data is signed by the corresponding private key. This signature acts as proof of ownership.

It is impossible to compute the private key from the public key. Because of this, public keys can be freely shared, allowing users an easy and convenient method for encrypting content and verifying digital signatures, and private keys can be kept secret, ensuring only the owners of the private keys can decrypt content and create digital signatures [1].

ARK uses the [SECP256k1](https://en.bitcoin.it/wiki/Secp256k1) curve from the [elliptic curve digital signature algorithm](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) (ECDSA).

ECDSA generates the private key and the public key pair from a unique 32-bytes-size seed. As the seeds are not very human readable, we have the option to generate the seed from something more convenient : a passphrase.

The passphrase is a written in simple readable text. It often consists of twelve words according to the [Bitcoin Improvement Protocol #39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) (BIP39). The usage of the protocol is not mandatory as a seed can be generated from any kind text, but is recommended. A passphrase needs enough complexity and has to be random enough in order to be considered secure.

**From a passphrase to private and public keys**

![Diagram 001](./assets/what-is-an-ark-address/arkDiagram04-001.png)

## ARK address

|passphrase |`simple secret`                                                     |
|-----------|--------------------------------------------------------------------|
|seed       |`b6af972cfcff450addadfecccc1d222de0f28c92c349a6bcbba4d4267dd3199c`  |
|public key |`036f9f2b56926a8c28c3bcef02811b6b3338c4d67b06eb7a9e90bda0fb3eacedee`|
|private key|`9b449f2ac4525b0116c7a78ce52387aab2ad6d928749cd26e60f2588efc5c01d`  |
|address    |`AJZkkwhCjDG5AS9gZcNfKzTa3s1qwvD44r`                                |

A blockchain is a distributed database where records are stored according to a consensus mechanism (secure protocol) executed by a network of nodes (Peer-To-Peer network). The unitary element used in this process is an account to account transaction containing information such as `senderId`, `recipientId`, `amount` and `fee`. A sender and recipient account needs to be identifiable. This is enabled by using an address and information related to token balance and transaction history are linked to it.

The ARK address is like a bank account where only the owner of the private key can validate and broadcast transactions. It is very important to keep the passphrase safe.

**From a public key to an ARK address**

![Diagram 002](./assets/what-is-an-ark-address/arkDiagram04-002.png)

A modifier is a byte used to customize the address. It is useful to differentiate networks :
 + On ARK mainnet modifier = `0x17` so ARK address starts with `A`
 + On ARK devnet modifier = `0x1e` so DARK address starts with `D`
 + On KAPU mainnet modifier = `0x2d` so KAPU address starts with `K`

Here is the table giving the address start char according to hexadecimal modifier value :

|hex|start char|hex|start char|hex|start char|hex|start char|hex|start char|
|:-:|:--------:|:-:|:--------:|:-:|:--------:|:-:|:--------:|:-:|:--------:|
|00 |1         |10 |7         |20 |D or E    |30 |L         |40 |S or T    |
|01 |Q or o    |11 |7 or 8    |21 |E         |31 |L or M    |41 |T         |
|02 |o or 2    |12 |8         |22 |E or F    |32 |M         |42 |T         |
|03 |2         |13 |8 or 9    |23 |F         |33 |M         |43 |T or U    |
|04 |2 or 3    |14 |9         |24 |F         |34 |M or N    |44 |U         |
|05 |3         |15 |9         |25 |F or G    |35 |N         |45 |U or V    |
|06 |3         |16 |9 or A    |26 |G         |36 |N or P    |46 |V         |
|07 |3 or 4    |17 |A         |27 |G or H    |37 |P         |47 |V         |
|08 |4         |18 |A or B    |28 |H         |38 |P         |48 |V or W    |
|09 |4 or 5    |19 |B         |29 |H         |39 |P or Q    |49 |W         |
|0a |5         |1a |B         |2a |H or J    |3a |Q         |4a |W or X    |
|0b |5         |1b |B or C    |2b |J         |3b |Q or R    |4b |X         |
|0c |5 or 6    |1c |C         |2c |J or K    |3c |R         |4c |X         |
|0d |6         |1d |C or D    |2d |K         |3d |R         |4d |X or Y    |
|0e |6 or 7    |1e |D         |2e |K         |3e |R or S    |4e |Y         |
|0f |7         |1f |D         |2f |K or L    |3f |S         |4f |Y or Z    |

|hex|start char|hex|start char|hex|start char|hex|start char|hex   |start char|
|:-:|:--------:|:-:|:--------:|:-:|:--------:|:-:|:--------:|:----:|:--------:|
|50 |Z         |60 |f or g    |70 |n         |80 |t         |90    |z or 2    |
|51 |Z         |61 |g         |71 |n         |81 |t or u    |&ge;91|2         |
|52 |Z or a    |62 |g         |72 |n or o    |82 |u         |
|53 |a         |63 |g or h    |73 |o         |83 |u or v    |
|54 |a or b    |64 |h         |74 |o or p    |84 |v         |
|55 |b         |65 |h or i    |75 |p         |85 |v         |
|56 |b or c    |66 |i         |76 |p         |86 |v or w    |
|57 |c         |67 |i         |77 |p or q    |87 |w         |
|58 |c         |68 |i or j    |78 |q         |88 |w or x    |
|59 |c or d    |69 |j         |79 |q or r    |89 |x         |
|5a |d         |6a |j or k    |7a |r         |8a |x         |
|5b |d or e    |6b |k         |7b |r         |8b |x or y    |
|5c |e         |6c |k         |7c |r or s    |8c |y         |
|5d |e         |6d |k or m    |7d |s         |8d |y or z    |
|5e |e or f    |6e |m         |7e |s or t    |8e |z         |
|5f |f         |6f |m or n    |7f |t         |8f |z         |

## Ledger Nano S

The best way to secure ARK address is to use a device that can sign transactions off the network. ARK team developed an application running on [Ledger Nano S](https://www.ledgerwallet.com/products/ledger-nano-s) hardware wallet allowing such a security.

The Ledger Nano S device does not store tokens. It is a device that generates public and private keys from a master seed. Keys are issued from the seed using the derivation path. For Ark blockchain (and cloned ones) the derivation path is structured like this :

`44'\111'\<account index>'\0\<address number>`

So the derivation path of address #1 from account #1 is :

`44'\111'\0'\0\0`

[Read more about HD wallets](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki)

### BIP39 account possibilities

Choosing 12 words randomly from the [2048 words](https://github.com/bitcoin/bips/blob/master/bip-0039/bip-0039-wordlists.md) available in BIP39 list gives :

![\frac{n!}{(n-k)!}=\frac{2048!}{(2048-12)!}](https://latex.codecogs.com/svg.latex?\frac{n!}{(n-k)!}=\frac{2048!}{(2048-12)!})

**5 271 537 971 301 488 476 000 309 317 528 200 000 000 combinations**

#### References
1. [WebSite GlobalSign](https://www.globalsign.com/en/ssl-information-center/what-is-public-key-cryptography/)

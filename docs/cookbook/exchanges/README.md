---
title: "Introduction"
---

# Introduction

[[toc]]

Ark is all about ease of use - for end users, and for service providers. In our quest to provide simplicity for consumers and exchanges — we are proud to announce the development of [Ark RPC-Server](https://github.com/ArkEcosystem/rpc-server), a customised Remote Procedure Call software, designed and developed by Ark with some key innovations that will be used in other Ark projects as well (more on that in section “Key Features”).

Most exchanges and third party services are familiar with BTC RPC when listing or adding a cryptocurrency. Since Ark is a custom blockchain, many services have had difficulty navigating through our GitHub and integrating Ark into their platform. Now, the addition of Ark RPC will give all exchanges and third party service providers a more familiar path to integrate Ark into their platform.

## What is RPC?

Remote Procedure Call (RPC) is a protocol that allows one program to request a service from software located on another computer network without having to understand all of the network’s details. A procedure call is also sometimes known as a function call or a subroutine call.

By replacing dedicated protocols and communication methods with a standardized interface, RPC is designed to facilitate communication between client and server processes. The functions contained within RPC are accessible by any program that must communicate using a client/server methodology.

::: tip
The majority of platforms utilising bitcoin use this RPC procedure. To accommodate these services and make the integration of Ark as user friendly as possible, it was our goal to develop a familiar process for use now, and in the future. The Ark RPC will minimise headaches and streamline the addition process for all.
:::

## Key Features

With development of Ark RPC a few key features have been implemented that will also be used in other Ark projects.

[**BIP38 encryption**](https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki) — we implemented BIP38 encryption which is a method for encrypting and encoding a passphrase-protected Ark private key record in the form of a Base58Check-encoded string.
Each record string contains all the information needed to reconstitute the private key except for a passphrase, and the methodology uses salting to resist brute-force attacks.

[**Backend in LevelDB** ](http://leveldb.org/)— backend of Ark-RPC is using LevelDB (Level Database), which was developed by Google.
By default, LevelDB stores entries lexicographically, sorted by keys. The sorting is one of the main distinguishing features of LevelDB amongst similar embedded data storage libraries and comes in very useful for querying.
LevelDB is designed to compress data and use the least possible space while providing a highly transparent, light-weight foundation.

**Network layer** — the server is automatically syncing with Ark blockchain looking for good peers to connect with, reducing the risk of disconnection.

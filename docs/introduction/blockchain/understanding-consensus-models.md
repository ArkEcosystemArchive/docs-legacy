# Understanding Consensus Models

[[toc]]

Consensus is integral to any blockchain, but often quite misunderstood. There are multiple mechanisms in peer-to-peer sharing protocols to maintain a valid, consistent history across different nodes, some more common than others. In this document, we review a wide range of algorithms so you can familiarize yourself with many different kinds of consensus mechanisms.

A consensus protocol defines a way between different actors to determine the `state` of the blockchain so that everyone has exactly the same copy of the blockchain and adds transactions and blocks in exactly the same manner

## Byzantine Fault Tolerance

Byzantine refers to the [Byzantine Generals Problem](https://en.wikipedia.org/wiki/Byzantine_fault). In short, a group (N) of individuals or computers has a single goal; however, amongst them are K traitors which will attempt to thwart this goal. The question is, what is the ratio of N over K for which the common goal may successfully be completed, or in other words: what is the number of bad actors that a network can sustain before it reaches an inconsistent/faulty state. In the case of Bitcoin, as long as 51% of the hashrate is controlled by good actors, the network is secure. For Ark, 26 out of 51 delegates need to be good actors or approximately 51%.

There are multiple consensus protocols used in various blockchain networks. The two primary functions of the consensus protocols are to prevent any one party from maliciously affecting the blockchain, and also to control how often new coins are created, or “mined.” The consensus protocol is also the mechanism used to determine how to increment the blockchain state (adding blocks). Lastly, it’s used to determine the method by which everyone agrees the blockchain is correct and accurate. Consensus protocols are designed to operate in a trustless environment. This means that if party A and party B both participate in storing and adding to the blockchain, party A does not need to trust that party B’s activities are valid and correct because they can cryptographically validate the work done by party B on their own, and vice versa. A consensus protocol assumes bad actors are present in the network.

## Proof-of-Work

Proof-of-Work (PoW) is the consensus model used by Bitcoin. Initially, Satoshi Nakamoto attempted to solve the following problem: each network participant may attempt to increment the blockchain state by creating a block from multiple transactions; however if two blocks differ by even a single transaction, the block headers would be completely different and thus the chain would fork. A protocol had to be devised such that every participant would obtain exactly the same block, regardless of the transactions they may have been saving up in their memory pool.

By far the easiest method is [Leader Election](https://en.wikipedia.org/wiki/Leader_election), in which we periodically select a participant to create a new block. To reward network participants, we award the leader with a mining reward. PoW is a protocol used to determine the next leader. We use an arbitrary [hash function](https://en.wikipedia.org/wiki/Hash_function), that takes the previous blockchain state (I) + a random number (R), and produces another number (J). If J is larger than the current difficulty (D), the miner becomes the next leader and may create a new block. The miner proves to the other participants that he is the leader, by appending R to the block header. The same hash function can be used by the other miners to determine if J is larger and thus if the miner should be the leader.

The difficulty is controlled by a different algorithm, aimed at ensuring that the block times remain between 10 and 15 minutes. If the block time exceeds 15 minutes, we can decrease the value of D, so that more values of J are valid. If we go below 10 minutes, we increase the value of D.

PoW has nothing to do with the actual validity of transactions or block. Although the rules for these are part of a consensus protocol, they are beyond the scope of the Ark documentation.

A downside of PoW is that hashing may be quite expensive for high values of D, as the hashing power required to find a valid J increases exponentially. Validating Bitcoin transactions is cheap, but proving to the network that you should be the next leader costs thousands of dollars in electricity, repeating every 10 minutes.

## Proof-of-Stake

The first real alternative to PoW was Proof of Stake (PoS), which altered the way in which a leader is elected. In the case of Bitcoin, the miner with the most hashing power will become the leader often. In PoS, network participants run an algorithm once every block cycle, which has only two inputs: the current blockchain state and the active staking wallets. Each wallet has a chance to become the next leader, if they match the following conditions:

- The wallet is tied to an active staking node.
- The wallet contains more than a preset minimum amount of coins.

The more coins you have, the higher the chance that your node is selected to become the next leader. Since all nodes only need to run this algorithm once, the cost of a PoS blockchain is far lower than a PoW chain.

PoS increases network security by forcing participants to invest in the coin itself, instead of mining equipment. A Bitcoin miner may switch to a different coin and has no real incentive to use BTC or hold it. A downside of PoS is that a staker may stake in all forks of that particular coin at the same time, since running the consensus algorithm is very cheap. This means that users do not need to pick a particular side during a fork.

## Delegated Proof-of-Stake

Elaborating on PoS, Delegated Proof-of-Stake (DPoS) allows a small number of stakers to participate in network consensus, in the case of Ark, 51. A staker (or delegate) does not actually need to own 2% of the total coin supply. Other wallets may vote on a delegate, which adds their staking balance to the delegate's wallet. The delegate does not gain any control on the voter's coins whatsoever.

DPoS relies on a reputation scheme, where voters continuously check their delegates and in the case of malicious behavior, alter their vote to a different delegate. Anyone may become a delegate by registering through a special transaction type; and anyone may vote, regardless of their wallet's balance.

## Conclusion and Considerations

Although it might seem that PoS and DPoS are superior to PoW, we can say for sure that PoW is incredibly secure, while PoS and DPoS are newer and less battle-tested. The future will tell if a particular consensus protocol will dominate the market, or if each fills its own niche.

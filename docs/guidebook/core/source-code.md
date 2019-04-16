# Source Code

High level overview of some modules.

## packages/core-p2p/peerVerifier

On a few occasions every node will request the status of each one of its peers.
This status information contains the height and id of the latest block in that
peer's chain and is used for assessing quorum elsewhere in the code. Thus it is
important that the status reply is legit. While it is true that the peer can
reply anything he wants, if he pretends to be on another chain (fork), he must
be able to provide valid blocks from that chain and those blocks must be signed
by the corresponding delegates for that other chain. If that is the case, the
node considers those blocks valid (even though they may not be part of the
node's own chain) and adds the peer to the quorum calculations.

The Peer Verifier checks the peer's chain - whether it is the same as own chain,
longer, shorter, forked or not. During the verification process the highest
common block between the two chains is determined and a few cases are
distinguished, assuming the node's chain is `B1 -> B2 -> B3 -> B4` for example:

### Case 1. Peer's chain is higher. No fork.
- Example peer chain: `B1 -> B2 -> B3 -> B4 -> B5 -> B6`
- Highest common block: `B4`
- What is verified: `B5` and `B6`

### Case 2. Peer's chain is higher. Fork.
- Example peer chain: `B1 -> B2 -> B3' -> B4' -> B5'`
- Highest common block: `B2`
- What is verified: `B3'`, `B4'`, `B5'`

### Case 3. Peer's chain has the same height as the node's chain. No fork.
- Example peer chain: `B1 -> B2 -> B3 -> B4`
- Highest common block: `B4`
- What is verified: nothing

### Case 4. Peer's chain has the same height as the node's chain. Fork.
- Example peer chain: `B1 -> B2 -> B3' -> B4'`
- Highest common block: `B2`
- What is verified: `B3'` and `B4'`

### Case 5. Peer's chain is lower. No fork.
- Example peer chain: `B1 -> B2 -> B3`
- Highest common block: `B3`
- What is verified: nothing

### Case 6. Peer's chain is lower. Fork.
- Example peer chain: `B1 -> B2 -> B3'`
- Highest common block: `B2`
- What is verified: `B3'`

If during the verification process the node couldn't retrieve the peers blocks
it wants to verify or if they turn out not to be valid (not signed by the
corresponding delegates) then the peer verification fails and that peer is not
added to the quorum calculations.

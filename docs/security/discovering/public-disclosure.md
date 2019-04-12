# Public Disclosure

After we have assessed the risk and mitigated a vulnerability, it is publicly disclosed in our [dedicated repository](https://github.com/ARKEcosystem/security-vulnerabilities).

## Rewards Program

Our rewards program encourages researchers to contribute to the security of the ARK Ecosystem through the following bounties:

We know that software will always have flaws that are hard to notice initially. As we take security of our network as a top priority, we provide a security/vulnerability bounty for bugs or errors in the ARK Core that could potentially harm or exploit the [ARK network](https://github.com/ARKEcosystem/core).

### Critical: $5,000-$10,000

The worst of the worst security vulnerabilities related to funds or taking control of the network that need to be addressed and fixed ASAP.

Examples:

- Making ARK out of thin air.
- Spending someone else’s ARK without the need of their private keys
- Replaying the same transaction multiple times without the need of private keys.
- Exposing private keys via public methods.
- Taking control of the entire network.
- Permanently forking the network or a way to permanently destroy the integrity of the ARK blockchain without requiring a malicious delegate.

### High: $2,000-$3,000

Security vulnerabilities that are not related to funds or taking control of the network, but can still pose severe problems to the network.

Examples:

- Stopping the network for extended periods of time.
- Bringing the majority or all delegates offline.
- Get into the blockchain database - inserting invalid data (transaction, blocks).

### Medium: $500-$1,500

Issues that can cause temporary problems, but do not expose corrupt data or cause permanent harm.

Examples:

- Temporarily slowing down block propagation.
- Stopping the network for shorter period of times.
- Making replay attacks under some restricted circumstances.

### Low: $100-$300

Security vulnerabilities that usually have no impact on the whole blockchain infrastructure, but can still pose problems for some specific things.

Examples:

- Things that only affect a subset of nodes (e.g. hardware failures caused by an attack when the server satisfies the minimum requirements)
- Inconveniences caused by a malicious delegate).

Including a patch with your findings will also make you eligible for a bonus of up to 50% on top of these numbers. To get a bonus make sure to follow the steps outlined here: /security/contributing/#procedure-for-a-pach
The size of the bonus is determined at the sole discretion of the Core Developers.

## Eligibility

1. Never publicly disclose any exploit or vulnerability.
2. Never maliciously initiate an exploit on the ARK public network, if you need to validate your setup use your own local ARK network or use the ARK development network
3. To receive the bounty, you must send an in-depth explanation in an email to [security@ark.io](mailto:security@ark.io) with the steps to reproduce the vulnerability and if possible a patch or PoC to negate the security vulnerability in question.

_Security bounty can fall in higher or lower tier than you anticipated, all our decisions are final. Exploits which make indirect use of already known issues might not be eligible for a security bounty. Do not take every word literal and examples serve as a basis on what you can expect (it also depends a lot on circumstances of how you can exploit it, what’s the impact and every security vulnerability is evaluated on a case by case basis). Security vulnerabilities are paid in ARK based on the daily average rate before the payout._

## Disclaimer

The ARK team may decide to deviate from the rewards program and security procedure without disclosing the underlying reasons.

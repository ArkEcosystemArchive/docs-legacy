# Properly Investigating Vulnerabilities

Even though no harm may have been intended; testing a security vulnerability by deploying your code to the `mainnet` is strictly prohibited. Both `devnet` and `testnet` are more suited for such experiments, but come with their own risks. Both of these networks are public, and thus a malicious actor might observe your attempted tests, reproduce the vulnerability and attack `mainnet`.

To initially validate your suspicions, ensure you run your tests on a local network, using our [docker](/guidebook/core/docker.md) for example. By mounting a volume to persist data, you can attach the mounted volumes and images in your vulnerability reported, ensuring we have the same data as you do, and can reproduce the issue as fast as possible.

After you have reported the vulnerability, the ARK team will collaborate with you on a possible solution.

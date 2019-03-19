# Summary

Ark `v2.3` is a minor update but not backward compatible with `v2.2.X`. This update introduces [AIP29](https://github.com/ArkEcosystem/AIPs/blob/master/AIPS/aip-29.md), an increased vendor field length, various performance improvements and more.

- **Upgrade time**: low - upgrading to `v2.3` only requires minimal configuration changes.
- **Complexity**: medium - the `wallets` table has been removed from the database which can impact third-party applications.
- **Risk**: medium - `v2.2` is not backward compatible with `v2.1` and includes breaking changes.

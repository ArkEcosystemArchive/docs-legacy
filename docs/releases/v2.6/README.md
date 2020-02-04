# Summary

ARK `v2.6` is a minor update but not backward compatible with `v2.5.X`. This update introduces implementations of AIP11 and AIP18.

- **Upgrade time**: low - upgrading to `v2.6` only requires minimal configuration changes.
- **Complexity**: high - AIP11 and AIP18 were implemented which bring various cryptography changes after a milestone is reached.
- **Risk**: high - `v2.6` is not backward compatible with `v2.5` and as it includes AIP11 and AIP18 which will cause communication with 2.5 nodes to fail once a milestone is reached.

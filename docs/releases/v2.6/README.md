# Summary

ARK `v2.6` is a minor update but not backward compatible with `v2.5.X`. This update introduces implementations of AIP11 and AIP18.

- **Upgrade time**: low - upgrading to `v2.6` only requires minimal configuration changes.
- **Complexity**: high - AIP11 and AIP18 were implemented which bring various cryptography changes after a milestone is reached.
- **Risk**: high - `v2.6` is not backward compatible with `v2.5` and as it includes cryptography and P2P changes that will result in communication with nodes below 2.6.0 to fail.

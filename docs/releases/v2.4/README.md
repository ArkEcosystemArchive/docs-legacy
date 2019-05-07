# Summary

ARK `v2.4` is a minor update but not backward compatible with `v2.3.X`. This update replaces the current API based communication with WebSockets which means peers on versions before `v2.4.0` will not be able to communicate.

- **Upgrade time**: low - upgrading to `v2.4` only requires minimal configuration changes.
- **Complexity**: high - P2P communication was rewritten and `@arkecosystem/crypto` exports were modified.
- **Risk**: high - `v2.4` is not backward compatible with `v2.3` and includes breaking changes for P2P communication.

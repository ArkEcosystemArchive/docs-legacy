module.exports = [
    ["/", "Back to Table of Contents"],
    ["/archive/", "Archive Home"],
    {
      title: "API 1.0",
      collapsable: true,
      children: [
            ["/archive/api/public-v1/", "Getting Started"],
            ["/archive/api/public-v1/accounts", "Accounts"],
            ["/archive/api/public-v1/blocks", "Blocks"],
            ["/archive/api/public-v1/delegates", "Delegates"],
            ["/archive/api/public-v1/loader", "Loader"],
            ["/archive/api/public-v1/peers", "Peers"],
            ["/archive/api/public-v1/signatures", "Signatures"],
            ["/archive/api/public-v1/transactions", "Transactions"],
        ]
    },
    {
        title: "BridgeChains",
        collapsable: true,
        children: [
            "/archive/bridgechains/",
            "/archive/bridgechains/migrations/migrating_1.0_2.0.md",
          ]
      },
  ]


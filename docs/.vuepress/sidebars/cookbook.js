module.exports = [
  ['/', 'Back to Table of Contents'],
  ["/cookbook/", "Cookbook Home"],
  {
    title: "Usage Guides",
    collapsable: false,
    children: [
      "/cookbook/usage-guides/how-to-use-ark-explorer",
      "/cookbook/usage-guides/how-to-use-ark-desktop-wallet",
      "/cookbook/usage-guides/how-to-use-ark-mobile-wallet",
      "/cookbook/usage-guides/how-to-vote-in-the-ark-desktop-wallet"
    ]
  },
  {
    title: "Developer",
    collapsable: false,
    children: [
      "/cookbook/developer/setup-dev-environment",
      "/cookbook/developer/send-transaction-ark-sdk",
      "/cookbook/developer/write-a-plugin",
      "/cookbook/developer/tester-cli-transaction",
      "/cookbook/developer/listen-to-blockchain"
    ]
  },
  {
    title: "Node",
    collapsable: false,
    children: [
      "/cookbook/node/setup",
      "/cookbook/node/secure",
      "/cookbook/node/dynamic-fees"
    ]
  },
  {
    title: "Deployer",
    collapsable: false,
    children: [
      "/cookbook/deployer/setup",
      "/cookbook/deployer/setup-with-azure"
    ]
  },
  {
    title: "Pay",
    collapsable: false,
    children: [
      "/cookbook/pay/installation"
    ]
  },
  {
    title: "Exchanges",
    collapsable: false,
    children: [
      "/cookbook/exchanges",
      "/cookbook/exchanges/json-rpc",
      "/cookbook/exchanges/public-api",
      "/cookbook/exchanges/relay",
    ]
  },
];

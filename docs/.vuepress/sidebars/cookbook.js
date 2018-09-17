module.exports = [
  ['/', 'Back to Table of Contents'],
  ["/cookbook/", "Cookbook Home"],
  {
    title: "Usage Guides",
    collapsable: false,
    children: [
      "/cookbook/usage-guides/how-to-use-ark-explorer",
      "/cookbook/usage-guides/how-to-use-ark-desktop-wallet",
      "/cookbook/usage-guides/how-to-use-ark-mobile-wallet"
    ]
  },
  {
    title: "Node",
    collapsable: false,
    children: [
      "/cookbook/node/setup",
      "/cookbook/node/secure"
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
    title: "Exchanges",
    collapsable: false,
    children: [
      "/cookbook/exchanges/communication",
      "/cookbook/exchanges/installation"
    ]
  },
];

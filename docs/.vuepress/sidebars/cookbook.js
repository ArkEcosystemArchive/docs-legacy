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
  }
];

module.exports = [
  ['/', 'Back to Table of Contents'],
  ["/tutorials/", "Tutorials Home"],
  {
    title: "Usage Guides",
    collapsable: false,
    children: [
      "/tutorials/usage-guides/how-to-use-ark-explorer",
      "/tutorials/usage-guides/how-to-use-ark-desktop-wallet",
      "/tutorials/usage-guides/how-to-use-ark-mobile-wallet",
      "/tutorials/usage-guides/how-to-vote-in-the-ark-desktop-wallet"
    ]
  },
  {
    title: "Node",
    collapsable: false,
    children: [
      "/tutorials/node/setup",
      "/tutorials/node/secure",
      "/tutorials/node/snapshots",
      "/tutorials/node/dynamic-fees"
    ]
  },
  {
    title: "Deployer",
    collapsable: false,
    children: [
      "/tutorials/deployer/deployer",
      "/tutorials/deployer/docker",
      "/tutorials/deployer/vagrant",
      "/tutorials/deployer/wallet-explorer",
      "/tutorials/deployer/azure",
      "/tutorials/deployer/faq"
    ]
  },
  {
    title: "Pay",
    collapsable: false,
    children: [
      "/tutorials/pay/installation",
    ]
  }
];

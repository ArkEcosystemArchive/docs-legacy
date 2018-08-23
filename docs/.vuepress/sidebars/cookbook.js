module.exports = [
  ['/', 'Back to Table of Contents'],
  ["/cookbook/", "Cookbook Home"],
  {
    title: "Usage Guides",
    collapsable: false,
    children: buildChildren("cookbook/usage-guides", [
      "how-to-use-ark-explorer",
      "how-to-use-ark-desktop-wallet",
      "how-to-use-ark-mobile-wallet"
    ])
  },
  {
    title: "Deployer",
    collapsable: false,
    children: buildChildren("cookbook/deployer", [
      "setup",
      "setup-with-azure"
    ])
  },
  {
    title: "Exchanges",
    collapsable: false,
    children: buildChildren("cookbook/exchanges", [
      "communication",
      "installation"
    ])
  },
];

function buildChildren(base, children) {
  return children.map(child => `/${base}/${child}`);
}
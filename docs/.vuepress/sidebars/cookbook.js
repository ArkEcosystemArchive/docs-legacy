const returnChildren = require("../utils/buildSidebar").buildChildren;

module.exports = [
  ["/cookbook", "Cookbook Home"],
  {
    title: "Deployer",
    children: returnChildren("cookbook/deployer", ["setup", "setup-with-azure"])
  },
  {
    title: "Exchanges",
    children: returnChildren("cookbook/exchanges", [
      "communication",
      "installation"
    ])
  },
  {
    title: "Usage Guides",
    children: returnChildren("cookbook/usage-guides", [
      "how-to-use-the-ark-explorer",
      "how-to-use-the-desktop-wallet",
      "how-to-use-the-mobile-wallet"
    ])
  }
];

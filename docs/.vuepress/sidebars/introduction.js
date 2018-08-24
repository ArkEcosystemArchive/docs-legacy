module.exports = [
  ['/', 'Back to Table of Contents'],
  ["/introduction/", "From Blockchain to Ark"],
  {
    title: "Blockchain",
    collapsable: false,
    children: buildChildren("introduction/blockchain", [
      "what-is-blockchain",
      "how-secure-is-blockchain", 
      "why-do-blockchains-exist",
      "when-do-you-need-blockchain",
      "anonymous-vs-untraceable",
      "understanding-consensus-models"
    ])
  },
  {
    title: "Ark",
    collapsable: false,
    children: buildChildren("introduction/ark", [
      "understanding-transactions-and-block-propagation",
      "what-is-an-ark-address",
      "interoperability-and-ark",
      "how-does-ark-smartbridge-work",
      "what-is-delegated-proof-of-stake"
    ])
  },
];

function buildChildren(base, children) {
  return children.map(child => `/${base}/${child}`);
}
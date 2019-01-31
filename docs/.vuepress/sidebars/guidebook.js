module.exports = [
  ["/", "Back to Table of Contents"],
  ["/guidebook/", "Guidebook Home"],
  {
    title: "Getting Started",
    collapsable: true,
    children: [
      "/guidebook/developer/setup-dev-environment.md",
      "/guidebook/developer/monitor-blockchain.md",
      "/guidebook/developer/send-transaction.md",
      "/guidebook/developer/write-a-plugin.md",
      "/guidebook/developer/tester-cli-transaction.md"
    ]
  },
  {
    title: "Core",
    collapsable: true,
    children: [
      "/guidebook/core/",
      "/guidebook/core/node-lifecycle",
      "/guidebook/core/transaction-lifecycle",
      "/guidebook/core/configuration",
      "/guidebook/core/development",
      "/guidebook/core/docker",
      "/guidebook/core/events",
      "/guidebook/core/logging",
      "/guidebook/core/testing",
      "/guidebook/core/webhooks",
      "/guidebook/core/data-models"
    ]
  },
  {
    title: "Core Plugins",
    collapsable: true,
    children: [
      "/guidebook/core/plugins/",
      "/guidebook/core/plugins/core",
      "/guidebook/core/plugins/core-api",
      "/guidebook/core/plugins/core-blockchain",
      "/guidebook/core/plugins/core-config",
      "/guidebook/core/plugins/core-container",
      "/guidebook/core/plugins/core-database",
      "/guidebook/core/plugins/core-debugger-cli",
      "/guidebook/core/plugins/core-deployer",
      "/guidebook/core/plugins/core-elasticsearch",
      "/guidebook/core/plugins/core-error-tracker-bugsnag",
      "/guidebook/core/plugins/core-error-tracker-sentry",
      "/guidebook/core/plugins/core-event-emitter",
      "/guidebook/core/plugins/core-forger",
      "/guidebook/core/plugins/core-graphql",
      "/guidebook/core/plugins/core-http-utils",
      "/guidebook/core/plugins/core-logger",
      "/guidebook/core/plugins/core-logger-winston",
      "/guidebook/core/plugins/core-p2p",
      "/guidebook/core/plugins/core-test-utils",
      "/guidebook/core/plugins/core-tester-cli",
      "/guidebook/core/plugins/core-transaction-pool",
      "/guidebook/core/plugins/core-utils",
      "/guidebook/core/plugins/core-vote-report",
      "/guidebook/core/plugins/core-webhooks",
      "/guidebook/core/plugins/crypto"
    ]
  },
  {
    title: "Other Products",
    collapsable: true,
    children: [
      "/guidebook/guides/",
      "/guidebook/guides/mobile",
      "/guidebook/guides/desktop",
      "/guidebook/guides/explorer",
      "/guidebook/guides/core-commander",
      "/guidebook/guides/pay",
    ]
  },
  {
    title: "Contribution Guidelines",
    collapsable: true,
    children: [
      "/guidebook/contribution-guidelines/",
      "/guidebook/contribution-guidelines/clean-code-and-tests",
      "/guidebook/contribution-guidelines/contributing",
      "/guidebook/contribution-guidelines/writing-documentation",
      "/guidebook/contribution-guidelines/git-branch-guidelines",
      "/guidebook/contribution-guidelines/git-commit-guidelines",
      "/guidebook/contribution-guidelines/project-structuring",
      "/guidebook/contribution-guidelines/releases-and-versioning",
      "/guidebook/contribution-guidelines/repository-management"
    ]
  }
];

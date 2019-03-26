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
            "/guidebook/core/cli",
            "/guidebook/core/configuration",
            "/guidebook/core/development",
            "/guidebook/core/docker",
            "/guidebook/core/events",
            "/guidebook/core/logging",
            "/guidebook/core/testing",
            "/guidebook/core/webhooks",
            "/guidebook/core/data-models",
            "/guidebook/core/source-code"
        ]
    },
    {
        title: "Core Plugins",
        collapsable: true,
        children: [
            '/guidebook/core/plugins/',
            {
                title: 'Required',
                children: [
                    '/guidebook/core/plugins/required/',
                    '/guidebook/core/plugins/required/core.md',
                    '/guidebook/core/plugins/required/core-blockchain.md',
                    '/guidebook/core/plugins/required/core-container.md',
                    '/guidebook/core/plugins/required/core-database.md',
                    '/guidebook/core/plugins/required/core-event-emitter.md',
                    '/guidebook/core/plugins/required/core-forger.md',
                    '/guidebook/core/plugins/required/core-http-utils.md',
                    '/guidebook/core/plugins/required/core-logger.md',
                    '/guidebook/core/plugins/required/core-p2p.md',
                    '/guidebook/core/plugins/required/core-transaction-pool.md',
                    '/guidebook/core/plugins/required/core-utils.md',
                    '/guidebook/core/plugins/required/crypto.md',
                ]
            }, {
                title: 'Optional',
                children: [
                    '/guidebook/core/plugins/optional/',
                    '/guidebook/core/plugins/optional/core-api.md',
                    '/guidebook/core/plugins/optional/core-elasticsearch.md',
                    '/guidebook/core/plugins/optional/core-error-tracker-airbrake.md',
                    '/guidebook/core/plugins/optional/core-error-tracker-bugsnag.md',
                    '/guidebook/core/plugins/optional/core-error-tracker-raygun.md',
                    '/guidebook/core/plugins/optional/core-error-tracker-rollbar.md',
                    '/guidebook/core/plugins/optional/core-error-tracker-sentry.md',
                    '/guidebook/core/plugins/optional/core-json-rpc.md',
                    '/guidebook/core/plugins/optional/core-logger-winston.md',
                    '/guidebook/core/plugins/optional/core-tester-cli.md',
                    '/guidebook/core/plugins/optional/core-vote-report.md',
                    '/guidebook/core/plugins/optional/core-webhooks.md',
                ]
            }, {
                title: 'Deprecated',
                children: [
                    '/guidebook/core/plugins/deprecated/',
                    '/guidebook/core/plugins/deprecated/core-graphql.md',
                ]
            }
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

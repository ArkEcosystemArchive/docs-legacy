module.exports = [
    '/', {
        title: 'Basics',
        children: [
            '/basics/how-to-use-the-ark-explorer',
            '/basics/how-to-use-the-desktop-wallet',
            '/basics/how-to-use-the-mobile-wallet',
            '/basics/understanding-transactions-and-block-propagation',
            '/basics/what-is-an-ark-address',
            '/basics/interoperability-and-ark',
            '/basics/how-does-ark-smartbridge-work',
            '/basics/what-is-delegated-proof-of-stake',
        ]
    }, {
        title: 'Blockchain',
        children: [
            '/blockchain/what-is-the-blockchain',
            '/blockchain/how-secure-is-a-blockchain',
            '/blockchain/why-do-blockchains-exist',
            '/blockchain/when-do-you-need-a-blockchain',
            '/blockchain/anonymous-vs-untraceable',
            '/blockchain/understanding-consensus-models',
        ]
    }, {
        title: 'Developers',
        children: [
            '/developers/',
            '/developers/api/p2p/',
            '/developers/api/public/v1/',
            '/developers/api/public/v2/',
            ['/developers/sdk/clients/guidelines', 'SDK Clients'],
            ['/developers/sdk/cryptography/guidelines', 'SDK Cryptography'],
            '/developers/api/json-rpc/',
            '/developers/api/webhooks/',
        ]
    }, {
        title: 'Ark Core',
        children: [
            '/core/development',
            '/core/plugins',
            '/core/configuration',
            '/core/logging',
            '/core/database',
            '/core/webhooks',
            '/core/events',
            '/core/docker',
            '/core/json-rpc',
            '/core/testing',
        ]
    }, {
        title: 'Ark Node',
        children: [
            '/node/setup',
            '/node/secure',
        ]
    }, {
        title: 'Guides',
        children: [
            '/guides/wallets/desktop',
            '/guides/wallets/mobile',
            '/guides/explorer',
            '/guides/core-commander',
        ]
    }, {
        title: 'Deployer',
        children: [
            '/deployer/setup',
            '/deployer/setup-with-azure',
        ]
    }, {
        title: 'Exchanges',
        children: [
            '/exchanges/',
            '/exchanges/installation',
            '/exchanges/communication',
        ]
    }, {
        title: 'FAQ',
        children: [
            '/faq/passphrases',
            '/faq/desktop-wallet',
            '/faq/voting-delegates',
            '/faq/bounties',
            '/faq/roadmap-updates',
        ]
    }, {
        title: 'Other',
        children: [
            '/other/glossary',
        ]
    }
]

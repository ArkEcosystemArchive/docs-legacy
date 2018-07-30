module.exports = [
    ['/developers/api/public/v1/', 'Introduction'],
    ['/developers/api/public/v1/versions', 'Versions'],
    ['/developers/api/public/v1/troubleshooting', 'Troubleshooting'], {
        title: 'Accounts',
        children: [
            '/developers/api/public/v1/accounts/list-all-accounts',
            '/developers/api/public/v1/accounts/retrieve-an-account',
            '/developers/api/public/v1/accounts/list-all-top-accounts',
            '/developers/api/public/v1/accounts/retrieve-the-balance-of-an-account',
            '/developers/api/public/v1/accounts/retrieve-the-delegate-registration-fee',
            '/developers/api/public/v1/accounts/retrieve-the-public-key-of-an-account',
            '/developers/api/public/v1/accounts/retrieve-the-total-count-of-accounts',
            '/developers/api/public/v1/accounts/retrieve-the-voted-delegate-of-an-account',
        ]
    }, {
        title: 'Blocks',
        children: [
            '/developers/api/public/v1/blocks/list-all-blocks',
            '/developers/api/public/v1/blocks/retrieve-a-block',
            '/developers/api/public/v1/blocks/list-all-fees-of-the-blockchain',
            '/developers/api/public/v1/blocks/retrieve-a-fee',
            '/developers/api/public/v1/blocks/retrieve-the-epoch-of-the-blockchain',
            '/developers/api/public/v1/blocks/retrieve-the-height-of-the-blockchain',
            '/developers/api/public/v1/blocks/retrieve-the-milestone-of-the-blockchain',
            '/developers/api/public/v1/blocks/retrieve-the-nethash-of-the-blockchain',
            '/developers/api/public/v1/blocks/retrieve-the-reward-of-the-blockchain',
            '/developers/api/public/v1/blocks/retrieve-the-status-of-the-blockchain',
            '/developers/api/public/v1/blocks/retrieve-the-supply-of-the-blockchain',
        ]
    }, {
        title: 'Delegates',
        children: [
            '/developers/api/public/v1/delegates/list-all-delegates',
            '/developers/api/public/v1/delegates/list-all-voters-of-a-delegate',
            '/developers/api/public/v1/delegates/retrieve-a-delegate',
            '/developers/api/public/v1/delegates/retrieve-the-delegate-registration-fee',
            '/developers/api/public/v1/delegates/retrieve-the-total-count-of-delegates',
            '/developers/api/public/v1/delegates/retrieve-the-total-forged-of-a-delegate',
            '/developers/api/public/v1/delegates/search-all-delegates',
        ]
    }, {
        title: 'Loader',
        children: [
            '/developers/api/public/v1/loader/retrieve-the-configuration',
            '/developers/api/public/v1/loader/retrieve-the-status',
            '/developers/api/public/v1/loader/retrieve-the-syncing-status',
        ]
    }, {
        title: 'Peers',
        children: [
            '/developers/api/public/v1/peers/list-all-peers',
            '/developers/api/public/v1/peers/retrieve-a-peer',
            '/developers/api/public/v1/peers/retrieve-the-core-version',
        ]
    }, {
        title: 'Signatures',
        children: [
            '/developers/api/public/v1/signatures/retrieve-the-signature-registration-fee'
        ]
    }, {
        title: 'Transactions',
        children: [
            '/developers/api/public/v1/transactions/create-transactions',
            '/developers/api/public/v1/transactions/list-all-transactions',
            '/developers/api/public/v1/transactions/retrieve-a-transaction',
            '/developers/api/public/v1/transactions/list-all-unconfirmed-transactions',
            '/developers/api/public/v1/transactions/retrieve-an-unconfirmed-transaction',
        ]
    }
]

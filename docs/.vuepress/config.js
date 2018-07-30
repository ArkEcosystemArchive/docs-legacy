module.exports = {
    title: 'Ark Ecosystem',
    description: 'All-in-One Blockchain Solutions. Point. Click. Blockchain.',
    head: [
        ['link', {
            rel: 'icon',
            href: 'https://ark.io/images/media-kit/red-corners.png'
        }]
    ],
    themeConfig: {
        logo: 'https://ark.io/images/media-kit/red-no-text.png',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
        lastUpdated: true,
        repo: 'ArkEcosystem/docs',
        nav: [{
            text: 'Home',
            link: '/'
        }, {
            text: 'P2P API',
            link: '/developers/api/p2p/'
        }, {
            text: 'Public API 1.0',
            link: '/developers/api/public/v1/'
        }, {
            text: 'Public API 2.0',
            link: '/developers/api/public/v2/'
        }],
        sidebar: {
            '/developers/api/public/v1/': require('./sidebars/developers/api/public/v1.js'),
            '/developers/api/public/v2/': require('./sidebars/developers/api/public/v2.js'),
            '/developers/api/json-rpc/': require('./sidebars/developers/api/json-rpc.js'),
            '/developers/api/webhooks/': require('./sidebars/developers/api/webhooks.js'),
            '/developers/api/p2p/': require('./sidebars/developers/api/p2p.js'),
            '/developers/': require('./sidebars/developers'),
            '/': require('./sidebars/main.js'),
        }
    }
}

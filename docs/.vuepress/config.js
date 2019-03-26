const config = {
  title: "Ark Ecosystem Documentation",
  description: "The central knowledge hub for all things Ark Ecosystem",
  plugins: ['tabs'],
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://ark.io/images/media-kit/red-corners.png"
      }
    ]
  ],
  themeConfig: {
    logo: "https://ark.io/images/media-kit/red-corners.png",
    repo: "ArkEcosystem/docs",
    repoLabel: "Contribute!",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    docsDir: "docs",
    lastUpdated: true,
    activeHeaderLinks: true,
    nav: [{
      text: 'Home',
      link: '/'
    }, {
      text: 'Exchanges',
      link: '/exchanges/'
    }, {
      text: 'Public API',
      link: '/api/public/v2/'
    }, {
      text: 'SDK Overview',
      link: '/SDK/'
    }],
    sidebar: {
      "/api/json-rpc/": require("./sidebars/api/json-rpc"),
      "/api/public/": require("./sidebars/api/public"),
      "/api/": require("./sidebars/api"),
      "/sdk/": require("./sidebars/sdk"),
      "/faq/": require("./sidebars/faq"),
      "/introduction/": require("./sidebars/introduction"),
      "/tutorials/": require('./sidebars/tutorials'),
      "/iot/": require('./sidebars/iot'),
      "/guidebook/": require('./sidebars/guidebook'),
      "/exchanges/": require('./sidebars/exchanges'),
      "/releases/": require('./sidebars/releases'),
      "/security/": require('./sidebars/security'),
      "/archive/": require('./sidebars/archive'),
      "/": require('./sidebars/main'),
    },
    //algolia: {
    //  apiKey: '93e1d829aa41bf2114b9de44dadb4998',
    //  indexName: 'ark'
    //}
  }
};

module.exports = config

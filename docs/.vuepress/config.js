//const buildSection = require('./utils/buildSidebar')

const path = require("path");
const fs = require("fs");
const DOCSPATH = "docs";


module.exports = {
  title: "Ark Ecosystem Documentation",
  description: "The central knowledge hub for all things Ark Ecosystem",
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
    logo: "https://ark.io/images/media-kit/red-no-text.png",
    repo: "ArkEcosystem/docs",
    repoLabel: "Contribute!",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    docsDir: "docs",
    lastUpdated: true,
    sidebar: {
      "/": require('./sidebars/main'),
      "/cookbook/": require('./sidebars/cookbook')
    },
  }
};

function buildSidebars() {
  /* 
  1. fetch top-level directory contents
  2. make home routes array with links to second-level directories (topics)
  3. use each topic name to build their own navigation

  */
  let sidebars = {};

  const topics = fs
    .readdirSync(path.resolve(DOCSPATH))
    .filter(
      topic =>
        fs.lstatSync(DOCSPATH + "/" + topic).isDirectory() && // 
        topic != ".vuepress"
    );

  sidebars["/"] = buildTableOfContents(topics);

  topics.forEach(topic => {
    sidebars["/" + topic + "/"] = buildTopicSidebar(topic);
  });

  return sidebars;
  /*
  returns object of this format: 

  { 
    '/': RoutesArray,
    '/api/': ApiRoutesArray
    ...
  }
  */
}

function buildTableOfContents(topics) {
  return [
    "/",
    {
      title: "Table of Contents",
      children: topics.map(topic => "/" + topic + "/")
    }
  ];
}

function buildTopicSidebar(topic) {

  const filepath = DOCSPATH + '/' + topic;

  //topics = ls.readdirSync(filepath).filter
  /**
   * start with the topic directory and fetch all assets
   * 
   * case:
   *   directory and not assets: buildSidebar()
   *   file and not README: add to children
   */
}

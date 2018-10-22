# Writing Documentation for Ark
![ark-docs-banner](https://i.imgur.com/iaEwBqC.png)

**On this page you will find all the details necessary to writing compliant documentation for Ark.**
## Terminology
There are many terms commonly used when describing aspects of Ark and related technologies. In an effort to standardize how documentation is presented to the user and to remove differences across different texts, we have established the following rules for using Ark terminology.

### Commonly used Ark concepts and project names
Firstly, the term "Ark" refers to an entire umbrella of concepts and is mainly used as a prefix to describe projects it maintains or supports.

For example, the most basic form of this is writing "Ark Ecosystem", this can be used interchangeably with "Ark".

 > Writing documentation for Ark

 > Writing documentation for the Ark Ecosystem

Both are acceptable.

Here is a list of officially recognized terms and the proper way to use each of them:
 - CONCEPTS
   - **Ark Ecosystem**:  *"Writing documentation for the Ark Ecosystem"*
   - **Ark Community**: *"Ark Community members offer advice on the Slack channel"*
   - **Ark Team**: *"Being a member of the Ark Team"*
   - **BridgeChain**: *"I launched a cool BridgeChain with Ark Deployer on Azure"*
   - **SmartBridge**: *"It is time to read data from the SmartBridge field of the freshly gathered transaction"*
 - PROJECTS
   - **Ark Core**: *"Ark Core is dubbed v2"*
   - **Ark Node**: *"The Ark blockchain software Ark Node is being deprecated"*
   - **Ark Explorer**: *"View your Ark address' transaction history with help of the Ark Explorer
   - **Ark Mobile**: *"Ark Mobile is available for both Android and iOS"*
   - **Ark Desktop**: *"Use the Ark Desktop client if on Windows, MacOS or Linux"*
   - **AIPs, Ark Improvement Proposals**: *"I'm rolling in all those AIPs (Ark Improvement Proposals)"*
   - **Ark (LANG) Client**: *"I'm using Ark PHP Client my API client"*
   - **Ark (LANG) Crypto**: *"Please contribute to Ark PHP Crypto"*
   - **Ark Deployer**: *"You can use Ark Deployer to launch your own BrideChain"*

The specific terms above MUST be capitalized to prevent reader confusion.

For certain cases (docs, website, forum), it is acceptable to use the actual URL subdomain.domain.tld format if it's intuitive:

 - *"Find all relevant information on the [docs.ark.io](https://docs.ark.io)"*
 - *"Blog, Forums, Roadmap and more can be found at the [ark.io](https://ark.io) website"*
 - *"I love the community over at the [forum.ark.io](https://forum.ark.io)"*

:::danger
When talking about Ark's native currency, you MUST refer to it as ARK - it is commonly used as the currency ticker on exchanges and within Ark Ecosystem projects like Ark Desktop and Ark Explorer. The currency symbol for ARK is "Ѧ". It can be represented with the decimal Unicode 1126 or "\&#1126;" in HTML et al.
:::
Generic terms like "address", "wallet", "transaction", "delegate", "vote", "blockchain", "currency" SHOULD NOT be capitalized, alongside the three above terms which mainly refer to concepts and not necessarily rigid implementations.

The scopes of each category might change to include or exclude new or old concepts at any given time, given the constantly evolving Ark (Ecosystem) landscape.

### Commonly used technological concepts and project names
Although it would be ideal, not all documents can afford to only mention Ark's projects and concepts.

We encourage you to always follow other projects' standards for writing about them when you mention them in a document:

 > The Ark blockchain was created later than the Bitcoin blockchain

In addition, please refrain from capitalizing terms like "blockchain", as it would imply some type of unencouraged buzz-wordedness.

## Linking
An important part of documenting for the open source Ark Ecosystem is to offer the reader an unintrusive option to go to another branch of resources to conduct learning without breaking the underlying reading experience.

### Commonly used technological concepts and project names 
It is therefore acceptable to link once to Ark Ecosystem or other technological  projects mentionned in the document you write, unless mentionned in succession within a list. Linking the first occurrence of a technological project mention is good practice.

Additionally, you are REQUIRED to use a reference component at the end of your written document. This helps streamline the user's experience when wanting to read resources on aforementionned projects without having to scroll back through the document.

### URLs
To provide an easy to access and clean reference to a website, especially when dealing with websites external to the Ark Ecosystem, the writer MUST inlude a link to the URL with an appropriate name rather than the plain, unclickable, URL.
:::danger
answers can be searched for on https://google.com
:::
:::tip
answers can be search for on [google](https://google.com)
:::

## Images
As an important part of online documentation, images must be used with respect to licensing rights and other ethical considerations.

To unify the look and feel of the documentation, images or other branded content available and relevant to your document SHOULD be included.

If writing a document for an Ark project, like Ark Mobile, you MUST use the official banner image for it (located on GitHub) at the start of the document.

When needing to use official Ark imagery, you may find suitable media assets at [ark.io/mediakit](https://ark.io/mediakit). Otherwise, you are encouraged to design your own images, use external images with proper attribution in the references component or outsource the graphical design task to someone else.

## References
Here you can find an example reference component, temporary until a [vuepress](https://vuepress.vuejs.org) component.

Please use this template for every document which has any reference at all:

> - **Ark Core**: [https://github.com/arkecosystem/core](https://github.com/arkecosystem/core)
> - **Ark Node**: [https://github.com/arkecosystem/ark-node](https://github.com/arkecosystem/ark-node)
> - **Ark Explorer**: [https://github.com/arkecosystem/explorer](https://github.com/arkecosystem/explorer)
> - **Ark Mobile**: [https://github.com/arkecosystem/mobile-wallet](https://github.com/arkecosystem/mobile-wallet)
> - **Ark Desktop**: [https://github.com/arkecosystem/desktop-wallet](https://github.com/arkecosystem/desktop-wallet)
> - **AIPs, Ark Improvement Proposals**: [https://github.com/arkecosystem/aips](https://github.com/arkecosystem/aips)
> - **Ark (LANG) Client**: [https://github.com/arkecosystem/php-client](https://github.com/arkecosystem/php-client) There are many implementations, all named with the same convention. Replace the programming language for a different implementation
> - **Ark (LANG) Crypto**: [https://github.com/arkecosystem/php-crypto](https://github.com/arkecosystem/php-crypto) Same as clients, every client implementation has a related crypto implementation
> - **Ark Deployer**: [https://github.com/arkecosystem/ark-deployer](https://github.com/arkecosystem/deployer)
> - **Ark website**: [https://ark.io](https://ark.io)
> - **Ark documentation**: [https://docs.ark.io](https://docs.ark.io)
> - **Ark forum**: [https://forum.ark.io](https://forum.ark.io)
> - **Ark mediakit**: [https://ark.io/mediakit](https://ark.io/mediakit)
> - **Ark blog**: [https://blog.ark.io](https://blog.ark.io)



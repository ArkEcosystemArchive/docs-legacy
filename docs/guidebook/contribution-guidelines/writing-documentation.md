# Writing Documentation for Ark

On this page, you will find all the details necessary for writing compliant documentation for Ark.

![ark-docs-banner](https://github.com/ArkEcosystem/docs/blob/master/banner.png?raw=true)

[[toc]]

## Style Guide

As Ark originates from an online community, different writing styles have been used in official and community writings. It is important to have a uniform style across our documentation to avoid misunderstandings and provide consistency to developers.

### Language

Ark's official language is American English, which is used in nearly all writings. This conforms to most technical documentation and writings, as often programming languages adhere to American English as well.

### Keep in Mind

Use a clear, semi-formal tone in writing. There is no need to go as far as academic writing, but keep the following in  mind:

- Long sentences without an objective are confusing. There is no need to use extra adjectives to increase sentence length or illustrate a concept. Remember that just as with code; documentation comes with a burden of maintenance.
- Reuse definitions. In fintech and blockchain, we often use words such as *blocks*, *transactions*, *crypto*. While writing documentation, the use of these definitions might seem repetitive; however, these are familiar concepts and leave little room for interpretation to the reader.
- Grammar is important. It reflects the professionalism of the entire project.
- Code examples should be correct. If you provide a code snippet, showing how to use a function, ensure that the reader knows what has been omitted. Start a tutorial with the setup code, imports, and installations before the main body. Ensure the code uses correct namespaces. When documenting a library, use the library as if you were an end-user:

Do not use the following:

```go
client := New()
```

But instead:

```go
package main

import "my/lib/name"

func main() {
  client := name.New()
}
```

In following snippets, the package and import declarations may be omitted. Avoid using `...` to indicate an omitted fragment; it should be apparent to the reader without such indicators.

- Use proper punctuation, in tables, captions, and citations. Titles should use [title casing](https://grammar.yourdictionary.com/capitalization/rules-for-capitalization-in-titles.html).
- Avoid using abbreviations.
  
Although it is sometimes better not to document something than to poorly document it, do not let the guidelines intimidate you. These rules are advisory.

## Terminology

There are many terms commonly used when describing aspects of Ark and related technologies. To standardize how documentation is presented to the user and to remove differences across different texts, we have established the following rules for using Ark terminology.

### Commonly used Technological Concepts and Project Names

Firstly, the term "Ark" refers to an entire umbrella of concepts and is mainly used as a prefix to describe projects it maintains or supports.

For example, the most basic form of this is writing "Ark Ecosystem"; this can be used interchangeably with "Ark".

 > Writing documentation for Ark

 > Writing documentation for the Ark Ecosystem

Both are acceptable.

Here is a list of officially recognized terms and the proper way to use each of them:

 - CONCEPTS
   - **Ark Ecosystem**:  *"Writing documentation for the Ark Ecosystem"*
   - **Ark Community**: *"Ark Community members offer advice on the Slack channel"*
   - **Ark Team**: *"Being a member of the Ark Team"*
   - **BridgeChain**: *"I launched a cool BridgeChain with Ark Deployer on Azure"*
   - **SmartBridge**: *"It's time to read data from the SmartBridge field of the freshly gathered transaction"*
 - PROJECTS
   - **Ark Core**: *"Ark Core is dubbed v2"*
   - **Ark Node**: *"The Ark blockchain software Ark Node is being deprecated"*
   - **Ark Explorer**: *"View your Ark address' transaction history with the help of the Ark Explorer"*
   - **Ark Mobile Wallet**: *"Ark Mobile is available for both Android and iOS"*
   - **Ark Desktop Wallet**: *"Use the Ark Desktop client if using Windows, MacOS or Linux"*
   - **AIPs, Ark Improvement Proposals**: *"I'm rolling in all these AIPs (Ark Improvement Proposals)"*
   - **Ark (LANG) Crypto**: *"The Ark JS Crypto documentation needs some love!"*
   - **Ark (LANG) Client**: *"I'm using the Ark PHP Client as my API client"*
   - **Ark Deployer**: *"You can use Ark Deployer to launch your BrideChain"*

The specific terms above SHOULD be capitalized to prevent reader confusion.

For certain cases (docs, website, forum), it is acceptable to use the actual URL subdomain.domain.tld format if it's intuitive:

 - *"Find all relevant information on the [docs.ark.io](https://docs.ark.io)"*
 - *"Blog, Forums, Roadmap and more can be found at the [ark.io](https://ark.io) website"*
 - *"I love the community over at the [forum.ark.io](https://forum.ark.io)"*

:::danger
When talking about Ark's native currency, you MUST refer to it as ARK - it is commonly used as the currency ticker on exchanges and within Ark Ecosystem projects like the Ark Desktop Wallet and Ark Explorer. The currency symbol for ARK is "Ѧ". It can be represented with the decimal Unicode 1126 or "\&#1126;" in HTML.
:::
Generic terms like "address", "wallet", "transaction", "delegate", "vote", "blockchain", "currency" SHOULD NOT be capitalized, alongside the three above terms which mainly refer to concepts and not necessarily rigid implementations.

The scopes of each category might change to include or exclude new or old concepts at any given time, due to the continually evolving Ark (Ecosystem) landscape.

Although it would be ideal, not all documents can afford to only mention Ark's projects and concepts.

We encourage you always to follow other projects' standards for writing about them when you mention them in a document:

 > The Ark blockchain was created later than the Bitcoin blockchain

In addition, please refrain from capitalizing terms like "blockchain", as it would imply some unencouraged buzz-wordiness.

## Linking

An essential part of documenting for the open source Ark Ecosystem is to offer the reader an unintrusive option to go to another branch of resources and learn without breaking the underlying reading experience.

It is acceptable to link once to Ark Ecosystem or other technological projects mentioned in the document you write unless mentioned in succession within a list. Linking the first occurrence of a technical project mention is good practice.

Additionally, you are encouraged to provide a list of references at the end of your written document. This helps streamline the user's experience when wanting to read resources on the aforementioned projects without having to scroll back through the material.

### URLs

To provide an easy to access and clean reference to a website, especially when dealing with websites external to the Ark Ecosystem, the writer MUST include a link to the URL with an appropriate name rather than the plain, unclickable, URL.
:::danger
answers can be searched for on https://google.com
:::
:::tip
answers can be searched for on [Google](https://google.com)
answers can be searched for on [google.com](https://google.com)
:::

## Images

As an essential part of online documentation, images must be used with respect to licensing rights and other ethical considerations.

To unify the look and feel of the documentation, images or other branded content available and relevant to your document SHOULD be included.

If writing a document for an Ark project, like the Ark Mobile Wallet, you MUST use the official banner image for it (located on GitHub) at the start of the document.

When needing to use official Ark imagery, you may find suitable media assets at [ark.io/mediakit](https://ark.io/mediakit). Otherwise, you are encouraged to design your images, use external images with proper attribution in as references or outsource the graphical design task to someone else.

## References

Here you can find an example list of references.

Please use this template for every document which has any reference at all:

> - **Ark Core**: [https://github.com/arkecosystem/core](https://github.com/arkecosystem/core)
> - **Ark Node**: [https://github.com/arkecosystem/ark-node](https://github.com/arkecosystem/ark-node)
> - **Ark Explorer**: [https://github.com/arkecosystem/explorer](https://github.com/arkecosystem/explorer)
> - **Ark Mobile Wallet**: [https://github.com/arkecosystem/mobile-wallet](https://github.com/arkecosystem/mobile-wallet)
> - **Ark Desktop Wallet**: [https://github.com/arkecosystem/desktop-wallet](https://github.com/arkecosystem/desktop-wallet)
> - **AIPs, Ark Improvement Proposals**: [https://github.com/arkecosystem/aips](https://github.com/arkecosystem/aips)
> - **Ark (LANG) Client**: [https://github.com/arkecosystem/php-client](https://github.com/arkecosystem/php-client) There are many implementations, all named with the same convention. Replace the programming language for a different implementation
> - **Ark (LANG) Crypto**: [https://github.com/arkecosystem/php-crypto](https://github.com/arkecosystem/php-crypto) Same as clients, every client implementation has a related crypto implementation
> - **Ark Deployer**: [https://github.com/arkecosystem/ark-deployer](https://github.com/arkecosystem/deployer)
> - **Ark website**: [https://ark.io](https://ark.io)
> - **Ark documentation**: [https://docs.ark.io](https://docs.ark.io)
> - **Ark forum**: [https://forum.ark.io](https://forum.ark.io)
> - **Ark mediakit**: [https://ark.io/mediakit](https://ark.io/mediakit)
> - **Ark blog**: [https://blog.ark.io](https://blog.ark.io)

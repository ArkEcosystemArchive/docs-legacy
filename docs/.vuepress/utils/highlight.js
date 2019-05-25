const prism = require('prismjs')
const escapeHtml = require('escape-html')

require(`prismjs/components/prism-bash`)

function wrap (code, lang) {
  if (lang === 'text') {
    code = escapeHtml(code)
  }

  return `<pre v-pre class="language-${lang}"><code>${code}</code></pre>`
}

module.exports = (str, lang) => {
  if (!lang) {
    return wrap(str, 'text')
  }

  lang = lang.toLowerCase()

  const rawLang = lang

  if (lang === 'vue' || lang === 'html') {
    lang = 'markup'
  }

  if (lang === 'md') {
    lang = 'markdown'
  }

  if (lang === 'ts') {
    lang = 'typescript'
  }

  if (lang === 'py') {
    lang = 'python'
  }

  if (lang === 'sh') {
    lang = 'bash'
  }

  if (!prism.languages[lang]) {
    require(`prismjs/components/prism-${lang}`)
  }

  if (prism.languages[lang]) {
    const code = prism.highlight(str, prism.languages[lang], lang)

    return wrap(code, rawLang)
  }

  return wrap(str, 'text')
}

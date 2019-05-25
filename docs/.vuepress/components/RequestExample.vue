<template>
  <div>
    <div ref="request">
      <slot />
    </div>

    <button
      class="action-button"
      @click="sendRequest"
    >
      Execute
    </button>

    <div ref="response" />
  </div>
</template>

<script type="text/javascript">
import nprogress from 'nprogress'
import swal from 'sweetalert'

import curl from '../utils/curl'
import request from '../utils/request'

export default {
  name: 'RequestExample',
  data () {
    return {
      loading: false
    }
  },
  mounted () {
    nprogress.configure({
      showSpinner: false
    })
  },
  methods: {
    sendRequest () {
      const cmd = this.$refs.request.outerText.trim()

      if (this.loading) {
        return
      }

      const options = curl(cmd)

      if (!options) {
        this.showError('The supplied command is invalid. Please check it and try again.')

        return
      }

      this.openLoading()

      request(options)
        .then(data => {
          this.closeLoading()

          this.renderResponse(data)
        })
        .catch(err => {
          this.closeLoading()

          this.showError(`${err.status} ${err.message}`)
        })
    },
    renderResponse (data) {
      const highlight = require('../utils/highlight')
      const markdown = require('markdown-it')().set({ highlight })

      let content = '```json\n'
      content += JSON.stringify(data, null, 4)
      content += '\n```'

      this.$refs.response.innerHTML = markdown.render('## Example Response')
      this.$refs.response.innerHTML += markdown.render(content)
    },
    openLoading () {
      this.loading = true

      nprogress.start()
    },
    closeLoading () {
      this.loading = false

      nprogress.done()
    },
    showError (text) {
      swal({
        title: 'Yikes!',
        text,
        icon: 'error',
        dangerMode: true
      })
    }
  }
}
</script>

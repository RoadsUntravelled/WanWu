import Vue from 'vue'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

const options = {
  release: process.env.VERSION,
  ignoreUrls: [
    // Chrome extensions
    /extensions\//i,
    /^chrome:\/\//i,
    // Firefox extensions
    /^resource:\/\//i,
    // Ignore Google flakiness
    /\/(gtm|ga|analytics)\.js/i
  ]
}

Raven
  .config('https://1ad000d99cfb4a7b981ae8938e76b4c1@sentry.io/1327477', options)
  .addPlugin(RavenVue, Vue)
  .install()

Raven.setUserContext({
  version: process.env.VERSION,
  location: window.location
})
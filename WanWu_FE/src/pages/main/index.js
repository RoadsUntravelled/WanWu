// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome-webpack'

import ElementUI from 'element-ui'
import '../../element-#EEECE0/index.css'
// import 'element-ui/lib/theme-chalk/index.css'

import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(ElementUI)
Vue.use(iView)
Vue.config.productionTip = false

Vue.prototype.$Message.config({
  duration: 2
})
Vue.prototype.$error = (msg) => Vue.prototype.$Message.error(msg)
Vue.prototype.$info = (msg) => Vue.prototype.$Message.info(msg)
Vue.prototype.$success = (msg) => Vue.prototype.$Message.success(msg)
/* eslint-disable */
// eslint-disable-next-line
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})

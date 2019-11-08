import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'
import 'bootstrap'

/** Stylesheet */
import './assets/scss/custom.scss'

global.jQuery = global.$ = jQuery

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

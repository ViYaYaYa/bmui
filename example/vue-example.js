import 'src/bmui.styl'
import 'babel-polyfill'
import Vue from 'vue'
import App from './vue-example.vue'
import Bmui from 'src/vue'

Vue.use(Bmui)

// eslint-disable-next-line
new Vue({
  el: '#app',
  render: function (h) {
    return h(App)
  }
})

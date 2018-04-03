// Vue
import Vue from 'vue'
// 组件库
import Bmui from 'src/vue'
// 页面模型
import App from './index.vue'
// 加载插件
Vue.use(Bmui)

// eslint-disable-next-line
new Vue({
  el: '#app',
  render: function (h) {
    return h(App)
  }
})

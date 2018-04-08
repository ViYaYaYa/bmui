// Vue
import Vue from 'vue'
// 页面模型
import App from './index.vue'
// 路由库
import VueRouter from 'vue-router'
// 组件库
import Bmui from 'src/vue'
// 加载插件
Vue.use(VueRouter)
Vue.use(Bmui)

// eslint-disable-next-line
new Vue({
  el: '#app',
  render: function (h) {
    return h(App)
  }
})

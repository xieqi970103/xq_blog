/*
 * @Description:
 * @Author: xxqq
 * @Date: 2021-10-17 23:24:22
 * @LastEditTime: 2021-10-18 22:51:04
 * @LastEditors: xxqq
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue/es'
import 'ant-design-vue/dist/antd.css'
import './views/styles/main.less'

Vue.config.productionTip = false
Vue.use(Antd)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

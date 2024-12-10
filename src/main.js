import Vue from 'vue'
import Antd from 'ant-design-vue'

import App from './App.vue'

import store from '@/store'

import './permission'
import '@/styles/tailwindcss.'
import 'vxe-pc-ui/lib/style.css'
import 'vxe-table/lib/style.css'
import '@/styles/custom-vxe.scss'
import '@/styles/custom-antd.less'
import 'vue-super-flow/lib/index.css'
import router from './router'
import SuperFlow from 'vue-super-flow'
import VxeUI from 'vxe-pc-ui'
import VxeUITable from 'vxe-table'

Vue.use(VxeUI)
Vue.use(VxeUITable)
Vue.use(Antd)

Vue.use(SuperFlow)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

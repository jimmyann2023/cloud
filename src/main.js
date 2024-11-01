import Vue from 'vue'

import App from './App.vue'

import 'vxe-pc-ui/lib/style.css'
import 'vxe-table/lib/style.css'
import './styles/custom-vxe.scss'
import router from './router'
import store from './store'
import VxeUI from 'vxe-pc-ui'
import VxeUITable from 'vxe-table'

Vue.use(VxeUI)
Vue.use(VxeUITable)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

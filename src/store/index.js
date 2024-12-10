import Vue from 'vue'

import getters from './getters'
// 默认路由模式为静态路由 (router.config.js)
import permission from './modules/static-router'
import user from './modules/user'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    permission
  },
  state: {},
  mutations: {},
  actions: {},
  getters
})

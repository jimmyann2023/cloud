import Vue from 'vue'
import Router from 'vue-router'

import { constantRouterMap } from './modules'
// import HomeView from '@/views/HomeView.vue'

// hack router push callback
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch((err) => err)
}

Vue.use(Router)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   },
//   {
//     path: '/table',
//     name: 'table',
//     component: () => import(/* webpackChunkName: "about" */ '../views/TableView.vue')
//   },
//   {
//     path: '/flow',
//     name: 'flow',
//     component: () => import(/* webpackChunkName: "about" */ '../components/LineFlow/index.vue')
//   }
// ]

const createRouter = () =>
  new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: constantRouterMap
  })

const router = createRouter()

// 定义一个resetRouter 方法，在退出登录后或token过期后 需要重新登录时，调用即可
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router

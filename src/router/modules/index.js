import { BasicLayout, PageView, UserLayout } from '@/layouts'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: '/dashboard/workplace',
    children: [
      // dashboard
      {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/workplace',
        component: RouteView,
        meta: { title: 'menu.dashboard', keepAlive: true, permission: ['dashboard'] },
        children: [
          {
            path: '/dashboard/analysis/:pageNo([1-9]\\d*)?',
            name: 'Analysis',
            component: () => import('@/views/dashboard/Analysis'),
            meta: { title: 'menu.dashboard.analysis', keepAlive: false, permission: ['dashboard'] }
          },
          // 外部链接
          // {
          //   path: 'https://www.baidu.com/',
          //   name: 'Monitor',
          //   meta: { title: 'menu.dashboard.monitor', target: '_blank' }
          // },
          {
            path: '/dashboard/workplace',
            name: 'Workplace',
            component: () => import('@/views/dashboard/Workplace'),
            meta: { title: 'menu.dashboard.workplace', keepAlive: true, permission: ['dashboard'] }
          }
        ]
      },

      // other
      {
        path: '/other',
        name: 'otherPage',
        component: PageView,
        meta: { title: '其他组件', icon: 'slack', permission: ['dashboard'] },
        redirect: '/other/table',
        children: [
          {
            path: '/other/table',
            name: 'table',
            component: () => import('@/views/TableView.vue'),
            meta: { title: '其他组件', icon: 'slack' }
          },
          {
            path: '/other/flow',
            name: 'flow',
            component: () => import('@/components/LineFlow/index.vue')
          }
          // {
          //   path: '/other/icon-selector',
          //   name: 'TestIconSelect',
          //   component: () => import('@/views/other/IconSelectorView'),
          //   meta: {
          //     title: 'IconSelector',
          //     icon: 'tool',
          //     keepAlive: true,
          //     permission: ['dashboard']
          //   }
          // }
          // {
          //   path: '/other/list',
          //   component: RouteView,
          //   meta: { title: '业务布局', icon: 'layout', permission: [ 'support' ] },
          //   redirect: '/other/list/tree-list',
          //   children: [
          //     {
          //       path: '/other/list/tree-list',
          //       name: 'TreeList',
          //       component: () => import('@/views/other/TreeList'),
          //       meta: { title: '树目录表格', keepAlive: true }
          //     },
          //     {
          //       path: '/other/list/edit-table',
          //       name: 'EditList',
          //       component: () => import('@/views/other/TableInnerEditList'),
          //       meta: { title: '内联编辑表格', keepAlive: true }
          //     },
          //     {
          //       path: '/other/list/user-list',
          //       name: 'UserList',
          //       component: () => import('@/views/other/UserList'),
          //       meta: { title: '用户列表', keepAlive: true }
          //     },
          //     {
          //       path: '/other/list/role-list',
          //       name: 'RoleList',
          //       component: () => import('@/views/other/RoleList'),
          //       meta: { title: '角色列表', keepAlive: true }
          //     },
          //     {
          //       path: '/other/list/system-role',
          //       name: 'SystemRole',
          //       component: () => import('@/views/role/RoleList'),
          //       meta: { title: '角色列表2', keepAlive: true }
          //     },
          //     {
          //       path: '/other/list/permission-list',
          //       name: 'PermissionList',
          //       component: () => import('@/views/other/PermissionList'),
          //       meta: { title: '权限列表', keepAlive: true }
          //     }
          //   ]
          // }
        ]
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }
]

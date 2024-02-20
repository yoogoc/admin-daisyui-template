import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { Layout } from './constant'

// * 导入所有router
const metaRouters: Record<string, any> = import.meta.glob('./modules/*.ts', { eager: true })

// * 处理路由
export const routerArray: RouteRecordRaw[] = []
Object.keys(metaRouters).forEach(item => {
  Object.keys(metaRouters[item]).forEach((key: any) => {
    routerArray.push(...metaRouters[item][key])
  })
})

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: Layout,
    meta: {
      title: '首页',
      isHidden: true,
      sort: -1,
      key: 'home',
      requiresAuth: false,
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/index/index.vue'),
        meta: {
          keepAlive: true,
          requiresAuth: false,
          title: '首页',
          key: 'home',
          icon: 'fa-solid fa-house',
          // isHidden: true,
        },
      },
    ],
  },
  {
    path: '/403',
    component: () => import('@/components/Error/403.vue'),
    meta: {
      requiresAuth: false,
      title: '403',
      isHidden: true,
    },
  },
  {
    path: '/500',
    component: () => import('@/components/Error/500.vue'),
    meta: {
      requiresAuth: false,
      title: '500',
      isHidden: true,
    },
  },
  {
    path: '/404',
    component: () => import('@/components/Error/404.vue'),
    meta: {
      requiresAuth: false,
      title: '404',
      isHidden: true,
    },
  },
  ...routerArray,
  {
    // 找不到路由重定向到404页面
    path: '/:pathMatch(.*)',
    redirect: '/404',
    meta: {
      isHidden: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: false,
  // 切换页面，滚动到最顶部
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router

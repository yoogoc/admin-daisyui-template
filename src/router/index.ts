// import { AxiosCanceler } from '@/api/helper/axiosCancel'
import NProgress from '@/config/nprogress'
import router from '@/router/router'
// import { useUserStore } from '@/store'
import type { MenuOptions } from '@/types'
import { App } from 'vue'

// const axiosCanceler = new AxiosCanceler()

/**
 * 使用递归处理路由菜单
 * @param newArr 所有菜单数组
 */
export function handleRouter(routerList: MenuOptions[], newArr: string[] = []) {
  routerList.forEach((item: MenuOptions) => {
    typeof item === 'object' && item.path && newArr.push(item.path)
    item.children && item.children.length !== 0 && handleRouter(item.children, newArr)
  })
  return newArr
}

// * 路由拦截
router.beforeEach((to, from, next) => {
  NProgress.start()
  const appTitle = process.env.FARM_TITLE as string
  const reg = new RegExp(/^(.+)(\s\|\s.+)$/)
  document.title = !to.meta.title
    ? appTitle
    : appTitle.match(reg)
      ? appTitle.replace(reg, `${to.meta.title}$2`)
      : `${to.meta.title} | ${appTitle}`
  // * 在跳转路由之前，清除所有的请求
  // axiosCanceler.removeAllPending()

  // * 判断当前路由是否需要访问权限
  if (!to.matched.some(record => record.meta.requiresAuth)) return next()

  // * 判断是否有Token
  // const userStore = useUserStore()
  // if (!userStore.token) {
  //   next({
  //     path: '/login',
  //   })
  //   NProgress.done()
  //   return
  // }

  // if (to.meta.requiresAuth && userStore.userInfo.menus.indexOf(to.meta.key as string) === -1) {
  //   next({
  //     path: '/403',
  //   })
  // } else {
  //   next()
  // }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export async function setupRouter(app: App) {
  app.use(router)
  // 创建路由守卫
  // 路由准备就绪后挂载APP实例
  await router.isReady()
}

export default router

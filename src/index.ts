import { createApp } from 'vue'
import App from './App.vue'
import { setupAssets, setupCustomComponents, setupDirectives, setupGlobalMethods, setupIcons } from './plugins'
import { setupRouter } from './router'
import { setupStore } from './store'

const bootstrap = async() => {
  // 设置样式加载
  setupAssets()
  // 创建vue
  const app = createApp(App)
  // 全局加载

  // 注册全局常用的 组件
  setupCustomComponents(app)

  // 注册全局方法
  setupGlobalMethods(app)

  // 注册全局自定义指令
  setupDirectives(app)

  // 注册icon
  setupIcons(app)

  // 挂载状态管理
  await setupStore(app)

  // 挂载路由
  await setupRouter(app)

  app.mount('#app')
}

bootstrap()

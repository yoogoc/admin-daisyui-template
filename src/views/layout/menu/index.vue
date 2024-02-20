<template>
  <div class="h-full" :class="{'w-56': !isCollapse, 'w-16': isCollapse}">
    <ul class="menu h-full mt-3">
      <sub-item :menu-list="filterMenubarData" :active="activeMenu" :collapse="isCollapse" />
    </ul>
  </div>
</template>

<script setup lang="ts">
// import { useUserStore } from '@/store'
import { useMenuStore } from '@/store';
import { Ref, computed, onMounted, ref } from 'vue';
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router';
import SubItem from './components/subItem.vue';

const route = useRoute()
const menuStore = useMenuStore()
const router = useRouter()
const filterMenubarData: Ref<RouteRecordRaw[]> = ref([])

const filterMenubar = (menuList: RouteRecordRaw[]) => {
  const f = (menuList: RouteRecordRaw[], isChildren: boolean) => {
    let arr: RouteRecordRaw[] = []
    const ff = (v: RouteRecordRaw) => {
      // return !v.meta?.hidden && (!v.meta?.key || !(!!v.meta?.requiresAuth && userStore.userInfo.menus.indexOf(v.meta?.key as string) === -1))
      return true
    }
    menuList.sort((a, b) => {
      if (a.meta?.sort === undefined || b.meta?.sort === undefined) {
        return 0
      }
      return (a.meta?.sort as number) - (b.meta?.sort as number)
    }).forEach(v => {
      if (isChildren ? !ff(v) : v.meta?.hidden) return
      let child = v.children && v.children.filter(ff)
      let currentItem = v

      if (!v.meta?.alwaysShow && child && child.length === 1) {
        [currentItem] = child
      }
      if (!v.meta?.alwaysShow && child?.length === 0) {
        return
      }

      arr.push(currentItem)
      if (currentItem.children && currentItem.children.length > 0) {
        arr[arr.length - 1].children = f(currentItem.children, true)
      }
    })
    return arr
  }
  return f(menuList, false)
}

onMounted(async () => {
  filterMenubarData.value = filterMenubar(router.options.routes as RouteRecordRaw[])
  console.log(router.options.routes)
  console.log(filterMenubarData.value)
})

const activeMenu = computed(() => {
  if (route.meta.activeMenu) return route.meta.activeMenu as string
  return route.path
})
const isCollapse = computed((): boolean => menuStore.isCollapse)

const screenWidth = ref<number>(0)
const screenHeight = ref<number>(0)
// 监听窗口大小
const listeningWindow = () => {
  window.onresize = () => {
    return (() => {
      screenWidth.value = document.body.clientWidth
      screenHeight.value = document.body.clientHeight
      if (isCollapse.value === false && screenWidth.value < 1200) menuStore.setCollapse()
      if (isCollapse.value === true && screenWidth.value > 1200) menuStore.setCollapse()
    })()
  }
}
listeningWindow()
</script>

<style scoped>
.bg-menu {
  overflow: auto;
  overflow-x: hidden;
}

:deep(.el-scrollbar__view) {
  height: 100vh
}

.el-menu {
  border-right: initial
}
</style>

import { MenuOptions } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Ref } from 'vue'

// MenuStore
export const useMenuStore = defineStore('useMenuStore', ()=> {
  const isCollapse = ref(false)
  const menuList: Ref<MenuOptions[]> = ref([])
  const setCollapse = ()=> {
    isCollapse.value = !isCollapse.value
  }
  const setMenuList = (menus: MenuOptions[]) => {
    menuList.value = menus
  }
  return {isCollapse, menuList, setCollapse, setMenuList}
}, {
  persist: true
})

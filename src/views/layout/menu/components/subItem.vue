<template>
  <template v-for="subItem in menuList.filter(m => !m.meta?.isHidden)" :key="subItem.path">
    <li v-if="subItem.children && subItem.children.length > 0">
      <details open>
        <summary>
          <font-awesome-icon v-if="!!subItem.meta?.icon" :icon="subItem.meta?.icon" />
          <template v-if="showTitle(subItem)">{{ subItem.meta?.title }}</template>
        </summary>
        <ul>
          <sub-item :menu-list="subItem.children" :active="active" :collapse="collapse" />
        </ul>
      </details>
    </li>
    <li v-else>
      <router-link :to="subItem.path" :class="{active: active == subItem.path}">
        <font-awesome-icon v-if="!!subItem.meta?.icon" :icon="subItem.meta?.icon" />
        <template v-if="showTitle(subItem)">{{ subItem.meta?.title }}</template>
      </router-link>
    </li>
  </template>
</template>

<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router';

const props = defineProps<{ menuList: RouteRecordRaw[], active?: string, collapse: boolean }>()

const showTitle = (subItem: RouteRecordRaw): boolean =>  {
  if (props.collapse) {
    return !subItem.meta?.icon
  } else {
    return true
  }
}
</script>

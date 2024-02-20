<template>
  <el-icon class="text-lg mr-4 expandIcon" @click="menuStore.setCollapse()">
    <component :is="isCollapse ? 'expand' : 'fold'" />
  </el-icon>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/store/modules/menu';
import { computed } from 'vue';
const menuStore = useMenuStore()
const isCollapse = computed((): boolean => menuStore.isCollapse)
</script>

<style scoped>
.expandIcon{
  cursor: pointer;
}
</style>

<template>
  <div class="flex items-center text-xl h-full justify-between w-full">
    <img src="@/assets/logo.png" alt="logo" class="w-12 h-12">
    <a class="btn btn-ghost text-xl">{{ title }}</a>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ isCollapse: boolean }>(), {
  isCollapse: false
})
const title = import.meta.env.FARM_TITLE
</script>

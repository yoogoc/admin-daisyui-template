<template>
  <div>
    todo
  </div>
</template>
<script lang='ts' setup>
import { reactive, ref, onMounted } from 'vue'
import API from '@/api'

onMounted(async() => {
  console.log('todo')
})
</script>

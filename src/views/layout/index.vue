<template>
  <section class="h-screen">
    <my-header />
    <section class="w-full flex h-full">
      <aside class="w-auto h-full">
        <my-menu v-if="!menuStore.isCollapse" />
      </aside>
      <div class="h-full w-full p-2 pb-5 bg-base-200">
        <div class="h-full w-full bg-white rounded-box p-2">
          <router-view v-slot="{ Component, route }">
            <keep-alive :include="cacheRouter">
              <component :is="Component" :key="route.path" />
            </keep-alive>
          </router-view>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import MyHeader from './header/index.vue';
import MyMenu from './menu/index.vue';
// import Tabs from "./tabs/index.vue";
// import Footer from './footer/index.vue'
import cacheRouter from '@/router/cacheRouter';
import { useMenuStore } from '@/store';
import { onMounted } from 'vue';

const menuStore = useMenuStore()

onMounted(async () => {
})
</script>

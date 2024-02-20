<template>
  <div>
    <div>
      <h1 class="text-4xl">solid</h1>
      <div class="grid grid-cols-5 gap-1">
        <div v-for="key in Object.keys(fas)" :key="key" tabindex="0" outline="0" class="cursor-pointer" @click="copy('solid', key)">
          <div class="tooltip" :data-tip="tip[`solid-${key}`] || 'Copy icon code'">
            <font-awesome-icon :icon="fas[key]" />
            {{ kebabCase(key.slice(2)) }}
          </div>
        </div>
      </div>
    </div>
    <div>
      <h1 class="text-4xl">brands</h1>
      <div class="grid grid-cols-5 gap-1">
        <div v-for="key in Object.keys(fab)" tabindex="0" outline="0" class="cursor-pointer" :key="key" @click="copy('solid', key)">
          <div class="tooltip" :data-tip="tip[`brand-${key}`] || 'Copy icon code'">
            <font-awesome-icon :icon="fab[key]" />
            {{ kebabCase(key.slice(2)) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { kebabCase } from 'lodash-es';
import { onMounted, reactive } from 'vue';

const tip = reactive({})

onMounted(async () => {
  console.log('todo')
})

const copy = (type: string, name: string) => {
  navigator.clipboard.writeText(`fa-${type} ${kebabCase(name)}`);
  tip[`${type}-${name}`] = 'Copied'
}
</script>

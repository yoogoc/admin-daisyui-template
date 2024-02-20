<template>
  <div class="flex">
    <div>共 {{ pageable.total }} 条</div>
    <details class="dropdown">
      <summary class="m-1 btn">
        {{ pageSize }}条/页
      </summary>
      <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li v-for="ps in pageSizes" :key="ps" @click="changePs(ps)">{{ ps }}</li>
      </ul>
    </details>
    <div class="join">
      <button class="join-item btn">1</button>
      <button class="join-item btn">2</button>
      <button class="join-item btn btn-disabled">...</button>
      <button class="join-item btn">99</button>
      <button class="join-item btn">100</button>
    </div>
    <div class="flex justify-center items-center">
      前往
      <input type="number" class="input input-bordered w-full max-w-xs" v-model="pageable.page"
        @change="() => { handleCurrentChange(pageable.page) }" />
      页
    </div>
  </div>
</template>

<script setup lang="ts" name="pagination">
import { ref } from 'vue';

interface Pageable {
  page: number;
  pageSize: number;
  total: number;
}

interface PaginationProps {
  pageable: Pageable;
  handleSizeChange: (size: number) => void;
  handleCurrentChange: (currentPage: number) => void;
}

const props = defineProps<PaginationProps>()

const pageSizes = [10, 25, 50, 100]
const pageSize = ref(pageSizes[0])

const changePs = (ps: number) => {
  pageSize.value = ps
  props.handleSizeChange(ps)
}

</script>

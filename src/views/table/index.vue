<template>
  <div class="flex flex-col">
    <table class="table" ref="tableRef">
      <thead>
        <tr>
          <th v-for="item, i in tableColumns" :key="i">
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item, i in tableData" :key="getRowKey(item, i)">
          <th v-for="item, i in tableColumns" :key="i">
            {{ item }}
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang='ts' setup>
import { useSelection } from '@/hooks/useSelection';
import { useTable } from '@/hooks/useTable';
import { ColumnProps } from '@/types/table';
import { onMounted, ref } from 'vue';

const tableRef = ref()

// 是否显示搜索模块
const isShowSearch = ref<boolean>(true)

interface ProTableProps {
  columns: Partial<ColumnProps>[]; // 列配置项
  requestApi: (params: any) => Promise<any>; // 请求表格数据的api ==> 必传
  pagination?: boolean; // 是否需要分页组件 ==> 非必传（默认为true）
  initParam?: any; // 初始化请求参数 ==> 非必传（默认为{}）
  border?: boolean; // 表格是否显示边框 ==> 非必传（默认为true）
  stripe?: boolean; // 是否带斑马纹表格 ==> 非必传（默认为false）
  toolButton?: boolean; // 是否显示表格功能按钮 ==> 非必传（默认为true）
  childrenName?: string; // 当数据存在 children 时，指定 children key 名字 ==> 非必传（默认为"children"）
  listKey?: string;
  beforeList?: () => void;
  getRowKey?: (row: any, index: number) => string | number;
}

// 接受父组件参数，配置默认值
const props = withDefaults(defineProps<ProTableProps>(), {
  columns: () => [],
  beforeList: () => { },
  getRowKey: (_: any, index: number) => index,
  pagination: true,
  initParam: {},
  border: true,
  stripe: false,
  toolButton: true,
  childrenName: 'children',
  listKey: 'list',
})

// 表格多选 Hooks
const { selectionChange, getRowKeys, selectedListIds, isSelected } = useSelection()

// 表格操作 Hooks
const { tableData, pageable, searchParam, initSearchParam, getTableList, search, reset, handleSizeChange, handleCurrentChange } =
  useTable(props.requestApi, props.initParam, props.pagination, props.listKey)

// 表格列配置项处理（添加 isShow 属性，控制显示/隐藏）
const tableColumns = ref<Partial<ColumnProps>[]>()
tableColumns.value = props.columns.map(item => {
  if (item.isShow == undefined) {
    return {
      ...item,
      isShow: true,
    }
  } else {
    return item
  }
})

// 过滤需要搜索的配置项
const searchColumns = props.columns.filter(item => item.search)

// 设置搜索表单的默认值
searchColumns.forEach(column => {
  if (column.initSearchParam !== undefined && column.initSearchParam !== null) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    initSearchParam.value[column.prop!] = column.initSearchParam
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    searchParam.value[column.prop!] = column.initSearchParam
  }
})

// 列设置
const colRef = ref()
// 过滤掉不需要设置显隐的列
const colSetting = tableColumns.value.filter((item: Partial<ColumnProps>) => {
  return item.type !== 'selection' && item.type !== 'index' && item.type !== 'expand'
})
const openColSetting = () => {
  colRef.value.openColSetting()
}

// 获取表格数据
onMounted(() => {
  props.beforeList()
  getTableList()
})

// 暴露给父组件的参数和方法
defineExpose({ searchParam, refresh: getTableList })

</script>

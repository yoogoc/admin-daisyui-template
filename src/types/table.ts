export interface EnumProps {
  label: string;
  value: any;
  disabled?: boolean; // 是否禁用此选项
  tagType?: string; // 当 tag 为 true 时，此选择会指定 tag 显示类型
  children?: EnumProps[];
}

export type SearchType =
	| 'text'
	| 'select'
	| 'multipleSelect'
	| 'treeSelect'
	| 'multipleTreeSelect'
	| 'date'
	| 'datetime'
	| 'timerange'
	| 'datetimerange';

export type TypeProp = 'index' | 'selection' | 'expand';

export type FixedProp = 'left' | 'right';

// TODO 搜索列使用更人性化的结构体表示，方便一个字段有多个搜索
export interface ColumnProps {
  type: TypeProp; // index | selection | expand（特殊类型）
  prop: string; // 单元格数据（非特殊类型必填）
  label: string; // 单元格标题（非特殊类型必填）
  width: number | string; // 列宽
  isShow: boolean; // 是否显示
  sortable: boolean; // 是否可排序（静态排序）
  fixed: FixedProp; // 固定列
  tag: boolean; // 是否是标签展示
  image: boolean; // 是否是图片展示
  search: boolean; // 是否为搜索项
  searchType: SearchType; // 搜索项类型
  searchOptions?: Object; // 搜索项选项
  initSearchParam: string | number | boolean | any[]; // 搜索项初始值
  enum: EnumProps[]; // 枚举类型（渲染值的字典）
}

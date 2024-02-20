export interface Pageable {
  page: number;
  pageSize: number;
  total: number;
}
export interface TableStateProps {
  tableData: any[];
  searchShow: boolean;
  pageable: Pageable;
  searchParam: {
    [key: string]: any;
  };
  initSearchParam: {
    [key: string]: any;
  };
  totalParam: {
    [key: string]: any;
  };
  icon?: {
    [key: string]: any;
  };
}
export type MessageType = '' | 'success' | 'warning' | 'info' | 'error';

# 开发说明

后台页面推荐使用 Dux 组件组合。

## 表格页面示例

```vue
<script setup lang="ts">
import type { TableColumn } from '@duxweb/dvha-naiveui'
import { DuxTablePage, useAction, useTableColumn } from '@duxweb/dvha-pro'

const action = useAction()
const column = useTableColumn()

const columns: TableColumn[] = [
  { title: 'ID', key: 'id', width: 80 },
  { title: '昵称', key: 'nickname' },
  {
    title: '状态',
    key: 'status',
    render: column.renderSwitch({ key: 'status' }),
  },
  {
    title: '操作',
    key: 'action',
    render: action.renderTable({
      items: [
        { label: '编辑', type: 'modal', component: () => import('./form.vue') },
        { label: '删除', type: 'delete', path: 'system/user' },
      ],
    }),
  },
]
</script>

<template>
  <DuxTablePage path="system/user" :columns="columns" />
</template>
```

## 常用布局

- `DuxPage` + `DuxPageHeader` + `DuxPageBody`
- `DuxCard` / `DuxCollapsePanel`
- `DuxListEmpty`

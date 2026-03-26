# 表格设计

`DuxTablePage` 是后台列表的主入口，内置分页、筛选、操作区等。

```vue
<script setup lang="ts">
import type { JsonSchemaNode } from '@duxweb/dvha-core'
import { DuxTablePage } from '@duxweb/dvha-pro'
import { ref } from 'vue'

const filter = ref({})
const filterSchema: JsonSchemaNode[] = [
  {
    tag: 'n-input',
    name: 'keyword',
    attrs: { 'placeholder': '搜索', 'v-model:value': [filter.value, 'keyword'] },
  },
]

const tabs = [
  { label: '全部', value: '0' },
  { label: '启用', value: '1' },
  { label: '禁用', value: '2' },
]
</script>

<template>
  <DuxTablePage
    path="system/user"
    :filter="filter"
    :filter-schema="filterSchema"
    :tabs="tabs"
  />
</template>
```

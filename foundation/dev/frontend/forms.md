# 表单设计

推荐使用 `DuxPageForm` / `DuxModalForm`，自动处理 create/edit、提交与错误提示。

```vue
<script setup lang="ts">
import { DuxFormItem, DuxPageForm } from '@duxweb/dvha-pro'
import { NInput } from 'naive-ui'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = computed(() => route.params.id as string)
const model = ref({ name: '' })
</script>

<template>
  <DuxPageForm :id="id" :data="model" path="system/role">
    <DuxFormItem label="角色名称">
      <NInput v-model:value="model.name" />
    </DuxFormItem>
  </DuxPageForm>
</template>
```

- `path` 对应资源路径（不含 `/admin` 前缀）。
- `id` 有值时进入编辑模式。

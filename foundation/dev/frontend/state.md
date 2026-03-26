# 状态管理

DVHA 默认基于 Pinia 管理状态，常用 Store 包括：

- `useTabStore()`：标签页管理
- `useManage()`：管理端信息

示例：

```ts
import { useTabStore } from '@duxweb/dvha-core'

const tab = useTabStore()
const current = tab.current
```

> `pinia-plugin-persistedstate` 已内置，部分状态会自动持久化。

# Hooks 使用

DVHA 提供常用数据请求与页面辅助 hooks。

## useList

```ts
import { useList } from '@duxweb/dvha-core'

const { data, isLoading } = useList({ path: 'system/role/permission' })
```

## useAction / useTableColumn

```ts
import { useAction, useTableColumn } from '@duxweb/dvha-pro'

const action = useAction()
const column = useTableColumn()
```

## useManage

```ts
import { useManage } from '@duxweb/dvha-core'

const manage = useManage()
manage.getRoutePath('system/profile')
```

# API 开发

## 统一响应

所有接口建议通过 `send()` 返回：

```php
return send($response, 'ok', $data, $meta);
```

响应结构：

```json
{ "code": 200, "message": "ok", "data": {}, "meta": {} }
```

## 资源接口

资源控制器默认提供：

- `list`：GET `/resource`
- `show`：GET `/resource/{id}`
- `create`：POST `/resource`
- `edit`：PUT `/resource/{id}`
- `store`：PATCH `/resource/{id}`
- `delete`：DELETE `/resource/{id}`
- `deleteMany`：DELETE `/resource`

## 分页与排序

- 传入 `pageSize` 才启用分页
- 排序参数格式：`field_sort=asc|desc`

# 请求生命周期

## 资源请求（Resource）

以 `GET /admin/system/user` 为例：

1. 路由匹配资源 `system.user`。
2. 资源中间件执行：认证 → 权限 → 操作日志。
3. 进入资源方法：
   - `init()`
   - `queryMany()` / `queryOne()`
   - `transform()`
   - `metaMany()` / `metaOne()`
4. 返回统一结构：`{ code, message, data, meta }`

## 统一返回结构

```json
{
  "code": 200,
  "message": "ok",
  "data": [],
  "meta": { "total": 0, "page": 1 }
}
```

## 路由请求（Route）

`#[RouteGroup]` / `#[Route]` 适合自定义接口，例如：

- `/manage/` 页面入口
- `/api/*` 签名 API

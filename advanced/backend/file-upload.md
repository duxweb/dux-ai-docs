# 文件上传

上传接口位于 `/admin/upload`，提供三种方式：

- `GET /admin/upload`：获取签名（用于直传）
- `POST /admin/upload`：直接上传文件
- `PUT /admin/upload`：保存直传结果（保存到系统文件表）

## 直传流程

1. `GET /admin/upload?name=xxx&mime=xxx&size=123`
2. 前端根据返回的 `uploadUrl` 与 `params` 上传到存储
3. `PUT /admin/upload` 提交 `url` 完成保存

## 上传校验

`App\System\Service\Upload` 内置：

- 黑名单扩展名过滤
- 允许扩展名（可配置）
- 文件大小限制

## 存储驱动

通过「系统配置 → 存储配置」设置，后端使用：

```php
use App\System\Service\Storage;

$storage = Storage::getObject();
```

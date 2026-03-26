# 数据库操作

Dux Lite 基于 Illuminate Database（Eloquent）。

## 自动迁移

- 模型加 `#[AutoMigrate]`
- 实现 `migration()` 定义字段
- `seed()` 可写入初始化数据

```bash
php dux db:sync
```

## 连接获取

```php
use Core\App;

$connection = App::db()->getConnection();
```

# 数据库配置

数据库配置位于 `config/database.toml`。

## 默认配置

当前框架层默认使用 SQLite：

```toml
[db.drivers.default]
driver = "sqlite"
database = "data/database.db"
prefix = "app_"
```

这意味着你本地快速启动时，不一定需要先配 MySQL。

## 切换到 MySQL

如果你要改成 MySQL，可以按下面这种结构配置：

```toml
[db.drivers.default]
driver = "mysql"
host = "localhost"
database = "dux_admin"
username = "root"
password = "root"
port = 3306
prefix = "app_"
```

## 自动迁移

模型加上 `#[AutoMigrate]` 后，可以通过下面的命令同步数据库结构：

```bash
php dux db:sync
```

常见用途：

- 自动创建或更新表结构
- 执行模型里的初始化数据
- 为模块开发减少单独维护 migration 的成本

## 常用命令

```bash
php dux db:list
php dux db:sync
php dux db:backup
php dux db:restore
```

## 和 Dux AI 的关系

在 Dux AI 主项目里，AI 模块自己的数据表同样沿用这套数据库同步方式。

如果你后面还要看 AI 模块开发，可以继续阅读 [开发概览](/extensions/ai/overview)。

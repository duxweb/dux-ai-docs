# 快速开始

这一页讲的是 Dux AI 项目里框架层与默认模块的启动方式，不展开服务商、模型、知识库等 AI 配置。

如果你要安装完整 Dux AI，请直接看 [Dux AI 快速开始](/usage/quick-start)。

## 环境准备

- `PHP 8.4+`
- `Composer 2.x`
- `SQLite` 或 `MySQL 8.x`
- `php-redis` 扩展

建议先确认 PHP 与 Composer 版本：

```bash
php -v
composer self-update
```

## 获取代码

```bash
git clone https://github.com/duxweb/dux-ai.git dux-ai
cd dux-ai
composer install
```

或者

```bash
composer create-project duxweb/dux-ai
cd dux-ai
```

## 数据库说明

当前仓库默认 `config/database.toml` 使用的是 SQLite：

```toml
[db.drivers.default]
driver = "sqlite"
database = "data/database.db"
prefix = "app_"
```

如果你想改成 MySQL，再按自己的环境修改该文件即可。

## 启动流程

1. 同步数据库和菜单

```bash
php dux db:sync
php dux menu:sync
```

2. 启动服务

```bash
php -S localhost:8000 -t public
```

3. 打开安装向导

- `http://localhost:8000/`

4. 安装完成后进入后台

- `http://localhost:8000/manage/`
- 默认账号：`admin / admin`

## 常见补充

- 如果你修改了 `web/` 目录或升级了前端依赖，需要在项目根目录执行 `pnpm build`
- 如果你看到后台白屏，优先检查 `public/static/web/.vite/manifest.json` 是否存在

继续阅读：

- [系统配置](/foundation/configuration)
- [数据库配置](/foundation/database)
- [System 模块概览](/foundation/system-overview)

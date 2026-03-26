# 配置参考

本页汇总框架层里最常用的配置项，适合在你已经看过 [系统配置](/foundation/configuration) 后，用来快速查字段。

## `use.toml`

```toml
[app]
name = "我的 DuxLite 应用"
debug = true
timezone = "Asia/Shanghai"
secret = "your-app-secret-key"
domain = "http://localhost:8000"

[vite]
dev = false
port = 5173
```

## 主题相关配置

```toml
[theme]
logo = "/static/logo.png"
darkLogo = "/static/logo-dark.png"
appLogo = "/static/app-logo.png"
appDarkLogo = "/static/app-logo-dark.png"
banner = "/static/banner.png"
darkBanner = "/static/banner-dark.png"
layout = "app"
```

说明：

- `theme.*` 会由后台入口输出到前端基座
- 最终展示时，系统配置表里的 `system.*` 配置通常优先级更高
- 可直接被浏览器访问的资源，应该放在 `public/` 下

## 可选运行配置

```toml
[cache]
type = "file"
prefix = "dux_"

[lock]
type = "semaphore"
```

## `database.toml`

默认数据库示例：

```toml
[db.drivers.default]
driver = "sqlite"
database = "data/database.db"
prefix = "app_"
```

如果改用 MySQL：

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

## `app.toml`

```toml
registers = [ "App\\System\\App", "App\\Install\\App", "App\\Data\\App" ]
```

## 继续阅读

- [系统配置](/foundation/configuration)
- [数据库配置](/foundation/database)
- [缓存配置](/foundation/cache)

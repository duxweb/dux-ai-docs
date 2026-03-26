# 缓存配置

缓存配置通常读取 `config/use.toml`，Redis 连接则来自 `config/database.toml`。

## 文件缓存

默认可以直接使用文件缓存：

```toml
[cache]
type = "file"
prefix = "dux_"
```

## Redis 缓存

如果要切到 Redis：

```toml
[cache]
type = "redis"
prefix = "dux_"

[db.redis.drivers.default]
host = "127.0.0.1"
port = 6379
password = ""
```

> 使用 Redis 时，需要 PHP 安装对应的 Redis 扩展。

## 什么时候建议用 Redis

- 多实例部署
- 需要更稳定的缓存共享
- 后面还要继续承载队列、锁或 AI 相关高频状态

## 常见排查

- 改完配置后，先确认连接参数是否正确
- 如果缓存和路由表现异常，可执行 `php dux app:cache`
- 如果你的目标是完整 Dux AI 部署，通常也建议一并准备 Redis

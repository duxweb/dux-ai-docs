# 队列系统

队列基于 Symfony Messenger，配置读取 `config/queue.toml`。

## 示例配置

```toml
[workers.default]
type = "redis"
driver = "default"
num = 2
weights.high = 5
weights.medium = 3
weights.low = 1
```

## 启动队列

```bash
php dux queue:start            # 管理进程（按配置启动）
php dux queue:consume default  # 单 worker 消费
```

> Redis 连接配置读取 `config/database.toml` 的 `db.redis.drivers.*`。

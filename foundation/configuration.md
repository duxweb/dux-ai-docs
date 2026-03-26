# 系统配置

这一页讲的是框架层的核心配置文件，也就是 Dux AI 底层依赖的那一套运行配置。

## 主要文件

- `config/use.toml`：运行时配置
- `config/use.dev.toml`：开发环境覆盖
- `config/app.toml`：模块注册
- `config/database.toml`：数据库与 Redis 等连接配置
- `config/queue.toml`：队列相关配置

## use.toml

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

[cloud]
key = ""
```

重点看这些字段：

- `app.secret`：JWT 和签名相关的基础密钥，生产环境务必替换
- `app.domain`：系统对外访问地址
- `vite.dev`：是否走前端开发服务器
- `use.dev.toml`：会覆盖同名键，适合本地调试

## app.toml

```toml
registers = [ "App\\System\\App", "App\\Install\\App", "App\\Data\\App" ]
```

这里定义应用启动时要加载哪些模块。

## 什么时候需要改这些配置

- 新增模块：修改 `app.toml`
- 切换域名、时区、调试模式：修改 `use.toml`
- 本地联调前端基座：修改 `use.dev.toml`
- 切换数据库或 Redis：修改 `database.toml`

继续阅读：

- [数据库配置](/foundation/database)
- [缓存配置](/foundation/cache)
- [部署与运维](/foundation/deployment)

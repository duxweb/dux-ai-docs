# 目录结构

以下结构以当前 `dux-ai` 仓库为准：

```text
.
├── app/                    # 模块目录
│   ├── Ai/                 # AI 模块
│   ├── Boot/               # 机器人与消息模块
│   ├── Data/               # 数据模块
│   ├── Install/            # 安装模块
│   ├── System/             # 系统模块
│   └── ...                 # 其他业务模块
├── config/
│   ├── app.toml            # 注册模块
│   ├── database.toml       # 数据库配置
│   ├── queue.toml          # 队列配置
│   ├── use.toml            # 运行配置
│   └── use.dev.toml        # 开发覆盖配置
├── data/                   # 运行时数据
│   ├── cache/              # 缓存
│   ├── database.db         # 默认 SQLite 数据库
│   └── logs/               # 日志
├── public/
│   ├── index.php           # Web 入口
│   └── static/web/         # 后台前端构建产物
├── web/                    # 后台前端源码
├── dux                     # CLI 入口
├── composer.json           # PHP 依赖
└── package.json            # 前端依赖
```

## 关键约定

- 模块化：每个模块在 `app/模块名` 下独立维护
- 后台页面：通常放在 `app/模块/Admin`
- 菜单声明：写在模块根目录 `app.json`
- 管理端入口：统一从 `/manage/` 进入

## 在 Dux AI 里怎么理解这套目录

Dux AI 主项目就是沿用这套结构，只是在默认模块之外再补充了 `Ai`、`Boot` 等 AI 相关模块。

如果你已经理解这里的目录组织，再去看 Dux AI 的开发文档会顺很多。

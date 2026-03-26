# 命令速查表

```bash
php dux db:sync           # 同步数据库结构
php dux db:list           # 查看可迁移模型
php dux db:backup         # 备份数据库（仅 MySQL）
php dux db:restore        # 恢复数据库（仅 MySQL）

php dux menu:sync         # 同步菜单
php dux route:list        # 查看路由列表
php dux permission:list   # 查看权限列表

php dux docs:build        # 生成 OpenAPI 文档
php dux app:cache         # 清理路由/属性缓存

php dux queue:start       # 队列管理进程
php dux queue:consume     # 队列消费
php dux scheduler:run     # 启动任务调度
```

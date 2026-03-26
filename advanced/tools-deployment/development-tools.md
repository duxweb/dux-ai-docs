# 开发工具

## 常用命令

```bash
php dux route:list          # 路由列表
php dux permission:list     # 权限列表
php dux db:list             # 迁移模型
php dux docs:build          # 生成 OpenAPI 文档
php dux app:cache           # 清理路由/属性缓存
```

## API 文档

`docs:build` 生成 `data/docs/openapi.json`，后台的「接口文档」菜单会读取此文件。

# 部署指南（开发视角）

## 生产构建流程

1. 后端依赖：`composer install --no-dev`
2. 前端构建：`pnpm build` 输出到 `public/static/web`
3. 设置 `use.toml`：关闭 debug、配置域名

## 目录权限

- `data/` 目录可写
- `public/static/web` 可读

## 入口

Web 根目录必须指向 `public/`。

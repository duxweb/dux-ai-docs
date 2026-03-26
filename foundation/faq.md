# 常见问题

## 访问 `/manage/` 白屏

- 前端基座还没构建，先在项目根目录执行 `pnpm build`
- 开发模式配置错误，检查 `config/use.dev.toml` 中的 `vite.dev`

## 页面不更新

- 页面路径和菜单 `loader` 不一致
- 修改的是模块页面，但文件不在 `app/模块/Admin` 下
- 如果改的是 `web/` 源码，需要重新执行 `pnpm build`

## 提示 `config not found`

请确认访问的是 `/manage/`，而不是直接打开静态文件。

## 切到 Redis 后还是报错

- 确认 Redis 连接配置写在 `config/database.toml`
- 确认 PHP 已安装 Redis 扩展
- 配置改动后重新清理应用缓存

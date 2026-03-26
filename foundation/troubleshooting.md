# 故障排除

本页聚焦“排错步骤和定位思路”。

## 后台白屏或无内容

1. 确认访问的是 `/manage/`
2. 检查 `public/static/web/.vite/manifest.json` 是否存在
3. 如果你改过 `web/` 目录，在项目根目录执行 `pnpm build`
4. 如果是开发模式，检查 `config/use.dev.toml` 的 `vite.dev` 和端口

## 菜单不显示

1. 确认模块已经注册到 `config/app.toml`
2. 执行 `php dux menu:sync`
3. 检查菜单 `name`、`path`、`loader` 是否一致

## 页面加载失败

1. 菜单 `loader` 路径是否正确，例如 `System/Home/index`
2. 页面是否位于 `app/模块/Admin`
3. 页面路径和菜单声明是否对应

## 接口 404 或数据不对

1. 资源类是否声明了 `#[Resource]`
2. 是否属于 `admin` 路由组
3. 是否执行过 `php dux db:sync`

## 权限导致菜单或按钮看不到

1. 角色是否包含对应权限
2. 执行 `php dux permission:list`
3. 确认菜单 `name` 和权限节点一致

## 上传失败

1. 检查系统存储配置
2. 检查文件大小和扩展名限制
3. 确认 `public/` 下资源可访问

## 缓存、路由或配置异常

- 执行 `php dux app:cache`
- 重新构建前端基座
- 查看 `data/logs` 中的错误日志

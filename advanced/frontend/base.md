# 前端基座（web 目录）

前端基座源码在项目根目录的 `web/`。

它负责后台整体 UI、路由容器、运行时配置加载与模块页面的动态加载。

## 更新基座

```bash
cd <项目目录>
pnpm install
pnpm build
```

构建产物输出到：

```
<项目目录>/public/static/web
```

## 什么时候需要构建

- 修改了 `web/` 目录代码
- 升级了前端依赖

> 修改 `app/模块/Admin` 页面不需要构建基座。

## 开发调试（可选）

```bash
cd <项目目录>
pnpm dev
```

并设置 `config/use.dev.toml`：

```toml
[vite]
dev = true
port = 5173
```

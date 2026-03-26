# 前端基座更新

前端基座源码位于项目根目录的 `web/`。

它负责后台整体布局、路由容器、运行时配置和模块页面加载逻辑。

## 什么时候需要更新基座

- 你修改了 `web/` 里的代码
- 你升级了前端依赖，例如 Vue、DVHA、Naive UI

如果只是修改 `app/模块/Admin/*.vue` 页面，不需要更新基座。

## 构建方式

```bash
cd <项目目录>
pnpm install
pnpm build
```

构建产物输出到：

```text
<项目目录>/public/static/web
```

## 开发模式

```bash
cd <项目目录>
pnpm dev
```

并在 `config/use.dev.toml` 中设置：

```toml
[vite]
dev = true
port = 5173
```

## 相关页面

- [前端基座工作机制](/foundation/frontend-base)
- [DVHA 框架](/advanced/frontend/dvha)

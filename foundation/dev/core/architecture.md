# 架构概述

Dux PHP Admin 基于 Dux Lite 的模块化启动流程，核心由以下部分组成：

- **应用入口**：`public/index.php` 调用 `Core\App::create()` 并启动 Web。
- **Bootstrap**：注册配置、路由、事件、资源与命令行。
- **资源系统**：`#[Resource]` 自动生成 CRUD 与权限。
- **路由系统**：`#[RouteGroup]` / `#[Route]` 管理自定义路由。

## 路由结构

- `web` 路由：管理页面入口（`/manage/`）
- `admin` 资源：后台 API（`/admin/*`）
- `api` 路由：签名 API（`/api/*`）

## 启动顺序（简化）

1. `registerFunc`：加载公共函数（`send()` 等）
2. `registerConfig`：读取 `use.toml`，设置时区与语言
3. `registerWeb`：初始化 Slim 应用
4. `loadApp`：注册模块、资源、路由、事件、计划任务
5. `runWeb`：处理请求

> 模块 `App::init()` 会先于资源注册执行，适合注册 `Resource`、`Route` 与中间件。

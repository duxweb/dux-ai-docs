# 框架开发总览

这一部分是 `Dux PHP Admin` 的开发文档，也就是 Dux AI 底座层的开发说明。

如果你当前要做的是：

- 新增业务模块
- 扩展后台页面或资源接口
- 理解菜单、权限、路由、资源、配置和系统服务

那就从这里开始。

## 先看什么

建议按这个顺序阅读：

1. [环境搭建](/foundation/dev/quick-start/environment)
2. [第一个 API](/foundation/dev/quick-start/first-api)
3. [第一个模块](/foundation/dev/quick-start/first-module)
4. [架构概述](/foundation/dev/core/architecture)
5. [模块系统](/foundation/dev/core/modules)

## 和 Dux AI 开发文档的分工

- `foundation/dev/*`：讲底座框架本身怎么开发
- `/dev/*`：讲 AI 模块、智能体、知识库、工作流和机器人怎么开发

也就是说：

- 先学会如何做模块、页面、资源接口，看这里
- 再学会如何把 AI 能力接进业务模块，看 [开发概览](/dev/overview)

## 重点入口

- 想快速上手底座：看 [第一个模块](/foundation/dev/quick-start/first-module)
- 想理解前端基座：看 [DVHA 框架](/foundation/dev/frontend/dvha)
- 想理解后端资源接口：看 [API 开发](/foundation/dev/backend/api)
- 想查 CLI 和运维命令：看 [开发工具](/foundation/dev/tools-deployment/development-tools)

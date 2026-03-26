# 框架开发总览

这一部分是 Dux AI 的框架层开发文档，也就是业务模块、后台资源和系统能力的开发说明。

如果你当前要做的是：

- 新增业务模块
- 扩展后台页面或资源接口
- 理解菜单、权限、路由、资源、配置和系统服务

那就从这里开始。

## 先看什么

建议按这个顺序阅读：

1. [目录结构](/advanced/quick-start/directory-structure)
2. [第一个 API](/advanced/quick-start/first-api)
3. [第一个模块](/advanced/quick-start/first-module)
4. [架构概述](/advanced/core/architecture)
5. [模块系统](/advanced/core/modules)

## 和扩展开发文档的分工

- `advanced/*`：讲框架层本身怎么开发
- `/extensions/ai/*`：讲 AI 模块、智能体、知识库、工作流和机器人怎么开发

也就是说：

- 先学会如何做模块、页面、资源接口，看这里
- 再学会如何把 AI 能力接进业务模块，看 [开发概览](/extensions/ai/overview)

## 重点入口

- 想快速上手底座：看 [第一个模块](/advanced/quick-start/first-module)
- 想理解前端基座：看 [DVHA 框架](/advanced/frontend/dvha)
- 想理解后端资源接口：看 [API 开发](/advanced/backend/api)
- 想查 CLI 和运维命令：看 [开发工具](/advanced/tools-deployment/development-tools)

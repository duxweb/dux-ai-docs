# Dux AI Docs

Dux AI 官方文档站，使用 VitePress 构建。

## 项目说明

这个仓库用于维护 Dux AI 的文档内容，当前文档主要分为 7 部分：

- `使用`：面向后台使用者，讲解服务商、模型、智能体、机器人、知识库、工作流等配置方式
- `API`：面向对接方，讲解 AI API 与对接方式
- `基础`：面向 Dux AI 的框架层，讲解一体化中后台架构、配置、默认模块和部署
- `高级`：面向框架层开发者，讲解模块开发、资源开发、前后端开发、系统服务和部署工具
- `扩展`：面向扩展开发者，讲解 AI 模块、Bot 模块、电脑助手及能力扩展
- `社区`：面向参与协作与反馈的开发者，收录主仓库社区入口
- `生态`：收录 Dux AI 相关项目和生态入口

当前文档还需要覆盖会话级审批能力，尤其是：

- `Ai` 模块基于 Neuron Workflow interruption / resume 的审批机制
- `AiDesktop` 节点危险动作（如 `terminal.exec`）的审批接入方式
- 管理端聊天页和多渠道机器人（如飞书）对审批接口的对接方式

Dux AI 本身是一套基于 Dux Lite + DVHA Pro 的一体化 AI 中后台平台，文档站也围绕这个定位进行组织。

## 目录结构

```text
.
├── .vitepress/
├── advanced/
├── api/
├── extensions/
│   ├── ai/
│   ├── bot/
│   └── device-control/
├── foundation/
├── public/
├── usage/
└── index.md
```

## 本地开发

安装依赖：

```bash
npm install
```

启动文档站：

```bash
npm run dev
```

构建静态文件：

```bash
npm run build
```

本地预览构建结果：

```bash
npm run preview
```

## 维护建议

- 文档内容优先和实际代码、后台表单、接口行为保持一致
- 会话审批、危险动作审批、多渠道确认这类基础能力优先在 `Ai` 模块文档中定义，再由业务模块补充自己的接入说明
- 用户文档尽量使用后台真实菜单名和表单标签名，不直接暴露内部类名或字段名
- 开发文档才讲事件、服务类、扩展点和代码结构
- 图片占位统一放在 `public/images/` 下，后续直接替换同名文件即可

## 相关项目

- Dux AI：`https://github.com/duxweb/dux-ai`
- Dux Lite：`https://lite2.docs.dux.plus/`
- DVHA Pro：`https://dvha.docs.dux.plus/`

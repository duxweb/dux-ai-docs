# 桌面端客户端

如果你希望直接在 macOS 或 Windows 上使用 Dux AI，会话、附件上传和多窗口设置都可以通过桌面端完成。

桌面端项目仓库：

- GitHub：`https://github.com/duxweb/dux-ai-desktop`
- Releases：`https://github.com/duxweb/dux-ai-desktop/releases`

## 适合什么场景

- 想给自己或团队提供一个独立桌面对话入口
- 想直接通过桌面端连接现有 Dux AI 服务
- 想在桌面端完成文档、图片、视频等附件消息发送

## 下载方式

推荐直接从 GitHub Releases 下载对应系统的安装包：

- macOS
- Windows

下载地址：

```text
https://github.com/duxweb/dux-ai-desktop/releases
```

如果你只想查看桌面端源码或自行构建，也可以直接访问仓库：

```text
https://github.com/duxweb/dux-ai-desktop
```

## 使用前提

桌面端不是独立后端，它需要连接已经部署好的 Dux AI 服务端。

也就是说，你至少需要先准备好：

- 一个可访问的 Dux AI 服务地址
- 一个可用的访问 Token

如果服务端还没有安装，可以先看：

- [快速开始](/usage/quick-start)
- [系统部署](/usage/deployment)

## 首次连接步骤

1. 安装并打开桌面端客户端。
2. 在连接设置中填写 `服务器地址`。
3. 填写服务端提供的 `Token`。
4. 点击“测试连接”。
5. 测试通过后保存配置。

连接成功后，桌面端会自动拉取：

- 智能体列表
- 会话列表
- 历史消息

## 当前支持的能力

- 智能体切换
- 会话创建、重命名、删除
- 流式消息回复
- 图片、文档、视频附件发送
- 设置与关于窗口

## 版本说明

桌面端版本会跟随 GitHub Release 发布。

如果你是通过 Release 下载安装包，关于窗口里显示的版本号会和当前发布版本保持一致。

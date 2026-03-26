# 快速开始

这一章的目标很简单：先把 Dux AI 跑起来，再完成第一次对话。

也就是说，你只需要先跑通这条最小链路：

`准备环境 -> 安装项目 -> 进入后台 -> 配置服务商 -> 配置模型 -> 创建智能体 -> 开始对话`


## 1. 环境要求

开始之前，建议先确认：

- `PHP 8.4+`
- `php-redis` 扩展
- `MySQL 8.0+`（推荐）
- `Composer`

## 2. 创建 Dux AI 项目

```bash
git clone https://github.com/duxweb/dux-ai.git dux-ai
cd dux-ai
composer install
```

或者

```bash
composer create-project duxweb/dux-ai
cd dux-ai
```

## 3. 启动本地服务

```bash
php -S localhost:8000 -t public
```

## 4. 访问安装向导

```text
http://localhost:8000/
```

按页面提示完成安装后，再进入后台：

```text
http://localhost:8000/manage/
```

如果当前环境预置了默认管理员账号，可以直接使用：

- 账号：`admin`
- 密码：`admin`

如果你是在安装向导里手动创建了管理员账号，则以你安装时填写的账号密码为准。

## 5. 进入 AI 后台模块

登录后台后，左侧会看到 `AI` 一级菜单。

第一次进入时，建议先认这几组入口：

- `AI -> 智能助手 -> 配置向导`
- `AI -> AI 配置 -> 服务商配置`
- `AI -> AI 配置 -> 模型管理`
- `AI -> AI 管理 -> 智能体`
- `AI -> AI 管理 -> 工作流`
- `AI -> 知识库 -> 文档库管理`
- `AI -> 知识库 -> 文件导入`

可以先这样理解这些入口的职责：

- `服务商配置`：先接通哪一家 AI 平台
- `模型管理`：再决定具体使用哪个模型
- `智能体`：配置真正对外工作的 AI 角色
- `配置向导`：适合第一次快速跑通
- `知识库`：适合做资料问答
- `工作流`：适合做复杂流程编排

如果你只是想先跑通，最省事的方式是直接用 `快速配置向导`。

## 6. 用向导跑通第一条链路

进入 `AI -> 智能助手 -> 配置向导` 后，推荐先选择场景：`先聊聊天`

这个场景最适合第一次验证系统是否正常，因为它只需要：

- 选一个服务商
- 选一个模型
- 创建一个智能体
- 一键完成


## 7. 对话验证

配置完成后，可以从 `智能体` 列表进入聊天页，或者直接回到 `AI -> 智能助手` 进行体验。

输入一条简单消息，例如：

```text
你好，请介绍一下你自己
```

如果能正常返回内容，说明：

- 服务商已经接通
- 模型已经可用
- 智能体已经正常工作

## 8. 下一步怎么走

根据你的目标继续往下看：

- 想手动逐页配置后台：阅读 [服务商概览](/usage/provider-overview) 和 [模型配置](/usage/model-config)
- 想正式上线部署：阅读 [系统部署](/usage/deployment)
- 想直接用桌面端连接服务：阅读 [桌面端客户端](/usage/desktop)
- 想接聊天平台：阅读 [快速配置向导](/usage/onboarding) 和 [机器人概览](/usage/bot-overview)
- 想做知识问答：阅读 [知识库配置](/usage/rag)
- 想做复杂自动化：阅读 [工作流概览](/usage/workflow/overview)

## 9. 桌面端使用

如果你已经把 Dux AI 服务端跑起来，也可以直接使用桌面端客户端进行连接和对话。

桌面端适合：

- 作为独立聊天入口
- 直接连接现有 Dux AI 服务
- 在桌面端发送图片、文档、视频附件

相关说明见：

- [桌面端客户端](/usage/desktop)


## 10. windows 部署视频

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=116193025334758&bvid=BV1QKN3z1EHJ&cid=36550740085&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 500px"></iframe>

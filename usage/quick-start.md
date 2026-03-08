# 快速开始

这一章的目标很简单：先把 Dux AI 跑起来，再完成第一次对话。

也就是说，你只需要先跑通这条最小链路：

`准备环境 -> 安装项目 -> 进入后台 -> 配置服务商 -> 配置模型 -> 创建智能体 -> 开始对话`


## 1. 环境要求

开始之前，建议先确认：

- `PHP 8.4+`
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

## 5. 进入 AI 后台模块

第一次进入后台后，优先关注这些菜单：

- 服务商
- 模型
- 智能体
- 快速配置向导
- 机器人
- 知识库
- 文件解析
- 工作流

如果你只是想先跑通，最省事的方式是直接用 `快速配置向导`。

## 6. 用向导跑通第一条链路

推荐先选择场景：`先聊聊天`

这个场景最适合第一次验证系统是否正常，因为它只需要：

- 选一个服务商
- 选一个模型
- 创建一个智能体
- 一键完成


## 7. 对话验证

配置完成后，直接进入智能体聊天页，输入一条简单消息，例如：

```text
你好，请介绍一下你自己
```

如果能正常返回内容，说明：

- 服务商已经接通
- 模型已经可用
- 智能体已经正常工作

## 8. 下一步怎么走

根据你的目标继续往下看：

- 想正式上线部署：阅读 [系统部署](/usage/deployment)
- 想接聊天平台：阅读 [快速配置向导](/usage/onboarding) 和 [机器人概览](/usage/bot-overview)
- 想做知识问答：阅读 [知识库配置](/usage/rag)
- 想做复杂自动化：阅读 [工作流概览](/usage/workflow/overview)


## 9. windows 部署视频

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=116193025334758&bvid=BV1QKN3z1EHJ&cid=36550740085&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 500px"></iframe>
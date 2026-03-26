# Bot 模块

这里收的是 `Bot` 模块本身的扩展开发文档。

如果你当前关注的是机器人怎么在后台里创建、绑定和接入钉钉、飞书、企业微信、QQ，请先回到 [机器人使用文档](/usage/bot-overview)。

## 从哪里开始

- 想看主动发送和被动回调：看 [BotService](/extensions/bot/bot-service)
- 想看消息怎么接进 AI 会话：看 [机器人桥接](/extensions/bot/bot-bridge)
- 想扩展新的聊天平台：看 [注册机器人驱动](/extensions/bot/register-bot-driver)

## 这一块和 AI 模块的关系

- `AI 模块`：负责智能体、知识库、能力、工作流和服务商协议
- `Bot 模块`：负责聊天平台接入、消息桥接、主动发送和机器人驱动

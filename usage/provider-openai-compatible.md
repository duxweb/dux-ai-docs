# OpenAI Compatible 服务商

这是最通用、也最推荐优先尝试的一类服务商配置。

如果某个平台兼容 OpenAI Chat Completions 协议，通常可以直接走这一类配置。

## 适合哪些情况

- 你接的是 OpenAI 兼容平台
- 你不想为每个平台单独写一套接入逻辑
- 你希望后续更容易替换模型厂商

## 注册地址 / 控制台入口

如果你是直接使用 OpenAI，可优先参考：

- OpenAI 平台首页：`https://platform.openai.com/`
- API 文档：`https://platform.openai.com/docs/`
- API Key 管理页：`https://platform.openai.com/settings/organization/api-keys`

![OpenAI 平台首页或控制台占位图](/images/provider-openai-console.png)

如果你接的是其他兼容 OpenAI 协议的平台，则思路相同：

1. 进入该平台控制台
2. 注册或登录账号
3. 开通 API 服务
4. 在 API Key 页面创建密钥
5. 获取对应的 Base URL

## 怎么获取 API Key

以 OpenAI 为例：

1. 登录 `platform.openai.com`
2. 进入 `API Keys` 页面
3. 创建新的 Secret Key
4. 复制并妥善保存

![OpenAI 获取 API Key 占位图](/images/provider-openai-api-key.png)

> 建议：API Key 只应保存在服务端配置中，不要直接暴露在浏览器或移动端代码里。

## 你通常需要准备什么

- API Key
- Base URL
- 模型名称

## 推荐使用方式

第一次接入时，建议先用它跑通：

1. 一个服务商
2. 一个对话模型
3. 一个智能体

先确认聊天没问题，再继续接知识库、文件解析、图片或视频能力。

## 常见用途

- 常规对话
- 知识库问答
- 业务助手
- 基础 API 对接

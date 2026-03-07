# 向导 API

向导 API 适合用于新项目初始化或自动化创建一套最小可用配置。

## 常见接口

- `GET /ai/onboarding/meta`
- `POST /ai/onboarding/submit`

## `meta` 返回内容

通常包括：

- 场景列表
- 协议列表
- 已有服务商
- 已有模型
- 能力列表
- 机器人列表
- 机器人平台列表
- 向量库列表
- 存储列表
- 解析配置列表

## `submit` 适合什么场景

- 新项目初始化
- 批量创建基础 AI 配置
- 自动化搭建服务商、模型、智能体关系

## 提交结构大致分组

- `scene`
- `provider`
- `chat_model`
- `embedding_model`
- `agent`
- `im`
- `knowledge`

## 推荐使用方式

如果你只是想快速落一套可用配置，可以优先调用向导 API，再回到后台逐步补细节。

# API 概览

Dux AI 当前接口可以分成两组：

- 对外 API：给前端、小程序、第三方系统、外部服务使用
- 后台管理 API：给管理端页面和自动化配置脚本使用

## 对外 API 入口

当前最核心的对外入口包括：

- `GET /agent/v1/models`
- `POST /agent/v1/chat/completions`
- `POST /agent/v1/files`
- `POST /agent/v1/actions`
- `GET /agent/v1/sessions`
- `POST /agent/v1/sessions`
- `GET /agent/v1/sessions/{id}/messages`
- `PUT /agent/v1/sessions/{id}`
- `DELETE /agent/v1/sessions/{id}`

## 后台管理 API 入口

当前 AI 相关后台资源包括：

- `/ai/provider`
- `/ai/model`
- `/ai/agent`
- `/ai/vector`
- `/ai/parseProvider`
- `/ai/ragProvider`
- `/ai/ragKnowledge`
- `/ai/flow`
- `/ai/session`
- `/ai/flowLog`
- `/ai/flowRun`
- `/ai/onboarding`

## 认证方式

### 对外 API

通常使用：

- `Authorization: Bearer <token>`
- 或 `X-API-Key: <token>`
- 或在 query 中传 `api_key`

当前 API Key 对应的是 `AiToken`，并且会校验：

- 是否存在
- 是否启用
- 是否过期

### 后台管理 API

通常走后台登录态与管理端权限体系，不需要额外走 API Key。

## 返回风格

### 对外聊天接口

大体参考 OpenAI 兼容格式：

- 模型列表返回 `object=list`
- 聊天返回 `chat.completion` 或流式 chunk
- 错误返回 `errorJson`

### 后台管理接口

后台资源接口遵循 Dux 资源风格，适合给管理后台页面和自动化脚本使用。

## 推荐的对接方式

### 如果你在做前端聊天页面

优先使用：

- `POST /agent/v1/chat/completions`
- `GET /agent/v1/sessions`
- `GET /agent/v1/sessions/{id}/messages`

### 如果你在做机器人平台接入

重点关注：

- `/boot/webhook/{code}`

### 如果你在做自动化配置或初始化

重点关注：

- `/ai/onboarding/meta`
- `/ai/onboarding/submit`
- `/ai/provider`
- `/ai/model`
- `/ai/agent`

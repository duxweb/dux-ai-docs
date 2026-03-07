# API 概览

Dux AI 当前接口可以分成两组：

- 对外 API：给前端、小程序、第三方系统、外部服务使用
- 后台管理 API：给管理端页面和自动化配置脚本使用

## 对外 API 入口

当前文档重点只讲 token 风格的这组入口：

- `GET /agent/v1/models`
- `POST /agent/v1/chat/completions`
- `POST /agent/v1/files`
- `POST /agent/v1/actions`
- `GET /agent/v1/sessions`
- `POST /agent/v1/sessions`
- `GET /agent/v1/sessions/{id}/messages`
- `PUT /agent/v1/sessions/{id}`
- `DELETE /agent/v1/sessions/{id}`

## 认证方式

通常使用：

- `Authorization: Bearer <token>`
- 或 `X-API-Key: <token>`
- 或在 query 中传 `api_key`

当前 API Key 对应的是 `AiToken`，并且会校验：

- 是否存在
- 是否启用
- 是否过期

## 返回风格

对外聊天接口大体参考 OpenAI 兼容格式：

- 模型列表返回 `object=list`
- 聊天返回 `chat.completion` 或流式 chunk
- 文件上传返回 `object=file`
- 动作接口返回 `object=action`
- 错误返回 `errorJson`

## 推荐的对接方式

### 如果你在做前端聊天页面

优先使用：

- `POST /agent/v1/chat/completions`
- `GET /agent/v1/sessions`
- `GET /agent/v1/sessions/{id}/messages`

### 如果你要做附件聊天

重点关注：

- `POST /agent/v1/files`

### 如果你要触发会话级动作

重点关注：

- `POST /agent/v1/actions`

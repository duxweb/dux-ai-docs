# 对外聊天接口

这一组接口适合把 Dux AI 当成外部可调用的智能体服务。

## 认证方式

推荐使用：

```http
Authorization: Bearer {token}
```

也支持：

- `X-API-Key: {token}`
- query 参数 `api_key`

## 1. 获取可用模型

```http
GET /agent/v1/models
Authorization: Bearer {token}
```

### 适合用途

- 前端模型选择器
- 校验当前 token 是否配置正确
- 获取模型可用能力与附件支持信息

### 示例返回

```json
{
  "object": "list",
  "data": [
    {
      "id": "customer_service",
      "object": "model",
      "owned_by": "agent",
      "name": "客服助手"
    }
  ]
}
```

## 2. 发起聊天

```http
POST /agent/v1/chat/completions
Authorization: Bearer {token}
Content-Type: application/json
```

### 最小请求示例

```json
{
  "model": "customer_service",
  "messages": [
    {"role": "user", "content": "请介绍一下你们的服务"}
  ],
  "stream": false
}
```

### 流式请求示例

```json
{
  "model": "customer_service",
  "messages": [
    {"role": "user", "content": "帮我整理今天的工作计划"}
  ],
  "stream": true
}
```

### 主要字段

- `model`：当前 token 可访问的智能体编码
- `messages`：对话上下文，格式参考 OpenAI Chat
- `stream`：是否启用流式返回

### 示例返回（非流式）

```json
{
  "id": "chatcmpl_xxx",
  "object": "chat.completion",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "你好，我们可以提供智能体、知识库和工作流能力。"
      },
      "finish_reason": "stop"
    }
  ]
}
```

### 常见错误

#### 缺少 Token

```json
{
  "error": {
    "message": "缺少 Authorization",
    "type": "invalid_request_error"
  }
}
```

#### Token 无效或已过期

```json
{
  "error": {
    "message": "API Key 无效",
    "type": "invalid_request_error"
  }
}
```

#### 模型不可用

```json
{
  "error": {
    "message": "当前未配置可用模型",
    "type": "invalid_request_error"
  }
}
```

## 注意事项

### `model` 不是厂商模型名

这里更常见的是智能体编码或当前 token 对应的智能体映射，不是 `gpt-4.1` 这类底层模型名。

### 智能体主模型必须是聊天模型

图片、视频等能力应该通过工具或工作流调用，而不是直接把聊天接口当作图片/视频接口来用。

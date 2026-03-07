# 会话、文件与动作接口

这组接口用于管理对外聊天会话，以及处理文件上传和会话级动作。

## 1. 获取会话列表

```http
GET /agent/v1/sessions?limit=20&model=customer_service
Authorization: Bearer {token}
```

### 说明

- `model` 可选，用于筛选某个智能体的会话
- `limit` 默认 20，最大 100
- 当列表为空时，系统会自动创建一个默认会话，减少前端首屏空状态

### 典型返回

```json
{
  "object": "list",
  "data": [
    {
      "id": 12,
      "title": "客户咨询"
    }
  ]
}
```

## 2. 创建会话

```http
POST /agent/v1/sessions
Authorization: Bearer {token}
Content-Type: application/json
```

### 请求示例

```json
{
  "model": "customer_service"
}
```

### 返回示例

```json
{
  "object": "session",
  "data": {
    "id": 12,
    "title": "新会话"
  }
}
```

## 3. 获取消息列表

```http
GET /agent/v1/sessions/{id}/messages?limit=50
Authorization: Bearer {token}
```

### 典型返回

```json
{
  "object": "list",
  "data": [
    {
      "id": 100,
      "role": "user",
      "content": "你好"
    },
    {
      "id": 101,
      "role": "assistant",
      "content": "你好，有什么可以帮你？"
    }
  ]
}
```

## 4. 重命名会话

```http
PUT /agent/v1/sessions/{id}
Authorization: Bearer {token}
Content-Type: application/json
```

### 请求示例

```json
{
  "title": "客户咨询 - 2026-03-06"
}
```

## 5. 删除会话

```http
DELETE /agent/v1/sessions/{id}
Authorization: Bearer {token}
```

## 6. 上传文件

```http
POST /agent/v1/files?model=customer_service
Authorization: Bearer {token}
Content-Type: multipart/form-data
```

### 说明

- `model` 可选，不传时按当前 token 的可用模型解析
- 上传成功后，返回的不只是 URL，还会包含系统对文件的理解结果

### 典型返回

```json
{
  "object": "file",
  "data": {
    "filename": "manual.pdf",
    "purpose": "assistants",
    "url": "https://example.com/manual.pdf",
    "mime_type": "application/pdf",
    "media_kind": "file",
    "mode_hint": "auto",
    "parse_mode": "parsed",
    "parsed_text": "文档中的文本内容"
  }
}
```

## 7. 动作接口

```http
POST /agent/v1/actions
Authorization: Bearer {token}
Content-Type: application/json
```

### 请求示例

```json
{
  "session_id": 12,
  "action": "refresh_summary",
  "payload": {}
}
```

### 说明

这组接口适合做会话级动作投递，例如：

- 触发前端自定义动作
- 触发业务事件
- 往会话中追加系统消息或卡片消息

### 返回示例

```json
{
  "object": "action",
  "data": {
    "messages": []
  }
}
```

### 常见错误

#### 会话不存在或无权限

```json
{
  "error": {
    "message": "会话不存在或无权限访问",
    "type": "invalid_request_error"
  }
}
```

#### 缺少动作名

```json
{
  "error": {
    "message": "action 不能为空",
    "type": "invalid_request_error"
  }
}
```

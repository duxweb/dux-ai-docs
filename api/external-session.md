# 会话与消息接口

这组接口用于管理对外聊天会话。

## 1. 获取会话列表

```http
GET /agent/v1/sessions
Authorization: Bearer {token}
```

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
POST /agent/v1/files
Authorization: Bearer {token}
Content-Type: multipart/form-data
```

### 适合用途

- 上传图片、PDF、文档给智能体使用
- 配合附件能力或知识库使用
- 做图片识别、文档理解等前置输入

### 典型返回

```json
{
  "object": "file",
  "data": {
    "filename": "manual.pdf",
    "purpose": "assistants",
    "url": "https://example.com/manual.pdf"
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

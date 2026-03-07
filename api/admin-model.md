# 模型 API

模型 API 用于在服务商之下创建具体模型配置。

## 常见接口

- `GET /ai/model`
- `POST /ai/model`
- `GET /ai/model/{id}`
- `PUT /ai/model/{id}`
- `GET /ai/model/options`
- `GET /ai/model/functionOptions`

## 字段表

| 字段 | 是否必填 | 说明 |
| --- | --- | --- |
| `provider_id` | 是 | 所属服务商 ID |
| `name` | 是 | 模型名称 |
| `model` | 是 | 远端模型名 |
| `type` | 是 | 模型类型 |
| `code` | 否 | 模型标识 |
| `active` | 否 | 是否启用 |
| `description` | 否 | 说明 |
| `dimensions` | 否 | Embedding 维度 |
| `options` | 否 | 扩展配置 |
| `supports_structured_output` | 否 | 是否支持结构化输出 |
| `quota_type` | 否 | 配额类型 |
| `quota_tokens` | 否 | 配额 Token |

## 常见类型

| 类型 | 用途 |
| --- | --- |
| `chat` | 智能体主对话模型 |
| `embedding` | 知识库向量模型 |
| `image` | 图片生成模型 |
| `video` | 视频生成模型 |

## 创建请求示例

```json
{
  "provider_id": 1,
  "name": "主聊天模型",
  "code": "chat_main",
  "model": "deepseek-chat",
  "type": "chat",
  "active": true,
  "description": "默认聊天模型"
}
```

## 成功响应示例

```json
{
  "id": 1,
  "name": "主聊天模型",
  "code": "chat_main",
  "type": "chat",
  "model": "deepseek-chat",
  "provider_id": 1,
  "active": true
}
```

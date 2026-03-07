# 智能体 API

智能体 API 负责管理实际对话主体。

## 常见接口

- `GET /ai/agent`
- `POST /ai/agent`
- `GET /ai/agent/{id}`
- `PUT /ai/agent/{id}`
- `GET /ai/agent/tool`
- `GET /ai/agent/chat/{code}/sessions/{id}/messages`

## 字段表

| 字段 | 是否必填 | 说明 |
| --- | --- | --- |
| `name` | 是 | 智能体名称 |
| `code` | 否 | 智能体编码 |
| `model_id` | 否 | 绑定模型 ID |
| `instructions` | 否 | 系统提示词 |
| `tools` | 否 | 工具列表 |
| `settings` | 否 | 扩展配置 |
| `active` | 否 | 是否启用 |
| `description` | 否 | 说明 |

## `settings` 常见字段

| 字段 | 说明 |
| --- | --- |
| `temperature` | 模型温度 |
| `summary_max_tokens` | 会话摘要最大 Token |
| `summary_messages_keep` | 会话保留消息数量 |
| `debug_enabled` | 是否开启调试 |
| `bot_codes` | 绑定机器人编码列表 |

## 创建请求示例

```json
{
  "name": "客服助手",
  "code": "customer_service",
  "model_id": 1,
  "instructions": "你是一个专业的客服助手，回答要简洁准确。",
  "tools": [],
  "settings": {
    "temperature": 0.7,
    "bot_codes": ["corp_service_bot"]
  },
  "active": true,
  "description": "用于官网和机器人客服"
}
```

## 校验规则

- 智能体主模型应使用 `chat` 类型
- `bot_codes` 不能和其他智能体重复绑定
- 工具列表允许先挂载，后续继续补配置

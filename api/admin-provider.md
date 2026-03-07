# 服务商 API

服务商 API 负责管理模型平台的接入信息。

## 常见接口

- `GET /ai/provider`
- `POST /ai/provider`
- `GET /ai/provider/{id}`
- `PUT /ai/provider/{id}`
- `GET /ai/provider/protocols`

## 字段表

| 字段 | 是否必填 | 说明 |
| --- | --- | --- |
| `name` | 是 | 服务商名称 |
| `protocol` | 是 | 协议类型 |
| `api_key` | 按协议 | API Key，要求该协议需要时必填 |
| `code` | 否 | 调用标识，留空系统自动生成 |
| `base_url` | 否 | 接口地址，留空时部分协议会走默认值 |
| `timeout` | 否 | 请求超时，单位秒 |
| `active` | 否 | 是否启用 |
| `description` | 否 | 说明 |
| `organization` | 否 | 组织标识 |
| `project` | 否 | 项目标识 |
| `icon` | 否 | 图标 |
| `headers` | 否 | 附加请求头 |
| `query_params` | 否 | 附加 Query 参数 |

## 协议获取接口

```http
GET /ai/provider/protocols
```

### 返回重点

| 字段 | 说明 |
| --- | --- |
| `value` | 协议值 |
| `label` | 展示名称 |
| `description` | 协议说明 |
| `default_base_url` | 默认地址 |
| `requires_api_key` | 是否必须填写 API Key |

## 创建请求示例

```json
{
  "name": "DeepSeek 主服务商",
  "code": "deepseek_main",
  "protocol": "deepseek",
  "api_key": "sk-xxx",
  "base_url": "https://api.deepseek.com/v1",
  "timeout": 30,
  "headers": [],
  "query_params": [],
  "active": true,
  "description": "主业务聊天服务商"
}
```

## 成功响应示例

```json
{
  "id": 1,
  "name": "DeepSeek 主服务商",
  "code": "deepseek_main",
  "protocol": "deepseek",
  "base_url": "https://api.deepseek.com/v1",
  "timeout": 30,
  "active": true
}
```

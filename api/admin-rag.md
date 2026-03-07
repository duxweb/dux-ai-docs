# 知识库 API

知识库相关接口覆盖了解析、向量库、知识库配置和知识数据管理。

## 向量库接口

- `GET /ai/vector`
- `POST /ai/vector`
- `GET /ai/vector/drivers`

### 向量库字段表

| 字段 | 是否必填 | 说明 |
| --- | --- | --- |
| `name` | 是 | 向量库名称 |
| `driver` | 是 | 向量库驱动 |
| `code` | 否 | 标识 |
| `options` | 否 | 驱动配置 |
| `active` | 否 | 是否启用 |
| `description` | 否 | 说明 |

## 解析配置接口

- `GET /ai/parseProvider`
- `POST /ai/parseProvider`
- `GET /ai/parseProvider/drivers`
- `POST /ai/parseProvider/{id}/run`

### 解析配置字段表

| 字段 | 是否必填 | 说明 |
| --- | --- | --- |
| `name` | 是 | 配置名称 |
| `provider` | 是 | 解析驱动 |
| `code` | 否 | 标识 |
| `storage_id` | 否 | 关联存储 |
| `config` | 否 | 驱动配置 |
| `active` | 否 | 是否启用 |
| `description` | 否 | 说明 |

## 知识库配置接口

- `GET /ai/ragProvider`
- `POST /ai/ragProvider`
- `GET /ai/ragKnowledge`
- `POST /ai/ragKnowledge`
- `GET /ai/ragKnowledgeData`

### 知识库字段表

| 字段 | 是否必填 | 说明 |
| --- | --- | --- |
| `name` | 是 | 知识库名称 |
| `provider` | 是 | 知识库驱动 |
| `code` | 否 | 标识 |
| `storage_id` | 否 | 存储驱动 ID |
| `vector_id` | 否 | 向量库 ID |
| `embedding_model_id` | 否 | Embedding 模型 ID |
| `config` | 否 | 扩展配置 |
| `description` | 否 | 说明 |

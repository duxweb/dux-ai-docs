# 工作流 API

工作流 API 负责定义、查看和排查工作流执行。

## 工作流定义接口

- `GET /ai/flow`
- `POST /ai/flow`
- `GET /ai/flow/{id}`
- `PUT /ai/flow/{id}`
- `PUT /ai/flow/{id}/flow`
- `GET /ai/flow/{id}/orderedNodes`
- `POST /ai/flow/execute/{code}`

### 工作流字段表

| 字段 | 是否必填 | 说明 |
| --- | --- | --- |
| `name` | 是 | 工作流名称 |
| `code` | 否 | 工作流标识 |
| `description` | 否 | 说明 |
| `status` | 否 | 启用状态 |
| `flow` | 否 | 节点与连线定义 |
| `global_settings` | 否 | 全局配置 |

## 运行与日志接口

- `GET /ai/flowLog`
- `GET /ai/flowRun`
- `GET /ai/flowRun/{id}/snapshot`
- `GET /ai/flowRun/{id}/context`
- `POST /ai/flowRun/{id}/interrupt`
- `POST /ai/flowRun/{id}/resume`
- `GET /ai/scheduler`

## 适合用途

- 工作流定义
- 节点排序与调试
- 运行日志查看
- 调度状态跟踪
- 异步任务排查
- 中断与恢复

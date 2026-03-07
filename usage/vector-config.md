# 向量库配置

向量库负责保存知识库检索时需要的数据。

你可以把它理解成：

> 文档先通过向量模型处理，再放进向量库，后面智能体检索知识时就是从这里查。

## 当前支持哪些向量库

| 驱动值 | 名称 | 适合什么情况 | 推荐程度 |
| --- | --- | --- | --- |
| `file` | FileVectorStore | 本地测试、快速起步 | 本地测试推荐 |
| `memory` | MemoryVectorStore | 临时测试、进程内使用 | 临时验证推荐 |
| `qdrant` | QdrantVectorStore | 更适合正式项目 | 正式上线优先推荐 |
| `chroma` | ChromaVectorStore | 本地或轻量服务化部署 | 轻量部署推荐 |
| `redis` | RedisVectorStore | 已有 Redis 环境时可直接接入 | 已有环境推荐 |
| `mongodb` | MongoDBVectorStore | 已有 MongoDB 环境时可直接接入 | 已有环境推荐 |

## 小白怎么选

### 只想先跑通

优先选：

- `file`
- 或 `memory`

### 准备正式使用

优先考虑：

- `qdrant`
- `chroma`
- `redis`
- `mongodb`

其中最常见、也最适合单独做知识库服务的是 `qdrant`。

## 向量库里的“维度”是什么

有些向量库会让你填写：

- `dimension`

你可以直接理解成：

> 这个向量库准备接收多长的向量数据。

最重要的一点就是：

> 向量库维度最好和向量模型维度保持一致。

如果你不确定怎么填，建议：

1. 先看向量模型支持多少维
2. 如果向量库要求填写，就按向量模型一致的值来填
3. 如果向量库支持自动处理，可以先留空

## 每种向量库大概需要填什么

### File / Memory

通常只需要：

- `topK`

### Qdrant

常见要填：

- `collectionUrl`
- `key`（可选）
- `topK`
- `dimension`（可选）

部署入口：

- 官网：`https://qdrant.tech/`
- 文档：`https://qdrant.tech/documentation/`

### Chroma

常见要填：

- `collection`
- `host`
- `tenant`
- `database`
- `apiKey`（可选）
- `topK`
- `dimension`（可选）

部署入口：

- 官网：`https://www.trychroma.com/`
- 文档：`https://docs.trychroma.com/`

### Redis

常见要填：

- `DSN`
- 或 `Host / Port / Database / Password`
- `Index`
- `Key Prefix`
- `topK`
- `dimension`

部署入口：

- 官网：`https://redis.io/`
- 文档：`https://redis.io/docs/`

### MongoDB

常见要填：

- `URI`
- `Database`
- `Collection`
- `topK`
- `dimension`

部署入口：

- 官网：`https://www.mongodb.com/`
- 文档：`https://www.mongodb.com/docs/`

## 第一次推荐怎么配

### 本地快速验证

- 向量库：`file`
- 向量模型：先选一个可用 Embedding 模型
- 目标：先验证整条链路能跑通

### 准备上线

- 向量库：优先 `qdrant`
- 再补解析配置和知识库配置
- 目标：保证后续扩展和维护更稳定

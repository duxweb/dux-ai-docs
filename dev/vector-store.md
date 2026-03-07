# 向量库服务

`App\Ai\Service\VectorStore` 负责向量库驱动注册与实例创建。

## 方法总览

| 方法 | 主要参数 | 返回值 | 适合用途 |
| --- | --- | --- | --- |
| `registry()` | 无 | `array` | 获取驱动列表 |
| `driverMeta()` | `driver` | `array` | 获取驱动元信息 |
| `make()` | `vector`、`knowledgeId`、`dimensions` | `VectorStoreInterface` | 创建向量库实例 |

## 重点方法说明

### `make()`

```php
$vector = AiVector::query()->findOrFail(1);
$store = VectorStore::make($vector, 1001, 1536);
```

| 参数 | 说明 |
| --- | --- |
| `vector` | 向量库配置对象 |
| `knowledgeId` | 知识库 ID |
| `dimensions` | 向量维度，可选 |

返回值：向量库实例接口。

## 推荐实践

- 向量维度应和 Embedding 模型输出保持一致
- 驱动与知识库配置要分开理解

# 知识库服务

`App\Ai\Service\Rag` 负责知识库同步、导入、检索和删除等能力。

## 方法总览

| 方法 | 主要参数 | 返回值 | 适合用途 |
| --- | --- | --- | --- |
| `syncKnowledge()` | `knowledge` | `RagKnowledge` | 同步知识库 |
| `deleteKnowledge()` | `knowledge`、`deleteRecord` | `bool` | 删除知识库 |
| `clearKnowledge()` | `knowledge` | `bool` | 清空知识库 |
| `importContent()` | `knowledge`、`file`、`type`、`options` | `RagKnowledgeData` | 导入文档 |
| `query()` | `knowledge`、`query`、`limit`、`options` | `array` | 检索内容 |
| `deleteContent()` | `record`、`deleteRecord` | `bool` | 删除内容 |

## 重点方法说明

### `importContent()`

```php
$record = Rag::importContent($knowledgeId, $uploadedFile, 'document');
```

| 参数 | 说明 |
| --- | --- |
| `knowledge` | 知识库 ID、code 或对象 |
| `file` | 上传文件对象 |
| `type` | 内容类型，默认 `document` |
| `options` | 扩展配置 |

### `query()`

```php
$result = Rag::query($knowledgeId, '请总结售后流程', 5);
```

| 参数 | 说明 |
| --- | --- |
| `knowledge` | 知识库 ID、code 或对象 |
| `query` | 查询文本 |
| `limit` | 返回条数 |
| `options` | 扩展配置 |

## 推荐实践

- 先做少量文档验证
- 解析、入库、检索分步调试
- 把知识库能力挂到智能体上之前，先确认检索结果本身正确

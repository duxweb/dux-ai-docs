# 解析服务

`App\Ai\Service\Parse` 负责文件解析能力的统一入口。

## 方法总览

| 方法 | 主要参数 | 返回值 | 适合用途 |
| --- | --- | --- | --- |
| `registry()` | 无 | `array` | 获取驱动列表 |
| `providerMeta()` | `provider` | `array` | 获取驱动元信息 |
| `resolveProvider()` | `identifier` | `ParseProvider` | 解析配置定位 |
| `parseFile()` | `identifier`、`filePath`、`fileType`、`options` | `string` | 解析文件 |

## 重点方法说明

### `parseFile()`

```php
$content = Parse::parseFile($providerId, '/tmp/manual.pdf', 'pdf');
```

| 参数 | 说明 |
| --- | --- |
| `identifier` | 解析配置对象、ID 或 code |
| `filePath` | 文件绝对路径 |
| `fileType` | 文件类型，如 `pdf`、`png` |
| `options` | 扩展参数 |

返回值：解析得到的纯文本。

## 推荐实践

- 文件类型要和真实文件一致
- PDF、图片等复杂文件建议先单独跑解析测试
- 解析失败优先查驱动配置和文件格式

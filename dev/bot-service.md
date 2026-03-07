# BotService

`App\Boot\Service\BotService` 是机器人主动发送和被动回调的核心服务。

## 方法总览

| 方法 | 主要参数 | 返回值 | 适合用途 |
| --- | --- | --- | --- |
| `platformOptions()` | 无 | `array` | 获取平台列表 |
| `sendByCode()` | `code`、`text`、`meta` | `array` | 发送文本消息 |
| `sendMessageByCode()` | `code`、`message` | `array` | 发送结构化消息 |
| `send()` | `bot`、`message` | `array` | 通过实例发送 |
| `handleWebhook()` | `code`、`request` | `array|string` | 处理平台回调 |

## 重点方法说明

### `sendByCode()`

```php
$result = (new BotService())->sendByCode('corp_service_bot', '订单已支付成功');
```

| 参数 | 说明 |
| --- | --- |
| `code` | 机器人编码 |
| `text` | 文本内容 |
| `meta` | 附加元数据 |

### `handleWebhook()`

通常不需要业务代码手动调用，而是由 `/boot/webhook/{code}` 路由自动进入。

## 推荐实践

- 主动通知建议统一走 `sendByCode()`
- 外部平台回调统一走 `handleWebhook()`
- 先保证智能体对话正常，再接机器人联调

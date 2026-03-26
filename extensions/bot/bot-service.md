# 机器人服务

`App\Boot\Service\BotService` 是机器人主动发送和被动回调的核心服务。

## 方法总览

| 方法 | 主要参数 | 返回值 | 适合用途 |
| --- | --- | --- | --- |
| `platformOptions()` | 无 | `array` | 获取平台列表 |
| `sendByCode()` | `code`、`text`、`meta` | `array` | 发送文本消息 |
| `sendMessageByCode()` | `code`、`message` | `array` | 发送结构化消息 |
| `send()` | `bot`、`message` | `array` | 通过实例发送 |
| `handleWebhook()` | `code`、`request` | `array|string` | 处理平台回调 |

## 最常用的两种调用方式

### 1. 发送文本消息

```php
use App\Boot\Service\BotService;

$result = (new BotService())->sendByCode('corp_service_bot', '订单已支付成功');
```

适合：

- 业务提醒
- 简单通知
- 纯文本推送

### 2. 发送结构化消息

如果你要发图片、视频、Markdown 或卡片，建议直接构造 `Message` 再发送。

## 发送图片

```php
use App\Boot\Service\BotService;
use App\Boot\Service\Message;

$message = Message::image('https://example.com/image.jpg', '图片说明');
$result = (new BotService())->sendMessageByCode('corp_service_bot', $message);
```

## 发送视频

```php
use App\Boot\Service\BotService;
use App\Boot\Service\Message;

$message = Message::video('https://example.com/video.mp4', '视频标题');
$result = (new BotService())->sendMessageByCode('corp_service_bot', $message);
```

## 发送 Markdown

```php
use App\Boot\Service\BotService;
use App\Boot\Service\Message;

$message = Message::markdown('通知标题', '这是 **Markdown** 内容');
$result = (new BotService())->sendMessageByCode('corp_service_bot', $message);
```

## 发送卡片消息

```php
use App\Boot\Service\BotService;
use App\Boot\Service\Message;

$message = Message::card([
    'title' => '业务卡片',
    'content' => '这里是卡片内容',
]);
$result = (new BotService())->sendMessageByCode('corp_service_bot', $message);
```

## 主动发送时要注意什么

- 机器人编码必须存在
- 机器人必须启用
- 不是所有平台都同样适合主动推送复杂消息
- 图片和视频最终是否能成功发出，还会受各平台自身限制影响

## 被动回复时要注意什么

`handleWebhook()` 通常不需要业务代码主动调用，而是由 `/boot/webhook/{code}` 自动进入。

如果你在排查机器人回复问题，重点先看：

- 平台消息有没有进入 webhook
- 桥接后有没有创建智能体会话
- 智能体回复有没有继续回写到机器人通道

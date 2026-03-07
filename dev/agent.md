# 智能体服务

`App\Ai\Service\Agent` 是业务开发中最常用的入口，适合在模块代码里直接调用。

## 方法总览

| 方法 | 主要参数 | 返回值 | 适合用途 |
| --- | --- | --- | --- |
| `createSessionByCode()` | `agentCode`、`userType`、`userId` | `array` | 创建会话 |
| `listSessionsByCode()` | `agentCode`、`limit`、`userType`、`userId` | `array` | 获取会话列表 |
| `listMessages()` | `sessionId`、`limit` | `array` | 获取消息列表 |
| `renameSession()` | `sessionId`、`title` | `array` | 修改会话标题 |
| `deleteSession()` | `sessionId` | `void` | 删除会话 |
| `appendMessage()` | `agentId`、`sessionId`、`role`、`content` | `AiAgentMessage` | 手动补写消息 |
| `streamChat()` | `agentCode`、`messages`、`sessionId` | `Generator` | 流式对话 |
| `estimateTokensForText()` | `text` | `int` | 估算 Token |

## 重点方法说明

### `createSessionByCode()`

```php
$session = Agent::createSessionByCode('customer_service');
```

参数说明：

| 参数 | 说明 |
| --- | --- |
| `agentCode` | 智能体编码 |
| `userType` | 用户类型，可选 |
| `userId` | 用户 ID，可选 |

返回值：会话数组。

### `streamChat()`

```php
$messages = [
    ['role' => 'user', 'content' => '请帮我总结今天的待办'],
];

foreach (Agent::streamChat('customer_service', $messages) as $chunk) {
    echo $chunk;
}
```

参数说明：

| 参数 | 说明 |
| --- | --- |
| `agentCode` | 智能体编码 |
| `messages` | OpenAI 风格消息数组 |
| `sessionId` | 现有会话 ID，可选 |
| `userType` | 用户类型，可选 |
| `userId` | 用户 ID，可选 |

返回值：生成器，适合 SSE 或实时输出。

### `appendMessage()`

适合在业务流程、工作流或外部系统执行完成后，把结果补写回会话。

## 推荐实践

- 会话与业务用户尽量绑定
- 主智能体模型应保持为聊天模型
- 图片、视频、多步骤任务优先走能力或工作流

# 注册机器人驱动

如果你要扩展新的机器人平台，当前系统已经支持通过事件注册新的机器人驱动。

## 事件入口

机器人驱动注册事件是：

- `boot.bot.driver`

事件对象是：

- `App\Boot\Event\BotDriverEvent`

## 你需要做什么

通常只需要两步：

1. 实现一个机器人驱动，满足 `BotDriverInterface`
2. 写一个监听器，监听 `boot.bot.driver` 并注册驱动

## 最小注册示例

```php
#[Listener(name: 'boot.bot.driver')]
public function handle(BotDriverEvent $event): void
{
    $event->register(new MyBotDriver());
}
```

## 驱动最少需要实现什么

你的驱动至少需要明确：

- 平台唯一标识 `platform()`
- 平台元信息 `meta()`
- 发送消息 `send()`
- 回调验证 `verifyInbound()`
- 入站消息解析 `parseInbound()`
- 回调回复处理 `handleWebhookReply()`

## `register()` 会做什么

当前事件里的 `register()` 会自动：

- 按 `platform()` 作为唯一键保存驱动
- 读取驱动自己的 `meta()` 作为后台平台展示信息
- 允许你额外传入 `meta` 覆盖默认展示信息

## 什么时候适合这样扩展

适合：

- 新增企业 IM 平台
- 新增社交平台机器人
- 做公司内部自定义机器人渠道
- 替换默认平台实现

## 一个重要约定

如果注册了同名平台，后注册会覆盖前注册。

这意味着你可以：

- 新增平台
- 也可以替换系统默认平台实现

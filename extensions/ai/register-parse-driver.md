# 注册解析驱动

如果你要扩展新的文件解析能力，当前系统已经支持通过事件注册新的解析驱动。

## 事件入口

解析驱动注册事件是：

- `ai.parse.driver`

事件对象是：

- `App\Ai\Event\ParseDriverEvent`

## 你需要做什么

通常只需要两步：

1. 实现一个解析驱动，满足 `DriverInterface`
2. 写一个监听器，监听 `ai.parse.driver` 并注册驱动

## 最小注册示例

```php
#[Listener(name: 'ai.parse.driver')]
public function handle(ParseDriverEvent $event): void
{
    $event->register('my_parse', MyParseDriver::class, MyParseDriver::meta());
}
```

## `register()` 里要传什么

- 驱动标识：例如 `my_parse`
- 驱动类：必须实现 `DriverInterface`
- 驱动元信息：通常来自 `meta()`，用于后台表单展示

## 为什么还要传 `meta()`

因为解析驱动不只是运行时要用，后台“解析配置”页面也要显示：

- 名称
- 描述
- 注册入口
- 配置表单结构

所以元信息必须一起注册进去。

## 适合什么场景

适合：

- 新增 OCR 服务
- 新增 PDF 解析服务
- 新增图片理解驱动
- 新增行业文档解析驱动

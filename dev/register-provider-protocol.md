# 注册服务商协议

如果你要扩展新的服务商协议，当前系统已经支持通过事件注册新的协议元信息。

## 事件入口

服务商协议注册事件是：

- `ai.provider.protocol`

事件对象是：

- `App\Ai\Event\ProviderProtocolEvent`

## 这类注册解决的是什么问题

它主要解决的是：

- 后台服务商表单里要显示新的协议选项
- 向导里要显示新的协议说明
- 默认 Base URL 和是否要求 API Key 要有统一来源

也就是说，这一层主要是“协议元信息注册”，不是直接负责具体运行时调用。

## 最小注册示例

```php
#[Listener(name: 'ai.provider.protocol')]
public function handle(ProviderProtocolEvent $event): void
{
    $event->register([
        'value' => 'my_protocol',
        'label' => 'My Protocol',
        'description' => '自定义协议',
        'default_base_url' => 'https://api.example.com/v1',
        'requires_api_key' => true,
    ]);
}
```

## 一个协议通常至少要提供什么

- `value`：协议值
- `label`：展示名称
- `description`：协议说明
- `default_base_url`：默认地址
- `requires_api_key`：是否必须填写 API Key

## 要注意什么

这一步只负责把协议注册进后台和配置体系。

如果你真的要让这个协议能跑通聊天、图片、视频、Embedding 等能力，后面还要继续接对应的 provider factory 或运行时实现。

## 适合什么场景

- 新增自定义模型协议
- 给现有兼容协议做品牌化入口
- 让插件或应用商店扩展新的协议选项

# 能力扩展

Dux AI 的能力扩展机制，决定了智能体除了“直接回答”之外还能执行哪些动作。

这一页重点回答 4 个问题：

1. 能力是怎么注册进系统的
2. 一个能力定义里通常有哪些字段
3. 返回结构应该怎么组织
4. 什么时候该做成智能体能力，什么时候该放进工作流

## 能力是怎么注册的

当前能力通过事件监听器注册到系统里，核心事件是：

- `ai.capability`

也就是说，你新增一个能力，通常会做一件事：

- 写一个监听器
- 在监听器里向 `AiCapabilityEvent` 注册这个能力

## 最小注册方式

最典型的结构大概是这样：

```php
#[Listener(name: 'ai.capability')]
public function handle(AiCapabilityEvent $event): void
{
    $code = 'my_task';

    $event->register($code, [
        'label' => '我的能力',
        'name' => '我的能力',
        'description' => '这是一个自定义能力',
        'tool' => ['type' => 'function', 'function' => 'my_task'],
        'defaults' => [],
        'settings' => [],
    ]);

    $event->type($code, ['flow', 'agent']);
    $event->output($code, [
        ['name' => 'result', 'label' => '执行结果', 'type' => 'object'],
    ]);
    $event->schema($code, [
        'type' => 'object',
        'properties' => [],
    ]);
    $event->handler($code, new MyCapability());
}
```

## 一个能力定义里通常要写什么

### 1. `register()`

这里主要定义能力的“元信息”和后台配置方式。

常见字段包括：

- `label`：显示名称
- `name`：内部名称，通常和显示名称一致
- `description`：能力说明
- `tool`：工具类型与 function 名称
- `category`：分类
- `nodeType`：节点类型
- `icon` / `color` / `style`：编辑器里的展示样式
- `defaults`：默认值
- `settings`：后台配置项

### 2. `type()`

决定这个能力可以在哪用：

- `agent`
- `flow`

如果你希望两边都能用，就写：

```php
$event->type($code, ['flow', 'agent']);
```

### 3. `output()`

定义这个能力执行完后，会输出哪些字段。

这些字段会影响：

- 工作流里后续节点能引用什么
- 前端能看到什么说明
- 输出节点怎么接值

### 4. `schema()`

定义运行时输入结构。

它更像是能力调用的入参说明，方便系统知道这项能力在执行时支持哪些输入字段。

### 5. `handler()`

这里才是真正执行能力逻辑的地方。

## 异步开关和异步参数怎么定义

有些能力不是立即完成的，例如：

- 视频生成
- 延迟消息
- 通知延迟发送
- 轮询型异步任务

这类能力通常还会在定义里增加一组 `async` 配置。

### 常见异步字段

- `policy`：异步策略
- `enabled`：默认是否启用异步
- `delay_minutes`：延迟多久开始
- `max_attempts`：最大尝试次数

## `policy` 常见含义

### `force_on`

表示这项能力必须走异步。

适合：

- 延迟消息
- 明确就是异步任务的能力

### `optional`

表示这项能力支持异步，但不是强制。

适合：

- 图片生成
- 通知发送
- 某些可以同步也可以异步的动作

## 运行时还可能出现的异步参数

除了定义里的 `async` 元信息，有些能力本身还会暴露运行时参数，例如：

- `poll_interval_minutes`
- `timeout_minutes`
- `delay_minutes`

这类参数通常会在：

- `settings` 里给后台配置用
- `schema` 里给运行时输入用

## 一个最常见的误区

不要把 `async` 配置和 `settings` / `schema` 混成一回事。

建议这样记：

- `async`：描述这项能力的异步策略
- `settings`：描述后台怎么配置它
- `schema`：描述运行时还能传什么

## `settings` 是给谁用的

这是最容易混淆的一点。

- `settings`：给后台配置页用
- `schema`：给运行时输入用

也就是说：

- `settings` 决定用户在后台怎么配置这项能力
- `schema` 决定运行时还能接收哪些输入参数

## `defaults` 是做什么的

`defaults` 主要用于给能力设置默认配置。

例如：

- 默认 `message_role`
- 默认超时时间
- 默认返回条数
- 默认轮询间隔

如果某个能力有合理默认值，建议都放在这里，能减少用户第一次配置的复杂度。

## 返回结构应该怎么写

一个能力返回时，最常见会包含这些部分：

- `status`
- `content`
- `data`
- `input`
- `output`

不过并不是每个能力都必须完全一致，关键是：

- 返回内容要稳定
- 输出字段要和 `output()` 里定义的内容对应得上

## 返回字段最常见的写法

### 简单能力

适合返回：

- `result`
- `summary`
- `status`

### 查询型能力

适合返回：

- `items`
- `count`
- `keyword`
- `summary`

### 执行型能力

适合返回：

- `result`
- `mode`
- `status`
- `summary`

## 什么时候做成智能体能力，什么时候做成工作流能力

### 优先做成智能体能力

适合：

- 单步执行
- 参数不复杂
- 不需要异步恢复
- 结果不用强结构化

### 优先放进工作流

适合：

- 多步骤串联
- 异步任务
- 需要输入输出控制
- 需要日志和排障
- 需要稳定给前端或 API 一个结构化结果

## 推荐从哪些现有能力学习

如果你要照着已有代码扩展，建议先看这些监听器：

- `CapabilityKnowledgeSearchListener`
- `CapabilityHttpTaskListener`
- `CapabilityFunctionCallListener`
- `CapabilityMcpTaskListener`
- `CapabilityImageTaskListener`
- `CapabilityVideoGenerateTaskListener`
- `CapabilityDelayedMessageListener`
- `CapabilityNotifySendListener`

它们分别代表了：

- 查询型能力
- HTTP 能力
- 内部函数能力
- 外部工具能力
- 图片能力
- 视频能力
- 延迟类能力
- 通知类能力

## 一个最实用的建议

第一次新增能力时，不要一开始就把：

- 后台配置
- 运行时参数
- 输出字段
- 智能体使用
- 工作流使用

全部一起做满。

建议顺序是：

1. 先让 `handler()` 能跑通
2. 再补 `output()`
3. 再补 `settings`
4. 最后再开放给 `agent` 和 `flow` 同时使用

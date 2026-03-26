# 事件系统

事件基于 Symfony EventDispatcher，支持 Attribute 自动注册。

## 监听器 Attribute

```php
use Core\Event\Attribute\Listener;

class DemoListener
{
    #[Listener(name: 'demo.created')]
    public function handle($event): void
    {
        // ...
    }
}
```

## 手动注册

```php
use Core\App;

App::event()->addListener('demo.created', function ($event) {
    // ...
});
```

## 系统内置示例

System 模块通过事件注册计划任务：

```php
Core\App::event()->addListener('scheduler.gen', function (SchedulerGenEvent $event) {
    $event->setData(SchedulerService::buildJobs());
});
```

# 日志系统

Dux Lite 使用 Monolog，并通过 `Core\App::log()` 获取日志实例。

```php
use Core\App;

$logger = App::log('app');
$logger->info('something happened', ['foo' => 'bar']);
```

日志文件默认写入 `data/logs`。

# 缓存系统

缓存通过 `Core\App::cache()` 获取，默认使用文件缓存：

```php
use Core\App;

$cache = App::cache();
$cache->set('foo', 'bar', 3600);
```

切换 Redis：在 `config/use.toml` 中设置 `cache.type = "redis"`。

# 分布式锁

通过 `Core\App::lock()` 获取锁实例，类型从 `use.toml` 读取：

```toml
[lock]
type = "semaphore"
```

使用方式：

```php
use Core\App;

$lock = App::lock()->createLock('task:demo', 10);
if ($lock->acquire()) {
    // do something
    $lock->release();
}
```

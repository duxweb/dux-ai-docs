# 服务层开发

当控制器逻辑复杂时，建议拆分到 `Service` 层。

示例：

```php
namespace App\System\Service;

class Stats
{
    public static function calculateRate($current, $previous): float|int
    {
        if (!$current && !$previous) return 0;
        if ($previous == 0) return 100;
        if ($current == 0) return -100;
        return round((($current - $previous) / $previous) * 100, 2);
    }
}
```

使用方式：

```php
$rate = Stats::calculateRate($current, $previous);
```

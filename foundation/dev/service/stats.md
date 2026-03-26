# 统计服务

`App\System\Service\Stats` 提供环比计算方法：

```php
use App\System\Service\Stats;

$rate = Stats::calculateRate($current, $previous);
```

返回值：

- `0`：无变化
- `100`：上期为 0，本期有值
- `-100`：本期为 0
- 其他：百分比（保留两位小数）

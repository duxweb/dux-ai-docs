# 存储服务

存储服务封装于 `App\System\Service\Storage`，根据系统配置选择驱动。

```php
use App\System\Service\Storage;

$storage = Storage::getObject();
$storage->write('path/to/file.txt', 'content');
```

本地存储会自动把根目录指向 `public/`。

# 配置服务

系统配置服务：`App\System\Service\Config`。

## 读取配置

```php
use App\System\Service\Config;

$system = Config::getJsonValue('system', []);
$title = Config::getValue('system.title');
```

## 写入配置

```php
Config::setValue('system.title', '新的标题');
```

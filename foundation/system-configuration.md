# 系统配置

这里说的是存储在数据库里的系统配置，不是 `use.toml` 这类文件配置。

系统配置通常通过 `App\System\Service\Config` 读取：

```php
use App\System\Service\Config;

$title = Config::getValue('system.title');
$system = Config::getJsonValue('system', []);
```

## 常见配置项

- 系统标题、Logo、版权
- 存储配置
- 上传大小和扩展名限制

## 前端配置输出入口

后台前端运行时配置由 `app/System/Web/Manage.php` 输出。

这里会把：

- `use.toml` 中的 `theme` 配置
- 数据库里 `system.*` 相关配置

一起合并后注入到管理端页面。

## 后台管理入口

常见位置包括：

- 系统设置
- 配置参数
- 存储配置

## 区分一下两种配置

- 文件配置：看 [系统配置](/foundation/configuration)
- 数据库存储的系统参数：看当前这一页

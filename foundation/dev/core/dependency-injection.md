# 依赖注入

Dux Lite 使用 PHP-DI 容器，入口为 `Core\App::di()`。

## 获取/注册服务

```php
use Core\App;

// 注册
App::di()->set('foo', new FooService());

// 获取
$foo = App::di()->get('foo');
```

## 常用服务入口

- `App::db()`：数据库连接
- `App::config('use')`：配置读取
- `App::route()`：路由注册
- `App::resource()`：资源注册
- `App::event()`：事件注册

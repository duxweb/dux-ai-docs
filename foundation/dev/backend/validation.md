# 数据验证

使用 `Core\Validator\Validator`：

```php
use Core\Validator\Validator;

$data = Validator::parser($request->getParsedBody(), [
    'username' => ['required', '用户名不能为空'],
    'email' => ['required', 'email', '邮箱格式不正确'],
]);
```

校验失败会抛出 `ExceptionValidator`，由全局错误处理返回 JSON 错误。

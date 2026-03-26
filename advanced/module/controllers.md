# 控制器开发

后台接口推荐使用资源控制器（Resources）。

## 资源控制器

```php
#[Resource(app: 'admin', route: '/system/user', name: 'system.user')]
class User extends Resources
{
    protected string $model = SystemUser::class;

    public function queryMany(Builder $query, ServerRequestInterface $request, array $args): void
    {
        $params = $request->getQueryParams();
        if ($params['keyword']) {
            $query->where('nickname', 'like', '%' . $params['keyword'] . '%');
        }
    }

    public function transform(object $item): array
    {
        return [
            'id' => $item->id,
            'nickname' => $item->nickname,
        ];
    }
}
```

## 自定义 Action

```php
#[Action(methods: 'GET', route: '/permission')]
public function permission(ServerRequestInterface $request, ResponseInterface $response): ResponseInterface
{
    // ...
}
```

## 校验与格式化

- `validator()`：负责校验规则
- `format()`：负责字段映射（避免业务逻辑）

# 用户与权限

权限体系和菜单是绑定的。

核心规则：

- 后台资源控制器通过 `#[Resource(app: 'admin', name: 'xxx')]` 注册权限组
- 资源默认会生成 `list/show/create/edit/store/delete` 等权限
- 菜单的 `name` 必须和权限名称保持一致

## 角色与权限

- 角色权限一般保存在 `system_role.permission`
- 用户权限由用户模型聚合后输出
- `/admin/router` 会按当前用户权限过滤菜单树

## 常用命令

```bash
php dux permission:list
php dux permission:list admin
```

## 资源权限示例

```php
#[Resource(app: 'admin', route: '/system/user', name: 'system.user')]
class User extends Resources
{
    // 会自动生成 system.user.list / system.user.create ...
}
```

## 推荐连着看

- [权限说明](/foundation/permissions)
- [菜单服务](/advanced/service/menu)
- [权限系统](/advanced/backend/permissions)

# 权限系统

权限与资源/路由绑定：

- 资源自动生成权限
- 自定义 `#[Action]` 也会生成权限节点
- 菜单 `name` 与权限一致时自动生效

## 权限列表

```bash
php dux permission:list
```

## 过滤菜单

`/admin/router` 会根据用户权限过滤菜单树（在 `Manage` 控制器中）。
